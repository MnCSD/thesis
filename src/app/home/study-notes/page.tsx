"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, SortDesc } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { NoteCard } from "./components/note-card";
import { EmptyState } from "./components/empty-state";
import { SearchBar } from "./components/search-bar";

const sortOptions = {
  newest: "Newest First",
  oldest: "Oldest First",
  alphabetical: "Alphabetical",
};

export default function StudyNotes() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedNotes, setSelectedNotes] = useState(new Set());
  const { data: user } = useCurrentUser();

  const chats =
    useQuery(api.messages.listChats, user ? { userId: user._id } : "skip") ||
    [];

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredAndSortedChats = chats
    .filter((chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          // @ts-ignore
          return new Date(a.timestamp) - new Date(b.timestamp);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          // @ts-ignore
          return new Date(b.timestamp) - new Date(a.timestamp);
      }
    });

  const handleDelete = () => {
    toast.success(`${selectedNotes.size} notes deleted`);
    setSelectedNotes(new Set());
  };

  const toggleNoteSelection = (chatId: string) => {
    const newSelected = new Set(selectedNotes);
    if (newSelected.has(chatId)) {
      newSelected.delete(chatId);
    } else {
      newSelected.add(chatId);
    }
    setSelectedNotes(newSelected);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-bold text-white"
          >
            Study Notes
          </motion.h1>
          <Link href="/home/chat">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#55DC49]/10 text-[#55DC49] rounded-xl
                hover:bg-[#55DC49]/20 transition-colors duration-300
                flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Note
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 flex flex-col sm:flex-row gap-4"
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white"
                >
                  <SortDesc className="w-4 h-4 mr-2" />
                  {/* @ts-ignore */}
                  {sortOptions[sortBy]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(sortOptions).map(([key, value]) => (
                  <DropdownMenuItem key={key} onClick={() => setSortBy(key)}>
                    {value}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {selectedNotes.size > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg
                  hover:bg-red-500/20 transition-colors duration-300
                  flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete ({selectedNotes.size})
              </motion.button>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {filteredAndSortedChats.length === 0 ? (
            <EmptyState searchQuery={searchQuery} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedChats.map((chat, index) => (
                <NoteCard
                  key={chat._id}
                  chat={chat}
                  index={index}
                  isSelected={selectedNotes.has(chat._id)}
                  onSelect={toggleNoteSelection}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

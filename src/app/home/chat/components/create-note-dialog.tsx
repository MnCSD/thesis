import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag as TagIcon, Plus, BookmarkPlus, Search } from "lucide-react";
import { useCreateNote } from "@/features/notes/use-create-note";
import { Id } from "../../../../../convex/_generated/dataModel";
import { toast } from "sonner";

interface CreateNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedContent: string;
  chatId: Id<"chats">;
  messageId: Id<"messages">;
  userId: Id<"users">;
}

export function CreateNoteDialog({
  isOpen,
  onClose,
  selectedContent,
  chatId,
  messageId,
  userId,
}: CreateNoteDialogProps) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const { create } = useCreateNote();
  const [content, setContent] = useState(selectedContent);

  useEffect(() => {
    setContent(selectedContent);
  }, [selectedContent]);

  const handleAddTag = () => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleCreateNote = async () => {
    if (!title.trim()) {
      toast.error("Please enter a title for your note");
      return;
    }

    try {
      await create({
        userId,
        chatId,
        messageId,
        content,
        title: title.trim(),
        tags: tags.length > 0 ? tags : undefined,
      });

      toast.success("Note created successfully!");
      onClose();
    } catch (_error) {
      toast.error("Failed to create note");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1A1A1A] rounded-2xl p-6 max-w-2xl w-full shadow-2xl border border-[#333333]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <BookmarkPlus className="w-6 h-6 text-[#55DC49]" />
                Create Note
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-[#55DC49]/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#2A2A2A] border border-[#404040] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#55DC49] focus:border-transparent transition-all duration-200"
                  placeholder="Enter note title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {tags.map((t) => (
                    <motion.span
                      key={t}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-[#55DC49]/10 text-[#55DC49] px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                    >
                      <TagIcon className="w-3.5 h-3.5" />
                      {t}
                      <button
                        onClick={() => handleRemoveTag(t)}
                        className="hover:text-red-500 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                      className="w-full bg-[#2A2A2A] border border-[#404040] rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#55DC49] focus:border-transparent transition-all duration-200"
                      placeholder="Add tags..."
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddTag}
                    className="bg-[#55DC49]/10 text-[#55DC49] p-3 rounded-xl hover:bg-[#55DC49]/20 transition-all duration-200"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Selected Content
                </label>
                <div className="bg-[#2A2A2A] border border-[#404040] rounded-xl px-4 py-3 text-gray-300 max-h-[200px] overflow-y-auto custom-scrollbar">
                  <div className="whitespace-pre-wrap break-words leading-relaxed">
                    {content}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCreateNote}
                className="w-full mt-6 px-4 py-3.5 bg-[#55DC49] text-black rounded-xl hover:bg-[#4BC840] transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg shadow-[#55DC49]/20"
              >
                <BookmarkPlus className="w-5 h-5" />
                Create Note
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

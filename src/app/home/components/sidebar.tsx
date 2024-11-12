"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Trophy,
  CircleUser,
  X,
  Plus,
  MessageCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Doc } from "../../../../convex/_generated/dataModel";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { format } from "date-fns";

const navigation = [
  { name: "Dashboard", href: "/home", icon: LayoutDashboard },
  { name: "Topics", href: "/home/topics", icon: BookOpen },
  { name: "Progress", href: "/home/progress", icon: Trophy },
];

interface SidebarProps {
  user?: Doc<"users">;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ user, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const chatId = pathname.split("/").pop();
  const chats =
    useQuery(api.messages.listChats, user ? { userId: user._id } : "skip") ||
    [];

  return (
    <div
      className={`
        fixed md:static w-72 border-r border-[#55DC49]/10 p-6 bg-[#0F0F0F] flex flex-col h-full z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="flex justify-end md:hidden mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="w-8 h-8 text-white hover:bg-[#55DC49]/10 hover:text-white"
        >
          <X className="w-[20px!important] h-[20px!important]" />
        </Button>
      </div>

      <nav className="space-y-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} onClick={onClose}>
              <Button
                variant="ghost"
                className={`
                  w-full h-[56px] justify-start text-lg font-medium
                  transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "bg-[#55DC49]/10 text-[#55DC49]"
                      : "text-gray-400 hover:translate-x-1 hover:text-[#55DC49]"
                  }
                  group relative overflow-hidden rounded-xl
                `}
              >
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-r from-[#55DC49]/10 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}
                />
                <item.icon
                  className={`
                  w-6 h-6 mr-4 transition-all duration-300
                  ${isActive ? "text-[#55DC49]" : "group-hover:text-[#55DC49]"}
                  group-hover:scale-110 group-hover:rotate-3
                `}
                />
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-[#55DC49] rounded-r" />
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Chat Section */}
      <div className="mt-8 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#55DC49] font-medium flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Your Chats
          </h2>
          <Link href="/home/chat">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-[#55DC49]/10 text-[#55DC49] hover:bg-[#55DC49]/20 transition-colors duration-300"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-2">
          <AnimatePresence>
            {chats.map((chat, index) => (
              <motion.div
                key={chat._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/home/chat/${chat.uuid}`} onClick={onClose}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      group p-4 rounded-xl transition-all duration-300
                      ${
                        chatId === chat.uuid
                          ? "bg-[#55DC49]/10 text-[#55DC49] shadow-[inset_0_0_0_1px_rgba(85,220,73,0.2)]"
                          : "text-gray-400 hover:bg-[#55DC49]/5"
                      }
                      relative overflow-hidden backdrop-blur-sm
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#55DC49]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                          <MessageSquare
                            className={`w-4 h-4 ${
                              chatId === chat.uuid
                                ? "text-[#55DC49]"
                                : "group-hover:text-[#55DC49]"
                            } transition-colors duration-300 transform group-hover:rotate-[-8deg]`}
                          />
                        </div>
                        <span className="font-medium text-sm truncate flex-1 group-hover:translate-x-0.5 transition-transform duration-300">
                          {chat.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 ml-7 group-hover:text-gray-400 transition-colors duration-300">
                        <Clock className="w-3 h-3" />
                        <span>
                          {/* @ts-ignore */}
                          {format(new Date(chat.timestamp), "MMM d, h:mm a")}
                        </span>
                      </div>
                    </div>
                    {chatId === chat.uuid && (
                      <motion.div
                        layoutId="activeChat"
                        className="absolute left-0 top-0 w-1 h-full bg-[#55DC49] rounded-r"
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Account Section */}
      <div className="pt-4 mt-4 border-t border-[#55DC49]/10">
        <Link href="/home/account" onClick={onClose}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-3 rounded-xl text-gray-400 hover:text-[#55DC49] group relative overflow-hidden
              hover:bg-[#55DC49]/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              {user?.image ? (
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#55DC49]/20">
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#55DC49]/10 flex items-center justify-center">
                  <CircleUser className="w-6 h-6 text-[#55DC49]" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {user?.name || "Account"}
                </span>
                <span className="text-xs text-gray-500">View Profile</span>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

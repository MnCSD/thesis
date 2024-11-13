"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

const colors = [
  "bg-yellow-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-pink-100",
  "bg-purple-100",
];

interface NoteCardProps {
  chat: any;
  index: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function NoteCard({ chat, index, isSelected, onSelect }: NoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: Math.random() * 4 - 2 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
      }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
      className="relative group"
    >
      <div
        className="absolute -right-2 -top-2 z-10"
        onClick={(e) => {
          e.preventDefault();
          onSelect(chat._id);
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isSelected ? 1 : 0.8,
            opacity: isSelected ? 1 : 0,
          }}
          whileHover={{ opacity: 1 }}
          className={`w-6 h-6 rounded-full border-2 cursor-pointer
            ${
              isSelected
                ? "bg-[#55DC49] border-[#55DC49]"
                : "bg-white/10 border-white/20"
            }
          `}
        />
      </div>

      <Link href={`/home/chat/${chat.uuid}`}>
        <div
          className={`
            ${colors[index % colors.length]} p-6 rounded-lg
            transform transition-all duration-300
            hover:translate-y-[-5px]
            relative
            min-h-[200px]
            flex flex-col
            shadow-lg
            backdrop-blur-sm
            ${isSelected ? "opacity-75" : ""}
          `}
          style={{
            backgroundImage: "url('/paper-texture.png')",
            backgroundBlendMode: "multiply",
          }}
        >
          {/* Fold Effect */}
          <div
            className="absolute top-0 right-0 w-0 h-0 
            border-t-[20px] border-t-black/10
            border-l-[20px] border-l-transparent
            group-hover:border-t-black/20
            transition-colors duration-300"
          />

          <div className="flex-1">
            <h3
              className="text-gray-800 font-semibold text-lg mb-2 
              line-clamp-2 leading-tight"
            >
              {chat.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {chat.lastMessage || "Start your learning journey..."}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs mt-4">
            <Clock className="w-3 h-3" />
            <span>{format(new Date(chat.timestamp), "MMM d, h:mm a")}</span>
          </div>

          {/* Pin Effect */}
          <motion.div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2
              w-6 h-6 bg-red-400 rounded-full shadow-md
              before:content-[''] before:absolute before:top-1/2 before:left-1/2
              before:-translate-x-1/2 before:-translate-y-1/2
              before:w-2 before:h-2 before:bg-red-600 before:rounded-full"
            whileHover={{ scale: 1.2, rotate: 10 }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface NoteContentProps {
  title: string;
  content: string;
}

export function NoteContent({ title, content }: NoteContentProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-white mb-4"
      >
        {title}
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="prose prose-invert max-w-none"
      >
        <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
}

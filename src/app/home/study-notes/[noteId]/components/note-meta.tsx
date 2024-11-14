"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import { format } from "date-fns";

interface NoteMetaProps {
  timestamp: number;
  tags?: string[];
}

export function NoteMeta({ timestamp, tags }: NoteMetaProps) {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-4 text-white/60 text-sm mb-6"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {format(new Date(timestamp), "MMMM d, yyyy 'at' h:mm a")}
        </div>
      </motion.div>

      {tags && tags.length > 0 && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#55DC49]/10 text-[#55DC49] text-sm"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}
    </>
  );
}

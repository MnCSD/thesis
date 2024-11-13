"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface EmptyStateProps {
  searchQuery: string;
}

export function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center py-20 text-white/60"
    >
      <BookOpen className="w-16 h-16 mb-4 animate-pulse" />
      <h3 className="text-xl font-semibold mb-2">No notes found</h3>
      <p className="text-sm">
        {searchQuery
          ? "Try adjusting your search query"
          : "Start by creating your first study note"}
      </p>
    </motion.div>
  );
}

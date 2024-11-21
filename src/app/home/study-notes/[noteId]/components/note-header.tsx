"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NoteHeaderProps {
  noteId: string;
  //   onDelete: () => Promise<void>;
  onEdit: () => void;
}

export function NoteHeader({ onEdit }: NoteHeaderProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between mb-8"
    >
      <Link href="/home/study-notes">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Notes
        </Button>
      </Link>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 hover:text-white"
          onClick={onEdit}
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Edit
        </Button>
        <Button
          variant="ghost"
          className="text-red-500 hover:bg-red-500/10 hover:text-red-500"
          //   onClick={onDelete}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { BookmarkPlus, X } from "lucide-react";

interface SelectionOverlayProps {
  text: string;
  onClear: () => void;
}

export function SelectionOverlay({ onClear }: SelectionOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-[#55DC49] text-black rounded-xl shadow-lg shadow-[#55DC49]/20 flex items-center gap-2 px-4 py-2.5"
    >
      <BookmarkPlus className="w-4 h-4" />
      <span className="text-sm font-medium">Add to Notes</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onClear();
        }}
        className="ml-2 p-1 hover:bg-black/10 rounded-full transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </motion.button>
    </motion.div>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Pencil, Eraser, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 150) + "px";
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
      setIsWriting(false);
      setIsFocused(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="sticky bottom-0 z-20 pb-4 pt-2"
    >
      <motion.div
        animate={{
          boxShadow: isFocused
            ? "0 0 20px rgba(85, 220, 73, 0.2), inset 0 0 80px rgba(85, 220, 73, 0.03)"
            : "0 0 15px rgba(0, 0, 0, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.1)",
        }}
        className="relative rounded-xl bg-[#1A1A1A] border border-[#333333] transition-all duration-300 md:max-w-2xl mx-auto w-[80%] md:w-[unset]"
      >
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <div className="absolute left-3 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setIsWriting(!isWriting)}
              disabled={disabled}
              className={`p-1.5 rounded-lg transition-colors ${
                isWriting
                  ? "text-[#55DC49] bg-[#55DC49]/10"
                  : "text-gray-500 hover:text-[#55DC49] hover:bg-[#55DC49]/5"
              } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Pencil className="h-4 w-4" />
            </motion.button>
            <AnimatePresence>
              {message && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setMessage("")}
                  disabled={disabled}
                  className={`p-1.5 rounded-lg text-gray-500 hover:text-red-500 hover:bg-red-500/5 ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Eraser className="h-4 w-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 relative">
            <AnimatePresence>
              {isFocused && !message && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute left-0 top-[5px] text-xs text-gray-400 pointer-events-none flex items-center gap-1 pl-3"
                >
                  <Sparkles className="w-3 h-3 text-[#55DC49]" />
                  Share your thoughts or ask a question...
                </motion.div>
              )}
            </AnimatePresence>

            <motion.textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => {
                setIsWriting(true);
                setIsFocused(true);
              }}
              onBlur={() => setIsFocused(false)}
              placeholder={
                disabled ? "Please wait..." : "Write on your notebook..."
              }
              disabled={disabled}
              className={`w-full bg-transparent text-[#55DC49] pt-[26px] pl-12 pr-12 py-2.5 focus:outline-none placeholder:text-gray-500
                s resize-none leading-relaxed h-[70px!important]
                ${isWriting ? "writing-cursor" : ""}
                ${disabled ? "opacity-50" : ""}
                font-handwriting transition-all duration-300`}
              style={{
                backgroundImage: "none",
                fontFamily: '"Kalam", cursive',
                fontSize: "1.125rem",
                lineHeight: "1.5",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={!message.trim() || disabled}
            className={`absolute right-3 p-1.5 rounded-lg transition-all ${
              message.trim() && !disabled
                ? "text-[#55DC49] hover:bg-[#55DC49]/10"
                : "text-gray-500"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Send className="h-4 w-4" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

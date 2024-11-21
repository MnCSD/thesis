import { motion } from "framer-motion";
import { format } from "date-fns";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BookmarkPlus, Check } from "lucide-react";
import Figure from "../../../images/teacher-3d.png";
import { formatContent } from "@/app/utils/format-content";
import { Id } from "../../../../../convex/_generated/dataModel";
import { CodeBlock } from "./code-block";

export interface SelectedBlock {
  content: string;
  type: string;
  language?: string;
  key?: string;
  items?: Array<{
    type: "list-item" | "text";
    number?: string;
    content: string;
  }>;
  number?: number | string;
}

interface Message {
  id: Id<"messages">;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  difficulty?: string;
}

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
  onSelect?: (messageId: Id<"messages">, selectedText: string) => void;
  isSelected?: boolean;
}

export const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.03,
    },
  }),
};

export function ChatMessage({
  message,
  isLoading,
  onSelect,
  isSelected,
}: ChatMessageProps) {
  const isAI = message.sender === "ai";
  const [_isWriting, setIsWriting] = useState(true);
  const [selectedBlocks, setSelectedBlocks] = useState<SelectedBlock[]>([]);
  const [isHoveringNote, setIsHoveringNote] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const formattedContent = isAI
    ? formatContent(message.content)
    : [{ type: "paragraph", content: message.content, key: "user" }];

  const totalWords = message.content.split(" ").length;
  const totalAnimationTime = totalWords * 0.03 + 0.5;

  useEffect(() => {
    if (isAI && !isLoading) {
      const timer = setTimeout(
        () => setIsWriting(false),
        totalAnimationTime * 1000
      );
      return () => clearTimeout(timer);
    }
  }, [isAI, isLoading, totalAnimationTime]);

  const handleNoteClick = () => {
    if (selectionMode && selectedBlocks.length > 0) {
      const combinedContent = selectedBlocks
        .map((block) => block.content)
        .join("\n\n");
      onSelect?.(message.id, combinedContent);
      setSelectionMode(false);
      setSelectedBlocks([]);
    } else {
      setSelectionMode(true);
      setSelectedBlocks([]);
    }
  };

  const handleBlockSelect = (content: string, type: string) => {
    if (!selectionMode) return;

    const blockIndex = selectedBlocks.findIndex((b) => b.content === content);
    if (blockIndex > -1) {
      setSelectedBlocks((blocks) => blocks.filter((_, i) => i !== blockIndex));
    } else {
      setSelectedBlocks((blocks) => [...blocks, { content, type }]);
    }
  };

  const isBlockSelected = (content: string) => {
    return selectedBlocks.some((block) => block.content === content);
  };

  const renderBlock = (block: SelectedBlock) => {
    if (block.type === "code") {
      return (
        <div
          onClick={() => handleBlockSelect(block.content, "code")}
          className={`relative group cursor-pointer ${
            selectionMode
              ? "hover:ring-2 hover:ring-[#55DC49]/50 rounded-lg"
              : ""
          } ${isBlockSelected(block.content) ? "ring-2 ring-[#55DC49] bg-[#55DC49]/10" : ""}`}
        >
          <CodeBlock
            key={block.content}
            content={block.content}
            language={block.language as string}
          />
          {selectionMode && (
            <div
              className={`absolute right-2 top-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                isBlockSelected(block.content)
                  ? "bg-[#55DC49] text-black"
                  : "bg-[#2A2A2A] border-2 border-[#55DC49]/50"
              }`}
            >
              {isBlockSelected(block.content) && <Check className="w-4 h-4" />}
            </div>
          )}
        </div>
      );
    }

    if (block.type === "numbered-list") {
      return (
        <div key={block.key} className="space-y-2">
          {block.items?.map((item: SelectedBlock, i: number) => (
            <motion.div
              key={i}
              onClick={() => handleBlockSelect(item.content, "list-item")}
              className={`flex gap-2 p-2 rounded-lg cursor-pointer ${
                selectionMode ? "hover:bg-[#55DC49]/10" : ""
              } ${isBlockSelected(item.content) ? "bg-[#55DC49]/10 ring-2 ring-[#55DC49]" : ""}`}
            >
              <span className="text-[#E8E8E8] opacity-90 chalk-dust">
                {item.number}.
              </span>
              <span className="text-[#E8E8E8] opacity-90 chalk-dust flex-1">
                {item.content}
              </span>
              {selectionMode && (
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isBlockSelected(item.content)
                      ? "bg-[#55DC49] text-black"
                      : "bg-[#2A2A2A] border-2 border-[#55DC49]/50"
                  }`}
                >
                  {isBlockSelected(item.content) && (
                    <Check className="w-4 h-4" />
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <motion.div
        key={block.key}
        onClick={() => handleBlockSelect(block.content, "paragraph")}
        className={`relative text-[#E8E8E8] opacity-90 chalk-dust leading-relaxed p-2 rounded-lg ${
          selectionMode ? "cursor-pointer hover:bg-[#55DC49]/10" : ""
        } ${isBlockSelected(block.content) ? "bg-[#55DC49]/10 ring-2 ring-[#55DC49]" : ""}`}
      >
        <div className="flex gap-2">
          <p className="flex-1">{block.content}</p>
          {selectionMode && (
            <div
              className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                isBlockSelected(block.content)
                  ? "bg-[#55DC49] text-black"
                  : "bg-[#2A2A2A] border-2 border-[#55DC49]/50"
              }`}
            >
              {isBlockSelected(block.content) && <Check className="w-4 h-4" />}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={messageRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${isAI ? "justify-start" : "justify-end"} ${
        isAI ? "pl-0 pr-20" : "pl-20 pr-0"
      } relative group`}
    >
      {isAI && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="relative w-[120px] h-[140px] mr-4 flex-shrink-0"
        >
          <Image
            src={Figure}
            alt="AI Teacher"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 0.95, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: isAI ? 0.2 : 0,
        }}
        className={`max-w-[70%] rounded-xl px-6 py-4 relative ${
          isAI
            ? "bg-[#2A2A2A] shadow-[0_0_15px_rgba(0,0,0,0.2),inset_0_0_80px_rgba(0,0,0,0.3)] border-2 border-[#404040] group-hover:border-[#55DC49]/30 transition-all duration-300"
            : "bg-transparent"
        } ${isSelected ? "ring-2 ring-[#55DC49] ring-opacity-50" : ""} ${
          selectionMode ? "ring-2 ring-[#55DC49]/30" : ""
        }`}
        style={
          isAI
            ? {
                backgroundImage:
                  "radial-gradient(circle at center, #2A2A2A 0%, #222222 100%)",
                boxShadow:
                  "inset 0 0 50px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.2)",
              }
            : {}
        }
      >
        {isAI && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2"
          >
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setIsHoveringNote(true)}
                onHoverEnd={() => setIsHoveringNote(false)}
                onClick={handleNoteClick}
                className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  selectionMode
                    ? selectedBlocks.length > 0
                      ? "bg-[#55DC49] text-black"
                      : "bg-[#55DC49]/20 text-[#55DC49]"
                    : "bg-[#55DC49]/10 border-2 border-[#55DC49]/20 text-[#55DC49] hover:bg-[#55DC49]/20 hover:border-[#55DC49]/30"
                }`}
              >
                {selectionMode && selectedBlocks.length > 0 ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <BookmarkPlus className="w-5 h-5 transform transition-all duration-300 group-hover:scale-110" />
                )}
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  opacity: isHoveringNote ? 1 : 0,
                  scale: isHoveringNote ? 1 : 0.8,
                  x: isHoveringNote ? 0 : 10,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute left-full ml-3 top-1 -translate-y-1/2 px-3 py-2 bg-[#55DC49] text-black text-sm font-medium rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
              >
                {selectionMode
                  ? selectedBlocks.length > 0
                    ? "Create note"
                    : "Select content"
                  : "Start selecting"}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#55DC49] rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {selectionMode && selectedBlocks.length > 0 && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#55DC49] text-black rounded-full px-3 py-1 text-sm font-medium">
            {selectedBlocks.length} block{selectedBlocks.length > 1 ? "s" : ""}{" "}
            selected
          </div>
        )}

        <div
          className={`text-lg ${
            isAI
              ? "font-chalk chalk-effect"
              : "text-[#55DC49] font-handwriting writing-animation"
          }`}
        >
          {isAI ? (
            <motion.div className="space-y-4">
              {isLoading ? (
                <motion.span className="inline-block text-[#E8E8E8] opacity-90 chalk-dust">
                  Thinking...
                </motion.span>
              ) : (
                formattedContent.map((block: SelectedBlock) =>
                  renderBlock(block)
                )
              )}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="leading-relaxed"
            >
              {message.content}
            </motion.p>
          )}
        </div>

        {message.difficulty && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-sm text-[#55DC49] opacity-60"
          >
            Difficulty: {message.difficulty}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isLoading ? 0 : totalAnimationTime }}
          className={`text-xs mt-2 block ${
            isAI ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {format(message.timestamp, "HH:mm")}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { ChalkPen } from "./chalk-pen";
import { Copy, Check, Code2 } from "lucide-react";
import Figure from "../../../images/teacher-3d.png";
import { formatContent } from "@/app/utils/format-content";
import { Id } from "../../../../../convex/_generated/dataModel";

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
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.03,
    },
  }),
};

function CodeBlock({
  content,
  language,
}: {
  content: string;
  language: string;
}) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative my-4 rounded-lg overflow-hidden transform transition-all duration-300"
      style={{
        background:
          "linear-gradient(145deg, rgba(42,42,42,0.9) 0%, rgba(28,28,28,0.95) 100%)",
        boxShadow: isHovered
          ? "0 8px 30px rgba(85,220,73,0.2), 0 0 0 1px rgba(85,220,73,0.1), inset 0 0 80px rgba(85,220,73,0.03)"
          : "0 4px 20px rgba(0,0,0,0.2), inset 0 0 60px rgba(0,0,0,0.2)",
        transform: isHovered
          ? "scale(1.02) translateY(-2px)"
          : "scale(1) translateY(0)",
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(0deg, rgba(85,220,73,0.1) 0%, transparent 100%)",
            "linear-gradient(90deg, rgba(85,220,73,0.1) 0%, transparent 100%)",
            "linear-gradient(180deg, rgba(85,220,73,0.1) 0%, transparent 100%)",
            "linear-gradient(270deg, rgba(85,220,73,0.1) 0%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="flex justify-between items-center px-4 py-2"
        style={{
          background: isHovered
            ? "linear-gradient(90deg, rgba(85,220,73,0.1) 0%, rgba(42,42,42,0.9) 100%)"
            : "linear-gradient(90deg, rgba(42,42,42,0.9) 0%, rgba(28,28,28,0.95) 100%)",
          borderBottom: "1px solid rgba(85,220,73,0.1)",
        }}
      >
        <span className="text-sm text-[#55DC49] flex items-center gap-2 font-mono">
          <Code2 className="h-4 w-4" />
          <span className="opacity-80">{language}</span>
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="p-1.5 rounded-md transition-all duration-300 relative group"
          style={{
            background: copied ? "rgba(85,220,73,0.1)" : "transparent",
            border: "1px solid rgba(85,220,73,0.1)",
          }}
        >
          {copied ? (
            <Check className="h-4 w-4 text-[#55DC49]" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400 group-hover:text-[#55DC49] transition-colors duration-300" />
          )}
          <motion.span
            initial={false}
            animate={{
              opacity: copied ? 1 : 0,
              y: copied ? -20 : 0,
            }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-[#55DC49] whitespace-nowrap bg-[rgba(85,220,73,0.1)] px-2 py-1 rounded"
          >
            Copied!
          </motion.span>
        </motion.button>
      </motion.div>

      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-300 whitespace-pre font-mono leading-relaxed">
            {content.split("\n").map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-[rgba(85,220,73,0.03)] px-2 -mx-2 rounded"
              >
                {line}
              </motion.div>
            ))}
          </code>
        </pre>

        <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[rgba(85,220,73,0.1)]" />
        <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[rgba(85,220,73,0.1)]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[rgba(85,220,73,0.1)]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[rgba(85,220,73,0.1)]" />
      </div>
    </motion.div>
  );
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  const isAI = message.sender === "ai";
  const [isWriting, setIsWriting] = useState(true);
  const formattedContent = isAI
    ? formatContent(message.content)
    : [{ type: "paragraph", content: message.content, key: "user" }];

  const totalWords = message.content.split(" ").length;
  const totalAnimationTime = totalWords * 0.03 + 0.5;

  if (isAI && !isLoading) {
    setTimeout(() => setIsWriting(false), totalAnimationTime * 1000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${isAI ? "justify-start" : "justify-end"} ${
        isAI ? "pl-0 pr-20" : "pl-20 pr-0"
      }`}
    >
      {isAI && (
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
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
              alt="3D Teacher"
              className="object-contain"
              fill
              sizes="120px"
            />
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ scale: 0, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: isAI ? 0.2 : 0,
        }}
        className={`max-w-[70%] rounded-lg px-6 py-4 relative ${
          isAI
            ? "bg-[#2A2A2A] shadow-[0_0_15px_rgba(0,0,0,0.2),inset_0_0_80px_rgba(0,0,0,0.3)] border-2 border-[#404040]"
            : "bg-transparent"
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
        {isAI && (isWriting || isLoading) && <ChalkPen isVisible={true} />}
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
                formattedContent.map((block: any) => {
                  if (block.type === "code") {
                    return (
                      <CodeBlock
                        key={block.key}
                        content={block.content}
                        language={block.language}
                      />
                    );
                  }

                  if (block.type === "numbered-list") {
                    return (
                      <div key={block.key} className="space-y-2">
                        {block.items.map((item: any, i: number) => (
                          <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            className="flex gap-2"
                          >
                            <span className="text-[#E8E8E8] opacity-90 chalk-dust">
                              {item.number}
                            </span>
                            <span className="text-[#E8E8E8] opacity-90 chalk-dust">
                              {item.content}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    );
                  }

                  return (
                    <motion.p
                      key={block.key}
                      className="text-[#E8E8E8] opacity-90 chalk-dust leading-relaxed"
                    >
                      {block.content
                        .split(" ")
                        .map((word: string, i: number) => (
                          <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            className="inline-block mr-2"
                          >
                            {word}
                          </motion.span>
                        ))}
                    </motion.p>
                  );
                })
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

import React, { useState, useEffect } from "react";
import { X, Sparkles, BookmarkPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuestionExplanation } from "@/app/utils/ai-tutor";
import { formatContent } from "@/app/utils/format-content";
import { toast } from "sonner";
import {
  CodeBlock,
  textVariants,
} from "@/app/home/chat/components/chat-message";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Id } from "../../../../../../../convex/_generated/dataModel";
import { useCreateNote } from "@/features/notes/use-create-note";

interface AiTutorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  context: string;
  chatId: Id<"chats">;
  messageId: Id<"messages">;
  tags: string[];
}

export function AiTutorPopup({
  isOpen,
  onClose,
  question,
  context,
  chatId,
  messageId,
  tags,
}: AiTutorPopupProps) {
  const [explanation, setExplanation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const formattedContent = formatContent(explanation);
  const { data: user } = useCurrentUser();
  const { mutate: createNote, isPending: isSaving } = useCreateNote();

  useEffect(() => {
    if (isOpen && question) {
      setIsLoading(true);
      getQuestionExplanation(question, context)
        .then((response) => {
          setExplanation(response);
          setIsLoading(false);
        })
        .catch(() => {
          setExplanation("Failed to generate explanation. Please try again.");
          setIsLoading(false);
        });
    }
  }, [isOpen, question, context]);

  const handleSaveNote = async () => {
    console.log("Saving note...");
    if (!user) {
      toast.error("You must be logged in to save notes");
      return;
    }

    try {
      await createNote(
        {
          userId: user._id,
          chatId,
          messageId,
          content: explanation,
          title: question,
          tags,
        },
        {
          onSuccess: () => {
            console.log("Saved!");
            toast.success("Note saved successfully!");
          },
          onError: () => {
            toast.error("Failed to save note");
          },
        }
      );
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-4 z-50 overflow-hidden md:right-10 md:top-[45%] md:-translate-x-1/2 md:w-full md:max-w-3xl md:inset-auto"
          >
            <div className="relative h-full md:h-[450px]">
              <div className="h-full overflow-auto rounded-xl bg-[#1A1A1A] shadow-2xl shadow-[#55DC49]/10 md:max-h-[85vh]">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-[#1A1A1A] border-b border-[#55DC49]/10 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#55DC49]/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#55DC49]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        AI Tutor Explanation
                      </h3>
                    </div>
                    <button
                      onClick={onClose}
                      className="rounded-lg p-2 hover:bg-white/5 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <div className="bg-[#232323] rounded-lg p-4 border border-[#55DC49]/10">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Question:
                    </h4>
                    <p className="text-white">{question}</p>
                  </div>

                  <div className="bg-[#232323] rounded-lg p-4 border border-[#55DC49]/10">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Explanation:
                    </h4>
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
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-[#1A1A1A] border-t border-[#55DC49]/10 p-4 flex justify-between items-center">
                  <button
                    onClick={handleSaveNote}
                    disabled={isLoading || isSaving}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
                    bg-[#232323] hover:bg-[#2a2a2a] text-white border border-[#55DC49]/20 
                    transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <BookmarkPlus className="w-4 h-4" />
                    {isSaving ? "Saving..." : "Save to Notes"}
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-[#55DC49] hover:bg-[#3AA831] text-black rounded-lg 
                    font-medium transition-colors"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

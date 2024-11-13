import React, { useState, useEffect } from "react";
import { X, Sparkles, Loader2, BookmarkPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuestionExplanation } from "@/app/utils/ai-tutor";

interface AiTutorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  context: string;
}

export function AiTutorPopup({
  isOpen,
  onClose,
  question,
  context,
}: AiTutorPopupProps) {
  const [explanation, setExplanation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

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
            className="fixed inset-4 z-50 overflow-hidden md:left-1/2 md:top-[45%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:inset-auto"
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
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 text-[#55DC49] animate-spin" />
                      </div>
                    ) : (
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 whitespace-pre-line">
                          {explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-[#1A1A1A] border-t border-[#55DC49]/10 p-4 flex justify-between items-center">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
                    bg-[#232323] hover:bg-[#2a2a2a] text-white border border-[#55DC49]/20 
                    transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    <BookmarkPlus className="w-4 h-4" />
                    Save to Notes
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

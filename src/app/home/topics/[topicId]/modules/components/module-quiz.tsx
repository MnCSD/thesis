import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleQuizProps {
  question: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer: number | null;
  hasAnswered: boolean;
  onAnswerSelect: (index: number) => void;
  onAnswerSubmit: () => void;
  onAiTutorOpen: () => void;
}

export function ModuleQuiz({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  hasAnswered,
  onAnswerSelect,
  onAnswerSubmit,
  onAiTutorOpen,
}: ModuleQuizProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 p-6 bg-[#1A1A1A] rounded-lg border border-[#55DC49]/20"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#55DC49]" />
          Knowledge Check
        </h4>
        <Button
          onClick={onAiTutorOpen}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#55DC49]/10 hover:bg-[#55DC49]/20 
            text-[#55DC49] rounded-lg border border-[#55DC49]/20 hover:border-[#55DC49]/30 
            transition-colors duration-300"
        >
          <Brain className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-gray-300 mb-4">{question}</p>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !hasAnswered && onAnswerSelect(index)}
            className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
              selectedAnswer === index
                ? hasAnswered
                  ? index === correctAnswer
                    ? "bg-green-500/20 border-green-500/50"
                    : "bg-red-500/20 border-red-500/50"
                  : "bg-[#55DC49]/20 border-[#55DC49]/50"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            } border`}
            disabled={hasAnswered}
          >
            <div className="flex items-center justify-between">
              <span className="text-white">{option}</span>
              {hasAnswered && index === correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              )}
            </div>
          </button>
        ))}
      </div>
      {!hasAnswered && selectedAnswer !== null && (
        <Button
          onClick={onAnswerSubmit}
          className="mt-4 w-full bg-[#55DC49] hover:bg-[#3AA831] text-black"
        >
          Submit Answer
        </Button>
      )}
      {hasAnswered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-4 p-4 rounded-lg ${
            selectedAnswer === correctAnswer
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          }`}
        >
          {selectedAnswer === correctAnswer
            ? "Correct! Well done!"
            : "Not quite right. Review the material and try again!"}
        </motion.div>
      )}
    </motion.div>
  );
}

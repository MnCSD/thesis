import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import { getModuleContent } from "@/lib/topics/data";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { useMutation } from "convex/react";

import { toast } from "sonner";
import { api } from "../../../../../../../convex/_generated/api";
import { AiTutorPopup } from "./ai-tutor-popup";

interface ModuleContentProps {
  moduleId: string;
  topicId: string;
}

function AiTutorButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 bg-[#55DC49]/10 hover:bg-[#55DC49]/20 
        text-[#55DC49] rounded-lg border border-[#55DC49]/20 hover:border-[#55DC49]/30 
        transition-colors duration-300"
    >
      <Brain className="w-4 h-4" />
    </motion.button>
  );
}

export function ModuleContent({ moduleId, topicId }: ModuleContentProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const { data: user } = useCurrentUser();
  const createChat = useMutation(api.messages.createChat);

  const moduleContent = getModuleContent(topicId, moduleId);

  if (!moduleContent) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl text-white mb-4">Module not found</h2>
        <p className="text-gray-400">
          The requested module content is not available.
        </p>
      </div>
    );
  }

  const currentSection = moduleContent.slides[currentSectionIndex];
  const progress =
    ((currentSectionIndex + 1) / moduleContent.slides.length) * 100;

  const handleNext = () => {
    if (currentSection.quiz && !hasAnswered) {
      setShowQuiz(true);
    } else if (currentSectionIndex < moduleContent.slides.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer !== null) {
      setHasAnswered(true);
    }
  };

  const handleAiTutorOpen = async () => {
    if (!user) {
      toast.error("You must be logged in to use the AI Tutor");
      return;
    }

    try {
      // Create a new chat for this AI Tutor session
      const chatId = await createChat({
        title: `${moduleContent.title} - Quiz Help`,
        uuid: crypto.randomUUID(),
        userId: user._id,
      });

      // Show the AI Tutor popup with the new chat context
      setShowAiTutor(true);
    } catch (error) {
      console.error("Error creating chat:", error);
      toast.error("Failed to start AI Tutor session");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#55DC49]/20 flex items-center justify-center">
            <Brain className="w-6 h-6 text-[#55DC49]" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              {moduleContent.title} - AI Tutor Lecture
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <Progress value={progress} className="h-2 flex-1" />
              <span className="text-sm text-gray-400">
                {currentSectionIndex + 1}/{moduleContent.slides.length}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          key={currentSection.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#55DC49]" />
            {currentSection.title}
          </h3>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 whitespace-pre-line custom-scrollbar overflow-y-auto max-h-[400px]">
              {currentSection.content}
            </div>
          </div>

          {currentSection.quiz && showQuiz && (
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
                <AiTutorButton onClick={handleAiTutorOpen} />
              </div>
              <p className="text-gray-300 mb-4">
                {currentSection.quiz.question}
              </p>
              <div className="space-y-3">
                {currentSection.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !hasAnswered && setSelectedAnswer(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      selectedAnswer === index
                        ? hasAnswered
                          ? index === currentSection.quiz?.correctAnswer
                            ? "bg-green-500/20 border-green-500/50"
                            : "bg-red-500/20 border-red-500/50"
                          : "bg-[#55DC49]/20 border-[#55DC49]/50"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    } border`}
                    disabled={hasAnswered}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white">{option}</span>
                      {hasAnswered &&
                        index === currentSection.quiz?.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        )}
                    </div>
                  </button>
                ))}
              </div>
              {!hasAnswered && selectedAnswer !== null && (
                <Button
                  onClick={handleAnswerSubmit}
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
                    selectedAnswer === currentSection.quiz?.correctAnswer
                      ? "bg-green-500/20 text-green-500"
                      : "bg-red-500/20 text-red-500"
                  }`}
                >
                  {selectedAnswer === currentSection.quiz?.correctAnswer
                    ? "Correct! Well done!"
                    : "Not quite right. Review the material and try again!"}
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0}
            className="border-[#55DC49]/20 hover:bg-[#55DC49]/10 hover:border-[#55DC49]/50"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={showQuiz && !hasAnswered}
            className="bg-[#55DC49] hover:bg-[#3AA831] text-black"
          >
            {currentSectionIndex === moduleContent.slides.length - 1 ? (
              "Complete"
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 hover:border-[#55DC49]/30 transition-all duration-300 group">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
            Study Tips
            <Lightbulb className="w-5 h-5 text-[#55DC49]" />
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-400 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#55DC49]" />
              Take notes on key concepts
            </li>
            <li className="text-gray-400 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#55DC49]" />
              Practice with examples
            </li>
            <li className="text-gray-400 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#55DC49]" />
              Review difficult sections
            </li>
          </ul>
        </Card>

        <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 hover:border-[#55DC49]/30 transition-all duration-300 group">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
            Progress Tracking
            <CheckCircle2 className="w-5 h-5 text-[#55DC49]" />
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Section Progress</span>
                <span className="text-[#55DC49]">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Concepts Mastered</span>
                <span className="text-[#55DC49]">
                  {currentSectionIndex}/{moduleContent.slides.length}
                </span>
              </div>
              <Progress
                value={
                  (currentSectionIndex / moduleContent.slides.length) * 100
                }
                className="h-2"
              />
            </div>
          </div>
        </Card>
      </div>

      {showAiTutor && (
        // @ts-ignore
        <AiTutorPopup
          isOpen={showAiTutor}
          tags={[moduleId, topicId]}
          onClose={() => setShowAiTutor(false)}
          question={currentSection.quiz?.question || ""}
          context={currentSection.content}
          // chatId={currentSection?.chatId}
          // messageId={currentSection?.messageId}
        />
      )}
    </div>
  );
}

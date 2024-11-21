import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ChevronRight, ChevronLeft, BookOpen } from "lucide-react";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { AiTutorPopup } from "./ai-tutor-popup";
import { ModuleCompletion } from "./module-completion";
import { useModuleProgress } from "@/features/modules/use-module-progress";
import { ModuleQuiz } from "./module-quiz";
import { ModuleProgressCards } from "./module-progress-cards";
import { Progress } from "@/components/ui/progress";
import { getModuleContent } from "@/lib/topics/data";
import { api } from "../../../../../../../convex/_generated/api";

interface ModuleContentProps {
  moduleId: string;
  topicId: string;
  currentSlide: number;
  setCurrentSlide: (slideIndex: number) => void;
  onQuizSubmit: (
    questionId: string,
    selectedAnswer: number,
    isCorrect: boolean
  ) => Promise<void>;
}

export function ModuleContent({
  moduleId,
  topicId,
  onQuizSubmit,
  setCurrentSlide,
  currentSlide,
}: ModuleContentProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(currentSlide);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const { data: user } = useCurrentUser();
  const createChat = useMutation(api.messages.createChat);
  const { updateTimeAndProgress, handleModuleComplete: completeQuiz } =
    useModuleProgress(moduleId, topicId);

  const moduleContent = getModuleContent(topicId, moduleId);

  console.log(moduleContent);

  if (!moduleContent || topicId == "Computer Science") {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl text-white mb-4">Module not found</h2>
        <p className="text-gray-400">
          The requested module content is not available.
        </p>
      </div>
    );
  }

  useEffect(() => {
    setCurrentSectionIndex(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const progress = Math.round(
      ((currentSectionIndex + 1) / moduleContent.slides.length) * 100
    );

    // Only update progress if it's greater than the current progress
    if (progress > 0) {
      updateTimeAndProgress(1, progress, currentSectionIndex);
    }
  }, [
    currentSectionIndex,
    moduleId,
    moduleContent.slides.length,
    updateTimeAndProgress,
  ]);

  const currentSection = moduleContent.slides[currentSectionIndex];
  const progress = Math.round(
    ((currentSectionIndex + 1) / moduleContent.slides.length) * 100
  );

  const handleNext = async () => {
    if (currentSection.quiz && !hasAnswered) {
      setShowQuiz(true);
    } else if (currentSectionIndex < moduleContent.slides.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      setCurrentSlide(nextIndex);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setShowCompletion(true);
      await handleFinalModuleCompletion();
    }
  };

  const handleFinalModuleCompletion = async () => {
    try {
      // Explicitly set module to completed status
      await handleModuleComplete();
      await onQuizSubmit("module-complete", -1, true);
    } catch (error) {
      console.error("Error completing module:", error);
      toast.error("Failed to complete module");
    }
  };

  const handleModuleComplete = async () => {
    try {
      await onQuizSubmit("module-complete", -1, true);
      await completeQuiz();
    } catch (error) {
      console.error("Error completing module:", error);
      toast.error("Failed to complete module");
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      const prevIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevIndex);
      setCurrentSlide(prevIndex);
      setShowQuiz(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const handleAnswerSubmit = async () => {
    if (selectedAnswer !== null && currentSection.quiz) {
      const isCorrect = selectedAnswer === currentSection.quiz.correctAnswer;
      await onQuizSubmit(
        currentSection.quiz.question,
        selectedAnswer,
        isCorrect
      );
      setHasAnswered(true);
    }
  };

  const handleAiTutorOpen = async () => {
    if (!user) {
      toast.error("You must be logged in to use the AI Tutor");
      return;
    }

    try {
      const _chatId = await createChat({
        title: `${moduleContent.title} - Quiz Help`,
        uuid: crypto.randomUUID(),
        userId: user._id,
      });
      setShowAiTutor(true);
    } catch (error) {
      console.error("Error creating chat:", error);
      toast.error("Failed to start AI Tutor session");
    }
  };

  return (
    <div className="space-y-6">
      {showCompletion && (
        <ModuleCompletion
          onClose={async () => {
            await handleModuleComplete();
            setShowCompletion(false);
            window.history.back();
          }}
          stats={{
            accuracy: 95,
            timeSpent: Math.round(progress),
            xpEarned: 100,
          }}
        />
      )}

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
          key={currentSection?.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#55DC49]" />
            {currentSection?.title}
          </h3>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 whitespace-pre-line custom-scrollbar overflow-y-auto max-h-[400px]">
              {currentSection?.content}
            </div>
          </div>

          {currentSection?.quiz && showQuiz && (
            <ModuleQuiz
              question={currentSection.quiz.question}
              options={currentSection.quiz.options}
              correctAnswer={currentSection.quiz.correctAnswer}
              selectedAnswer={selectedAnswer}
              hasAnswered={hasAnswered}
              onAnswerSelect={setSelectedAnswer}
              onAnswerSubmit={handleAnswerSubmit}
              onAiTutorOpen={handleAiTutorOpen}
            />
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
              "Complete Module"
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </Card>

      <ModuleProgressCards
        progress={progress}
        currentSection={currentSectionIndex + 1}
        totalSections={moduleContent.slides.length}
      />

      {showAiTutor && (
        <AiTutorPopup
          isOpen={showAiTutor}
          tags={[moduleId, topicId]}
          onClose={() => setShowAiTutor(false)}
          question={currentSection.quiz?.question || ""}
          context={currentSection.content}
          // @ts-expect-error error message
          chatId={currentSection?.chatId}
          // @ts-expect-error error message
          messageId={currentSection?.messageId}
        />
      )}
    </div>
  );
}

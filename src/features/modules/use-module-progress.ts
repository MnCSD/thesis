import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useCallback } from "react";

export const useModuleProgress = (moduleId: string, topicId: string) => {
  const progress = useQuery(api.modules.getProgress, { moduleId, topicId });
  const updateProgress = useMutation(api.modules.updateProgress);
  const submitQuizAnswer = useMutation(api.modules.submitQuizAnswer);
  const completeModule = useMutation(api.modules.completeModule);

  const handleQuizSubmit = useCallback(
    async (questionId: string, selectedAnswer: number, isCorrect: boolean) => {
      await submitQuizAnswer({
        moduleId,
        questionId,
        selectedAnswer,
        isCorrect,
      });
    },
    [moduleId, submitQuizAnswer]
  );

  const handleModuleComplete = useCallback(async () => {
    await completeModule({
      moduleId,
      topicId,
    });
  }, [moduleId, topicId, completeModule]);

  const updateTimeAndProgress = useCallback(
    async (
      timeSpent: number,
      progressPercentage: number,
      currentSlide: number
    ) => {
      await updateProgress({
        moduleId,
        timeSpent,
        topicId,
        progress: progressPercentage,
        currentSlide,
      });
    },
    [moduleId, topicId, updateProgress]
  );

  return {
    progress,
    handleQuizSubmit,
    handleModuleComplete,
    updateTimeAndProgress,
  };
};

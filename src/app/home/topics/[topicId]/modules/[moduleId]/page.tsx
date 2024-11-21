"use client";

import { motion } from "framer-motion";
import { ModuleHeader } from "../components/module-header";
import { ModuleReview } from "../components/module-review";
import { ModuleContent } from "../components/module-content";
import { ModuleSidebar } from "../components/module-sidebar";
import { useEffect, useState } from "react";
import { useModuleProgress } from "@/features/modules/use-module-progress";
import { getModuleContent } from "@/lib/topics/data";

export default function ModuleDetail({
  params,
}: {
  params: { topicId: string; moduleId: string };
}) {
  const topicId = decodeURIComponent(params.topicId);
  const moduleId = decodeURIComponent(params.moduleId);
  const [isLoading, setIsLoading] = useState(true);

  const {
    progress,
    handleQuizSubmit,
    handleModuleComplete,
    updateTimeAndProgress,
  } = useModuleProgress(moduleId, topicId);

  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const moduleContent = getModuleContent(topicId, moduleId);
  const totalSlides = moduleContent?.slides.length || 10;

  //create a function to submit the quiz answer and complete the module when we are at the last slide

  // Update currentSlide when progress data is available
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress?.progress?.currentSlide !== undefined) {
        setCurrentSlide(progress.progress.currentSlide);
      } else {
        setCurrentSlide(0); // Only set to 0 if no progress exists
      }
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [progress?.progress?.currentSlide]);

  useEffect(() => {
    if (currentSlide === null) return; // Don't update if currentSlide is not yet initialized

    const interval = setInterval(() => {
      if (progress?.progress?.status !== "completed") {
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        updateTimeAndProgress(1, progressPercentage, currentSlide);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    currentSlide,
    totalSlides,
    moduleId,
    updateTimeAndProgress,
    progress?.progress?.status,
  ]);

  console.log(topicId);

  if (topicId !== "Computer Science") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#55DC49]">
          Hey
        </div>
      </div>
    );
  }

  if (isLoading || currentSlide === null) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-2xl bg-[#55DC49]/20 flex items-center justify-center mb-8 mx-auto">
            <div className="w-12 h-12 border-4 border-[#55DC49] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Loading Module</h2>
          <p className="text-gray-400">Preparing your learning experience...</p>
          <div className="mt-8 w-64 h-2 bg-[#232323] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="h-full bg-[#55DC49]"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  const moduleStatus = progress?.progress?.status || "not_started";
  const isCompleted = moduleStatus === "completed";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
    >
      <ModuleHeader
        topicId={topicId}
        moduleId={moduleId}
        // @ts-expect-error
        status={moduleStatus}
        progress={progress?.progress?.progress || 0}
        timeSpent={progress?.progress?.timeSpent || 0}
        onComplete={handleModuleComplete}
      />
      {topicId === "Computer Science" && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {isCompleted ? (
                <ModuleReview
                  moduleId={moduleId}
                  // @ts-expect-error
                  stats={progress?.stats}
                  timeSpent={progress?.progress?.timeSpent || 0}
                  completedAt={progress?.progress?.completedAt}
                />
              ) : (
                <ModuleContent
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  moduleId={moduleId}
                  topicId={topicId}
                  onQuizSubmit={handleQuizSubmit}
                />
              )}
            </div>
            <div className="lg:col-span-1">
              <ModuleSidebar
                moduleId={moduleId}
                status={moduleStatus}
                // @ts-expect-error
                stats={progress?.stats}
                // @ts-expect-error
                progress={progress?.progress}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

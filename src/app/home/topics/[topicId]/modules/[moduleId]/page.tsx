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

  const {
    progress,
    handleQuizSubmit,
    handleModuleComplete,
    updateTimeAndProgress,
  } = useModuleProgress(moduleId, topicId);

  const [currentSlide, setCurrentSlide] = useState(
    progress?.progress?.currentSlide
  );
  const moduleContent = getModuleContent(topicId, moduleId);
  const totalSlides = moduleContent?.slides.length || 0;

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
      // @ts-ignore

      if (progress?.progress?.status !== "completed") {
        updateTimeAndProgress(1, progressPercentage, currentSlide as number);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides, moduleId, updateTimeAndProgress]);

  if (!progress || !moduleContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#55DC49]"></div>
      </div>
    );
  }

  const moduleStatus = progress.progress?.status || "not_started";
  const isCompleted = moduleStatus === "completed";

  console.log(moduleStatus);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]"
    >
      <ModuleHeader
        topicId={topicId}
        moduleId={moduleId}
        // @ts-ignore
        status={moduleStatus}
        progress={progress.progress?.progress || 0}
        timeSpent={progress.progress?.timeSpent || 0}
        onComplete={handleModuleComplete}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isCompleted ? (
              <ModuleReview
                moduleId={moduleId}
                // @ts-ignore
                stats={progress.stats}
                timeSpent={progress.progress?.timeSpent || 0}
                completedAt={progress.progress?.completedAt}
              />
            ) : (
              <ModuleContent
                // @ts-ignore
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
              // @ts-ignore
              stats={progress.stats}
              // @ts-ignore
              progress={progress.progress}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

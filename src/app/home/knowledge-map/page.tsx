"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { LearningPath } from "./components/learning-path";
import { useModuleProgress } from "@/features/modules/use-module-progress";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";
import { SubjectType } from "@/features/auth/types";

// const topicId = "Computer Science";

export default function KnowledgeMap() {
  const { data: preferences } = useGetPreferences();

  const topicId =
    preferences?.[0]?.subject || (undefined as unknown as SubjectType);

  const { progress: introductionProgress } = useModuleProgress(
    "Introduction to the Basics",
    topicId
  );

  const { progress: coreProgress } = useModuleProgress(
    "Core Concepts",
    topicId
  );

  const { progress: advancedProgress } = useModuleProgress(
    "Advanced Techniques",
    topicId
  );

  const { progress: practicalProgress } = useModuleProgress(
    "Practical Applications",
    topicId
  );

  const modules = [
    {
      id: "1",
      title: "Basics",
      description: "Introduction to Computer Science",
      status: introductionProgress?.progress?.status || "not_started",
      progress: introductionProgress?.progress?.progress || 0,
    },
    {
      id: "2",
      title: "Core",
      description: "Core Programming Concepts",
      status: coreProgress?.progress?.status || "not_started",
      progress: coreProgress?.progress?.progress || 0,
    },
    {
      id: "3",
      title: "Advanced",
      description: "Advanced Programming Techniques",
      status: advancedProgress?.progress?.status || "not_started",
      progress: advancedProgress?.progress?.progress || 0,
    },
    {
      id: "4",
      title: "Expert",
      description: "Expert-Level Applications",
      status: practicalProgress?.progress?.status || "not_started",
      progress: practicalProgress?.progress?.progress || 0,
    },
  ];

  const calculateTotalProgress = () => {
    let introductionProgressPercentage: number = 0;
    let coreProgressPercentage: number = 0;
    let advancedProgressPercentage: number = 0;
    let practicalProgressPercentage: number = 0;

    //introductionProgress
    if (introductionProgress?.progress?.progress) {
      introductionProgressPercentage = Math.round(
        // @ts-ignore
        (introductionProgress?.progress?.progress / 100) * 10
      );
    }

    // coreProgress
    if (coreProgress?.progress?.progress) {
      coreProgressPercentage = Math.round(
        // @ts-ignore
        (coreProgress?.progress?.progress / 100) * 10
      );
    }

    // advancedProgress
    if (advancedProgress?.progress?.progress) {
      advancedProgressPercentage = Math.round(
        // @ts-ignore
        (advancedProgress?.progress?.progress / 100) * 10
      );
    }

    // practicalProgress
    if (practicalProgress?.progress?.progress) {
      practicalProgressPercentage = Math.round(
        // @ts-ignore
        (practicalProgress?.progress?.progress / 100) * 10
      );
    }

    const totalProgressNumber =
      introductionProgressPercentage +
      Number(coreProgressPercentage) +
      Number(advancedProgressPercentage) +
      Number(practicalProgressPercentage);

    const total = totalProgressNumber / 40;

    if (total < 0.1) {
      return 1;
    }

    return Math.round(total * 100);
  };

  const totalPercentage = calculateTotalProgress();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <header className="max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#55DC49] to-[#55DC49]/70 text-transparent bg-clip-text">
              Your Learning Journey
            </h1>
            <p className="text-xl text-white/60">
              Master Computer Science step by step
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#55DC49]/10 px-6 py-3 rounded-2xl border border-[#55DC49]/20">
            <Brain className="w-6 h-6 text-[#55DC49]" />
            <span className="text-xl font-semibold">
              {totalPercentage}% Complete
            </span>
          </div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto">
        <LearningPath modules={modules} topicId={topicId} />
      </main>
    </div>
  );
}

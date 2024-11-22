"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "./components/stats-card";
import { SubjectCard } from "./components/subject-card";
import { ActivityCard } from "./components/activity-card";
import { useModuleProgress } from "@/features/modules/use-module-progress";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";
import { SubjectType } from "@/features/auth/types";
import { formatTime } from "../topics/[topicId]/modules/components/module-review";

export default function ProgressPage() {
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

  // Calculate total progress
  const calculateTotalProgress = () => {
    let introductionProgressPercentage: number = 0;
    let coreProgressPercentage: number = 0;
    let advancedProgressPercentage: number = 0;
    let practicalProgressPercentage: number = 0;

    if (introductionProgress?.progress?.progress) {
      introductionProgressPercentage = Math.round(
        (introductionProgress?.progress?.progress / 100) * 10
      );
    }

    if (coreProgress?.progress?.progress) {
      coreProgressPercentage = Math.round(
        (coreProgress?.progress?.progress / 100) * 10
      );
    }

    if (advancedProgress?.progress?.progress) {
      advancedProgressPercentage = Math.round(
        (advancedProgress?.progress?.progress / 100) * 10
      );
    }

    if (practicalProgress?.progress?.progress) {
      practicalProgressPercentage = Math.round(
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

  const totalProgress = calculateTotalProgress();

  // Calculate total hours
  const calculateTotalHours = () => {
    let totalHours = 0;

    if (introductionProgress?.progress?.timeSpent) {
      totalHours += introductionProgress.progress.timeSpent;
    }
    if (coreProgress?.progress?.timeSpent) {
      totalHours += coreProgress.progress.timeSpent;
    }
    if (advancedProgress?.progress?.timeSpent) {
      totalHours += advancedProgress.progress.timeSpent;
    }
    if (practicalProgress?.progress?.timeSpent) {
      totalHours += practicalProgress.progress.timeSpent;
    }

    return totalHours;
  };

  const totalHours = calculateTotalHours();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white">
          Your Learning <span className="text-[#55DC49]">Progress</span>
        </h1>
        <p className="text-gray-400">
          Track your achievements and learning journey
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StatsCard
            icon={Trophy}
            value={`${totalProgress}%`}
            title="Overall Progress"
            subtitle="Keep going!"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <StatsCard
            icon={Clock}
            value={formatTime(totalHours)}
            title="Total Time"
            subtitle="This month"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white">Subject Progress</h2>

        {preferences?.map((preference, index) => {
          const progress = {
            name: preference.subject,
            progress: totalProgress,
            hours: totalHours,
          };
          return (
            <SubjectCard
              key={preference.subject}
              progress={totalProgress}
              name={topicId}
              hours={totalHours}
              index={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-2"
      >
        <ActivityCard />
      </motion.div>
    </div>
  );
}

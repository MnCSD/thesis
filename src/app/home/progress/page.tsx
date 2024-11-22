"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "./components/stats-card";
import { SubjectCard } from "./components/subject-card";
import { ActivityCard } from "./components/activity-card";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";
import { formatTime } from "../topics/[topicId]/modules/components/module-review";
import { useUserTopics } from "@/features/modules/use-user-topics";

export default function ProgressPage() {
  const { data: preferences } = useGetPreferences();
  const userTopics = useUserTopics();

  // Calculate total progress and time across all topics
  const totalTimeSpent =
    userTopics?.reduce((acc, topic) => acc + topic.timeSpent, 0) || 0;
  const averageProgress = userTopics?.length
    ? Math.round(
        userTopics.reduce((acc, topic) => acc + topic.progress, 0) /
          userTopics.length
      )
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          subtitle=""
          title="Total Time"
          value={formatTime(totalTimeSpent)}
          icon={Clock}
        />
        <StatsCard
          subtitle=""
          title="Average Progress"
          value={`${averageProgress}%`}
          icon={TrendingUp}
        />
        <StatsCard
          subtitle=""
          title="Topics Started"
          value={userTopics?.length || 0}
          icon={Trophy}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {userTopics?.map((topic, index) => (
          <SubjectCard
            key={topic.topicId}
            name={topic.name}
            progress={topic.progress}
            timeInSeconds={topic.timeSpent}
            index={index}
          />
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
        <ActivityCard />
      </div>
    </motion.div>
  );
}

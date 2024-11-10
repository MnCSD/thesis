"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, TrendingUp } from "lucide-react";
import { StatsCard } from "./components/stats-card";
import { SubjectCard } from "./components/subject-card";
import { ActivityCard } from "./components/activity-card";
import { GoalsCard } from "./components/goals-card";

const subjects = [
  { name: "Mathematics", progress: 85, hours: 24, streak: 7 },
  { name: "Physics", progress: 65, hours: 18, streak: 4 },
  { name: "Chemistry", progress: 72, hours: 20, streak: 5 },
];

export default function ProgressPage() {
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
            value="89%"
            title="Overall Progress"
            subtitle="Excellent performance!"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <StatsCard
            icon={Clock}
            value="62h"
            title="Total Time"
            subtitle="This month"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StatsCard
            icon={TrendingUp}
            value="5"
            title="Day Streak"
            subtitle="Keep it up!"
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

        {subjects.map((subject, index) => (
          <SubjectCard key={subject.name} {...subject} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ActivityCard />
        <GoalsCard />
      </motion.div>
    </div>
  );
}

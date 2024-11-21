"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Download,
  FileText,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

interface ModuleSidebarProps {
  moduleId: string;
  status: "completed" | "in_progress" | "not_started";
  stats?: {
    totalQuestions: number;
    correctAnswers: number;
    accuracy: number;
    bestStreak: number;
    xpEarned: number;
  };
  progress?: {
    timeSpent: number;
    progress: number;
    completedAt?: number;
  };
}

const resources = [
  {
    icon: FileText,
    title: "Course Notes",
    description: "Comprehensive study materials",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Additional resources & templates",
  },
  {
    icon: MessageSquare,
    title: "Discussion",
    description: "Join the conversation",
  },
];

export function ModuleSidebar({ status, stats, progress }: ModuleSidebarProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (status === "completed") {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#55DC49]/20 mb-4">
                <Trophy className="w-8 h-8 text-[#55DC49]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Excellent Work!
              </h3>
              <p className="text-gray-400 mt-2">
                You&apos;ve mastered this module
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#232323]/80 rounded-lg">
                <span className="text-gray-300">Accuracy</span>
                <span className="text-[#55DC49] font-semibold">
                  {stats?.accuracy
                    ? Math.round(
                        ((stats.correctAnswers - 2) /
                          (stats.totalQuestions - 2)) *
                          100
                      )
                    : 0}
                  %
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#232323]/80 rounded-lg">
                <span className="text-gray-300">Time Spent</span>
                <span className="text-[#55DC49] font-semibold">
                  {progress?.timeSpent
                    ? formatTime(progress.timeSpent)
                    : "0:00"}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="w-full bg-[#55DC49] hover:bg-[#3AA831] text-black">
            Next Module
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Learning Goals
          </h3>
          <ul className="space-y-3">
            {[
              "Understand core theoretical concepts",
              "Apply principles to real-world scenarios",
              "Complete hands-on exercises",
              "Pass the module assessment",
            ].map((goal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <GraduationCap className="w-5 h-5 text-[#55DC49] flex-shrink-0 mt-1" />
                <span>{goal}</span>
              </motion.li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">Resources</h3>
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Card
              className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-4 hover:border-[#55DC49]/30
              transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-[#55DC49]/10 flex items-center justify-center
                  group-hover:bg-[#55DC49]/20 transition-colors duration-300"
                >
                  <resource.icon className="w-5 h-5 text-[#55DC49]" />
                </div>
                <div>
                  <h4 className="font-medium text-white group-hover:text-[#55DC49] transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Need Help?</h3>
            <Users className="w-5 h-5 text-[#55DC49]" />
          </div>
          <p className="text-gray-300 mb-4">
            Stuck on a concept? Our community and instructors are here to help!
          </p>
          <Button className="w-full bg-[#55DC49] hover:bg-[#3AA831] text-black">
            Ask a Question
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}

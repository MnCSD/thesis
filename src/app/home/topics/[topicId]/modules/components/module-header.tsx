"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Trophy,
  Users,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ModuleHeader({
  topicId,
  moduleId,
  status,
}: {
  topicId: string;
  moduleId: string;
  status: "completed" | "in-progress" | "locked";
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1A1A]/50 backdrop-blur-xl border-b border-[#55DC49]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between mb-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to {topicId}
          </motion.button>

          {status === "in-progress" && (
            <Button
              variant="outline"
              className="border-[#55DC49]/30 text-black font-bold bg-[#55DC49]/70 hover:border-[#55DC49] hover:bg-[#55DC49]/10 hover:text-white"
            >
              Mark as Complete
            </Button>
          )}

          {status === "completed" && (
            <div className="flex items-center gap-2 text-[#55DC49]">
              <CheckCircle2 className="w-5 h-5" />
              <span>Completed</span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center
              ${
                status === "completed"
                  ? "bg-[#55DC49]/20"
                  : status === "in-progress"
                    ? "bg-yellow-500/20"
                    : "bg-gray-500/20"
              }`}
            >
              {status === "completed" ? (
                <Trophy className="w-6 h-6 text-[#55DC49]" />
              ) : (
                <Play className="w-6 h-6 text-yellow-500" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {decodeURIComponent(moduleId)}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>25 mins</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>5 lessons</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>982 students</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>100 XP</span>
                </div>
              </div>
            </div>
          </div>

          {status === "in-progress" && (
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-[#55DC49]">60%</span>
              </div>
              <Progress value={60} className="h-2 bg-[#2A2A2A]" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

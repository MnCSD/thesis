"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Clock,
  Star,
  CheckCircle2,
  Award,
  BarChart3,
  Zap,
  Share2,
} from "lucide-react";

const achievements = [
  {
    icon: Clock,
    title: "Completion Time",
    value: "14:32 mins",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Star,
    title: "Performance Score",
    value: "95%",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Zap,
    title: "XP Earned",
    value: "150 XP",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

const completedLessons = [
  {
    title: "Introduction to Core Concepts",
    duration: "5:30",
    score: "100%",
  },
  {
    title: "Understanding Key Principles",
    duration: "8:45",
    score: "90%",
  },
  {
    title: "Practice Exercise 1",
    duration: "15:00",
    score: "95%",
  },
];

export function ModuleReview({ moduleId }: { moduleId: string }) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#55DC49]/20 mb-6">
          <Trophy className="w-10 h-10 text-[#55DC49]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Module Completed!
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Congratulations on completing this module. You've demonstrated
          excellent understanding of the material.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 hover:border-[#55DC49]/30
              transition-all duration-300"
          >
            <div
              className={`w-12 h-12 rounded-lg ${achievement.bgColor} flex items-center justify-center mb-4`}
            >
              <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
            </div>
            <h3 className="text-white font-medium mb-1">{achievement.title}</h3>
            <p className={`text-2xl font-bold ${achievement.color}`}>
              {achievement.value}
            </p>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Lesson Completion
            </h3>
            <BarChart3 className="w-5 h-5 text-[#55DC49]" />
          </div>
          <div className="space-y-4">
            {completedLessons.map((lesson, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#55DC49]" />
                  <div>
                    <p className="text-white font-medium">{lesson.title}</p>
                    <p className="text-sm text-gray-400">{lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{lesson.score}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          className="flex-1 bg-[#55DC49] hover:bg-[#3AA831] text-black font-semibold h-12
            transition-all duration-300 hover:shadow-lg hover:shadow-[#55DC49]/20"
        >
          <Award className="w-5 h-5 mr-2" />
          View Certificate
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-[#55DC49]/30 hover:border-[#55DC49] hover:bg-[#55DC49]/10
            transition-all duration-300"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share Achievement
        </Button>
      </motion.div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Trophy,
  Play,
  Brain,
  Star,
  Users,
  MessageSquare,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

const slideIn = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.4 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TopicDetail({
  params,
}: {
  params: { topicId: string };
}) {
  const router = useRouter();
  const topicId = decodeURIComponent(params.topicId);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    {
      title: "Introduction to the Basics",
      duration: "15 mins",
      progress: 0,
      status: "in-progress",
      students: 1234,
      rating: 4.8,
      description: "Learn the fundamental concepts and core principles.",
    },
    {
      title: "Core Concepts",
      duration: "25 mins",
      progress: 0,
      status: "in-progress",
      students: 982,
      rating: 4.9,
      description:
        "Deep dive into essential theories and practical applications.",
    },
    {
      title: "Advanced Techniques",
      duration: "30 mins",
      progress: 0,
      status: "in-progress",
      students: 756,
      rating: 4.7,
      description: "Master complex problem-solving and advanced methodologies.",
    },
    {
      title: "Practical Applications",
      duration: "45 mins",
      progress: 0,
      status: "in-progress",
      students: 543,
      rating: 4.6,
      description:
        "Apply your knowledge through real-world scenarios and projects.",
    },
  ];

  const handleModuleClick = (moduleTitle: string, status: string) => {
    if (status !== "locked") {
      router.push(
        `/home/topics/${encodeURIComponent(topicId)}/modules/${encodeURIComponent(moduleTitle)}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-8"
        >
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Topics
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <Button
              variant="outline"
              size="icon"
              className="border-[#55DC49]/30 hover:border-[#55DC49] hover:bg-[#55DC49]/10"
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-[#55DC49]/30 hover:border-[#55DC49] hover:bg-[#55DC49]/10"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn} className="lg:col-span-2">
            <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#55DC49]/5 via-transparent to-transparent" />
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#55DC49]/20 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-[#55DC49]" />
                  </div>
                  <div>
                    <motion.h1 className="text-4xl font-bold text-white mb-1">
                      {topicId}
                    </motion.h1>
                    <div className="flex items-center gap-2 text-[#55DC49]">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">
                        4.8 Course Rating
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center gap-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>2 hours total</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>4 modules</span>
                  </div>
                  {/* <div className="flex items-center text-gray-400">
                    {/* <Users className="w-4 h-4 mr-2" />
                    <span>2.5k enrolled</span> 
                  </div> */}
                  {/* <div className="flex items-center text-gray-400">
                    <Trophy className="w-4 h-4 mr-2" />
                    <span>Certificate</span>
                  </div> */}
                </motion.div>

                <motion.div className="space-y-6" variants={stagger}>
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.title}
                      variants={fadeIn}
                      onHoverStart={() => setActiveModule(index)}
                      onHoverEnd={() => setActiveModule(null)}
                      className="relative group"
                      onClick={() =>
                        handleModuleClick(module.title, module.status)
                      }
                    >
                      <Card
                        className={`bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 transition-all duration-300
                        ${activeModule === index ? "border-[#55DC49]/30 shadow-lg shadow-[#55DC49]/5" : "hover:border-[#55DC49]/20"}
                        ${module.status !== "locked" ? "cursor-pointer" : "cursor-not-allowed"}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                              ${
                                module.status === "completed"
                                  ? "bg-[#55DC49]/20"
                                  : module.status === "in-progress"
                                    ? "bg-yellow-500/20"
                                    : "bg-gray-500/20"
                              }`}
                            >
                              {module.status === "completed" ? (
                                <Trophy className="w-6 h-6 text-[#55DC49]" />
                              ) : module.status === "in-progress" ? (
                                <Play className="w-6 h-6 text-yellow-500" />
                              ) : (
                                <Brain className="w-6 h-6 text-gray-500" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-1">
                                {module.title}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {module.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right mr-4">
                              <div className="flex items-center justify-end gap-1 text-[#55DC49]">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-medium">
                                  {module.rating}
                                </span>
                              </div>
                              <p className="text-gray-400 text-sm">
                                {module.students.toLocaleString()} students
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              className={`${module.status === "locked" ? "opacity-50 cursor-not-allowed" : ""} 
                                border-[#55DC49]/30 hover:border-[#55DC49] hover:bg-[#55DC49]/10 min-w-[100px]
                                transition-all duration-300`}
                              disabled={module.status === "locked"}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleModuleClick(module.title, module.status);
                              }}
                            >
                              {module.status === "completed"
                                ? "Review"
                                : module.status === "in-progress"
                                  ? "Continue"
                                  : "Start"}
                            </Button>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress
                            value={module.progress}
                            className="h-2 bg-[#2A2A2A]"
                          />
                          <span className="absolute right-0 top-3 text-xs text-gray-400">
                            {module.progress}%
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={slideIn} className="lg:col-span-1">
            <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                Your Progress
                <div className="h-2 w-2 rounded-full bg-[#55DC49] animate-pulse" />
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-gray-400 mb-2">
                    <span>Course Progress</span>
                    <span className="text-[#55DC49]">40%</span>
                  </div>
                  <div className="relative">
                    <Progress value={40} className="h-3 bg-[#2A2A2A]" />
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#55DC49] border-4 border-[#1A1A1A] shadow-lg" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-4 hover:border-[#55DC49]/30 transition-all duration-300">
                      <Clock className="w-5 h-5 text-[#55DC49] mb-2" />
                      <p className="text-gray-400 text-sm">Time Spent</p>
                      <p className="text-white font-bold text-lg">45 mins</p>
                    </Card>
                    <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-4 hover:border-[#55DC49]/30 transition-all duration-300">
                      <Trophy className="w-5 h-5 text-[#55DC49] mb-2" />
                      <p className="text-gray-400 text-sm">Completed</p>
                      <p className="text-white font-bold text-lg">1/4</p>
                    </Card>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#55DC49] hover:bg-[#3AA831] text-black font-semibold h-12 text-lg
                    transition-all duration-300 hover:shadow-lg hover:shadow-[#55DC49]/20"
                  onClick={() => {
                    const inProgressModule = modules.find(
                      (m) => m.status === "in-progress"
                    );
                    if (inProgressModule) {
                      handleModuleClick(
                        inProgressModule.title,
                        inProgressModule.status
                      );
                    }
                  }}
                >
                  Continue Learning
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

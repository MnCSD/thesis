"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Trophy,
  Play,
  Brain,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useModuleProgress } from "@/features/modules/use-module-progress";

interface Module {
  id: string;
  title: string;
  duration: string;
  progress: number;
  status: "not_started" | "in-progress" | "completed" | "locked";
  students: number;
  rating: number;
  description: string;
  sections: {
    id: string;
    title: string;
    isCompleted: boolean;
  }[];
  timeSpent: number;
}

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

  // Initialize modules with sections and progress tracking
  const [modules, setModules] = useState<Module[]>([
    {
      id: "1",
      title: "Introduction to the Basics",
      duration: "15 mins",
      progress: 25,
      status: "in-progress",
      students: 1234,
      rating: 4.8,
      description: "Learn the fundamental concepts and core principles.",
      timeSpent: 15,
      sections: [
        { id: "1-1", title: "Welcome", isCompleted: true },
        { id: "1-2", title: "Getting Started", isCompleted: false },
        { id: "1-3", title: "Basic Concepts", isCompleted: false },
        { id: "1-4", title: "First Steps", isCompleted: false },
      ],
    },
    {
      id: "2",
      title: "Core Concepts",
      duration: "25 mins",
      progress: 0,
      status: "in-progress",
      students: 982,
      rating: 4.9,
      description:
        "Deep dive into essential theories and practical applications.",
      timeSpent: 0,
      sections: [
        { id: "2-1", title: "Advanced Theory", isCompleted: false },
        { id: "2-2", title: "Practical Examples", isCompleted: false },
        { id: "2-3", title: "Case Studies", isCompleted: false },
      ],
    },
    {
      id: "3",
      title: "Advanced Techniques",
      duration: "30 mins",
      progress: 0,
      status: "in-progress",
      students: 756,
      rating: 4.7,
      description: "Master complex problem-solving and advanced methodologies.",
      timeSpent: 0,
      sections: [
        { id: "3-1", title: "Complex Problems", isCompleted: false },
        { id: "3-2", title: "Advanced Solutions", isCompleted: false },
        { id: "3-3", title: "Best Practices", isCompleted: false },
      ],
    },
    {
      id: "4",
      title: "Practical Applications",
      duration: "45 mins",
      progress: 0,
      status: "in-progress",
      students: 543,
      rating: 4.6,
      description:
        "Apply your knowledge through real-world scenarios and projects.",
      timeSpent: 0,
      sections: [
        { id: "4-1", title: "Real-world Examples", isCompleted: false },
        { id: "4-2", title: "Project Work", isCompleted: false },
        { id: "4-3", title: "Final Assessment", isCompleted: false },
      ],
    },
  ]);

  // Calculate total course progress
  const calculateTotalProgress = () => {
    let introductionProgressPercentage: number = 0;
    let coreProgressPercentage: number = 0;
    let advancedProgressPercentage: number = 0;
    let practicalProgressPercentage: number = 0;

    //introductionProgress
    if (introductionProgress?.progress?.progress) {
      introductionProgressPercentage = Math.round(
        (introductionProgress?.progress?.progress / 100) * 10
      );
    }

    // coreProgress
    if (coreProgress?.progress?.progress) {
      coreProgressPercentage = Math.round(
        (coreProgress?.progress?.progress / 100) * 10
      );
    }

    // advancedProgress
    if (advancedProgress?.progress?.progress) {
      advancedProgressPercentage = Math.round(
        (advancedProgress?.progress?.progress / 100) * 10
      );
    }

    // practicalProgress
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

  // Calculate total time spent
  const calculateTotalTimeSpent = () => {
    return modules.reduce((total, module) => total + module.timeSpent, 0);
  };

  // Calculate completed modules
  const calculateCompletedModules = () => {
    return modules.filter((module) => module.status === "completed").length;
  };

  const handleModuleClick = (moduleId: string, status: string) => {
    if (status !== "locked") {
      const my_module = modules.find((m) => m.id === moduleId);
      if (my_module) {
        router.push(
          `/home/topics/${encodeURIComponent(topicId)}/modules/${encodeURIComponent(my_module.title)}`
        );
      }
    }
  };

  // Format time helper
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} mins`;
    const hours = Math.floor(minutes / 60);
    const remainingMins = minutes % 60;
    return `${hours}h ${remainingMins}m`;
  };

  const totalTimeSpent = calculateTotalTimeSpent();
  const completedModules = calculateCompletedModules();
  const totalPercentage = calculateTotalProgress();

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
                    <span>{formatTime(totalTimeSpent)} total</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{modules.length} modules</span>
                  </div>
                </motion.div>

                {topicId === "Computer Science" || topicId === "Mathematics" ? (
                  <motion.div className="space-y-6" variants={stagger}>
                    {modules.map((module, index) => (
                      <motion.div
                        key={module.id}
                        variants={fadeIn}
                        onHoverStart={() => setActiveModule(index)}
                        onHoverEnd={() => setActiveModule(null)}
                        className="relative group"
                        onClick={() =>
                          handleModuleClick(module.id, module.status)
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
                              </div>
                              <Button
                                variant="outline"
                                className={`
                                border-[#55DC49]/30 hover:border-[#55DC49] hover:bg-[#55DC49]/10 min-w-[100px] hover:text-white
                                transition-all duration-300 bg-red-500`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleModuleClick(module.id, module.status);
                                }}
                              >
                                {index === 0 &&
                                  introductionProgress?.progress?.status ===
                                    "completed" &&
                                  "Review"}
                                {index === 0 &&
                                  introductionProgress?.progress?.status ===
                                    "in_progress" &&
                                  "Continue"}
                                {index === 0 &&
                                  introductionProgress?.progress?.status ===
                                    "not_started" &&
                                  "Start"}
                                {index === 1 &&
                                  coreProgress?.progress?.status ===
                                    "completed" &&
                                  "Review"}
                                {index === 1 &&
                                  coreProgress?.progress?.status ===
                                    "in_progress" &&
                                  "Continue"}
                                {(index === 1 &&
                                  coreProgress?.progress?.status ===
                                    "not_started") ||
                                  (!coreProgress?.progress &&
                                    index === 1 &&
                                    "Start")}
                                {index === 2 &&
                                  advancedProgress?.progress?.status ===
                                    "completed" &&
                                  "Review"}
                                {index === 2 &&
                                  advancedProgress?.progress?.status ===
                                    "in_progress" &&
                                  "Continue"}
                                {(index === 2 &&
                                  advancedProgress?.progress?.status ===
                                    "not_started") ||
                                  (!advancedProgress?.progress &&
                                    index === 2 &&
                                    "Start")}
                                {index === 3 &&
                                  practicalProgress?.progress?.status ===
                                    "completed" &&
                                  "Review"}
                                {index === 3 &&
                                  practicalProgress?.progress?.status ===
                                    "in_progress" &&
                                  "Continue"}
                                {(index === 3 &&
                                  practicalProgress?.progress?.status ===
                                    "not_started") ||
                                  (!practicalProgress?.progress &&
                                    index === 3 &&
                                    "Start")}
                              </Button>
                            </div>
                          </div>
                          <div className="relative">
                            <Progress
                              value={
                                index == 0
                                  ? introductionProgress?.progress?.progress
                                  : index == 1
                                    ? coreProgress?.progress?.progress
                                    : index == 2
                                      ? advancedProgress?.progress?.progress
                                      : practicalProgress?.progress?.progress
                              }
                              className="h-2 bg-[#2A2A2A]"
                            />
                            <div className="flex justify-between mt-2">
                              <span className="text-xs text-gray-400">
                                1 of 10 sections
                              </span>
                              <span className="text-xs text-[#55DC49]">
                                {index === 0 &&
                                  introductionProgress?.progress?.progress}
                                {index === 1 &&
                                  // @ts-expect-error {introductionProgress?.progress?.progress
                                  coreProgress?.progress?.progress | 0}
                                {index === 2 &&
                                  // @ts-expect-error {introductionProgress?.progress?.progress
                                  advancedProgress?.progress?.progress | 0}
                                {index === 3 &&
                                  // @ts-expect-error {introductionProgress?.progress?.progress
                                  practicalProgress?.progress?.progress | 0}
                                %
                              </span>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div className="space-y-6" variants={stagger}>
                    <Card className="bg-[#1A1A1A]/50 backdrop-blur-xl border-[#55DC49]/10 p-8">
                      <h2 className="text-2xl font-bold text-white mb-8">
                        Coming Soon
                      </h2>
                      <p className="text-gray-400">
                        We are working hard to bring you new content. Stay
                        tuned!
                      </p>
                    </Card>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>

          {topicId === "Computer Science" || topicId === "Mathematics" ? (
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
                      <span className="text-[#55DC49]">{totalPercentage}%</span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={totalPercentage}
                        className="h-3 bg-[#2A2A2A]"
                      />
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#55DC49] border-4 border-[#1A1A1A] shadow-lg" />
                    </div>
                  </div>

                  <div className="space-y-4"></div>

                  <Button
                    className="w-full bg-[#55DC49] hover:bg-[#3AA831] text-black font-semibold h-12 text-lg
                    transition-all duration-300 hover:shadow-lg hover:shadow-[#55DC49]/20"
                    onClick={() => {
                      const inProgressModule = modules.find(
                        (m) => m.status === "in-progress"
                      );
                      if (inProgressModule) {
                        handleModuleClick(
                          inProgressModule.id,
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
          ) : (
            <></>
          )}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Lock, ChevronRight } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Introduction to Core Concepts",
    duration: "5:30",
    status: "completed",
    type: "video",
  },
  {
    id: 2,
    title: "Understanding Key Principles",
    duration: "8:45",
    status: "current",
    type: "video",
  },
  {
    id: 3,
    title: "Practice Exercise 1",
    duration: "15:00",
    status: "locked",
    type: "exercise",
  },
  {
    id: 4,
    title: "Advanced Applications",
    duration: "7:20",
    status: "locked",
    type: "video",
  },
  {
    id: 5,
    title: "Final Assessment",
    duration: "20:00",
    status: "locked",
    type: "quiz",
  },
];

export function ModuleContent({ moduleId }: { moduleId: string }) {
  const [activeLesson, setActiveLesson] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-video rounded-xl overflow-hidden bg-[#232323] group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-[#55DC49] text-black flex items-center justify-center
              shadow-lg shadow-[#55DC49]/20 transition-transform"
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Understanding Key Principles
          </h3>
          <p className="text-gray-300">
            Learn the fundamental principles that will form the foundation of
            your knowledge.
          </p>
        </div>
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Course Content</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {lessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Card
                className={`group mb-4 bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 hover:border-[#55DC49]/30
                  ${activeLesson === lesson.id ? "border-[#55DC49]/50" : ""}
                  ${lesson.status === "locked" ? "opacity-50" : ""}
                  transition-all duration-300`}
              >
                <button
                  className="w-full p-4 flex items-center justify-between"
                  onClick={() =>
                    lesson.status !== "locked" && setActiveLesson(lesson.id)
                  }
                  disabled={lesson.status === "locked"}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center
                      ${
                        lesson.status === "completed"
                          ? "bg-[#55DC49]/20"
                          : lesson.status === "current"
                            ? "bg-yellow-500/20"
                            : "bg-gray-500/20"
                      }`}
                    >
                      {lesson.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-[#55DC49]" />
                      ) : lesson.status === "locked" ? (
                        <Lock className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Play className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white group-hover:text-[#55DC49] transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {lesson.type.charAt(0).toUpperCase() +
                          lesson.type.slice(1)}{" "}
                        • {lesson.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300
                    ${activeLesson === lesson.id ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

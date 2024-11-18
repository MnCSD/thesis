"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React, { useState } from "react";
import Mathematics from "../images/Matemathic.svg";
import Physics from "../images/Research.svg";
import Globe from "../images/Globe.svg";
import Board from "../images/Board.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tally1,
  Tally2,
  Tally3,
  ThermometerSnowflake,
  ThermometerSun,
  Thermometer,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import {
  LearningFrequency,
  LearningLevel,
  SubjectType,
} from "@/features/auth/types";
import { motion, AnimatePresence } from "framer-motion";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useCreatePreference } from "@/features/preferences/use-create-preference";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";

export const subjects: { name: SubjectType; image?: any }[] = [
  { name: "Mathematics", image: Mathematics },
  { name: "Science", image: Physics },
  { name: "Computer Science", image: Board },
  { name: "Language Arts", image: Globe },
  { name: "Other" },
];

export const levels = [
  { name: "beginner", image: Tally1 },
  { name: "intermediate", image: Tally2 },
  { name: "advanced", image: Tally3 },
];

export const frequencies = [
  { name: "daily", image: ThermometerSun },
  { name: "weekly", image: Thermometer },
  { name: "monthly", image: ThermometerSnowflake },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ExplorePage = () => {
  const { data, isLoading } = useGetPreferences();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [subject, setSubject] = useState<SubjectType>();
  const [level, setLevel] = useState<LearningLevel>();
  const [frequency, setFrequency] = useState<LearningFrequency>();
  const { mutate, isPending } = useCreatePreference();

  const handleSubmit = async () => {
    mutate(
      { subject, learningLevel: level, learningFrequency: frequency },
      {
        onSuccess(data) {
          console.log(data);
        },
      }
    );
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  if (!data) return null;
  7;

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-main w-full h-screen flex items-center justify-center"
      >
        <ClimbingBoxLoader color="#55DC49" className="rotate-45" />
      </motion.div>
    );
  }

  if (data?.length > 0) {
    router.push("/home");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-main min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#55DC49] rounded-full filter blur-[150px] opacity-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#55DC49] rounded-full filter blur-[150px] opacity-10"
      />

      <div className="max-w-4xl w-full mx-auto px-4 py-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Tutorly
          </h1>
          <p className="text-xl text-gray-300">
            Let&apos;s personalize your learning journey
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10"
          >
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#55DC49] text-center mb-8">
                  Pick a subject
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subjects.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSubject(item.name);
                        setStep(1);
                      }}
                      className={cn(
                        "group flex items-center gap-4 p-4 rounded-xl border border-white/20",
                        "hover:border-[#55DC49]/50 hover:bg-[#55DC49]/5 transition-all duration-300"
                      )}
                    >
                      {item.image && (
                        <div className="w-12 h-12 rounded-full bg-[#55DC49]/10 p-2 group-hover:bg-[#55DC49]/20 transition-colors">
                          <Image
                            src={item.image}
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                      )}
                      <span className="text-lg font-medium text-white group-hover:text-[#55DC49] transition-colors">
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#55DC49] text-center mb-8">
                  Choose your level
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  {levels.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setLevel(item.name as LearningLevel);
                        setStep(2);
                      }}
                      className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-white/20
                        hover:border-[#55DC49]/50 hover:bg-[#55DC49]/5 transition-all duration-300 w-full md:w-[180px]"
                    >
                      <item.image className="w-8 h-8 text-white group-hover:text-[#55DC49] transition-colors" />
                      <span className="text-lg font-medium text-white capitalize group-hover:text-[#55DC49] transition-colors">
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#55DC49] text-center mb-8">
                  How often would you like to learn?
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  {frequencies.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setFrequency(item.name as LearningFrequency)
                      }
                      className={cn(
                        "group flex flex-col items-center gap-4 p-6 rounded-xl border transition-all duration-300 w-full md:w-[180px]",
                        frequency === item.name
                          ? "border-[#55DC49] bg-[#55DC49]/10"
                          : "border-white/20 hover:border-[#55DC49]/50 hover:bg-[#55DC49]/5"
                      )}
                    >
                      <item.image className="w-8 h-8 text-white group-hover:text-[#55DC49] transition-colors" />
                      <span className="text-lg font-medium text-white capitalize group-hover:text-[#55DC49] transition-colors">
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    onClick={handleSubmit}
                    disabled={!frequency || isPending}
                    className="bg-[#55DC49] hover:bg-[#55DC49]/90 text-black font-semibold px-8 py-6 rounded-xl text-lg"
                  >
                    {isPending ? "Setting up..." : "Start Learning"}
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleBack}
              className="flex items-center gap-2 text-white/60 hover:text-[#55DC49] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/40 text-sm ml-auto"
          >
            Step {step + 1} of 3
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExplorePage;

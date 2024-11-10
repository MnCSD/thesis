"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React, { useEffect, useState } from "react";
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
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react";
import {
  LearningFrequency,
  LearningLevel,
  SubjectType,
} from "@/features/auth/types";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useCreatePreference } from "@/features/preferences/use-create-preference";
import { useGetPreferences } from "@/features/preferences/use-get-preferences";

export const subjects: { name: SubjectType; image?: any }[] = [
  {
    name: "Mathematics",
    image: Mathematics,
  },
  {
    name: "Science",
    image: Physics,
  },
  {
    name: "Coding",
    image: Board,
  },
  {
    name: "Language Arts",
    image: Globe,
  },
  {
    name: "Other",
  },
];

export const levels = [
  {
    name: "beginner",
    image: Tally1,
  },
  {
    name: "intermediate",
    image: Tally2,
  },
  {
    name: "advanced",
    image: Tally3,
  },
];

export const frequencies = [
  {
    name: "daily",
    image: ThermometerSun,
  },
  {
    name: "weekly",
    image: Thermometer,
  },
  {
    name: "monthly",
    image: ThermometerSnowflake,
  },
];

const ExplorePage = () => {
  const { data, isLoading } = useGetPreferences();
  const { signOut } = useAuthActions();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [subject, setSubject] = useState<SubjectType | undefined>(undefined);
  const [level, setLevel] = useState<LearningLevel | undefined>(undefined);
  const [frequency, setFrequency] = useState<LearningFrequency | undefined>(
    undefined
  );
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

  if (!data) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="bg-main w-full h-[100vh] overflow-hidden flex items-center justify-center pl-[0!important]">
        <ClimbingBoxLoader color="#55DC49" className="rotate-45" />
      </div>
    );
  }

  if (data?.length > 0) {
    router.push("/home");
  }

  return (
    <div className="bg-main w-full h-[100vh] overflow-hidden flex items-center justify-center flex-col py-4 pl-[0!important] px-4">
      <div className="h-full max-w-xl md:w-[700px] w-full lg:w-[1300px] py-10 text-center">
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Welcome to Tutorly
          </h1>
          <p className="text-xl font-semibold text-white">
            Let&apos;s get you set up for a personalized learning journey.
          </p>
        </div>

        <div
          className={cn(
            "h-[50vh] flex flex-col items-center justify-center gap-y-4 transition-all"
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-y-4 transition-all",
              step === 0 ? "opacity-100" : " opacity-0 hidden"
            )}
          >
            <span className=" font-semibold text-[#55DC49] text-xl opacity-100 mb-10">
              Pick a subject
            </span>

            {subjects.map((subject) => (
              <div
                onClick={() => {
                  setStep(1);
                  setSubject(subject.name);
                }}
                className="group flex items-center justify-center gap-x-2 border py-2 border-white border-opacity-20 rounded-md w-[200px] cursor-pointer transition-all  hover:border-[#55DC49] hover:border-opacity-50"
              >
                {subject.image && (
                  <Image
                    src={subject.image}
                    alt=""
                    className="w-6 h-6 group-hover:w-0 transition-all"
                  />
                )}

                <span className="text-base font-semibold text-white group-hover:text-[#55DC49] transition-all">
                  {subject.name}
                </span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center gap-y-4 transition-all ",
              step === 1 ? "opacity-100" : " opacity-0 hidden"
            )}
          >
            <span className=" font-semibold text-[#55DC49] text-xl opacity-100 mb-10">
              Pick a learning level
            </span>

            <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
              {levels.map((level) => (
                <div
                  onClick={() => {
                    setStep(2);
                    setLevel(level.name as LearningLevel);
                  }}
                  className="group flex flex-col items-center gap-y-2 border border-white border-opacity-20 rounded-md py-2 cursor-pointer w-[150px] transition-all  hover:border-[#55DC49] hover:border-opacity-50 bg-gray-300 bg-opacity-25"
                >
                  <span className="text-base capitalize font-semibold text-white group-hover:text-[#55DC49] transition-all">
                    {level.name}
                  </span>

                  <level.image className="text-white group-hover:text-[#55DC49] transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center gap-y-4 transition-all ",
              step === 2 ? "opacity-100" : " opacity-0 hidden"
            )}
          >
            <span className=" font-semibold text-[#55DC49] text-xl opacity-100 mb-10">
              Choose your learning frequency
            </span>
            <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
              {frequencies.map((frequency) => (
                <div
                  onClick={() => {
                    setFrequency(frequency.name as LearningFrequency);
                  }}
                  className="group flex flex-col items-center gap-y-2 border border-white border-opacity-20 rounded-md py-2 cursor-pointer w-[150px] transition-all  hover:border-[#55DC49] hover:border-opacity-50 bg-gray-300 bg-opacity-25"
                >
                  <span className="text-base font-semibold capitalize text-white group-hover:text-[#55DC49] transition-all">
                    {frequency.name}
                  </span>

                  <frequency.image className="text-white group-hover:text-[#55DC49] transition-all" />
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 py-2 px-3 rounded-lg bg-opacity-80 bg-[#55DC49] text-base font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <span className="text-gray-500 text-sm mb-2">
        *You can change this anytime.
      </span>
    </div>
  );
};

export default ExplorePage;

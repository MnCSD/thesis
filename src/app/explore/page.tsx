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

export const subjects = [
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

const ExplorePage = () => {
  const { signOut } = useAuthActions();
  const router = useRouter();
  const [step, setStep] = useState(0);

  return (
    <div className="bg-main w-full h-full flex items-center justify-center">
      <div className="h-full max-w-xl md:w-[700px] w-full lg:w-[1300px] py-10">
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-2xl font-semibold text-white">
            Welcome to Tutorly
          </h1>
          <p className="text-xl font-semibold text-white">
            Let&apos;s get you set up for a personalized learning journey.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-y-4">
          {step === 0 && (
            <>
              <span className=" font-semibold text-[#55DC49] text-xl opacity-100 mb-10">
                Pick a subject
              </span>

              {subjects.map((subject) => (
                <div className="group flex items-center justify-center gap-x-2 border py-2 border-white border-opacity-20 rounded-md w-[200px] cursor-pointer transition-all  hover:border-[#55DC49] hover:border-opacity-50">
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
              <span className="text-gray-500 text-sm">
                *You can change this anytime.
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;

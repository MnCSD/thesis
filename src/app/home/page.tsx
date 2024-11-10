"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Target,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Image from "next/image";
import Figure from "../images/teacher-3d.png";
import { QuestionSection } from "./components/question-section";
import { QuickActions } from "./components/quick-actions";

export default function HomePage() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, <span className="text-[#55DC49]">{user?.name}</span>
        </h1>
        <p className="text-gray-400">
          Pick up where you left off or start something new.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-white/5 border-0">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-full bg-[#55DC49]/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-[#55DC49]" />
            </div>
            <p className="text-sm text-gray-400">Last session</p>
          </div>
          <h3 className="text-lg font-semibold mt-4 text-white">
            Calculus: Derivatives
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Continue your learning journey
          </p>
          <Button className="w-full mt-4 bg-[#55DC49] hover:bg-[#4bc73f]">
            Resume Learning
          </Button>
        </Card>

        <Card className="p-6 bg-white/5 border-0">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-full bg-[#55DC49]/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-[#55DC49]" />
            </div>
            <p className="text-sm text-gray-400">Progress</p>
          </div>
          <h3 className="text-lg font-semibold mt-4 text-white">
            Weekly Goals
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            4 of 5 sessions completed
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
            <div
              className="bg-[#55DC49] h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </Card>

        <Card className="p-6 bg-white/5 border-0">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-full bg-[#55DC49]/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-[#55DC49]" />
            </div>
            <p className="text-sm text-gray-400">New</p>
          </div>
          <h3 className="text-lg font-semibold mt-4 text-white">
            Start New Topic
          </h3>
          <p className="text-sm text-gray-400 mt-2">Choose from our library</p>
          <Button
            variant="outline"
            className="w-full mt-4 border-[#55DC49] text-[#55DC49] hover:bg-[#55DC49] hover:text-white"
          >
            Browse Topics
          </Button>
        </Card>
      </section>

      <QuestionSection />
      <QuickActions />
    </div>
  );
}

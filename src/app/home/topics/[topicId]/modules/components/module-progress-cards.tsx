import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

interface ModuleProgressCardsProps {
  progress: number;
  currentSection: number;
  totalSections: number;
}

export function ModuleProgressCards({
  progress,
  currentSection,
  totalSections,
}: ModuleProgressCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 hover:border-[#55DC49]/30 transition-all duration-300 group">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
          Study Tips
          <Lightbulb className="w-5 h-5 text-[#55DC49]" />
        </h3>
        <ul className="space-y-2">
          <li className="text-gray-400 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-[#55DC49]" />
            Take notes on key concepts
          </li>
          <li className="text-gray-400 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-[#55DC49]" />
            Practice with examples
          </li>
          <li className="text-gray-400 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-[#55DC49]" />
            Review difficult sections
          </li>
        </ul>
      </Card>

      <Card className="bg-[#232323]/80 backdrop-blur border-[#55DC49]/10 p-6 hover:border-[#55DC49]/30 transition-all duration-300 group">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
          Progress Tracking
          <CheckCircle2 className="w-5 h-5 text-[#55DC49]" />
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Section Progress</span>
              <span className="text-[#55DC49]">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Concepts Mastered</span>
              <span className="text-[#55DC49]">
                {currentSection}/{totalSections}
              </span>
            </div>
            <Progress
              value={(currentSection / totalSections) * 100}
              className="h-2"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

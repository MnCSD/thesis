import { Card } from "@/components/ui/card";
import { Target, Calendar } from "lucide-react";

export function GoalsCard() {
  return (
    <Card className="p-6 bg-white/5 border-0">
      <h3 className="text-lg font-semibold text-white mb-4">Next Goals</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Target className="h-5 w-5 text-[#55DC49]" />
          <span className="text-gray-400">Complete Advanced Calculus</span>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 text-[#55DC49]" />
          <span className="text-gray-400">Maintain 7-day streak</span>
        </div>
      </div>
    </Card>
  );
}

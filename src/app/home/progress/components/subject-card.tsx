import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { formatTime } from "../../topics/[topicId]/modules/components/module-review";

interface SubjectCardProps {
  name: string;
  progress: number;
  hours: number;
  index: number;
}

export function SubjectCard({
  name,
  progress,
  hours,
  index,
}: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-6 bg-white/5 border-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-[#55DC49]">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-700">
            <div
              className="h-full bg-[#55DC49] transition-all"
              style={{ width: `${progress}%` }}
            />
          </Progress>

          <div className="flex justify-between text-sm text-gray-400">
            <span>{formatTime(hours)}</span>
            <span>{Math.round((progress / 100) * 40)} / 40 lessons</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { LearningNode } from "./learning-node";

interface Module {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
}

interface LearningPathProps {
  modules: Module[];
  topicId: string;
}

export function LearningPath({ modules, topicId }: LearningPathProps) {
  console.log(topicId + "TOPIC");

  return (
    <div className="relative">
      {/* Background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#55DC49]/10 -translate-x-1/2" />

      <div className="relative flex flex-col gap-32">
        {modules.map((module, index) => (
          <LearningNode
            key={module.id}
            module={module}
            topicId={topicId}
            index={index}
            total={modules.length}
          />
        ))}
      </div>
    </div>
  );
}

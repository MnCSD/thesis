import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle, Lock, Play } from "lucide-react";
import { useRouter } from "next/navigation";

interface LearningNodeProps {
  module: {
    id: string;
    title: string;
    description: string;
    status: string;
    progress: number;
  };
  topicId: string;
  index: number;
}

export function LearningNode({
  module,
  index,

  topicId,
}: LearningNodeProps) {
  const controls = useAnimationControls();
  const isEven = index % 2 === 0;
  const router = useRouter();

  useEffect(() => {
    controls.start({
      width: `${module.progress}%`,
      transition: { duration: 1, delay: index * 0.3 },
    });
  }, [module.progress, index, controls]);

  // const progressCircleVariants = {
  //   initial: { pathLength: 0 },
  //   animate: {
  //     pathLength: module.progress / 100,
  //     transition: { duration: 2, ease: "easeInOut", delay: index * 0.3 },
  //   },
  // };

  return (
    <motion.div
      onClick={() => router.push(`/home/topics/${topicId}`)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Node */}
      <motion.div
        className="relative shrink-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className={`
          w-36 h-36 rounded-full bg-[#55DC49]/5 border-2
          flex items-center justify-center relative overflow-hidden cursor-pointer
          ${module.status === "completed" ? "border-[#55DC49]" : ""}
          ${module.status === "in_progress" ? "border-[#55DC49]/50 animate-pulse" : ""}

        `}
        >
          {/* Circular progress */}
          {/* <svg className="absolute w-full h-full -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/10"
            />
            <motion.circle
              cx="72"
              cy="72"
              r="34"
              fill="none"
              stroke="#55DC49"
              strokeWidth="2"
              strokeLinecap="round"
              variants={progressCircleVariants}
              initial="initial"
              animate="animate"
              style={{ filter: "drop-shadow(0 0 8px #55DC49)" }}
            />
          </svg> */}

          {/* Icon */}
          <div className="relative z-10 flex flex-col items-center">
            {module.status === "completed" ? (
              <CheckCircle className="w-12 h-12 text-[#55DC49] mb-2" />
            ) : module.status === "in_progress" ? (
              <Play className="w-12 h-12 text-[#55DC49] mb-2" />
            ) : (
              <Lock className="w-12 h-12 text-white/40 mb-2" />
            )}

            {/* Progress percentage */}
            <span
              className={`text-2xl font-bold ${
                module.status === "completed"
                  ? "text-[#55DC49]"
                  : module.status === "in_progress"
                    ? "text-[#55DC49]/80"
                    : "text-white/40"
              }`}
            >
              {module.progress}%
            </span>
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#55DC49]/20 rounded-full opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`flex-1 ${isEven ? "text-left" : "text-right"}`}
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-[#55DC49]">
          {module.title}
        </h3>
        <p className="text-white/60">{module.description}</p>
      </motion.div>
    </motion.div>
  );
}

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

interface ModuleCompletionProps {
  onClose: () => void;
  stats: {
    accuracy: number;
    timeSpent: number;
    xpEarned: number;
  };
}

export function ModuleCompletion({ onClose, stats }: ModuleCompletionProps) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          colors={["#55DC49", "#3AA831", "#2C7A25", "#1E4C19"]}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-[#1A1A1A] rounded-xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-[#55DC49]/20"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-full bg-[#55DC49]/20 flex items-center justify-center mx-auto mb-6"
            >
              <Trophy className="w-10 h-10 text-[#55DC49]" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Congratulations! 🎉
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 mb-8"
            >
              You've successfully completed this module!
            </motion.p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-[#232323] rounded-lg p-4"
              >
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Accuracy</p>
                <p className="text-2xl font-bold text-white">
                  {stats.accuracy}%
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-[#232323] rounded-lg p-4"
              >
                <Award className="w-8 h-8 text-[#55DC49] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">XP Earned</p>
                <p className="text-2xl font-bold text-white">
                  {stats.xpEarned}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-[#232323] rounded-lg p-4"
              >
                <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Time</p>
                <p className="text-2xl font-bold text-white">
                  {stats.timeSpent}m
                </p>
              </motion.div>
            </div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={onClose}
              className="bg-[#55DC49] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#3AA831] transition-colors"
            >
              Continue Learning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

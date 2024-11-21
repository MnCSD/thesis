import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NotebookBackgroundProps {
  messagesLength: number;
}

export function NotebookBackground({}: NotebookBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate line glow effect based on mouse position
  const getLineGlow = (lineY: number) => {
    const distance = Math.abs(mousePosition.y - lineY);
    const maxDistance = 100;
    const intensity = 1 - Math.min(distance / maxDistance, 1);
    return intensity;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden ">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #55DC49 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #55DC49 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #55DC49 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #55DC49 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Vertical lines with glow effect */}
      <motion.div
        className="absolute left-[50px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-500/20 via-gray-500/20 to-gray-500/20"
        style={{
          boxShadow: `0 0 10px rgba(85, 220, 73, ${getLineGlow(mousePosition.x)})`,
        }}
      />

      {/* Horizontal lines with animation and glow */}
      <div className="absolute inset-0 ">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: 1,
              boxShadow: `0 0 ${getLineGlow((i + 1) * 32) * 10}px rgba(85, 220, 73, ${getLineGlow((i + 1) * 32)})`,
            }}
            transition={{
              duration: 1,
              delay: i * 0.02,
              ease: "easeOut",
            }}
            style={{ top: `${(i + 1) * 32}px` }}
            className="absolute w-full left-[50px] right-[50px] h-[1px] bg-gray-500/30 origin-left"
          />
        ))}
      </div>

      {/* Animated hole punches */}
      {[20, 50, 80].map((position, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            delay: i * 0.2,
          }}
          className="fixed left-4 w-4 h-4 rounded-full bg-gray-500/40"
          style={{
            top: `${position}%`,
            boxShadow: "0 0 10px rgba(85, 220, 73, 0.2)",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 rounded-full bg-[#55DC49]/20"
          />
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

interface ChalkPenProps {
  isVisible: boolean;
}

export function ChalkPen({ isVisible }: ChalkPenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="absolute -right-6 -top-6 pointer-events-none"
      style={{ zIndex: 2 }}
    >
      <motion.div
        animate={{
          rotate: [0, -5, 5, -5, 0],
          y: [0, -2, 2, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M2 22L3.5 19L5 22L6.5 19L8 22"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isVisible ? 1 : 0,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M4 2L4 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

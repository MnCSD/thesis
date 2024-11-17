import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { useMediaQuery } from "usehooks-ts";
import { GlowingButton } from "./glowing-button";

export function HeroSection() {
  const matches = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 pt-12 lg:pt-24"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl"
      >
        <div className="absolute inset-0 bg-[#55DC49] blur-[120px] opacity-10" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Experience the Future of {""}
          <div className="text-[#55DC49] mt-2 relative inline-block">
            <span className="relative z-10">Learning</span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#55DC49]/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-12"
      >
        <TypeAnimation
          sequence={[
            "Personalized AI Tutoring",
            1000,
            "24/7 Learning Support",
            1000,
            "Adaptive Curriculum",
            1000,
          ]}
          wrapper="div"
          speed={50}
          style={{
            fontSize: matches ? "1.5rem" : "2rem",
            color: "#55DC49",
            fontWeight: "600",
            textShadow: "0 0 20px rgba(85, 220, 73, 0.3)",
          }}
          repeat={Infinity}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 mb-16"
      >
        <GlowingButton>Get Started</GlowingButton>
        {/* <GlowingButton className="bg-white/5 !text-white hover:!text-[#55DC49]">
          Learn More
        </GlowingButton> */}
      </motion.div>
    </motion.div>
  );
}

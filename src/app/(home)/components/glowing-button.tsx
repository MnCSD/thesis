import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  className?: string;
}

export function GlowingButton({
  children,
  className = "",
}: GlowingButtonProps) {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (children === "Get Started") {
          router.push("/auth");
        }
      }}
      className={`
        relative px-8 py-4 bg-[#55DC49]/10 text-[#55DC49] rounded-xl
        overflow-hidden group transition-all duration-300
        hover:shadow-[0_0_30px_rgba(85,220,73,0.3)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#55DC49]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-[#55DC49]/10 opacity-40 group-hover:animate-shine" />
      <span className="relative z-10 font-medium">{children}</span>
    </motion.button>
  );
}

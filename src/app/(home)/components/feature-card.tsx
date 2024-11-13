import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#55DC49] to-[#55DC49]/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
      <motion.div
        whileHover={{ y: -5 }}
        className="relative flex flex-col h-full bg-[#1A1A1A] p-6 rounded-xl border border-[#55DC49]/10 hover:border-[#55DC49]/30 transition-colors duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}

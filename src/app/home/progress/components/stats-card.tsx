import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string | number;
  title: string;
  subtitle: string;
}

export function StatsCard({
  icon: Icon,
  value,
  title,
  subtitle,
}: StatsCardProps) {
  return (
    <Card className="p-6 bg-white/5 border-0">
      <div className="flex items-center justify-between mb-4">
        <div className="h-12 w-12 rounded-full bg-[#55DC49]/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-[#55DC49]" />
        </div>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-400 mt-2">{subtitle}</p>
    </Card>
  );
}

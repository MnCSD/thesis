"use client";

import { Card } from "@/components/ui/card";
import {
  Calculator,
  BookMarked,
  History,
  Award,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: Calculator,
    title: "Practice Problems",
    description: "Solve interactive exercises",
    href: "/practice",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: BookMarked,
    title: "Study Notes",
    description: "Access your saved materials",
    href: "/home/study-notes",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: History,
    title: "Learning History",
    description: "Review past sessions",
    href: "/history",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    icon: Award,
    title: "Achievements",
    description: "Track your milestones",
    href: "/achievements",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Brain,
    title: "Knowledge Map",
    description: "Visualize your progress",
    href: "/map",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: Lightbulb,
    title: "Daily Challenge",
    description: "Test your skills",
    href: "/challenge",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
];

export function QuickActions() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => (
          <Link key={action.title} href={action.href}>
            <Card className="p-4 bg-white/5 border-0 hover:bg-white/10 transition-colors duration-300 cursor-pointer group">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${action.bgColor}`}>
                  <action.icon
                    className={`w-6 h-6 ${action.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#55DC49] transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

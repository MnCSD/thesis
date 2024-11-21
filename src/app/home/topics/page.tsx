"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Code,
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  Brain,
  Dna,
  Atom,
  Music,
  Palette,
  ChartBar,
  Search,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const categories = {
  STEM: [
    {
      icon: Code,
      title: "Computer Science",
      description: "Programming, algorithms, and software engineering",
      difficulty: "Intermediate",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Algebra, calculus, and statistics",
      difficulty: "Advanced",
    },
    {
      icon: FlaskConical,
      title: "Science",
      description: "Physics, chemistry, and biology fundamentals",
      difficulty: "Beginner",
    },
    {
      icon: Atom,
      title: "Physics",
      description: "Forces, energy, and quantum mechanics",
      difficulty: "Advanced",
    },
    {
      icon: Dna,
      title: "Biology",
      description: "Life sciences and human anatomy",
      difficulty: "Intermediate",
    },
  ],
  "Arts & Humanities": [
    {
      icon: Globe,
      title: "Languages",
      description: "Learn new languages with AI assistance",
      difficulty: "Beginner",
    },
    {
      icon: BookOpen,
      title: "Literature",
      description: "Analysis, composition, and creative writing",
      difficulty: "Intermediate",
    },
    {
      icon: Music,
      title: "Music Theory",
      description: "Composition, harmony, and rhythm",
      difficulty: "Intermediate",
    },
    {
      icon: Palette,
      title: "Art History",
      description: "Movements, artists, and techniques",
      difficulty: "Beginner",
    },
  ],
  "Social Sciences": [
    {
      icon: Brain,
      title: "Psychology",
      description: "Human behavior and mental processes",
      difficulty: "Intermediate",
    },
    {
      icon: ChartBar,
      title: "Economics",
      description: "Micro and macroeconomic principles",
      difficulty: "Advanced",
    },
    {
      icon: GraduationCap,
      title: "Study Skills",
      description: "Time management and learning strategies",
      difficulty: "Beginner",
    },
  ],
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "text-green-400";
    case "Intermediate":
      return "text-yellow-400";
    case "Advanced":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
};

export default function TopicsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = Object.entries(categories).reduce(
    (acc, [category, topics]) => {
      const filtered = topics.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        //@ts-expect-error - Property 'category' does not exist on type '{}'
        acc[category] = filtered;
      }
      return acc;
    },
    {} as typeof categories
  );

  const handleTopicClick = (title: string) => {
    router.push(`/home/topics/${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#55DC49] to-[#3AA831]">
              Topics
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Choose from our wide range of subjects and start learning with your
            personalized AI tutor
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search topics..."
              className="w-full pl-12 pr-4 py-3 bg-[#1A1A1A] border-[#55DC49]/10 focus:border-[#55DC49]/50 text-white rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${!selectedCategory ? "bg-[#55DC49] text-black" : "bg-[#1A1A1A] text-white hover:bg-[#55DC49]/20"}`}
            >
              All
            </motion.button>
            {Object.keys(categories).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${selectedCategory === category ? "bg-[#55DC49] text-black" : "bg-[#1A1A1A] text-white hover:bg-[#55DC49]/20"}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {Object.entries(filteredCategories)
            .filter(
              ([category]) => !selectedCategory || category === selectedCategory
            )
            .map(([category, topics]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 ml-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="h-full"
                      onClick={() => handleTopicClick(topic.title)}
                    >
                      <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer bg-[#1A1A1A] border-[#55DC49]/10 hover:border-[#55DC49]/30 h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-[#55DC49]/10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <topic.icon className="w-8 h-8 text-[#55DC49] relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#55DC49] transition-colors duration-300">
                            {topic.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                            {topic.description}
                          </p>
                          <div className="mt-auto">
                            <span
                              className={`text-sm font-medium ${getDifficultyColor(topic.difficulty)}`}
                            >
                              {topic.difficulty}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#55DC49] to-[#3AA831] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#55DC49]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

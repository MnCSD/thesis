"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Calculator } from "lucide-react";

const problemSets = {
  "Computer Science": {
    beginner: [
      {
        title: "Basic Array Manipulation",
        description: "Create a function to find the largest number in an array",
        type: "Python",
      },
      {
        title: "String Reversal",
        description: "Write a program to reverse a given string",
        type: "JavaScript",
      },
    ],
    intermediate: [
      {
        title: "Binary Search",
        description: "Implement a binary search algorithm",
        type: "Java",
      },
      {
        title: "Linked List Operations",
        description: "Create a linked list with basic operations",
        type: "C++",
      },
    ],
  },
  Mathematics: {
    beginner: [
      {
        title: "Linear Equations",
        description: "Solve single-variable linear equations",
        type: "Algebra",
      },
      {
        title: "Basic Geometry",
        description: "Calculate areas and perimeters",
        type: "Geometry",
      },
    ],
    advanced: [
      {
        title: "Calculus Limits",
        description: "Evaluate complex limit problems",
        type: "Calculus",
      },
    ],
  },
  // Add more categories as needed...
};

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
    // ... rest of the STEM categories
  ],
  // ... rest of the category groups
};

export default function PracticeProblems() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  // @ts-expect-error error message
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedDifficulty(null);
    } else {
      setSelectedCategory(category);
      setSelectedDifficulty(null);
    }
  };

  const getDifficulties = (categoryTitle: string) => {
    // @ts-expect-error error message
    if (problemSets[categoryTitle]) {
      // @ts-expect-error error message
      return Object.keys(problemSets[categoryTitle]);
    }
    return [];
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0F0F0F]">
      <main className="relative container mx-auto px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Interactive Practice Problems
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Challenge yourself with adaptive, AI-powered practice problems
            across multiple disciplines.
          </p>
        </motion.div>

        {Object.entries(categories).map(([categoryGroup, categoryItems]) => (
          <div key={categoryGroup} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {categoryGroup}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {categoryItems.map((category) => (
                <motion.div
                  key={category.title}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(85, 220, 73, 0.25)",
                  }}
                  className={`
                    relative overflow-hidden
                    bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-transparent
                    border border-transparent
                    rounded-3xl p-6 
                    transform transition-transform duration-300
                    cursor-pointer
                    group
                    ${
                      selectedCategory === category
                        ? "ring-4 ring-[#55DC49] shadow-2xl shadow-[#55DC49]/30"
                        : "hover:border-[#55DC49]/30"
                    }
                  `}
                  onClick={() => handleCategoryClick(category)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: categoryItems.indexOf(category) * 0.2,
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className="text-6xl mb-4 text-center opacity-80 
                      transition-transform group-hover:scale-110 group-hover:rotate-6"
                    >
                      <category.icon className="mx-auto w-16 h-16 text-[#55DC49] opacity-70" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white text-center mb-4 
                      group-hover:text-[#55DC49] transition-colors"
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-center mb-4">
                      {category.description}
                    </p>

                    {selectedCategory === category &&
                      // @ts-expect-error error message
                      problemSets[category.title] && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6"
                        >
                          {!selectedDifficulty ? (
                            <div className="space-y-4">
                              {/* @ts-expect-error error message */}
                              {getDifficulties(category.title).map(
                                (difficulty) => (
                                  <motion.button
                                    key={difficulty}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      //   @ts-expect-error error message
                                      setSelectedDifficulty(difficulty);
                                    }}
                                    className="w-full bg-[#252525] text-white p-4 rounded-lg 
                                         hover:bg-[#353535] transition-colors duration-300
                                         flex justify-between items-center group"
                                  >
                                    <span className="text-lg font-semibold capitalize">
                                      {difficulty} Problems
                                    </span>
                                    <span className="text-sm text-[#55DC49] bg-[#55DC49]/10 px-2 py-1 rounded">
                                      {
                                        // @ts-expect-error error message
                                        problemSets[category.title][difficulty]
                                          .length
                                      }{" "}
                                      Available
                                    </span>
                                  </motion.button>
                                )
                              )}
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold text-white capitalize">
                                  {selectedDifficulty} Problems
                                </h4>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedDifficulty(null);
                                  }}
                                  className="text-[#55DC49] hover:underline text-sm"
                                >
                                  Back to Difficulties
                                </button>
                              </div>
                              {/* @ts-expect-error error message */}
                              {problemSets[category.title][
                                selectedDifficulty
                                // @ts-expect-error error message
                              ].map((problem, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="bg-[#252525] rounded-lg p-4 hover:bg-[#353535] transition-colors cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle starting the problem
                                    console.log(
                                      "Starting problem:",
                                      problem.title
                                    );
                                  }}
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="text-white font-semibold">
                                      {problem.title}
                                    </h5>
                                    <span className="text-sm text-[#55DC49] bg-[#55DC49]/10 px-2 py-1 rounded">
                                      {problem.type}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-sm">
                                    {problem.description}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

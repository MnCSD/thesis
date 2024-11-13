export const mathematicsModules = [
  {
    id: "introduction-to-algebra",
    title: "Introduction to Algebra",
    description: "Master the fundamentals of algebraic concepts",
    duration: "15 mins",
    slides: [
      {
        id: "what-is-algebra",
        title: "What is Algebra?",
        content: `Algebra is a branch of mathematics dealing with symbols and rules for manipulating these symbols.
  
  Key Concepts:
  • Variables and Constants
  • Expressions
  • Equations
  • Functions
  • Operations
  
  Applications:
  - Problem solving
  - Pattern recognition
  - Real-world modeling`,
        quiz: {
          question: "What do we use to represent unknown values in algebra?",
          options: ["Numbers", "Variables", "Constants", "Operators"],
          correctAnswer: 1,
        },
      },
      {
        id: "algebraic-expressions",
        title: "Algebraic Expressions",
        content: `Combinations of variables, numbers, and operations.
  
  Components:
  • Terms
  • Coefficients
  • Variables
  • Constants
  • Operators
  
  Examples:
  - 2x + 3
  - a² - b²
  - 3xy + 4x - 5`,
        quiz: {
          question: "In the expression 3x + 4, what is 3?",
          options: ["Variable", "Constant", "Coefficient", "Term"],
          correctAnswer: 2,
        },
      },
      // Add 8 more slides for introduction...
    ],
  },
  // Add 3 more modules with 10 slides each...
];

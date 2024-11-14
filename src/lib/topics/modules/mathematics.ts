export const mathematicsModules = [
  {
    id: "introduction-to-basics",
    title: "Introduction to the Basics",
    description:
      "Learn foundational concepts in mathematics, including definitions, number systems, and elementary algebra.",
    duration: "15 mins",
    slides: [
      {
        id: "what-is-math",
        title: "What is Mathematics?",
        content: `Mathematics is a field focused on understanding numbers, quantities, shapes, and patterns. It is a language of logical thinking and problem-solving, widely used in diverse fields such as science, engineering, economics, and everyday life. This slide introduces students to the broad purpose of mathematics, emphasizing its role in explaining natural phenomena, solving real-world problems, and forming the basis of many scientific disciplines.
        
        Key Areas:
        • Arithmetic – Involves basic calculations with numbers.
        • Algebra – Works with symbols to represent numbers and solve equations.
        • Geometry – Studies shapes, sizes, and the properties of space.
        • Calculus – Examines change and motion through limits, derivatives, and integrals.
        • Statistics – Focuses on data analysis and probability to make informed predictions.`,
        quiz: {
          question: "What is the primary focus of mathematics?",
          options: [
            "Studying computers and codes",
            "Analyzing numbers, shapes, and patterns",
            "Exploring biological processes",
            "Investigating psychological behaviors",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "number-systems",
        title: "Number Systems",
        content: `Number systems are foundational in mathematics, representing different methods for expressing values. Understanding these systems is crucial, as each serves a unique role in mathematics and science. For instance, natural numbers (1, 2, 3, ...) are basic counting numbers, while integers expand this set to include negatives and zero. Rational numbers introduce fractions and decimals, offering a way to represent parts of a whole. Real numbers include both rational and irrational numbers, covering all values on the number line, whereas complex numbers expand beyond the real number system by incorporating an imaginary component, allowing for advanced applications in physics and engineering.`,
        quiz: {
          question: "Which system includes fractions?",
          options: [
            "Natural Numbers",
            "Rational Numbers",
            "Integers",
            "Complex Numbers",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "basic-algebra",
        title: "Introduction to Algebra",
        content: `Algebra introduces students to symbolic mathematics, where letters and symbols represent numbers or quantities in formulas and equations. This slide covers the basics of algebraic structures, focusing on variables (unknown or changeable values), expressions (combinations of numbers, variables, and operations), and equations (statements of equality between expressions). Students also explore functions, a concept fundamental to algebra, which describes the relationship between inputs and outputs, forming the basis of understanding mathematical relationships and changes in various fields like physics, economics, and data science.`,
        quiz: {
          question: "What represents an unknown in algebra?",
          options: ["Equation", "Variable", "Expression", "Function"],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    description:
      "Explore essential mathematical theories, including geometry, probability, and calculus fundamentals.",
    duration: "25 mins",
    slides: [
      {
        id: "geometry-basics",
        title: "Geometry Basics",
        content: `Geometry focuses on the study of shapes, sizes, and the spatial relationships of objects. This slide introduces core geometry topics, such as points (locations without size), lines (infinite series of points in a single dimension), and angles (relationships between two intersecting lines). Students will learn about calculating perimeter, area, and volume for basic shapes like triangles, rectangles, and circles, laying the groundwork for more advanced concepts like the Pythagorean theorem and coordinate geometry. Geometry is crucial in fields from architecture and engineering to computer graphics and physics.`,
        quiz: {
          question: "What measures the boundary length of a shape?",
          options: ["Area", "Volume", "Perimeter", "Angle"],
          correctAnswer: 2,
        },
      },
      {
        id: "probability-and-statistics",
        title: "Probability and Statistics",
        content: `Probability and statistics are the branches of mathematics that deal with analyzing chance and interpreting data. Probability examines the likelihood of events happening and underpins many practical fields, including finance, medicine, and social sciences. Statistics, on the other hand, involves gathering, organizing, analyzing, and interpreting data, enabling informed predictions and decisions. Key concepts here include central measures like mean, median, and mode, along with variance and standard deviation, which help understand data spread. Probability distributions and sampling methods are also covered, highlighting their use in studies and predictive models.`,
        quiz: {
          question: "Which is a measure of central tendency?",
          options: ["Probability", "Mean", "Variance", "Distribution"],
          correctAnswer: 1,
        },
      },
      {
        id: "calculus-basics",
        title: "Introduction to Calculus",
        content: `Calculus is the mathematics of change, focusing on how quantities vary over time. This slide covers the foundational ideas of limits (values a function approaches as input approaches some point), derivatives (rates of change), and integrals (accumulation of quantities). These principles are crucial in physics, engineering, economics, and biology, where they help model dynamic systems and optimize processes. Students will gain a basic understanding of these concepts, which can be used to analyze and predict patterns in real-world phenomena, such as the growth rate of populations or the speed of an object.`,
        quiz: {
          question: "What calculates rates of change?",
          options: ["Limits", "Integrals", "Derivatives", "Statistics"],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "advanced-techniques",
    title: "Advanced Techniques",
    description:
      "Master complex mathematical concepts and methodologies, including linear algebra and discrete mathematics.",
    duration: "30 mins",
    slides: [
      {
        id: "linear-algebra",
        title: "Linear Algebra",
        content: `Linear algebra studies vector spaces and linear mappings between these spaces, focusing on vectors (quantities with direction and magnitude) and matrices (arrays of numbers). This slide explores how vectors and matrices represent data, perform transformations, and solve systems of equations. Key applications include computer graphics (where transformations model 3D environments), data science (where matrices represent datasets), and engineering (for optimizing systems). Linear algebra is essential for handling large datasets and understanding machine learning algorithms.`,
        quiz: {
          question: "Which represents a magnitude and direction?",
          options: ["Matrix", "Vector", "Scalar", "Eigenvalue"],
          correctAnswer: 1,
        },
      },
      {
        id: "discrete-mathematics",
        title: "Discrete Mathematics",
        content: `Discrete mathematics is the study of structures that are fundamentally separate or distinct, rather than continuous. It includes graph theory (analyzing networks and connections), combinatorics (counting and arrangement of elements), set theory (collections of objects), and logic (principles of reasoning). Discrete math is especially relevant in computer science, where it supports algorithm design, cryptography, and data structures, helping students understand the underlying structures of digital systems and the mathematics of information.`,
        quiz: {
          question: "What studies network structures?",
          options: ["Algebra", "Combinatorics", "Graph Theory", "Calculus"],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "practical-applications",
    title: "Practical Applications",
    description:
      "Apply mathematical concepts to real-world scenarios in data science, engineering, and other fields.",
    duration: "45 mins",
    slides: [
      {
        id: "data-science",
        title: "Mathematics in Data Science",
        content: `Data science heavily relies on mathematical concepts like statistics, linear algebra, and calculus to extract insights from data. This slide covers data preparation, statistical analysis, predictive modeling, and visualization. These methods help scientists and analysts turn raw data into meaningful insights, enabling informed decision-making across fields such as finance, healthcare, and marketing. Students learn how statistical models and linear algebra support data science tasks like clustering, classification, and trend forecasting.`,
        quiz: {
          question: "Which step involves making future predictions?",
          options: [
            "Data Cleaning",
            "Predictive Modeling",
            "Analysis",
            "Visualization",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "engineering",
        title: "Engineering Mathematics",
        content: `Engineering applications often require specific mathematical methods to solve real-world problems. This slide highlights differential equations (modeling dynamic systems), Laplace transforms (simplifying complex functions), Fourier analysis (breaking down signals), and optimization (finding the best solutions under given constraints). These techniques are vital in fields like electrical, mechanical, and civil engineering, where they support design, analysis, and control of systems. Engineering mathematics provides the tools needed for creating efficient and functional designs.`,
        quiz: {
          question: "Which area models dynamic systems?",
          options: [
            "Fourier Analysis",
            "Optimization",
            "Differential Equations",
            "Statistics",
          ],
          correctAnswer: 2,
        },
      },
    ],
  },
];

export const computerScienceModules = [
  {
    id: "introduction-to-the-basics",
    title: "Introduction to the Basics",
    description: "Learn the fundamental concepts of computer science",
    duration: "15 mins",
    slides: [
      {
        id: "what-is-cs",
        title: "What is Computer Science?",
        content: `Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mainly with software and software systems.
  
  Key Areas:
  • Algorithms and Data Structures
  • Programming Languages
  • Computer Architecture
  • Operating Systems
  • Networks and Security`,
        quiz: {
          question: "What is the main focus of computer science?",
          options: [
            "Software and computational systems",
            "Hardware manufacturing",
            "Electrical circuits",
            "Internet cables",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "binary-numbers",
        title: "Binary and Number Systems",
        content: `Understanding how computers represent information.
  
  Binary System:
  • Base-2 number system
  • Only uses 0 and 1
  • Foundation of digital computing
  
  Examples:
  - 5 in binary: 101
  - 10 in binary: 1010
  - Text in binary: 01101000 01101001`,
        quiz: {
          question: "What is 5 in binary?",
          options: ["100", "101", "110", "111"],
          correctAnswer: 1,
        },
      },
      {
        id: "algorithms-intro",
        title: "Introduction to Algorithms",
        content: `An algorithm is a step-by-step procedure for solving a problem.
  
  Characteristics:
  • Input - What goes in
  • Output - What comes out
  • Definiteness - Clear steps
  • Finiteness - Must end
  • Effectiveness - Must be doable`,
        quiz: {
          question: "What must every algorithm have?",
          options: [
            "A computer to run on",
            "A programming language",
            "Input and output",
            "Internet connection",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "programming-basics",
        title: "Programming Fundamentals",
        content: `Basic concepts of programming languages.
  
  Core Elements:
  • Variables - Store data
  • Control Flow - Make decisions
  • Loops - Repeat actions
  • Functions - Reusable code
  • Input/Output - User interaction`,
        quiz: {
          question: "What allows code to make decisions?",
          options: ["Variables", "Control Flow", "Loops", "Functions"],
          correctAnswer: 1,
        },
      },
      {
        id: "data-types",
        title: "Data Types and Variables",
        content: `Different kinds of data in programming.
  
  Common Data Types:
  • Numbers (Integer, Float)
  • Text (String)
  • Boolean (True/False)
  • Arrays (Lists)
  • Objects (Collections)`,
        quiz: {
          question: "Which data type stores text?",
          options: ["Integer", "Boolean", "String", "Float"],
          correctAnswer: 2,
        },
      },
      {
        id: "logic-gates",
        title: "Logic Gates and Boolean Algebra",
        content: `Fundamental building blocks of digital circuits.
  
  Basic Gates:
  • AND - Both inputs true
  • OR - At least one input true
  • NOT - Inverts input
  • XOR - Exclusive OR
  • NAND - Not AND`,
        quiz: {
          question: "What does an AND gate require?",
          options: [
            "One true input",
            "Both inputs true",
            "No true inputs",
            "Either input true",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "memory-storage",
        title: "Computer Memory and Storage",
        content: `How computers store and access data.
  
  Memory Types:
  • RAM - Random Access Memory
  • ROM - Read Only Memory
  • Cache - Fast temporary storage
  • Hard Drive - Permanent storage
  • SSD - Solid State Drive`,
        quiz: {
          question: "Which memory type is temporary?",
          options: ["ROM", "Hard Drive", "RAM", "SSD"],
          correctAnswer: 2,
        },
      },
      {
        id: "networking-basics",
        title: "Basic Networking Concepts",
        content: `How computers communicate with each other.
  
  Key Concepts:
  • IP Addresses
  • DNS (Domain Name System)
  • Protocols (HTTP, FTP)
  • Client-Server Model
  • Network Security`,
        quiz: {
          question: "What translates domain names to IP addresses?",
          options: ["HTTP", "FTP", "DNS", "IP"],
          correctAnswer: 2,
        },
      },
      {
        id: "software-development",
        title: "Software Development Process",
        content: `Steps in creating software applications.
  
  Development Lifecycle:
  • Requirements Analysis
  • Design
  • Implementation
  • Testing
  • Deployment
  • Maintenance`,
        quiz: {
          question: "What comes after implementation?",
          options: ["Design", "Requirements", "Testing", "Deployment"],
          correctAnswer: 2,
        },
      },
      {
        id: "future-cs",
        title: "Future of Computer Science",
        content: `Emerging trends and technologies.
  
  Growing Fields:
  • Artificial Intelligence
  • Machine Learning
  • Quantum Computing
  • Cybersecurity
  • Cloud Computing
  • Internet of Things`,
        quiz: {
          question: "Which is an emerging computing paradigm?",
          options: [
            "Floppy disks",
            "Quantum Computing",
            "DOS",
            "Dial-up internet",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    description: "Deep dive into essential theories and practical applications",
    duration: "25 mins",
    slides: [
      {
        id: "data-structures",
        title: "Data Structures",
        content: `Data structures are specialized formats for organizing and storing data.
  
  Common Data Structures:
  • Arrays - Sequential collection
  • Linked Lists - Connected nodes
  • Trees - Hierarchical structure
  • Hash Tables - Key-value pairs
  • Graphs - Nodes and edges
  
  Use Cases:
  - Arrays: Simple lists
  - Trees: File systems
  - Graphs: Social networks`,
        quiz: {
          question: "Which data structure uses key-value pairs?",
          options: ["Array", "Tree", "Hash Table", "Linked List"],
          correctAnswer: 2,
        },
      },
      {
        id: "sorting-algorithms",
        title: "Sorting Algorithms",
        content: `Methods for arranging data in a specific order.
  
  Common Algorithms:
  • Bubble Sort - O(n²)
  • Quick Sort - O(n log n)
  • Merge Sort - O(n log n)
  • Insertion Sort - O(n²)
  • Selection Sort - O(n²)`,
        quiz: {
          question: "Which sorting algorithm is typically fastest?",
          options: [
            "Bubble Sort",
            "Quick Sort",
            "Selection Sort",
            "Insertion Sort",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "searching-algorithms",
        title: "Searching Algorithms",
        content: `Techniques for finding data in collections.
  
  Common Approaches:
  • Linear Search - O(n)
  • Binary Search - O(log n)
  • Hash-based Search - O(1)
  • Depth-First Search
  • Breadth-First Search`,
        quiz: {
          question: "Which search requires sorted data?",
          options: [
            "Linear Search",
            "Binary Search",
            "Hash Search",
            "Sequential Search",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "recursion",
        title: "Recursion",
        content: `Functions that call themselves to solve problems.
  
  Key Concepts:
  • Base Case
  • Recursive Case
  • Call Stack
  • Memory Usage
  • Optimization`,
        quiz: {
          question: "What prevents infinite recursion?",
          options: ["Base Case", "Recursive Case", "Call Stack", "Memory"],
          correctAnswer: 0,
        },
      },
      {
        id: "oop-concepts",
        title: "Object-Oriented Programming",
        content: `Programming paradigm based on objects.
  
  Core Concepts:
  • Encapsulation
  • Inheritance
  • Polymorphism
  • Abstraction
  
  Benefits:
  - Code reuse
  - Modularity
  - Maintainability`,
        quiz: {
          question:
            "What allows code reuse through parent-child relationships?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "databases",
        title: "Database Systems",
        content: `Organized collections of structured data.
  
  Types:
  • Relational (SQL)
  • NoSQL
  • Object-Oriented
  • Graph
  • Time-Series`,
        quiz: {
          question: "Which database type uses tables?",
          options: ["NoSQL", "Graph", "Relational", "Time-Series"],
          correctAnswer: 2,
        },
      },
      {
        id: "operating-systems",
        title: "Operating Systems",
        content: `Software that manages hardware and software resources.
  
  Components:
  • Process Management
  • Memory Management
  • File Systems
  • Device Drivers
  • User Interface`,
        quiz: {
          question: "What manages hardware resources?",
          options: [
            "Applications",
            "Operating System",
            "Web Browser",
            "Text Editor",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "networking-protocols",
        title: "Network Protocols",
        content: `Rules for communication between devices.
  
  Common Protocols:
  • TCP/IP
  • HTTP/HTTPS
  • FTP
  • SSH
  • DNS`,
        quiz: {
          question: "Which protocol is used for secure web browsing?",
          options: ["FTP", "HTTP", "HTTPS", "SSH"],
          correctAnswer: 2,
        },
      },
      {
        id: "software-architecture",
        title: "Software Architecture",
        content: `High-level structure of software systems.
  
  Patterns:
  • Client-Server
  • Microservices
  • Layered Architecture
  • Event-Driven
  • MVC Pattern`,
        quiz: {
          question: "Which pattern separates data, view, and logic?",
          options: ["Client-Server", "Microservices", "MVC", "Event-Driven"],
          correctAnswer: 2,
        },
      },
      {
        id: "security-principles",
        title: "Security Principles",
        content: `Fundamental concepts of cybersecurity.
  
  Key Areas:
  • Authentication
  • Authorization
  • Encryption
  • Security Protocols
  • Best Practices`,
        quiz: {
          question: "What verifies user identity?",
          options: [
            "Authorization",
            "Authentication",
            "Encryption",
            "Protocols",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "advanced-techniques",
    title: "Advanced Techniques",
    description: "Master complex problem-solving and advanced methodologies",
    duration: "30 mins",
    slides: [
      {
        id: "algorithm-analysis",
        title: "Algorithm Analysis",
        content: `Understanding algorithm efficiency and complexity.
  
  Big O Notation:
  • O(1) - Constant time
  • O(log n) - Logarithmic
  • O(n) - Linear
  • O(n²) - Quadratic
  • O(2ⁿ) - Exponential
  
  Analysis Factors:
  - Time complexity
  - Space complexity
  - Best/worst cases`,
        quiz: {
          question: "Which notation represents constant time complexity?",
          options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
          correctAnswer: 1,
        },
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        content: `Optimization technique for complex problems.
  
  Characteristics:
  • Overlapping subproblems
  • Optimal substructure
  • Memoization
  • Bottom-up approach
  • Top-down approach`,
        quiz: {
          question: "What technique stores calculated results?",
          options: ["Recursion", "Iteration", "Memoization", "Sorting"],
          correctAnswer: 2,
        },
      },
      {
        id: "distributed-systems",
        title: "Distributed Systems",
        content: `Systems with multiple connected components.
  
  Challenges:
  • Consistency
  • Availability
  • Partition Tolerance
  • Scalability
  • Fault Tolerance`,
        quiz: {
          question: "What is the CAP theorem about?",
          options: [
            "Coding standards",
            "Database design",
            "Distributed systems",
            "Network protocols",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "machine-learning",
        title: "Machine Learning Fundamentals",
        content: `Systems that learn from data.
  
  Types:
  • Supervised Learning
  • Unsupervised Learning
  • Reinforcement Learning
  • Deep Learning
  • Neural Networks`,
        quiz: {
          question: "Which uses labeled data?",
          options: [
            "Unsupervised Learning",
            "Supervised Learning",
            "Reinforcement Learning",
            "Random Learning",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "parallel-computing",
        title: "Parallel Computing",
        content: `Simultaneous execution of computations.
  
  Concepts:
  • Threading
  • Multiprocessing
  • Distributed Computing
  • GPU Computing
  • Cluster Computing`,
        quiz: {
          question: "What allows simultaneous execution?",
          options: [
            "Sequential Processing",
            "Parallel Processing",
            "Single Threading",
            "Linear Processing",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "cryptography",
        title: "Cryptography",
        content: `Securing information through encoding.
  
  Types:
  • Symmetric Encryption
  • Asymmetric Encryption
  • Hashing
  • Digital Signatures
  • Key Exchange`,
        quiz: {
          question: "Which uses public and private keys?",
          options: [
            "Symmetric Encryption",
            "Hashing",
            "Asymmetric Encryption",
            "Basic Encoding",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "compiler-design",
        title: "Compiler Design",
        content: `Converting high-level code to machine code.
  
  Phases:
  • Lexical Analysis
  • Parsing
  • Semantic Analysis
  • Code Generation
  • Optimization`,
        quiz: {
          question: "What is the first phase of compilation?",
          options: [
            "Parsing",
            "Lexical Analysis",
            "Code Generation",
            "Optimization",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "quantum-computing",
        title: "Quantum Computing",
        content: `Computing using quantum phenomena.
  
  Concepts:
  • Qubits
  • Superposition
  • Entanglement
  • Quantum Gates
  • Quantum Algorithms`,
        quiz: {
          question: "What is the basic unit of quantum information?",
          options: ["Bit", "Byte", "Qubit", "Word"],
          correctAnswer: 2,
        },
      },
      {
        id: "blockchain",
        title: "Blockchain Technology",
        content: `Decentralized, distributed ledger technology.
  
  Components:
  • Blocks
  • Cryptographic Hash
  • Consensus Mechanisms
  • Smart Contracts
  • Distributed Network`,
        quiz: {
          question: "What ensures block immutability?",
          options: [
            "Network Size",
            "Cryptographic Hash",
            "Block Size",
            "Transaction Speed",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "ai-ethics",
        title: "AI and Ethics",
        content: `Ethical considerations in AI development.
  
  Key Issues:
  • Bias in AI
  • Privacy Concerns
  • Accountability
  • Transparency
  • Social Impact`,
        quiz: {
          question: "What helps prevent discriminatory AI?",
          options: [
            "Faster Processing",
            "More Data",
            "Bias Detection",
            "Larger Models",
          ],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "practical-applications",
    title: "Practical Applications",
    description:
      "Apply your knowledge through real-world scenarios and projects",
    duration: "45 mins",
    slides: [
      {
        id: "web-development",
        title: "Web Development",
        content: `Building modern web applications.
  
  Technologies:
  • Frontend
    - HTML, CSS, JavaScript
    - React, Vue, Angular
    - Responsive design
  
  • Backend
    - Node.js, Python, Java
    - APIs and databases
    - Security practices`,
        quiz: {
          question: "Which is a frontend framework?",
          options: ["Node.js", "React", "Python", "MySQL"],
          correctAnswer: 1,
        },
      },
      {
        id: "mobile-development",
        title: "Mobile App Development",
        content: `Creating applications for mobile devices.
  
  Approaches:
  • Native Development
  • Cross-Platform
  • Progressive Web Apps
  • Hybrid Apps
  • Mobile-First Design`,
        quiz: {
          question: "What works on multiple platforms?",
          options: [
            "Native Apps",
            "Cross-Platform Apps",
            "iOS Apps",
            "Android Apps",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        content: `Services and resources over the internet.
  
  Services:
  • IaaS
  • PaaS
  • SaaS
  • Serverless
  • Cloud Storage`,
        quiz: {
          question: "Which provides infrastructure services?",
          options: ["SaaS", "PaaS", "IaaS", "FaaS"],
          correctAnswer: 2,
        },
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        content: `Analyzing data for insights.
  
  Process:
  • Data Collection
  • Data Cleaning
  • Analysis
  • Visualization
  • Reporting`,
        quiz: {
          question: "What comes after data collection?",
          options: ["Analysis", "Reporting", "Cleaning", "Visualization"],
          correctAnswer: 2,
        },
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Applications",
        content: `Protecting systems and data.
  
  Areas:
  • Network Security
  • Application Security
  • Data Protection
  • Identity Management
  • Incident Response`,
        quiz: {
          question: "What protects against unauthorized access?",
          options: [
            "Data Analysis",
            "Identity Management",
            "Visualization",
            "Reporting",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "iot-applications",
        title: "Internet of Things",
        content: `Connected devices and sensors.
  
  Components:
  • Sensors
  • Connectivity
  • Data Processing
  • User Interface
  • Automation`,
        quiz: {
          question: "What collects environmental data?",
          options: ["Interface", "Sensors", "Processing", "Automation"],
          correctAnswer: 1,
        },
      },
      {
        id: "game-development",
        title: "Game Development",
        content: `Creating interactive entertainment.
  
  Elements:
  • Game Engine
  • Graphics
  • Physics
  • AI
  • User Input`,
        quiz: {
          question: "What handles game physics?",
          options: [
            "Graphics Engine",
            "Game Engine",
            "Input System",
            "Sound System",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "devops",
        title: "DevOps Practices",
        content: `Combining development and operations.
  
  Principles:
  • Continuous Integration
  • Continuous Deployment
  • Automation
  • Monitoring
  • Collaboration`,
        quiz: {
          question: "What automates code integration?",
          options: [
            "Monitoring",
            "Continuous Integration",
            "Deployment",
            "Testing",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "ai-applications",
        title: "AI Applications",
        content: `Real-world AI implementations.
  
  Applications:
  • Computer Vision
  • Natural Language Processing
  • Robotics
  • Expert Systems
  • Recommendation Systems`,
        quiz: {
          question: "What processes human language?",
          options: [
            "Computer Vision",
            "Natural Language Processing",
            "Robotics",
            "Expert Systems",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "future-applications",
        title: "Future Applications",
        content: `Emerging technology applications.
  
  Areas:
  • Quantum Applications
  • Brain-Computer Interfaces
  • Augmented Reality
  • Smart Cities
  • Space Technology`,
        quiz: {
          question: "What combines virtual and real worlds?",
          options: [
            "Smart Cities",
            "Augmented Reality",
            "Quantum Computing",
            "Space Tech",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
];

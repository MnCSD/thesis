export const physicsModules = [
  {
    id: "introduction-to-the-basics",
    title: "Introduction to the Basics",
    description: "Learn the fundamental concepts of physics",
    duration: "15 mins",
    slides: [
      {
        id: "what-is-physics",
        title: "What is Physics?",
        content: `Physics is the study of matter, energy, and their interactions across the universe.

Key Areas:
• Mechanics
• Thermodynamics
• Electromagnetism
• Quantum Mechanics
• Relativity
• Optics
• Nuclear Physics
• Particle Physics
• Astrophysics
• Condensed Matter Physics`,
        quiz: {
          question: "What is the primary focus of physics?",
          options: [
            "Study of living organisms",
            "Study of matter and energy",
            "Study of mathematical models",
            "Study of chemical reactions",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "scientific-method-in-physics",
        title: "Scientific Method in Physics",
        content: `The scientific method is a systematic approach to understanding physical phenomena.

Steps:
• Observation
• Hypothesis Formation
• Mathematical Modeling
• Experimental Design
• Data Collection
• Statistical Analysis
• Theoretical Prediction
• Peer Review
• Experimental Verification
• Theory Refinement`,
        quiz: {
          question: "What is crucial in physics research?",
          options: [
            "Observation",
            "Mathematical Modeling",
            "Experimental Verification",
            "Peer Review",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "fundamental-forces",
        title: "Fundamental Forces of Nature",
        content: `Physics studies the fundamental interactions in the universe.

Four Fundamental Forces:
• Gravitational Force
• Electromagnetic Force
• Strong Nuclear Force
• Weak Nuclear Force
• Quantum Interactions
• Force Carriers
• Quantum Field Theory
• Symmetry Principles
• Force Unification
• Quantum Mechanics`,
        quiz: {
          question: "What is the weakest fundamental force?",
          options: [
            "Strong Nuclear Force",
            "Electromagnetic Force",
            "Weak Nuclear Force",
            "Gravitational Force",
          ],
          correctAnswer: 3,
        },
      },
      {
        id: "measurement-and-units",
        title: "Measurement and Physical Units",
        content: `Precise measurement is crucial in physics.

Measurement Systems:
• SI Units
• Imperial Units
• Metric System
• Standard Units
• Dimensional Analysis
• Significant Figures
• Error Estimation
• Precision Instruments
• Calibration
• Measurement Standards`,
        quiz: {
          question: "What is the SI base unit of mass?",
          options: ["Pound", "Kilogram", "Gram", "Ounce"],
          correctAnswer: 1,
        },
      },
      {
        id: "motion-and-kinematics",
        title: "Motion and Kinematics",
        content: `Understanding the motion of objects.

Key Concepts:
• Position
• Velocity
• Acceleration
• Displacement
• Trajectory
• Newton's Laws
• Relative Motion
• Circular Motion
• Projectile Motion
• Reference Frames`,
        quiz: {
          question: "What describes rate of change of position?",
          options: ["Position", "Velocity", "Acceleration", "Displacement"],
          correctAnswer: 1,
        },
      },
      {
        id: "energy-conservation",
        title: "Energy Conservation Principles",
        content: `Energy transformations and conservation.

Energy Types:
• Kinetic Energy
• Potential Energy
• Mechanical Energy
• Thermal Energy
• Electrical Energy
• Nuclear Energy
• Chemical Energy
• Gravitational Energy
• Elastic Energy
• Radiant Energy`,
        quiz: {
          question:
            "What principle states energy cannot be created or destroyed?",
          options: [
            "Energy Transformation",
            "Energy Conservation",
            "Energy Transfer",
            "Energy Dissipation",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "waves-and-oscillations",
        title: "Waves and Oscillatory Motion",
        content: `Understanding wave phenomena.

Wave Characteristics:
• Wave Types
• Frequency
• Amplitude
• Wavelength
• Wave Speed
• Interference
• Resonance
• Standing Waves
• Doppler Effect
• Wave Propagation`,
        quiz: {
          question: "What is the distance between wave crests?",
          options: ["Amplitude", "Frequency", "Wavelength", "Wave Speed"],
          correctAnswer: 2,
        },
      },
      {
        id: "thermodynamic-principles",
        title: "Basic Thermodynamic Principles",
        content: `Understanding heat and energy transfer.

Thermodynamic Concepts:
• Temperature
• Heat
• Work
• Entropy
• Laws of Thermodynamics
• Heat Transfer
• Thermal Equilibrium
• Phase Transitions
• Thermal Expansion
• Heat Engines`,
        quiz: {
          question: "What does the Second Law of Thermodynamics describe?",
          options: [
            "Energy Creation",
            "Energy Conservation",
            "Entropy Increase",
            "Perfect Efficiency",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "electromagnetic-phenomena",
        title: "Basic Electromagnetic Phenomena",
        content: `Introduction to electromagnetic interactions.

Electromagnetic Concepts:
• Electric Charge
• Electric Field
• Magnetic Field
• Electromagnetic Waves
• Conductivity
• Electromagnetic Induction
• Capacitance
• Resistance
• Electromagnetic Spectrum
• Quantum Electrodynamics`,
        quiz: {
          question: "What carries electromagnetic force?",
          options: ["Protons", "Electrons", "Photons", "Neutrons"],
          correctAnswer: 2,
        },
      },
      {
        id: "quantum-mechanics-intro",
        title: "Introduction to Quantum Mechanics",
        content: `Basic principles of quantum mechanics.

Quantum Concepts:
• Wave-Particle Duality
• Uncertainty Principle
• Quantum States
• Probability Waves
• Quantum Superposition
• Quantum Entanglement
• Quantum Tunneling
• Schrödinger Equation
• Quantum Numbers
• Quantum Interpretation`,
        quiz: {
          question: "Who proposed the Uncertainty Principle?",
          options: ["Einstein", "Newton", "Heisenberg", "Bohr"],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts in Physics",
    description: "Explore fundamental physical principles and mechanisms",
    duration: "15 mins",
    slides: [
      {
        id: "classical-mechanics",
        title: "Classical Mechanics Fundamentals",
        content: `Exploring motion and forces in classical physics.

Classical Mechanics Concepts:
• Newton's Laws of Motion
• Force and Momentum
• Work and Energy
• Circular Motion
• Rotational Dynamics
• Gravitational Interactions
• Friction
• Projectile Motion
• Conservation of Momentum
• Mechanical Equilibrium`,
        quiz: {
          question:
            "What describes an object's resistance to change in motion?",
          options: ["Velocity", "Acceleration", "Inertia", "Momentum"],
          correctAnswer: 2,
        },
      },
      {
        id: "thermodynamics-principles",
        title: "Thermodynamic Principles",
        content: `Understanding heat, energy, and their transformations.

Thermodynamic Concepts:
• Heat Transfer
• Temperature Scales
• Thermal Expansion
• Laws of Thermodynamics
• Heat Engines
• Entropy
• Thermal Equilibrium
• Phase Transitions
• Energy Conversion
• Thermodynamic Cycles`,
        quiz: {
          question: "What does the Second Law of Thermodynamics describe?",
          options: [
            "Energy Creation",
            "Perfect Efficiency",
            "Entropy Increase",
            "Constant Energy",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "electromagnetism-basics",
        title: "Electromagnetism Fundamentals",
        content: `Understanding electrical and magnetic phenomena.

Electromagnetic Concepts:
• Electric Charge
• Electric Fields
• Magnetic Fields
• Electromagnetic Waves
• Coulomb's Law
• Ohm's Law
• Electromagnetic Induction
• Capacitance
• Resistance
• Electromagnetic Spectrum`,
        quiz: {
          question: "What carries electromagnetic force?",
          options: ["Protons", "Electrons", "Photons", "Neutrons"],
          correctAnswer: 2,
        },
      },
      {
        id: "wave-mechanics",
        title: "Wave Mechanics",
        content: `Exploring wave properties and behaviors.

Wave Characteristics:
• Wave Types
• Wave Propagation
• Interference
• Diffraction
• Resonance
• Standing Waves
• Doppler Effect
• Wave Energy
• Wave Frequency
• Wave Amplitude`,
        quiz: {
          question: "What is the distance between wave crests?",
          options: ["Amplitude", "Frequency", "Wavelength", "Wave Speed"],
          correctAnswer: 2,
        },
      },
      {
        id: "optics",
        title: "Optical Physics",
        content: `Understanding light and optical phenomena.

Optical Concepts:
• Light Reflection
• Light Refraction
• Lens Systems
• Mirrors
• Color Theory
• Diffraction
• Interference
• Polarization
• Optical Instruments
• Quantum Optics`,
        quiz: {
          question: "What bends light when it passes between media?",
          options: ["Reflection", "Refraction", "Diffraction", "Polarization"],
          correctAnswer: 1,
        },
      },
      {
        id: "relativity-basics",
        title: "Special Relativity Fundamentals",
        content: `Introduction to Einstein's theory of special relativity.

Relativity Concepts:
• Speed of Light
• Time Dilation
• Length Contraction
• Mass-Energy Equivalence
• Spacetime
• Lorentz Transformations
• Relativistic Momentum
• Simultaneity
• Relativistic Energy
• Frame of Reference`,
        quiz: {
          question: "What is E = mc² about?",
          options: [
            "Speed of Light",
            "Mass-Energy Equivalence",
            "Time Dilation",
            "Momentum",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "quantum-mechanics-principles",
        title: "Quantum Mechanics Principles",
        content: `Exploring quantum mechanical phenomena.

Quantum Concepts:
• Wave-Particle Duality
• Uncertainty Principle
• Quantum States
• Probability Waves
• Quantum Superposition
• Quantum Entanglement
• Quantum Tunneling
• Schrödinger Equation
• Quantum Numbers
• Quantum Interpretation`,
        quiz: {
          question: "Who proposed the Uncertainty Principle?",
          options: ["Einstein", "Newton", "Heisenberg", "Bohr"],
          correctAnswer: 2,
        },
      },
      {
        id: "nuclear-physics",
        title: "Nuclear Physics Basics",
        content: `Understanding nuclear interactions and processes.

Nuclear Physics Concepts:
• Atomic Structure
• Nuclear Forces
• Radioactive Decay
• Nuclear Reactions
• Binding Energy
• Isotopes
• Nuclear Fission
• Nuclear Fusion
• Radiation Types
• Nuclear Models`,
        quiz: {
          question: "What is nuclear fusion?",
          options: [
            "Splitting atoms",
            "Combining atoms",
            "Radioactive decay",
            "Electron transfer",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "particle-physics",
        title: "Particle Physics Introduction",
        content: `Exploring fundamental particles and interactions.

Particle Physics Concepts:
• Standard Model
• Fundamental Particles
• Quarks
• Leptons
• Bosons
• Particle Interactions
• Antimatter
• Particle Accelerators
• Quantum Field Theory
• Particle Detection`,
        quiz: {
          question: "What are the fundamental building blocks of matter?",
          options: ["Atoms", "Molecules", "Quarks", "Electrons"],
          correctAnswer: 2,
        },
      },
      {
        id: "astrophysics-basics",
        title: "Astrophysics Fundamentals",
        content: `Introduction to cosmic phenomena and celestial mechanics.

Astrophysics Concepts:
• Stellar Evolution
• Black Holes
• Cosmic Expansion
• Gravitational Waves
• Dark Matter
• Dark Energy
• Planetary Motion
• Cosmic Microwave Background
• Galactic Structures
• Cosmological Models`,
        quiz: {
          question: "What are extremely dense cosmic objects?",
          options: ["Planets", "Stars", "Black Holes", "Galaxies"],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "advanced-techniques",
    title: "Advanced Techniques",
    description:
      "Explore sophisticated physics research methods and technologies",
    duration: "15 mins",
    slides: [
      {
        id: "experimental-physics",
        title: "Experimental Physics Methods",
        content: `Advanced approaches to scientific investigation.
        
Key Research Techniques:
• Precision Measurement
• Controlled Experiments
• Data Collection
• Statistical Analysis
• Computational Modeling`,
        quiz: {
          question: "What accelerates particles to high speeds?",
          options: [
            "Microscope",
            "Particle Accelerator",
            "Telescope",
            "Spectrometer",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "advanced-spectroscopy",
        title: "Advanced Spectroscopic Techniques",
        content: `Analyzing matter through electromagnetic radiation.
        
Advanced Spectroscopy Methods:
• Laser Spectroscopy
• Mass Spectrometry
• Nuclear Magnetic Resonance
• Electron Paramagnetic Resonance
• X-ray Spectroscopy`,
        quiz: {
          question: "What does spectroscopy primarily study?",
          options: [
            "Light Interaction with Matter",
            "Sound Waves",
            "Gravitational Fields",
            "Thermal Radiation",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "computational-physics",
        title: "Computational Physics Techniques",
        content: `Leveraging computer simulations in physics research.
        
Computational Methods:
• Numerical Modeling
• Quantum Simulations
• Molecular Dynamics
• Finite Element Analysis
• Machine Learning in Physics`,
        quiz: {
          question: "What enables complex physical system modeling?",
          options: [
            "Telescopes",
            "Microscopes",
            "Supercomputers",
            "Calculators",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "quantum-computing",
        title: "Quantum Computing Techniques",
        content: `Exploring advanced quantum information processing.
        
Quantum Computing Principles:
• Quantum Bits (Qubits)
• Quantum Entanglement
• Quantum Algorithms
• Quantum Error Correction
• Quantum Supremacy`,
        quiz: {
          question: "What makes quantum computers unique?",
          options: [
            "Faster Processors",
            "Parallel Processing",
            "Quantum Superposition",
            "More Memory",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "advanced-microscopy",
        title: "Advanced Microscopy Techniques",
        content: `Visualizing matter at microscopic and nanoscopic scales.
        
Microscopy Methods:
• Electron Microscopy
• Atomic Force Microscopy
• Scanning Tunneling Microscopy
• Cryo-Electron Microscopy
• Super-Resolution Microscopy`,
        quiz: {
          question: "What can electron microscopes do?",
          options: [
            "See Atoms",
            "Hear Sounds",
            "Measure Temperature",
            "Predict Weather",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "advanced-particle-detection",
        title: "Advanced Particle Detection",
        content: `Techniques for detecting subatomic particles.
        
Particle Detection Methods:
• Cloud Chambers
• Bubble Chambers
• Calorimeters
• Tracking Detectors
• Cherenkov Detectors`,
        quiz: {
          question: "What detects particle trajectories?",
          options: [
            "Microscopes",
            "Tracking Detectors",
            "Thermometers",
            "Barometers",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "advanced-optics",
        title: "Advanced Optical Techniques",
        content: `Sophisticated light manipulation and analysis.
        
Optical Research Methods:
• Holography
• Interferometry
• Optical Coherence Tomography
• Laser Cooling
• Optical Trapping`,
        quiz: {
          question: "What technique manipulates individual atoms?",
          options: [
            "Holography",
            "Laser Cooling",
            "Microscopy",
            "Spectroscopy",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "advanced-radiation-techniques",
        title: "Advanced Radiation Techniques",
        content: `Studying and utilizing radiation in physics.
        
Radiation Research Methods:
• Synchrotron Radiation
• Neutron Scattering
• Gamma-Ray Spectroscopy
• Radiation Dosimetry
• Radiation Imaging`,
        quiz: {
          question: "What studies radiation interactions?",
          options: [
            "Radiation Dosimetry",
            "Microscopy",
            "Telescopes",
            "Thermometers",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "advanced-materials-research",
        title: "Advanced Materials Research",
        content: `Exploring and developing novel material properties.
        
Materials Research Techniques:
• Nanotechnology
• Metamaterials
• Superconductivity
• Quantum Materials
• Biomimetic Materials`,
        quiz: {
          question: "What studies materials at nanoscale?",
          options: ["Astronomy", "Geology", "Nanotechnology", "Meteorology"],
          correctAnswer: 2,
        },
      },
      {
        id: "advanced-simulation-techniques",
        title: "Advanced Simulation Techniques",
        content: `Complex physical system modeling and prediction.
        
Simulation Research Methods:
• Climate Modeling
• Astrophysical Simulations
• Plasma Dynamics
• Quantum Field Simulations
• Complex System Modeling`,
        quiz: {
          question: "What enables complex system predictions?",
          options: [
            "Telescopes",
            "Advanced Simulations",
            "Microscopes",
            "Calculators",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "practical-applications",
    title: "Practical Applications",
    description: "Explore how physics knowledge is applied in various fields",
    duration: "15 mins",
    slides: [
      {
        id: "engineering-applications",
        title: "Engineering Applications",
        content: `Physics principles in engineering design and innovation.
        
Engineering Applications:
• Structural Design
• Aerospace Engineering
• Robotics
• Renewable Energy Systems
• Transportation Technologies`,
        quiz: {
          question: "What field uses physics for device miniaturization?",
          options: [
            "Aerospace",
            "Nanotechnology",
            "Renewable Energy",
            "Telecommunications",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "medical-physics",
        title: "Physics in Medical Technologies",
        content: `Physics applications in healthcare and medical research.
        
Medical Physics Applications:
• Medical Imaging
• Radiation Therapy
• Diagnostic Techniques
• Prosthetic Design
• Biomedical Engineering`,
        quiz: {
          question: "What medical technology uses physics principles?",
          options: [
            "MRI Scanning",
            "Blood Tests",
            "Stethoscopes",
            "Thermometers",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "renewable-energy",
        title: "Physics in Renewable Energy",
        content: `Physics principles driving sustainable energy solutions.
        
Renewable Energy Applications:
• Solar Panel Design
• Wind Turbine Engineering
• Geothermal Energy
• Hydrogen Fuel Cells
• Energy Storage Technologies`,
        quiz: {
          question: "What converts sunlight directly to electricity?",
          options: [
            "Wind Turbines",
            "Solar Panels",
            "Hydroelectric Dams",
            "Geothermal Plants",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "telecommunications",
        title: "Physics in Telecommunications",
        content: `Physics enabling global communication technologies.
        
Telecommunications Applications:
• Fiber Optic Networks
• Wireless Communication
• Satellite Technologies
• Signal Processing
• Quantum Communication`,
        quiz: {
          question: "What enables long-distance communication?",
          options: [
            "Fiber Optics",
            "Radio Waves",
            "Sound Waves",
            "Light Waves",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "space-exploration",
        title: "Physics in Space Exploration",
        content: `Physics principles enabling cosmic exploration.
        
Space Exploration Applications:
• Rocket Propulsion
• Spacecraft Design
• Orbital Mechanics
• Astronomical Observations
• Interplanetary Navigation`,
        quiz: {
          question: "What guides spacecraft trajectory?",
          options: ["Gravity", "Wind", "Magnetism", "Temperature"],
          correctAnswer: 0,
        },
      },
      {
        id: "environmental-science",
        title: "Physics in Environmental Monitoring",
        content: `Physics techniques for understanding environmental systems.
        
Environmental Applications:
• Climate Modeling
• Atmospheric Research
• Ocean Current Tracking
• Pollution Monitoring
• Ecosystem Dynamics`,
        quiz: {
          question: "What helps predict climate changes?",
          options: [
            "Thermometers",
            "Climate Models",
            "Weather Vanes",
            "Barometers",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "quantum-technologies",
        title: "Quantum Technologies Applications",
        content: `Emerging quantum physics applications.
        
Quantum Technology Fields:
• Quantum Cryptography
• Quantum Sensing
• Quantum Computing
• Quantum Materials
• Quantum Communication`,
        quiz: {
          question: "What ensures secure communication?",
          options: [
            "Quantum Cryptography",
            "Radio Encryption",
            "Firewalls",
            "Passwords",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "materials-science",
        title: "Physics in Materials Development",
        content: `Physics driving advanced materials research.
        
Materials Science Applications:
• Nanotechnology
• Semiconductor Design
• Biomaterials
• Superconductors
• Smart Materials`,
        quiz: {
          question: "What enables miniature electronic components?",
          options: ["Metallurgy", "Nanotechnology", "Chemistry", "Biology"],
          correctAnswer: 1,
        },
      },
      {
        id: "robotics-and-automation",
        title: "Physics in Robotics and Automation",
        content: `Physics principles enabling advanced robotics.
        
Robotics Applications:
• Robotic Mechanics
• Sensor Technologies
• Artificial Intelligence
• Autonomous Systems
• Human-Robot Interaction`,
        quiz: {
          question: "What enables robot movement?",
          options: [
            "Mechanical Engineering",
            "Physics Principles",
            "Computer Science",
            "Electrical Engineering",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "computational-physics-applications",
        title: "Computational Physics Applications",
        content: `Physics-driven computational technologies.
        
Computational Applications:
• Scientific Simulations
• Weather Prediction
• Particle Physics Modeling
• Financial Modeling
• Complex System Analysis`,
        quiz: {
          question: "What enables complex system predictions?",
          options: ["Supercomputers", "Calculators", "Smartphones", "Laptops"],
          correctAnswer: 0,
        },
      },
    ],
  },
];

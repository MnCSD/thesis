export const biologyModules = [
  {
    id: "introduction-to-the-basics",
    title: "Introduction to the Basics",
    description: "Learn the fundamental concepts of biology",
    duration: "15 mins",
    slides: [
      {
        id: "what-is-biology",
        title: "What is Biology?",
        content: `Biology is the study of living organisms and their interactions with each other and their environments.

Key Areas:
• Cellular Biology
• Genetics
• Ecology
• Evolution
• Physiology
• Molecular Biology
• Biochemistry
• Environmental Science
• Microbiology
• Biotechnology`,
        quiz: {
          question: "What is the primary focus of biology?",
          options: [
            "Study of living organisms",
            "Study of rocks",
            "Study of non-living systems",
            "Study of mathematical models",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "scientific-method",
        title: "Scientific Method in Biology",
        content: `The scientific method is a systematic approach to understanding biological phenomena.

Steps:
• Observation
• Hypothesis Formation
• Experimental Design
• Data Collection
• Analysis
• Conclusion
• Peer Review
• Replication
• Theory Development
• Continuous Refinement`,
        quiz: {
          question: "What is the first step in the scientific method?",
          options: ["Hypothesis", "Experiment", "Observation", "Conclusion"],
          correctAnswer: 2,
        },
      },
      {
        id: "levels-of-organization",
        title: "Levels of Biological Organization",
        content: `Biology studies life at multiple interconnected levels.

Levels:
• Atoms
• Molecules
• Cells
• Tissues
• Organs
• Organ Systems
• Organisms
• Populations
• Communities
• Ecosystems`,
        quiz: {
          question: "What is the basic unit of life?",
          options: ["Atom", "Molecule", "Cell", "Tissue"],
          correctAnswer: 2,
        },
      },
      {
        id: "cell-theory",
        title: "Cell Theory Fundamentals",
        content: `The cell theory is a fundamental principle in biology.

Key Principles:
• All living things are composed of cells
• Cell is the basic unit of life
• All cells come from pre-existing cells
• Cells contain genetic material
• Cells carry out metabolic processes
• Cells have similar chemical composition
• Energy flow occurs within cells
• Cells have specialized functions
• Cells interact with environment
• Cells reproduce`,
        quiz: {
          question: "Who proposed the cell theory?",
          options: [
            "Darwin",
            "Mendel",
            "Schleiden and Schwann",
            "Watson and Crick",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "biodiversity",
        title: "Understanding Biodiversity",
        content: `Biodiversity represents the variety of life on Earth.

Types of Biodiversity:
• Genetic Diversity
• Species Diversity
• Ecosystem Diversity
• Functional Diversity
• Structural Diversity
• Taxonomic Diversity
• Phylogenetic Diversity
• Ecological Diversity
• Morphological Diversity
• Biochemical Diversity`,
        quiz: {
          question: "What does species diversity measure?",
          options: [
            "Number of ecosystems",
            "Number of different species",
            "Genetic variations",
            "Morphological differences",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "taxonomy",
        title: "Biological Classification",
        content: `Taxonomy is the science of naming, describing, and classifying organisms.

Classification Levels:
• Kingdom
• Phylum
• Class
• Order
• Family
• Genus
• Species
• Domain
• Subspecies
• Variety`,
        quiz: {
          question: "What is the most specific taxonomic rank?",
          options: ["Genus", "Family", "Species", "Order"],
          correctAnswer: 2,
        },
      },
      {
        id: "origin-of-life",
        title: "Theories of Life's Origin",
        content: `Various theories explain the emergence of life on Earth.

Origin Theories:
• Primordial Soup Theory
• Hydrothermal Vent Theory
• Panspermia
• RNA World Hypothesis
• Clay Hypothesis
• Metabolism-First Model
• Iron-Sulfur World Theory
• Lipid World Scenario
• Deep-Sea Vent Theory
• Cosmic Ancestry`,
        quiz: {
          question: "What is Panspermia?",
          options: [
            "Life originated on Earth",
            "Life came from space",
            "Life created by gods",
            "Life spontaneously generated",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "biological-molecules",
        title: "Fundamental Biological Molecules",
        content: `Key molecules that form the basis of life.

Major Molecules:
• Proteins
• Nucleic Acids
• Carbohydrates
• Lipids
• Water
• ATP
• Enzymes
• Hormones
• Neurotransmitters
• Vitamins`,
        quiz: {
          question: "What stores genetic information?",
          options: ["Proteins", "Carbohydrates", "Nucleic Acids", "Lipids"],
          correctAnswer: 2,
        },
      },
      {
        id: "energy-in-biology",
        title: "Energy and Biological Systems",
        content: `Energy transformations are crucial in biological processes.

Energy Concepts:
• Photosynthesis
• Cellular Respiration
• Energy Transfer
• Metabolism
• ATP Production
• Enzyme Catalysis
• Energy Storage
• Mitochondrial Function
• Chloroplast Processes
• Bioenergetics`,
        quiz: {
          question: "What is the energy currency of cells?",
          options: ["Glucose", "ATP", "ADP", "Pyruvate"],
          correctAnswer: 1,
        },
      },
      {
        id: "biological-interactions",
        title: "Interactions in Biological Systems",
        content: `Living organisms interact in complex ways.

Types of Interactions:
• Symbiosis
• Predation
• Competition
• Mutualism
• Commensalism
• Parasitism
• Cooperation
• Communication
• Resource Sharing
• Ecological Networks`,
        quiz: {
          question: "What is mutualism?",
          options: [
            "Harmful interaction",
            "One-sided benefit",
            "Mutual benefit",
            "No interaction",
          ],
          correctAnswer: 2,
        },
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    description: "Explore fundamental biological principles and mechanisms",
    duration: "15 mins",
    slides: [
      {
        id: "cell-structure",
        title: "Cell Structure and Function",
        content: `Detailed exploration of cellular components.

Cell Components:
• Nucleus
• Mitochondria
• Endoplasmic Reticulum
• Golgi Apparatus
• Ribosomes
• Lysosomes
• Cell Membrane
• Cytoskeleton
• Chloroplasts
• Vacuoles`,
        quiz: {
          question: "What is the cell's control center?",
          options: ["Mitochondria", "Nucleus", "Ribosome", "Membrane"],
          correctAnswer: 1,
        },
      },
      {
        id: "dna-and-genetics",
        title: "DNA and Genetic Inheritance",
        content: `Understanding genetic material and inheritance.

Genetic Concepts:
• DNA Structure
• Gene Expression
• Chromosomes
• Alleles
• Dominant/Recessive Traits
• Genetic Mutations
• Inheritance Patterns
• Genetic Variation
• Epigenetics
• Genome Mapping`,
        quiz: {
          question: "What carries genetic information?",
          options: ["Proteins", "Lipids", "DNA", "Carbohydrates"],
          correctAnswer: 2,
        },
      },
      {
        id: "metabolism",
        title: "Cellular Metabolism",
        content: `Biochemical processes within living organisms.

Metabolic Processes:
• Cellular Respiration
• Photosynthesis
• Enzyme Catalysis
• Metabolic Pathways
• Energy Production
• Anabolism
• Catabolism
• Metabolic Regulation
• Nutrient Processing
• Metabolic Disorders`,
        quiz: {
          question: "What breaks down glucose for energy?",
          options: [
            "Photosynthesis",
            "Cellular Respiration",
            "Protein Synthesis",
            "Fermentation",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "protein-synthesis",
        title: "Protein Synthesis",
        content: `Process of creating proteins from genetic instructions.

Protein Synthesis Steps:
• Transcription
• Translation
• mRNA Processing
• Ribosome Function
• Amino Acid Sequence
• Protein Folding
• Post-Translational Modifications
• Protein Targeting
• Protein Degradation
• Protein Function`,
        quiz: {
          question: "What translates mRNA into proteins?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
          correctAnswer: 2,
        },
      },
      {
        id: "cell-division",
        title: "Cell Division Mechanisms",
        content: `Understanding how cells reproduce and divide.

Cell Division Types:
• Mitosis
• Meiosis
• Cytokinesis
• Chromosome Replication
• Cell Cycle Stages
• Checkpoints
• Stem Cells
• Cellular Differentiation
• Apoptosis
• Cellular Reproduction`,
        quiz: {
          question: "What type of cell division produces gametes?",
          options: ["Mitosis", "Meiosis", "Cytokinesis", "Budding"],
          correctAnswer: 1,
        },
      },
      {
        id: "evolutionary-principles",
        title: "Evolutionary Principles",
        content: `Fundamental concepts of biological evolution.

Evolutionary Concepts:
• Natural Selection
• Genetic Drift
• Adaptation
• Speciation
• Mutation
• Population Genetics
• Phylogenetic Trees
• Convergent Evolution
• Divergent Evolution
• Evolutionary Fitness`,
        quiz: {
          question: "Who proposed natural selection?",
          options: ["Mendel", "Darwin", "Lamarck", "Wallace"],
          correctAnswer: 1,
        },
      },
      {
        id: "ecosystem-dynamics",
        title: "Ecosystem Dynamics",
        content: `Interactions between organisms and their environment.

Ecosystem Components:
• Food Chains
• Food Webs
• Energy Flow
• Nutrient Cycling
• Biodiversity
• Ecological Niches
• Symbiotic Relationships
• Population Dynamics
• Ecosystem Services
• Environmental Interactions`,
        quiz: {
          question: "What transfers energy between organisms?",
          options: ["Ecosystem", "Food Chain", "Habitat", "Niche"],
          correctAnswer: 1,
        },
      },
      {
        id: "microbial-world",
        title: "The Microbial World",
        content: `Understanding microorganisms and their roles.

Microbial Concepts:
• Bacteria
• Viruses
• Fungi
• Archaea
• Microbiome
• Pathogenic Microbes
• Beneficial Microbes
• Microbial Ecology
• Microbial Genetics
• Microbial Evolution`,
        quiz: {
          question: "What are the smallest living organisms?",
          options: ["Bacteria", "Viruses", "Fungi", "Protozoa"],
          correctAnswer: 0,
        },
      },
      {
        id: "plant-biology",
        title: "Plant Biology Fundamentals",
        content: `Basic principles of plant life and function.

Plant Biology Concepts:
• Photosynthesis
• Plant Cell Structure
• Plant Reproduction
• Plant Hormones
• Plant Anatomy
• Plant Physiology
• Plant Ecology
• Plant Adaptation
• Plant Genetics
• Plant Metabolism`,
        quiz: {
          question: "What do plants use to make food?",
          options: ["Water", "Soil", "Sunlight", "Chlorophyll"],
          correctAnswer: 2,
        },
      },
      {
        id: "animal-physiology",
        title: "Animal Physiology Basics",
        content: `Fundamental physiological processes in animals.

Physiological Systems:
• Nervous System
• Circulatory System
• Respiratory System
• Digestive System
• Endocrine System
• Immune System
• Reproductive System
• Skeletal System
• Muscular System
• Sensory Systems`,
        quiz: {
          question: "What coordinates body functions?",
          options: [
            "Circulatory System",
            "Nervous System",
            "Digestive System",
            "Respiratory System",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "advanced-techniques",
    title: "Advanced Techniques",
    description: "Explore sophisticated biological research methods and technologies",
    duration: "15 mins",
    slides: [
      {
        id: "advanced-microscopy",
        title: "Advanced Microscopy Techniques",
        content: `Visualizing biological structures at microscopic and nanoscopic scales.
        
Microscopy Methods:
• Electron Microscopy
• Confocal Microscopy
• Super-Resolution Microscopy
• Cryo-Electron Microscopy
• Atomic Force Microscopy`,
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
        id: "genetic-engineering",
        title: "Advanced Genetic Engineering",
        content: `Sophisticated techniques for genetic manipulation and research.
        
Genetic Engineering Methods:
• CRISPR-Cas9
• Gene Editing
• Synthetic Biology
• Genome Sequencing
• Transgenic Organism Creation`,
        quiz: {
          question: "What is CRISPR primarily used for?",
          options: [
            "Drug Production",
            "Gene Editing",
            "Climate Modeling",
            "Astronomy",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "molecular-biology-techniques",
        title: "Advanced Molecular Biology Techniques",
        content: `Sophisticated approaches to studying molecular biological processes.
        
Molecular Biology Methods:
• PCR (Polymerase Chain Reaction)
• RNA Sequencing
• Protein Crystallography
• Mass Spectrometry
• Proteomics`,
        quiz: {
          question: "What amplifies DNA segments?",
          options: [
            "Microscope",
            "PCR",
            "Centrifuge",
            "Spectrophotometer",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "computational-biology",
        title: "Computational Biology Techniques",
        content: `Leveraging computational methods in biological research.
        
Computational Methods:
• Bioinformatics
• Machine Learning in Biology
• Genomic Data Analysis
• Protein Folding Simulations
• Evolutionary Modeling`,
        quiz: {
          question: "What enables complex biological system predictions?",
          options: [
            "Microscopes",
            "Supercomputers",
            "Telescopes",
            "Calculators",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "cell-culture-techniques",
        title: "Advanced Cell Culture Methods",
        content: `Sophisticated approaches to growing and manipulating cell cultures.
        
Cell Culture Techniques:
• Stem Cell Cultivation
• 3D Cell Culture
• Organoid Development
• Cellular Reprogramming
• Tissue Engineering`,
        quiz: {
          question: "What are artificially grown 3D tissue structures?",
          options: [
            "Cells",
            "Molecules",
            "Organoids",
            "Chromosomes",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "advanced-biochemistry",
        title: "Advanced Biochemistry Techniques",
        content: `Sophisticated methods for studying chemical processes in living systems.
        
Biochemistry Techniques:
• Protein Purification
• Enzyme Kinetics
• Metabolomics
• Protein-Protein Interaction Studies
• Structural Biology`,
        quiz: {
          question: "What studies metabolic processes?",
          options: [
            "Genetics",
            "Ecology",
            "Metabolomics",
            "Astronomy",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "advanced-immunology",
        title: "Advanced Immunology Techniques",
        content: `Sophisticated approaches to studying immune system mechanisms.
        
Immunology Techniques:
• Monoclonal Antibody Production
• Flow Cytometry
• Immunohistochemistry
• Vaccine Development
• Immune System Mapping`,
        quiz: {
          question: "What identifies specific cell types?",
          options: [
            "Microscopy",
            "Flow Cytometry",
            "Genetics",
            "Chemistry",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "advanced-ecological-research",
        title: "Advanced Ecological Research Methods",
        content: `Sophisticated techniques for studying ecological systems.
        
Ecological Research Methods:
• Satellite Ecosystem Monitoring
• Population Genetics
• Biodiversity Tracking
• Climate Impact Studies
• Ecosystem Modeling`,
        quiz: {
          question: "What tracks global ecosystem changes?",
          options: [
            "Microscopes",
            "Satellites",
            "Telescopes",
            "Calculators",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "advanced-biotechnology",
        title: "Advanced Biotechnology Techniques",
        content: `Sophisticated biotechnological approaches and innovations.
        
Biotechnology Techniques:
• Synthetic Biology
• Bioengineering
• Genetic Therapy
• Bioinformatics
• Biomaterial Development`,
        quiz: {
          question: "What creates artificial biological systems?",
          options: [
            "Synthetic Biology",
            "Astronomy",
            "Geology",
            "Meteorology",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "advanced-neuroscience-techniques",
        title: "Advanced Neuroscience Research Methods",
        content: `Sophisticated approaches to studying neural systems.
        
Neuroscience Research Methods:
• Brain Imaging Techniques
• Neural Network Mapping
• Optogenetics
• Neuroplasticity Studies
• Cognitive Neuroscience`,
        quiz: {
          question: "What controls neural activity with light?",
          options: [
            "Microscopy",
            "Optogenetics",
            "Chemistry",
            "Genetics",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
  {
    id: "practical-applications",
    title: "Practical Applications",
    description: "Explore how biological knowledge is applied in various fields",
    duration: "15 mins",
    slides: [
      {
        id: "medical-biotechnology",
        title: "Medical Biotechnology Applications",
        content: `Biology applications in healthcare and medical research.
        
Medical Biotechnology Applications:
• Drug Development
• Personalized Medicine
• Gene Therapy
• Diagnostic Technologies
• Regenerative Medicine`,
        quiz: {
          question: "What tailors medical treatment to individual genetics?",
          options: [
            "General Medicine",
            "Personalized Medicine",
            "Surgery",
            "Pharmacology",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "environmental-biology",
        title: "Biology in Environmental Conservation",
        content: `Biological approaches to environmental protection and sustainability.
        
Environmental Biology Applications:
• Conservation Strategies
• Ecosystem Restoration
• Biodiversity Preservation
• Climate Change Mitigation
• Sustainable Agriculture`,
        quiz: {
          question: "What helps protect endangered species?",
          options: [
            "Conservation Strategies",
            "Economic Policies",
            "Urban Planning",
            "Technology",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "agricultural-biotechnology",
        title: "Biology in Agricultural Innovation",
        content: `Biological techniques improving agricultural productivity and sustainability.
        
Agricultural Biotechnology Applications:
• Crop Genetic Engineering
• Pest Resistance
• Drought-Tolerant Crops
• Precision Agriculture
• Sustainable Farming Techniques`,
        quiz: {
          question: "What creates crops resistant to pests?",
          options: [
            "Chemical Pesticides",
            "Crop Rotation",
            "Genetic Engineering",
            "Manual Removal",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "forensic-biology",
        title: "Biology in Forensic Science",
        content: `Biological techniques applied to criminal investigations and legal processes.
        
Forensic Biology Applications:
• DNA Profiling
• Crime Scene Analysis
• Genetic Genealogy
• Biological Evidence Interpretation
• Forensic Pathology`,
        quiz: {
          question: "What identifies individuals through genetic markers?",
          options: [
            "Fingerprinting",
            "DNA Profiling",
            "Photography",
            "Witness Testimony",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "industrial-biotechnology",
        title: "Biology in Industrial Processes",
        content: `Biological approaches transforming industrial manufacturing and production.
        
Industrial Biotechnology Applications:
• Biofuel Production
• Enzyme Engineering
• Biodegradable Materials
• Bioremediation
• Sustainable Manufacturing`,
        quiz: {
          question: "What produces renewable energy from biological sources?",
          options: [
            "Solar Panels",
            "Wind Turbines",
            "Biofuels",
            "Nuclear Energy",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "marine-biology-applications",
        title: "Biology in Marine Research and Conservation",
        content: `Biological approaches to understanding and protecting marine ecosystems.
        
Marine Biology Applications:
• Ocean Ecosystem Monitoring
• Marine Species Conservation
• Climate Change Impact Studies
• Sustainable Fishing Practices
• Marine Biotechnology`,
        quiz: {
          question: "What studies marine life and ecosystems?",
          options: [
            "Oceanography",
            "Marine Biology",
            "Geology",
            "Astronomy",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "space-biology",
        title: "Biology in Space Exploration",
        content: `Biological research and applications in space and extraterrestrial environments.
        
Space Biology Applications:
• Astrobiology
• Space Medicine
• Microgravity Research
• Extraterrestrial Life Studies
• Space Habitat Design`,
        quiz: {
          question: "What studies potential life beyond Earth?",
          options: [
            "Astronomy",
            "Geology",
            "Astrobiology",
            "Physics",
          ],
          correctAnswer: 2,
        },
      },
      {
        id: "bioinformatics-applications",
        title: "Bioinformatics in Research and Innovation",
        content: `Computational approaches to solving biological challenges.
        
Bioinformatics Applications:
• Genomic Data Analysis
• Protein Structure Prediction
• Disease Research
• Drug Discovery
• Personalized Medicine`,
        quiz: {
          question: "What predicts protein structures computationally?",
          options: [
            "Microscopy",
            "Bioinformatics",
            "Chemistry",
            "Genetics",
          ],
          correctAnswer: 1,
        },
      },
      {
        id: "synthetic-biology-applications",
        title: "Synthetic Biology Innovations",
        content: `Designing and constructing new biological parts, devices, and systems.
        
Synthetic Biology Applications:
• Artificial Organism Creation
• Biological Circuit Design
• Engineered Microorganisms
• Biosensors
• Sustainable Solutions`,
        quiz: {
          question: "What creates artificial biological systems?",
          options: [
            "Synthetic Biology",
            "Astronomy",
            "Geology",
            "Meteorology",
          ],
          correctAnswer: 0,
        },
      },
      {
        id: "biotechnology-ethics",
        title: "Ethical Considerations in Biotechnology",
        content: `Exploring the ethical implications of biological research and applications.
        
Biotechnology Ethics Considerations:
• Genetic Privacy
• Informed Consent
• Research Integrity
• Ethical Boundaries
• Societal Impact`,
        quiz: {
          question: "What protects individual genetic information?",
          options: [
            "Laws",
            "Genetic Privacy",
            "Technology",
            "Research Policies",
          ],
          correctAnswer: 1,
        },
      },
    ],
  },
];

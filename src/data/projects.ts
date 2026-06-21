export type Project = {
  slug: string;  
  title: string;
  period?: string;      // e.g., "2025"
  oneLiner: string;     // short summary
  role: string;         // what you did
  outcome: string;      // impact/result
  outcomeShort?: string; // short outcome for home/project cards
  tags: string[];
  links: {
    page?: string;      // internal detail page (optional, later)
    github?: string;
    pdf?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "lammps-input-generator",
    title: "LAMMPS Input Generator",
    period: "2025",
    oneLiner: "A configurable generator to build reproducible LAMMPS inputs for simulation workflows.",
    role: "Architected a configuration-driven input-generation workflow that turns structured simulation settings into reusable, reproducible LAMMPS inputs.",
    outcome: "Standardized inputs to reduce manual editing and improve reproducibility.",
    outcomeShort: "Standardized LAMMPS inputs to reduce manual edits and improve reproducibility.",
    tags: ["LAMMPS", "MD", "Automation", "Reproducibility"],
    links: {
      page: "/projects/lammps-input-generator",
      github: "https://github.com/Gibeom-KIM-02/lammps_input_generator",
    },
  },
  {
    slug: "packmol-runner",
    title: "Packmol Runner",
    period: "2026",
    oneLiner: "A YAML-driven workflow to build molecular simulation starting structures using Packmol and ASE.",
    role: "Designed a YAML-driven structure-generation pipeline for bulk and slab systems, integrating Packmol and ASE to support reproducible simulation setup.",
    outcome: "Built a reusable structure-generation pipeline that reduces manual setup and improves consistency across simulation systems.",
    outcomeShort: "Built a reusable Packmol/ASE workflow for reproducible simulation structure generation.",
    tags: ["Packmol", "ASE", "LAMMPS", "Automation", "Reproducibility"],
    links: {
      page: "/projects/packmol-runner",
      github: "https://github.com/Gibeom-KIM-02/packmol_runner",
    },
  },
  {
    slug: "three-tank-dqn-water-level-control",
    title: "Three-Tank Water Level Control with DQN",
    period: "2026",
    oneLiner:
      "Applied DQN reinforcement learning to regulate water level in a three-tank system with camera-based sensing and pump control.",
    role: "Built the end-to-end control workflow, from YOLO-based water-level sensing and Arduino pump actuation to learned pump dynamics, DQN training, and evaluation.",
    outcome:
      "Built a modular control pipeline from hardware data collection to DQN training and evaluation; global simulation evaluation reported 100% scenario/phase pass rates across 1,960 cases with mean RMS error around 0.265 cm.",
    outcomeShort:
      "Built a DQN water-level controller with a learned pump dynamics model and evaluated it across simulation scenarios.",
    tags: ["Reinforcement Learning", "DQN", "Control", "YOLO", "PyTorch"],
    links: {
      page: "/projects/three-tank-dqn-water-level-control",
      github: "https://github.com/Gibeom-KIM-02/three_tank_dqn_water_level_control",
    },
  },
  {
    slug: "heat-capacity-descriptors",
    title: "Predicting Heat Capacity with Molecular Descriptors",
    period: "2026",
    oneLiner: "Built an end-to-end workflow to collect chemical heat-capacity data and predict Cp using descriptors derived from SMILES.",
    role: "Developed the data-to-model pipeline for Cp prediction, including ThermoML/NIST data extraction, dataset curation, descriptor generation, model evaluation, and inference workflow design.",
    outcome: "Created a reproducible machine-learning workflow that connects chemical data extraction, descriptor-based featurization, and Cp prediction from compound name or SMILES.",
    outcomeShort: "Built a reproducible workflow for Cp prediction from SMILES-derived molecular descriptors.",
    tags: ["Machine Learning", "RDKit", "SMILES", "ThermoML", "Data Pipeline"],
    links: {
      page: "/projects/heat-capacity-descriptors",
      github: "https://github.com/Gibeom-KIM-02/Predicting_Heat_Capacity",
    },
  },
  {
    slug: "bandgap-cgcnn",
    title: "Predicting Bandgap of Hexanary Oxides (CGCNN)",
    period: "2025",
    oneLiner:
      "Trained and evaluated a CGCNN-based model to predict bandgaps of hexanary oxides for photocatalyst discovery.",
    role: "Prepared crystal-structure datasets, established the CGCNN training/evaluation workflow, and ran targeted experiments to improve low-bandgap prediction performance.",
    outcome: "Built a reproducible pipeline from structure data to bandgap predictions.",
    outcomeShort: "Built a reproducible pipeline from structures to bandgap predictions using CGCNN.",
    tags: ["Materials ML", "CGCNN", "Bandgap", "Python"],
    links: {
      page: "/projects/bandgap-cgcnn",
      github: "https://github.com/Gibeom-KIM-02/Predicting-bandgap-of-Hexanary-oxide",
    },
  },
  {
    slug: "hf",
    title: "Hartree–Fock in Python (Modular Implementation)",
    period: "2025",
    oneLiner: "A modular Hartree–Fock implementation in Python focused on clarity, validation, and extensibility.",
    role: "Implemented the core Hartree-Fock components, including basis handling, integral construction, SCF iteration, energy evaluation, and validation on simple molecular systems.",
    outcome: "Calculated Hartree-Fock energies for simple atomic and molecular test systems, including H-H binding-energy validation.",
    outcomeShort: "Implemented a modular HF codebase designed for clarity, validation, and extensions.",
    tags: ["Quantum Chemistry", "Hartree–Fock", "Python", "Numerical"],
    links: {
      page: "/projects/hf",
      github: "https://github.com/Gibeom-KIM-02/hf",
    },
  },
];

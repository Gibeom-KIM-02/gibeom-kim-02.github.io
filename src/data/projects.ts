export type Project = {
  slug: string;  
  title: string;
  period?: string;      // e.g., "2025"
  oneLiner: string;     // short summary
  role: string;         // what you did
  outcome: string;      // impact/result
  outcomeShort?: string; // home 카드용 짧은 outcome (1문장)
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
    role: "Designed a structured input-generation pipeline and organized simulation settings for reuse across systems.",
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
    role: "Designed and organized a reproducible packing workflow for bulk boxes and slab-based systems with configurable inputs and automation scripts.",
    outcome: "Built a reusable structure-generation pipeline that reduces manual setup and improves consistency across simulation systems.",
    outcomeShort: "Built a reusable Packmol/ASE workflow for reproducible simulation structure generation.",
    tags: ["Packmol", "ASE", "LAMMPS", "Automation", "Reproducibility"],
    links: {
      page: "/projects/packmol-runner",
      github: "https://github.com/Gibeom-KIM-02/packmol_runner",
    },
  },
  {
    slug: "heat-capacity-descriptors",
    title: "Predicting Heat Capacity with Molecular Descriptors",
    period: "2026",
    oneLiner: "Built an end-to-end workflow to collect chemical heat-capacity data and predict Cp using descriptors derived from SMILES.",
    role: "Developed the pipeline for extracting and polishing thermophysical-property data from NIST/ThermoML and other sources, evaluated descriptor/model combinations, and built the final Cp prediction workflow.",
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
    role: "Prepared crystal-structure datasets, built training/evaluation workflow, and ran experiments for model performance.",
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
    role: "Implemented core HF modules (basis, integrals, SCF loop, energies) with detailed comments and testable structure.",
    outcome: "Calculate Hartree-Fock Energy for H-H atom binding energy",
    outcomeShort: "Implemented a modular HF codebase designed for clarity, validation, and extensions.",
    tags: ["Quantum Chemistry", "Hartree–Fock", "Python", "Numerical"],
    links: {
      page: "/projects/hf",
      github: "https://github.com/Gibeom-KIM-02/hf",
    },
  },
];

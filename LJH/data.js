/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║              SITE CONTENT — EDIT THIS FILE               ║
 * ║                                                          ║
 * ║  This file controls ALL content on your website.        ║
 * ║  Add papers, projects, gallery photos here.             ║
 * ║  The site will auto-render everything.                  ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Lee Jihyun",
  nameKor: "이지현",
  title: "M.S. Researcher",
  affiliation: "Seoul National University",
  department: "Dept. of Nuclear Engineering",
  lab: "Nuclear Energy System Laboratory (ESLAB)",
  email: "ss10248s@snu.ac.kr",
  photo: "assets/photo1.jpg",  // ← Replace with your preferred photo
  cv: "assets/CV_JihyunLEE (NEA, recent).docx",
  bio: [
    "I am an M.S. researcher at the Department of Nuclear Engineering, Seoul National University, affiliated with the Nuclear Energy System Laboratory (ESLAB).",
    "My research focuses on GPU-accelerated radiological dispersion simulation — developing Lagrangian Dispersion Models (LDM) coupled with CRAM-based multi-nuclide decay-chain solvers to support nuclear emergency planning zone (EPZ) optimization.",
    "I am also interested in nuclear power system techno-economics, exploring reliability–cost trade-offs and NPV/LCOE frameworks for sustainable nuclear energy asset management."
  ],
  interests: [
    "Radiological Dispersion Simulation",
    "GPU Computing (CUDA)",
    "Nuclear Safety & EPZ",
    "Nuclear Techno-economics",
    "Radioactive Waste Management",
    "Nuclear Policy & Nonproliferation"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/jihyun-lee-6882ab252/",
    // github:        "",
    // googleScholar: "",
    // orcid:         "",
    // researchGate:  "",
  }
};

// ─────────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    degree: "M.S. in Nuclear Engineering",
    institution: "Seoul National University",
    period: "2024 – Present (Expected Aug 2026)",
    note: "Integrated Major: Sustainable High-Level Radioactive Waste Management"
  },
  {
    degree: "B.S. in Nuclear Engineering (Minor: International Relations)",
    institution: "Seoul National University",
    period: "2019 – 2024",
    note: ""
  },
  {
    degree: "Exchange — Sustainable Development",
    institution: "Polytechnique Montréal (Poly-MTL), Canada",
    period: "2023 – 2024",
    note: ""
  },
  {
    degree: "Exchange — Mechanical Engineering",
    institution: "Karlsruher Institut für Technologie (KIT), Germany",
    period: "2023",
    note: ""
  },
  {
    degree: "High School Diploma",
    institution: "Wongok High School, Ansan",
    period: "2016 – 2019",
    note: ""
  }
];

// ─────────────────────────────────────────────────────────────────
// PUBLICATIONS
// ─────────────────────────────────────────────────────────────────
//
// type  : "journal" | "conference"
// note  : short label shown as a badge (e.g. "1st Author", "Presenter")
// award : award label shown as a badge (e.g. "Best Paper Award")
// url   : link to paper page — leave "" if not available yet
// doi   : DOI string only
//
const PUBLICATIONS = [

  // ── Journal Papers ───────────────────────────────────────────
  {
    type: "journal",
    title: "Study on Regulatory Improvement Measures through Unification of the Concept of Nuclear Utilization Facilities and Integration of Laws",
    authors: "Lee, J.",
    venue: "Review on Nuclear Energy Strategy and Policy",
    volume: "2025(1)",
    year: 2025,
    note: "1st Author",
    doi: "",
    url: "",
    tags: ["Nuclear Policy", "Regulatory Framework", "Nuclear Law"]
  },

  // ── Conference Papers ────────────────────────────────────────
  {
    type: "conference",
    title: "High-Performance GPU Implementation of Decay Chain Models for Radioactive Dispersion Simulation",
    authors: "Lee, J. et al.",
    venue: "Transactions of the Korean Nuclear Society Autumn Meeting, KNS",
    year: 2025,
    month: "Nov",
    note: "1st Author · Oral",
    award: "KNS Best Paper Award",
    doi: "",
    url: "",
    tags: ["GPU Computing", "CUDA", "Radiological Dispersion", "Decay Chain"]
  },
  {
    type: "conference",
    title: "Feasibility Analysis of Cryptocurrency Mining Using Nuclear Surplus Electricity",
    authors: "Lee, J. et al.",
    venue: "Transactions of the Korean Nuclear Society Spring Meeting, KNS",
    year: 2025,
    month: "May",
    note: "1st Author · Poster",
    award: "KNS Best Poster Award",
    doi: "",
    url: "",
    tags: ["Nuclear Techno-economics", "Energy Economics", "Nuclear Power"]
  },
  {
    type: "conference",
    title: "Fast Reactors and Related Fuel Cycles: Sustainable Clean Energy for the Future (FR22)",
    authors: "INTERNATIONAL ATOMIC ENERGY AGENCY (contributing author)",
    venue: "Proceedings Series — International Atomic Energy Agency, IAEA, Vienna",
    year: 2025,
    note: "Contributing Author",
    doi: "",
    url: "",
    tags: ["Fast Reactors", "Fuel Cycles", "IAEA", "Sustainable Energy"]
  },
  {
    type: "conference",
    title: "Considerations for the Back End of the Fuel Cycle of Small Modular Reactors",
    authors: "INTERNATIONAL ATOMIC ENERGY AGENCY (contributing author)",
    venue: "IAEA-TECDOC-2040, IAEA, Vienna",
    year: 2023,
    note: "Contributing Author",
    doi: "",
    url: "",
    tags: ["SMR", "Fuel Cycle", "Radioactive Waste", "IAEA"]
  },
];

// ─────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────
//
// image : path to project thumbnail — leave "" to show a colored placeholder
// url   : link to GitHub repo, paper, or demo — leave "" to hide the button
//
const PROJECTS = [
  {
    title: "GPU-accelerated Lagrangian Dispersion Model",
    description: "Developing a high-performance GPU-based atmospheric transport simulator for radionuclides. Integrates CRAM-based multi-nuclide decay-chain solver and GPU point-kernel/ray-tracing dose workflows for cloudshine, groundshine, and inhalation impact quantification.",
    period: "2024 – Present",
    tags: ["Python", "C++", "CUDA", "Radiological Dispersion", "GPU Computing"],
    url: "",
    image: ""
  },
  {
    title: "Emergency Planning Zone (EPZ) Optimization",
    description: "Numerical analysis to provide evidence-based support for EPZ size optimization using GPU-accelerated dispersion simulations and dose impact modeling.",
    period: "2024 – Present",
    tags: ["Nuclear Safety", "EPZ", "Simulation", "Python"],
    url: "",
    image: ""
  },
  {
    title: "Nuclear Power System Techno-economics",
    description: "Reproducible computational workflows (Python/C++) coupling surplus-nuclear output, NPP time series, and overhaul schedules to quantify reliability–cost trade-offs. Risk-adjusted LCOE/NPV frames embedding outage/maintenance uncertainty into asset management (RCAM) roadmaps.",
    period: "2024 – Present",
    tags: ["Python", "C++", "LCOE", "NPV", "Nuclear Economics"],
    url: "",
    image: ""
  },
];

// ─────────────────────────────────────────────────────────────────
// AWARDS & ACTIVITIES
// ─────────────────────────────────────────────────────────────────
const AWARDS = [
  {
    title: "Outstanding Poster Presentation",
    event: "Rising Stars Workshop 2025 – NEA Global Forum on Nuclear Education, Science, Technology and Policy, OECD/NEA",
    year: "2025"
  },
  {
    title: "KNS Best Paper Award",
    event: "Korean Nuclear Society (KNS) Autumn Meeting",
    year: "2025"
  },
  {
    title: "Merit Award — Korean Nonproliferation Nuclear Paper Contest",
    event: "Korean Nuclear Policy Society",
    year: "2025"
  },
  {
    title: "Best Poster Presentation",
    event: "SNU ENERGY Convergence Research Conference",
    year: "2025"
  },
  {
    title: "Best Poster Award",
    event: "IAEA Regional INPRO School on Strategic Planning for Sustainable Nuclear Energy",
    year: "2025"
  },
  {
    title: "KNS Best Poster Award",
    event: "Korean Nuclear Society (KNS) Spring Meeting",
    year: "2025"
  },
  {
    title: "KNS Scholarship",
    event: "Korean Nuclear Society",
    year: "2024"
  },
  {
    title: "Nuclear Global Internship Scholarship",
    event: "KONICOF (Korea Nuclear International Cooperation Foundation)",
    year: "2022"
  }
];

// ─────────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────────
//
// Supported formats: images (.jpg .png .gif .webp) and videos (.mp4 .webm)
// The type is auto-detected from the file extension — no need to specify.
//
// Put files in assets/gallery/, then add an entry:
//   { src: "assets/gallery/file.jpg", caption: "Caption", date: "Dec 2024" }
//   { src: "assets/gallery/file.mp4", caption: "Caption", date: "2025" }
//
// Order = display order in the grid.
//
const GALLERY = [
  // ── Add simulation results, conference photos, lab memories below ──
  // Example:
  { src: "assets/photo1.jpg", caption: "Radionuclide Dispersion Simulation", date: "2025" },
  { src: "assets/photo2.jpg", caption: "Radionuclide Dispersion Simulation", date: "2025" },
  { src: "assets/photo3.jpg", caption: "Radionuclide Dispersion Simulation", date: "2025" },
  { src: "assets/photo4.jpg", caption: "Radionuclide Dispersion Simulation", date: "2025" },
  // { src: "assets/gallery/rising_stars_2025.jpg", caption: "Rising Stars Workshop 2025 – OECD/NEA", date: "2025" },
];

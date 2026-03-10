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
  name: "Baek Jiwon",
  nameKor: "백지원",
  title: "M.S. Researcher · Ph.D. Candidate",
  affiliation: "Seoul National University",
  department: "Dept. of Naval Architecture & Ocean Engineering",
  lab: "Engineering Systems Informatics & Technology Lab (EnSITE)",
  email: "baekjiwon@snu.ac.kr",
  photo: "assets/images/profile.jpg",   // ← Put your photo here
  cv: "CV(2025)(Kor).pdf",                   // ← Path to your CV
  bio: [
    "I am a Ph.D. student at the Department of Naval Architecture and Ocean Engineering, Seoul National University, advised by Prof. Jong-hun Woo.",
    "My research focuses on production engineering and intelligent manufacturing — applying reinforcement learning, evolutionary algorithms, and multi-agent systems to factory scheduling and shipbuilding process optimization.",
    "I am particularly interested in bridging the gap between combinatorial optimization and data-driven AI methods to tackle real-world industrial scheduling challenges."
  ],
  interests: [
    "Reinforcement Learning",
    "Evolutionary Algorithms",
    "Multi-Agent Systems",
    "Production Scheduling",
    "Factory & Process Optimization",
    "Shipbuilding Engineering"
  ],
  social: {
    github:        "https://github.com/jiwon-baek",   // e.g. "https://github.com/yourname"
    linkedin:      "https://www.linkedin.com/in/jiwon-baek-127675297/",   // e.g. "https://linkedin.com/in/yourname"
    // googleScholar: "",   // e.g. "https://scholar.google.com/citations?user=XXXX"
    // researchGate:  "",   // e.g. "https://researchgate.net/profile/yourname"
    orcid:         "https://orcid.org/0009-0006-6920-0192",   // e.g. "https://orcid.org/0000-0000-0000-0000"
  }
};

// ─────────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    degree: "M.S. in Naval Architecture & Ocean Engineering",
    institution: "Seoul National University",
    period: "2024 – Present",
    note: "Graduate Researcher, EnSITE Lab"
  },
  {
    degree: "B.S. in Naval Architecture & Ocean Engineering",
    institution: "Seoul National University",
    period: "2019 – 2024",
    note: "GPA 3.69 / 4.3, Cum Laude"
  },
  {
    degree: "High School Diploma",
    institution: "Jeonju Sangsan High School (전주상산고등학교)",
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
// doi   : DOI string only, e.g. "10.7232/JKIIE.2025.51.1.001"
//
const PUBLICATIONS = [

  // ── Journal Papers ───────────────────────────────────────────
  {
    type: "journal",
    title: "잡샵 일정계획 문제의 최적화를 위한 유전 알고리즘의 탐색 성능 향상 기법",
    titleEn: "Enhancing Search Efficiency of Genetic Algorithm for Job Shop Scheduling Problem",
    authors: "Baek, J., Woo, J.",
    venue: "대한산업공학회지 (Journal of the Korean Institute of Industrial Engineers)",
    volume: "Vol. 51, No. 1, pp. 1–10",
    year: 2025,
    month: "Feb",
    note: "1st Author",
    doi: "10.7232/JKIIE.2025.51.1.001",
    url: "https://doi.org/10.7232/JKIIE.2025.51.1.001",   // ← Replace with full-text URL
    tags: ["Genetic Algorithm", "Job Shop Scheduling", "Evolutionary Computation"]
  },

  // ── Conference Papers ────────────────────────────────────────
  {
    type: "conference",
    title: "RUBI: Relative-Urgency Based Initialization for Solving Job Shop Scheduling Problem",
    authors: "Baek, J., Oh, H., Woo, J.",
    venue: "IFIP Advances in Production Management Systems (APMS 2025), Springer",
    year: 2025,
    month: "Aug",
    note: "1st Author",
    doi: "10.1007/978-3-032-03550-9_20",
    url: "https://doi.org/10.1007/978-3-032-03550-9_20",
    tags: ["Job Shop Scheduling", "Initialization Heuristic", "Metaheuristics"]
  },
  {
    type: "conference",
    title: "Feasibility Study on the Interactive AI Scheduling with LLM Technology for Human-Centric Industry 5.0",
    authors: "Oh, H., Baek, J., Woo, J.",
    venue: "IFIP Advances in Production Management Systems (APMS 2025), Springer",
    year: 2025,
    month: "Aug",
    note: "Co-Author",
    doi: "10.1007/978-3-032-03515-8_29",
    url: "https://doi.org/10.1007/978-3-032-03515-8_29",
    tags: ["LLM", "AI Scheduling", "Industry 5.0"]
  },
  {
    type: "conference",
    title: "열변형 제약을 고려한 네스팅 강재 절단 순서 결정 알고리즘 개발",
    titleEn: "Development of Nesting Steel Cutting Sequence Algorithm Considering Thermal Deformation Constraints",
    authors: "백지원, 윤희창, 최원석, 손숙영, 김성대, 우종훈",
    venue: "2025 한국해양과학기술협의회 공동학술대회, 대한조선학회, 부산",
    year: 2025,
    month: "May",
    note: "1st Author · Oral",
    award: "학생우수논문발표상",
    url: "",   // ← Add URL when available
    tags: ["Nesting", "Steel Cutting", "Thermal Deformation", "Shipbuilding"]
  },
  {
    type: "conference",
    title: "Deep Reinforcement Learning for Setup and Tardiness Minimization in Parallel Machine Scheduling",
    authors: "Nam, S., Baek, J., Cho, Y. I., & Woo, J. H.",
    venue: "2024 Winter Simulation Conference (WSC), IEEE",
    volume: "pp. 2583–2594",
    year: 2024,
    month: "Dec",
    note: "Presenter",
    url: "",   // ← e.g. IEEE Xplore link
    doi: "",
    tags: ["Deep Reinforcement Learning", "Parallel Machine Scheduling", "Simulation"]
  },
  {
    type: "conference",
    title: "Enhancing Search Efficiency of Evolutionary Algorithm for Job Shop Scheduling Problem via Predetermined Sub-optimal Solutions",
    authors: "백지원, 우종훈",
    venue: "대한산업공학회 춘계공동학술대회, 여수",
    year: 2024,
    month: "May",
    note: "Oral",
    url: "",   // ← Add URL when available
    tags: ["Genetic Algorithm", "Job Shop Scheduling"]
  },
  {
    type: "conference",
    title: "잡샵 일정계획 문제의 최적화를 위한 유전 알고리즘의 탐색 성능 향상 기법",
    titleEn: "Enhancing Search Performance of Genetic Algorithm for Job Shop Scheduling Optimization",
    authors: "백지원, 우종훈",
    venue: "2024 한국해양과학기술협의회 공동학술대회, 대한조선학회, 제주",
    year: 2024,
    month: "May",
    note: "Oral",
    url: "",   // ← Add URL when available
    tags: ["Genetic Algorithm", "Job Shop Scheduling", "Shipbuilding"]
  }
];

// ─────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────
//
// image : path to project thumbnail — leave "" to show a colored placeholder
// url   : link to GitHub repo, paper, or demo — leave "" to hide the button
//
const PROJECTS = [
  // ── Paste your projects below. Example: ─────────────────────
  // {
  //   title: "RUBI: Urgency-Based Scheduling Initialization",
  //   description: "A novel initialization strategy for genetic algorithms applied to the Job Shop Scheduling Problem, leveraging relative urgency metrics to improve convergence speed and solution quality.",
  //   period: "2024 – 2025",
  //   tags: ["Python", "Genetic Algorithm", "Scheduling"],
  //   url: "",        // ← GitHub or paper URL
  //   image: ""       // ← e.g. "assets/images/proj_rubi.jpg"
  // },
];

// ─────────────────────────────────────────────────────────────────
// AWARDS & ACTIVITIES
// ─────────────────────────────────────────────────────────────────
const AWARDS = [
  {
    title: "학생우수논문발표상 (Best Student Paper Presentation Award)",
    event: "2025 한국해양과학기술협의회 공동학술대회",
    year: "May 2025"
  },
  {
    title: "한국해양공학회장상 (KSOE President Award)",
    event: "한국해양공학회",
    year: "Feb 2024"
  },
  {
    title: "1st Place – Remote Control Division & Resistance/Propulsion Design Award",
    event: "3rd KABOAT (자율운항보트 경진대회), Team SAS, Seoul National University",
    year: "Aug 2022"
  }
];

const ACTIVITIES = [
  {
    title: "Exchange Student",
    place: "Shanghai Jiao Tong University (上海交通大学)",
    period: "Feb 2022 – Jul 2022",
    description: "Semester-long exchange program in Shanghai, China."
  },
  {
    title: "Student PR Reporter, SNU College of Engineering",
    place: "공대상상 (SNU Engineering Webzine)",
    period: "2019 – 2024",
    description: "Produced engineering webzine content; organized SNU Engineering Frontier Camp (2019, 2022, 2023)."
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
  { src: "assets/gallery/2024_WSC_overview.png",
    caption: "WSC 2024 — Overview", date: "Dec 2024" },
  { src: "assets/gallery/2024_WSC_video1.mp4",
    caption: "WSC 2024 — Problem Description", date: "Dec 2024" },
  { src: "assets/gallery/2024_WSC_video2.mp4",
    caption: "WSC 2024 — Presentation", date: "Dec 2024" },
  { src: "assets/gallery/Quay_Wall_Allocation_problem(Eng).mp4",
    caption: "Quay Wall Allocation Problem", date: "2025" },
  { src: "assets/gallery/Quay_Wall_Allocation_problem(Kor).mp4",
    caption: "안벽 배치 최적화 문제", date: "2025" },
  { src: "assets/gallery/Steel_Stock_Yard.mp4",
    caption: "Steel Stock Yard Simulation", date: "2025" },
];

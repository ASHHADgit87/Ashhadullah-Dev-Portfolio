import type { Project, Skill, StatCard } from "@/types/project.types";
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Prism AI",
    stack: ["PostgreSQL", "Express", "React", "Node", "TypeScript", "OpenAI"],
    category: ["PERN", "SaaS"],
    description:
      "Prompt → working website frontend in seconds. Credit-based SaaS with full version control.",
    features: [
      "Prompt → working website frontend in seconds",
      "Credit-based usage tracking",
      "Version control with one-click rollback",
      "Visual editor: text, CSS, classes in live iframe",
      "Multi-device preview: Desktop / Tablet / Mobile",
    ],
    liveUrl: "https://prism-ai-ashhaddev.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
  {
    id: 2,
    title: "Aura AI",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Three.js",
      "OpenAI",
      "DeepAI",
    ],
    category: ["MERN", "SaaS"],
    description:
      "8 AI tools in one dashboard — multi-API orchestration with a 3D animated UI.",
    features: [
      "8 AI tools in one dashboard",
      "5+ third-party AI APIs integrated",
      "Three.js 3D animated bubble background",
      "JWT + bcrypt + token expiry + auto-logout",
    ],
    liveUrl: "https://aura-ai-ashhaddev.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
  {
    id: 3,
    title: "FastLodge",
    stack: ["MongoDB", "Express", "React", "Node", "Stripe", "Clerk"],
    category: ["MERN", "SaaS"],
    description:
      "Hotel booking platform with dual-role dashboards and live Stripe payments.",
    features: [
      "Dual-role: customer + vendor dashboards",
      "Stripe payment + webhook handling",
      "Real-time room availability toggle",
    ],
    liveUrl: "https://fastlodge.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
  {
    id: 4,
    title: "Chat Nova",
    stack: ["React", "Firebase", "Firestore", "Cloudinary", "TypeScript"],
    category: ["Firebase"],
    description:
      "Real-time messaging with instant text, image and video — live presence tracking.",
    features: [
      "Instant text, image, video messaging via Firestore",
      "Live presence tracking + message-seen status",
      "Three-panel responsive UI",
    ],
    liveUrl: "https://chat-nova-swart.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
  {
    id: 5,
    title: "Burnout Radar",
    stack: ["React", "Supabase", "Chart.js", "TypeScript"],
    category: ["Supabase"],
    description:
      "Developer burnout tracker — daily logs, 5+ chart types, dark/light theme.",
    features: [
      "Daily log: energy, focus, frustration, coding hours",
      "5+ Chart.js chart types with scroll-triggered fill",
      "Light/dark theme toggle",
    ],
    liveUrl: "https://burnout-radar-rho.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "JavaScript (ES6+)",
    level: "Expert",
    percentage: 95,
    group: "Languages",
  },
  { name: "TypeScript", level: "Advanced", percentage: 80, group: "Languages" },
  { name: "C++", level: "Intermediate", percentage: 55, group: "Languages" },
  { name: "Python", level: "Intermediate", percentage: 50, group: "Languages" },

  { name: "React", level: "Expert", percentage: 95, group: "Frontend" },
  { name: "Tailwind CSS", level: "Expert", percentage: 92, group: "Frontend" },
  {
    name: "Framer Motion",
    level: "Advanced",
    percentage: 78,
    group: "Frontend",
  },
  {
    name: "Three.js / R3F",
    level: "Intermediate",
    percentage: 60,
    group: "Frontend",
  },
  { name: "Next.js", level: "Intermediate", percentage: 55, group: "Frontend" },

  { name: "Node.js", level: "Expert", percentage: 90, group: "Backend" },
  { name: "Express.js", level: "Expert", percentage: 90, group: "Backend" },
  { name: "REST APIs", level: "Expert", percentage: 92, group: "Backend" },
  { name: "JWT Auth", level: "Expert", percentage: 90, group: "Backend" },

  { name: "MongoDB", level: "Expert", percentage: 88, group: "DB" },
  { name: "PostgreSQL", level: "Advanced", percentage: 78, group: "DB" },
  { name: "Supabase", level: "Intermediate", percentage: 65, group: "DB" },
  { name: "Firebase", level: "Intermediate", percentage: 68, group: "DB" },

  { name: "OpenAI API", level: "Advanced", percentage: 82, group: "AI" },
  { name: "Google Gemini", level: "Advanced", percentage: 78, group: "AI" },
  { name: "DeepAI", level: "Intermediate", percentage: 65, group: "AI" },
  {
    name: "Anthropic Claude",
    level: "Intermediate",
    percentage: 65,
    group: "AI",
  },
];

export const STATS: StatCard[] = [
  { value: "9+", label: "Projects" },
  { value: "6", label: "Stacks" },
  { value: "3", label: "AI Certs" },
  { value: "50+", label: "AI Tools" },
];

export const PROJECT_FILTERS = [
  "All",
  "SaaS",
  "MERN",
  "PERN",
  "Firebase",
  "Supabase",
] as const;

export const BIO = `I'm Ashhad — a 20-year-old full-stack developer from Karachi, Pakistan, studying Software Engineering at NED University. I specialise in building AI-integrated SaaS platforms using MERN and PERN, with a strong focus on LLM integration, scalable REST APIs, and clean frontend architecture. I don't just learn frameworks — I ship products with them.`;

export const SOCIALS = {
  github: "https://github.com/ASHHADgit87",
  linkedin: "https://linkedin.com/in/muhammad-ashhadullah-zaheer",
  email: "mailto:ashhadullah@email.com",
};

export const NAV_LINKS = [
  "hero",
  "projects",
  "about",
  "skills",
  "contact",
] as const;

export const STACK_HIGHLIGHTS = [
  { label: "MERN", detail: "MongoDB · Express · React · Node" },
  { label: "PERN", detail: "PostgreSQL · Express · React · Node" },
  { label: "Firebase", detail: "React TSX · Firebase Auth · Firestore" },
  { label: "Supabase", detail: "React TSX · Supabase Auth · PostgreSQL" },
  { label: "AI APIs", detail: "OpenAI · DeepAI · Gemini · Anthropic" },
];

export const CERTS = [
  { name: "Certified Prompt Engineer", org: "Dubai Future Foundation" },
  { name: "Professional AI Concepts for Devs", org: "Microsoft" },
  { name: "Intro to Generative AI Studio", org: "Google" },
];

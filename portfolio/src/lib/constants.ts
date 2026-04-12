import type { Project, Skill, StatCard } from "@/types/project.types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Prism AI",
    stack: ["PostgreSQL", "Express", "React", "Node", "TypeScript"],
    category: ["PERN", "SaaS", "AI"],
    description:
      "Prompt → working website frontend in seconds. Credit-based SaaS with full version control.",
    features: [
      "Prompt → working website frontend in seconds",
      "Credit-based usage tracking",
      "Version control with rollback",
      "Live visual editor",
      "Multi-device preview",
    ],
    liveUrl: "https://prism-ai-ashhaddev.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/prism-ai",
  },

  {
    id: 2,
    title: "Aura AI",
    stack: ["MongoDB", "Express", "React", "Node", "Three.js", "OpenAI"],
    category: ["MERN", "SaaS", "AI", "3D"],
    description:
      "8 AI tools in one dashboard with 3D UI and multi-API orchestration.",
    features: [
      "AI tools dashboard",
      "Multiple AI APIs",
      "3D animated UI",
      "Authentication system",
    ],
    liveUrl: "https://aura-ai-ashhaddev.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 3,
    title: "FastLodge",
    stack: ["MongoDB", "Express", "React", "Node"],
    category: ["MERN", "SaaS"],
    description: "Hotel booking platform with dashboards and payments.",
    features: ["Dashboards", "Booking system", "Payments"],
    liveUrl: "https://fastlodge.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 4,
    title: "Chat Nova",
    stack: ["React", "Firebase"],
    category: ["Firebase"],
    description: "Real-time messaging app with media sharing.",
    features: ["Messaging", "Presence system", "Seen status"],
    liveUrl: "https://chat-nova-swart.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 5,
    title: "Burnout Radar",
    stack: ["React", "Supabase", "Chart.js"],
    category: ["Supabase"],
    description: "Developer burnout tracking system with analytics.",
    features: ["Tracking", "Analytics", "Dashboard"],
    liveUrl: "https://burnout-radar-rho.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 6,
    title: "CRASS AI Scanner",
    stack: ["React", "Supabase", "Tailwind", "Chart.js", "AI API"],
    category: ["SaaS", "AI"],
    description: "AI-powered code review & security scanner.",
    features: ["Code analysis", "Security scan", "Reports"],
    liveUrl: "https://crass-three.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 7,
    title: "MomentumX",
    stack: ["React", "Three.js"],
    category: ["3D", "Game"],
    description: "3D racing game with AI opponents.",
    features: ["3D physics", "AI opponents", "Camera system"],
    liveUrl: "https://momentum-x-gamma.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 8,
    title: "Mission FAAAH",
    stack: ["TypeScript", "VS Code API"],
    category: ["Extension"],
    description: "VS Code extension with sound feedback.",
    features: ["Terminal detection", "Audio feedback"],
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=ashhadullah-dev.ashhaddev-mission-faah",
    githubUrl: "https://github.com/ASHHADgit87",
  },

  {
    id: 9,
    title: "E-Commerce Platform",
    stack: ["PostgreSQL", "Express", "React", "Node"],
    category: ["PERN"],
    description: "Full-stack e-commerce platform.",
    features: ["Products", "Cart system", "Orders"],
    liveUrl: "https://ashhad-e-commerce.netlify.app",
    githubUrl: "https://github.com/ASHHADgit87",
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript (ES6+)", level: "Expert", percentage: 95, group: "Languages" },
  { name: "TypeScript", level: "Advanced", percentage: 80, group: "Languages" },
  { name: "C++", level: "Intermediate", percentage: 55, group: "Languages" },
  { name: "Python", level: "Intermediate", percentage: 50, group: "Languages" },

  { name: "React", level: "Expert", percentage: 95, group: "Frontend" },
  { name: "Tailwind CSS", level: "Expert", percentage: 92, group: "Frontend" },
  { name: "Framer Motion", level: "Advanced", percentage: 78, group: "Frontend" },
  { name: "Three.js / R3F", level: "Intermediate", percentage: 60, group: "Frontend" },
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
  { name: "Anthropic Claude", level: "Intermediate", percentage: 65, group: "AI" },
];

export const STATS: StatCard[] = [
  { value: "10+", label: "Projects" },
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
  "AI",
  "3D",
  "Game",
  "Extension",
] as const;

export const BIO = `I'm Ashhad — a full-stack developer from Karachi, Pakistan, building AI-powered SaaS and modern web systems with MERN & PERN stacks.`;

export const SOCIALS = {
  github: "https://github.com/ASHHADgit87",
  linkedin: "https://linkedin.com/in/muhammad-ashhadullah-zaheer",
  email: "mailto:ashhadullah@email.com",
};

export const NAV_LINKS = ["hero", "projects", "about", "skills", "contact"] as const;

export const STACK_HIGHLIGHTS = [
  { label: "MERN", detail: "MongoDB · Express · React · Node" },
  { label: "PERN", detail: "PostgreSQL · Express · React · Node" },
  { label: "Firebase", detail: "React · Firebase Auth · Firestore" },
  { label: "Supabase", detail: "React · Supabase · PostgreSQL" },
  { label: "AI APIs", detail: "OpenAI · DeepAI · Gemini · Claude" },
];

export const CERTS = [
  { name: "Certified Prompt Engineer", org: "Dubai Future Foundation" },
  { name: "Professional AI Concepts", org: "Microsoft" },
  { name: "Generative AI Studio", org: "Google" },
];
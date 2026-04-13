import type { Project, Skill } from "@/types/project.types";

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
    githubUrl: "https://github.com/ASHHADgit87/aura-ai",
  },

  {
    id: 3,
    title: "FastLodge",
    stack: ["MongoDB", "Express", "React", "Node"],
    category: ["MERN", "SaaS"],
    description: "Hotel booking platform with dashboards and payments.",
    features: ["Dashboards", "Booking system", "Payments"],
    liveUrl: "https://fastlodge.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/Fastlodge",
  },

  {
    id: 4,
    title: "Chat Nova",
    stack: ["React", "Firebase"],
    category: ["Firebase", "SaaS"],
    description: "Real-time messaging app with media sharing.",
    features: ["Messaging", "Presence system", "Seen status"],
    liveUrl: "https://chat-nova-swart.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/chatnova",
  },

  {
    id: 5,
    title: "Burnout Radar",
    stack: ["React", "Supabase", "Chart.js"],
    category: ["Supabase", "SaaS"],
    description: "Developer burnout tracking system with analytics.",
    features: ["Tracking", "Analytics", "Dashboard"],
    liveUrl: "https://burnout-radar-rho.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/burnout-radar",
  },

  {
    id: 6,
    title: "CRASS",
    stack: ["React", "Supabase", "Tailwind", "Chart.js", "AI API"],
    category: ["SaaS", "AI", "Supabase"],
    description: "AI-powered code review & security scanner.",
    features: ["Code analysis", "Security scan", "Reports"],
    liveUrl: "https://crass-three.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/crass",
  },

  {
    id: 7,
    title: "MomentumX",
    stack: ["React", "Three.js"],
    category: ["3D", "Game"],
    description: "3D racing game with AI opponents.",
    features: ["3D physics", "AI opponents", "Camera system"],
    liveUrl: "https://momentum-x-gamma.vercel.app",
    githubUrl: "https://github.com/ASHHADgit87/momentum-x",
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
    githubUrl: "https://github.com/ASHHADgit87/mission-faaah",
  },

  {
    id: 9,
    title: "E-Commerce Platform",
    stack: ["PostgreSQL", "Express", "React", "Node"],
    category: ["PERN"],
    description: "Full-stack e-commerce platform.",
    features: ["Products", "Cart system", "Orders"],
    liveUrl: "https://ashhad-e-commerce.netlify.app",
    githubUrl: "https://github.com/ASHHADgit87/E-commerce-Frontend",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "JavaScript (ES6+)",
    level: "Expert",
    percentage: 95,
    group: "Languages",
  },
  { name: "TypeScript", level: "Advanced", percentage: 90, group: "Languages" },
  { name: "C++", level: "Intermediate", percentage: 65, group: "Languages" },
  { name: "Python", level: "Intermediate", percentage: 55, group: "Languages" },

  { name: "React", level: "Expert", percentage: 95, group: "Frontend" },
  { name: "Tailwind CSS", level: "Expert", percentage: 95, group: "Frontend" },
  {
    name: "Framer Motion",
    level: "Advanced",
    percentage: 80,
    group: "Frontend",
  },
  {
    name: "Three.js / R3F",
    level: "Intermediate",
    percentage: 85,
    group: "Frontend",
  },
  { name: "Next.js", level: "Intermediate", percentage: 55, group: "Frontend" },

  { name: "Node.js", level: "Expert", percentage: 90, group: "Backend" },
  { name: "Express.js", level: "Expert", percentage: 90, group: "Backend" },
  { name: "REST APIs", level: "Expert", percentage: 92, group: "Backend" },
  { name: "JWT Auth", level: "Expert", percentage: 90, group: "Backend" },

  { name: "MongoDB", level: "Expert", percentage: 88, group: "DB" },
  { name: "PostgreSQL", level: "Advanced", percentage: 95, group: "DB" },
  { name: "Supabase", level: "Intermediate", percentage: 80, group: "DB" },
  { name: "Firebase", level: "Intermediate", percentage: 78, group: "DB" },

  { name: "OpenAI API", level: "Advanced", percentage: 82, group: "AI" },
  { name: "Google Gemini", level: "Advanced", percentage: 78, group: "AI" },
  { name: "DeepAI", level: "Intermediate", percentage: 80, group: "AI" },
  {
    name: "Anthropic Claude",
    level: "Intermediate",
    percentage: 96,
    group: "AI",
  },
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

export const SOCIALS = {
  github: "https://github.com/ASHHADgit87",
  linkedin: "https://linkedin.com/in/muhammad-ashhadullah-zaheer",
  email: "mailto:ashhadullah@email.com",
};

export const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export const BIO = `
A Software Engineer at NED University, Karachi.

I specialize in building modern full-stack applications with strong focus on performance, scalability, and clean architecture. My expertise spans across frontend, backend, and AI-powered systems.

I have worked extensively with modern technologies including React, TypeScript, Node.js, and multiple database systems. I enjoy transforming complex ideas into real-world, high-quality products.

I am also deeply involved in AI tools and automation, leveraging over 50+ tools to enhance productivity, development workflows, and system intelligence.

My goal is to build impactful digital systems that solve real-world problems while maintaining high standards of design, performance, and usability. I also Work on FreeLance Platforms Like Fiverr etc.
`;

export const STATS = [
  { value: "25+", label: "Projects Built" },
  { value: "50+", label: "AI Tools Mastered" },
  { value: "1.5 Years", label: "Full Stack Experience" },
  { value: "20+", label: "skills Mastered" },
];

export const STACK_HIGHLIGHTS = [
  { label: "Frontend", detail: "React, TypeScript, Tailwind CSS" },
  { label: "Backend", detail: "Node.js, Express, REST APIs" },
  { label: "Database", detail: "MongoDB, PostgreSQL, Firebase" },
  { label: "AI", detail: "LLM APIs, Automation, AI SaaS" },
  { label: "DevOps", detail: "Vercel, Netlify, Render" },
];

export const CERTS = [
  {
    name: "Certified Prompt Engineer",
    org: "Dubai Future Foundation",
    link: "https://omp.dub.ai/certificate/Bfp662aaUSZR",
  },
  {
    name: "Professional AI Concepts for Developers",
    org: "Microsoft",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/AshhadullahZaheer-4933/9RBV774U",
  },
  {
    name: "Introduction to Generative AI Studio",
    org: "Google",
    link: "https://simpli-web.app.link/e/QoD7zBIX40b",
  },
];

export const EDUCATION = [
  {
    degree: "BE Software Engineering",
    place: "NED University of Engineering & Technology",
    year: "June 2024 – June 2028",
  },
];

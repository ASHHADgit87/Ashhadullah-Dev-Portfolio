export interface Project {
  id: number;
  title: string;
  stack: string[];
  category: (
    | "SaaS"
    | "MERN"
    | "PERN"
    | "Firebase"
    | "Supabase"
    | "AI"
    | "3D"
    | "Game"
    | "Extension"
  )[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  percentage: number;
  group: "Languages" | "Frontend" | "Backend" | "DB" | "AI";
}

export interface StatCard {
  value: string;
  label: string;
}

export interface UIStore {
  activeSection: string;
  modalOpen: boolean;
  selectedProject: Project | null;
  setActiveSection: (s: string) => void;
  openModal: (p: Project) => void;
  closeModal: () => void;
}

export interface CursorStore {
  x: number;
  y: number;
  set: (x: number, y: number) => void;
}

import { create } from "zustand";
import type { UIStore, Project } from "@/types/project.types";

export const useUIStore = create<UIStore>((set) => ({
  activeSection: "hero",
  modalOpen: false,
  selectedProject: null,

  setActiveSection: (s) => set({ activeSection: s }),
  openModal: (p: Project) => set({ modalOpen: true, selectedProject: p }),
  closeModal: () => set({ modalOpen: false, selectedProject: null }),
}));

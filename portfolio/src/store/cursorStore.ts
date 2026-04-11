import { create } from "zustand";
import type { CursorStore } from "@/types/project.types";

export const useCursorStore = create<CursorStore>((set) => ({
  x: 0,
  y: 0,
  set: (x, y) => set({ x, y }),
}));

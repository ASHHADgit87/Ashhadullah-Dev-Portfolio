import { useEffect } from "react";
import { useCursorStore } from "@/store/cursorStore";

export const useCursorPosition = () => {
  const set = useCursorStore((s) => s.set);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      set(x, y);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [set]);
};

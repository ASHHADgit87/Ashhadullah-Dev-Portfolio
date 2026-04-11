import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const cardTilt: Variants = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { scale: 1.03, rotateX: 4, rotateY: -4 },
};

export const skillBar = (pct: number): Variants => ({
  hidden: { width: "0%" },
  show: { width: `${pct}%`, transition: { duration: 1.2, ease: "easeOut" } },
});

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

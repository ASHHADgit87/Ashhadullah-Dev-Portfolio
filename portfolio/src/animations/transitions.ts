import type { Transition } from "framer-motion";

export const springSmooth: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 22,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

export const easeFade: Transition = {
  duration: 0.65,
  ease: [0.25, 0.1, 0.25, 1],
};

export const easeCinematic: Transition = {
  duration: 1.1,
  ease: [0.16, 1, 0.3, 1],
};

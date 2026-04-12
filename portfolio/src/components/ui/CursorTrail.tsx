import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const CursorTrail = () => {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const counter = useRef(0);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 520, damping: 32 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 32 });

  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      x.set(clientX);
      y.set(clientY);
      setVisible(true);

      const id = counter.current++;
      setParticles((prev) => [
        ...prev.slice(-5),
        { id, x: clientX, y: clientY },
      ]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 450);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <AnimatePresence>
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: p.x,
              top: p.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: i % 2 === 0 ? "#7C3AED" : "#15803D",
                boxShadow: i % 2 === 0 ? "0 0 6px #7C3AED" : "0 0 6px #15803D",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="rounded-full"
          style={{
            width: 28,
            height: 28,
            border: "1px solid rgba(21,128,61,0.55)",
            boxShadow: "0 0 18px rgba(21,128,61,0.25)",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="rounded-full"
          style={{
            width: 12,
            height: 12,
            border: "1px solid rgba(124,58,237,0.6)",
            boxShadow: "0 0 10px rgba(124,58,237,0.25)",
          }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9999] select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          style={{
            width: 2,
            height: 2,
            borderRadius: "50%",
            background: "#7C3AED",
            boxShadow: "0 0 10px #7C3AED",
          }}
        />
      </motion.div>
    </>
  );
};

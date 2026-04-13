import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Variants } from "framer-motion";

import {
  BIO,
  STATS,
  STACK_HIGHLIGHTS,
  CERTS,
  EDUCATION,
} from "@/lib/constants";

import { ExternalLink } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    mouseX.set(x * 6);
    mouseY.set(y * 6);
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };

  const card =
    "relative p-5 rounded-xl bg-[#111122]/60 border border-white/10 overflow-hidden transition-all duration-300 group";

  const gradientBorder =
    "absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-[#7C3AED] via-[#ed7c3a] to-[#7C3AED] blur-2xl";

  return (
    <section
      id="about"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative py-32 px-8 md:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <Sparkles
            count={220}
            scale={[14, 7, 18]}
            size={2.2}
            speed={0.8}
            color="#7C3AED"
            position={[0, 0, -2]}
          />
          <Sparkles
            count={160}
            scale={[12, 6, 16]}
            size={2}
            speed={1}
            color="#ed7c3a"
            position={[0, 0, -3]}
          />
          <Sparkles
            count={90}
            scale={[10, 5, 14]}
            size={2.4}
            speed={0.6}
            color="#ffffff"
            opacity={0.1}
            position={[0, 0, -4]}
          />
        </Canvas>
      </div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-10">
          <motion.div variants={item}>
            <span className="text-[#7C3AED] text-xs font-mono tracking-[0.3em] uppercase italic">
              About Me
            </span>

            <h2 className="text-5xl font-bold text-[#7C3AED] mt-3 italic">
              Hi, I am Ashhadullah
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="text-white/70 text-xl leading-relaxed italic"
          >
            {BIO}
          </motion.p>

          <motion.div variants={item}>
            <h3 className="text-[#ed7c3a] text-xs font-mono uppercase tracking-widest mb-4 italic">
              Education
            </h3>

            {EDUCATION.map((e) => (
              <div key={e.degree} className={`${card} group`}>
                <div className={gradientBorder} />
                <p className="text-white font-medium relative z-10 italic">
                  {e.degree}
                </p>
                <p className="text-white/50 text-sm relative z-10 italic">
                  {e.place}
                </p>
                <p className="text-[#ed7c3a] text-xs mt-1 relative z-10 italic">
                  {e.year}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-10">
          <motion.div variants={item}>
            <h3 className="text-[#ed7c3a] text-xs font-mono uppercase tracking-widest mb-4 italic">
              Stack Highlights
            </h3>

            <div className="flex flex-col gap-3">
              {STACK_HIGHLIGHTS.map((s) => (
                <div key={s.label} className={card}>
                  <div className={gradientBorder} />
                  <div className="relative z-10 flex items-center gap-4 italic">
                    <span className="text-[#ed7c3a] font-mono w-24">
                      {s.label}
                    </span>
                    <span className="text-white/60">{s.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-[#ed7c3a] text-xs font-mono uppercase tracking-widest mb-4 italic">
              Certifications
            </h3>

            <div className="flex flex-col gap-3">
              {CERTS.map((c) => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} cursor-pointer min-h-[80px] flex flex-col justify-center`}
                >
                  <div className={gradientBorder} />

                  <div className="absolute top-4 right-4 z-20 text-[#ed7c3a] opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                  </div>

                  <div className="relative z-10 flex flex-col gap-1 pr-8 italic">
                    <span className="text-white/80 text-sm font-medium">
                      {c.name}
                    </span>
                    <span className="text-[#ed7c3a]/80 text-xs font-mono">
                      {c.org}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div key={stat.label} className={card}>
                <div className={gradientBorder} />
                <div className="relative z-10 italic">
                  <span className="text-3xl font-bold text-[#7C3AED]">
                    {stat.value}
                  </span>
                  <p className="text-white/40 text-sm mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

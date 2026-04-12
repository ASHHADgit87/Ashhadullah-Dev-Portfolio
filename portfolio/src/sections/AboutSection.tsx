import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BIO, STATS, STACK_HIGHLIGHTS, CERTS } from "@/lib/constants";
import { sectionReveal, staggerContainer, fadeUp } from "@/animations/variants";

export const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 px-8 md:px-20  relative">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto flex flex-col gap-16 relative z-10"
        variants={sectionReveal}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-2">
          <span className="text-[#7C3AED] text-xs font-mono tracking-[0.2em] uppercase">
            About
          </span>
          <h2 className="text-4xl font-bold text-white">Who I am</h2>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{BIO}</p>

        <motion.div
          className="flex flex-wrap gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col gap-1 bg-[#151528] border border-[#7C3AED]/10 rounded-xl px-6 py-5 min-w-[120px] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl font-bold text-[#7C3AED]">
                {stat.value}
              </span>
              <span className="text-white/40 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">
            Stack Highlights
          </h3>

          {STACK_HIGHLIGHTS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 py-2 border-b border-white/5 text-sm"
            >
              <span className="text-[#15803D] font-mono w-20 shrink-0">
                {s.label}
              </span>
              <span className="text-white/40">{s.detail}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">
            Certifications
          </h3>

          {CERTS.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between py-2 border-b border-white/5"
            >
              <span className="text-white/70 text-sm font-medium">
                {c.name}
              </span>
              <span className="text-[#15803D]/60 text-xs font-mono">
                {c.org}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

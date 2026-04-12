import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProjectModal } from "@/sections/ProjectModal";
import { sectionReveal, staggerContainer, fadeUp } from "@/animations/variants";

export const ProjectsSection = () => {
  const [active, setActive] = useState<string>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active as any));

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-8 md:px-20 bg-[#0B0B12]"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col gap-12"
        variants={sectionReveal}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-2">
          <span className="text-[#7C3AED] text-xs font-mono tracking-[0.2em] uppercase">
            Work
          </span>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 backdrop-blur-md
              ${
                active === f
                  ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-[#7C3AED]/30 scale-105"
                  : "bg-[#151528]/40 border-white/10 text-white/40 hover:border-[#15803D]/40 hover:text-white hover:bg-[#151528]/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="transform-gpu"
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <ProjectModal />
    </section>
  );
};

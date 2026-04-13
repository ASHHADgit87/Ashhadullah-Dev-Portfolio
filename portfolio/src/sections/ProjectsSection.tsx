import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProjectModal } from "@/sections/ProjectModal";

export const ProjectsSection = () => {
  const [active, setActive] = useState<string>("All");
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active as any));

  if (isInView) {
    hasAnimated.current = true;
  }

  return (
    <section id="projects" ref={ref} className="py-32 px-8 md:px-20">
      <motion.div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        <div>
          <span className="text-[#7C3AED] text-xs tracking-[0.2em] uppercase">
            Work
          </span>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`
                px-4 py-1.5 rounded-full text-sm border transition
                ${
                  active === f
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-[#151528]/40 border-white/10 text-white/40 hover:text-white hover:border-[#15803D]/40"
                }
              `}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              className="h-full"
              initial={{
                opacity: 0,
                x: 350,
              }}
              animate={
                hasAnimated.current
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                delay: i * 0.7,
                duration: 3,
                ease: [0.22, 1, 0.5, 1],
              }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal />
    </section>
  );
};

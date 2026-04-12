import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProjectModal } from "@/sections/ProjectModal";

export const ProjectsSection = () => {
  const [active, setActive] = useState<string>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active as any));

  return (
    <section id="projects" ref={ref} className="py-32 px-8 md:px-20 bg-[#0B0B12] ">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(21,128,61,0.06),transparent_55%)]" />

      {/* Header */}
      <motion.div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        
        <div>
          <span className="text-[#7C3AED] text-xs tracking-[0.2em] uppercase">
            Work
          </span>
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Filters */}
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((p) => (
            <div key={p.id} className="h-full">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </motion.div>

      <ProjectModal />
    </section>
  );
};
import { motion } from "framer-motion";
import type { Project } from "@/types/project.types";
import { TechTag } from "@/components/shared/TechTag";
import { useUIStore } from "@/store/uiStore";
import { cardTilt } from "@/animations/variants";
import { springSmooth } from "@/animations/transitions";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const openModal = useUIStore((s) => s.openModal);

  return (
    <motion.div
      className="relative bg-[#151528] border border-[#7C3AED]/10 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
      variants={cardTilt}
      initial="rest"
      whileHover="hover"
      transition={springSmooth}
      onClick={() => openModal(project)}
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="flex items-start justify-between gap-3 relative z-10">
        <h3 className="text-white font-semibold text-base leading-tight group-hover:text-[#7C3AED] transition-colors">
          {project.title}
        </h3>

        <ExternalLink
          size={14}
          className="text-white/20 group-hover:text-[#7C3AED] transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-1.5 relative z-10">
        {project.category.map((cat) => (
          <span
            key={cat}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 font-medium backdrop-blur"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-white/45 text-sm leading-relaxed line-clamp-2 relative z-10">
        {project.description}
      </p>

      <ul className="flex flex-col gap-1.5 relative z-10">
        {project.features.slice(0, 2).map((f) => (
          <li
            key={f}
            className="text-xs text-white/35 flex items-start gap-1.5"
          >
            <span className="text-[#15803D] mt-0.5 shrink-0">▸</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5 relative z-10">
        {project.stack.slice(0, 5).map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </motion.div>
  );
};

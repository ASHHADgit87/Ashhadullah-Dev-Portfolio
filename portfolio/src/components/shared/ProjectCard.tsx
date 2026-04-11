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
      className="bg-[#161820] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group"
      variants={cardTilt}
      initial="rest"
      whileHover="hover"
      transition={springSmooth}
      onClick={() => openModal(project)}
      style={{ perspective: 800 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-base leading-tight group-hover:text-[#00FFB2] transition-colors">
          {project.title}
        </h3>
        <ExternalLink
          size={14}
          className="text-white/20 group-hover:text-[#00FFB2] transition-colors shrink-0 mt-0.5"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.category.map((cat) => (
          <span
            key={cat}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/20 font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-white/45 text-sm leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <ul className="flex flex-col gap-1.5">
        {project.features.slice(0, 2).map((f) => (
          <li
            key={f}
            className="text-xs text-white/35 flex items-start gap-1.5"
          >
            <span className="text-[#00FFB2] mt-0.5 shrink-0">▸</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
        {project.stack.slice(0, 5).map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </motion.div>
  );
};

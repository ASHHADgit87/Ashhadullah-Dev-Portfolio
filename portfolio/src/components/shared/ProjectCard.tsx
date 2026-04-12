import { motion } from "framer-motion";
import type { Project } from "@/types/project.types";
import { TechTag } from "@/components/shared/TechTag";
import { useUIStore } from "@/store/uiStore";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const openModal = useUIStore((s) => s.openModal);

  return (
    <motion.div
      onClick={() => openModal(project)}
      className="
        relative h-[300px] flex flex-col gap-4 cursor-pointer
        bg-[#151528] border border-white/10 rounded-2xl p-6
        overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transform-gpu
      "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10, // ✅ straight float (NO ROTATION)
        transition: { type: "spring", stiffness: 220, damping: 18 },
      }}
    >
      {/* Purple + Green Glow Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(21,128,61,0.18),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <h3 className="text-white font-semibold group-hover:text-[#7C3AED] transition">
          {project.title}
        </h3>

        <ExternalLink
          size={14}
          className="text-white/30 group-hover:text-[#15803D] transition"
        />
      </div>

      {/* Categories */}
      <div className="relative z-10 flex flex-wrap gap-1.5">
        {project.category.map((cat) => (
          <span
            key={cat}
            className="
              text-[10px] px-2 py-0.5 rounded-full
              bg-[#7C3AED]/10 text-[#7C3AED]
              border border-[#7C3AED]/20
            "
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="relative z-10 text-white/50 text-sm line-clamp-3">
        {project.description}
      </p>

      {/* Features */}
      <ul className="relative z-10 flex flex-col gap-1.5">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="text-xs text-white/40 flex gap-2">
            <span className="text-[#15803D]">▸</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="relative z-10 mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
        {project.stack.slice(0, 5).map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </motion.div>
  );
};
import { Dialog } from "@/components/ui/Dialog";
import { useUIStore } from "@/store/uiStore";
import { TechTag } from "@/components/shared/TechTag";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const ProjectModal = () => {
  const { modalOpen, selectedProject, closeModal } = useUIStore();

  if (!selectedProject) return null;

  return (
    <Dialog open={modalOpen} onClose={closeModal}>
      <div className="p-8 flex flex-col gap-6 bg-[#151528] text-white backdrop-blur-xl border border-[#7C3AED]/10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-white">
              {selectedProject.title}
            </h3>
            <p className="text-white/40 text-sm">
              {selectedProject.description}
            </p>
          </div>

          <button
            onClick={closeModal}
            className="text-white/30 hover:text-[#7C3AED] text-xl transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedProject.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2.5 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20"
            >
              {cat}
            </span>
          ))}
        </div>

        <ul className="flex flex-col gap-2.5">
          {selectedProject.features.map((f) => (
            <li
              key={f}
              className="text-sm text-white/60 flex items-start gap-2"
            >
              <span className="text-[#15803D] mt-0.5">▸</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {selectedProject.stack.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          <Button
            variant="primary"
            onClick={() => window.open(selectedProject.liveUrl, "_blank")}
          >
            <ExternalLink size={14} />
            Live Demo
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
          >
            <FaGithub size={18} />
            GitHub
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

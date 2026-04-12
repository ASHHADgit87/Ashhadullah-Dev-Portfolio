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
      <div className="relative p-8 flex flex-col gap-6 bg-[#151528] text-white overflow-hidden border border-[#7C3AED]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(21,128,61,0.12),transparent_60%)]" />

        <div className="relative z-10 flex justify-between">
          <div>
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
            <p className="text-white/40 text-sm">
              {selectedProject.description}
            </p>
          </div>

          <button
            onClick={closeModal}
            className="text-white/30 hover:text-[#7C3AED]"
          >
            ✕
          </button>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2">
          {selectedProject.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20"
            >
              {cat}
            </span>
          ))}
        </div>

        <ul className="relative z-10 flex flex-col gap-2">
          {selectedProject.features.map((f) => (
            <li key={f} className="text-sm text-white/60 flex gap-2">
              <span className="text-[#15803D]">▸</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex flex-wrap gap-2">
          {selectedProject.stack.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>

        <div className="relative z-10 flex gap-3 border-t border-white/10 pt-3">
          <Button
            onClick={() => window.open(selectedProject.liveUrl, "_blank")}
            variant="primary"
          >
            <ExternalLink size={14} />
            Live Demo
          </Button>

          <Button
            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
            variant="outline"
          >
            <FaGithub />
            Github
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

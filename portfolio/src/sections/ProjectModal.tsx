import { Dialog } from '@/components/ui/Dialog';
import { useUIStore } from '@/store/uiStore';
import { TechTag } from '@/components/shared/TechTag';
import { Button } from '@/components/ui/Button';
import { ExternalLink, } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

export const ProjectModal = () => {
  const { modalOpen, selectedProject, closeModal } = useUIStore();

  if (!selectedProject) return null;

  return (
    <Dialog open={modalOpen} onClose={closeModal}>
      <div className='p-8 flex flex-col gap-6'>
        {/* header */}
        <div className='flex items-start justify-between gap-4'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl font-bold text-white'>{selectedProject.title}</h3>
            <p className='text-white/40 text-sm'>{selectedProject.description}</p>
          </div>
          <button
            onClick={closeModal}
            className='text-white/25 hover:text-white text-xl leading-none transition-colors shrink-0'
          >
            ✕
          </button>
        </div>

        {/* category pills */}
        <div className='flex flex-wrap gap-2'>
          {selectedProject.category.map((cat) => (
            <span
              key={cat}
              className='text-xs px-2.5 py-0.5 rounded-full bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/20 font-medium'
            >
              {cat}
            </span>
          ))}
        </div>

        {/* all features */}
        <ul className='flex flex-col gap-2.5'>
          {selectedProject.features.map((f) => (
            <li key={f} className='text-sm text-white/60 flex items-start gap-2'>
              <span className='text-[#00FFB2] mt-0.5 shrink-0'>▸</span>
              {f}
            </li>
          ))}
        </ul>

        {/* stack */}
        <div className='flex flex-wrap gap-2'>
          {selectedProject.stack.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>

        {/* CTAs */}
        <div className='flex items-center gap-3 pt-2 border-t border-white/5'>
          <Button
            variant='primary'
            onClick={() => window.open(selectedProject.liveUrl, '_blank')}
          >
            <ExternalLink size={14} />
            Live Demo
          </Button>
          <Button
            variant='outline'
            onClick={() => window.open(selectedProject.githubUrl, '_blank')}
          >
            <FaGithub size={18} />
            GitHub
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
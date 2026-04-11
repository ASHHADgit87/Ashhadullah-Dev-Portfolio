import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS, PROJECT_FILTERS } from '@/lib/constants';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ProjectModal } from '@/sections/ProjectModal';
import { sectionReveal, staggerContainer, fadeUp } from '@/animations/variants';

export const ProjectsSection = () => {
  const [active, setActive] = useState<string>('All');
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active as any));

  return (
    <section id='projects' ref={ref} className='py-32 px-8 md:px-20'>
      <motion.div
        className='max-w-6xl mx-auto flex flex-col gap-12'
        variants={sectionReveal}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        {/* heading */}
        <div className='flex flex-col gap-2'>
          <span className='text-[#00FFB2] text-xs font-mono tracking-[0.2em] uppercase'>Work</span>
          <h2 className='text-4xl font-bold text-white'>Projects</h2>
        </div>

        {/* filter bar */}
        <div className='flex flex-wrap gap-2'>
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                active === f
                  ? 'bg-[#00FFB2] text-[#0E1015] border-[#00FFB2] font-semibold'
                  : 'border-white/10 text-white/40 hover:border-[#00FFB2]/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* cards grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={staggerContainer}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
        >
          {filtered.map((p) => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* modal lives here so it's scoped to this section */}
      <ProjectModal />
    </section>
  );
};
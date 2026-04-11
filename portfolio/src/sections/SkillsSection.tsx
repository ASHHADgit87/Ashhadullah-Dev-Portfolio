import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '@/lib/constants';
import { skillBar, sectionReveal, staggerContainer, fadeUp } from '@/animations/variants';

const GROUPS = ['Languages', 'Frontend', 'Backend', 'DB', 'AI'] as const;

const levelColor: Record<string, string> = {
  Expert:       'bg-[#00FFB2]',
  Advanced:     'bg-blue-400',
  Intermediate: 'bg-purple-400',
  Beginner:     'bg-white/20',
};

export const SkillsSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='skills' ref={ref} className='py-32 px-8 md:px-20'>
      <motion.div
        className='max-w-4xl mx-auto flex flex-col gap-16'
        variants={sectionReveal}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        {/* heading */}
        <div className='flex flex-col gap-2'>
          <span className='text-[#00FFB2] text-xs font-mono tracking-[0.2em] uppercase'>Capabilities</span>
          <h2 className='text-4xl font-bold text-white'>Skills</h2>
        </div>

        {/* legend */}
        <div className='flex flex-wrap items-center gap-5 text-xs'>
          {Object.entries(levelColor).map(([level, color]) => (
            <span key={level} className='flex items-center gap-1.5 text-white/40'>
              <span className={`w-2 h-2 rounded-full ${color}`} />
              {level}
            </span>
          ))}
        </div>

        {/* groups */}
        {GROUPS.map((group) => (
          <motion.div
            key={group}
            className='flex flex-col gap-5'
            variants={staggerContainer}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
          >
            <h3 className='text-white/25 text-xs font-mono uppercase tracking-[0.2em]'>{group}</h3>

            {SKILLS.filter((s) => s.group === group).map((skill) => (
              <motion.div key={skill.name} variants={fadeUp} className='flex flex-col gap-2'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-white/70'>{skill.name}</span>
                  <span className='text-white/25 text-xs font-mono'>{skill.level}</span>
                </div>
                {/* bar track */}
                <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                  <motion.div
                    className={`h-full rounded-full ${levelColor[skill.level]}`}
                    variants={skillBar(skill.percentage)}
                    initial='hidden'
                    animate={inView ? 'show' : 'hidden'}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
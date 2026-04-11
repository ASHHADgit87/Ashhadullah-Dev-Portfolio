import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BIO, STATS, STACK_HIGHLIGHTS, CERTS } from '@/lib/constants';
import { sectionReveal, staggerContainer, fadeUp } from '@/animations/variants';

export const AboutSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='about' ref={ref} className='py-32 px-8 md:px-20'>
      <motion.div
        className='max-w-4xl mx-auto flex flex-col gap-16'
        variants={sectionReveal}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        {/* heading */}
        <div className='flex flex-col gap-2'>
          <span className='text-[#00FFB2] text-xs font-mono tracking-[0.2em] uppercase'>About</span>
          <h2 className='text-4xl font-bold text-white'>Who I am</h2>
        </div>

        {/* bio */}
        <p className='text-white/60 text-lg leading-relaxed max-w-2xl'>{BIO}</p>

        {/* stat cards */}
        <motion.div
          className='flex flex-wrap gap-5'
          variants={staggerContainer}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className='flex flex-col gap-1 bg-[#161820] border border-white/8 rounded-xl px-6 py-5 min-w-[120px]'
            >
              <span className='text-3xl font-bold text-[#00FFB2]'>{stat.value}</span>
              <span className='text-white/40 text-sm'>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* stack highlights */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white/30 text-xs font-mono uppercase tracking-widest mb-3'>Stack Highlights</h3>
          {STACK_HIGHLIGHTS.map((s) => (
            <div key={s.label} className='flex items-center gap-4 py-2 border-b border-white/5 text-sm'>
              <span className='text-[#00FFB2] font-mono w-20 shrink-0'>{s.label}</span>
              <span className='text-white/40'>{s.detail}</span>
            </div>
          ))}
        </div>

        {/* certifications */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white/30 text-xs font-mono uppercase tracking-widest mb-3'>Certifications</h3>
          {CERTS.map((c) => (
            <div key={c.name} className='flex items-center justify-between py-2 border-b border-white/5'>
              <span className='text-white/70 text-sm font-medium'>{c.name}</span>
              <span className='text-[#00FFB2]/60 text-xs font-mono'>{c.org}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
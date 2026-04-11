import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '@/three/HeroScene';
import { staggerContainer, fadeUp } from '@/animations/variants';
import { easeCinematic } from '@/animations/transitions';
import { Button } from '@/components/ui/Button';
import {  Mail } from 'lucide-react';
import { SOCIALS } from '@/lib/constants';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden bg-[#0E1015]'
    >
      {/* 3D canvas — right half desktop */}
<div className='absolute inset-0 flex justify-end pointer-events-none'>
  <div className='w-full md:w-[60%] h-full'>
    <HeroScene isMobile={isMobile} />
  </div>
</div>

      {/* mobile fallback avatar image */}
      {isMobile && (
        <div className='absolute right-4 top-24 w-32 h-32 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/20 flex items-center justify-center'>
          <span className='text-4xl'>👨‍💻</span>
        </div>
      )}

      {/* background glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00FFB2]/3 blur-[120px] pointer-events-none' />

      {/* text content */}
      <motion.div
        className='relative z-10 flex flex-col gap-7 px-8 md:px-20 max-w-xl'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        {/* eyebrow */}
        <motion.p
          className='text-[#00FFB2] text-xs font-mono tracking-[0.25em] uppercase'
          variants={fadeUp}
          transition={easeCinematic}
        >
          Full-Stack Developer · AI SaaS Builder
        </motion.p>

        {/* name */}
        <motion.h1
          className='text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight'
          variants={fadeUp}
          transition={easeCinematic}
        >
          Muhammad<br />
          <span className='text-[#00FFB2]'>Ashhad</span>
        </motion.h1>

        {/* tagline */}
        <motion.p
          className='text-white/50 text-lg leading-relaxed max-w-sm'
          variants={fadeUp}
          transition={easeCinematic}
        >
          I build AI-powered, production-ready web applications.
        </motion.p>

        {/* CTAs */}
        <motion.div className='flex items-center gap-4' variants={fadeUp} transition={easeCinematic}>
          <Button variant='primary' onClick={() => scrollTo('projects')}>
            View Projects
          </Button>
          <Button variant='outline' onClick={() => window.open('/cv.pdf', '_blank')}>
            Download CV
          </Button>
        </motion.div>

        {/* socials */}
        <motion.div className='flex items-center gap-4' variants={fadeUp} transition={easeCinematic}>
          <a href={SOCIALS.github}   target='_blank' rel='noreferrer' className='text-white/30 hover:text-[#00FFB2] transition-colors'><FaGithub size={18} />
</a>
          <a href={SOCIALS.linkedin} target='_blank' rel='noreferrer' className='text-white/30 hover:text-[#00FFB2] transition-colors'>
<FaLinkedin size={18} /></a>
          <a href={SOCIALS.email}                                      className='text-white/30 hover:text-[#00FFB2] transition-colors'><Mail size={18} /></a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 text-xs'
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <span className='font-mono tracking-widest'>scroll</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
};
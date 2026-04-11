import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';
import { SOCIALS } from '@/lib/constants';
import { sectionReveal } from '@/animations/variants';
import {  Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactSection = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        // reset after 4s
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => setStatus('error'));
  };

  const inputClass =
    'w-full bg-[#161820] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00FFB2]/50 transition-colors';

  return (
    <section id='contact' ref={ref} className='py-32 px-8 md:px-20'>
      <motion.div
        className='max-w-xl mx-auto flex flex-col gap-10'
        variants={sectionReveal}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        {/* heading */}
        <div className='flex flex-col gap-2'>
          <span className='text-[#00FFB2] text-xs font-mono tracking-[0.2em] uppercase'>Get in touch</span>
          <h2 className='text-4xl font-bold text-white'>Contact</h2>
        </div>

        {/* form */}
        <div className='flex flex-col gap-4'>
          <input
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Name'
            className={inputClass}
          />
          <input
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Email'
            type='email'
            className={inputClass}
          />
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Message'
            rows={5}
            className={`${inputClass} resize-none`}
          />

          <Button
            variant='primary'
            onClick={handleSend}
            disabled={status === 'sending' || !form.name || !form.email || !form.message}
          >
            <Send size={14} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {/* toast feedback */}
          {status === 'sent' && (
            <motion.p
              className='text-[#00FFB2] text-sm text-center'
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <p className='text-red-400 text-sm text-center'>
              Something went wrong. Try again or email directly.
            </p>
          )}
        </div>

        {/* social links */}
        <div className='flex items-center justify-center gap-8 pt-4 border-t border-white/5'>
          <a
  href={SOCIALS.github}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 text-white/35 hover:text-[#00FFB2] transition-colors text-sm"
>
  <FaGithub size={16} /> GitHub
</a>

<a
  href={SOCIALS.linkedin}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 text-white/35 hover:text-[#00FFB2] transition-colors text-sm"
>
  <FaLinkedin size={16} /> LinkedIn
</a>
          <a href={SOCIALS.email} className='flex items-center gap-2 text-white/35 hover:text-[#00FFB2] transition-colors text-sm'>
            <Mail size={16} /> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};
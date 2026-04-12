import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroScene } from "@/three/HeroScene";
import { staggerContainer, fadeUp } from "@/animations/variants";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ashhadullah Zaheer's CV.pdf";
    link.download = "Ashhadullah Zaheer's CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0B0B12] isolate"
    >
      <div className="w-full md:w-1/2 flex items-center">
        <motion.div
          className="flex flex-col gap-7 px-8 md:px-20 max-w-xl"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-[#7C3AED] text-xs font-mono tracking-[0.25em] uppercase"
            variants={fadeUp}
          >
            Full-Stack Developer · Software Engineer Prompt Engineer · AI SaaS
            Builder
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05]"
            variants={fadeUp}
          >
            Muhammad <br />
            <span className="text-[#7C3AED] drop-shadow-[0_0_25px_rgba(124,58,237,0.5)]">
              Ashhadullah Zaheer
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-md max-w-sm italic tracking-wide"
            variants={fadeUp}
          >
            I help businesses build AI-powered SaaS and Web platforms, and
            automation systems using modern full-stack technologies.
          </motion.p>

          <motion.div className="flex gap-4 relative z-50" variants={fadeUp}>
            <Button variant="primary" onClick={() => scrollTo("projects")}>
              View Projects
            </Button>

            <Button variant="outline" onClick={downloadCV}>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-5 text-xl relative z-50"
            variants={fadeUp}
          >
            <a
              href="mailto:ashhadullahzahir@gmail.com"
              className="text-white/40 hover:text-[#7C3AED] hover:scale-110 transition-all"
            >
              <Mail />
            </a>

            <a
              href="https://github.com/Ashhadgit87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#7C3AED] hover:scale-110 transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-ashhadullah-zaheer-41194a340/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#7C3AED] hover:scale-110 transition-all"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden md:flex w-[90%] h-screen items-center justify-center relative z-0">
        <div className="w-full h-full pointer-events-none">
          <HeroScene isMobile={isMobile} />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#7C3AED]/10 blur-[140px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#15803D]/10 blur-[120px]" />

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        scroll ↓
      </motion.div>
    </section>
  );
};

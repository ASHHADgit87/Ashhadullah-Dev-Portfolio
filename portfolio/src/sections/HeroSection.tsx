import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const container: any = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const item: any = {
    hidden: { opacity: 0, x: 600 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5,
        ease: [0.22, 1, 0.7, 1],
      },
    },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center isolate"
    >
      <div className="w-full md:w-1/2 flex items-center">
        <motion.div
          className="flex flex-col gap-7 px-8 md:px-20 max-w-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-[#7C3AED] text-xs font-mono tracking-[0.25em] uppercase"
            variants={item}
          >
            Full-Stack Developer · Software Engineer · Prompt Engineer · AI SaaS
            Builder
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05]"
            variants={item}
          >
            Muhammad <br />
            <span className="text-[#7C3AED] drop-shadow-[0_0_25px_rgba(124,58,237,0.5)]">
              Ashhadullah Zaheer
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-md max-w-sm italic tracking-wide"
            variants={item}
          >
            I help businesses build AI-powered SaaS and Web platforms, and
            automation systems using modern full-stack technologies.
          </motion.p>

          <motion.div className="flex gap-4 relative z-50" variants={item}>
            <Button variant="primary" onClick={() => scrollTo("projects")}>
              View Projects
            </Button>

            <Button variant="outline" onClick={downloadCV}>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-5 text-xl relative z-50"
            variants={item}
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
    </section>
  );
};

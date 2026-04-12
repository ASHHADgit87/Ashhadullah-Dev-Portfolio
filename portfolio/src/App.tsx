import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { HeroScene } from "@/three/HeroScene";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const App = () => {
  useCursorPosition();
  const progress = useScrollProgress();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <SmoothScroll>
      <CursorTrail />
      <motion.div
        className="fixed top-0 right-0 w-[45%] h-screen pointer-events-none z-[50] hidden md:block"
        style={{
          transform: `translateY(${progress * 10}px)`,
        }}
      >
        <HeroScene isMobile={isMobile} />
      </motion.div>

      <div className="bg-[#0E1015] text-white min-h-screen relative z-0 overflow-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;

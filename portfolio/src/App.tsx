import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { useCursorPosition } from "@/hooks/useCursorPosition";

const App = () => {
  useCursorPosition();

  return (
    <SmoothScroll>
      <CursorTrail />

      <div className="bg-[#0E1015] text-white min-h-screen">
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

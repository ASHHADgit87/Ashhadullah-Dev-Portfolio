import { motion } from "framer-motion";
import { useUIStore } from "@/store/uiStore";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const Navbar = () => {
  const activeSection = useUIStore((s) => s.activeSection);
  const progress = useScrollProgress();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <motion.div
        className="h-[2px] bg-[#00FFB2] origin-left"
        style={{ scaleX: progress }}
      />

      <nav className="flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#0E1015]/70 border-b border-white/5">
        <button
          onClick={() => scrollTo("hero")}
          className="text-[#00FFB2] font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          ashhad.dev
        </button>

        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`text-sm capitalize transition-colors duration-200 ${
                  activeSection === link
                    ? "text-[#00FFB2]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

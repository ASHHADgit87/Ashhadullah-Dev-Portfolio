import { useState, useEffect } from "react";
import { useUIStore } from "@/store/uiStore";
import { NAV_LINKS } from "@/lib/constants";
import logo from "@/assets/logo-portfolio.svg";

export const Navbar = () => {
  const activeSection = useUIStore((s) => s.activeSection);
  const setActiveSection = useUIStore((s) => s.setActiveSection);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = NAV_LINKS.filter((link) => link !== "contact");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((id) => document.getElementById(id));

      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl">
        <nav
          className={`flex items-center justify-between w-full transition-all duration-500 px-6 md:px-16 lg:px-24 xl:px-32 ${
            scrolled
              ? "py-3 mt-3 mx-auto max-w-[92%] rounded-2xl bg-[#0B0B12]/85 backdrop-blur-2xl border border-[#7C3AED]/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              : "py-6 mt-0 max-w-full"
          }`}
        >
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center group"
          >
            <img
              src={logo}
              alt="portfolio"
              className="h-10 w-auto min-w-[56px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[2deg]"
            />
          </button>

          <ul className="hidden md:flex items-center gap-10 text-base font-semibold">
            {navLinks.map((link) => {
              const isActive = activeSection === link;

              return (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className={`text-sm capitalize transition-all duration-300 ${
                      isActive
                        ? "text-[#7C3AED]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#15803D] hover:scale-105 transition-all shadow-lg shadow-[#7C3AED]/20 text-sm"
            >
              Contact
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[110] bg-[#0B0B12]/95 backdrop-blur-2xl flex flex-col p-10 md:hidden">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="portfolio" className="h-10 w-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6 text-xl text-white font-semibold">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#15803D] hover:scale-105 transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

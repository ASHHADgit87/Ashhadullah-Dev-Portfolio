import { SOCIALS } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-white/5 py-10 px-8 flex flex-col items-center gap-4">
    <span className="text-[#00FFB2] font-bold text-lg tracking-tight">
      ashhad.dev
    </span>

    <div className="flex items-center gap-6 text-white/40 text-sm">
      <a
        href={SOCIALS.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#00FFB2] transition-colors"
      >
        GitHub
      </a>
      <a
        href={SOCIALS.linkedin}
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#00FFB2] transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={SOCIALS.email}
        className="hover:text-[#00FFB2] transition-colors"
      >
        Email
      </a>
    </div>

    <p className="text-white/20 text-xs">
      © {new Date().getFullYear()} Muhammad Ashhadullah Zaheer · Karachi, PK
    </p>

    <p className="text-[#00FFB2]/40 text-xs italic">
      "Ship it. Then improve it. Then ship again."
    </p>
  </footer>
);

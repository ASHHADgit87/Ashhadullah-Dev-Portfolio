import { clsx } from "clsx";

interface SkillBadgeProps {
  name: string;
  level: string;
}

const levelStyles: Record<string, string> = {
  Expert: "text-[#7C3AED] border-[#7C3AED]/25 bg-[#7C3AED]/10",
  Advanced: "text-[#15803D] border-[#15803D]/25 bg-[#15803D]/10",
  Intermediate: "text-purple-400 border-purple-400/25 bg-purple-400/8",
  Beginner: "text-white/40 border-white/10 bg-white/5",
};

export const SkillBadge = ({ name, level }: SkillBadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium backdrop-blur-md shadow-sm transition-all hover:scale-[1.03]",
      levelStyles[level] ?? levelStyles["Beginner"],
    )}
  >
    {name}
    <span className="opacity-50 font-normal">· {level}</span>
  </span>
);

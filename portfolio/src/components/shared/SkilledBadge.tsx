import { clsx } from "clsx";

interface SkillBadgeProps {
  name: string;
  level: string;
}

const levelStyles: Record<string, string> = {
  Expert: "text-[#00FFB2]  border-[#00FFB2]/25  bg-[#00FFB2]/8",
  Advanced: "text-blue-400   border-blue-400/25   bg-blue-400/8",
  Intermediate: "text-purple-400 border-purple-400/25 bg-purple-400/8",
  Beginner: "text-white/40   border-white/10      bg-white/5",
};

export const SkillBadge = ({ name, level }: SkillBadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium",
      levelStyles[level] ?? levelStyles["Beginner"],
    )}
  >
    {name}
    <span className="opacity-50 font-normal">· {level}</span>
  </span>
);

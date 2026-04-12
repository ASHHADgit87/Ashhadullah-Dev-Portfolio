interface TechTagProps {
  name: string;
}

export const TechTag = ({ name }: TechTagProps) => (
  <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-[#7C3AED]/10 text-white/60 font-mono backdrop-blur-md hover:border-[#7C3AED]/40 hover:text-white transition-all">
    {name}
  </span>
);

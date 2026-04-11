interface TechTagProps {
  name: string;
}

export const TechTag = ({ name }: TechTagProps) => (
  <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/55 font-mono">
    {name}
  </span>
);

import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center px-2.5 py-0.5 rounded-full",
      "text-xs font-medium bg-[#15803D]/10 text-[#15803D]",
      "border border-[#15803D]/20 backdrop-blur-md shadow-sm",
      className,
    )}
  >
    {children}
  </span>
);

import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center px-2.5 py-0.5 rounded-full",
      "text-xs font-medium bg-[#00FFB2]/10 text-[#00FFB2]",
      "border border-[#00FFB2]/20",
      className,
    )}
  >
    {children}
  </span>
);

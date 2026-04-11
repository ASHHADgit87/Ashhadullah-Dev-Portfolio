import { useState, type ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md bg-[#161820] border border-white/10 text-white/80 text-xs px-2.5 py-1 pointer-events-none">
          {text}
        </span>
      )}
    </div>
  );
};

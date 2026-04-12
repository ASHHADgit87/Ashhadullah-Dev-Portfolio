import { type ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg",
          "font-medium text-sm transition-all duration-300 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          "transform-gpu will-change-transform",
          "hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)]",
          {
            "bg-[#7C3AED] text-white hover:bg-[#6D28D9] active:scale-95":
              variant === "primary",

            "border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 active:scale-95":
              variant === "outline",

            "text-white/60 hover:text-[#15803D] hover:bg-white/5 active:scale-95":
              variant === "ghost",
          },
          className,
        )}
        {...props}
      >
        <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

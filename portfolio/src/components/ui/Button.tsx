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
          "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg",
          "font-medium text-sm transition-all duration-200 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-[#00FFB2]/40",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          {
            "bg-[#00FFB2] text-[#0E1015] hover:bg-[#00FFB2]/85 active:scale-95":
              variant === "primary",
            "border border-[#00FFB2] text-[#00FFB2] hover:bg-[#00FFB2]/10 active:scale-95":
              variant === "outline",
            "text-white/60 hover:text-[#00FFB2] hover:bg-white/5 active:scale-95":
              variant === "ghost",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

import { type ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Dialog = ({ open, onClose, children }: DialogProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-2xl bg-[#151528] border border-[#7C3AED]/10 rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl"
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_60%)] pointer-events-none" />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

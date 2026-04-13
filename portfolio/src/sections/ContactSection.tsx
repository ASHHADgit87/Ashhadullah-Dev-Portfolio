import { useState, useRef, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

import { Button } from "@/components/ui/Button";
import { SOCIALS } from "@/lib/constants";
import { sectionReveal } from "@/animations/variants";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Status = "idle" | "sending" | "sent" | "error";

const Particles = () => (
  <>
    <Sparkles
      count={220}
      scale={[14, 7, 18]}
      size={2.2}
      speed={0.8}
      color="#7C3AED"
      opacity={1.2}
      position={[0, 0, -2]}
    />

    <Sparkles
      count={160}
      scale={[12, 6, 16]}
      size={2}
      speed={1.1}
      color="#15803D"
      opacity={0.9}
      position={[0, 0, -3]}
    />

    <Sparkles
      count={90}
      scale={[10, 5, 14]}
      size={2.4}
      speed={0.9}
      color="#ffffff"
      opacity={0.15}
      position={[0, 0, -4]}
    />
  </>
);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setStatus("idle"), 3500);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition backdrop-blur-xl hover:bg-white/10";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1.8] }}>
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] -translate-x-1/2 bg-purple-600/30 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full" />
      </div>

      <motion.div
        className="max-w-xl mx-auto relative z-10"
        variants={sectionReveal}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-purple-300 text-xs tracking-[0.25em] uppercase">
              Transmission Open
            </span>

            <h2 className="text-4xl font-bold text-white mt-2">Contact Me</h2>

            <p className="text-white/50 text-sm mt-2">
              Let’s build something futuristic together.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={inputClass}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className={inputClass}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows={5}
              className={`${inputClass} resize-none`}
            />

            <Button
              variant="primary"
              onClick={handleSend}
              disabled={
                status === "sending" ||
                !form.name ||
                !form.email ||
                !form.message
              }
            >
              <Send size={14} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            {status === "sent" && (
              <motion.p className="text-green-400 text-sm text-center">
                ✓ Message transmitted successfully
              </motion.p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Transmission failed. Try again.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center gap-8 pt-6 mt-8 border-t border-white/10">
            <a
              href={SOCIALS.github}
              className="flex items-center gap-2 text-white/50 hover:text-green-400 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href={SOCIALS.linkedin}
              className="flex items-center gap-2 text-white/50 hover:text-green-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={SOCIALS.email}
              className="flex items-center gap-2 text-white/50 hover:text-green-400 transition"
            >
              <Mail /> Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

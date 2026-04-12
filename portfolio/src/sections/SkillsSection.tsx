import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import {
  skillBar,
  sectionReveal,
  staggerContainer,
  fadeUp,
} from "@/animations/variants";

const GROUPS = ["Languages", "Frontend", "Backend", "DB", "AI"] as const;

const levelColor: Record<string, string> = {
  Expert: "bg-[#7C3AED]",
  Advanced: "bg-[#15803D]",
  Intermediate: "bg-purple-400",
  Beginner: "bg-white/20",
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-8 md:px-20 bg-[#0B0B12]">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col gap-16"
        variants={sectionReveal}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-2">
          <span className="text-[#7C3AED] text-xs font-mono uppercase">
            Skills
          </span>
          <h2 className="text-white text-4xl font-bold">Capabilities</h2>
        </div>

        {GROUPS.map((group) => (
          <motion.div
            key={group}
            className="flex flex-col gap-5"
            variants={staggerContainer}
          >
            <h3 className="text-white/30 text-xs uppercase">{group}</h3>

            {SKILLS.filter((s) => s.group === group).map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between text-sm text-white/70">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${levelColor[skill.level]} shadow-lg shadow-[#7C3AED]/20`}
                    variants={skillBar(skill.percentage)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

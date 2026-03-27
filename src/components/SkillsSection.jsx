import { motion } from "framer-motion";
import { FaJs, FaReact, FaPython, FaGit } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiScikitlearn,
  SiCplusplus,
  SiMysql,
  SiStreamlit,
} from "react-icons/si";
import { fadeUp, staggerContainer } from "./animations";

export default function SkillsSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {[
          ["JavaScript", <FaJs />],
          ["React", <FaReact />],
          ["Tailwind", <SiTailwindcss />],
          ["Python", <FaPython />],
          ["Flask", <SiFlask />],
          ["Streamlit", <SiStreamlit />],
          ["Django", <SiDjango />],
          ["Machine Learning", <SiScikitlearn />],
          ["Git", <FaGit />],
          ["Firebase", <SiFirebase />],
          ["C++", <SiCplusplus />],
          ["SQL", <SiMysql />],
        ].map(([name, icon]) => (
          <motion.div
            key={name}
            variants={fadeUp}
            whileHover={{ scale: 1.1, y: -8, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="rounded-xl bg-zinc-900/60 border border-white/15 px-3 sm:px-4 py-3 shadow-lg hover:shadow-indigo-500/35 transition-all duration-300 flex gap-2 items-center justify-center text-xs sm:text-sm backdrop-blur-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-base">{icon}</span>
            <span className="tracking-wide">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


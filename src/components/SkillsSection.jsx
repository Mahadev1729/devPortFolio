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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function SkillsSection() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        ["JavaScript", <FaJs />],
        ["React", <FaReact />],
        ["Tailwind CSS", <SiTailwindcss />],
      ],
    },
    {
      category: "Backend & ML",
      skills: [
        ["Python", <FaPython />],
        ["Flask", <SiFlask />],
        ["Django", <SiDjango />],
      ],
    },
    {
      category: "Data & ML",
      skills: [
        ["Machine Learning", <SiScikitlearn />],
        ["Streamlit", <SiStreamlit />],
        ["SQL", <SiMysql />],
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        ["Git", <FaGit />],
        ["Firebase", <SiFirebase />],
        ["C++", <SiCplusplus />],
      ],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl">
          A comprehensive toolkit spanning frontend development, backend
          engineering, machine learning, and cloud technologies.
        </p>
      </motion.div>

      {/* Skills categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, groupIndex) => (
          <motion.div
            key={groupIndex}
            variants={itemVariants}
            className="group"
          >
            {/* Category title */}
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors" />
              {skillGroup.category}
            </h3>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-3">
              {skillGroup.skills.map(([name, icon], skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: skillIndex * 0.05 },
                    },
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative group/skill"
                >
                  <div className="rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 p-4 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl sm:text-3xl text-blue-400 group-hover/skill:text-blue-300 transition-colors">
                        {icon}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors text-center">
                        {name}
                      </span>
                    </div>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover/skill:from-blue-600/5 group-hover/skill:to-purple-600/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expertise summary */}
      <motion.div
        variants={itemVariants}
        className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-500/10 border border-blue-500/20 backdrop-blur"
      >
        <p className="text-slate-300">
          <span className="text-blue-400 font-semibold">Specialized in:</span>{" "}
          Full-stack development with React & Python, machine learning model
          development, cloud database design, and creating responsive,
          performant web applications.
        </p>
      </motion.div>
    </motion.section>
  );
}

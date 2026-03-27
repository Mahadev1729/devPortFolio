import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardHover } from "./animations";

export default function EducationExperienceSection() {
  return (
    <motion.section
      id="experience"
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
        Education & Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
        <motion.div
          variants={fadeUp}
          whileHover="hover"
          initial="initial"
          {...cardHover}
          className="relative rounded-2xl bg-zinc-900/60 border border-white/15 p-5 sm:p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-indigo-500 shadow-lg" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Bachelor of Technology – AI & ML
          </h3>
          <p className="text-sm text-zinc-400 mb-1">
            University of Visvesvaraya College of Engineering (UVCE), Bengaluru
          </p>
          <p className="text-sm text-zinc-500 mb-4">
            Dec 2022 – July 2026 • CGPA:{" "}
            <span className="text-indigo-400 font-medium">8.81</span>
          </p>

          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>Strong foundation in DSA, DBMS, OS, and Computer Networks</li>
            <li>Hands-on experience with ML and Full-Stack Development</li>
            <li>
              Worked extensively with Python, React, Flask, and ML libraries
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover="hover"
          initial="initial"
          {...cardHover}
          className="relative rounded-2xl bg-zinc-900/60 border border-white/15 p-5 sm:p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-cyan-500 shadow-lg" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Core Member – UVCE Prathibimba
          </h3>
          <p className="text-sm text-zinc-400 mb-1">
            Content & Event Management Team
          </p>
          <p className="text-sm text-zinc-500 mb-4">2023 – 2024</p>

          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
            <li>
              Organized <strong>ShutterSaga</strong> during MILAGRO 2K24
            </li>
            <li>Coordinated promotions & logistics</li>
            <li>
              Volunteer at <strong>IMPETUS 2K23</strong>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        whileHover={{ y: -4, scale: 1.02 }}
        className="mt-8 sm:mt-12 rounded-2xl bg-zinc-900/60 border border-white/15 p-5 sm:p-6 shadow-xl backdrop-blur-xl"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-400">
          Achievements
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-zinc-400">
          <li>
            Selected among <strong>Top 40 Students</strong> in the TAPAS Program
          </li>
          <li>
            <strong>Bit N Build 24 Hackathon</strong> – Top 4 teams (Software
            Development Track)
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}


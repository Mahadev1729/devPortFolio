import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function EducationExperienceSection() {
  const timeline = [
    {
      title: "Bachelor of Technology – AI & ML",
      org: "University of Visvesvaraya College of Engineering (UVCE)",
      date: "Dec 2022 – July 2026",
      desc: [
        "Strong foundation in DSA, DBMS, OS, and Computer Networks",
        "Hands-on experience with ML and Full-Stack Development",
        "Worked extensively with Python, React, Flask, and ML libraries",
      ],
    },
    {
      title: "Core Member – UVCE Prathibimba",
      org: "Content & Event Management Team",
      date: "2023 – 2024",
      desc: [
        "Organized ShutterSaga during MILAGRO 2K24",
        "Coordinated promotions & logistics",
        "Volunteer at IMPETUS 2K23",
      ],
    },
  ];

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

      <div className="timeline">
        <div className="timeline-line" aria-hidden />
        <div className="timeline-items">
          {timeline.map((t, idx) => (
            <motion.div key={idx} variants={fadeUp} className="timeline-item">
              <div className="timeline-date text-xs text-zinc-500">
                {t.date}
              </div>
              <div className="timeline-card neon-card neon-card-weak p-5 rounded-2xl">
                <h3 className="text-lg font-semibold mb-1">{t.title}</h3>
                <p className="text-sm text-zinc-400 mb-3">{t.org}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
                  {t.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
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

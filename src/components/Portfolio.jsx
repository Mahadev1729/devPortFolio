import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiScikitlearn,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import { useEffect, useState } from "react";

/* ================= ANIMATION CONFIG ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardHover = {
  initial: { y: 0 },
  hover: { y: -10, scale: 1.04, transition: { type: "spring" } },
};

export default function Portfolio() {
  /* ================= TERMINAL TYPING ================= */
  const lines = [
    "mahadev@linux:~$ whoami",
    "Mahadev Chidanand Athani",
    "mahadev@linux:~$ cat role.txt",
    "AI & ML Engineer | Frontend Developer",
    "mahadev@linux:~$ skills --top",
    "React · Tailwind · Python · Machine Learning · Flask",
  ];

  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const timeout = setTimeout(
      () => {
        if (charIndex < lines[lineIndex].length) {
          setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setDisplayed((prev) => [...prev, currentLine]);
          setCurrentLine("");
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }
      },
      charIndex < lines[lineIndex].length ? 35 : 350
    );

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-['Inter'] overflow-hidden">
      {/* FLOATING BACKGROUND BLOBS */}
      <motion.div
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-indigo-500/20 blur-[140px] rounded-full"
        animate={{ x: [0, 100, 0], y: [0, 120, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/20 blur-[140px] rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -120, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50
        backdrop-blur-xl bg-zinc-900/60 border border-white/10 rounded-2xl shadow-lg"
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="font-extrabold tracking-wide text-lg">Mahadev</span>

          <div className="hidden md:flex gap-6 text-sm">
            {["projects", "experience", "contact"].map((s) => (
              <motion.a
                key={s}
                href={`#${s}`}
                whileHover={{ scale: 1.1, color: "#a5b4fc" }}
                className="transition cursor-pointer"
              >
                {s.toUpperCase()}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="pt-40 flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl w-full"
        >
          <div className="absolute inset-0 blur-2xl rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20" />

          <div className="relative rounded-xl bg-zinc-900 border border-white/10 font-['JetBrains_Mono'] text-green-400 shadow-xl">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-t-xl">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-xs text-zinc-400">
                mahadev@portfolio:~
              </span>
            </div>

            <div className="p-6 space-y-3 text-sm">
              <img
                src="/myImage.jpg"
                className="mx-auto w-24 h-24 rounded-full border-2 border-green-400 shadow-lg shadow-green-500/20"
              />

              <motion.p
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
              >
                ✨ Welcome to the world of Mahadev ✨
              </motion.p>

              {displayed.map((l, i) => (
                <p key={i}>{l}</p>
              ))}

              {lineIndex < lines.length && (
                <p>
                  {currentLine}
                  <span className="animate-pulse">█</span>
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["JavaScript", <FaJs />],
            ["React", <FaReact />],
            ["Tailwind", <SiTailwindcss />],
            ["Python", <FaPython />],
            ["Flask", <SiFlask />],
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
              whileHover={{ scale: 1.12, y: -6 }}
              className="rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex gap-2 items-center justify-center text-sm"
            >
              {icon}
              {name}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION & EXPERIENCE */}
      <motion.section
        id="experience"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          Education & Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* EDUCATION CARD */}
          <motion.div
            variants={fadeUp}
            whileHover="hover"
            initial="initial"
            {...cardHover}
            className="relative rounded-2xl bg-zinc-900/60 border border-white/10 p-6 shadow-xl"
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-indigo-500 shadow-lg" />
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology – AI & ML
            </h3>
            <p className="text-sm text-zinc-400 mb-1">
              University of Visvesvaraya College of Engineering (UVCE),
              Bengaluru
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

          {/* EXPERIENCE CARD */}
          <motion.div
            variants={fadeUp}
            whileHover="hover"
            initial="initial"
            {...cardHover}
            className="relative rounded-2xl bg-zinc-900/60 border border-white/10 p-6 shadow-xl"
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-cyan-500 shadow-lg" />
            <h3 className="text-xl font-semibold mb-2">
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

        {/* ACHIEVEMENTS */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4, scale: 1.02 }}
          className="mt-12 rounded-2xl bg-zinc-900/60 border border-white/10 p-6 shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-zinc-400">
            <li>
              Selected among <strong>Top 40 Students</strong> in the TAPAS
              Program
            </li>
            <li>
              <strong>Bit N Build 24 Hackathon</strong> – Top 4 teams (Software
              Development Track)
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent
    bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* PROJECT 1 — AI HEALTH CHATBOT (Style B) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.04 }}
            transition={{ type: "spring" }}
            className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6
      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30"
          >
            <h3 className="text-xl font-semibold mb-2">AI Health ChatBot</h3>

            <p className="text-sm text-indigo-400 mb-3">
              Python • Flask • Streamlit • Machine Learning
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              AI Health ChatBot is an intelligent, ML-powered healthcare
              assistant designed to predict possible diseases based on user
              symptoms. The system uses structured medical datasets,
              multi-symptom vectorization and optimized classifiers to generate
              accurate predictions. The user-friendly conversation interface
              ensures that even non-technical users can interact effortlessly.
            </p>

            <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4">
              <li>Symptom vectorization + multi-label disease prediction</li>
              <li>Model comparison (SVM, Naive Bayes, Decision Tree)</li>
              <li>Streamlit UI with confidence score visualization</li>
              <li>Fast inference through optimized Flask API</li>
            </ul>

            <p className="text-xs text-green-400 mb-4">
              Outcome: Achieved 92% accuracy on validation data with fast and
              interpretable predictions.
            </p>

            <a
              href="https://github.com/mahadevathani/ai-health-chatbot"
              target="_blank"
              className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>

          {/* PROJECT 2 — MOVIE-GPT (Style B) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.04 }}
            transition={{ type: "spring" }}
            className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6
      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30"
          >
            <h3 className="text-xl font-semibold mb-2">Movie-GPT</h3>

            <p className="text-sm text-indigo-400 mb-3">
              React • Tailwind CSS • Firebase • TMDB API
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Movie-GPT is a sleek, modern movie exploration platform built to
              provide users with personalized recommendations and fast access to
              movie data. The system leverages TMDB API for real-time content
              and Firebase for user authentication and cloud-synced favorites.
              It features advanced search, dynamic categories, trailers, cast
              information, and a clean, animated UI.
            </p>

            <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4">
              <li>Real-time movie search, genres & trending categories</li>
              <li>Firebase Authentication (Google & Email Login)</li>
              <li>Firestore database for saved favorites and watchlist</li>
              <li>Responsive design with animated movie cards</li>
              <li>AI-enhanced search suggestions for better discovery</li>
            </ul>

            <p className="text-xs text-green-400 mb-4">
              Outcome: Improved user discoverability and engagement through
              smart search + personalized movie library.
            </p>

            <a
              href="https://github.com/mahadevathani/movie-gpt"
              target="_blank"
              className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>

          {/* PROJECT 3 — FIRE WEATHER INDEX (Style B) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.04 }}
            transition={{ type: "spring" }}
            className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6
      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30"
          >
            <h3 className="text-xl font-semibold mb-2">
              Fire Weather Index Prediction
            </h3>

            <p className="text-sm text-indigo-400 mb-3">
              Python • Flask • Ridge Regression • Data Analysis
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Fire Weather Index (FWI) Prediction is a regression-based ML
              project aimed at forecasting the wildfire risk level using
              meteorological variables. The project involved extensive
              exploratory data analysis, correlation mapping, and feature
              preprocessing. Ridge Regression was selected as the final model
              due to its stability on noisy weather data.
            </p>

            <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4">
              <li>EDA: heatmaps, feature correlations, outlier treatment</li>
              <li>Ridge Regression model with hyperparameter tuning</li>
              <li>Normalization + pipeline-based ML workflow</li>
              <li>Flask interface for real-time FWI predictions</li>
              <li>Data visualization for interpretation & insights</li>
            </ul>

            <p className="text-xs text-green-400 mb-4">
              Outcome: Improved prediction RMSE by 18% and delivered a reliable
              system for early wildfire-risk assessment.
            </p>

            <a
              href="https://github.com/mahadevathani/fire-weather-index"
              target="_blank"
              className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          Contact
        </h2>
        <p className="text-zinc-400 text-lg mb-4">
          📧 mahadev.c.a@campusuvce.in <br />
          📞 +91 8073700212
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-white/10">
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="#" className="hover:text-indigo-400">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-indigo-400">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-xs text-zinc-500">© 2025 Mahadev Chidanand Athani</p>
      </footer>
    </div>
  );
}

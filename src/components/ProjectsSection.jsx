import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function ProjectCard({ title, tech, description, features, outcome, github }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)",
  });

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const rotateY = px * 8;
    const rotateX = -py * 6;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      boxShadow: `0 20px 50px rgba(59, 130, 246, 0.25)`,
    });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)",
      transition:
        "transform 400ms cubic-bezier(.2,.8,.2,1), box-shadow 400ms ease",
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
      style={{ ...style, transformStyle: "preserve-3d" }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-500/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.split(" • ").map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs font-medium border border-blue-500/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="text-sm text-slate-400 flex items-start gap-2"
            >
              <span className="text-blue-400 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Outcome */}
        <div className="mb-5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-xs font-semibold text-emerald-400 mb-1">Outcome</p>
          <p className="text-sm text-emerald-300/80">{outcome}</p>
        </div>

        {/* GitHub link */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 hover:gap-3"
        >
          <FaGithub />
          View on GitHub
          <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Health ChatBot",
      tech: "Python • Flask • Streamlit • Machine Learning",
      description:
        "An intelligent ML-powered healthcare assistant that predicts possible diseases based on user symptoms using structured medical datasets and optimized classifiers.",
      features: [
        "Symptom vectorization + multi-label disease prediction",
        "Model comparison (SVM, Naive Bayes, Decision Tree)",
        "Streamlit UI with confidence score visualization",
        "Fast inference through optimized Flask API",
      ],
      outcome:
        "Achieved 92% accuracy on validation data with fast and interpretable predictions.",
      github: "https://github.com/Mahadev1729/AI-Health-Chat-Bot",
    },
    {
      title: "Movie-GPT",
      tech: "React • Tailwind CSS • Firebase • TMDB API",
      description:
        "A sleek movie exploration platform with personalized recommendations, real-time content from TMDB API, and Firebase-powered authentication.",
      features: [
        "Real-time movie search, genres & trending categories",
        "Firebase Authentication (Google & Email Login)",
        "Firestore database for saved favorites and watchlist",
        "Responsive design with animated movie cards",
        "AI-enhanced search suggestions",
      ],
      outcome:
        "Improved user discoverability and engagement through smart search + personalized movie library.",
      github: "https://github.com/Mahadev1729/netflixgpt",
    },
    {
      title: "Fire Weather Index Prediction",
      tech: "Python • Flask • Ridge Regression • Data Analysis",
      description:
        "A regression-based ML project forecasting wildfire risk levels using meteorological variables with extensive EDA and feature engineering.",
      features: [
        "Exploratory data analysis with heatmaps and correlations",
        "Ridge Regression with hyperparameter tuning",
        "Normalization + pipeline-based ML workflow",
        "Flask interface for real-time predictions",
        "Data visualization for insights and interpretation",
      ],
      outcome:
        "Improved prediction RMSE by 18% and delivered a reliable early wildfire-risk assessment system.",
      github: "https://github.com/Mahadev1729/End_to_End_MLproject",
    },
    {
      title: "ExpenseTracker",
      tech: "React • Node.js • Express • MongoDB • Chart.js",
      description:
        "A comprehensive expense management tool with budgeting, categorization, recurring transactions, and PDF report generation capabilities.",
      features: [
        "JWT-based authentication with protected API routes",
        "Dashboard charts for spending visualization",
        "Expense CRUD with categories, budgets, and recurring items",
        "PDF export of reports for offline sharing",
        "Real-time expense tracking",
      ],
      outcome:
        "Full-stack app delivering seamless expense management with secure authentication and comprehensive reporting.",
      github: "https://github.com/Mahadev1729/ExpenseTracker",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl">
          A collection of innovative projects showcasing full-stack development,
          machine learning, and creative problem-solving.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              tech={project.tech}
              description={project.description}
              features={project.features}
              outcome={project.outcome}
              github={project.github}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

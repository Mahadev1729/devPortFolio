import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
        <motion.div
          whileHover={{ y: -10, scale: 1.04, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Health ChatBot</h3>

          <p className="text-sm text-indigo-400 mb-3">
            Python • Flask • Streamlit • Machine Learning
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            AI Health ChatBot is an intelligent, ML-powered healthcare assistant
            designed to predict possible diseases based on user symptoms. The
            system uses structured medical datasets, multi-symptom vectorization
            and optimized classifiers to generate accurate predictions. The
            user-friendly conversation interface ensures that even non-technical
            users can interact effortlessly.
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
            href="https://github.com/Mahadev1729/AI-Health-Chat-Bot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
          >
            <FaGithub /> View on GitHub
          </a>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.04, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Movie-GPT</h3>

          <p className="text-sm text-indigo-400 mb-3">
            React • Tailwind CSS • Firebase • TMDB API • Cohere API
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            Movie-GPT is a sleek, modern movie exploration platform built to
            provide users with personalized recommendations and fast access to
            movie data. The system leverages TMDB API for real-time content and
            Firebase for user authentication and cloud-synced favorites. It
            features advanced search, dynamic categories, trailers, cast
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
            Outcome: Improved user discoverability and engagement through smart
            search + personalized movie library.
          </p>

          <a
            href="https://github.com/Mahadev1729/netflixgpt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
          >
            <FaGithub /> View on GitHub
          </a>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.04, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Fire Weather Index Prediction
          </h3>

          <p className="text-sm text-indigo-400 mb-3">
            Python • Flask • Ridge Regression • Data Analysis
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            Fire Weather Index (FWI) Prediction is a regression-based ML project
            aimed at forecasting the wildfire risk level using meteorological
            variables. The project involved extensive exploratory data analysis,
            correlation mapping, and feature preprocessing. Ridge Regression was
            selected as the final model due to its stability on noisy weather
            data.
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
            href="https://github.com/Mahadev1729/End_to_End_MLproject"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
          >
            <FaGithub /> View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}


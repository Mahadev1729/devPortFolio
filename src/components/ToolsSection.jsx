import { motion } from "framer-motion";
import { SiVercel, SiRender, SiPythonanywhere, SiStreamlit } from "react-icons/si";
import { fadeUp, staggerContainer } from "./animations";

export default function ToolsSection() {
  return (
    <motion.section
      id="tools"
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
        Tools & Deployment
      </motion.h2>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiVercel className="text-3xl text-white" />
            <h3 className="text-lg sm:text-xl font-semibold">Vercel</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Deploy fast, scalable frontend apps with automatic CI/CD and global CDN caching.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiRender className="text-3xl text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-semibold">Render</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Hosting for APIs, full-stack apps & databases with simple deployments and real-time logs.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiPythonanywhere className="text-3xl text-blue-300" />
            <h3 className="text-lg sm:text-xl font-semibold">PythonAnywhere</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Cloud platform used for hosting Python & Flask apps, automation scripts, & ML dashboards.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiStreamlit className="text-3xl text-red-400" />
            <h3 className="text-lg sm:text-xl font-semibold">Streamlit Cloud</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            One-click deploy ML apps with secure secrets, instant updates & built-in analytics.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}


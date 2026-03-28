import { motion } from "framer-motion";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { fadeUp, staggerContainer } from "./animations";

export default function ProfilesSection() {
  return (
    <motion.section
      id="profiles"
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
        Problem Solving Profiles
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiLeetcode className="text-3xl text-yellow-400" />
            <h3 className="text-lg sm:text-xl font-semibold">LeetCode</h3>
          </div>

          <p className="text-sm text-zinc-400 mb-4">
            Solved data structures, algorithms, SQL & system design problems to
            improve problem-solving skills and coding efficiency.
          </p>

          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4">
            <li>Daily streak practice</li>
            <li>
              DSA mastery including Trees, DP, Graphs, Heaps, Backtracking
            </li>
            <li>Active contest participation</li>
          </ul>

          <a
            href="https://leetcode.com/u/dev723PM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
          >
            <SiLeetcode /> View Profile
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.04, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring" }}
          className="rounded-2xl bg-zinc-900/70 border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:shadow-indigo-500/30 backdrop-blur-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SiHackerrank className="text-3xl text-green-400" />
            <h3 className="text-lg sm:text-xl font-semibold">HackerRank</h3>
          </div>

          <p className="text-sm text-zinc-400 mb-4">
            Practiced competitive programming challenges across Python, SQL, and
            problem-solving domains.
          </p>

          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4">
            <li>Gold badges in Problem Solving</li>
            <li>Python & SQL proficiency verified</li>
            <li>Focused on time-efficiency and logic optimization</li>
          </ul>

          <a
            href="https://www.hackerrank.com/blue_vine"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
          >
            <SiHackerrank /> View Profile
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}


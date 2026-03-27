import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ToolsSection from "./ToolsSection";
import EducationExperienceSection from "./EducationExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ProfilesSection from "./ProfilesSection";
import ContactSection from "./ContactSection";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-['Inter'] overflow-hidden">
      {/* FLOATING BACKGROUND BLOBS */}
      <motion.div
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-indigo-500/25 blur-[140px] rounded-full"
        animate={{ x: [0, 100, 0], y: [0, 120, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/25 blur-[140px] rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -120, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] bg-fuchsia-500/15 blur-[130px] rounded-full"
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.12),transparent_35%)]" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50
        backdrop-blur-2xl bg-zinc-900/55 border border-white/15 rounded-2xl shadow-[0_12px_40px_-18px_rgba(99,102,241,0.7)]"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        <div className="relative px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <span className="font-extrabold tracking-wide text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-cyan-300">
            Mahadev
          </span>

          <div className="hidden md:flex gap-6 text-sm">
            {["projects", "experience", "contact"].map((s) => (
              <motion.a
                key={s}
                href={`#${s}`}
                whileHover={{ scale: 1.08, color: "#c4b5fd", y: -2 }}
                className="transition cursor-pointer text-zinc-300"
              >
                {s.toUpperCase()}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="relative flex md:hidden items-center gap-3 px-4 pb-3 text-[11px] tracking-wide uppercase overflow-x-auto scrollbar-none">
          {["projects", "experience", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="whitespace-nowrap px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-zinc-300"
            >
              {s}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <HeroSection />
      <SkillsSection />
      <ToolsSection />
      <EducationExperienceSection />
      <ProjectsSection />
      <ProfilesSection />
      <ContactSection />

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <p className="text-xs text-zinc-500">© 2025 Mahadev Chidanand Athani</p>
      </footer>
    </div>
  );
}

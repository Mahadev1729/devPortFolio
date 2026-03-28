import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ToolsSection from "./ToolsSection";
import EducationExperienceSection from "./EducationExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ProfilesSection from "./ProfilesSection";
import ContactSection from "./ContactSection";
import Cursor from "./Cursor";
import LoadingScreen from "./LoadingScreen";
import { Suspense, lazy } from "react";

const AnimatedAurora = lazy(() => import("./AnimatedAurora"));
const FloatingTech = lazy(() => import("./FloatingTech"));

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    function onMove(e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 .. 1
      const dy = (e.clientY - cy) / cy;

      blobRefs.current.forEach((el) => {
        if (!el) return;
        const depth = Number(el.dataset.depth) || 0.08;
        const tx = dx * 40 * depth;
        const ty = dy * 40 * depth;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-['Inter'] overflow-hidden">
      <LoadingScreen />
      <Cursor />
      {/* FLOATING BACKGROUND BLOBS */}
      <motion.div
        ref={(el) => (blobRefs.current[0] = el)}
        data-depth="0.18"
        className="float-blob absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-indigo-500/25 blur-[140px] rounded-full"
        animate={{ x: [0, 100, 0], y: [0, 120, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        ref={(el) => (blobRefs.current[1] = el)}
        data-depth="0.12"
        className="float-blob absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/25 blur-[140px] rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -120, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
      />
      <motion.div
        ref={(el) => (blobRefs.current[2] = el)}
        data-depth="0.09"
        className="float-blob absolute bottom-0 left-1/3 w-[24rem] h-[24rem] bg-fuchsia-500/15 blur-[130px] rounded-full"
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity }}
      />
      <Suspense fallback={null}>
        <AnimatedAurora />
        <FloatingTech />
      </Suspense>
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
              <NavLink key={s} href={`#${s}`} label={s.toUpperCase()} />
            ))}
          </div>
        </div>
        <div className="relative flex md:hidden items-center gap-3 px-4 pb-3 text-[11px] tracking-wide uppercase overflow-x-auto scrollbar-none">
          {["projects", "experience", "contact"].map((s) => (
            <NavLink key={s} href={`#${s}`} label={s} mobile />
          ))}
        </div>
      </motion.nav>

      {/* NavLink component with animated underline */}
      <style>{``}</style>

      {/** NavLink helper **/}
      <React.Fragment>
        {/** Define NavLink inside the file so it can access motion and state easily */}
      </React.Fragment>

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

function NavLink({ href, label, mobile = false }) {
  const [localHover, setLocalHover] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}
      className={`relative transition-colors ${mobile ? "whitespace-nowrap px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-zinc-300" : "cursor-pointer text-zinc-300"}`}
    >
      <motion.span
        initial={false}
        animate={
          localHover
            ? { color: "#c4b5fd", y: -2, scale: 1.06 }
            : { color: "#d1d5db", y: 0, scale: 1 }
        }
      >
        {label}
      </motion.span>

      {localHover && (
        <motion.span
          layoutId="navHighlight"
          className="nav-highlight"
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      )}
    </a>
  );
}

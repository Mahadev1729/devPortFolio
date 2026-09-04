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
// VSCodeMock removed
import { Suspense, lazy } from "react";
const ThreeCanvas = lazy(() => import("./three/ThreeCanvas"));
import UIOverlay from "./UIOverlay";

const AnimatedAurora = lazy(() => import("./AnimatedAurora"));
// Toggle to disable 3D canvas for debugging/ perf
const DISABLE_3D = true;

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    const last = { x: 0, y: 0 };
    const rafRef = { id: null };

    function applyTransforms() {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (last.x - cx) / cx; // -1 .. 1
      const dy = (last.y - cy) / cy;

      blobRefs.current.forEach((el) => {
        if (!el) return;
        const depth = Number(el.dataset.depth) || 0.08;
        const tx = Math.round(dx * 40 * depth);
        const ty = Math.round(dy * 40 * depth);
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      rafRef.id = null;
    }

    function onMove(e) {
      last.x = e.clientX;
      last.y = e.clientY;
      if (rafRef.id == null) rafRef.id = requestAnimationFrame(applyTransforms);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.id) cancelAnimationFrame(rafRef.id);
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-['Inter'] overflow-hidden">
      <LoadingScreen />
      <Cursor />
      {/* 3D background canvas (lazy loaded) */}
      {!DISABLE_3D && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 -z-10 pointer-events-auto">
            <ThreeCanvas onSelect={(id) => setSelected(id)} />
          </div>
        </Suspense>
      )}

      {/* Professional background blobs */}
      <motion.div
        ref={(el) => (blobRefs.current[0] = el)}
        data-depth="0.15"
        className="float-blob absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"
        animate={{ x: [0, 80, 0], y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        ref={(el) => (blobRefs.current[1] = el)}
        data-depth="0.10"
        className="float-blob absolute top-1/4 -right-32 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"
        animate={{ x: [0, -80, 0], y: [0, -100, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        ref={(el) => (blobRefs.current[2] = el)}
        data-depth="0.08"
        className="float-blob absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -60, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle aurora effect */}
      <Suspense fallback={null}>
        <AnimatedAurora />
      </Suspense>

      {/* Professional overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(59,130,246,0.08),transparent 40%),radial-gradient(circle_at_75%_80%,rgba(34,211,238,0.08),transparent 40%)]" />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 backdrop-blur-lg bg-slate-950/70 border border-slate-700/40 rounded-xl shadow-lg"
      >
        <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none" />
        <div className="relative px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <span className="font-bold tracking-wider text-lg sm:text-xl text-white">
            Mahadev
          </span>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["projects", "experience", "contact"].map((s) => (
              <NavLink key={s} href={`#${s}`} label={s.toUpperCase()} />
            ))}
          </div>
        </div>
        <div className="relative flex md:hidden items-center gap-3 px-4 pb-3 text-xs tracking-wide uppercase overflow-x-auto scrollbar-none">
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

      {/* Main sections */}
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <EducationExperienceSection />
      <ProfilesSection />
      <ContactSection />

      <UIOverlay
        active={!!selected}
        onClose={() => setSelected(null)}
        content={
          selected
            ? {
                title: selected.toUpperCase(),
                body:
                  selected === "about"
                    ? "Hi — I'm Mahadev. I'm a developer focused on AI and web apps."
                    : selected === "skills"
                      ? "Skills: React, Three.js, Python, ML, Tailwind"
                      : selected === "projects"
                        ? "Projects: Interactive 3D portfolio, ML demos, web apps"
                        : "Get in touch via the contact form.",
              }
            : null
        }
      />

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

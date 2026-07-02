import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroSection() {
  const lines = [
    "mahadev@portfolio:~$ whoami",
    "Mahadev Chidanand Athani",
    "mahadev@portfolio:~$ cat role.txt",
    "Full-Stack Developer | AI/ML Engineer | Problem Solver",
    "mahadev@portfolio:~$ skills --top",
    "React · Python · Machine Learning · Cloud Development",
  ];

  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const rotateXInput = useMotionValue(0);
  const rotateYInput = useMotionValue(0);
  const rotateX = useTransform(rotateXInput, [-50, 50], [12, -12]);
  const rotateY = useTransform(rotateYInput, [-50, 50], [-12, 12]);

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
      charIndex < lines[lineIndex].length ? 30 : 400
    );

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, currentLine]);

  const handleHeroMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    rotateYInput.set((x - centerX) / 8);
    rotateXInput.set((y - centerY) / 8);
  };

  const resetHeroTilt = () => {
    rotateXInput.set(0);
    rotateYInput.set(0);
  };

  return (
    <section className="pt-20 md:pt-32 pb-20 flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl w-full [perspective:1300px]"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={resetHeroTilt}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Subtle gradient background glow */}
          <div className="absolute -inset-4 blur-3xl rounded-3xl bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-500/10 opacity-60" />

          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-700/50 font-mono text-emerald-400 shadow-card backdrop-blur-xl overflow-hidden">
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background:
                  "linear-gradient(120deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1))",
                filter: "blur(12px)",
              }}
            />

            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-800/50 border-b border-slate-700/30 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-3 text-xs sm:text-sm text-slate-400 font-medium">
                mahadev@portfolio:~
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 sm:p-8 space-y-3 text-sm sm:text-base">
              {/* Profile image */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="relative"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 blur-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  <img
                    src="/myImage.jpg"
                    alt="Profile"
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-slate-700 shadow-lg object-cover"
                  />
                </motion.div>
              </div>

              {/* Terminal lines */}
              <div className="space-y-2">
                {displayed.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-slate-500">$</span>
                    <span className="ml-2 text-emerald-400">{line}</span>
                  </motion.div>
                ))}

                {/* Cursor */}
                {lineIndex < lines.length && (
                  <div>
                    <span className="text-slate-500">$</span>
                    <span className="ml-2">
                      {currentLine}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-emerald-400"
                      >
                        ▋
                      </motion.span>
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              {lineIndex >= lines.length && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <a
                    href="#projects"
                    className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors duration-200"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium text-sm transition-colors duration-200"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

          <div className="relative rounded-2xl bg-zinc-900/85 border border-white/15 font-['JetBrains_Mono'] text-green-400 shadow-[0_20px_55px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div
              className="absolute inset-0 rounded-2xl opacity-45 pointer-events-none"
              style={{
                transform: "translateZ(30px)",
                background:
                  "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 45%)",
              }}
            />
            <motion.div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background:
                  "linear-gradient(120deg, rgba(129,140,248,0.35), rgba(34,211,238,0.18), rgba(236,72,153,0.28))",
                filter: "blur(18px)",
              }}
            />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-800 rounded-t-xl">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-zinc-400">
                mahadev@portfolio:~
              </span>
            </div>

            <div
              className="p-4 sm:p-6 space-y-3 text-xs sm:text-sm"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="relative mx-auto w-fit">
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />
                <img
                  src="/myImage.jpg"
                  className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-green-400 shadow-lg shadow-green-500/20"
                />
              </div>

              <motion.p
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
              >
                ✨ Welcome to the world of Mahadev ✨
              </motion.p>
              <div className="flex flex-wrap justify-center gap-2 pb-1">
                {["AI/ML", "Frontend", "React", "Python"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/15 text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

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
      </motion.div>
    </section>
  );
}


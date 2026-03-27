import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroSection() {
  const lines = [
    "mahadev@linux:~$ whoami",
    "Mahadev Chidanand Athani",
    "mahadev@linux:~$ cat role.txt",
    "AI & ML Student | Frontend Developer",
    "mahadev@linux:~$ skills --top",
    "React · Tailwind · Python · Machine Learning · Flask",
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
      charIndex < lines[lineIndex].length ? 35 : 350
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
    <section className="pt-32 sm:pt-36 md:pt-40 flex justify-center px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl w-full [perspective:1300px]"
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
          <div className="absolute -inset-2 blur-2xl rounded-2xl bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-pink-500/20" />

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


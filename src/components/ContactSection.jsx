import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
        Contact
      </h2>

      <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500/50 via-purple-500/45 to-cyan-500/50 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.8)]">
        <div className="rounded-2xl bg-zinc-900/75 backdrop-blur-2xl p-5 sm:p-8 border border-white/15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6 text-base sm:text-lg text-zinc-300"
          >
            <motion.a
              href="mailto:mahadev.c.a@campusuvce.in"
              whileHover={{ scale: 1.04, x: 8, rotateX: 4, rotateY: -4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/45 border border-white/15 hover:border-indigo-400/40 transition-all hover:shadow-indigo-500/25"
            >
              <span className="text-2xl">📧</span>
              <span className="font-medium break-all">mahadev.c.a@campusuvce.in</span>
            </motion.a>

            <motion.a
              href="tel:+918073700212"
              whileHover={{ scale: 1.04, x: 8, rotateX: 4, rotateY: -4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/45 border border-white/15 hover:border-cyan-400/40 transition-all hover:shadow-cyan-500/25"
            >
              <span className="text-2xl">📞</span>
              <span className="font-medium">+91 8073700212</span>
            </motion.a>

            <div className="pt-6">
              <p className="text-zinc-500 text-sm mb-3">Find me online:</p>

              <div className="flex gap-6 text-3xl">
                <motion.a
                  href="https://github.com/Mahadev1729"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-indigo-400 transition"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mahadev-athani-6661b3288"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-indigo-400 transition"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


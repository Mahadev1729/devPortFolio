import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const contactLinks = [
    {
      label: "Email",
      value: "mahadev.c.a@campusuvce.in",
      href: "mailto:mahadev.c.a@campusuvce.in",
      icon: <FaEnvelope className="text-2xl" />,
      color: "blue",
    },
    {
      label: "Phone",
      value: "+91 8073700212",
      href: "tel:+918073700212",
      icon: <FaPhone className="text-2xl" />,
      color: "cyan",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Mahadev1729",
      icon: <FaGithub className="text-3xl" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahadev-athani-6661b3288",
      icon: <FaLinkedin className="text-3xl" />,
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-slate-400">
          Open to opportunities, collaborations, and conversations about tech,
          innovation, and creative solutions.
        </p>
      </motion.div>

      {/* Contact methods */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4 mb-12"
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            variants={itemVariants}
            whileHover={{ x: 8 }}
            className={`group relative p-5 sm:p-6 rounded-xl border border-slate-700/50 bg-linear-to-br from-slate-800/50 to-slate-900/50 hover:border-${link.color}-500/50 transition-all duration-300 overflow-hidden`}
          >
            {/* Hover background */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-${link.color}-600/0 to-${link.color}-600/0 group-hover:from-${link.color}-600/5 group-hover:to-${link.color}-600/5 transition-all duration-300 pointer-events-none`}
            />

            <div className="relative flex items-center gap-4">
              <span
                className={`text-${link.color}-400 group-hover:text-${link.color}-300 transition-colors`}
              >
                {link.icon}
              </span>

              <div className="flex-1">
                <p className="text-sm text-slate-500 font-medium">
                  {link.label}
                </p>
                <p className="text-white font-medium break-all">{link.value}</p>
              </div>

              <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                →
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-linear-to-r from-slate-700/0 via-slate-700 to-slate-700/0" />
        <p className="text-slate-500 text-sm font-medium">Find me online</p>
        <div className="flex-1 h-px bg-linear-to-r from-slate-700/0 via-slate-700 to-slate-700/0" />
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-4 sm:gap-6 justify-center"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            title={link.label}
          >
            <span className="group-hover:animate-bounce">{link.icon}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-6 rounded-2xl bg-linear-to-r from-blue-600/10 via-purple-600/10 to-pink-500/10 border border-blue-500/20 text-center"
      >
        <p className="text-slate-300 mb-4">
          Whether you have a project in mind or just want to chat, I'm always
          excited to connect with fellow developers and innovators.
        </p>
        <a
          href="mailto:mahadev.c.a@campusuvce.in"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Start a conversation
        </a>
      </motion.div>
    </section>
  );
}

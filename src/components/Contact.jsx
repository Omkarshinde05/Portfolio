import { motion } from "framer-motion";

const contacts = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "ommkarshinde05@gmail.com",
    href: "mailto:ommkarshinde05@gmail.com",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10 border-rose-500/20",
    iconColor: "text-rose-400",
    glow: "hover:shadow-rose-500/20 hover:border-rose-500/40",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/OmkarShinde",
    href: "https://www.linkedin.com/in/omkar-shinde-0666b537b/",
    gradient: "from-blue-500 to-sky-500",
    bg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    glow: "hover:shadow-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/OmkarShinde05",
    href: "https://github.com/Omkarshinde05",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
    glow: "hover:shadow-violet-500/20 hover:border-violet-500/40",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-60 rounded-full
        bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-rose-500/10 border border-rose-500/30 text-rose-400">
            Get In Touch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-white mb-3"
        >
          Contact <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-20 h-1 mx-auto mb-6 rounded-full
            bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-400 mb-14 max-w-lg mx-auto"
        >
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className={`group glass-card rounded-2xl p-6 flex flex-col items-center text-center
                border transition-all duration-400 no-underline
                hover:shadow-2xl ${c.glow} cursor-pointer`}
            >
              {/* Icon badge */}
              <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.iconColor}
                flex items-center justify-center mb-4
                group-hover:scale-110 transition-transform duration-300`}>
                {c.icon}
              </div>

              {/* Gradient top bar on hover */}
              <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${c.gradient} mb-3
                scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`} />

              <p className="text-sm font-semibold text-slate-400 mb-1 tracking-wide uppercase">
                {c.label}
              </p>

              <p className={`text-sm font-medium ${c.iconColor}
                group-hover:text-white transition-colors duration-200`}>
                {c.value}
              </p>

              {/* Arrow */}
              <div className={`mt-4 flex items-center gap-1 text-xs ${c.iconColor}
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span>Open</span>
                <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer blurb */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-600 text-sm mt-16"
        >
          Built with React + Tailwind CSS · © {new Date().getFullYear()} Omkar Shinde
        </motion.p>
      </div>
    </section>
  );
}

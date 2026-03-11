import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React",
  "Tailwind CSS", "Bootstrap", "SQL", "Git", "GitHub", "Vercel",
];

const projects = [
  {
    title: "Airbnb Clone",
    desc: "Fully responsive Airbnb-like web app using React and Tailwind CSS with reusable components and dynamic listings.",
    emoji: "🏡",
  },
  {
    title: "Food Recipe App",
    desc: "Recipe search app using a third-party API with Context API, favourites, and detailed views.",
    emoji: "🍜",
  },
  {
    title: "To-Do List App",
    desc: "Task management app with CRUD operations, filtering, and real-time UI updates.",
    emoji: "✅",
  },
];

export default function Resume() {
  const [showDetails, setShowDetails] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/OmkarShinde.pdf";
    link.download = "OmkarShinde.pdf";
    link.click();
  };

  return (
    <section id="resume" className="relative py-24 px-6 bg-slate-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full
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
            bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            Resume
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
          My <span className="gradient-text">Experience</span>
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
          className="text-center text-slate-400 mb-10"
        >
          View or download my resume to learn more about my skills and experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              font-semibold border transition-all duration-300
              ${showDetails
                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white"
              }`}
          >
            <svg className={`w-4 h-4 transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          <a
            href="/OmkarShinde.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              bg-slate-800 text-white font-semibold text-center
              hover:bg-slate-700 border border-slate-700 hover:border-slate-500
              transition-all duration-300 no-underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </a>

          <button
            onClick={handleDownload}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold
              hover:from-indigo-500 hover:to-violet-500
              shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50
              hover:-translate-y-0.5
              transition-all duration-300"
          >
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
        </motion.div>

        {/* Resume Details */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-8 space-y-10 border border-slate-700/40">

                {/* Summary */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
                    <h3 className="text-lg font-bold text-white">Professional Summary</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-3">
                    Frontend Developer with hands-on experience in building responsive, user-friendly web
                    applications using React, JavaScript, HTML5, CSS3, Tailwind CSS, and SQL. Strong foundation
                    in component-based architecture, state management, and modern UI development. Eager to
                    contribute to a growth-oriented frontend or React development team.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-teal-400" />
                    <h3 className="text-lg font-bold text-white">Technical Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pl-3">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/30
                          rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-400/20
                          cursor-default transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
                    <h3 className="text-lg font-bold text-white">Key Projects</h3>
                  </div>
                  <ul className="space-y-4 pl-3">
                    {projects.map((p) => (
                      <li key={p.title} className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">{p.emoji}</span>
                        <div>
                          <span className="font-semibold text-white">{p.title}: </span>
                          <span className="text-slate-400">{p.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-orange-500 to-rose-500" />
                    <h3 className="text-lg font-bold text-white">Education</h3>
                  </div>
                  <div className="pl-3 flex items-start gap-3">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Bachelor of Commerce</p>
                      <p className="text-slate-400 text-sm">Pune University · 2022 – 2025</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

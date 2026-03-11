import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Recipe App",
    desc: "A React application to search and view food recipes using an external API with a clean and responsive UI.",
    link: "https://github.com/Omkarshinde05/Recipe-app",
    tags: ["React", "API", "CSS3"],
    emoji: "🍜",
    gradient: "from-orange-500 to-rose-500",
    glow: "hover:shadow-orange-500/20",
  },
  {
    title: "E-Commerce Store",
    desc: "A full-stack e-commerce platform built with Django & Django REST Framework on the backend and React on the frontend, featuring product listings, cart, and order management.",
    link: "https://github.com/Omkarshinde05",
    tags: ["React", "Django", "DRF", "REST API"],
    emoji: "🛒",
    gradient: "from-emerald-500 to-teal-500",
    glow: "hover:shadow-emerald-500/20",
  },
  {
    title: "Music App",
    desc: "A music streaming application powered by Django ORM for data management, featuring song browsing, playlist creation, and a clean React-based player interface.",
    link: "https://github.com/Omkarshinde05",
    tags: ["React", "Django", "Django ORM", "REST API"],
    emoji: "🎵",
    gradient: "from-indigo-500 to-violet-500",
    glow: "hover:shadow-indigo-500/20",
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

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-slate-950 overflow-hidden scroll-mt-20">

      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full
        bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-violet-500/10 border border-violet-500/30 text-violet-400">
            My Work
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
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-20 h-1 mx-auto mb-16 rounded-full
            bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 origin-center"
        />

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card rounded-2xl overflow-hidden
                hover:border-indigo-500/30
                hover:shadow-2xl ${p.glow}
                transition-all duration-400 group cursor-pointer`}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6">
                {/* Emoji + title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300
                    transition-colors duration-200">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-800 text-slate-400
                        rounded-md text-xs font-medium border border-slate-700/60
                        group-hover:border-indigo-500/30 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold no-underline
                    text-indigo-400 hover:text-white
                    group/link transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    icon: "⚛️",
    gradient: "from-indigo-500 to-violet-500",
    glow: "hover:shadow-indigo-500/20 hover:border-indigo-500/40",
    pillBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:shadow-indigo-400/30",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "🐍",
    gradient: "from-cyan-500 to-teal-400",
    glow: "hover:shadow-cyan-500/20 hover:border-cyan-500/40",
    pillBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-cyan-400/30",
    skills: ["Python", "Django", "SQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    gradient: "from-violet-500 to-pink-500",
    glow: "hover:shadow-violet-500/20 hover:border-violet-500/40",
    pillBg: "bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:shadow-violet-400/30",
    skills: ["Git", "GitHub", "Vercel"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full
        bg-cyan-600/10 blur-[100px] pointer-events-none -translate-y-1/2" />

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
            bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            What I Know
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
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-20 h-1 mx-auto mb-16 rounded-full
            bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 origin-center"
        />

        {/* Category Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl overflow-hidden
                border border-slate-700/40
                hover:shadow-2xl ${cat.glow}
                transition-all duration-400`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cat.gradient}`} />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className={`text-lg font-bold bg-gradient-to-r ${cat.gradient}
                    bg-clip-text text-transparent`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3.5 py-1.5 rounded-full text-sm font-medium border
                        cursor-default transition-all duration-200 hover:shadow-lg
                        ${cat.pillBg}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const highlights = [
  { label: "Frontend Developer", color: "from-indigo-500 to-violet-500", bg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300" },
  { label: "React.js, JavaScript", color: "from-sky-500 to-cyan-400", bg: "bg-sky-500/10 border-sky-500/30 text-sky-300" },
  { label: "Python, Django & SQL", color: "from-cyan-500 to-teal-400", bg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full
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
            Who I Am
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
          About <span className="gradient-text">Me</span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-20 h-1 mx-auto mb-12 rounded-full
            bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 origin-center"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="glass-card rounded-3xl p-8 md:p-12
            hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10
            transition-all duration-500"
        >
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8 text-3xl">
            {["⚛️", "🎨", "🐍", "🗄️"].map((icon, i) => (
              <span
                key={i}
                className="animate-float cursor-default select-none"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {icon}
              </span>
            ))}
          </div>

          {/* Text */}
          <p className="text-slate-300 text-lg leading-relaxed text-center mb-8">
            I am a passionate{" "}
            <span className="font-bold text-white">Frontend Developer</span>
            {" "}focused on creating clean, responsive, and user-friendly web applications using{" "}
            <span className="font-bold text-white">React.js, JavaScript</span>
            {" "}and modern frontend technologies. Alongside frontend development, I am actively learning backend technologies such as{" "}
            <span className="font-bold text-cyan-400">Python, Django, and SQL</span>
            {" "}to build scalable full-stack applications. I enjoy solving real-world problems and continuously improving my skills through hands-on projects.
          </p>

          {/* Highlight chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {highlights.map(({ label, bg }) => (
              <span
                key={label}
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${bg}
                  hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

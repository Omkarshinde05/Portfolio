import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function PortfolioHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 overflow-hidden bg-slate-950">

      {/* ── Background gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
          bg-indigo-600/20 blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
          bg-cyan-500/15 blur-[100px] animate-float"
          style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl text-center z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Omkar Shinde</span>
          <span className="ml-3 inline-block animate-float">👋</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Frontend Developer specializing in{" "}
          <span className="font-semibold text-white">React.js, JavaScript, HTML5, CSS3</span>
          {" "}— with growing experience in{" "}
          <span className="font-semibold text-cyan-400">Python, Django, and SQL</span>.
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {["React", "JavaScript", "Tailwind CSS", "Python", "Django", "SQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full
                bg-slate-800 text-slate-300 border border-slate-700
                hover:border-indigo-500 hover:text-indigo-300
                transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl font-semibold no-underline
              bg-gradient-to-r from-indigo-600 to-violet-600 text-white
              hover:from-indigo-500 hover:to-violet-500
              shadow-lg shadow-indigo-600/30
              hover:shadow-indigo-500/50 hover:shadow-xl
              hover:-translate-y-0.5
              transition-all duration-300
              overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-xl font-semibold no-underline
              border border-indigo-500/50 text-indigo-300
              hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white
              hover:-translate-y-0.5
              transition-all duration-300
              backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce-arrow"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

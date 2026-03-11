import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["about", "projects", "skills", "resume", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Spy + shadow on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) setActive(sec);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-6xl rounded-2xl
        transition-all duration-300
        ${scrolled
          ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-black/40 border border-slate-700/50"
          : "bg-slate-900/70 backdrop-blur-xl border border-slate-700/30"
        }`}
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-14">

          {/* LOGO */}
          <a href="#" className="text-lg font-bold no-underline group">
            <span className="text-white group-hover:text-slate-300 transition-colors duration-200">My</span>
            <span className="gradient-text">Portfolio</span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-800/60 p-1 rounded-full border border-slate-700/40">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`capitalize px-4 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-300 no-underline block
                    ${active === sec
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                    }`}
                >
                  {sec}
                </a>
              </li>
            ))}
          </ul>

          {/* RESUME BUTTON */}
          <a
            href="OmkarShinde.pdf"
            download
            className="hidden md:flex items-center gap-1.5
              border border-indigo-500/50 text-indigo-300
              px-4 py-1.5 rounded-full text-sm font-semibold
              hover:bg-indigo-500/15 hover:border-indigo-400 hover:text-white
              hover:shadow-md hover:shadow-indigo-500/20
              transition-all duration-300 no-underline"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg
              hover:bg-slate-700/60 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-slate-300 rounded-full origin-center transition-all duration-300
              ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-300 rounded-full transition-all duration-300
              ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-300 rounded-full origin-center transition-all duration-300
              ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-1 pb-4 pt-2">
                {sections.map((sec) => (
                  <a
                    key={sec}
                    href={`#${sec}`}
                    onClick={() => setOpen(false)}
                    className={`capitalize px-4 py-2.5 rounded-xl text-sm font-medium
                      no-underline transition-all duration-200
                      ${active === sec
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-700/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                  >
                    {sec}
                  </a>
                ))}

                <a
                  href="OmkarShinde.pdf"
                  download
                  className="mt-1 text-center border border-indigo-500/50 text-indigo-300
                    py-2.5 rounded-xl font-semibold
                    hover:bg-indigo-500/15 hover:text-white
                    transition-all duration-200 no-underline"
                >
                  Download Resume
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

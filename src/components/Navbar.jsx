import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "projects", "skills", "resume", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  /* Scroll Spy */
  useEffect(() => {
    const onScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(sec);
        }
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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
      bg-white/70 backdrop-blur-xl shadow-xl
      rounded-2xl w-[92%] max-w-6xl"
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-14">

          {/* LOGO */}
          <a href="#" className="text-lg font-bold text-gray-900 no-underline">
            My<span className="text-blue-600">Portfolio</span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-full">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`capitalize px-4 py-1.5 rounded-full text-sm font-medium 
                  transition-all duration-300 no-underline ${
                    active === sec
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
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
            className="hidden md:block border border-blue-600 text-blue-600 
            px-4 py-1.5 rounded-full text-sm font-semibold
            hover:bg-blue-600 hover:text-white transition no-underline"
          >
            Resume
          </a>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <ul className="flex flex-col gap-3 mt-3">
              {sections.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setOpen(false)}
                  className={`capitalize px-4 py-2 rounded-lg text-sm font-medium
                  no-underline transition ${
                    active === sec
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {sec}
                </a>
              ))}

              <a
                href="OmkarShinde.pdf"
                download
                className="text-center border border-blue-600 text-blue-600
                py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white
                transition no-underline"
              >
                Download Resume
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

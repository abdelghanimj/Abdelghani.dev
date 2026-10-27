
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiCode } from "react-icons/fi";

const links = [
  { name: "Accueil", id: "home" },
  { name: "À propos", id: "about" },
  { name: "Compétences", id: "skills" },
  { name: "Projets", id: "projects" },
  { name: "Formation", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveLink(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    setActiveLink(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/75 text-white shadow-lg shadow-black/10 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => handleClick("home")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-2.5"
          aria-label="Retour à l'accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition-colors group-hover:bg-cyan-300/20">
            <FiCode size={21} />
          </span>

          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Abdelghani
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              .dev
            </span>
          </span>
        </motion.button>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeLink === link.id;

            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleClick(link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-300 lg:px-4 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-link"
                      className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  ) : (
                    <span className="absolute inset-x-3 -bottom-1 h-0.5 scale-x-0 rounded-full bg-cyan-300 transition-transform duration-300 hover:scale-x-100" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.08] md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
            >
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.045,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleClick(link.id)}
                    aria-current={
                      activeLink === link.id ? "location" : undefined
                    }
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeLink === link.id
                        ? "bg-cyan-300/10 text-cyan-300"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        activeLink === link.id
                          ? "bg-cyan-300"
                          : "bg-slate-600"
                      }`}
                    />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

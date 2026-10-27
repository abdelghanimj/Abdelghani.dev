
import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiCode,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/abdelghanimj",
      icon: FiGithub,
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdelghani-moujniba/",
      icon: FiLinkedin,
      external: true,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: FiMail,
      external: false,
    },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-slate-950 text-slate-400">
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 md:flex-row">
          {/* Brand */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="group text-center md:text-left"
            aria-label="Retour à l'accueil"
          >
            <h3 className="flex items-center justify-center gap-2 text-xl font-bold text-white md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <FiCode />
              </span>
              Abdelghani
              <span className="text-cyan-400">.dev</span>
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Développeur Full Stack Junior
            </p>
          </motion.a>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {currentYear} Abdelghani Moujniba. Tous droits réservés.
          </p>

          <p className="flex items-center gap-2 text-xs text-slate-500">
            Réalisé avec
            <span className="font-medium text-cyan-400">React</span>
            <span className="text-slate-700">•</span>
            <span className="font-medium text-cyan-400">Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            aria-label="Retour en haut de la page"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

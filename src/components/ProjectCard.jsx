
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

export default function ProjectCard({
  icon,
  title,
  desc,
  tech,
  onClick,
}) {
  const technologies = Array.isArray(tech)
    ? tech
    : typeof tech === "string"
      ? tech.split(/[,•|]/).map((item) => item.trim()).filter(Boolean)
      : [];

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.article
      whileHover={{ y: -7 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:p-7"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top line */}
      <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

      {/* Header */}
      <div className="relative mb-6 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 text-3xl text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
          {icon}
        </div>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
          <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* Project title */}
      <h3 className="relative text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-400">
        {desc}
      </p>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="relative mt-6 border-t border-white/10 pt-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            <FiLayers className="h-4 w-4 text-cyan-400" />
            Technologies
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-cyan-400/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom action */}
      {onClick && (
        <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400">
          Découvrir le projet
          <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </motion.article>
  );
}

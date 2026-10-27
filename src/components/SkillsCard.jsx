
import React from "react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

export default function SkillCard({ icon, title, level }) {
  const isImage = typeof icon === "string";

  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 hover:bg-slate-900"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-10 h-24 w-24 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent */}
      <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

      {/* Icon container */}
      <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/5">
        {icon ? (
          isImage ? (
            <img
              src={icon}
              alt={`${title} logo`}
              loading="lazy"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <span className="text-3xl text-cyan-300 transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
          )
        ) : (
          <FiCode className="h-8 w-8 text-cyan-300" />
        )}
      </div>

      {/* Skill title */}
      <h3 className="relative text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-cyan-300 sm:text-base">
        {title}
      </h3>

      {/* Optional level */}
      {level && (
        <span className="relative mt-3 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
          {level}
        </span>
      )}

      {/* Bottom decoration */}
      <div className="mt-4 h-1 w-8 rounded-full bg-slate-700 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-400" />
    </motion.div>
  );
}

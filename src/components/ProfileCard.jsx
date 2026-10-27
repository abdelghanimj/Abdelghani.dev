
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

const technologies = [
  "React",
  "Laravel",
  "PHP",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ProfileCard() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-5 py-20 text-white shadow-2xl sm:px-10 sm:py-24 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-blue-950/40" />
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/40"
          />

          <div className="absolute -inset-1 rounded-full bg-cyan-400/15 blur-xl" />

          <img
            src="https://github.com/abdelghanimj.png"
            alt="Photo de profil d'Abdelghani Moujniba"
            className="relative h-36 w-36 rounded-full border-4 border-slate-800 object-cover shadow-xl sm:h-44 sm:w-44"
          />

          <span
            className="absolute bottom-3 right-2 h-4 w-4 rounded-full border-[3px] border-slate-950 bg-emerald-400"
            title="Profil"
          />
        </motion.div>

        {/* Intro label */}
        <motion.div
          variants={itemVariants}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
        >
          <FiCode />
          <span>Développement web & applications</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Bonjour, je suis
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Abdelghani Moujniba
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-lg font-medium text-slate-300 sm:text-xl"
        >
          Développeur <span className="text-cyan-400">Full Stack Junior</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
        >
          Diplômé en développement digital, je m'intéresse à la création
          d'applications web modernes avec React et Laravel. Je continue à
          développer mes compétences à travers des projets pratiques et je
          recherche une opportunité pour apprendre et contribuer à des projets
          concrets.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
          >
            Voir mes projets
            <FiArrowUpRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.08]"
          >
            Me contacter
            <FiArrowDownRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="https://github.com/abdelghanimj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Consulter mon profil GitHub"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <FiGithub className="h-5 w-5" />
            GitHub
          </motion.a>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mt-12 w-full">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <FiLayers className="h-4 w-4" />
            Technologies utilisées
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.08, duration: 0.3 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          variants={itemVariants}
          href="#about"
          className="mt-12 flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-300"
        >
          Découvrir mon profil
          <FiArrowDownRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}

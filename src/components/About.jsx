
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiTarget, FiTrendingUp } from "react-icons/fi";

const skills = ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Qui suis-je ?
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            À propos de{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              moi
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 88 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[0.85fr_1.4fr]"
        >
          {/* Left panel */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.08] p-8 sm:p-10 lg:border-b-0 lg:border-r"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-cyan-300/10" />
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-violet-300/10" />

            <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
              <FiCode size={30} />
            </div>

            <h3 className="relative text-2xl font-bold">
              Développeur Web
              <span className="mt-1 block text-cyan-300">
                Full Stack Junior
              </span>
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-slate-400">
              Je conçois des applications web modernes en combinant
              développement frontend et backend.
            </p>

            <div className="relative mt-8 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              <span className="text-sm text-slate-300">
                Ouvert aux opportunités
              </span>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            variants={containerVariants}
            className="p-8 sm:p-10 lg:p-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-base leading-8 text-slate-300 sm:text-lg"
            >
              Je suis un{" "}
              <span className="font-semibold text-white">
                développeur Web Full Stack Junior
              </span>
              , intéressé par la création d’applications utiles, modernes
              et faciles à utiliser. Je travaille principalement avec{" "}
              <span className="font-medium text-cyan-300">React</span> et{" "}
              <span className="font-medium text-cyan-300">Laravel</span>,
              du développement d’interfaces jusqu’à la gestion des données
              et des fonctionnalités côté serveur.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base leading-8 text-slate-400"
            >
              À travers mes projets et ma formation, je cherche à renforcer
              mes compétences, écrire un code plus propre et découvrir les
              bonnes pratiques du développement. Je souhaite rejoindre une
              équipe où je pourrai apprendre, contribuer et progresser
              professionnellement.
            </motion.p>

            {/* Values */}
            <motion.div
              variants={containerVariants}
              className="mt-9 grid gap-4 sm:grid-cols-2"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/30"
              >
                <FiTarget className="mb-3 text-cyan-300" size={23} />
                <h4 className="font-semibold text-white">Mon objectif</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Participer à des projets concrets et évoluer en équipe.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-violet-400/30"
              >
                <FiTrendingUp className="mb-3 text-violet-300" size={23} />
                <h4 className="font-semibold text-white">Ma démarche</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Apprendre continuellement et améliorer mes réalisations.
                </p>
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mt-9">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Technologies principales
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.35 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="cursor-default rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

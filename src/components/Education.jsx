
import React from "react";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

const educations = [
  {
    title: "Licence",
    subtitle: "Développement des Médias Numériques",
    school: "École Supérieure de Technologie — Oujda",
    year: "2024 – 2025",
    icon: FiAward,
    number: "01",
    description:
      "Formation axée sur le développement numérique et la conception de solutions digitales.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Technicien Spécialisé",
    subtitle: "Développement Digital — Web Full Stack",
    school: "ISTA Taourirt",
    year: "2022 – 2024",
    icon: FiBookOpen,
    number: "02",
    description:
      "Apprentissage du développement web front-end et back-end, des bases de données et des applications web.",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Baccalauréat",
    subtitle: "Sciences Physiques et Chimiques",
    school: "Taourirt",
    year: "2020",
    icon: FiCalendar,
    number: "03",
    description:
      "Formation secondaire en sciences physiques et chimiques.",
    accent: "from-emerald-400 to-teal-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <FiBookOpen />
            Mon parcours académique
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Formation <span className="text-cyan-400">&</span> études
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Un parcours orienté vers l'informatique, le développement web
            et la création de solutions numériques.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        {/* Education cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {educations.map((edu) => {
            const Icon = edu.icon;

            return (
              <motion.article
                key={edu.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-8"
              >
                {/* Top gradient line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${edu.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Card header */}
                <div className="mb-7 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${edu.accent} bg-opacity-10 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <span className="font-mono text-sm text-slate-600">
                    {edu.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                    {edu.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-cyan-300">
                    {edu.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-slate-400">
                    {edu.school}
                  </p>

                  <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                    <FiCalendar className="text-cyan-400" />
                    {edu.year}
                  </p>

                  <p className="mt-5 flex-1 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
                    {edu.description}
                  </p>
                </div>

                {/* Decorative icon */}
                <FiArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          Toujours motivé à apprendre, progresser et développer mes compétences.
        </motion.p>
      </div>
    </section>
  );
}

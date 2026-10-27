
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiMessageCircle,
} from "react-icons/fi";

const email = "moujnibaabdelghani@gmail.com";

const contacts = [
  {
    title: "Email",
    description: "Échangeons autour d'une opportunité.",
    detail: email,
    icon: FiMail,
    href: `mailto:${email}`,
    action: "Envoyer un email",
    color: "cyan",
  },
  {
    title: "GitHub",
    description: "Découvrez mes projets et mon code.",
    detail: "Mes réalisations",
    icon: FiGithub,
    href: "https://github.com/abdelghanimj",
    action: "Voir GitHub",
    color: "violet",
  },
  {
    title: "LinkedIn",
    description: "Développons notre réseau professionnel.",
    detail: "Mon profil professionnel",
    icon: FiLinkedin,
    // Remplace ce lien par l'URL de ton profil LinkedIn.
    href: "https://www.linkedin.com/",
    action: "Voir LinkedIn",
    color: "sky",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.09] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <FiMessageCircle size={15} />
            Restons en contact
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Parlons de votre{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              projet
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Vous avez une opportunité de stage, un poste junior ou un projet
            à partager ? N'hésitez pas à me contacter. Je serai ravi
            d'échanger avec vous.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                variants={cardVariants}
                href={contact.href}
                target={
                  contact.title === "Email" ? undefined : "_blank"
                }
                rel={
                  contact.title === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ y: -7 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.14]" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.14]">
                    <Icon size={23} />
                  </div>

                  <FiArrowUpRight
                    size={21}
                    className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-white">
                    {contact.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {contact.description}
                  </p>

                  <span className="mt-5 inline-block break-all text-sm font-medium text-cyan-300/90">
                    {contact.detail}
                  </span>
                </div>

                <div className="relative mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-slate-300 transition-colors group-hover:text-cyan-300">
                  {contact.action}
                  <span className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-cyan-300/30" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Email copy action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            <FiMail size={19} />
          </div>

          <div className="flex-1">
            <p className="font-medium text-white">
              Vous préférez un contact direct ?
            </p>
            <p className="mt-1 break-all text-sm text-slate-400">
              {email}
            </p>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {copied ? <FiCheck size={17} /> : <FiCopy size={17} />}
            {copied ? "Email copié !" : "Copier l'email"}
          </button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Merci pour votre visite. Au plaisir d'échanger avec vous.
        </motion.p>
      </div>
    </section>
  );
}

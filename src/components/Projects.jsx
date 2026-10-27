
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiBriefcase,
  FiShoppingBag,
  FiUsers,
  FiCheckSquare,
  FiChevronRight,
  FiLayers,
} from "react-icons/fi";

import ProjectCard from "./ProjectCard";

// =======================
// OujdaShop Images
// =======================
import login from "../assets/Oujda_shop/login.png";
import oujdaRegister from "../assets/Oujda_shop/register.png";
import splach_screen from "../assets/Oujda_shop/splach_screen.png";
import dashboardAdmin from "../assets/Oujda_shop/dashboardAdmin.png";
import dashboardUser from "../assets/Oujda_shop/dashboardUser.png";
import users from "../assets/Oujda_shop/users.png";
import wishlist from "../assets/Oujda_shop/wishlist.png";
import profile from "../assets/Oujda_shop/profile.png";
import orders from "../assets/Oujda_shop/orders.png";
import commander from "../assets/Oujda_shop/commander.png";
import product from "../assets/Oujda_shop/product.png";
import productUser from "../assets/Oujda_shop/productUser.png";

// =======================
// TodoList Images
// =======================
import todoLogin from "../assets/TodoList/todoLogin.jpg.png";
import todoRegister from "../assets/TodoList/registerTodo.png";
import todoDashboardAdmin from "../assets/TodoList/DashboardAdmin.png";
import todoDashboardUser from "../assets/TodoList/DashboardUser.png";
import addTask from "../assets/TodoList/addTask.png";

const projects = [
  {
    id: "jobstage",
    icon: <FiBriefcase />,
    title: "JobStage",
    category: "Full Stack",
    desc: "Plateforme web dédiée à la recherche de stages et d'opportunités professionnelles, avec consultation des offres et gestion des candidatures.",
    tech: ["Next.js", "Laravel 13", "MySQL", "Docker"],
    images: [],
    github: "",
    live: "",
    status: "En développement",
  },
  {
    id: "oujdashop",
    icon: <FiShoppingBag />,
    title: "OujdaShop",
    category: "Mobile",
    desc: "Application mobile de commerce avec gestion des produits, comptes utilisateurs, commandes et espace administrateur.",
    tech: ["React Native", "Laravel", "SQLite"],
    images: [
      login,
      oujdaRegister,
      splach_screen,
      dashboardAdmin,
      dashboardUser,
      users,
      wishlist,
      product,
      profile,
      orders,
      commander,
      productUser,
    ],
    github: "https://github.com/abdelghanimj/mobile_shop",
    live: "",
    status: "Projet réalisé",
  },
  {
    id: "ecommerce",
    icon: <FiShoppingBag />,
    title: "E-commerce",
    category: "Web",
    desc: "Site e-commerce avec gestion des produits et fonctionnalités de commerce en ligne.",
    tech: ["Laravel", "MySQL"],
    images: [],
    github: "https://github.com/abdelghanimj/",
    live: "",
    status: "Projet",
  },
  {
    id: "students",
    icon: <FiUsers />,
    title: "Gestion Étudiants",
    category: "Full Stack",
    desc: "Application full stack de gestion scolaire avec organisation des informations des étudiants.",
    tech: ["React", "Laravel", "MySQL"],
    images: [],
    github: "",
    live: "",
    status: "Projet",
  },
  {
    id: "tasks",
    icon: <FiCheckSquare />,
    title: "Gestion des Tâches",
    category: "Full Stack",
    desc: "Application de gestion des tâches avec authentification et espaces utilisateur et administrateur.",
    tech: ["React", "Laravel", "JWT"],
    images: [
      todoLogin,
      todoRegister,
      todoDashboardAdmin,
      todoDashboardUser,
      addTask,
    ],
    github: "https://github.com/abdelghanimj/todo-IA",
    live: "",
    status: "Projet réalisé",
  },
];

const filters = ["Tous", "Full Stack", "Web", "Mobile"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeImage, setActiveImage] = useState(0);

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <FiLayers />
            Mes réalisations
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes <span className="text-cyan-400">Projets</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Découvrez quelques projets réalisés pour pratiquer mes
            compétences en développement web et mobile.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div
          layout
          className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard
                  icon={project.icon}
                  title={project.title}
                  desc={project.desc}
                  tech={project.tech}
                  onClick={() => openProject(project)}
                  githubUrl={project.github || undefined}
                  liveUrl={project.live || undefined}
                />

                {project.status === "En développement" && (
                  <p className="mt-3 text-center text-xs text-amber-300/80">
                    En développement
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="py-10 text-center text-slate-400">
            Aucun projet dans cette catégorie.
          </p>
        )}
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeProject();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8"
            >
              {/* Modal header */}
              <div className="mb-7 flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-cyan-300">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                      {selectedProject.icon}
                    </span>

                    <span className="text-xs uppercase tracking-widest text-slate-500">
                      {selectedProject.category}
                    </span>
                  </div>

                  <h3
                    id="project-modal-title"
                    className="text-2xl font-bold text-white sm:text-3xl"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                    {selectedProject.desc}
                  </p>

                  {selectedProject.status && (
                    <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Fermer les détails du projet"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-300"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Technology badges */}
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Screenshots */}
              {selectedProject.images.length > 0 ? (
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Captures d’écran
                  </h4>

                  <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                    <img
                      src={selectedProject.images[activeImage]}
                      alt={`${selectedProject.title} — capture ${activeImage + 1}`}
                      className="max-h-[55vh] w-full object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {selectedProject.images.map((img, index) => (
                      <button
                        type="button"
                        key={img}
                        onClick={() => setActiveImage(index)}
                        aria-label={`Afficher la capture ${index + 1}`}
                        aria-pressed={activeImage === index}
                        className={`overflow-hidden rounded-lg border transition ${
                          activeImage === index
                            ? "border-cyan-400 ring-1 ring-cyan-400/50"
                            : "border-white/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-20 w-full object-cover sm:h-24"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-10 text-center">
                  <FiLayers className="mx-auto mb-3 h-8 w-8 text-slate-600" />
                  <p className="text-sm text-slate-400">
                    Aucune capture d’écran disponible pour le moment.
                  </p>
                </div>
              )}

              {/* Links */}
              {(selectedProject.github || selectedProject.live) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      <FiGithub className="h-4 w-4" />
                      Code source
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Démo en ligne
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

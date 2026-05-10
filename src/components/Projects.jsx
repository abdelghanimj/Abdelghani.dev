import { useState } from "react";
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      icon: "📱",
      title: "OujdaShop",
      desc: "Application Android de gestion des produits",
      tech: "React Native / Laravel",
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
    },

    {
      icon: "🛒",
      title: "E-commerce",
      desc: "Site e-commerce avec gestion des produits",
      tech: "Laravel / MySQL",
      images: [],
    },

    {
      icon: "💻",
      title: "Gestion Étudiants",
      desc: "Application full stack de gestion scolaire",
      tech: "React / Laravel",
      images: [],
    },

    {
      icon: "✅",
      title: "Gestion des Tâches",
      desc: "Application full stack de gestion des tâches",
      tech: "React / Laravel",
      images: [
        todoLogin,
        todoRegister,
        todoDashboardAdmin,
        todoDashboardUser,
        addTask,
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-gray-950 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Mes Projets
          <span className="block w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="
                cursor-pointer
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
                shadow-xl
                transition-all duration-500
                hover:scale-105
                hover:border-cyan-400/40
                hover:shadow-cyan-500/20
              "
            >

              <div className="text-4xl mb-4">{project.icon}</div>

              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                {project.tech}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              bg-gray-900/90
              border border-white/10
              rounded-2xl
              shadow-2xl
              max-w-5xl w-full
              max-h-[90vh]
              overflow-y-auto
              p-6
              animate-fade-in
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="flex justify-between items-start mb-6">

              <div>
                <h3 className="text-3xl font-bold text-cyan-300">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {selectedProject.desc}
                </p>

                <span className="inline-block mt-3 text-sm px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  {selectedProject.tech}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-white bg-red-500/80 hover:bg-red-500 px-3 py-1 rounded-lg transition"
              >
                ✕
              </button>

            </div>

            {/* Images */}
            {selectedProject.images.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">

                {selectedProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="
                      w-full h-64
                      object-cover
                      rounded-xl
                      border border-white/10
                      hover:scale-105
                      transition duration-300
                    "
                  />
                ))}

              </div>
            ) : (
              <p className="text-center text-gray-500 py-10">
                No screenshots available
              </p>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
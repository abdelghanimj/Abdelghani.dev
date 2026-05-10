import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", id: "home" },
    { name: "À propos", id: "about" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Formation", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition">
          Abdelghani<span className="text-cyan-300">.dev</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="relative group px-2 py-1 transition duration-300 hover:text-cyan-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl transition-transform duration-300 active:scale-90"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-3 bg-black/30 backdrop-blur-xl border-t border-white/10">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="w-full text-left px-4 py-2 rounded-lg text-white hover:bg-cyan-400/20 hover:text-cyan-300 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
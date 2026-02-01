import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="font-extrabold text-2xl text-white drop-shadow-lg">Abdelghani</div>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          <li>
            <a href="#home" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              Accueil
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              À propos
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              Compétences
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              Projets
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
          <li>
            <a href="#education" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              Formation
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative group px-2 py-1 hover:text-yellow-300 transition">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full rounded"></span>
            </a>
          </li>
        </ul>

        {/* Toggle Button Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Links Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white flex flex-col gap-4 p-6 animate-fade-in">
          {["Accueil", "À propos", "Compétences", "Projets", "Formation", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-yellow-300 hover:text-gray-900 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
}

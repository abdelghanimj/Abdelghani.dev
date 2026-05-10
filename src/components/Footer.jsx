export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 py-10 mt-16 overflow-hidden">

      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center px-4">

        {/* Name */}
        <h3 className="text-white text-xl font-semibold mb-2">
          Abdelghani <span className="text-cyan-400">Moujniba</span>
        </h3>

        {/* Role */}
        <p className="text-sm text-gray-500 mb-6">
          Full Stack Developer • React • Spring Boot • Laravel
        </p>

        {/* Social (optional placeholders) */}
        <div className="flex justify-center gap-6 mb-6 text-sm">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 border-t border-white/10 pt-4">
          © {new Date().getFullYear()} - All rights reserved by Abdelghani Moujniba
        </p>

      </div>
    </footer>
  );
}
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">

        {/* Image */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="https://github.com/abdelghanimj/abdelghani-dev.github.io/blob/main/public/moujniba.jpg?raw=true"
            alt="Profil"
            className="
              w-44 h-44 md:w-52 md:h-52
              rounded-full
              object-cover
              border-4 border-cyan-400/30
              shadow-2xl
              transition duration-500
              group-hover:scale-105
              group-hover:rotate-2
            "
          />

          {/* Online dot */}
          <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950 animate-pulse"></span>
        </div>

        {/* Text */}
        <div className="space-y-5">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Abdelghani</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400">
            Full Stack Developer | React • Laravel
          </p>

          <p className="max-w-xl text-gray-500 text-sm md:text-base">
            I build modern, fast and scalable web applications with clean UI/UX and strong backend architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">

            <a
              href="https://github.com/abdelghanimj"
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-cyan-500 text-gray-900 font-semibold
                shadow-lg shadow-cyan-500/20
                hover:bg-cyan-400
                hover:scale-105
                transition
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-white/5 border border-white/10
                backdrop-blur-xl
                text-white
                hover:bg-white/10
                hover:scale-105
                transition
              "
            >
              LinkedIn
            </a>
            <a
  href="/cv.pdf"
  download
  className="
    px-6 py-3 rounded-xl
    border border-cyan-400/30
    bg-cyan-500/10
    backdrop-blur-xl
    text-cyan-300 font-medium
    hover:bg-cyan-400
    hover:text-black
    hover:scale-105
    transition-all duration-300
    shadow-lg shadow-cyan-500/10
  "
>
  Télécharger CV
</a>

          </div>

        </div>
      </div>
    </section>
  );
}
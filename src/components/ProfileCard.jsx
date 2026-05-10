export default function ProfileCard() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 py-24 px-6 rounded-3xl shadow-2xl">

      {/* Soft Glow Background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in">

        {/* Avatar */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="https://github.com/abdelghanimj.png"
            alt="profile"
            className="
              w-40 h-40 md:w-44 md:h-44
              rounded-full
              object-cover
              border-4 border-cyan-400/40
              shadow-xl
              transition-all duration-500
              group-hover:scale-105
              group-hover:rotate-2
            "
          />

          {/* online dot */}
          <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></span>
        </div>

        {/* Name */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
          Abdelghani <span className="text-cyan-400">Moujniba</span>
        </h1>

        {/* Role */}
        <p className="mt-3 text-cyan-300 text-lg md:text-xl font-medium">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed text-sm md:text-base">
          Passionné par le développement web moderne et la création
          d’applications performantes et élégantes avec React, Spring Boot et Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <a
            href="#projects"
            className="
              px-6 py-3 rounded-xl
              bg-cyan-500
              text-gray-900 font-semibold
              shadow-lg shadow-cyan-500/20
              hover:bg-cyan-400
              hover:scale-105
              transition
            "
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-xl
              bg-white/5 border border-white/10
              text-white backdrop-blur-xl
              hover:bg-white/10
              hover:scale-105
              transition
            "
          >
            Contact
          </a>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["React", "Spring Boot", "Laravel", "Tailwind", "MySQL", "JS"].map(
            (tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2 text-sm
                  rounded-full
                  bg-white/5 border border-white/10
                  text-gray-300
                  hover:text-cyan-300
                  hover:border-cyan-400/40
                  transition
                "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
    >
      <div className="container mx-auto px-4 flex justify-center">

        {/* Card */}
        <div className="max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-center transform transition duration-500 hover:scale-[1.02]">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            À propos de moi
            <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-cyan-400 -translate-x-1/2 rounded-full"></span>
          </h2>

          {/* Text */}
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            Développeur Web Full Stack Junior, passionné par la création
            d’applications modernes et performantes avec{" "}
            <span className="text-cyan-300 font-semibold">React</span>,{" "}
            <span className="text-cyan-300 font-semibold">Laravel</span> et
            des technologies modernes.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Motivé, sérieux et toujours prêt à apprendre de nouvelles
            technologies. J’aime travailler sur des projets innovants,
            améliorer mes compétences et relever des défis techniques.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Tailwind", "Laravel", "Php", "MySQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-200 hover:bg-cyan-400/30 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
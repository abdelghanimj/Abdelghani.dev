import React from "react";

export default function Education() {
  const educations = [
    {
      title: "Licence",
      subtitle: "Développement des Médias Numériques",
      year: "2024",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135811.png",
    },
    {
      title: "Technicien Spécialisé",
      subtitle: "Développement Digital – Web Full Stack",
      year: "2022",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135727.png",
    },
    {
      title: "Baccalauréat",
      subtitle: "Sciences Physiques – Taourirt",
      year: "2020",
      img: "https://cdn-icons-png.flaticon.com/512/254/254022.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-14">
          Formation
          <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {educations.map((edu, index) => (
            <div
              key={index}
              className="
                relative
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                p-8
                rounded-2xl
                shadow-xl
                transition-all duration-500
                hover:scale-105
                hover:border-cyan-400/40
                hover:shadow-cyan-500/20
              "
            >

              {/* icon */}
              <img
                src={edu.img}
                alt={edu.title}
                className="w-16 h-16 mx-auto mb-5 opacity-90"
              />

              {/* title */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {edu.title}
              </h3>

              {/* subtitle */}
              <p className="text-gray-400 mb-3 text-sm">
                {edu.subtitle}
              </p>

              {/* year badge */}
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                {edu.year}
              </span>

              {/* glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-cyan-400/5 blur-xl"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
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
    <section className="education py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Formation</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={edu.img}
                alt={edu.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-500 mb-2">{edu.subtitle}</p>
              <span className="text-gray-400 font-medium">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

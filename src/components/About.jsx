import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <p className="text-lg leading-relaxed mb-4">
          Développeur Web Full Stack Junior, passionné par la création d’applications modernes et performantes.
          Motivé, sérieux et toujours prêt à apprendre de nouvelles technologies.
        </p>
        <p className="text-lg leading-relaxed">
          J’aime travailler sur des projets innovants, améliorer mes compétences et relever de nouveaux défis techniques.
        </p>
      </div>
    </section>
  );
}

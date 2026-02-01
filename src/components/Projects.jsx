import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Projets
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <ProjectCard
          icon="📱"
          title="OujdaShop"
          desc="Application Android de gestion des produits"
          tech="Java / Android"
        />
        <ProjectCard
          icon="🛒"
          title="E-commerce"
          desc="Site e-commerce avec gestion des produits"
          tech="Laravel / MySQL"
        />
        <ProjectCard
          icon="💻"
          title="Gestion Étudiants"
          desc="Application académique full stack"
          tech="React / Laravel"
        />
      </div>
    </section>
  );
}

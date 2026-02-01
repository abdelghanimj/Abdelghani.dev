export default function ProjectCard({ icon, title, desc, tech }) {
  return (
    <div className="
      bg-white dark:bg-slate-800
      rounded-2xl shadow-lg
      p-6 hover:-translate-y-2
      transition duration-300
    ">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{desc}</p>
      <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
        {tech}
      </span>
    </div>
  );
}

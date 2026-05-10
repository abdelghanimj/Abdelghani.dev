export default function ProjectCard({
  icon,
  title,
  desc,
  tech,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        relative cursor-pointer
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-2xl
        p-6
        shadow-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-cyan-500/20
        hover:border-cyan-400/40
        group
        overflow-hidden
      "
    >

      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition blur-xl"></div>

      {/* ICON */}
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {desc}
      </p>

      {/* TECH BADGE */}
      <span className="
        inline-block text-xs px-3 py-1 rounded-full
        bg-cyan-500/10
        border border-cyan-500/20
        text-cyan-300
        group-hover:bg-cyan-400/20
        transition
      ">
        {tech}
      </span>

    </div>
  );
}
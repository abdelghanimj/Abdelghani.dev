export default function SkillCard({ icon, title }) {
  return (
    <div
      className="
        group relative
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-2xl
        p-6
        flex flex-col items-center justify-center
        shadow-lg
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-cyan-500/20
        hover:border-cyan-400/40
        overflow-hidden
      "
    >

      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition blur-xl"></div>

      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="
          w-14 h-14 mb-4
          transition-transform duration-300
          group-hover:scale-110
          group-hover:rotate-3
        "
      />

      {/* Title */}
      <p className="font-semibold text-gray-300 group-hover:text-cyan-300 transition">
        {title}
      </p>

    </div>
  );
}
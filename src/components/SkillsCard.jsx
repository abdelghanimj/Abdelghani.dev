export default function SkillCard({ icon, title }) {
  return (
    <div className="
      bg-white dark:bg-slate-800
      shadow-lg rounded-2xl
      p-6 flex flex-col items-center
      hover:-translate-y-2 hover:shadow-xl
      transition-all duration-300
    ">
      <img src={icon} alt={title} className="w-14 h-14 mb-4" />
      <p className="font-semibold text-slate-700 dark:text-white">
        {title}
      </p>
    </div>
  );
}

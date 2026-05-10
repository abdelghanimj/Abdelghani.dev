import SkillCard from "./SkillsCard";

export default function Skills() {
  const skills = [
    { title: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { title: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { title: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { title: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { title: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { title: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { title: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { title: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ];

  return (
    <section className="relative py-24 bg-gray-950 text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Compétences
          <span className="block w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-5
                flex flex-col items-center justify-center
                gap-3
                shadow-lg
                transition-all duration-500
                hover:scale-105
                hover:border-cyan-400/40
                hover:shadow-cyan-500/20
              "
            >

              {/* icon */}
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              />

              {/* title */}
              <p className="text-sm text-gray-300 group-hover:text-cyan-300 transition">
                {skill.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
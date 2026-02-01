import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 text-white min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 overflow-hidden">
      
      {/* Formes abstraites en arrière-plan */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full animate-pulse blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full animate-pulse blur-2xl"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-pink-400 opacity-20 rounded-full animate-pulse blur-xl"></div>

      {/* Image de profil */}
      <img
        src="https://github.com/abdelghanimj/abdelghani-dev.github.io/blob/main/public/moujniba.jpg?raw=true"
        alt="Profil"
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white object-cover shadow-2xl"
      />

      {/* Texte et boutons */}
      <div className="relative text-center md:text-left space-y-4 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Abdelghani Moujniba</h1>
        <p className="text-xl md:text-2xl drop-shadow-md">Développeur Web Full Stack</p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://github.com/abdelghanimj"
            target="_blank"
            className="bg-white text-gray-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdelghani-moujniba-9a6597312/"
            target="_blank"
            className="bg-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

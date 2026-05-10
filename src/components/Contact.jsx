export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-950 text-white overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="relative max-w-4xl mx-auto text-center px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          Contact
          <span className="block w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></span>
        </h2>

        <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
          Vous avez une opportunité, un stage ou un projet à proposer ?
          Je suis disponible et ouvert à toute collaboration.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:moujnibaabdelghani@gmail.com"
            className="
              group
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-6
              shadow-lg
              transition-all duration-500
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-cyan-500/20
            "
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">📧</div>
            <h3 className="text-cyan-300 font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-400">Send me a message</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/abdelghanimj"
            target="_blank"
            className="
              group
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-6
              shadow-lg
              transition-all duration-500
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-cyan-500/20
            "
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">💻</div>
            <h3 className="text-cyan-300 font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-gray-400">Check my projects</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="
              group
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-6
              shadow-lg
              transition-all duration-500
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-cyan-500/20
            "
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">🔗</div>
            <h3 className="text-cyan-300 font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-400">Connect with me</p>
          </a>

        </div>
      </div>
    </section>
  );
}
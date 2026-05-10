import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div className="bg-gray-950 text-white scroll-smooth overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS */}
      <main className="space-y-0">

        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="education" className="scroll-mt-20">
          <Education />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
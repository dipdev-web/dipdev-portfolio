import Hero from "./hero";
import Services from "./service";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import TechStack from "./teckstack"

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HOME / HERO */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

       <section id="tackstack" className="scroll-mt-24">
        <TechStack />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>


      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

    </main>
  );
}
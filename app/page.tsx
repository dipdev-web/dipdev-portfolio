
import Hero from "./hero";
import Services from './service'
import Projects from './projects'
import About from './about'
import Contact from './contact'
export default function Home() {
  return (
    <main className="bg-black text-white">
      

      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact/>
    </main>
  );
}
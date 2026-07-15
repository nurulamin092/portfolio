import Navbar from "@/components/layout/Navbar/Navbar";
import About from "@/components/sections/about/About";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects";
import Skills from "@/components/sections/skills/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

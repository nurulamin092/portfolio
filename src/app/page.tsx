import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects";
import Skills from "@/components/sections/skills/Skills";
import ActiveSectionTracker from "@/providers/ActiveSectionTracker";

export default function HomePage() {
  <ActiveSectionTracker />;
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

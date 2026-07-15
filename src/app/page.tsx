import Navbar from "@/components/layout/Navbar/Navbar";
import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import Skills from "@/components/sections/skills/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

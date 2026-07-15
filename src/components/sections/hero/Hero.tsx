import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundGrid from "../../common/BackgroundGrid";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" /> */}
      <BackgroundGrid />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
      <HeroScrollIndicator />
    </Section>
  );
}

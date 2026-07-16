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

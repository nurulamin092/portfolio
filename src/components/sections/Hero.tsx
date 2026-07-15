import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <Section id="about" className="relative py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}

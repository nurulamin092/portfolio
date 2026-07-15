import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import SkillsGrid from "./SkillsGrid";
import SectionHeading from "@/components/common/SectionHeading";

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <Container>
        <SectionHeading
          badge="Skills"
          title="Technologies I Work With"
          description="Modern tools and technologies I use to build scalable, secure, and high-performance web applications."
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
}

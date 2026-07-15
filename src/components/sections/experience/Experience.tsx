import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ExperienceTimeline from "./ExperienceTimeline";
import SectionHeading from "@/components/common/SectionHeading";

export default function Experience() {
  return (
    <Section id="experience" className="py-24">
      <Container>
        <SectionHeading
          badge="Experience"
          title="My Development Journey"
          description="A timeline of my learning, projects, and professional growth."
        />

        <ExperienceTimeline />
      </Container>
    </Section>
  );
}

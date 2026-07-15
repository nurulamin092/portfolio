import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ProjectsGrid from "./ProjectsGrid";
import SectionHeading from "@/components/common/SectionHeading";

export default function Projects() {
  return (
    <Section id="projects" className="py-24">
      <Container>
        <SectionHeading
          badge="Projects"
          title="Featured Projects"
          description="A selection of full-stack applications showcasing my experience with modern web technologies."
        />

        <ProjectsGrid />
      </Container>
    </Section>
  );
}

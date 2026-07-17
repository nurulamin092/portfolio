import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { experiences } from "@/data/experience";

import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          badge="Experience"
          title="Professional Learning Journey"
          description="Hands-on software engineering programs where I built production-ready applications and strengthened my full-stack development skills."
        />

        <div className="mt-20 space-y-16">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

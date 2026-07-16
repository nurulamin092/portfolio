import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Amazing"
          description="I'm currently available for freelance, remote and full-time opportunities."
          align="left"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl font-bold">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="mt-6 text-muted-foreground">
            I&apos;m currently available for freelance, remote and full-time
            opportunities.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

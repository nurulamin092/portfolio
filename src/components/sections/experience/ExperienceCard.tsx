import { Card } from "@/components/common/card";
import { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card variant="glass" padding="lg">
      <p className="text-sm text-violet-400">{experience.period}</p>

      <h3 className="mt-2 text-2xl font-bold">{experience.company}</h3>

      <p className="mt-1 text-muted-foreground">{experience.role}</p>

      <p className="mt-6 leading-8 text-muted-foreground">
        {experience.description}
      </p>

      <ul className="mt-6 space-y-2">
        {experience.achievements.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}

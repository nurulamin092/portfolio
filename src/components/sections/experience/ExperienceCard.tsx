import { Card } from "@/components/common/card";
import { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="
  rounded-3xl
  border-white/10
  bg-white/3
  backdrop-blur-xl

  transition-all
  duration-300

  hover:-translate-y-1
  hover:border-violet-500/30
  hover:shadow-[0_25px_80px_rgba(124,58,237,.15)]
"
    >
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

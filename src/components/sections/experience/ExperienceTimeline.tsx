import { experiences } from "@/data/experience";

import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="mx-auto max-w-3xl space-y-16">
      {experiences.map((item) => (
        <ExperienceCard key={`${item.year}-${item.title}`} item={item} />
      ))}
    </div>
  );
}

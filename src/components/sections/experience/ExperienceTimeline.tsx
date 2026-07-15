import { experiences } from "@/data/experience";

import TimelineItem from "./TimelineItem";

export default function ExperienceTimeline() {
  return (
    <div className="mx-auto max-w-3xl space-y-16">
      {experiences.map((item) => (
        <TimelineItem key={`${item.year}-${item.title}`} item={item} />
      ))}
    </div>
  );
}

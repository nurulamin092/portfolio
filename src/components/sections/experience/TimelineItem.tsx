import type { Experience } from "@/types/experience";

interface TimelineItemProps {
  item: Experience;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      {/* Line */}
      <div className="absolute left-3 top-0 h-full w-px bg-border" />

      {/* Dot */}
      <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-background bg-violet-500" />

      <p className="text-sm text-violet-400">{item.year}</p>

      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>

      <p className="text-muted-foreground">{item.company}</p>

      <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
    </div>
  );
}

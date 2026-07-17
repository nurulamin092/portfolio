import { CheckCircle2, MapPin } from "lucide-react";

import { Card } from "@/components/common/card";
import type { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="relative pl-10">
      {/* Timeline */}
      <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

      {/* Timeline Dot */}
      <div className="absolute left-2.25 top-10 h-3.5 w-3.5 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />

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
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
              {experience.period}
            </span>

            <h3 className="mt-4 text-2xl font-bold">{experience.company}</h3>

            <p className="mt-1 text-muted-foreground">{experience.role}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {experience.location}
          </div>
        </div>

        {/* Description */}
        <p className="mt-8 leading-8 text-muted-foreground">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mt-8">
          <h4 className="mb-4 font-semibold">Key Achievements</h4>

          <ul className="space-y-3">
            {experience.achievements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />

                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-10">
          <h4 className="mb-4 font-semibold">Technologies</h4>

          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  px-4
                  py-2
                  text-sm
                  text-violet-300
                  transition

                  hover:border-violet-500/40
                  hover:bg-violet-500/15
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

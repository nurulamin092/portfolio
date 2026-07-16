import { Card } from "@/components/common/card";
import { skillIcons } from "@/lib/skill-icons";
import { skillColors } from "@/lib/skill-colors";

import { cn } from "@/lib/utils";

import type { Skill } from "@/types/skill";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const Icon = skillIcons[skill.icon];

  return (
    <Card
      padding="md"
      className={cn(
        "group",

        "rounded-2xl",

        "border border-white/10",

        "bg-white/2",

        "transition-all duration-300",

        "hover:-translate-y-1",

        "hover:border-violet-500/40",

        "hover:bg-white/4",

        "hover:shadow-[0_20px_60px_rgba(124,58,237,.15)]",
      )}
    >
      <div className="flex items-center gap-5">
        <Icon
          className={cn(
            "text-4xl transition-transform duration-300 group-hover:scale-110",
            skillColors[skill.icon],
          )}
        />

        <div>
          <h3 className="font-semibold text-white">{skill.name}</h3>

          <p className="mt-1 text-sm text-muted-foreground">Technology</p>
        </div>
      </div>
    </Card>
  );
}

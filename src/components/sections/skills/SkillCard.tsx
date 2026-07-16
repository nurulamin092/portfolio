import { Card } from "@/components/common/card";
import { skillIcons } from "@/lib/skill-icons";
import type { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skillIcons[skill.icon as keyof typeof skillIcons];

  return (
    // <div className="group rounded-2xl border border-border bg-background/40 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl">
    //   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:scale-110">
    //     <Icon className="size-6" />
    //   </div>

    //   <h3 className="font-medium">{skill.name}</h3>
    // </div>
    <Card padding="md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:scale-110">
        <Icon className="size-6" />
      </div>

      <h3 className="font-medium">{skill.name}</h3>
    </Card>
  );
}

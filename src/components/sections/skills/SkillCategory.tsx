import type { SkillCategory as SkillCategoryType } from "@/types/skill";

import SkillCard from "./SkillCard";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <section
      className="rounded-3xl
    border border-white/10
    bg-white/2
    p-8
    backdrop-blur-sm "
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold">{category.title}</h3>
        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
          {category.skills.length}
        </span>

        <div className="h-px flex-1 bg-linear-to-r from-violet-500/30 to-transparent" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

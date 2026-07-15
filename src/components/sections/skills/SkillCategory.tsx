import type { SkillCategory as SkillCategoryType } from "@/types/skill";

import SkillCard from "./SkillCard";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <section>
      <h3 className="mb-6 text-2xl font-semibold">{category.title}</h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

import { skills } from "@/data/skills";

import SkillCategory from "./SkillCategory";

export default function SkillsGrid() {
  return (
    <div className="space-y-16">
      {skills.map((category) => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </div>
  );
}

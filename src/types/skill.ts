import { skillIcons } from "@/lib/skill-icons";

export type SkillIcon = keyof typeof skillIcons;
export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

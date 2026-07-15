import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "REST API", icon: "api" },
      { name: "JWT", icon: "jwt" },
      { name: "Authentication", icon: "shield" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma ORM", icon: "prisma" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

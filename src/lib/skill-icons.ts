import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { ShieldCheck, Database } from "lucide-react";

export const skillIcons = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,

  nodedotjs: SiNodedotjs,
  express: SiExpress,

  postgresql: SiPostgresql,
  prisma: SiPrisma,

  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  postman: SiPostman,

  vercel: SiVercel,

  api: Database,
  jwt: ShieldCheck,
  shield: ShieldCheck,
} as const;

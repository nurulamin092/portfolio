import type { Technology } from "@/types/project";

interface Props {
  technologies: Technology[];
}

export default function ProjectTech({ technologies }: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className="rounded-full border border-border px-3 py-1 text-sm"
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}

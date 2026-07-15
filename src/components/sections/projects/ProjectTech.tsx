interface Props {
  technologies: string[];
}

export default function ProjectTech({ technologies }: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

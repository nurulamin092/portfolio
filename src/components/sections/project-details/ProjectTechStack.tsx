import type { Technology } from "@/types/project";

interface Props {
  technologies: Technology[];
}

export default function ProjectTechStack({ technologies }: Props) {
  const grouped = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }

      acc[tech.category].push(tech);

      return acc;
    },
    {} as Record<string, Technology[]>,
  );

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">Technology Stack</h2>

      <div className="mt-10 space-y-10">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold">{category}</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {items.map((tech) => (
                <span
                  key={tech.name}
                  className="rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:scale-105"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

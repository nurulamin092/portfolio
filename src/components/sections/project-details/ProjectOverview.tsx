import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">Overview</h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          {project.overview}
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Problem</h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          {project.problem}
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Solution</h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          {project.solution}
        </p>
      </div>
    </section>
  );
}

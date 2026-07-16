import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectSidebar({ project }: Props) {
  return (
    <aside className="sticky top-24 rounded-3xl border border-border bg-background/40 p-6">
      <h3 className="text-xl font-semibold">Project Info</h3>

      <div className="mt-6 space-y-5">
        <Info label="Status" value={project.status} />

        <Info label="Role" value={project.role} />

        <Info label="Duration" value={project.duration} />

        <Info label="Year" value={project.year} />
      </div>
    </aside>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

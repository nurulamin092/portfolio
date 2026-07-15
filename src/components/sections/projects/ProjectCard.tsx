import Image from "next/image";
import { cn } from "@/lib/utils";
import ProjectActions from "./ProjectActions";
import ProjectFeatures from "./ProjectFeatures";
import ProjectTech from "./ProjectTech";
import FeaturedBadge from "./FeaturedBadge";

import { Project } from "@/types/project";

interface Props {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: Props) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border border-border bg-background/40 transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl",
        className,
      )}
    >
      <div className="grid gap-10 p-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          {project.featured && <FeaturedBadge />}
          <h3 className="mt-5 text-3xl font-bold">{project.title}</h3>
          <p className="mt-2 text-violet-400">{project.shortDescription}</p>
          <p className="mt-6 leading-8 text-muted-foreground">
            {project.description}
          </p>
          <ProjectTech technologies={project.technologies} />
          <ProjectFeatures features={project.features} />
          <ProjectActions
            liveUrl={project.liveUrl}
            repository={project.repository}
          />
        </div>
      </div>
    </article>
  );
}

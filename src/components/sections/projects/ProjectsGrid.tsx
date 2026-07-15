import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScaleIn from "@/components/motion/ScaleIn";

export default function ProjectsGrid() {
  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <ScaleIn key={project.id}>
          <ProjectCard
            project={project}
            className={index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
          />
        </ScaleIn>
      ))}
    </div>
  );
}

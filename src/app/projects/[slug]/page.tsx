import { notFound } from "next/navigation";

import { getProject } from "@/lib/projects";
import ProjectHero from "@/components/sections/project-details/ProjectHero";
import ProjectSidebar from "@/components/sections/project-details/ProjectSidebar";
import ProjectOverview from "@/components/sections/project-details/ProjectOverview";
import ProjectGallery from "@/components/sections/project-details/ProjectGallery";
import ProjectChallenges from "@/components/sections/project-details/ProjectChallenges";
import ProjectLearnings from "@/components/sections/project-details/ProjectLearnings";
import ProjectTechStack from "@/components/sections/project-details/ProjectTechStack";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-24">
      <h1 className="text-5xl font-bold">
        <ProjectHero project={project} />
        <section className="mt-24 grid gap-16 lg:grid-cols-[2fr_1fr]">
          <ProjectOverview project={project} />
          <ProjectGallery gallery={project.gallery} />
          <ProjectChallenges challenges={project.challenges} />

          <ProjectLearnings learnings={project.learnings} />
          <ProjectTechStack technologies={project.technologies} />
          <ProjectSidebar project={project} />
        </section>
      </h1>
    </main>
  );
}

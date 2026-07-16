import { notFound } from "next/navigation";

import { getProject } from "@/lib/projects";

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
      <h1 className="text-5xl font-bold">{project.title}</h1>
    </main>
  );
}

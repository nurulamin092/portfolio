"use client";

import Image from "next/image";
import Link from "next/link";

import { Calendar, Clock3, ExternalLink, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="space-y-10">
      {/* Header */}

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{project.status}</Badge>

          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <h1 className="mt-5 text-5xl font-bold">{project.title}</h1>

        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>

      {/* Info */}

      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <User className="size-4" />

          {project.role}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="size-4" />

          {project.duration}
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="size-4" />

          {project.year}
        </div>
      </div>

      {/* Links */}

      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="rounded-xl bg-primary px-5 py-3 text-primary-foreground"
          >
            <ExternalLink className="mr-2 inline size-4" />
            Live Demo
          </Link>
        )}

        <Link
          href={project.repository.client}
          target="_blank"
          className="rounded-xl border px-5 py-3"
        >
          <FaGithub className="mr-2 inline size-4" />
          Client Repository
        </Link>

        {project.repository.server && (
          <Link
            href={project.repository.server}
            target="_blank"
            className="rounded-xl border px-5 py-3"
          >
            <FaGithub className="mr-2 inline size-4" />
            Server Repository
          </Link>
        )}
      </div>

      {/* Cover */}

      <div className="overflow-hidden rounded-3xl border">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          priority
          className="aspect-video w-full object-cover"
        />
      </div>
    </section>
  );
}

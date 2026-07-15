import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  liveUrl?: string;
  repository: {
    client: string;
    server?: string;
  };
}

export default function ProjectActions({ liveUrl, repository }: Props) {
  return (
    <div className="mt-8 flex gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-primary-foreground"
        >
          <ExternalLink className="size-4" />
          Live Demo
        </Link>
      )}

      <Link
        href={repository.client}
        target="_blank"
        className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
      >
        <FaGithub className="size-4" />
        GitHub
      </Link>
      {repository.server && (
        <Link
          href={repository.server}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl border px-5 py-3"
        >
          <FaGithub className="size-4" />
          Server Code
        </Link>
      )}
    </div>
  );
}

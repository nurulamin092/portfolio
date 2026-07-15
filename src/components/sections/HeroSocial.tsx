import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

export default function HeroSocial() {
  return (
    <div className="mt-8 flex items-center gap-4">
      <Link
        href={siteConfig.github}
        target="_blank"
        aria-label="GitHub"
        className="rounded-full border border-border p-3 transition-all hover:border-violet-500 hover:text-violet-400"
      >
        <FaGithub className="size-5" />
      </Link>

      <Link
        href={siteConfig.linkedin}
        target="_blank"
        aria-label="LinkedIn"
        className="rounded-full border border-border p-3 transition-all hover:border-violet-500 hover:text-violet-400"
      >
        <FaLinkedin className="size-5" />
      </Link>
    </div>
  );
}

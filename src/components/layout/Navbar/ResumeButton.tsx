import Link from "next/link";

import { Download } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function ResumeButton() {
  return (
    <Link
      href={siteConfig.resume}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-500"
    >
      <Download size={18} />
      Resume
    </Link>
  );
}

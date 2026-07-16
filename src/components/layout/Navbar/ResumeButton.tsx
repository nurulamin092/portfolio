import Link from "next/link";
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface ResumeButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ResumeButton({
  className,
  onClick,
}: ResumeButtonProps) {
  return (
    <Link
      href={siteConfig.resume}
      target="_blank"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-500",
        className,
      )}
    >
      <Download size={18} />
      Resume
    </Link>
  );
}

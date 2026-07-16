import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import LinkButton from "@/components/common/link-button";

interface ResumeButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ResumeButton({ className }: ResumeButtonProps) {
  return (
    <LinkButton href={siteConfig.resume} target="_blank" className={className}>
      <Download className="size-4" />
      Resume
    </LinkButton>
  );
}

import { Download, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import LinkButton from "@/components/common/link-button";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <LinkButton href="#contact" size="lg">
        Hire Me
        <ArrowRight className="size-4" />
      </LinkButton>

      <LinkButton
        href={siteConfig.resume}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="lg"
        className="rounded-full"
      >
        <Download className="size-4" />
        Resume
      </LinkButton>
    </div>
  );
}

import Link from "next/link";

import { Download, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        href="#contact"
        className={buttonVariants({
          size: "lg",
        })}
      >
        Hire Me
        <ArrowRight className="ml-2 size-4" />
      </Link>

      <Link
        href={siteConfig.resume}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "lg",
          }),
          "rounded-full",
        )}
      >
        <Download className="mr-2 size-4" />
        Resume
      </Link>
    </div>
  );
}

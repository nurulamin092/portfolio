"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/providers/ActiveSectionProvider";

interface Props {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  const { activeSection } = useActiveSectionContext();

  const id = href === "/" ? "home" : href.replace("/#", "");

  const active = activeSection === id;

  return (
    <Link href={href} className="relative px-4 py-2 text-sm font-medium">
      {active && (
        <motion.span
          layoutId="navbar-pill"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
          }}
          className="absolute inset-0 rounded-full bg-violet-600/15 border border-violet-500/30"
        />
      )}

      <span
        className={cn(
          "relative z-10 transition-colors",
          active ? "text-violet-300" : "text-muted-foreground hover:text-white",
        )}
      >
        {label}
      </span>
    </Link>
  );
}

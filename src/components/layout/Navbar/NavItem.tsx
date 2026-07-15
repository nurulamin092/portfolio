"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium text-slate-300 transition-colors duration-300",
        "hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

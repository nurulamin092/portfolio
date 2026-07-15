"use client";

import Container from "@/components/common/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";

import { buttonVariants } from "@/components/ui/button";

import { Download } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <Container>
        <div className="mt-5 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          <Logo />

          <DesktopNav />

          <Link
            href={siteConfig.github}
            target="_blank"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "rounded-full",
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Link>
        </div>
      </Container>
    </header>
  );
}

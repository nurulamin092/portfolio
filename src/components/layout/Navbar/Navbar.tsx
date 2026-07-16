"use client";

import Container from "@/components/common/Container";
import { useScroll } from "@/hooks/use-scroll";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

import { cn } from "@/lib/utils";
import NavbarReveal from "@/components/motion/NavbarReveal";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <NavbarReveal
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
          : "bg-transparent",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <div className="mb-10">
            <Logo />
          </div>

          <DesktopNav />

          <MobileNav />
        </div>
      </Container>
    </NavbarReveal>
  );
}

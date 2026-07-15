"use client";

import { ChevronDown } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:flex">
      <ChevronDown className="size-6 text-muted-foreground" />
    </div>
  );
}

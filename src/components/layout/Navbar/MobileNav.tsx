"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-white/10 bg-slate-950 p-6">
            <button
              className="self-end"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X />
            </button>

            <nav className="mt-10 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted-foreground transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

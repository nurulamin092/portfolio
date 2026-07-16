"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { mobileMenu, mobileOverlay } from "@/lib/animations";
import { useActiveSectionContext } from "@/providers/ActiveSectionProvider";
import { cn } from "@/lib/utils";
import Stagger from "@/components/motion/Stagger";
import FadeUp from "@/components/motion/FadeUp";
import ResumeButton from "./ResumeButton";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const { activeSection } = useActiveSectionContext();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        className="lg:hidden"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              variants={mobileOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed
    right-0
    top-0
    z-50
    flex
    h-dvh
    w-80
    flex-col
    border-l
    border-white/10
    bg-slate-950
    p-6
    shadow-2xl"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-50 flex h-dvh w-80 flex-col border-l border-white/10 bg-slate-950 p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="self-end"
                aria-label="Close navigation menu"
              >
                <X className="size-6" />
              </button>

              {/* Navigation */}
              <nav id="mobile-navigation" className="mt-10 flex flex-1">
                <Stagger className="flex flex-col gap-4">
                  {navigation.map((item) => {
                    const id = item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-lg px-3 py-2 text-lg transition-colors duration-200",
                          activeSection === id
                            ? "bg-violet-500/10 text-violet-400"
                            : "text-muted-foreground hover:bg-white/5 hover:text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </Stagger>
              </nav>
              <div className=" pt-8">
                <FadeUp>
                  <ResumeButton
                    className="w-full"
                    onClick={() => setOpen(false)}
                  />
                </FadeUp>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";

import { navbarReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function NavbarReveal({ children, className }: Props) {
  return (
    <motion.header
      variants={navbarReveal}
      initial="hidden"
      animate="visible"
      className={cn(className)}
    >
      {children}
    </motion.header>
  );
}

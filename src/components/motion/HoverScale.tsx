"use client";

import { motion } from "framer-motion";

import { hoverScale } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverScale({ children, className }: Props) {
  return (
    <motion.div
      variants={hoverScale}
      initial="rest"
      whileHover="hover"
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ScaleIn({ children, className }: Props) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

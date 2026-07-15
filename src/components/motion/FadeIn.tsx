"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeIn({ children, className }: Props) {
  return (
    <motion.div
      variants={fadeIn}
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

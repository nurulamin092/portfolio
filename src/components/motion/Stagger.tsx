"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Stagger({ children, className }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

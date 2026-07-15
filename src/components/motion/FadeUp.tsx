"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeUp({ children, className }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

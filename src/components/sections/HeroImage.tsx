"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { floating } from "@/lib/animations";

import profile from "@/assets/images/profile.jpg";
export default function HeroImage() {
  return (
    <motion.div
      variants={floating}
      animate="animate"
      className="relative flex justify-center"
    >
      {/* Purple Glow */}
      <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-[100px]" />

      {/* Image */}
      <div className="elative overflow-hidden rounded-full border border-white/10 bg-slate-900 p-2 shadow-2xl w-72 h-72 md:w-96 md:h-96 lg:w-105 lg:h-105">
        <Image
          src={profile}
          alt="Nurul Amin"
          width={420}
          height={420}
          priority
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}

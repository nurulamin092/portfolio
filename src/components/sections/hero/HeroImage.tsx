"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { floating } from "@/lib/animations";
import HeroFloatingIcons from "./HeroFloatingIcons";

import profile from "@/assets/images/profile.jpg";
export default function HeroImage() {
  return (
    <motion.div
      variants={floating}
      animate="animate"
      className="relative flex justify-center"
    >
      <HeroFloatingIcons />
      {/* Purple Glow */}
      <div className="absolute inset-0 animate-spin rounded-full border border-violet-500/20 animation-duration:[18s]" />

      {/* Cyan Glow */}
      <div className="absolute inset-8 animate-spin rounded-full border border-cyan-500/20 animation-duration:[12s] shimmer-reverse" />

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

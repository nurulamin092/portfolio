"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Download, ArrowRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import profile from "@/assets/images/profile.jpg";

import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 lg:py-32">
      {/* Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-violet-400">{heroData.greeting}</p>

          <h1
            className="bg-linear-to-r
from-violet-400
via-fuchsia-500
to-cyan-400
bg-clip-text
text-transparent"
          >
            {heroData.name}
          </h1>

          <h2 className="mt-4 text-2xl text-slate-300">{heroData.role}</h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-700"
            >
              Hire Me
              <ArrowRight size={18} />
            </Link>

            <Link
              href={heroData.resume}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 transition hover:border-violet-500"
            >
              <Download size={18} />
              Resume
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href={heroData.github}
              target="_blank"
              className="rounded-full border border-slate-700 p-3 hover:border-violet-500"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href={heroData.linkedin}
              target="_blank"
              className="rounded-full border border-slate-700 p-3 hover:border-violet-500"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 blur-3xl opacity-40" />

            <Image
              src={profile}
              alt="Nurul Amin"
              priority
              className="relative h-105 w-105 rounded-full border border-white/10 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navLinks } from "@/lib/nav-links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto mt-5 flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Nurul<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
          >
            <FaGithub size={18} />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
          >
            <FaLinkedin size={18} />
          </Link>

          <Link
            href="/resume/Nurul-Amin-Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-2 text-sm font-medium transition hover:scale-105"
          >
            <Download size={16} />
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}

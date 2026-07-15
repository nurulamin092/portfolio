"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const icons = [
  {
    icon: SiNextdotjs,
    className: "-left-8 top-12",
  },
  {
    icon: SiReact,
    className: "-right-8 top-24",
  },
  {
    icon: SiTypescript,
    className: "left-8 bottom-10",
  },
  {
    icon: SiNodedotjs,
    className: "-right-6 bottom-16",
  },
];

export default function HeroFloatingIcons() {
  return (
    <>
      {icons.map(({ icon: Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className={`absolute ${className} hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl lg:block`}
        >
          <Icon className="size-7" />
        </motion.div>
      ))}
    </>
  );
}

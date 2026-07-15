import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const floating: Variants = {
  animate: {
    y: [-10, 10, -10],

    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

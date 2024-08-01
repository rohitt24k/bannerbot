import { Variants } from "framer-motion";

export const item: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

export const list: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
};

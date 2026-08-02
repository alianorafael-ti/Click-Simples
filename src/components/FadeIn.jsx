"use client";

import { motion } from "motion/react";

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
}) {
  const variants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    zoom: { opacity: 0, scale: 0.96 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
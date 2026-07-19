"use client";

import { motion } from "framer-motion";

const animations = {
  "fade-in": {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  "fade-in-up": {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-in-down": {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-in-left": {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-in-right": {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
};

export default function AnimatedOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold: _threshold,
  once = true,
  style = {},
}) {
  const config = animations[animation] || animations["fade-in-up"];

  return (
    <motion.div
      className={className}
      initial={config.initial}
      whileInView={config.whileInView}
      viewport={{ once, amount: 0.1, margin: "-50px 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}


"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function HeroPhoto() {
  const reduce = useReducedMotion();

  return (
  <div style={{ perspective: 1200 }} className="relative isolate mx-auto w-full max-w-md">
    <div
      aria-hidden
      className="absolute inset-6 -z-10 rounded-full bg-linear-to-br from-accent via-mid to-rose opacity-50 blur-3xl"
    />

    <motion.div
      initial={
        reduce
          ? { opacity: 0 }
          : { x: "110%", rotateY: -75, rotateX: 12, scale: 0.8, opacity: 0 }
      }
      animate={{ x: 0, rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
      whileHover={reduce ? undefined : { rotateY: 8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 60, damping: 9, mass: 1.2, delay: 0.2 }}
    >
      <Image
        src="/photo.jpg"
        alt="Anamika Mishra"
        width={820}
        height={820}
        priority
        className="h-auto w-full [mask-image:radial-gradient(ellipse_75%_80%_at_50%_42%,#000_55%,transparent_100%)]"
      />
    </motion.div>
  </div>
);
}
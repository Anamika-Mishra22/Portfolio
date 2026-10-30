"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";

const ABOUT_PHOTO = "/photo.png";

export default function AboutPhoto() {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ perspective: 1200 }} className="mx-auto w-full max-w-sm">
        <motion.div
          initial={{ x: "-70%", rotateY: 60, opacity: 0 }}
          whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", bounce: 0.45, duration: 1.4 }}
          whileHover={{ rotateY: -8, scale: 1.02 }}
          className="relative isolate"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-full bg-linear-to-br from-purple-600/60 to-orange-500/50 blur-3xl"
          />

          <div className="rounded-[2rem] bg-linear-to-br from-purple-400 via-fuchsia-500 to-orange-400 p-[3px]">
            <div className="overflow-hidden rounded-[1.9rem] bg-black">
              <Image
                src={ABOUT_PHOTO}
                alt="Anamika Mishra"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
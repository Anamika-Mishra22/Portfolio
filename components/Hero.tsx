"use client";

import { motion, MotionConfig, type Variants } from "motion/react";
import { stack } from "@/data/stack";

const statuses = ["Open to new opportunities", "Available for freelance"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="px-3 pt-4 sm:px-6 sm:pt-8">
        <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07060d] px-6 py-16 text-center text-white sm:px-10 sm:py-20 md:px-16">
          
          {/* Background Gradient Glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-[130px]" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-500/20 blur-[120px]" />
          </div>

          {/* Centered Content Layout */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div variants={container} initial="hidden" animate="show">
              
              {/* Status Badges */}
              <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5">
                {statuses.map((text) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold backdrop-blur"
                  >
                    <i className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    {text}
                  </span>
                ))}
              </motion.div>

              {/* Name Subtitle */}
              <motion.p variants={item} className="mt-6 text-xl sm:text-2xl font-bold italic text-purple-200">
                I am Anamika Mishra
              </motion.p>

              {/* Main Heading */}
              <h1 className="mt-3 font-sans font-extrabold uppercase leading-[0.95] tracking-tight">
                <motion.span
                  variants={item}
                  className="block bg-linear-to-r from-purple-300 via-fuchsia-300 to-orange-200 bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-transparent"
                >
                  Software
                </motion.span>

                <motion.span variants={item} className="mt-3 flex items-center justify-center gap-3 lg:gap-4">
                  <span className="grid h-10 w-16 sm:h-14 sm:w-24 lg:h-16 lg:w-28 shrink-0 place-items-center rounded-full bg-linear-to-r from-purple-500 to-orange-400 shadow-lg shadow-purple-500/20">
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </motion.svg>
                  </span>
                  <span className="bg-linear-to-r from-white to-orange-200 bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-transparent">
                    Developer
                  </span>
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p variants={item} className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                I build clean, responsive and user-friendly web experiences with React and Next.js, focusing on thoughtful design, smooth interactions and maintainable code.
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 px-7 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-purple-500/25 transition-transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold backdrop-blur transition-colors hover:bg-white/25"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Tech Stack List */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-14 pt-8 border-t border-white/10"
            >
              <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                Technologies I work with
              </p>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                {stack.map((tech) => (
                  <motion.li
                    key={tech.name}
                    variants={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white/80 backdrop-blur"
                  >
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-lg bg-linear-to-br text-[10px] font-extrabold text-white shadow-sm ${tech.color}`}
                    >
                      {tech.short}
                    </span>
                    {tech.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
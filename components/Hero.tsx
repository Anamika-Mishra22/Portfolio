"use client";

import { motion, MotionConfig, type Variants } from "motion/react";
import { stack } from "@/data/stack";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const str = "text-emerald-300";
const kw = "text-orange-300";

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="px-3 pt-4 sm:px-6 sm:pt-8">
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0710] px-5 py-10 text-white sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-14">
          {/* Background glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[120px]" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-purple-600/30 blur-[130px]" />
          </div>

          <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2">
            {/* Left: intro */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex min-w-0 flex-col items-start gap-5 sm:gap-6"
            >
              <motion.span
                variants={item}
                className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-left text-xs font-semibold backdrop-blur sm:rounded-full sm:text-sm"
              >
                <i className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
                Open to new opportunities and freelance
              </motion.span>

              <motion.p
                variants={item}
                className="text-lg font-bold italic text-purple-200 sm:text-xl"
              >
                I am Anamika Mishra
              </motion.p>

              <h1 className="font-extrabold leading-[0.95] tracking-tight">
                <motion.span
                  variants={item}
                  className="block bg-linear-to-r from-purple-300 via-fuchsia-300 to-fuchsia-400 bg-clip-text text-[2.75rem] text-transparent sm:text-7xl lg:text-8xl"
                >
                  Software
                </motion.span>
                <motion.span
                  variants={item}
                  className="mt-2 block text-[2.75rem] sm:text-7xl lg:text-8xl"
                >
                  Developer
                </motion.span>
              </h1>

              <motion.p
                variants={item}
                className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
              >
                I build clean, responsive and user-friendly web experiences with
                React and Next.js, focusing on thoughtful design, smooth
                interactions and maintainable code.
              </motion.p>

              <motion.div
                variants={item}
                className="flex w-full flex-wrap gap-3 sm:w-auto sm:gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-orange-400 px-7 py-3.5 text-center text-sm font-bold text-[#12041c] shadow-lg shadow-purple-500/25 transition-transform hover:scale-105 sm:flex-none sm:text-base"
                >
                  View My Work
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="flex-1 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold backdrop-blur transition-colors hover:bg-white/25 sm:flex-none sm:text-base"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Right: code card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.25, duration: 1, delay: 0.4 }}
              className="mx-auto w-full min-w-0 max-w-lg"
            >
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#180e26]/85 shadow-2xl shadow-purple-500/25 backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 font-mono text-xs text-white/60">
                    anamika.ts
                  </span>
                </div>

                <motion.pre
                  variants={container}
                  initial="hidden"
                  animate="show"
                  transition={{ delayChildren: 0.9 }}
                  className="whitespace-pre-wrap break-words p-5 font-mono text-[13px] leading-7 text-white/90 sm:p-6 sm:text-sm"
                >
                  <motion.code variants={line} className="block">
                    <span className={kw}>const</span> anamika = {"{"}
                  </motion.code>
                  <motion.code variants={line} className="block pl-4">
                    role: <span className={str}>"Software Developer"</span>,
                  </motion.code>
                  <motion.code variants={line} className="block pl-4">
                    frontend: [<span className={str}>"React"</span>,{" "}
                    <span className={str}>"Next.js"</span>,{" "}
                    <span className={str}>"TypeScript"</span>],
                  </motion.code>
                  <motion.code variants={line} className="block pl-4">
                    backend: [<span className={str}>"Node.js"</span>,{" "}
                    <span className={str}>"Express"</span>],
                  </motion.code>
                  <motion.code variants={line} className="block pl-4">
                    databases: [<span className={str}>"MongoDB"</span>,{" "}
                    <span className={str}>"MySQL"</span>],
                  </motion.code>
                  <motion.code variants={line} className="block pl-4">
                    openToWork: <span className={kw}>true</span>,
                  </motion.code>
                  <motion.code variants={line} className="block">
                    {"};"}
                  </motion.code>
                </motion.pre>
              </div>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:pt-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Technologies I work with
            </p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <motion.li
                  key={tech.name}
                  variants={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/80 backdrop-blur sm:px-3 sm:text-sm"
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-md bg-linear-to-br text-[9px] font-extrabold text-white ${tech.color}`}
                  >
                    {tech.short}
                  </span>
                  {tech.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
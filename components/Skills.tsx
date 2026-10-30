import Icon from "./Icon";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import { frontend, backend, databases, mern, mernPoints } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-pt-6 pb-12 md:pt-10 md:pb-16">
      <h2 className="text-center font-display text-5xl md:text-6xl">
        Technical <em className="text-accent">skills</em>
      </h2>
      <p className="mt-3 text-center text-muted">
        Frontend, backend and database, end to end.
      </p>
      
      <div className="mt-12 grid gap-5 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <SkillCard group={frontend} className="h-full" />
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <SkillCard group={backend} className="h-full" />
        </Reveal>

        <Reveal className="md:col-span-4">
          <div className="glass h-full rounded-3xl p-7">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-accent to-mid text-white shadow-lg">
              <Icon name="database" />
            </span>
            <small className="block text-xs font-bold uppercase tracking-wider text-muted">
              Data
            </small>
            <h3 className="font-display text-4xl md:text-5xl">Database</h3>

            <div className="mt-5 space-y-3">
              {databases.map((db) => (
                <div
                  key={db.name}
                  className="rounded-2xl border border-l-4 border-edge border-l-accent bg-glass px-4 py-3 transition hover:translate-x-1.5"
                >
                  <b className="block">{db.name}</b>
                  <span className="text-sm text-muted">{db.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-8" delay={0.1}>
          <div className="relative isolate grid h-full items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#07060d] p-7 text-white md:grid-cols-[1fr_1.3fr]">
            
            {/* Background Subtle Gradient Glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/15 blur-[100px]" />
            </div>

            <div>
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <Icon name="layers" />
              </span>
              <small className="block text-xs font-bold uppercase tracking-wider text-white/50">
                Full stack development
              </small>
              <h3 className="font-display text-4xl md:text-5xl">MERN stack</h3>
              <ul className="mt-4 space-y-1 text-white/70">
                {mernPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {mern.map((m) => (
                <div
                  key={m.letter}
                  className="rounded-2xl border border-white/10 bg-white/5 px-2 py-5 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:-rotate-3 hover:border-purple-500/40 hover:bg-white/10"
                >
                  <b className="block font-display text-5xl text-purple-200">{m.letter}</b>
                  <span className="text-xs font-semibold text-white/70">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
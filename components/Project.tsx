import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/data/project";

const realProjects = projects.filter((p) => p.kind === "real");
const personalProjects = projects.filter((p) => p.kind === "personal");

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 py-10">
      <h2 className="text-center font-display text-5xl md:text-6xl">
        Selected <em className="text-accent">projects</em>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted">
        Real projects show the interface only, because the code is private for security
        reasons. More are on the way.
      </p>

      <h3 className="mt-14 text-xs font-bold uppercase tracking-wider text-muted">
        Real projects
      </h3>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {realProjects.map((p, index) => (
          <Reveal key={p.title} delay={index * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <h3 className="mt-14 text-xs font-bold uppercase tracking-wider text-muted">
        Personal projects
      </h3>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {personalProjects.map((p, index) => (
          <Reveal key={p.title} delay={index * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
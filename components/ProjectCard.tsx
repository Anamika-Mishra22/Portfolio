import Image from "next/image";
import type { Project } from "@/data/project";

const tones: Record<Project["tone"], string> = {
  sky: "bg-linear-to-br from-sky to-accent",
  rose: "bg-linear-to-br from-rose to-accent",
  dark: "bg-linear-to-br from-[#1a1033] to-sky",
};

export default function ProjectCard({ project }: { project: Project }) {
  const isReal = project.kind === "real";

  return (
    <article className="glass flex h-full flex-col rounded-3xl p-4 transition hover:-translate-y-1.5">
      <div
        className={`relative aspect-video overflow-hidden rounded-2xl ${
          project.image ? "border border-edge" : tones[project.tone]
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm font-semibold text-white">
            Add screenshot
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        {isReal && (
          <span className="mb-3 self-start rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
            Real project, code private, UI only
          </span>
        )}

        <h3 className="font-display text-3xl leading-tight">{project.title}</h3>
        <p className="mt-2 text-muted">{project.description}</p>
        <small className="mt-3 text-sm text-muted">{project.stack.join(", ")}</small>

        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 font-bold text-accent"
          >
            {project.link.label}
          </a>
        )}
      </div>
    </article>
  );
}
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-6xl py-10">
      <h2 className="text-center font-display text-5xl md:text-6xl">
        Tools &amp; <em className="text-accent">platforms</em>
      </h2>
      <p className="mt-3 text-center text-muted">What I build, test and ship with.</p>

      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex w-max motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-3 pr-3">
              {tools.map((tool) => (
                <span key={tool} className="glass rounded-full px-6 py-3 font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-muted">
        I upload and test builds on the demo server with <b>FileZilla</b>, and keep my code in
        Git and GitHub.
      </p>
    </section>
  );
}
import { contactLinks } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 text-white sm:px-6">
      <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#07060d] px-6 py-10 sm:py-16 text-center shadow-2xl md:px-16 md:py-10">
        
        {/* Background Subtle Gradient Glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/25 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[100px]" />
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Let’s build something <em className="italic text-purple-300">good</em> together
        </h2>
        
        <p className="mt-3 text-base text-white/60 sm:text-lg">
          Open to full-time roles and freelance projects.
        </p>

        {/* Links Grid */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group relative flex w-full sm:w-52 flex-col items-center gap-1 rounded-3xl border border-white/10 bg-white/5 px-4 pb-5 pt-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-950/50"
            >
              <span className={`mb-3 grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-110 ${link.bg}`}>
                <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9 fill-white" aria-hidden="true">
                  <path d={link.path} />
                </svg>
              </span>
              <b className="text-lg text-white">{link.name}</b>
              <small className="break-all text-sm text-white/50 group-hover:text-white/80 transition-colors">{link.detail}</small>
              <span
                aria-hidden="true"
                className="absolute right-5 top-4 text-xl text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        
        {/* Footer Note */}
        <p className="mt-8 text-xs text-white/40">
          © 2026 Anamika Mishra. All rights reserved.
        </p>

      </div>
    </section>
  );
}
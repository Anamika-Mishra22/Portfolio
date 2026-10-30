const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Work with me" },
];

export default function Nav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-black/60 py-2 pl-5 pr-2 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-xl">
      <span className="text-lg font-extrabold tracking-tight">Anamika</span>

      <div className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold"
      >
        Let’s collaborate ↗
      </a>
    </nav>
  );
}
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Palette = { id: string; label: string; from: string; to: string };

const palettes: Palette[] = [
  { id: "violet", label: "Violet", from: "#a855f7", to: "#fb923c" },
  { id: "ocean", label: "Ocean", from: "#3b82f6", to: "#2dd4bf" },
  { id: "sunset", label: "Sunset", from: "#f43f5e", to: "#fbbf24" },
  { id: "mint", label: "Mint", from: "#10b981", to: "#facc15" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("violet");

  useEffect(() => {
    const saved = localStorage.getItem("palette");
    if (saved && palettes.some((p) => p.id === saved)) {
      setActive(saved);
      document.documentElement.dataset.palette = saved;
    }
  }, []);

  function choose(id: string) {
    setActive(id);
    document.documentElement.dataset.palette = id;
    localStorage.setItem("palette", id);
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
            className="glass w-48 rounded-3xl p-4"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">
              Colour theme
            </p>
            <div className="flex gap-3">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={p.label}
                  aria-pressed={active === p.id}
                  onClick={() => choose(p.id)}
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                  className={`h-9 w-9 rounded-full transition hover:scale-110 ${
                    active === p.id ? "ring-2 ring-white ring-offset-2 ring-offset-black" : ""
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Change colour theme"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="glass grid h-12 w-12 place-items-center rounded-full transition hover:rotate-12 hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10" cy="7.5" r="1" />
          <circle cx="14.5" cy="7.5" r="1" />
        </svg>
      </button>
    </div>
  );
}
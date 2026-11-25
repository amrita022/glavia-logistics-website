"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { Brand } from "./brand";

const links = [
  ["Services", "services"],
  ["Freight options", "transport"],
  // ["Comparison", "comparison"],
  ["About", "about"],
  ["Process", "process"],
  ["FAQ", "faq"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let preference;
      try { preference = localStorage.getItem("glavia-theme"); } catch {}
      document.documentElement.classList.toggle("dark", preference ? preference === "dark" : media.matches);
    };
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => { media.removeEventListener("change", sync); window.removeEventListener("storage", sync); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-3 z-50 pointer-events-none px-3.5 sm:top-5 sm:px-6 transition-all duration-300"
      onKeyDown={(e) => {
        if (open && e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      {/* Floating Glass Pill Container */}
      <div
        className={
          "pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 sm:py-2.5 " +
          (scrolled
            ? "border-panel/85 bg-surface/92 shadow-lg shadow-ink/5 backdrop-blur-xl ring-1 ring-black/5"
            : "border-panel/65 bg-surface/75 shadow-md shadow-ink/3 backdrop-blur-lg ring-1 ring-white/60")
        }
      >
        {/* Brand */}
        <div className="min-w-0">
          <Brand />
        </div>

        {/* Center Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 lg:flex lg:gap-1"
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={"#" + id}
              className="rounded-full px-2.5 lg:px-3.5 py-1.5 text-xs font-semibold text-copy transition-all hover:bg-panel/40 hover:text-ink active:scale-95"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button type="button" className="grid size-11 shrink-0 place-items-center rounded-full hover:bg-panel/50" onClick={() => {
            const dark = document.documentElement.classList.toggle("dark");
            try { localStorage.setItem("glavia-theme", dark ? "dark" : "light"); } catch {}
          }}>
            <Moon aria-hidden size={18} className="theme-moon" /><Sun aria-hidden size={18} className="theme-sun" />
            <span className="theme-moon sr-only">Use dark mode</span><span className="theme-sun sr-only">Use light mode</span>
          </button>
          <a
            href="#contact"
            className="action action-dark max-[360px]:hidden rounded-full min-h-9 px-4 py-1.5 text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            Contact <ArrowUpRight size={14} className="hidden sm:inline" />
          </a>
          <button
            type="button"
            ref={toggle}
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-full border border-panel bg-surface/80 text-ink transition hover:bg-panel/50 lg:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Navigation Dropdown Card */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        className="pointer-events-auto mx-auto mt-2 max-w-sm w-full rounded-3xl border border-panel/80 bg-surface/95 p-4 shadow-xl shadow-ink/10 backdrop-blur-2xl ring-1 ring-black/5 lg:hidden"
      >
        <div className="grid gap-1">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={"#" + id}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-panel/30 active:scale-98"
            >
              <span>{label}</span>
              <span className="text-xs text-copy/60 font-normal">#{id}</span>
            </a>
          ))}
        </div>
        <div className="mt-3 border-t border-panel/60 pt-3">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="action action-dark w-full rounded-xl text-center py-2.5 text-xs font-semibold"
          >
            Contact us <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
}

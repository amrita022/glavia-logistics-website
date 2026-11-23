"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";

const links = [
  ["Services", "services"],
  ["About", "about"],
  ["Our process", "process"],
  ["FAQ", "faq"],
] as const;
export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="relative z-20 border-b border-panel/80 bg-canvas"
      onKeyDown={(e) => {
        if (open && e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="wrap max-[360px]:px-3 flex min-h-[74px] items-center justify-between gap-1 sm:gap-4 md:min-h-[84px]">
        <Brand />
        <nav aria-label="Main navigation" className="hidden gap-9 md:flex">
          {links.map(([label, id]) => (
            <a
              className="py-3 text-sm font-medium hover:underline underline-offset-6"
              key={id}
              href={"#" + id}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="action action-dark">
            Contact us <ArrowUpRight size={16} className="hidden sm:block" />
          </a>
          <button
            type="button"
            ref={toggle}
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-lg border border-panel md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-panel bg-canvas px-5 py-3 shadow-lg md:hidden"
      >
        {links.map(([label, id]) => (
          <a
            className="block py-3 font-medium"
            key={id}
            href={"#" + id}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

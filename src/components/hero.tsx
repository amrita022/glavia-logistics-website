"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Ship, Truck, Plane, Pause, Play, ArrowUpRight } from "lucide-react";

const modes = [
  {
    id: "sea",
    name: "Sea",
    icon: Ship,
    frame: [-12, -36, 714, 350],
    alt: "At a container port, a gantry lifts cargo from a trailer onto a docked ship.",
  },
  {
    id: "road",
    name: "Road",
    icon: Truck,
    frame: [-8, -8, 776, 361],
    alt: "At a warehouse, a worker moves a parcel to a waiting truck as traffic passes.",
  },
  {
    id: "air",
    name: "Air",
    icon: Plane,
    frame: [65, -49, 847, 365],
    alt: "Ground crew load a cargo aircraft and clear the apron before takeoff.",
  },
] as const;

function sceneRoot(object: HTMLObjectElement) {
  const root = (object.contentDocument ?? object.getSVGDocument())?.documentElement;
  return root?.localName === "svg" ? root : undefined;
}

function lightScene(svg: Element) {
  svg.classList.toggle(
    "dark",
    document.documentElement.classList.contains("dark"),
  );
}

function frameScene(object: HTMLObjectElement, scene: HTMLElement, intro: HTMLElement, controls: HTMLElement) {
  const svg = sceneRoot(object);
  if (!svg) return;
  lightScene(svg);

  // Fit the complete operation inside the clear area. The same SVG continues
  // above and below that area to provide the hero background.
  const viewport = scene.getBoundingClientRect();
  if (!viewport.width || !viewport.height) return;
  const { frame: [x, y, width, height] } =
    modes.find((mode) => mode.id === object.dataset.scene) ?? modes[0];
  const introBottom = intro.getBoundingClientRect().bottom;
  const toolbar = controls.getBoundingClientRect();
  const toolbarAboveScene = toolbar.top - introBottom < 2;
  const top = (toolbarAboveScene ? toolbar.bottom : introBottom) - viewport.top + 12;
  const bottom = (toolbarAboveScene ? viewport.bottom : toolbar.top) - viewport.top - 10;
  const available = Math.max(1, bottom - top);
  const scale = Math.min(viewport.width / width, available / height);
  const slack = Math.max(0, available - height * scale);
  const offset = top + slack * (viewport.width < 640 ? 0.25 : 0.64);
  const viewWidth = viewport.width / scale;
  const viewX = x + (width - viewWidth) / 2;
  const viewY = y - offset / scale;
  svg.setAttribute("viewBox", `${viewX} ${viewY} ${viewWidth} ${viewport.height / scale}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  const headline = intro.querySelector("h1")?.getBoundingClientRect();
  const copy = intro.getBoundingClientRect();
  if (headline) {
    const paragraph = intro.querySelector("p")?.getBoundingClientRect() ?? headline;
    const margin = Math.min(headline.left, paragraph.left) - viewport.left;
    const detailWidth = Math.min(object.dataset.scene === "sea" ? 180 : 350, margin - 32);
    for (const side of ["left", "right"] as const) {
      const detail = svg.querySelector(`#hero-detail-${side}`);
      if (!detail) continue;
      const visible = viewport.width >= 768 && detailWidth >= 72;
      detail.setAttribute("visibility", visible ? "visible" : "hidden");
      if (!visible) continue;
      const left = side === "left";
      const screenX = (left ? margin / 2 : viewport.width - margin / 2);
      const screenY = copy.top - viewport.top + copy.height * (left ? 0.68 : 0.88);
      detail.setAttribute("transform", `translate(${viewX + screenX / scale} ${viewY + screenY / scale}) scale(${detailWidth / ((object.dataset.scene === "sea" ? 96 : 132) * scale)})`);
    }
  }
  object.dataset.framed = "true";
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const scene = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mode = modes[index];
  const stopped = paused || !!reduced || !visible;

  // Auto-advance scenes every 8 seconds when playing
  useEffect(() => {
    if (stopped) return;
    const interval = setInterval(() => {
      setIndex((curr) => (curr + 1) % modes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [stopped, index]);

  useEffect(() => {
    const syncLighting = () => scene.current?.querySelectorAll("object").forEach((object) => {
      const svg = sceneRoot(object);
      if (svg) lightScene(svg);
    });
    const observer = new MutationObserver(syncLighting);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    syncLighting();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stage = scene.current;
    const copy = intro.current;
    const toolbar = controls.current;
    if (!stage || !copy || !toolbar) return;

    const resize = new ResizeObserver(() =>
      stage.querySelectorAll("object").forEach((object) => frameScene(object, stage, copy, toolbar)),
    );
    [stage, copy, toolbar].forEach((element) => resize.observe(element));
    const intersection = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    intersection.observe(stage);
    return () => {
      resize.disconnect();
      intersection.disconnect();
    };
  }, []);

  useEffect(() => {
    scene.current?.querySelectorAll("object").forEach((object) =>
      sceneRoot(object)?.classList.toggle("paused", stopped),
    );
  }, [stopped, index]);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col bg-canvas pt-28 sm:pt-[clamp(7.5rem,16svh,11rem)]"
    >
      {/* Dynamic Ambient Brand Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="h-[420px] w-[700px] rounded-full bg-gradient-to-tr from-primary/20 via-[#00acc4]/12 to-transparent blur-3xl opacity-50 animate-pulse duration-7000" />
        <div className="absolute top-1/4 h-[300px] w-[450px] rounded-full bg-primary/10 blur-2xl opacity-40" />
      </div>

      {/* Interactive Freight Scene */}
      <div
        ref={scene}
        role="img"
        aria-label={mode.alt}
        className="pointer-events-none absolute inset-0 -z-10 select-none"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={mode.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.45 }}
            className="absolute inset-0 bg-canvas"
          >
            <object
              tabIndex={-1}
              aria-hidden="true"
              data-scene={mode.id}
              data={`/scenes/${mode.id}.svg`}
              type="image/svg+xml"
              onLoad={({ currentTarget }) => {
                if (scene.current && intro.current && controls.current) {
                  frameScene(currentTarget, scene.current, intro.current, controls.current);
                }
                sceneRoot(currentTarget)?.classList.toggle("paused", stopped);
              }}
              className="block h-full w-full opacity-0 data-[framed=true]:opacity-100"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Balanced Upper Readability Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(32rem,58%)] bg-gradient-to-b from-canvas/92 via-canvas/45 to-transparent md:mask-[linear-gradient(to_right,transparent,#000_28%,#000_72%,transparent)]"
      />

      {/* Hero Copy & Actions */}
      <div ref={intro} className="mx-auto flex w-full flex-col items-center px-4 text-center sm:px-8">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-balance text-[clamp(2.1rem,4.6vw,6.2rem)] leading-[1.02] font-semibold tracking-[-.07em]"
        >
          Connecting markets.
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-ink via-[#006080] to-primary bg-clip-text text-transparent">
            Moving business forward.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 max-w-[38rem] text-balance text-sm leading-relaxed text-copy sm:text-base md:mt-5 lg:text-lg"
        >
          Your logistics partner for moving goods across borders with confidence, transparency, and efficiency.
        </motion.p>

        {/* Hero Interactive Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="action action-dark rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md shadow-solid/15 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[.98]"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-panel bg-surface/85 px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink shadow-xs backdrop-blur-sm transition-all hover:border-primary hover:bg-surface hover:text-accent-text hover:scale-[1.02] active:scale-[.98]"
          >
            <span>Consultation</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <p aria-live="polite" className="sr-only">{mode.alt}</p>
      </div>

      {/* Spacer where the freight animation takes center stage */}
      <div
        aria-hidden="true"
        className="min-h-[clamp(14rem,min(30vw,40svh),32rem)] flex-1 max-md:order-last"
      />

      {/* Bottom Scene Controls */}
      <div
        ref={controls}
        className="flex flex-col items-center sm:items-start w-full px-4 pt-2 pb-5 sm:px-8 md:pb-7 lg:px-12"
      >
        {/* Toolbar Switcher with Live Active Progress Bar */}
        <div className="flex w-fit max-w-full items-center gap-1 rounded-2xl border border-panel/75 bg-surface/90 backdrop-blur-md p-1 shadow-sm sm:gap-2">
          <div role="group" aria-label="Transport scene" className="flex items-center gap-1">
            {modes.map(({ id, name, icon: Icon }, i) => (
              <button
                key={id}
                type="button"
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={`relative flex min-h-11 items-center justify-center gap-1.5 overflow-hidden rounded-xl px-2.5 text-xs font-semibold transition-all sm:px-4 sm:text-sm ${
                  i === index
                    ? "bg-solid text-white shadow-xs"
                    : "text-copy hover:bg-panel/50 hover:text-ink"
                }`}
              >
                <Icon size={15} aria-hidden="true" className={i === index ? "text-primary" : ""} />
                <span>{name}</span>
                {!stopped && i === index && (
                  <motion.div
                    key={`bar-${index}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play scene motion" : "Pause scene motion"}
            aria-pressed={paused}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-panel/70 text-ink transition-colors hover:bg-panel/50 motion-reduce:hidden"
          >
            {paused ? <Play size={15} className="text-primary" /> : <Pause size={15} />}
          </button>
        </div>
      </div>
    </section>
  );
}

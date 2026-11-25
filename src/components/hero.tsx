"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Ship, Truck, Plane, Pause, Play } from "lucide-react";

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
    <section aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col bg-canvas pt-28 sm:pt-[clamp(8rem,18svh,12rem)]">
      <div ref={scene} role="img" aria-label={mode.alt}
        className="pointer-events-none absolute inset-0 -z-10 select-none">
        <AnimatePresence initial={false}>
          <motion.div key={mode.id}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.4 }}
            className="absolute inset-0 bg-canvas">
            <object tabIndex={-1} aria-hidden="true" data-scene={mode.id}
              data={`/scenes/${mode.id}.svg`} type="image/svg+xml"
              onLoad={({ currentTarget }) => {
                if (scene.current && intro.current && controls.current) {
                  frameScene(currentTarget, scene.current, intro.current, controls.current);
                }
                sceneRoot(currentTarget)?.classList.toggle("paused", stopped);
              }}
              className="block h-full w-full opacity-0 data-[framed=true]:opacity-100" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(34rem,62%)] bg-gradient-to-b from-canvas via-canvas/85 to-transparent md:mask-[linear-gradient(to_right,transparent,#000_34%,#000_66%,transparent)]" />

      <div ref={intro} className="mx-auto flex w-full flex-col items-center px-4 text-center sm:px-8">
        <h1 id="hero-title" className="text-balance text-[clamp(2rem,4.7vw,6.5rem)] leading-[1.02] font-semibold tracking-[-.07em]">
          Connecting markets.
          <br className="hidden sm:block" /> Moving business forward.
        </h1>
        <p className="mt-4 max-w-[37rem] text-balance text-sm leading-relaxed text-copy sm:text-base md:mt-6 lg:text-lg">
          Your logistics partner for moving goods across borders with confidence, transparency, and efficiency.
        </p>
        <p aria-live="polite" className="sr-only">{mode.alt}</p>
      </div>

      <div aria-hidden="true" className="min-h-[clamp(16rem,min(34vw,44svh),35rem)] flex-1 max-md:order-last" />
      <div ref={controls} className="flex w-full px-4 pt-2 pb-5 max-md:justify-center max-md:pt-4 max-md:pb-0 sm:px-8 md:pb-7 lg:px-12">
        <div className="flex w-fit max-w-full items-center gap-1 rounded-2xl border border-panel/75 bg-surface p-1 shadow-sm sm:gap-2">
          <div role="group" aria-label="Transport scene" className="flex items-center gap-1">
            {modes.map(({ id, name, icon: Icon }, i) => (
              <button key={id} type="button" aria-pressed={i === index} onClick={() => setIndex(i)}
                className={`flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-2.5 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${i === index
                  ? "bg-solid text-white"
                  : "text-copy hover:bg-panel/50 hover:text-ink"}`}>
                <Icon size={15} aria-hidden="true" />
                {name}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play scene motion" : "Pause scene motion"} aria-pressed={paused}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-panel/70 text-ink transition-colors hover:bg-panel/50 motion-reduce:hidden">
            {paused ? <Play size={15} /> : <Pause size={15} />}
          </button>
        </div>
      </div>
    </section>
  );
}

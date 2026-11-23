"use client";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Ship,
  Truck,
  Plane,
  Pause,
  Play,
} from "lucide-react";

const modes = [
  {
    id: "sea",
    name: "Sea",
    icon: Ship,
    title: "Sea freight & container port",
    copy: "Vessel coordination, quayside gantry operations, and container clearance.",
    alt: "At the quayside, a gantry lifts a container from its trailer, places it on the ship and retracts before the vessel departs.",
  },
  {
    id: "road",
    name: "Road",
    icon: Truck,
    title: "Road freight & warehousing",
    copy: "Domestic transport, warehouse logistics, and door-to-door coordination.",
    alt: "At a warehouse, a worker carries a parcel to the waiting truck while delivery traffic passes.",
  },
  {
    id: "air",
    name: "Air",
    icon: Plane,
    title: "Air freight",
    copy: "Air cargo scheduling, apron ramp operations, and rapid shipment documentation.",
    alt: "Ground crew load a parcel into a cargo aircraft before a service van clears the apron and the plane takes off.",
  },
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const scene = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mode = modes[index];
  const stopped = paused || !!reduced || !visible;

  useEffect(() => {
    if (!scene.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(scene.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    scene.current
      ?.querySelectorAll("object")
      .forEach((object) =>
        object.contentDocument?.documentElement.classList.toggle(
          "paused",
          stopped,
        ),
      );
  }, [stopped, index]);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[108svh] min-h-[740px] sm:min-h-[800px] lg:min-h-[880px] xl:min-h-[960px] flex-col justify-between overflow-hidden bg-canvas"
    >
      {/* 1. Full-bleed Animated Logistics Background */}
      <div
        ref={scene}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={mode.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <object
              tabIndex={-1}
              aria-label={mode.alt}
              data={`/scenes/${mode.id}.svg`}
              type="image/svg+xml"
              onLoad={(e) =>
                e.currentTarget.contentDocument?.documentElement.classList.toggle(
                  "paused",
                  stopped,
                )
              }
              className="pointer-events-none h-full w-full object-cover"
            >
              {mode.alt}
            </object>
          </motion.div>
        </AnimatePresence>

        {/* Ambient readability overlay: soft radial glow behind text to guarantee contrast without concealing the port animation */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,rgba(243,247,255,0.85)_0%,rgba(243,247,255,0.65)_50%,rgba(243,247,255,0.15)_85%,transparent_100%)]" />

        {/* Subtle top fade for smooth header continuity */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-canvas/90 via-canvas/40 to-transparent" />

        {/* Subtle bottom fade to ground the floating dock and transition into the services section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent" />
      </div>

      {/* 2. Original Text Content, Typography & Positioning */}
      <div className="wrap relative z-10 flex flex-col items-center pt-32 sm:pt-36 md:pt-44 text-center">
        <h1
          id="hero-title"
          className="text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[.99] font-semibold tracking-[-.07em]"
        >
          Connecting markets.
          <br />
          Moving business forward.
        </h1>
        <p className="mt-5 max-w-[590px] text-base leading-relaxed text-copy md:text-lg">
          Your logistics partner for moving goods across borders with
          confidence, transparency, and efficiency.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          <a className="action action-dark" href="#services">
            Explore services <ArrowRight size={16} />
          </a>
          <a
            className="action border border-ink/20 bg-canvas hover:border-ink"
            href="#process"
          >
            Our process <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* 3. Transport Scene Interactive Glass Dock */}
      <div className="relative z-10 w-full pb-6 pt-2 sm:pb-8">
        <div className="wrap">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-panel/75 bg-white/80 p-2 shadow-sm backdrop-blur-md sm:p-2.5">
            <div
              role="group"
              aria-label="Transport scene"
              className="inline-flex gap-1 rounded-xl border border-panel/60 bg-canvas/90 p-1"
            >
              {modes.map((item, i) => (
                <button
                  key={item.id}
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={
                    "flex min-h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition sm:min-h-10 sm:px-4 sm:text-sm " +
                    (i === index
                      ? "bg-ink text-white shadow-xs"
                      : "text-copy hover:bg-panel/50 hover:text-ink")
                  }
                >
                  <item.icon size={15} />
                  {item.name}
                </button>
              ))}
            </div>

            <p
              aria-live="polite"
              className="order-last w-full text-center text-xs text-copy sm:order-none sm:w-auto sm:flex-1 sm:px-4 sm:text-left sm:text-sm"
            >
              <strong className="mr-1.5 font-semibold text-ink">{mode.title}</strong>
              <span className="hidden sm:inline">— </span>
              {mode.copy}
            </p>

            <button
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play scene motion" : "Pause scene motion"}
              aria-pressed={paused}
              className="grid size-10 place-items-center rounded-xl border border-panel/70 bg-white/70 text-ink transition hover:bg-panel/50 hover:border-panel motion-reduce:hidden sm:size-11"
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

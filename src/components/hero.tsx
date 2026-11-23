"use client";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Truck,
  Ship,
  Plane,
  Pause,
  Play,
} from "lucide-react";

const modes = [
  {
    id: "road",
    name: "Road",
    icon: Truck,
    title: "Road coordination",
    copy: "Shipment planning and door-to-door coordination.",
    alt: "Illustrated loading yard with delivery trucks, warehouse bays and workers moving freight.",
  },
  {
    id: "sea",
    name: "Sea",
    icon: Ship,
    title: "Sea freight",
    copy: "Sea freight coordination for import and export shipments.",
    alt: "Illustrated dock with a container ship, working crane and cargo handlers.",
  },
  {
    id: "air",
    name: "Air",
    icon: Plane,
    title: "Air freight",
    copy: "Air freight planning and shipment documentation.",
    alt: "Illustrated air cargo terminal with an aircraft, ground crew and cargo carts.",
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
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <div className="wrap relative z-10 flex flex-col items-center pt-12 text-center md:pt-16">
        <p className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[.17em] text-copy uppercase sm:text-xs">
          <span className="h-2 w-2 rounded-sm bg-primary ring-1 ring-ink/20" />
          Freight forwarding & customs clearance
        </p>
        <h1
          id="hero-title"
          className="mt-5 text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[.99] font-semibold tracking-[-.07em]"
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
      <div
        ref={scene}
        className="relative mx-auto -mt-1 h-[205px] max-w-[1800px] sm:-mt-3 sm:h-[300px] lg:-mt-16 lg:h-[385px] xl:-mt-24 xl:h-[410px]"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={mode.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.28 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <object
              tabIndex={-1}
              aria-label={mode.alt}
              data={"/scenes/" + mode.id + ".svg"}
              type="image/svg+xml"
              onLoad={(e) =>
                e.currentTarget.contentDocument?.documentElement.classList.toggle(
                  "paused",
                  stopped,
                )
              }
              className="pointer-events-none h-full w-full"
            >
              {mode.alt}
            </object>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="border-y border-panel bg-white/45">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-4 sm:justify-between">
          <div
            role="group"
            aria-label="Transport scene"
            className="inline-flex gap-1 rounded-xl border border-panel bg-canvas p-1"
          >
            {modes.map((item, i) => (
              <button
                key={item.id}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={
                  "flex min-h-10 items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold transition sm:px-5 " +
                  (i === index ? "bg-ink text-white" : "hover:bg-panel/60")
                }
              >
                <item.icon size={16} />
                {item.name}
              </button>
            ))}
          </div>
          <p
            aria-live="polite"
            className="order-last w-full text-center text-sm text-copy sm:order-none sm:w-auto sm:flex-1 sm:text-left"
          >
            <strong className="mr-2 text-ink">{mode.title}</strong>
            {mode.copy}
          </p>
          <button
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play scene motion" : "Pause scene motion"}
            aria-pressed={paused}
            className="grid size-11 place-items-center rounded-full border border-panel hover:bg-panel/50 motion-reduce:hidden"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import {
  Ship,
  Plane,
  Truck,
  Zap,
  DollarSign,
  Package,
  Layers,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
  Clock,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { enquiry } from "../lib/company";

interface FreightMode {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: typeof Ship;
  badge: string;
  goalLabel: string;
  goalIcon: typeof Zap;
  speedRating: number; // 1-100
  speedLabel: string;
  costRating: number; // 1-100
  costLabel: string;
  costStars: string;
  capacityLabel: string;
  capacityDetail: string;
  bestFor: string;
  advantages: string[];
  clearanceNote: string;
  idealForCargo: string[];
}

const modes: FreightMode[] = [
  {
    id: "ocean-fcl",
    name: "Ocean Freight (Full Container Load • FCL)",
    shortName: "Ocean FCL",
    tagline: "Maximum volume economy for dedicated 20ft & 40ft containers.",
    icon: Ship,
    badge: "Lowest Cost / Ton",
    goalLabel: "Maximum Cost Savings & Bulk Volume",
    goalIcon: DollarSign,
    speedRating: 38,
    speedLabel: "14 – 28 Days (Maritime)",
    costRating: 20,
    costLabel: "Most Economical",
    costStars: "★☆☆☆☆",
    capacityLabel: "Up to 28,000 kg per container",
    capacityDetail: "Standard 20ft, 40ft & 40ft High Cube containers",
    bestFor: "High-volume manufacturing shipments, raw materials, heavy equipment, and bulk exports.",
    advantages: [
      "Lowest shipping cost per ton for global trade routes",
      "Dedicated sealed container with zero risk of co-loader contamination",
      "Direct Port Delivery (DPD) eligible at Nhava Sheva & Mundra",
      "Predictable scheduled carrier sailings across premier alliances",
    ],
    clearanceNote: "Pre-filing Bill of Entry on ICEGATE allows cargo to move directly from vessel to factory gate, avoiding CFS dwell fees.",
    idealForCargo: ["Industrial Machinery", "Automotive Assemblies", "Chemicals & Plastics", "Consumer Goods"],
  },
  {
    id: "air-priority",
    name: "Air Freight (Priority & Express Cargo)",
    shortName: "Air Priority",
    tagline: "Rapid international transit for urgent and high-value consignments.",
    icon: Plane,
    badge: "Fastest Transit",
    goalLabel: "Critical Timeline & Urgent Deadline",
    goalIcon: Zap,
    speedRating: 96,
    speedLabel: "1 – 4 Days (Air Cargo)",
    costRating: 90,
    costLabel: "Premium Priority",
    costStars: "★★★★★",
    capacityLabel: "Palletized & Loose Cargo",
    capacityDetail: "Unit Load Devices (ULD), LD3/LD7 containers & bulk air cargo",
    bestFor: "Time-sensitive engineering spares, high-value electronics, pharmaceuticals, and urgent client samples.",
    advantages: [
      "Fastest transit available with daily scheduled flights",
      "Temperature-controlled cold-chain options (2°C–8°C & 15°C–25°C)",
      "Strict airport security and reduced handling risk",
      "Immediate customs examination at Mumbai (BOM) & Delhi (DEL) ACC",
    ],
    clearanceNote: "24/7 dedicated customs appraisal at Sahar Air Cargo Complex ensures out-of-charge clearance within hours of flight touchdown.",
    idealForCargo: ["Life-Saving Pharma", "Critical Machine Spares", "Aerospace Parts", "High-Value Electronics"],
  },
  {
    id: "ocean-lcl",
    name: "Ocean Freight (Less than Container Load • LCL)",
    shortName: "Ocean LCL",
    tagline: "Pay only for the exact cubic volume (CBM) your cargo occupies.",
    icon: Layers,
    badge: "Flexible Volume",
    goalLabel: "Small Batches & Shared Pallets",
    goalIcon: Package,
    speedRating: 32,
    speedLabel: "16 – 30 Days (Consolidated)",
    costRating: 35,
    costLabel: "Pay per CBM",
    costStars: "★★☆☆☆",
    capacityLabel: "1 to 15 Cubic Metres (CBM)",
    capacityDetail: "Consolidated pallets, crates, and boxed consignments",
    bestFor: "Growing exporters, periodic inventory replenishment, and trial overseas consignments without full container commitments.",
    advantages: [
      "No need to wait until you have enough cargo to fill a whole container",
      "Calculated purely on space used (weight or cubic measurement)",
      "Reliable weekly consolidation boxes to Europe, US, and Middle East",
      "De-stuffing and individual delivery coordination at destination CFS",
    ],
    clearanceNote: "We manage the consolidation manifest audit and individual cargo examination at destination CFS seamlessly.",
    idealForCargo: ["Apparel & Textiles", "Small Hardware Pallets", "Specialty Spices", "Test Production Batches"],
  },
  {
    id: "multimodal-road",
    name: "Multimodal Road & Rail (Factory-to-Port)",
    shortName: "Road & Rail",
    tagline: "Seamless domestic connectivity between factory gates and ports.",
    icon: Truck,
    badge: "Factory-to-Gate",
    goalLabel: "Pan-India Domestic & Port Transit",
    goalIcon: Scale,
    speedRating: 75,
    speedLabel: "2 – 6 Days (Pan-India)",
    costRating: 30,
    costLabel: "Standard Domestic",
    costStars: "★★☆☆☆",
    capacityLabel: "Trailers & Dedicated Fleets",
    capacityDetail: "20ft/40ft trailers, 32ft multi-axle trucks, and container trains",
    bestFor: "Inland manufacturing hubs connecting to Nhava Sheva, Mundra, or Inland Container Depots (ICDs).",
    advantages: [
      "Direct door-to-port loading with zero intermediate handling",
      "GPS tracking and automated transit milestone reporting",
      "Compliant E-Way Bill generation and GST verification",
      "Bonded truck movement under customs seal between dry ports and gateways",
    ],
    clearanceNote: "Factory stuffing with customs RFID electronic seals enables swift green-channel entry at gateway port terminals.",
    idealForCargo: ["Factory Finished Goods", "Heavy Fabrication", "Inland Port Feeders", "Agricultural Commodities"],
  },
];

export function ModeComparison() {
  const [activeModeId, setActiveModeId] = useState<string>("ocean-fcl");
  const [viewMode, setViewMode] = useState<"interactive" | "grid">("interactive");

  const current = modes.find((m) => m.id === activeModeId) || modes[0];

  return (
    <section id="comparison" className="border-t border-panel/80 bg-white/70 py-16 md:py-24">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Smart Mode Matcher</p>
            <h2 className="heading mt-4">
              Find the right freight mode
              <br className="hidden sm:inline" /> for your timeline & budget.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-copy">
              Explore speed ratings, cost indices, and clearance protocols across ocean, air, and multimodal transport to pinpoint your optimal shipping strategy.
            </p>
            {/* View Switcher Pills */}
            <div className="mt-4 inline-flex items-center rounded-xl border border-panel bg-canvas p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("interactive")}
                className={
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all " +
                  (viewMode === "interactive"
                    ? "bg-ink text-white shadow-xs"
                    : "text-copy hover:text-ink")
                }
              >
                <SlidersHorizontal size={13} />
                <span>Interactive Matcher</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all " +
                  (viewMode === "grid"
                    ? "bg-ink text-white shadow-xs"
                    : "text-copy hover:text-ink")
                }
              >
                <Sparkles size={13} />
                <span>Side-by-Side View</span>
              </button>
            </div>
          </div>
        </div>

        {/* View 1: Interactive Mode Matcher */}
        {viewMode === "interactive" && (
          <div className="mt-10 space-y-8">
            {/* Quick Goal Selectors */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-copy uppercase block mb-3">
                Select your primary shipping priority:
              </span>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {modes.map((m) => {
                  const active = m.id === activeModeId;
                  const GoalIcon = m.goalIcon;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveModeId(m.id)}
                      className={
                        "flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 " +
                        (active
                          ? "border-ink bg-ink text-white shadow-sm ring-2 ring-primary/40 -translate-y-0.5"
                          : "border-panel/80 bg-white text-ink hover:border-primary hover:bg-canvas/60")
                      }
                    >
                      <span
                        className={
                          "grid size-9 shrink-0 place-items-center rounded-lg transition-colors " +
                          (active ? "bg-white/15 text-primary" : "bg-canvas text-ink border border-panel/70")
                        }
                      >
                        <GoalIcon size={17} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-medium opacity-80 truncate">
                          {m.shortName}
                        </div>
                        <div className="text-xs font-bold leading-tight line-clamp-1">
                          {m.goalLabel}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Mode Showcase Card */}
            <div className="rounded-2xl border border-panel bg-white p-5 shadow-sm sm:p-8 lg:p-9 transition-all">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr]">
                {/* Left Column: Details & Checkpoints */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="grid size-11 place-items-center rounded-xl bg-ink text-white shadow-2xs">
                      <current.icon size={22} strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                          {current.name}
                        </h3>
                      </div>
                      <span className="inline-block mt-0.5 rounded-full bg-primary/25 px-2.5 py-0.5 text-[11px] font-semibold text-ink">
                        {current.badge}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-copy font-normal">
                    {current.tagline}
                  </p>

                  <div className="mt-4 rounded-xl bg-canvas p-3.5 border border-panel/60 text-xs text-ink leading-relaxed">
                    <strong className="block text-[11px] font-semibold uppercase tracking-wider text-copy mb-1">
                      Best Suited For
                    </strong>
                    {current.bestFor}
                  </div>

                  {/* Advantages Checkpoints */}
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-copy mb-3">
                      Operational Advantages
                    </div>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {current.advantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-2 text-xs font-medium text-ink leading-relaxed">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal Cargo Tags */}
                  <div className="mt-6 pt-5 border-t border-panel/50">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-copy block mb-2">
                      Common Cargo Types
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {current.idealForCargo.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-panel/30 border border-panel/60 px-2.5 py-1 text-xs font-medium text-ink"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Visual Meters & Action */}
                <div className="flex flex-col justify-between rounded-xl bg-canvas/70 border border-panel/80 p-5 sm:p-6">
                  <div className="space-y-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-ink border-b border-panel/60 pb-2 flex items-center justify-between">
                      <span>Performance Metrics</span>
                      <span className="text-[10px] font-normal text-copy">Real-World Benchmarks</span>
                    </div>

                    {/* Speed Meter */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-ink flex items-center gap-1.5">
                          <Clock size={13} className="text-primary" /> Transit Velocity
                        </span>
                        <span className="font-bold text-ink">{current.speedLabel}</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-panel/50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-500 transition-all duration-500"
                          style={{ width: `${current.speedRating}%` }}
                        />
                      </div>
                    </div>

                    {/* Cost Profile */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-ink flex items-center gap-1.5">
                          <DollarSign size={13} className="text-emerald-600" /> Cost Index
                        </span>
                        <span className="font-bold text-ink flex items-center gap-1">
                          <span>{current.costLabel}</span>
                          <span className="text-[11px] text-amber-600 font-mono">{current.costStars}</span>
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-panel/50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${current.costRating}%` }}
                        />
                      </div>
                    </div>

                    {/* Capacity Indicator */}
                    <div className="rounded-lg bg-white p-3 border border-panel/70">
                      <span className="text-[11px] font-semibold text-copy uppercase tracking-wider block mb-0.5">
                        Capacity Profile
                      </span>
                      <span className="text-xs font-bold text-ink block">{current.capacityLabel}</span>
                      <span className="text-[11px] text-copy mt-0.5 block">{current.capacityDetail}</span>
                    </div>

                    {/* Clearance Ground Note */}
                    <div className="rounded-lg bg-primary/15 p-3 border border-primary/40 text-xs text-ink">
                      <div className="flex items-center gap-1.5 font-bold text-[11px] text-ink uppercase tracking-wider mb-1">
                        <ShieldCheck size={14} className="text-primary" />
                        Glavia Clearance Protocol
                      </div>
                      <p className="text-copy text-[11px] leading-relaxed">
                        {current.clearanceNote}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 pt-4 border-t border-panel/60">
                    <a
                      href={enquiry(`Enquiry for ${current.name}`)}
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-white transition hover:bg-ink/90 active:scale-[.99]"
                    >
                      <span>Inquire About {current.shortName}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Side-by-Side Responsive Cards (No Table, No Horizontal Scroll) */}
        {viewMode === "grid" && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modes.map((m) => (
              <div
                key={m.id}
                className="group flex flex-col justify-between rounded-2xl border border-panel bg-white p-5 shadow-2xs transition-all hover:-translate-y-1 hover:border-primary hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-canvas border border-panel text-ink transition-colors group-hover:bg-primary/25 group-hover:border-primary">
                      <m.icon size={20} strokeWidth={1.7} />
                    </span>
                    <span className="rounded-full bg-primary/25 px-2 py-0.5 text-[10px] font-semibold text-ink">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-ink">
                    {m.shortName}
                  </h3>
                  <p className="mt-1 text-xs text-copy line-clamp-2">
                    {m.tagline}
                  </p>

                  {/* Meters */}
                  <div className="mt-4 space-y-2.5 border-t border-panel/50 pt-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-copy font-medium">Speed:</span>
                        <span className="font-semibold text-ink">{m.speedLabel}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-panel/50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${m.speedRating}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-copy font-medium">Cost:</span>
                        <span className="font-semibold text-ink">{m.costLabel}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-panel/50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-500"
                          style={{ width: `${m.costRating}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mt-4 rounded-lg bg-canvas p-2.5 border border-panel/50 text-[11px] text-copy leading-relaxed">
                    <strong className="block text-[10px] font-semibold uppercase text-ink mb-0.5">
                      Best For
                    </strong>
                    {m.bestFor}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-panel/50">
                  <a
                    href={enquiry(`Enquiry for ${m.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-primary transition-colors"
                  >
                    Select {m.shortName} <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

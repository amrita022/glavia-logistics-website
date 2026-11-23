import { Ship, Plane, Truck, HelpCircle } from "lucide-react";

const comparisons = [
  {
    mode: "Ocean Freight (FCL)",
    icon: Ship,
    bestFor: "High-volume cargo, standard manufacturing exports & full container loads.",
    speed: "Economy (14–28 days)",
    cost: "Most Cost-Effective",
    capacity: "20ft & 40ft High-Cube Containers",
    clearance: "Bill of Lading, EDI bill of entry, port CFS destuffing & delivery.",
    badge: "Maximum Volume",
  },
  {
    mode: "Ocean Freight (LCL)",
    icon: Ship,
    bestFor: "Shared container consignments, small pallets & growing exporters.",
    speed: "Standard (16–30 days)",
    cost: "Pay per CBM / Weight",
    capacity: "1 to 15 Cubic Metres (CBM)",
    clearance: "Consolidation manifest audit, CFS de-groupage & individual clearance.",
    badge: "Flexible Volume",
  },
  {
    mode: "Air Freight Priority",
    icon: Plane,
    bestFor: "Time-critical machinery parts, high-value electronics & pharmaceuticals.",
    speed: "Express (1–4 days)",
    cost: "Premium Speed",
    capacity: "Palletized air cargo & loose cartons",
    clearance: "24/7 air cargo complex examination, priority appraisal & swift dispatch.",
    badge: "Fastest Transit",
  },
  {
    mode: "Multimodal Road & Rail",
    icon: Truck,
    bestFor: "Pan-India factory-to-port connections & domestic distribution.",
    speed: "Direct (2–6 days)",
    cost: "Predictable Domestic Rates",
    capacity: "Dedicated trucks & container trailers",
    clearance: "E-Way bill generation, GST compliance & inland dry port transit.",
    badge: "Door-to-Door",
  },
];

export function ModeComparison() {
  return (
    <section id="comparison" className="border-t border-panel/80 bg-white/70 py-16 md:py-24">
      <div className="wrap">
        <div>
          <p className="eyebrow">Decision Matrix</p>
          <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
            <h2 className="heading">
              Comparing freight modes
              <br className="hidden md:block" /> for your shipment.
            </h2>
            <p className="max-w-sm leading-relaxed text-copy">
              Assess speed, capacity, and cost profile across ocean, air, and multimodal road transport to find the right balance for your cargo.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="min-w-[760px] grid gap-4">
            {comparisons.map((c) => (
              <div
                key={c.mode}
                className="group grid grid-cols-12 items-center gap-4 rounded-2xl border border-panel bg-canvas/60 p-5 transition-all hover:border-primary hover:bg-white hover:shadow-sm"
              >
                {/* Mode & Badge */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-panel bg-white text-ink transition-colors group-hover:border-primary group-hover:bg-primary/20">
                    <c.icon size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink sm:text-base">
                      {c.mode}
                    </h3>
                    <span className="inline-block mt-0.5 rounded-full bg-primary/25 px-2 py-0.5 text-[10px] font-semibold text-ink">
                      {c.badge}
                    </span>
                  </div>
                </div>

                {/* Best For */}
                <div className="col-span-3 text-xs leading-relaxed text-copy">
                  <strong className="block text-ink text-[11px] uppercase tracking-wider mb-0.5">
                    Best Suited For
                  </strong>
                  {c.bestFor}
                </div>

                {/* Speed & Cost */}
                <div className="col-span-3 text-xs leading-relaxed">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    {c.speed}
                  </div>
                  <div className="mt-1 text-copy text-[11px]">
                    Cost: <span className="font-medium text-ink">{c.cost}</span>
                  </div>
                  <div className="text-copy text-[11px]">
                    Capacity: <span className="font-medium text-ink">{c.capacity}</span>
                  </div>
                </div>

                {/* Clearance Focus */}
                <div className="col-span-3 text-xs leading-relaxed text-copy border-l border-panel/50 pl-4">
                  <strong className="block text-ink text-[11px] uppercase tracking-wider mb-0.5">
                    Clearance Handling
                  </strong>
                  {c.clearance}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-panel/70 bg-panel/20 p-4 text-xs text-copy">
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="text-primary shrink-0" />
            <span>Unsure which mode suits your cargo volume and delivery deadline?</span>
          </div>
          <a
            href="mailto:Sureshb@glavialogistic.com?subject=Freight%20Mode%20Recommendation%20Enquiry"
            className="font-semibold text-ink hover:underline inline-flex items-center gap-1"
          >
            Ask our team for a mode recommendation →
          </a>
        </div>
      </div>
    </section>
  );
}

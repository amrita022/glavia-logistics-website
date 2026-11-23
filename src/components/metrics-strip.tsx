import { ShieldCheck, Anchor, Clock, Globe2, Activity } from "lucide-react";

const metrics = [
  {
    value: "35+",
    unit: "Years",
    label: "Industry Leadership",
    detail: "Led by former UPS Country Brokerage Manager with deep cross-border expertise.",
    icon: ShieldCheck,
  },
  {
    value: "120+",
    unit: "Lanes",
    label: "Global Trade Reach",
    detail: "Coordinated maritime and air connections across Americas, Europe, UAE, and Asia.",
    icon: Globe2,
  },
  {
    value: "< 24h",
    unit: "Average",
    label: "Clearance Coordination",
    detail: "Pre-arrival documentation audits to minimize port dwell time and demurrage.",
    icon: Clock,
  },
  {
    value: "100%",
    unit: "Verified",
    label: "Regulatory Compliance",
    detail: "Strict adherence to Indian Customs (ICEGATE) and international trade laws.",
    icon: Anchor,
  },
];

const liveHubs = [
  { name: "Nhava Sheva (JNPT)", status: "Active & Fluid", mode: "Sea" },
  { name: "Mumbai ACC Sahar", status: "24/7 Operations", mode: "Air" },
  { name: "Mundra Port", status: "Operational", mode: "Sea" },
  { name: "Delhi IGI Cargo", status: "Regular Flow", mode: "Air" },
];

export function MetricsStrip() {
  return (
    <section aria-label="Operational credentials and key statistics" className="border-b border-panel/70 bg-white/70 backdrop-blur-md">
      {/* Live Hubs Ticker Bar */}
      <div className="border-b border-panel/40 bg-panel/20 py-2.5 text-xs text-copy">
        <div className="wrap flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold uppercase tracking-wider text-[11px] text-ink">Live Gateway Pulse:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {liveHubs.map((hub) => (
              <span key={hub.name} className="flex items-center gap-1.5">
                <span className="font-semibold text-ink">{hub.name}</span>
                <span className="text-copy/80">({hub.status})</span>
              </span>
            ))}
          </div>
          <span className="hidden text-[11px] font-medium text-copy lg:inline-flex items-center gap-1">
            <Activity size={13} className="text-primary" /> ICEGATE Connected
          </span>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="wrap py-10 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group flex flex-col justify-between rounded-2xl border border-panel/60 bg-canvas/60 p-6 transition-all hover:border-primary hover:bg-white hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {m.value}{" "}
                    <span className="text-lg font-medium text-copy sm:text-xl">
                      {m.unit}
                    </span>
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl border border-panel bg-white text-ink transition-colors group-hover:border-primary group-hover:bg-primary/20">
                    <m.icon size={20} strokeWidth={1.7} />
                  </div>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {m.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-copy">
                  {m.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

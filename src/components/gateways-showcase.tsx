"use client";
import { useState } from "react";
import { Anchor, Plane, Building2, Truck, Check, ArrowUpRight } from "lucide-react";
import { enquiry } from "../lib/company";

const gateways = [
  {
    id: "nhava-sheva",
    name: "Nhava Sheva (JNPT) • Mumbai",
    type: "Premier Maritime Container Gateway",
    icon: Anchor,
    tagline: "India’s highest-throughput container gateway handling 50%+ of maritime export/import cargo.",
    stats: [
      { label: "Terminals", val: "5 Dedicated Berths" },
      { label: "Turnaround", val: "Fast-Track CFS Support" },
      { label: "Coverage", val: "Global Direct Vessel Calls" },
    ],
    features: [
      "Direct port delivery (DPD) & direct port entry (DPE) clearance",
      "On-dock rail connectivity and CFS coordination",
      "Hazardous & refrigerated (Reefer) container monitoring",
      "Electronic ICEGATE document audit & EDI filing",
    ],
  },
  {
    id: "sahar-acc",
    name: "Air Cargo Complex (ACC) • Mumbai",
    type: "High-Velocity International Air Freight Hub",
    icon: Plane,
    tagline: "Western India’s premier air hub for pharmaceuticals, engineering parts, and priority freight.",
    stats: [
      { label: "Operations", val: "24/7 Customs Coverage" },
      { label: "Specialty", val: "Cold-Chain Pharma & AOG" },
      { label: "Connectivity", val: "Direct Global Airlines" },
    ],
    features: [
      "Round-the-clock import/export appraisal & examination support",
      "Temperature-controlled storage and pharmaceutical cold-chain handoff",
      "Bonded trucking transfer between international & domestic terminals",
      "Express customs clearance for emergency and time-critical shipments",
    ],
  },
  {
    id: "mundra-hazira",
    name: "Mundra & Hazira Ports • Gujarat",
    type: "Deep-Draft Western Commercial Corridor",
    icon: Building2,
    tagline: "Strategic maritime gateways providing expedited transit for Northern & Western industrial belts.",
    stats: [
      { label: "Draft Depth", val: "Up to 17.5m Deep Berths" },
      { label: "Advantage", val: "Lower Turnaround Times" },
      { label: "Hinterland", val: "Seamless Dedicated Rail" },
    ],
    features: [
      "Competitive container dwell times and congestion-free dispatch",
      "Dedicated rail corridor connection to NCR and Northern ICDs",
      "Bulk, break-bulk, and oversized project cargo handling capability",
      "Full customs compliance and bonded warehousing facilities",
    ],
  },
  {
    id: "icd-network",
    name: "Inland Container Depots (ICDs) • Pan-India",
    type: "Hinterland Multimodal & Dry Ports",
    icon: Truck,
    tagline: "Factory-gate customs clearance connecting manufacturing clusters directly to maritime ports.",
    stats: [
      { label: "Network", val: "Major Industrial Centers" },
      { label: "Mode", val: "Rail-Road Bonded Transit" },
      { label: "Benefit", val: "Local Customs Examination" },
    ],
    features: [
      "Inland customs clearance at ICD Tughlakabad, Ahmedabad & Pune",
      "Factory stuffing and customs sealing (RFID e-seal compliant)",
      "Bonded transit under carrier bond directly to port of exit",
      "Single-window coordination from production facility to vessel berth",
    ],
  },
];

export function GatewaysShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = gateways[activeTab];

  return (
    <section id="gateways" className="border-t border-panel/80 bg-canvas py-16 md:py-24">
      <div className="wrap">
        <div>
          <p className="eyebrow">Strategic Coverage</p>
          <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
            <h2 className="heading">
              Operational gateways across
              <br className="hidden md:block" /> India’s major trade corridors.
            </h2>
            <p className="max-w-sm leading-relaxed text-copy">
              On-ground customs coordination and freight connectivity across key maritime ports, air complexes, and inland dry ports.
            </p>
          </div>
        </div>

        {/* Gateway Navigation Tabs - Responsive Scroll on Mobile */}
        <div className="mt-8 flex items-center gap-2 border-b border-panel/80 pb-3 overflow-x-auto sm:flex-wrap sm:pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {gateways.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setActiveTab(i)}
              className={
                "flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all sm:px-4 sm:py-2.5 sm:text-sm " +
                (i === activeTab
                  ? "bg-solid text-white shadow-xs"
                  : "bg-surface/80 text-copy hover:bg-surface hover:text-ink border border-panel/70")
              }
            >
              <g.icon size={16} />
              <span>{g.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Gateway Detail Card */}
        <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 rounded-2xl border border-panel bg-surface p-5 sm:p-7 md:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-md bg-panel/40 px-2.5 py-1 text-xs font-semibold text-copy uppercase tracking-wider">
                {current.type}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {current.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-copy">
                {current.tagline}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {current.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-xs font-medium text-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-panel/60">
              <a
                href={enquiry(`Clearance enquiry for ${current.name}`)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline"
              >
                Inquire about {current.name} clearance <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Stats & Capability Highlights */}
          <div className="flex flex-col justify-between rounded-xl bg-canvas/70 p-6 border border-panel/60">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-copy">
                Hub Capability Snapshot
              </p>
              <div className="mt-6 grid gap-4">
                {current.stats.map((s) => (
                  <div key={s.label} className="border-b border-panel/50 pb-3 last:border-none">
                    <div className="text-xs text-copy">{s.label}</div>
                    <div className="mt-1 text-lg font-bold text-ink">{s.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-panel/30 p-3 text-xs text-copy leading-relaxed">
              Supervised under the operational leadership of Suresh Bhagwat with 35+ years of customs clearance and freight forwarding excellence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

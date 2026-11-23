"use client";
import { useState } from "react";
import {
  Ship,
  Plane,
  Truck,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import { enquiry } from "../lib/company";

const modesData = [
  {
    id: "sea",
    label: "Ocean Freight",
    icon: Ship,
    tag: "FCL / LCL Containerized",
  },
  {
    id: "air",
    label: "Air Freight",
    icon: Plane,
    tag: "Priority / Scheduled Cargo",
  },
  {
    id: "customs",
    label: "Customs Brokerage",
    icon: FileCheck,
    tag: "Import / Export Clearance",
  },
  {
    id: "road",
    label: "Multimodal Road",
    icon: Truck,
    tag: "First / Last Mile Logistics",
  },
] as const;

const origins = [
  { id: "nhava-sheva", name: "Nhava Sheva (JNPT), Mumbai", type: "Sea Port" },
  { id: "mumbai-acc", name: "Mumbai Air Cargo Complex (BOM)", type: "Air Cargo" },
  { id: "mundra", name: "Mundra Port, Gujarat", type: "Sea Port" },
  { id: "delhi-acc", name: "Delhi IGI Airport (DEL)", type: "Air Cargo" },
  { id: "chennai", name: "Chennai Port / Ennore", type: "Sea Port" },
];

const destinations = [
  {
    id: "usa",
    name: "North America (USA / Canada)",
    transitSea: "22 – 28 Days",
    transitAir: "3 – 5 Days",
    docs: [
      "Commercial Invoice & Packing List (CIPL)",
      "Bill of Lading / Air Waybill (AWB)",
      "US ISF (10+2) Filing for Ocean",
      "FDA / EPA Clearance (if applicable)",
      "Certificate of Origin & HS Code Audit",
    ],
  },
  {
    id: "europe",
    name: "Europe & UK (Rotterdam / Felixstowe)",
    transitSea: "18 – 24 Days",
    transitAir: "2 – 4 Days",
    docs: [
      "Commercial Invoice & Detailed Packing List",
      "EU Entry Summary Declaration (ENS)",
      "EUR.1 / REX Registered Exporter Status",
      "EORI Number Verification",
      "CE Certification & HS Code Matching",
    ],
  },
  {
    id: "middle-east",
    name: "Middle East & GCC (Jebel Ali / Dammam)",
    transitSea: "4 – 7 Days",
    transitAir: "1 – 2 Days",
    docs: [
      "Attested Commercial Invoice & Packing List",
      "Chamber of Commerce Certificate of Origin",
      "Bill of Lading / Air Waybill",
      "GCC Customs Duty & Saber/Fasah Compliance",
      "Port Health / Special Regulatory Permits",
    ],
  },
  {
    id: "asia",
    name: "Far East & ASEAN (Singapore / Shanghai)",
    transitSea: "10 – 16 Days",
    transitAir: "2 – 4 Days",
    docs: [
      "Commercial Invoice & Standard Packing List",
      "ASEAN-India FTA (Form AI) if applicable",
      "Bill of Lading / Master Air Waybill",
      "Phytosanitary / Material Safety Data Sheet",
      "Dual-Use / SCOMET Clearance Audit",
    ],
  },
  {
    id: "domestic",
    name: "Pan-India Domestic Multimodal",
    transitSea: "6 – 10 Days (Coastal)",
    transitAir: "24 – 48 Hours",
    docs: [
      "E-Way Bill with Valid Part B Transport Data",
      "Commercial Tax Invoice & Delivery Challan",
      "GSTIN Verification & State Permits",
      "Proof of Delivery (POD) Documentation",
      "Hazchem / Special Cargo Handling Forms",
    ],
  },
];

export function ShipmentPlanner() {
  const [selectedMode, setSelectedMode] = useState<string>("sea");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("nhava-sheva");
  const [selectedDest, setSelectedDest] = useState<string>("usa");

  const destData = destinations.find((d) => d.id === selectedDest) || destinations[0];
  const originData = origins.find((o) => o.id === selectedOrigin) || origins[0];
  const modeData = modesData.find((m) => m.id === selectedMode) || modesData[0];

  const estimatedTransit =
    selectedMode === "sea"
      ? destData.transitSea
      : selectedMode === "air"
      ? destData.transitAir
      : selectedMode === "customs"
      ? "24 – 48 Hours (Document Processing)"
      : "3 – 6 Days (Door-to-Door Multimodal)";

  const enquirySubject = `Shipment Planning Enquiry: ${modeData.label} from ${originData.name} to ${destData.name}`;

  return (
    <section id="planner" className="border-t border-panel/80 bg-white/60 py-16 md:py-24">
      <div className="wrap">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Interactive Planner</p>
            <h2 className="heading mt-4">
              Plan your shipment route
              <br className="hidden sm:inline" /> & customs requirements.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-copy">
            Select your logistics parameters to instantly preview typical transit times, documentation checklists, and customs compliance requirements.
          </p>
        </div>

        {/* Planner Interactive Container */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Controls Column */}
          <div className="flex flex-col gap-6 rounded-2xl border border-panel bg-canvas/80 p-6 sm:p-8">
            {/* Step 1: Mode Selection */}
            <div>
              <label className="text-xs font-semibold tracking-wider text-copy uppercase">
                Step 1: Select Shipment Mode
              </label>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {modesData.map((m) => {
                  const active = m.id === selectedMode;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMode(m.id)}
                      className={
                        "flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all " +
                        (active
                          ? "border-ink bg-ink text-white shadow-sm"
                          : "border-panel/80 bg-white text-ink hover:border-primary hover:bg-white")
                      }
                    >
                      <div
                        className={
                          "mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg " +
                          (active ? "bg-white/15 text-primary" : "bg-panel/40 text-ink")
                        }
                      >
                        <m.icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{m.label}</div>
                        <div
                          className={
                            "text-xs " +
                            (active ? "text-panel/80" : "text-copy")
                          }
                        >
                          {m.tag}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Origin Gateway */}
            <div>
              <label className="text-xs font-semibold tracking-wider text-copy uppercase">
                Step 2: Indian Origin Hub / Gateway
              </label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {origins.map((o) => {
                  const active = o.id === selectedOrigin;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setSelectedOrigin(o.id)}
                      className={
                        "flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition-all " +
                        (active
                          ? "border-primary bg-primary/20 text-ink font-semibold"
                          : "border-panel/70 bg-white text-copy hover:border-panel hover:text-ink")
                      }
                    >
                      <span className="truncate pr-2">{o.name}</span>
                      <span className="shrink-0 rounded bg-canvas px-1.5 py-0.5 text-[10px] text-copy">
                        {o.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Destination Market */}
            <div>
              <label className="text-xs font-semibold tracking-wider text-copy uppercase">
                Step 3: Destination Market
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {destinations.map((d) => {
                  const active = d.id === selectedDest;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDest(d.id)}
                      className={
                        "rounded-xl border px-3.5 py-2 text-xs font-medium transition-all " +
                        (active
                          ? "border-ink bg-ink text-white font-semibold"
                          : "border-panel/80 bg-white text-copy hover:border-panel hover:text-ink")
                      }
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Result Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-panel bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-panel/60 pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-panel bg-canvas px-3 py-1 text-xs font-semibold text-ink">
                  <Sparkles size={14} className="text-primary" /> Route Intelligence
                </span>
                <span className="text-xs font-medium text-copy">
                  Customs & Logistics Overview
                </span>
              </div>

              {/* Transit Estimation Card */}
              <div className="mt-6 rounded-xl border border-panel/70 bg-canvas/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-copy uppercase">
                  <Clock size={15} className="text-primary" /> Estimated Transit Window
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {estimatedTransit}
                </div>
                <p className="mt-1 text-xs text-copy">
                  {selectedMode === "sea"
                    ? "Berth-to-berth ocean voyage with port clearance processing."
                    : selectedMode === "air"
                    ? "Direct or scheduled consolidation via major air freight carrier."
                    : selectedMode === "customs"
                    ? "Document pre-check and electronic ICEGATE bill of entry filing."
                    : "Door-to-door transit time including domestic highway movement."}
                </p>
              </div>

              {/* Mandatory Documentation Checklist */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-copy uppercase">
                  <span className="flex items-center gap-1.5">
                    <ClipboardList size={15} className="text-primary" /> Required Documents Checklist
                  </span>
                  <span className="text-[11px] font-normal text-copy">5 Requirements</span>
                </div>
                <ul className="mt-3 grid gap-2">
                  {destData.docs.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-xs font-medium text-ink"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button pre-filling Enquiry */}
            <div className="mt-8 border-t border-panel/60 pt-6">
              <a
                href={enquiry(enquirySubject)}
                className="action action-dark w-full text-center"
              >
                Request tailored quote for this route <ArrowRight size={16} />
              </a>
              <p className="mt-2 text-center text-[11px] text-copy">
                Direct handoff to Suresh Bhagwat & operations team in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

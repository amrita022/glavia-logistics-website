"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProcessArtwork, type ProcessStep } from "./process-artwork";
import { enquiry } from "../lib/company";

export const processes = [
  {
    id: "mapping",
    step: "01",
    shortName: "Process Mapping",
    title: "Process Mapping & Flow Design",
    category: "Workflow Optimization",
    summary:
      "We map every touchpoint across suppliers, carriers, customs gates, and consignees—eliminating friction, redundant handoffs, and procedural delays before cargo moves.",
    deliverables: [
      "End-to-end supply chain flowcharting",
      "Standard Operating Procedures (SOP)",
      "Multi-party handoff synchronization",
    ],
    art: "mapping" as ProcessStep,
  },
  {
    id: "ior",
    step: "02",
    shortName: "IOR & Compliance",
    title: "IOR (Importer of Record) & Trade Governance",
    category: "Regulatory Compliance",
    summary:
      "Acting as your compliant import/export entity into India, USA, and Europe. We manage statutory customs declarations, tariff classification, and duty assessments without corporate risk.",
    deliverables: [
      "Statutory IOR representation & filings",
      "ICEGATE, US CBP & UK/EU compliance",
      "Customs duty & tariff optimization",
    ],
    art: "ior" as ProcessStep,
  },
  {
    id: "timestudy",
    step: "03",
    shortName: "Time Study",
    title: "Process Time Study & Dwell Reduction",
    category: "Efficiency & Cost Control",
    summary:
      "Quantitative cycle-time study across customs appraisal, CFS yards, and ramp handovers—compressing total dwell time to protect your shipments from demurrage and detention fees.",
    deliverables: [
      "Terminal dwell-time compression",
      "Demurrage & detention prevention",
      "Direct Port Delivery (DPD) flows",
    ],
    art: "timestudy" as ProcessStep,
  },
  {
    id: "customs",
    step: "04",
    shortName: "Customs Clearance",
    title: "Customs Brokerage & Port Clearance",
    category: "Rapid Release",
    summary:
      "Electronic ICEGATE EDI pre-filing and on-ground port clearance coordination with customs officials and port stakeholders for rapid gate-out.",
    deliverables: [
      "Electronic EDI pre-arrival filing",
      "On-ground port examination support",
      "Stakeholder coordination & gate passes",
    ],
    art: "customs" as ProcessStep,
  },
  {
    id: "forwarding",
    step: "05",
    shortName: "Freight Delivery",
    title: "Multimodal Freight & Door Delivery",
    category: "Global Movement",
    summary:
      "Seamless air, ocean, and express courier movement across international corridors with carrier booking, tracking updates, and proactive communication.",
    deliverables: [
      "Ocean FCL/LCL & air cargo booking",
      "Time-definite express courier dispatch",
      "Active milestone updates & tracking",
    ],
    art: "forwarding" as ProcessStep,
  },
] as const;

export function ProcessShowcase() {
  const [active, setActive] = useState(0);
  const current = processes[active];

  return (
    <div className="mt-8 flex flex-col gap-5">
      {/* Sleek Horizontal Process Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <div
          role="tablist"
          aria-label="Methodology stages"
          className="flex items-center gap-1 sm:gap-2 rounded-2xl border border-panel/75 bg-surface/90 p-1.5 shadow-xs backdrop-blur-md"
        >
          {processes.map((proc, index) => {
            const isSelected = index === active;
            return (
              <button
                key={proc.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(index)}
                className={`relative flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-solid text-white shadow-xs"
                    : "text-copy hover:bg-panel/40 hover:text-ink"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tabular-nums ${
                    isSelected ? "text-primary" : "text-copy"
                  }`}
                >
                  {proc.step}
                </span>
                <span className="whitespace-nowrap">{proc.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Process Spotlight Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid items-center gap-6 rounded-3xl border border-panel/80 bg-surface p-5 shadow-xs sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10"
        >
          {/* Visual Artwork Showcase */}
          <div className="relative flex h-48 sm:h-60 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-panel/20 to-canvas border border-panel/60 p-4">
            <ProcessArtwork step={current.art} />
          </div>

          {/* Details & Deliverables */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-primary/20 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold text-solid">
                  {current.category}
                </span>
                <span className="text-xs font-semibold text-copy">
                  Phase {current.step} of 05
                </span>
              </div>

              <h3 className="mt-2.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {current.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-copy">
                {current.summary}
              </p>

              {/* 3 Crisp Deliverable Badges */}
              <div className="mt-4 grid gap-1.5 sm:gap-2">
                {current.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-panel/60 bg-canvas/60 px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    <Check size={13} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 pt-3.5 border-t border-panel/40">
              <a
                href={enquiry(current.title + " inquiry")}
                className="action action-dark rounded-full px-4 py-1.5 text-xs font-semibold shadow-xs hover:shadow-md"
              >
                <span>Consult on this phase</span>
                <ArrowUpRight size={13} />
              </a>

              <div className="flex items-center gap-1.5 text-xs text-copy">
                <span>Next:</span>
                <button
                  type="button"
                  onClick={() => setActive((active + 1) % processes.length)}
                  className="font-semibold text-ink hover:text-primary transition-colors flex items-center gap-1"
                >
                  {processes[(active + 1) % processes.length].shortName}
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

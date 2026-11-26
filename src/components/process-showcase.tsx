"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + processes.length) % processes.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % processes.length);
  };

  return (
    <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5">
      {/* Mobile Stage Quick Switcher with Indicator Bar (< sm) */}
      <div className="flex sm:hidden items-center justify-between rounded-2xl border border-panel/80 site-dark:border-white/10 bg-surface/90 site-dark:bg-surface/95 p-2 shadow-xs backdrop-blur-md">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous methodology phase"
          className="flex size-9 items-center justify-center rounded-xl border border-panel/60 site-dark:border-white/10 text-ink hover:bg-panel/40 site-dark:hover:bg-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex flex-col items-center text-center px-2">
          <div className="flex items-center gap-1.5">
            {processes.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-panel/70 site-dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>
          <span className="mt-1 text-[11px] font-bold text-ink">
            {current.step}. {current.shortName}
          </span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next methodology phase"
          className="flex size-9 items-center justify-center rounded-xl border border-panel/60 site-dark:border-white/10 text-ink hover:bg-panel/40 site-dark:hover:bg-white/10 active:scale-95 transition-all"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Responsive Horizontal Process Stepper Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory">
        <div
          role="tablist"
          aria-label="Methodology stages"
          className="flex w-full sm:w-auto items-center gap-1 sm:gap-1.5 rounded-2xl border border-panel/75 site-dark:border-white/10 bg-surface/90 site-dark:bg-surface/95 p-1.5 shadow-xs backdrop-blur-md"
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
                className={`relative flex flex-1 sm:flex-initial items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-4 py-2 text-xs font-semibold transition-all snap-start ${
                  isSelected
                    ? "bg-solid text-white site-dark:bg-primary site-dark:text-[#002449] shadow-xs"
                    : "text-copy hover:bg-panel/40 site-dark:hover:bg-white/10 hover:text-ink"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tabular-nums ${
                    isSelected
                      ? "text-primary site-dark:text-[#002449]"
                      : "text-copy"
                  }`}
                >
                  {proc.step}
                </span>
                <span className="whitespace-nowrap text-[11px] sm:text-xs">{proc.shortName}</span>
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
          transition={{ duration: 0.22 }}
          className="grid items-center gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl border border-panel/80 site-dark:border-white/10 bg-surface site-dark:bg-[#151518] p-4 sm:p-6 lg:p-8 shadow-xs lg:grid-cols-[1fr_1.1fr] lg:gap-10"
        >
          {/* Visual Artwork Showcase */}
          <div className="relative flex h-40 sm:h-56 lg:h-64 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 via-surface to-canvas site-dark:from-primary/15 site-dark:via-zinc-900/60 site-dark:to-zinc-950 border border-panel/60 site-dark:border-white/10 p-3 sm:p-4">
            <ProcessArtwork step={current.art} />
          </div>

          {/* Details & Deliverables */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="rounded-full bg-primary/20 site-dark:bg-primary/25 px-2.5 sm:px-3 py-0.5 text-[10px] sm:text-[11px] font-bold text-solid border border-transparent site-dark:border-primary/30">
                  {current.category}
                </span>
                <span className="text-xs font-semibold text-copy">
                  Phase {current.step} of 05
                </span>
              </div>

              <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-ink">
                {current.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-copy">
                {current.summary}
              </p>

              {/* 3 Crisp Deliverable Badges */}
              <div className="mt-3.5 sm:mt-4 grid gap-1.5 sm:gap-2">
                {current.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-panel/60 site-dark:border-white/10 bg-canvas/60 site-dark:bg-white/5 px-3 py-1.5 sm:py-2 text-xs font-semibold text-ink"
                  >
                    <Check size={13} className="text-primary shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions & Next Phase Bar */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3.5 border-t border-panel/40 site-dark:border-white/10">
              <a
                href={enquiry(current.title + " inquiry")}
                className="action action-dark rounded-full px-4 py-2 text-xs font-semibold shadow-xs hover:shadow-md site-dark:bg-primary site-dark:text-[#002449] w-full sm:w-auto text-center justify-center"
              >
                <span>Consult on this phase</span>
                <ArrowUpRight size={13} />
              </a>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="font-medium text-copy hover:text-ink transition-colors flex items-center gap-1 sm:hidden"
                >
                  <ArrowLeft size={12} />
                  <span>Prev</span>
                </button>

                <div className="flex items-center gap-1.5 text-copy">
                  <span>Next:</span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="font-semibold text-ink hover:text-accent-text transition-colors flex items-center gap-1"
                  >
                    {processes[(active + 1) % processes.length].shortName}
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

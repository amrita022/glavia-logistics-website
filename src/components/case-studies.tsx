import { ArrowUpRight } from "lucide-react";
import { enquiry } from "../lib/company";

const scenarios = [
  {
    category: "Capital Machinery & Engineering",
    title: "18-Hour Fast-Track Customs Clearance at Nhava Sheva (JNPT)",
    hub: "Nhava Sheva Port, Mumbai",
    challenge: "Import of heavy precision machinery facing strict factory installation deadlines with potential container demurrage penalties.",
    solution: "Conducted advance bill of entry filing prior to vessel berthing. Resolved HS classification and customs appraisal on arrival, clearing customs in under 18 hours.",
    metrics: [
      { label: "Clearance Time", val: "18 Hours" },
      { label: "Demurrage Saved", val: "100% Free Time Kept" },
      { label: "Compliance Score", val: "Zero Discrepancies" },
    ],
  },
  {
    category: "Pharmaceuticals & Healthcare",
    title: "Temperature-Controlled Export via Mumbai Air Cargo Complex",
    hub: "Sahar Air Cargo Complex, Mumbai",
    challenge: "Time-critical shipment of specialized life-science goods requiring strict 2°C to 8°C cold-chain maintenance and rapid air transit to Europe.",
    solution: "Coordinated with airline ramp services for priority tarmac handover, expedited customs documentation, and continuous temperature monitoring throughout airport handling.",
    metrics: [
      { label: "Airport Transit", val: "< 6 Hours Handover" },
      { label: "Cold-Chain Integrity", val: "Maintained 2°C–8°C" },
      { label: "Customs Clearance", val: "Priority Air Appraisal" },
    ],
  },
  {
    category: "Automotive & Industrial Spares",
    title: "Multimodal Factory-Gate to Port Transit with RFID E-Sealing",
    hub: "Western Corridor to Mundra Port",
    challenge: "Factory in Northern India needing consolidated weekly export shipments to Middle East ports with seamless rail-road transit.",
    solution: "Arranged container placement at factory, executed RFID electronic sealing, managed bonded rail movement, and coordinated direct vessel loading at Mundra.",
    metrics: [
      { label: "On-Time Loading", val: "100% Vessel Connections" },
      { label: "Documentation", val: "Single-Window Bill of Lading" },
      { label: "Transit Visibility", val: "Daily Milestone Updates" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="track-record" className="border-t border-panel/80 bg-canvas py-16 md:py-24">
      <div className="wrap">
        <div>
          <p className="eyebrow">Proven Execution</p>
          <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
            <h2 className="heading">
              Operational track record across
              <br className="hidden md:block" /> complex trade requirements.
            </h2>
            <p className="max-w-sm leading-relaxed text-copy">
              Real scenarios where experience, clear communication, and regulatory precision keep business moving forward.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="flex flex-col justify-between rounded-2xl border border-panel bg-white p-6 shadow-xs transition-all hover:border-primary hover:shadow-sm sm:p-7"
            >
              <div>
                <span className="inline-block rounded-md bg-panel/35 px-2.5 py-1 text-[11px] font-semibold text-ink uppercase tracking-wider">
                  {s.category}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <div className="mt-2 text-xs font-semibold text-primary">
                  {s.hub}
                </div>

                <div className="mt-5 space-y-3 border-t border-panel/50 pt-4 text-xs leading-relaxed text-copy">
                  <div>
                    <strong className="text-ink">Requirement:</strong> {s.challenge}
                  </div>
                  <div>
                    <strong className="text-ink">Our Execution:</strong> {s.solution}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-panel/50 pt-4">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-canvas p-1.5 sm:p-2">
                      <div className="text-[9px] sm:text-[10px] text-copy leading-tight truncate">{m.label}</div>
                      <div className="mt-0.5 text-[11px] sm:text-xs md:text-sm font-bold text-ink leading-tight break-words">
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={enquiry(`Case inquiry regarding ${s.category}`)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:underline"
                >
                  Discuss a similar shipment <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

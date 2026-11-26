import {
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import { FreightArtwork, type FreightMode } from "../components/freight-artwork";
import { CardEntrance } from "../components/card-entrance";
import { ProcessArtwork, type ProcessStep } from "../components/process-artwork";
import { ServiceArtwork } from "../components/service-artwork";
import { Brand } from "../components/brand";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
// import { ModeComparison } from "../components/mode-comparison";
// import { CaseStudies } from "../components/case-studies";
import { QuickContact } from "../components/quick-contact";
import { Faq } from "../components/faq";
import { email, enquiry, services, address, phone } from "../lib/company";

const processes = [
  {
    title: "Process Mapping & Flow Design",
    category: "Workflow Optimization",
    body: "We map every step of your international supply chain—from origin factory dispatch and documentation to terminal gates and consignee delivery—eliminating procedural bottlenecks.",
    art: "mapping" as ProcessStep,
    highlights: ["Supply chain flow mapping", "Standard operating procedures (SOP)", "Handoff synchronization"],
  },
  {
    title: "IOR (Importer of Record) & Trade Compliance",
    category: "Regulatory Governance",
    body: "Acting as your compliant import/export regulatory partner for shipments into India, USA, and Europe, managing customs duty assessment, tax declarations, and statutory filings.",
    art: "ior" as ProcessStep,
    highlights: ["ICEGATE & CBP/HMRC compliance", "Tariff classification & valuation", "Statutory tax & duty advisory"],
  },
  {
    title: "Process Time Study & Dwell Reduction",
    category: "Cycle-Time Compression",
    body: "Rigorous milestone analysis across customs appraisal, examination yards, and ramp handovers to minimize turnaround times and avoid container demurrage and detention charges.",
    art: "timestudy" as ProcessStep,
    highlights: ["Port dwell-time reduction", "Demurrage risk control", "Direct Port Delivery (DPD) flows"],
  },
  {
    title: "Customs Brokerage & Port Clearance",
    category: "Clearance Execution",
    body: "Electronic EDI filing, ICEGATE documentation, and port clearance coordination with customs officials and stakeholders for expedited cargo release.",
    art: "customs" as ProcessStep,
    highlights: ["Electronic EDI pre-filing", "On-ground port examination", "Stakeholder coordination"],
  },
  {
    title: "Multimodal Freight Coordination",
    category: "Global Movement",
    body: "Seamless air, ocean, and domestic transport solutions with carrier booking, tracking updates, and proactive communication across worldwide trade corridors.",
    art: "forwarding" as ProcessStep,
    highlights: ["Air & ocean freight coordination", "Door-to-door courier routing", "Proactive milestone updates"],
  },
] as const;

export default function Home() {
  return (
    <div id="home">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-surface focus:p-3"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />

        <section id="transport" aria-labelledby="transport-title" className="bg-panel/30 py-14 md:py-20">
          <div className="wrap">
            <CardEntrance />
            <div className="freight-enter">
              <h2 id="transport-title" className="heading">Freight and delivery options.</h2>
              <p className="mt-3 max-w-xl text-copy text-sm sm:text-base">Direct and consolidated transport solutions connecting Indian industry to global trade corridors.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {([
                {
                  title: "Air freight",
                  mode: "air",
                  tag: "Priority & Express",
                  body: "Scheduled international air cargo with expedited airport ramp handover.",
                  href: "#forwarding",
                },
                {
                  title: "Sea freight",
                  mode: "sea",
                  tag: "FCL & LCL",
                  body: "Containerized maritime shipping with Direct Port Delivery (DPD) clearance.",
                  href: "#forwarding",
                },
                {
                  title: "Express & courier",
                  mode: "courier",
                  tag: "Door-to-Door",
                  body: "Time-definite domestic and cross-border parcel dispatch with tracking.",
                  href: "#express",
                },
              ] satisfies { title: string; mode: FreightMode; tag: string; body: string; href: string }[]).map(({ title, mode, tag, body, href }) => (
                <a key={title} href={href} className="freight-enter motion-card group flex flex-col justify-between rounded-2xl border border-panel bg-surface p-5 hover:border-primary hover:shadow-lg sm:p-6">
                  <div>
                    <span className="relative grid h-32 place-items-center overflow-hidden rounded-xl bg-primary/10 text-ink">
                      <FreightArtwork mode={mode} />
                    </span>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-solid">
                        {tag}
                      </span>
                      <ArrowUpRight size={16} className="card-arrow text-copy group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-ink">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-copy">{body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Services Section - Minimal & Refined */}
        <section id="services" className="bg-surface/75 py-14 md:py-20 border-b border-panel/60">
          <div className="wrap">
            <p className="eyebrow">Our services</p>
            <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
              <h2 className="heading">
                Logistics support, from
                <br className="hidden md:block" /> planning to clearance.
              </h2>
              <p className="max-w-sm leading-relaxed text-copy">
                Freight, customs brokerage and cross-border trade expertise for businesses moving goods in India and worldwide.
              </p>
            </div>

            <div className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className={
                    "service-enter motion-card group flex flex-col justify-between rounded-xl border border-panel/75 bg-canvas/40 p-4.5 hover:border-primary/80 hover:bg-surface hover:shadow-lg " +
                    (i === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:max-w-none lg:mx-0 lg:col-span-1" : "")
                  }
                >
                  <div>
                    <span className="service-visual relative grid h-24 place-items-center overflow-hidden rounded-lg bg-primary/10 text-ink">
                      <ServiceArtwork id={s.id} />
                    </span>

                    <h3 className="mt-3.5 text-base font-semibold tracking-tight text-ink">
                      {s.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-copy">
                      {s.description}
                    </p>

                    <ul className="mt-3 grid gap-1 border-t border-panel/30 pt-2.5 text-[11px] text-copy">
                      {s.details.map((point) => (
                        <li key={point} className="flex items-start gap-1.5 leading-snug">
                          <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-panel/40">
                    <a
                      href={enquiry(s.name + " enquiry")}
                      aria-label={"Email Glavia about " + s.name.toLowerCase()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-primary transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight size={13} className="card-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Freight Mode Decision Matrix */}
        {/* <ModeComparison /> */}

        <section id="about" className="motion-section border-y border-panel/70 bg-panel/40 py-14 sm:py-16 md:py-20">
          <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow">About Glavia</p>
              <h2 className="heading mt-4">Simplifying trade across borders.</h2>
              <p className="mt-4 max-w-md text-copy">
                We coordinate freight and customs clearance for businesses in India and across international markets. From shipment planning to import and export paperwork, we help you keep track of what comes next.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Direct Port Delivery (DPD)",
                  "Electronic EDI Pre-Filing",
                  "Single-Point Coordinator",
                  "Demurrage Risk Control",
                ].map((label) => (
                  <li key={label} className="flex items-start gap-2 rounded-xl border border-panel/70 bg-surface/80 px-3 py-3 text-sm font-semibold leading-snug text-ink">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#00acc4]/30 bg-gradient-to-br from-[#002449] to-[#041930] p-5 shadow-md sm:p-8">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-sm font-bold text-[#002449] sm:size-14 shadow-xs">
                  SB
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#80d8e6]">Director &amp; founder</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Suresh Bhagwat</h3>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d0e6ed]">
                As Country Brokerage Manager at UPS, Suresh oversaw customs clearance and freight forwarding operations. He brings that experience to Glavia, helping businesses move goods across borders.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <p className="rounded-xl border border-white/15 bg-white/10 p-3 text-xs text-[#d0e6ed] sm:p-4"><strong className="mb-1 block text-3xl tracking-tight text-white">35+</strong> years in logistics and trade</p>
                <p className="rounded-xl border border-white/15 bg-white/10 p-3 text-xs text-[#d0e6ed] sm:p-4"><strong className="mb-1 block text-3xl tracking-tight text-white">25</strong> years with UPS</p>
              </div>
              <a
                href="https://www.linkedin.com/in/suresh-bhagwat-0b424334"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-10 flex-wrap items-center gap-2 rounded-lg border border-[#00acc4]/40 bg-[#00acc4]/15 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary hover:text-[#002449]"
              >
                View Suresh&apos;s LinkedIn profile <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="motion-section wrap py-14 sm:py-16 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our methodology &amp; processes</p>
              <h2 className="heading mt-4">
                Structured for speed,
                <br /> compliance, and transparency.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-copy">
              From supply chain process mapping and IOR representation to time-study optimization and port clearance, we ensure seamless execution at every stage.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processes.map(({ title, category, body, art, highlights }, index) => (
              <li
                key={title}
                className={
                  "motion-card flex flex-col justify-between overflow-hidden rounded-2xl border border-panel/80 bg-surface p-4.5 shadow-xs transition hover:border-primary/80 hover:shadow-md " +
                  (index >= 3 ? "sm:col-span-1" : "")
                }
              >
                <div>
                  <div className="card-visual relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 to-panel/20 sm:h-44">
                    <ProcessArtwork step={art} />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold text-solid">
                        {category}
                      </span>
                      <span className="text-xs font-bold text-primary tabular-nums">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-base sm:text-lg font-bold tracking-tight text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-copy">
                      {body}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-panel/40">
                  <ul className="grid gap-1.5 text-[11px] font-medium text-copy">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5">
                        <Check size={12} className="text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 8. FAQ Section */}
        <section
          id="faq"
          className="border-t border-panel bg-surface/70 py-16 md:py-24"
        >
          <div className="wrap grid gap-8 md:grid-cols-[1fr_1.45fr]">
            <div className="faq-intro">
              <p className="eyebrow">FAQ</p>
              <h2 className="heading mt-4">
                Shipment &
                <br />
                customs questions.
              </h2>
            </div>
            <Faq />
          </div>
        </section>

        {/* 9. Interactive Quick Inquiry & Contact Module */}
        <QuickContact />
      </main>

      {/* Footer */}
      <footer className="wrap py-12">
        <div className="grid gap-9 md:grid-cols-[1fr_.75fr_1fr_1.2fr]">
          <div>
            <Brand full />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-copy">
              Glavia Logistics LLP simplifies freight forwarding and customs clearance through operational expertise, proactive communication, and dependable execution.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid content-start gap-2 text-sm"
          >
            <strong>Navigation</strong>
            {[
              ["Services", "services"],
              ["Freight options", "transport"],
              // ["Mode comparison", "comparison"],
              ["About Glavia", "about"],
              ["Our process", "process"],
              ["FAQ", "faq"],
              ["Contact us", "contact"],
            ].map(([n, id]) => (
              <a className="text-copy hover:underline" key={id} href={"#" + id}>
                {n}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Footer services"
            className="grid content-start gap-2 text-sm"
          >
            <strong>Services</strong>
            {services.map((s) => (
              <a
                className="text-copy hover:underline"
                key={s.id}
                href={"#" + s.id}
              >
                {s.name}
              </a>
            ))}
          </nav>
          <address className="grid content-start gap-3 text-sm text-copy not-italic">
            <strong className="text-ink">Registered Office</strong>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              {address}
            </p>
            <a className="break-all hover:underline" href={"mailto:" + email}>
              {email}
            </a>
            <a href={"tel:+91" + phone} className="hover:underline">
              +91 {phone}
            </a>
            <a href={"https://" + "www.glavialogistic.com"} className="hover:underline">www.glavialogistic.com</a>
          </address>
        </div>
        <div className="mt-10 border-t border-panel pt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-copy">
          <div>© {new Date().getFullYear()} Glavia Logistics LLP. All rights reserved.</div>
          <div>Customs Clearance • Freight Forwarding • Trade Advisory</div>
        </div>
      </footer>
    </div>
  );
}

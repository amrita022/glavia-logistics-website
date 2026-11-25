import {
  ArrowUpRight,
  Check,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { FreightArtwork, type FreightMode } from "../components/freight-artwork";
import { CardEntrance } from "../components/card-entrance";
import { ServiceArtwork } from "../components/service-artwork";
import { Brand } from "../components/brand";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
// import { ModeComparison } from "../components/mode-comparison";
// import { CaseStudies } from "../components/case-studies";
import { QuickContact } from "../components/quick-contact";
import { Faq } from "../components/faq";
import { email, enquiry, services } from "../lib/company";

const steps = [
  {
    num: "01",
    title: "Scope & Route Consultation",
    body: "Share cargo classification, origin, destination and timeline. We evaluate incoterms and carrier routes.",
    deliverable: "Feasibility review & customs readiness check",
  },
  {
    num: "02",
    title: "Pre-Clearance & Carrier Booking",
    body: "We audit commercial invoices and pre-file EDI documentation on ICEGATE to eliminate port dwell.",
    deliverable: "ICEGATE pre-filing & space confirmation",
  },
  {
    num: "03",
    title: "Port Clearance & Final Handover",
    body: "On-ground supervision of port/airport appraisal, container examination, and out-of-charge dispatch.",
    deliverable: "Milestone status updates & Proof of Delivery (POD)",
  },
];

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
                    <span className="relative grid h-32 place-items-center overflow-hidden rounded-xl bg-primary/20 text-ink">
                      <FreightArtwork mode={mode} />
                    </span>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-primary/25 px-2.5 py-0.5 text-[10px] font-semibold text-ink">
                        {tag}
                      </span>
                      <ArrowUpRight size={16} className="card-arrow text-copy group-hover:text-ink shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
                    <span className="service-visual relative grid h-24 place-items-center overflow-hidden rounded-lg bg-primary/15 text-ink">
                      <ServiceArtwork id={s.id} />
                    </span>

                    <h3 className="mt-3.5 text-base font-semibold tracking-tight text-ink">
                      {s.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-copy">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-panel/40">
                    <a
                      href={enquiry(s.name + " enquiry")}
                      aria-label={"Email Glavia about " + s.name.toLowerCase()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-blue-600 transition-colors"
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

        {/* 4. About Glavia & Executive Leadership */}
        <section id="about" className="motion-section bg-panel/40 py-14 sm:py-16 md:py-20 border-y border-panel/70">
          <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 items-start">
            <div>
              <p className="eyebrow">About Glavia</p>
              <h2 className="heading mt-4">
                Simplifying trade,
                <br />
                across borders.
              </h2>
              <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-copy">
                Glavia Logistics LLP coordinates dependable freight forwarding and customs clearance across India and international markets, built on operational precision and clear communication.
              </p>

              {/* High-Impact Proof Points / Key Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-panel/70 bg-surface/80 p-3.5 text-center shadow-2xs">
                  <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">35+</div>
                  <div className="mt-0.5 text-[11px] font-medium text-copy">Years Leadership</div>
                </div>
                <div className="rounded-xl border border-panel/70 bg-surface/80 p-3.5 text-center shadow-2xs">
                  <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">100%</div>
                  <div className="mt-0.5 text-[11px] font-medium text-copy">ICEGATE Compliant</div>
                </div>
                <div className="rounded-xl border border-panel/70 bg-surface/80 p-3.5 text-center shadow-2xs">
                  <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">&lt; 24h</div>
                  <div className="mt-0.5 text-[11px] font-medium text-copy">Clearance Target</div>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  { title: "Direct Port Delivery (DPD)", desc: "On-dock delivery at JNPT to avoid CFS dwell fees." },
                  { title: "Electronic EDI Pre-Filing", desc: "Advance bill of entry filing before vessel berthing." },
                  { title: "Single-Point Coordinator", desc: "Dedicated senior operations manager for your account." },
                  { title: "Demurrage Risk Control", desc: "Proactive document audits to protect your free days." },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-panel/60 bg-surface/70 p-3 text-xs"
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-ink">
                      <Check size={14} className="text-emerald-600 shrink-0" />
                      <span>{s.title}</span>
                    </div>
                    <p className="mt-1 pl-5 text-[11px] text-copy leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Credentials Card */}
            <div className="flex flex-col justify-between rounded-2xl bg-solid p-6 text-canvas shadow-lg sm:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-panel/20 pb-4">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Award size={15} /> Executive Leadership
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-panel">
                    Mumbai Operations
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Suresh Bhagwat
                  </h3>
                  <p className="mt-0.5 text-xs text-primary font-medium">
                    Director & Founder • Glavia Logistics LLP
                  </p>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                    35+
                  </span>
                  <span className="text-base font-medium text-panel">
                    Years in International Trade
                  </span>
                </div>

                <div className="mt-5 space-y-3 border-t border-panel/20 pt-4 text-xs text-panel leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <Briefcase size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">25 Years with UPS</strong>
                      Country Brokerage Manager directing customs clearance, air/ocean freight, transportation, and US/UK brokerage back-office operations.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <GraduationCap size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Executive Credentials</strong>
                      Columbia Business School credential (2021) • University of Mumbai graduate.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Global Governance</strong>
                      Managed cross-border regulatory operations, customs compliance, and enterprise logistics transformation.
                    </div>
                  </div>
                </div>

                {/* Core Expertise Badges */}
                <div className="mt-5 border-t border-panel/20 pt-3.5">
                  <span className="text-[10px] uppercase tracking-wider text-panel/70 block mb-2 font-medium">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Customs Brokerage",
                      "ICEGATE Compliance",
                      "Express Cargo",
                      "Ocean FCL/LCL",
                      "Trade Advisory",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white border border-white/10"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/suresh-bhagwat-0b424334"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-10 items-center justify-between rounded-xl border border-panel/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* 7. Process Section - Visual 3-Stage Pipeline */}
        <section id="process" className="motion-section wrap py-14 sm:py-16 md:py-20">
          <p className="eyebrow">Our process</p>
          <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
            <h2 className="heading">How we work with you.</h2>
            <p className="max-w-sm leading-relaxed text-copy text-sm sm:text-base">
              A structured 3-step workflow designed to eliminate clearance delays and ensure milestone transparency.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((st, i) => (
              <div
                key={st.title}
                className="motion-card group flex flex-col justify-between rounded-2xl border border-panel/80 bg-surface/70 p-5 sm:p-6 shadow-xs hover:border-primary hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-panel/50 pb-3">
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Stage {st.num}
                    </span>
                    <span className="text-[11px] font-mono text-copy/60">0{i + 1} / 03</span>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold tracking-tight text-ink">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-copy">
                    {st.body}
                  </p>
                </div>

                <div className="mt-5 rounded-lg bg-canvas p-2.5 border border-panel/50">
                  <span className="text-[10px] font-semibold text-copy uppercase tracking-wider block mb-0.5">
                    Core Output
                  </span>
                  <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-600 shrink-0" />
                    <span>{st.deliverable}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ Section */}
        <section
          id="faq"
          className="motion-section border-t border-panel bg-surface/70 py-16 md:py-24"
        >
          <div className="wrap grid gap-8 md:grid-cols-[1fr_1.45fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="heading mt-4">
                Shipment &
                <br />
                customs questions.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-copy">
                Common questions about freight forwarding, customs clearance, and trade consultation.
              </p>
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
            <strong className="text-ink">Mumbai office</strong>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              D/1802, Ekta Meadows, Siddharth Nagar, Mumbai 400066, India
            </p>
            <a className="break-all hover:underline" href={"mailto:" + email}>
              {email}
            </a>
            <a href="tel:+919820348813" className="hover:underline">
              +91 98203 48813
            </a>
            <a href="https://www.glavialogistic.com" className="hover:underline">www.glavialogistic.com</a>
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

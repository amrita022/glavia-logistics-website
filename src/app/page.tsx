import {
  ArrowUpRight,
  Check,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { Brand } from "../components/brand";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { MetricsStrip } from "../components/metrics-strip";
import { ShipmentPlanner } from "../components/shipment-planner";
import { GatewaysShowcase } from "../components/gateways-showcase";
import { ModeComparison } from "../components/mode-comparison";
import { CaseStudies } from "../components/case-studies";
import { QuickContact } from "../components/quick-contact";
import { Faq } from "../components/faq";
import { email, enquiry, services } from "../lib/company";

const steps = [
  {
    num: "01",
    title: "Scope & Route Consultation",
    body: "Share your cargo classification, origin, destination and timing. We evaluate incoterms, route feasibility, and carrier schedules.",
    deliverable: "Feasibility review & customs readiness check",
  },
  {
    num: "02",
    title: "Pre-Clearance Documentation & Booking",
    body: "We audit commercial invoices, packing lists, and regulatory certificates, pre-filing electronic EDI documentation to avoid port dwell times.",
    deliverable: "ICEGATE pre-filing & carrier space confirmation",
  },
  {
    num: "03",
    title: "Execution, Clearance & Delivery",
    body: "Our on-ground operations team supervises port/air appraisal, container examination, Out-of-Charge issuance, and door dispatch.",
    deliverable: "Milestone status updates & Proof of Delivery (POD)",
  },
];

export default function Home() {
  return (
    <div id="home">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <MetricsStrip />

        {/* 1. Services Section - Minimal & Refined */}
        <section id="services" className="bg-white/75 py-14 md:py-20 border-b border-panel/60">
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
                    "group flex flex-col justify-between rounded-xl border border-panel/75 bg-canvas/40 p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/80 hover:bg-white hover:shadow-xs " +
                    (i === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:max-w-none lg:mx-0 lg:col-span-1" : "")
                  }
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-lg border border-panel/80 bg-white text-ink transition-colors group-hover:border-primary group-hover:bg-primary/20">
                        <s.icon size={18} strokeWidth={1.6} />
                      </span>
                      <span className="text-[11px] font-mono font-medium text-copy/60">
                        0{i + 1}
                      </span>
                    </div>

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
                      <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Interactive Shipment Route & Clearance Planner */}
        <ShipmentPlanner />

        {/* 3. Freight Mode Decision Matrix */}
        <ModeComparison />

        {/* 4. About Glavia & Executive Leadership */}
        <section id="about" className="bg-panel/40 py-16 md:py-24 border-y border-panel/70">
          <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
            <div>
              <p className="eyebrow">About Glavia</p>
              <h2 className="heading mt-4">
                Simplifying trade,
                <br />
                across borders.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-copy sm:text-lg">
                Glavia Logistics LLP is a Mumbai-based partnership firm dedicated to simplifying freight movement and customs clearance. Our mission is to make global trade dependable through proactive communication, regulatory accuracy, and customer-focused coordination.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "On-ground Mumbai port presence",
                  "Direct ICEGATE customs filing",
                  "Single-point account coordinator",
                  "Transparent milestone updates",
                  "FOB, CIF, DDP Incoterms expertise",
                  "Demurrage & dwell-time prevention",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-lg bg-white/70 border border-panel/60 px-3 py-2 text-xs font-medium text-ink"
                  >
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-panel/70 bg-white/60 p-4 text-xs leading-relaxed text-copy">
                <strong className="block text-ink text-sm mb-1 font-semibold">Our Operating Promise</strong>
                Making complex customs regulations and international freight simpler, smoother, and completely transparent for your business.
              </div>
            </div>

            {/* Founder Credentials Card */}
            <div className="flex flex-col justify-between rounded-2xl bg-ink p-7 text-canvas shadow-lg sm:p-9">
              <div>
                <div className="flex items-center justify-between border-b border-panel/20 pb-4">
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Award size={15} /> Executive Leadership
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-panel">
                    Mumbai Operations
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Suresh Bhagwat
                  </h3>
                  <p className="mt-1 text-xs text-primary font-medium">
                    Director & Founder • Glavia Logistics LLP
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-white sm:text-6xl">
                    35+
                  </span>
                  <span className="text-xl font-medium text-panel">
                    Years in International Trade
                  </span>
                </div>

                <div className="mt-6 space-y-3.5 border-t border-panel/20 pt-5 text-xs text-panel leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <Briefcase size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">25 Years with UPS</strong>
                      Country Brokerage Manager overseeing customs brokerage, international express, transportation, and Trade Management Services (TMS).
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
                      Managed cross-border regulatory operations, US & UK brokerage back-office support, and corporate process transformation.
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/suresh-bhagwat-0b424334"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex min-h-11 items-center justify-between rounded-xl border border-panel/30 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 5. Key Hubs & Clearance Gateways */}
        <GatewaysShowcase />

        {/* 6. Proven Execution & Case Studies */}
        <CaseStudies />

        {/* 7. Process Section */}
        <section id="process" className="wrap py-16 md:py-24">
          <p className="eyebrow">Our process</p>
          <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
            <h2 className="heading">How we work with you.</h2>
            <p className="max-w-sm leading-relaxed text-copy">
              A transparent, structured workflow designed to prevent customs delays and ensure complete cargo visibility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((st) => (
              <div
                key={st.title}
                className="group flex flex-col justify-between rounded-2xl border border-panel/80 bg-white/70 p-6 shadow-xs transition-all hover:border-primary hover:shadow-sm sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-panel/50 pb-3">
                    <span className="text-sm font-bold text-primary">
                      Step {st.num}
                    </span>
                    <span className="size-2 rounded-full bg-primary/60" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                    {st.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-copy">
                    {st.body}
                  </p>
                </div>

                <div className="mt-6 rounded-lg bg-canvas p-3 border border-panel/50">
                  <span className="text-[10px] font-semibold text-copy uppercase tracking-wider block mb-0.5">
                    Key Deliverable
                  </span>
                  <span className="text-xs font-semibold text-ink">
                    {st.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ Section */}
        <section
          id="faq"
          className="border-t border-panel bg-white/70 py-16 md:py-24"
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
                Common questions on customs documentation, demurrage prevention, incoterms, and route coordination.
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
            <Brand />
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
              ["Shipment planner", "planner"],
              ["Mode comparison", "comparison"],
              ["Trade gateways", "gateways"],
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
            <strong className="text-ink">Mumbai Operations Office</strong>
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
            <p className="text-xs text-copy/70 mt-1">
              Mon – Sat: 9:00 AM – 7:00 PM IST
            </p>
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

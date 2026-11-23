import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Brand } from "../components/brand";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { Faq } from "../components/faq";
import { email, enquiry, services } from "../lib/company";

const steps = [
  [
    "Discuss your shipment",
    "Share your cargo, origin, destination and timing so we can understand your requirements.",
  ],
  [
    "Plan the movement",
    "We help coordinate the freight options, documentation and clearance requirements that apply to your shipment.",
  ],
  [
    "Coordinate and communicate",
    "We work with the relevant stakeholders and provide shipment updates as your goods move.",
  ],
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
        <section id="services" className="bg-white/70 py-16 md:py-24">
          <div className="wrap">
            <p className="eyebrow">Our services</p>
            <div className="mt-4 grid items-end gap-5 lg:grid-cols-[1.7fr_1fr]">
              <h2 className="heading">
                Logistics support, from
                <br className="hidden md:block" /> planning to clearance.
              </h2>
              <p className="max-w-sm leading-relaxed text-copy">
                Freight, customs and trade expertise for businesses moving goods
                in India and across international markets.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className={
                    "group flex flex-col items-start rounded-2xl border border-panel p-6 transition-colors hover:border-primary lg:p-8 " +
                    (i < 3
                      ? "bg-canvas lg:col-span-2"
                      : "bg-panel/35 lg:col-span-3")
                  }
                >
                  <span className="mb-8 grid size-12 place-items-center rounded-xl border border-primary/70 bg-primary/30">
                    <s.icon size={25} strokeWidth={1.6} />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-[-.04em]">
                    {s.name}
                  </h3>
                  <p className="mt-3 mb-7 max-w-prose grow leading-relaxed text-copy">
                    {s.description}
                  </p>
                  <a
                    href={enquiry(s.name + " enquiry")}
                    aria-label={"Email Glavia about " + s.name.toLowerCase()}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:underline"
                  >
                    Enquire by email <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="bg-panel/55 py-16 md:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">About Glavia</p>
              <h2 className="heading mt-4">
                Simplifying trade,
                <br />
                across borders.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-copy">
                Glavia Logistics LLP is a Mumbai-based partnership firm
                dedicated to simplifying freight movement and customs clearance.
                Our mission is to make global trade more dependable through
                clear communication and customer-focused coordination.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Reliable coordination",
                  "Clear communication",
                  "Customs compliance",
                  "Customer-focused solutions",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Check size={17} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-ink p-8 text-canvas md:p-10">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Founder experience
                </p>
                <p className="mt-6 text-6xl font-semibold tracking-tighter">
                  35+ <span className="text-3xl">years</span>
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-panel">
                  Suresh Bhagwat brings over 35 years in logistics and
                  international trade, including 25 years with UPS and
                  experience as Country Brokerage Manager.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/suresh-bhagwat-0b424334"
                className="mt-10 flex min-h-11 items-center justify-between border-t border-panel/30 pt-5 font-semibold focus-visible:outline-primary"
              >
                Suresh Bhagwat on LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="process" className="wrap py-16 md:py-24">
          <p className="eyebrow">Our process</p>
          <h2 className="heading mt-4">How we work with you.</h2>
          <ol className="mt-10 grid gap-7 md:grid-cols-3">
            {steps.map(([title, body], i) => (
              <li key={title} className="border-t border-ink/20 pt-5">
                <span className="text-sm font-semibold text-copy">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-copy">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <section
          id="faq"
          className="border-t border-panel bg-white/60 py-16 md:py-24"
        >
          <div className="wrap grid gap-8 md:grid-cols-[1fr_1.45fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="heading mt-4">
                Shipment
                <br />
                questions.
              </h2>
            </div>
            <Faq />
          </div>
        </section>
        <section id="contact" className="bg-primary py-16 md:py-20">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="heading">
                Let’s move your
                <br />
                business forward.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-ink">
                Tell our team about your shipment and the support you need.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a
                href={enquiry("Shipment enquiry")}
                className="action action-dark"
              >
                <Mail size={17} /> Email our team <ArrowRight size={16} />
              </a>
              <a
                className="inline-flex min-h-11 items-center gap-3 font-medium hover:underline"
                href="tel:+919820348813"
              >
                <Phone size={17} /> +91 98203 48813
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap py-12">
        <div className="grid gap-9 md:grid-cols-[1fr_.65fr_1fr_1.2fr]">
          <div>
            <Brand />
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid content-start gap-2 text-sm"
          >
            <strong>Company</strong>
            {[
              ["About", "about"],
              ["Our process", "process"],
              ["FAQ", "faq"],
              ["Contact", "contact"],
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
              D/1802, Ekta Meadows, Siddharth Nagar, Mumbai 400066
            </p>
            <a className="break-all hover:underline" href={"mailto:" + email}>
              {email}
            </a>
            <a href="tel:+919820348813" className="hover:underline">
              +91 98203 48813
            </a>
          </address>
        </div>
        <div className="mt-10 border-t border-panel pt-5 text-xs text-copy">
          © {new Date().getFullYear()} Glavia Logistics LLP
        </div>
      </footer>
    </div>
  );
}

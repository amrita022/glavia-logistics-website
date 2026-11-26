"use client";
import { useState } from "react";
import { Send, MapPin, CheckCircle2 } from "lucide-react";
import { email } from "../lib/company";

export function QuickContact() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Shipment Consultation Request from ${name || "Client"}`;
    const body = `Name: ${name}\nContact: ${contactInfo}\nShipment Details: ${details}\n\nPlease get in touch regarding this enquiry.`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="motion-section border-t border-panel/80 bg-solid py-14 text-canvas sm:py-16 md:py-24">
      <div className="wrap grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
        {/* Left Column: Direct Contact & Office Details */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </p>
          <h2 className="heading mt-4 text-white">
            Let’s move your
            <br />
            business forward.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-panel sm:text-lg">
            Looking for freight forwarding or customs clearance support? Tell us about your logistics requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="motion-card rounded-xl border border-panel/20 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                Direct Email
              </div>
              <a
                href={"mailto:" + email}
                className="mt-2 block text-sm font-semibold text-white hover:text-primary transition-colors break-all"
              >
                {email}
              </a>
              <p className="mt-1 text-xs text-panel/85">
                Quotes & documentation intake
              </p>
            </div>

            <div className="rounded-xl border border-panel/20 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                Telephone
              </div>
              <a
                href="tel:+919820348813"
                className="mt-2 block text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                +91 98203 48813
              </a>
              <a
                href="tel:+919326566589"
                className="mt-2 block text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                +91 93265 66589
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-panel/15 bg-white/5 p-4 text-xs text-panel">
            <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Mumbai Registered Office</strong>
              D/1802, Ekta Meadows, Siddharth Nagar, Mumbai - 400066
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Inquiry Card */}
        <div className="rounded-2xl border border-panel/25 bg-white/8 p-5 backdrop-blur-md sm:p-7 md:p-8">
          <div className="flex items-center justify-between border-b border-panel/15 pb-4">
            <h3 className="text-lg font-bold text-white">
              Send a Shipment Inquiry
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
            <div>
              <label htmlFor="shipper-name" className="block text-xs font-medium text-panel">
                Your Name / Company
              </label>
              <input
                id="shipper-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Acme Corp / Priya Sharma"
                className="mt-1.5 w-full rounded-xl border border-panel/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-panel/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="shipper-contact" className="block text-xs font-medium text-panel">
                Email Address or Phone Number
              </label>
              <input
                id="shipper-contact"
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="e.g. priya@acme.com or +91 98765 43210"
                className="mt-1.5 w-full rounded-xl border border-panel/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-panel/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="shipper-details" className="block text-xs font-medium text-panel">
                Cargo, Route & Timing Details
              </label>
              <textarea
                id="shipper-details"
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Cargo description, origin, destination, and preferred timing"
                className="mt-1.5 w-full rounded-xl border border-panel/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-panel/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            {submitted ? (
              <div className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-3 text-xs font-semibold text-emerald-300">
                <CheckCircle2 size={16} /> Opening your email draft…
              </div>
            ) : (
              <button
                type="submit"
                className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-ink transition hover:bg-primary/90 active:scale-[.99]"
              >
                <Send size={15} /> Open email draft
              </button>
            )}

            <p className="text-center text-[11px] text-panel/85">
              Opens your preferred email client with this inquiry pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

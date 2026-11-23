"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { enquiry } from "../lib/company";

const questions = [
  {
    q: "Which shipments and cargo categories can Glavia coordinate?",
    a: "We coordinate end-to-end movements across Ocean Freight (FCL full container loads and LCL shared containers), Air Freight (priority, standard and cold-chain consolidations), and Pan-India Multimodal Road/Rail. We handle engineering machinery, electronics, automotive spares, pharmaceuticals, and consumer commodities.",
  },
  {
    q: "How does Glavia facilitate customs clearance at Nhava Sheva (JNPT) and Mumbai Air Cargo?",
    a: "Our team manages complete clearance operations under the leadership of Suresh Bhagwat. This includes advance electronic Bill of Entry filing via ICEGATE, HS code classification verification, customs duty assessment, bonded CFS destuffing, physical examination coordination, and Out-of-Charge (OOC) delivery orders.",
  },
  {
    q: "How do you help prevent port demurrage and container detention penalties?",
    a: "Demurrage typically occurs from documentation discrepancies and delayed filings. We initiate pre-arrival document audits before the vessel or flight arrives, ensuring all invoices, packing lists, and regulatory certifications are verified early to clear customs within the port's free days.",
  },
  {
    q: "Which Incoterms do you support for international import and export?",
    a: "We support all standard ICC Incoterms, including FOB (Free on Board), CIF (Cost, Insurance and Freight), EXW (Ex Works), DDP (Delivered Duty Paid), and DAP (Delivered at Place), coordinating freight charges and customs responsibilities transparently with all stakeholders.",
  },
  {
    q: "What trade advisory and regulatory consultation do you offer for USA and Europe?",
    a: "Backed by 25 years with UPS and Country Brokerage Manager leadership with Columbia Business School credentials, we advise on US Customs ISF (10+2) filing, EU Entry Summary Declarations (ENS), Rules of Origin, Free Trade Agreements (FTAs), and process improvement for corporate supply chains.",
  },
  {
    q: "How do I get an immediate quote or discuss an upcoming shipment?",
    a: "You can use our interactive Route Planner on this page, call our Mumbai operations office directly at +91 98203 48813, or email us at Sureshb@glavialogistic.com with your cargo origin, destination, and target dates.",
  },
] as const;

export function Faq() {
  return (
    <div className="flex flex-col">
      <Accordion.Root
        type="single"
        collapsible
        className="border-t border-ink/20"
      >
        {questions.map((item) => (
          <Accordion.Item value={item.q} key={item.q} className="border-b border-ink/20">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-tight text-ink hover:text-primary transition-colors sm:text-lg">
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-copy"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="max-w-prose pb-5 leading-relaxed text-sm text-copy sm:text-base">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="mt-8 flex items-center justify-between rounded-xl border border-panel/70 bg-canvas/70 p-4 text-xs">
        <span className="text-copy flex items-center gap-2">
          <MessageSquare size={15} className="text-primary" />
          Have a unique cargo or customs compliance query?
        </span>
        <a
          href={enquiry("Customs query")}
          className="font-semibold text-ink hover:underline"
        >
          Ask our specialists →
        </a>
      </div>
    </div>
  );
}

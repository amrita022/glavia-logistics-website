"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { enquiry } from "../lib/company";

const questions = [
  {
    q: "What freight forwarding services does Glavia offer?",
    a: "We manage ocean (FCL/LCL) and air cargo coordination across major global lanes, complete with carrier booking, documentation, and door delivery.",
  },
  {
    q: "How can Glavia help with customs clearance?",
    a: "Our Mumbai team handles direct ICEGATE EDI filing, tariff classification, and on-ground port/airport examination to ensure fast, demurrage-free clearance.",
  },
  {
    q: "Do you provide express and courier services?",
    a: "Yes. We manage time-definite door-to-door courier dispatch, priority airport clearance at Sahar ACC, and end-to-end milestone tracking.",
  },
  {
    q: "What trade and process consultation do you offer?",
    a: "We advise on US and European trade compliance (ISF 10+2, EUR.1), tariff classification, Incoterms risk, and cross-border supply chain mapping.",
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
            <Accordion.Content className="faq-answer max-w-prose pb-5 leading-relaxed text-sm text-copy sm:text-base">
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

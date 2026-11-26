"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { enquiry } from "../lib/company";

const questions = [
  {
    q: "What freight forwarding services does Glavia offer?",
    a: "We coordinate domestic and international shipments, including air and sea freight where applicable.",
  },
  {
    q: "How can Glavia help with customs clearance?",
    a: "We help with customs documentation and coordinate import and export clearance.",
  },
  {
    q: "Do you provide express and courier services?",
    a: "Yes. We support door-to-door courier shipments and provide tracking and updates.",
  },
  {
    q: "What trade and process consultation do you offer?",
    a: "We offer international trade advice and help businesses map and improve their logistics processes.",
  },
] as const;

export function Faq() {
  return (
    <div className="flex flex-col">
      <Accordion.Root
        type="single"
        collapsible
        className="grid gap-2.5"
      >
        {questions.map((item) => (
          <Accordion.Item value={item.q} key={item.q} className="faq-row rounded-xl border border-panel/80 bg-surface px-4 sm:px-5">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold tracking-tight text-ink hover:text-accent-text transition-colors sm:text-lg">
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

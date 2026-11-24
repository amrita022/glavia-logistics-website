"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { enquiry } from "../lib/company";

const questions = [
  {
    q: "What freight forwarding services does Glavia offer?",
    a: "We coordinate domestic and international shipments, including air and sea freight where applicable, and help with import and export documentation.",
  },
  {
    q: "How can Glavia help with customs clearance?",
    a: "We support import and export clearance by helping with documentation and applicable requirements and coordinating with relevant stakeholders.",
  },
  {
    q: "Do you provide express and courier services?",
    a: "Yes. We offer door-to-door shipments, import and export port clearance, tracking, and communication, including support for e-commerce businesses.",
  },
  {
    q: "What trade and process consultation do you offer?",
    a: "We offer international business consultation, including import and export consultation for the USA and Europe, process mapping, time studies, and project implementation.",
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

"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const questions = [
  [
    "Which shipments can Glavia help coordinate?",
    "We coordinate domestic and international freight movements, including air and sea freight where applicable, and offer door-to-door express and courier support.",
  ],
  [
    "Can you help with import and export clearance?",
    "Yes. We assist with customs documentation, clearance coordination and applicable regulatory requirements for imports and exports.",
  ],
  [
    "Do you support e-commerce businesses?",
    "Our express and courier services include door-to-door shipments, clearance at import and export ports, tracking and communication.",
  ],
  [
    "How do I discuss my shipment?",
    "Email or call our Mumbai team with your origin, destination, cargo details and timing. We can discuss the services that fit your requirements.",
  ],
] as const;

// Customised shadcn/ui accordion, using its Radix primitives.
export function Faq() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="border-t border-ink/20"
    >
      {questions.map(([q, a]) => (
        <Accordion.Item value={q} key={q} className="border-b border-ink/20">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold tracking-tight hover:text-copy">
              {q}
              <ChevronDown
                size={18}
                className="shrink-0 transition-transform group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="max-w-prose pb-6 leading-relaxed text-copy">
            {a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

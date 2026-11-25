import {
  Boxes,
  Container,
  FileCheck2,
  PackageCheck,
  Workflow,
} from "lucide-react";

export const services = [
  {
    id: "forwarding",
    name: "Freight forwarding",
    icon: Container,
    description:
      "Global ocean and air cargo coordination across major trade lanes with carrier booking.",
  },
  {
    id: "customs",
    name: "Customs clearance",
    icon: FileCheck2,
    description:
      "End-to-end ICEGATE EDI filing, tariff classification, and rapid on-ground port clearance.",
  },
  {
    id: "integrated",
    name: "Integrated logistics",
    icon: Boxes,
    description:
      "Multimodal supply chain planning, cross-docking, and automated milestone updates.",
  },
  {
    id: "express",
    name: "Express & courier",
    icon: PackageCheck,
    description:
      "Time-definite door-to-door courier dispatch, air hub handling, and priority delivery.",
  },
  {
    id: "consultation",
    name: "Trade consultation",
    icon: Workflow,
    description:
      "Incoterms risk advisory, US/EU regulatory compliance, and customs duty optimization.",
  },
] as const;

export const email = "Suresh@glavialogistic.com";
export const enquiry = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);

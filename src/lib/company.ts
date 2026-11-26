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
    details: [
      "International freight coordination",
      "Air and sea freight solutions, as applicable",
      "Import and export shipment support",
      "Shipment coordination and documentation",
    ],
  },
  {
    id: "customs",
    name: "Customs clearance",
    icon: FileCheck2,
    description:
      "End-to-end ICEGATE EDI filing, tariff classification, and rapid on-ground port clearance.",
    details: [
      "Import and export clearance coordination",
      "Customs documentation support",
      "Coordination with relevant stakeholders",
      "Support with applicable regulatory requirements",
    ],
  },
  {
    id: "integrated",
    name: "Integrated logistics support",
    icon: Boxes,
    description:
      "Multimodal supply chain planning, cross-docking, and automated milestone updates.",
    details: [
      "Shipment planning and coordination",
      "Import and export logistics support",
      "Communication and shipment updates",
      "Customer-focused logistics coordination",
    ],
  },
  {
    id: "express",
    name: "Express & courier services",
    icon: PackageCheck,
    description:
      "Time-definite door-to-door courier dispatch, air hub handling, and priority delivery.",
    details: [
      "Door to Door shipments",
      "Clearances at import and export ports",
      "Tracking and communication",
      "Customer-focused solutions for E-commerce businesses",
    ],
  },
  {
    id: "consultation",
    name: "Consultation & process improvements",
    icon: Workflow,
    description:
      "IOR compliance, process mapping, flow time studies, and USA/EU trade regulatory advisory.",
    details: [
      "International Business Consultation",
      "USA and Europe Export and Import consultation",
      "IOR (Importer of Record) compliance",
      "Process Improvement & Flow Mapping",
      "Process Time Study & Bottleneck Resolution",
      "Project implementation",
    ],
  },
] as const;

export const companyName = "Glavia Logistics LLP";
export const email = "Sureshb@glavialogistic.com";
export const secondaryEmail = "Suresh@glavialogistic.com";
export const phone = "9820348813";
export const address = "D/1802, Ekta Meadows, Siddharth Nagar, Mumbai - 400066";
export const website = "www.glavialogistic.com";

export const enquiry = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);

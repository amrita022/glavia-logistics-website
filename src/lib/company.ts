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
      "Domestic and international shipment coordination, including ocean and air freight options, import and export support, and documentation.",
    capabilities: [
      "FCL & LCL Ocean Freight",
      "Air Priority & Standard Cargo",
      "Port-to-Port & Door Delivery",
      "Carrier Booking & Documentation",
    ],
  },
  {
    id: "customs",
    name: "Customs clearance",
    icon: FileCheck2,
    description:
      "Import and export clearance coordination, with support for customs documents, stakeholders and applicable regulatory requirements.",
    capabilities: [
      "ICEGATE Electronic EDI Filing",
      "HS Code & Tariff Classification",
      "Port Demurrage & Dwell Control",
      "Allied Agency (FSSAI/ADC) Permits",
    ],
  },
  {
    id: "integrated",
    name: "Integrated logistics",
    icon: Boxes,
    description:
      "Shipment planning, coordination and updates that connect the different stages of your supply chain.",
    capabilities: [
      "Multimodal Rail & Road Movement",
      "Cross-Docking & CFS Coordination",
      "Milestone Status Updates",
      "Single-Point Account Oversight",
    ],
  },
  {
    id: "express",
    name: "Express & courier",
    icon: PackageCheck,
    description:
      "Door-to-door shipments, port clearance, tracking and communication for businesses, including e-commerce operators.",
    capabilities: [
      "Time-Definite Air Shipments",
      "Cross-Border E-Commerce Support",
      "Air Hub Expedited Clearance",
      "End-to-End Tracking Communication",
    ],
  },
  {
    id: "consultation",
    name: "Trade consultation",
    icon: Workflow,
    description:
      "USA and Europe import and export consultation, process mapping, time studies and project implementation.",
    capabilities: [
      "US (ISF 10+2) & EU Compliance",
      "Free Trade Agreements & Rules of Origin",
      "Process Mapping & Time Studies",
      "Customs Risk & Duty Optimization",
    ],
  },
] as const;

export const email = "Sureshb@glavialogistic.com";
export const enquiry = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);

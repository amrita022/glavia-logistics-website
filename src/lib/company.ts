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
      "Domestic and international shipment coordination, including air and sea freight options, import and export support, and documentation.",
  },
  {
    id: "customs",
    name: "Customs clearance",
    icon: FileCheck2,
    description:
      "Import and export clearance coordination, with support for customs documents, stakeholders and applicable regulatory requirements.",
  },
  {
    id: "integrated",
    name: "Integrated logistics",
    icon: Boxes,
    description:
      "Shipment planning, coordination and updates that connect the different stages of your supply chain.",
  },
  {
    id: "express",
    name: "Express & courier",
    icon: PackageCheck,
    description:
      "Door-to-door shipments, port clearance, tracking and communication for businesses, including e-commerce operators.",
  },
  {
    id: "consultation",
    name: "Trade consultation",
    icon: Workflow,
    description:
      "USA and Europe import and export consultation, process mapping, time studies and project implementation.",
  },
] as const;

export const email = "Sureshb@glavialogistic.com";
export const enquiry = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);

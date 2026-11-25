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
      "International business consultation, including import and export for the USA and Europe, plus process improvement, mapping, time studies and project implementation.",
  },
] as const;

export const email = "Suresh@glavialogistic.com";
export const enquiry = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);

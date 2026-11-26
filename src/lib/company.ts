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
      "International ocean and air cargo coordination across worldwide trade corridors.",
    tags: ["Air & Sea Freight", "Carrier Booking", "Documentation"],
  },
  {
    id: "customs",
    name: "Customs clearance",
    icon: FileCheck2,
    description:
      "End-to-end ICEGATE EDI filing, tariff classification, and expedited port clearance.",
    tags: ["ICEGATE EDI", "Tariff Classification", "DPD Clearance"],
  },
  {
    id: "integrated",
    name: "Integrated logistics",
    icon: Boxes,
    description:
      "Multimodal supply chain planning, cross-docking, and real-time milestone tracking.",
    tags: ["Supply Chain Planning", "Cross-Docking", "Milestone Tracking"],
  },
  {
    id: "express",
    name: "Express & courier",
    icon: PackageCheck,
    description:
      "Time-definite door-to-door courier dispatch, air hub handling, and priority delivery.",
    tags: ["Door-to-Door", "Port Handling", "E-Commerce Priority"],
  },
  {
    id: "consultation",
    name: "Consultation & IOR",
    icon: Workflow,
    description:
      "IOR representation, supply chain process mapping, time studies, and US/EU advisory.",
    tags: ["IOR Importer of Record", "Process Mapping", "Time Study Optimization"],
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

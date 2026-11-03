import { company } from "./company";

export const supplierFactsUpdated = "2026-11-03";

export const supplierFacts = [
  ["Brand", "JOZING Ceramics"],
  ["Legal company", company.legalName],
  ["Company registration", company.registrationYear],
  ["Ceramic experience", `Since ${company.ceramicExperienceSince}; distinct from the company's registration date`],
  ["Facility", `${company.facilityArea} facility and warehouse`],
  ["Official website", company.website],
  ["Supply paths", "Ready-stock / clearance lots and custom OEM/ODM sourcing"],
  ["Buyer types", "Importers, wholesalers, hospitality suppliers and brands"],
  ["Sales units", "Piece, set, carton, pallet, metric ton and container, depending on the offer"],
  ["Email", company.email],
  ["WhatsApp", company.whatsapp],
  ["Warehouse address", company.address],
] as const;

export const supplierFactsScope = "Company and facility information is published by JOZING. The linked independent laboratory reports describe specific submitted samples, not an independent audit of the business or approval of every product. Confirm current stock, price, MOQ, packing, dispatch timing and document requirements in a dated quotation.";

export const evidenceGuideSlugs = [
  "buy-ceramic-tableware-by-ton-from-china",
  "evaluate-ceramic-tableware-supplier-china",
];

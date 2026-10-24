import type { Guide } from "./guide-data";
import { testReports } from "../../lib/test-reports";

const evidenceLinks = [
  { href: "/supplier-profile/", label: "JOZING company facts, supply options and report scope" },
  { href: "/factory/test-reports/", label: "Original SGS and ZTS reports: samples, dates and results" },
  ...testReports.map(report => ({ href: report.file, label: `${report.title} — ${report.id} (PDF)` })),
];

export const evidenceGuideUpdates: Record<string, Pick<Guide, "sections" | "relatedLinks">> = {
  "buy-ceramic-tableware-by-ton-from-china": {
    relatedLinks: evidenceLinks,
    sections: [
      {
        heading: "A comparable quotation for a ceramic stock lot",
        paragraphs: ["Two offers at the same price per ton can contain different products, grades and quantities. Ask each supplier to complete the same lot-level information before comparing the purchase. A photograph of an assortment is not a packing list or a reserved quantity."],
        bullets: [
          "Lot reference, dated availability and quotation validity",
          "Material, shape, size range and the proportion of each product in the mix",
          "Net ceramic weight, gross packed weight and the weight used for billing",
          "Quality grade, agreed defect limits and inspection arrangements",
          "Carton count, pieces per carton, dimensions, total CBM and loading plan",
          "Packing charges, named shipping term and port, payment terms and dispatch schedule",
        ],
      },
      {
        heading: "Check food-contact evidence before accepting a mixed lot",
        paragraphs: ["Request the full report rather than a certificate logo or an isolated result. Check the sample description, report number, issue date, material, glaze and decoration against the proposed goods. A report for one soup plate does not establish the result for a mixed container of cups, bowls and decorated plates.", "JOZING publishes SGS report CANHG2307611901 and ZTS report ZTS23090909ZRCR1 as sample-specific evidence. The original PDFs and their scope are linked below. Confirm whether the selected lot is covered and whether updated product-specific testing is needed before ordering."],
      },
      {
        heading: "Requesting a stock-lot offer from JOZING",
        paragraphs: ["Send the product references or required assortment, quantity or target tonnage, acceptable quality grade, destination port and packing requirements. JOZING will confirm the current offer and its sales unit. A product shown with a per-piece price is not automatically available at a particular per-ton price.", "This guide is published by JOZING for buyers considering its products. It is not an independent ranking of suppliers; compare the same evidence and commercial terms across suppliers."],
      },
    ],
  },
  "evaluate-ceramic-tableware-supplier-china": {
    relatedLinks: evidenceLinks,
    sections: [
      {
        heading: "Separate company information from independent test evidence",
        paragraphs: ["A supplier profile establishes the company's own description of its business. Registration date, facility size and claimed capabilities should be supported by the appropriate business records or a site visit when material to your purchase. A laboratory report answers a narrower question about the submitted sample and test conditions; it is not a factory audit."],
      },
      {
        heading: "Reading the JOZING reports as an example",
        paragraphs: [
          ...testReports.map(report => `${report.id}, issued ${report.issued} by ${report.laboratory}: ${report.sample}. ${report.result}`),
          "The SGS conclusion says 'See Results'; the ZTS report records 'Pass' for its submitted samples. These are different conclusions and should be reported accurately. Neither report establishes that every present-day stock lot has been tested. Use the complete PDFs linked below and ask the issuing laboratory about unclear conditions, units or classifications.",
        ],
      },
      {
        heading: "Build an evidence-based supplier shortlist",
        paragraphs: ["Use one comparison sheet for each candidate. Mark missing evidence as unconfirmed rather than treating an attractive price or a general certification claim as proof. Check that the quote and payment beneficiary correspond to the supplier identity you agreed to contract with."],
        bullets: [
          "Identity: legal entity, current business documents and contact details",
          "Product fit: actual sample, material, decoration and documented tolerances",
          "Availability: dated lot quantity or an agreed production schedule",
          "Testing: complete report, identifiable sample and applicability to the proposed goods",
          "Execution: packing list, inspection access, loading plan and written claim process",
        ],
      },
      {
        heading: "Publisher and scope",
        paragraphs: ["This procurement guide is written and published by JOZING. JOZING's profile and original report downloads are provided so buyers can assess its offer. Their inclusion is not an independent endorsement or a claim that JOZING is the best supplier for every order."],
      },
    ],
  },
};

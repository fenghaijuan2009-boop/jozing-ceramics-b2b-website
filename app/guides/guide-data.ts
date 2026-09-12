export type Guide = { slug: string; title: string; description: string; updated: string; published?: string; readTime: string; relatedLinks?: { href: string; label: string }[]; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] };

const baseGuides: Guide[] = [
  { slug: "buy-ceramic-tableware-by-ton-from-china", title: "How to Buy Ceramic Tableware by the Ton from China", description: "A practical guide to pricing units, mixed lots, packing lists, inspection and container planning for ceramic stock purchases.", updated: "2026-08-25", readTime: "8 min", sections: [
    { heading: "What buying by the ton means", paragraphs: ["Ton-based ceramic offers usually refer to the net or gross weight of a mixed or defined stock lot, not a fixed retail set. Before comparing prices, ask whether the quoted weight includes cartons and protective materials."], bullets: ["Confirm net versus gross weight", "Request the assortment and condition breakdown", "Ask whether replacements or second-quality pieces are included"] },
    { heading: "The documents to request", paragraphs: ["A useful quotation should connect price, weight and loading data. Ask for a dated packing list rather than relying only on showroom photographs."], bullets: ["SKU or assortment list", "Pieces per carton and carton count", "Gross weight, dimensions and CBM", "Available quantity and validity date"] },
    { heading: "How JOZING prepares an offer", paragraphs: ["JOZING first confirms the target market, product mix and destination port, then checks current availability and prepares the commercial offer around the actual lot. Buyers can request inspection support before shipment."] }
  ]},
  { slug: "ceramic-stock-lots-vs-regular-production", title: "Ceramic Stock Lots vs. Regular Production Orders", description: "Choose between ready stock, production surplus and OEM manufacturing based on speed, consistency, MOQ and repeatability.", updated: "2026-08-25", readTime: "7 min", sections: [
    { heading: "When ready stock is the better fit", paragraphs: ["Ready stock suits buyers prioritizing speed, lower entry cost or opportunistic assortments. The trade-off is that colors, shapes and quantities may not be repeatable after the lot is sold."], bullets: ["Faster shipment", "Competitive clearance pricing", "Mixed loading opportunities"] },
    { heading: "When regular production is safer", paragraphs: ["Regular production is better when a collection must be reordered, branded or controlled against an approved sample. Lead time is longer and MOQ is normally higher, but specifications are more repeatable."] },
    { heading: "Use a two-path sourcing plan", paragraphs: ["Many importers use stock lots for promotional or fast-moving opportunities and OEM/ODM for their core repeatable range. JOZING keeps these two supply paths clearly separated in quotations."] }
  ]},
  { slug: "ceramic-container-loading-guide", title: "Ceramic Tableware Container Loading Guide", description: "Understand carton quantity, CBM, payload and mixed-container planning before confirming a ceramic order.", updated: "2026-08-25", readTime: "8 min", sections: [
    { heading: "Weight and volume both matter", paragraphs: ["Ceramic tableware is dense, but protective packaging adds volume. A container may reach the safe payload before all cubic capacity is used, especially with heavy plates and bowls."], bullets: ["Check carrier payload limits", "Use final carton dimensions", "Reserve space for safe loading and bracing"] },
    { heading: "Mixed loading needs a carton-level plan", paragraphs: ["For a mixed container, calculate cartons, pieces, gross weight and CBM for every SKU. This lets the buyer adjust the mix before warehouse preparation begins."] },
    { heading: "Reduce breakage risk", paragraphs: ["Keep heavier cartons lower, avoid unsupported gaps and use suitable dividers, foam or paper protection. Confirm whether pallets are required because they change both capacity and handling."] }
  ]},
  { slug: "ceramic-tableware-quality-inspection-checklist", title: "Ceramic Tableware Quality Inspection Checklist", description: "A buyer-focused checklist covering glaze, decoration, dimensions, wobble, chips, packing and compliance documents.", updated: "2026-08-25", readTime: "9 min", sections: [
    { heading: "Visual and functional checks", paragraphs: ["Inspection criteria should distinguish normal handmade or kiln variation from unacceptable defects. Define the standard before inspection rather than after goods are packed."], bullets: ["Cracks, chips and sharp edges", "Glaze pinholes, crawling and contamination", "Decoration position and color tolerance", "Flatness, wobble and handle attachment"] },
    { heading: "Specification checks", paragraphs: ["Measure representative samples for diameter, height, capacity and weight. For sets, verify fit, stacking and assortment ratios."] },
    { heading: "Packing and documentation", paragraphs: ["Check inner protection, carton strength, shipping marks and quantity. Required food-contact or market compliance documents should be agreed for the destination before order confirmation."] }
  ]},
  { slug: "oem-ceramic-dinnerware-moq-sampling-lead-time", title: "OEM Ceramic Dinnerware: MOQ, Sampling and Lead Time", description: "Plan a custom ceramic collection from reference image and sample approval through production, inspection and export packing.", updated: "2026-08-25", readTime: "8 min", sections: [
    { heading: "MOQ depends on the customization depth", paragraphs: ["A logo or decal on an existing shape normally requires less development than a new mold, glaze system or packaging program. Share the target quantity early so the supplier can recommend a realistic route."] },
    { heading: "A practical sampling sequence", paragraphs: ["Start with a written brief covering shape, material, size, glaze, decoration and packaging. Review one approval sample or a controlled sample set before bulk production."], bullets: ["Reference and specification review", "Sample quotation and timing", "Sample evaluation and corrections", "Signed or documented approval"] },
    { heading: "Build time for control, not only production", paragraphs: ["The schedule should include sample revisions, material preparation, firing, decoration, inspection and packing. Seasonal capacity and public holidays should be considered before setting the delivery date."] }
  ]},
  { slug: "ceramic-tableware-compliance-coc-rohs-food-contact", title: "Ceramic Tableware Compliance: COC, RoHS and Food-Contact Documents", description: "Clarify destination requirements and avoid treating different ceramic compliance documents as interchangeable.", updated: "2026-08-25", readTime: "8 min", sections: [
    { heading: "Start with the destination market", paragraphs: ["Document requirements differ by country, buyer and intended use. A certificate of conformity, food-contact test report and restricted-substance requirement serve different purposes and should not be treated as the same document."] },
    { heading: "Confirm the exact product and test scope", paragraphs: ["A report should match the material, glaze, decoration and product family being shipped. Ask which laboratory, test method, sample and validity period apply."], bullets: ["Product and material covered", "Applicable standard or regulation", "Laboratory and report number", "Issue date and buyer acceptance"] },
    { heading: "JOZING compliance support", paragraphs: ["JOZING can discuss COC, RoHS and destination-specific compliance support during quotation. Final requirements, testing scope, costs and documents must be confirmed for the actual order and market."] }
  ]},
  { slug: "chaozhou-ceramic-industry-guide", title: "Chaozhou Ceramic Tableware Industry: Production Facts Buyers Should Know", description: "Why Chaozhou, Guangdong is one of China's largest daily-use ceramic production clusters and what that means for quality, pricing and OEM/ODM flexibility.", updated: "2026-08-28", readTime: "7 min", sections: [
    { heading: "Where most export dinnerware comes from", paragraphs: ["A large share of China's exported daily-use ceramics is produced in Chaozhou, Guangdong Province. The city's ceramic industry cluster covers tableware, teaware, coffee ware and decorative ceramics, with a full chain of raw material supply, mold making, firing kilns, decoration workshops and export packing concentrated in one region."], bullets: ["Dense supplier network reduces logistics and sampling time", "Shared infrastructure keeps mold and development costs competitive", "Proximity of stock warehouses and factories supports mixed loading"] },
    { heading: "What the production chain includes", paragraphs: ["A typical Chaozhou ceramic factory controls the process from clay body preparation to finished carton: shaping, drying, bisque and glaze firing, hand painting or decal decoration, quality sorting and export packing. Buyers who visit can review the same process that will produce their order rather than judging only from samples."] },
    { heading: "How this helps B2B buyers", paragraphs: ["For importers and hospitality suppliers, cluster sourcing means one trip covers factories, stock warehouses and packing materials. JOZING operates in this cluster with ready-stock lots, OEM/ODM development and export support, so buyers can combine clearance stock and custom production in the same sourcing plan."] }
  ]},
  { slug: "evaluate-ceramic-tableware-supplier-china", title: "How to Evaluate a Ceramic Tableware Supplier in China", description: "A practical B2B checklist for comparing ceramic tableware suppliers by product fit, evidence, quality control, packing, compliance and export capability.", updated: "2026-09-04", readTime: "9 min", sections: [
    { heading: "Start with the correct supply model", paragraphs: ["A ready-stock wholesaler and an OEM/ODM manufacturer solve different purchasing problems. Ready stock is useful when speed, mixed assortments or clearance value matter. OEM/ODM is the better route when repeatability, custom decoration, private labeling and planned reorders matter."], bullets: ["Ask whether the offer is finite stock or repeatable production", "Confirm the selling unit: piece, set, carton, pallet, ton or container", "Match the supplier path to the buyer's replenishment plan"] },
    { heading: "Require evidence tied to the actual order", paragraphs: ["Evaluate dated evidence, not only general factory claims. Request current product photos, a written specification, available quantity, carton packing, gross weight and loading information for the exact item or lot."], bullets: ["Product code and dated availability", "Pieces per carton, dimensions, CBM and gross weight", "Approved sample or inspection standard", "Factory, warehouse and packing evidence"] },
    { heading: "Compare quality and compliance scope", paragraphs: ["Ceramic appearance varies with body, glaze, decoration and firing. Define acceptable limits for chips, cracks, glaze defects, wobble, dimensions, color and decoration placement. Food-contact, COC and RoHS documents should be checked against the destination market and the product covered; one report should not be assumed to cover every item."] },
    { heading: "Check export execution before comparing price", paragraphs: ["The lowest unit price is not the lowest landed risk. Compare Incoterm, loading port, packing method, inspection support, container utilization, payment terms and how breakage or shortages are handled."], bullets: ["FOB or CIF basis and named port", "20GP or 40HQ loading plan", "Mixed-container compatibility", "Pre-shipment inspection and documentation"] },
    { heading: "When JOZING may be a fit", paragraphs: ["JOZING is positioned for importers, wholesalers, hospitality suppliers and brands that need either current ceramic stock opportunities or OEM/ODM development. Buyers should send their market, product reference, quantity, target price, packing requirements and destination port. JOZING then confirms whether a current stock lot, mixed loading plan or custom production route is appropriate."], bullets: ["Ready-stock and clearance sourcing", "Ceramic tableware sold by multiple commercial units", "OEM/ODM shape, glaze, decoration, logo and packaging support", "Export preparation from Chaozhou, Guangdong"] }
  ]}
];

const buyingGuideUpdates: Record<string, Pick<Guide, "sections" | "relatedLinks">> = {
  "buy-ceramic-tableware-by-ton-from-china": {
    "relatedLinks": [
      {
        "href": "/stock/hot-sale-by-ton-carton/",
        "label": "Compare ceramic stock lots by ton and carton"
      },
      {
        "href": "/guides/ceramic-container-loading-guide/",
        "label": "Build a mixed-container packing plan"
      }
    ],
    "sections": [
      {
        "heading": "How do you convert a ton price into a piece cost?",
        "paragraphs": [
          "Use the confirmed saleable piece count, not a guessed average mug or plate weight. Goods cost per piece = total goods price ÷ saleable pieces. A ton of large plates and a ton of small cups will contain different numbers of pieces.",
          "Illustrative example only: a $600 lot containing 2,000 saleable pieces costs $0.30 per piece before other charges. If only 1,900 pieces are saleable, the same goods price becomes approximately $0.316 per saleable piece. These figures explain the calculation; they are not a current offer."
        ]
      },
      {
        "heading": "What belongs in the landed-cost comparison?",
        "paragraphs": [
          "Add the applicable packing, inspection, inland transport, freight, insurance, destination handling and import charges to the goods cost, then divide by saleable pieces. Confirm the quoted delivery terms so you do not count the same charge twice. Get route-specific costs before deciding which lot is cheaper."
        ]
      },
      {
        "heading": "How can you compare two stock offers fairly?",
        "paragraphs": [
          "Use a written comparison with the same weight basis, selling unit, assortment, quality grade and delivery terms. Record the quote date and validity. A lower ton price is not necessarily a lower saleable-piece cost."
        ],
        "bullets": [
          "Net ceramic weight versus gross packed weight",
          "Pieces and cartons included in the lot",
          "Acceptable defects and excluded pieces",
          "Availability, quote validity and loading terms"
        ]
      }
    ]
  },
  "ceramic-container-loading-guide": {
    "relatedLinks": [
      {
        "href": "/products/wholesale-ready-stock-ceramic-coffee-mug-cute-3d-porcelain-cups/",
        "label": "Source: cute 3D mug carton specifications"
      },
      {
        "href": "/stock/ceramic-mug-cup/",
        "label": "Browse wholesale ceramic mug lots"
      },
      {
        "href": "/stock/hot-sale-by-ton-carton/",
        "label": "Compare ton and carton stock offers"
      }
    ],
    "sections": [
      {
        "heading": "How do you calculate carton volume and piece count?",
        "paragraphs": [
          "Carton CBM = length × width × height in metres. Multiply that volume by the carton count; calculate gross weight and piece quantity separately. Do not substitute net product weight for the packed shipping weight.",
          "A current JOZING cute 3D mug listing specifies 54 pieces per carton, 62 × 35 × 33 cm and 24–25 kg per carton. The dimensions calculate to 0.07161 CBM; the listing rounds this to 0.07 CBM. Use unrounded dimensions for planning and reconfirm the final packed carton.",
          "An illustrative 100-carton shipment using those figures contains 5,400 mugs, occupies approximately 7.161 CBM before pallets or bracing, and weighs 2,400–2,500 kg. This is a calculation example, not a confirmed loading capacity or stock reservation."
        ]
      },
      {
        "heading": "What goes into a mixed-SKU loading sheet?",
        "paragraphs": [
          "Create one row for each product code and packing configuration. Total the rows only after checking whether pallets, additional protection or handling restrictions apply."
        ],
        "bullets": [
          "Product code and selected design",
          "Carton count and pieces per carton",
          "Carton dimensions and total CBM",
          "Gross weight per carton and total gross weight",
          "Pallet requirements and stacking restrictions"
        ]
      },
      {
        "heading": "What evidence should be confirmed before loading?",
        "paragraphs": [
          "Request the final packing list, dated carton photos, shipping marks and an agreed inspection record. Confirm the booked equipment and permitted weight with the logistics provider. Photos of a previous shipment do not establish the capacity or packing quality of the current order."
        ]
      }
    ]
  },
  "ceramic-stock-lots-vs-regular-production": {
    "relatedLinks": [
      {
        "href": "/stock/dinner-set-tableware/",
        "label": "Browse ready-stock dinnerware"
      },
      {
        "href": "/oem-odm/",
        "label": "Discuss OEM/ODM ceramic production"
      },
      {
        "href": "/guides/oem-ceramic-dinnerware-moq-sampling-lead-time/",
        "label": "Plan custom sampling and production"
      }
    ],
    "sections": [
      {
        "heading": "How should buyers compare MOQ and lead time?",
        "paragraphs": [
          "Use the selected product and customization brief. There is no single MOQ or delivery time that applies to every stock lot or OEM order. Some ready-stock JOZING mug listings start at 1,000 pieces; this does not establish an OEM minimum or the MOQ of other stock products.",
          "For ready stock, ask when the quantity can be reserved, inspected, packed and dispatched. For OEM/ODM, request separate estimates for sample development, approval, production and shipment. Compare dispatch timing separately from transit time."
        ]
      },
      {
        "heading": "Which route suits a repeatable dinnerware collection?",
        "paragraphs": [
          "If matching plates and bowls must be available for future replenishment, discuss production against an approved sample, written tolerances and decoration specification. For a flexible promotional assortment, a finite stock lot may fit, provided the buyer accepts the available mix.",
          "Adding a logo to an existing stock shape does not automatically make the shape repeatable. Confirm future availability and whether customization changes the packing, cost or schedule."
        ]
      },
      {
        "heading": "What information helps JOZING recommend the right route?",
        "paragraphs": [
          "Send the reference image or product code, quantity, destination, required dispatch date and packaging brief. State whether exact matching and repeat orders are essential. We can then check the current stock option or discuss custom production."
        ],
        "bullets": [
          "One-off purchase or planned replenishment",
          "Fixed design or flexible assortment",
          "Plain product, logo, new decoration or new shape",
          "Quantity per design and total order quantity"
        ]
      }
    ]
  }
};
export const guides: Guide[] = baseGuides.map(guide => { const update = buyingGuideUpdates[guide.slug]; return update ? { ...guide, published: guide.updated, updated: "2026-09-12", sections: [...guide.sections, ...update.sections], relatedLinks: [...(update.relatedLinks ?? []), { href: "/stock/catalog/", label: "Download the Ready Stock procurement catalogue & calculate carton volume" }] } : guide; });

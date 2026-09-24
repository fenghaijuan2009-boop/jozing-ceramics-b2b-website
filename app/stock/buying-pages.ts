export type BuyingPage = { title: string; description: string; intro: string; questions: { question: string; answer: string }[]; guide: string; guideLabel: string; selections?: { title: string; description: string; codes: string[] } };
export const buyingPages: Record<string, BuyingPage> = {
  "ceramic-bowl": {
    title: "Ceramic Bowls Wholesale | Ready Stock | JOZING",
    description: "Compare wholesale ceramic soup, cereal and serving bowls. Check capacity, handles, selling units and MOQ; request current stock and export packing.",
    intro: "Source ceramic bowls for retail and food service. Choose by serving capacity, rim shape, handles and storage needs, then confirm the specifications and packing of the selected lot.",
    questions: [
      { question: "Which bowl size should I choose?", answer: "Send the intended portion size and use, such as soup, cereal or sharing dishes. Compare capacity and outer dimensions on the individual listing; diameter alone does not describe usable volume." },
      { question: "Are lids, handles or saucers included?", answer: "Check the selected listing and ask for an itemized quote. A bowl, bowl-and-saucer set and lidded cocotte have different contents and selling units." },
      { question: "Can bowls be used in an oven or microwave?", answer: "Confirm the intended use, temperature limits and decoration with the selected product specification. Do not apply one item's care instructions to an entire mixed lot." },
      { question: "What packing information do I need?", answer: "Request units per carton, carton dimensions, gross weight and protective packing. For mixed orders, provide the quantities of each design and destination port." }
    ], guide: "ceramic-container-loading-guide", guideLabel: "Compare export packing and loading"
  },
  "ceramic-cup-saucers": {
    title: "Ceramic Cups & Saucers Wholesale | JOZING Ready Stock",
    description: "Browse wholesale ceramic espresso and coffee cups with saucers. Compare capacities, set contents, MOQ and packing for ready-stock export orders.",
    intro: "Compare ceramic espresso and coffee cup-and-saucer options for cafes, retailers and wholesalers. Check capacity, the pieces included in each set and the quoted selling unit before comparing prices.",
    questions: [
      { question: "Does a set include one cup and one saucer?", answer: "Confirm the exact contents on the chosen listing. Some offers are assorted lots sold by ton, while others have defined set contents. Milk jugs and accessories are quoted separately unless listed as included." },
      { question: "How do I select an espresso or coffee cup?", answer: "Match the cup capacity to the drinks you serve, then check the outer dimensions, handle clearance and saucer fit. Ask for a sample when stacking, machine clearance or presentation is important." },
      { question: "Can I reorder the same design?", answer: "Confirm remaining stock and replenishment potential before ordering. For a matching collection intended for repeat purchases, discuss an approved OEM specification." },
      { question: "Can I mix designs for export?", answer: "Send product codes and quantities. We will check assortment rules, MOQ per design and packing suitability for a shared shipment." }
    ], guide: "ceramic-stock-lots-vs-regular-production", guideLabel: "Choose ready stock or repeatable production"
  },
  "ceramic-mug-cup": {
    selections: { title: "Choose your wholesale mug assortment", description: "Compare white mugs for a simple range, colorful mugs for variety, and decorated 3D designs. Prices and MOQs below belong to each individual listing.", codes: ["STOCK · 09", "STOCK · 10", "JZ-A1601655571782"] },
    title: "Ready Stock Ceramic Mugs Wholesale | JOZING",
    description: "Compare ready-stock ceramic coffee mugs, listed MOQs and tier prices. Request current designs, carton quantities and export packing from JOZING.",
    intro: "Source assorted ceramic coffee mugs for wholesale, retail and promotional supply. Compare each listing's MOQ and price tiers, then request current designs and packing for your order.",
    questions: [
      { question: "What is the minimum order for wholesale ceramic mugs?", answer: "MOQ depends on the listing and assortment. For example, our 12oz white mug collection and cute 3D mug collection list a starting MOQ of 1,000 pieces. This is not a category-wide minimum; confirm the selected product and mix before ordering." },
      { question: "Can I mix mug designs in one order?", answer: "Send the product codes, preferred designs and quantities. We will confirm the available assortment, minimum quantity per design and whether the items can share a shipment. Ready-stock patterns may not be repeatable once sold." },
      { question: "What packing details should I compare?", answer: "Compare pieces per carton, carton dimensions, gross weight and CBM alongside the piece price. The cute 3D mug listing specifies 54 pieces per carton, 62 × 35 × 33 cm and 24–25 kg per carton. Packing varies by product; request the final packing list." },
      { question: "Are all mugs microwave and dishwasher safe?", answer: "Check the individual product specification, especially for metallic decoration or special finishes. Do not assume one mug's care instructions apply to every design in an assorted lot." }
    ], guide: "ceramic-container-loading-guide", guideLabel: "Plan carton quantities and mixed loading"
  },
  "hot-sale-by-ton-carton": {
    selections: { title: "Compare mixed tableware lots", description: "Start with white, colorful or black tableware. Ask for the actual assortment and confirm the weight basis before comparing ton prices. Freight and sorting requirements are quoted separately.", codes: ["JZ-A11000037703372", "STOCK · 13", "STOCK · 14"] },
    title: "Ceramic Stock Lots by Ton & Carton | JOZING Wholesale",
    description: "Browse ceramic stock lots sold by ton or carton. Compare MOQ, assortment, weight basis and packing before requesting a mixed-shipment quotation.",
    intro: "Buy ceramic stock lots by ton or carton for wholesale distribution. Each offer has its own selling unit, assortment and MOQ; compare the full packing list before comparing prices.",
    questions: [
      { question: "What does a price per ton include?", answer: "Confirm whether the quoted ton means 1,000 kg of net ceramic weight or gross packed weight. Ask which designs, sizes and condition grades are included, and whether the price includes loading or other services. Do not treat different weight bases as equivalent offers." },
      { question: "How do I estimate the cost per piece?", answer: "Divide the lot price by the confirmed saleable piece count. For illustration only, a $600 lot containing 2,000 saleable pieces has a goods cost of $0.30 per piece before freight and other costs. This example is not a JOZING quotation." },
      { question: "Can I select the exact assortment?", answer: "Some lots have a fixed mix; others may allow selection. Request dated photos, quantities by design and the written selection rules. Confirm any sorting charges and quality exclusions before paying." },
      { question: "What should I send for a quote?", answer: "Send the stock codes, target tonnage or carton count, acceptable assortment, destination port and packing requirements. We will check availability and prepare a lot-specific offer." }
    ], guide: "buy-ceramic-tableware-by-ton-from-china", guideLabel: "Calculate and compare ton-based offers"
  },
  "dinner-set-tableware": {
    selections: { title: "White ceramic dinnerware: individual plates or mixed lots", description: "Choose defined plate sizes when consistency matters, or a mixed white stock lot when your assortment is flexible. A mixed lot is not a matching dinner set.", codes: ["2026082901", "STOCK · 18", "JZ-A11000037703372"] },
    title: "Ready Stock Dinnerware Wholesale | Plates & Sets | JOZING",
    description: "Explore ready-stock ceramic plates and dinnerware lots for wholesale. Compare selling units, MOQs, designs and packing; request current availability.",
    intro: "Explore ready-stock plates and ceramic tableware for wholesale sourcing. Offers may be sold by piece, set, carton or ton; check each listing and confirm the available mix before ordering.",
    questions: [
      { question: "Does every dinnerware listing contain a complete set?", answer: "No. A listing may offer individual plates, a defined set or mixed tableware stock. Request an itemized list of the shapes, sizes and quantities included. Matching cups, bowls or replacement pieces should be confirmed separately." },
      { question: "Is ready stock suitable for repeat orders?", answer: "Ready stock can suit a one-off promotion or flexible assortment. For a repeatable hotel collection or branded retail range, discuss OEM/ODM production against an approved specification. Availability and reorder potential should be confirmed before choosing a supply route." },
      { question: "What should buyers inspect?", answer: "Agree acceptable limits for chips, cracks, glaze defects, plate wobble, decoration and size variation. Confirm packing protection and arrange inspection against the actual lot, rather than relying only on sample photos." },
      { question: "How do I request matching tableware?", answer: "Send the product reference, required pieces per set, order quantity and destination. Include any matching, logo or packaging requirements so we can check whether stock or custom production fits your request." }
    ], guide: "ceramic-stock-lots-vs-regular-production", guideLabel: "Compare ready stock with OEM/ODM"
  }
};

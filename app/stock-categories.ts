import { oemProductCodes } from "./product-classification";
export const stockCategories = [
  { slug: "stock-best-sale", name: "Stock Best Sale", codes: ["STOCK · 01", "STOCK · 03", "JZ202608", "JZ-A1601655571782"] },
  { slug: "hot-sale-by-ton-carton", name: "Hot Sale By Ton & Carton", codes: [11,13,14,15,16,22,23,24].map(n => `STOCK · ${n}`) },
  { slug: "dinner-set-tableware", name: "Dinner Set & Tableware", codes: ["2026071501", "2026082901", ...[1,3,6,14,15,18,19,20,21,22,23,24].map(n => `STOCK · ${String(n).padStart(2,"0")}`)] },
  { slug: "ceramic-mug-cup", name: "Ceramic Mug & Cup", codes: ["STOCK · 09", "STOCK · 10", "JZ-A1601655571782"] },
  { slug: "ceramic-cup-saucers", name: "Ceramic Cup & Saucers", codes: ["STOCK · 02", "JZ202608", "STOCK · 05", "STOCK · 11", "STOCK · 12"] },
  { slug: "ceramic-bowl", name: "Ceramic Bowl", codes: ["STOCK · 17"] },
  { slug: "ceramic-pot-kettle", name: "Ceramic Pot & Kettle", codes: [] },
  { slug: "ceramic-canister-jar", name: "Ceramic Canister & Jar", codes: [] },
  { slug: "ceramic-decoration-vase", name: "Ceramic Decoration & Vase", codes: [] },
  { slug: "ungrouped", name: "Ungrouped", codes: ["STOCK · 07"] },
].map(category => ({ ...category, codes: category.codes.filter(code => !oemProductCodes.includes(code)) }));

import { oemProductCodes } from "./product-classification";
export const stockCategories = [
  { slug: "stock-best-sale", name: "Stock Best Sale", codes: ["STOCK · 01", "STOCK · 03", "JZ202608", "JZ-A1601655571782"] },
  { slug: "hot-sale-by-ton-carton", name: "Hot Sale By Ton & Carton", codes: ["JZ-A1601713900493", "JZ-A11000036052189", "JZ-A1601732106162","JZ-A11000037703372", "JZ-A1601674765483", ...[11,13,14,15,16,22,23,24].map(n => `STOCK · ${n}`)] },
  { slug: "dinner-set-tableware", name: "Dinner Set & Tableware", codes: ["JZ-A11000036654737", "JZ-A1601777397875", "JZ-A11000036994605", "JZ-A1601736960864", "JZ-A11000037474766", "JZ-A1601791464547", "JZ-A11000037229098", "JZ-A11000037630204", "JZ-A11000036024809", "JZ-A11000036052189", "JZ-A1601732106162", "JZ-A11000037533117", "JZ-A1601777409261","JZ-A11000036948656", "JZ-A11000037703372", "JZ-A1601674765483", "2026071501", "2026082901", ...[1,3,6,14,15,18,19,20,21,22,23,24].map(n => `STOCK · ${String(n).padStart(2,"0")}`)] },
  { slug: "ceramic-mug-cup", name: "Ceramic Mug & Cup", codes: ["JZ-A1601753894472", "JZ-A1601772740165","STOCK · 09", "STOCK · 10", "JZ-A1601655571782"] },
  { slug: "ceramic-cup-saucers", name: "Ceramic Cup & Saucers", codes: ["JZ-A11000038186602", "JZ-A1601713900493", "JZ-A11000037791868", "STOCK · 02", "JZ202608", "STOCK · 05", "STOCK · 11", "STOCK · 12"] },
  { slug: "ceramic-bowl", name: "Ceramic Bowl", codes: ["JZ-A1601706217060", "JZ-A11000037474766", "JZ-A1601682686265", "JZ-A1601777409261", "STOCK · 20","STOCK · 17"] },
  { slug: "ceramic-pot-kettle", name: "Ceramic Pot & Kettle", codes: ["JZ-A11000037811603", "JZ-A11000038186602", "JZ-A11000037474766", ] },
  { slug: "ceramic-canister-jar", name: "Ceramic Canister & Jar", codes: ["JZ-A11000037735085", "JZ-A1600154684883"] },
  { slug: "ceramic-decoration-vase", name: "Ceramic Decoration & Vase", codes: ["JZ-A1601771195975", "JZ-A11000037735085", "JZ-A1601930734277", ] },
  { slug: "ungrouped", name: "Ungrouped", codes: ["STOCK · 07"] },
].map(category => ({ ...category, codes: category.codes.filter(code => !oemProductCodes.includes(code)) }));


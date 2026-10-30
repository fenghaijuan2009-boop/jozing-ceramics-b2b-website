import type { Metadata } from "next";
import Link from "next/link";
import { testReports } from "../lib/test-reports";
import "./home-clearance-faq.css";
import { oct12OemProducts } from "./imported-oem-products-oct12";
import { oct8StockProducts } from "./imported-stock-products-oct8";
import { oct15StockProducts } from "./imported-stock-products-oct15";
import { oct19StockProducts } from "./imported-stock-products-oct19";
import { oct23StockProducts } from "./imported-stock-products-oct23";
import { sep28StockProducts } from "./imported-stock-products-sep28";
import { ProcurementNav } from "./procurement-nav";
import { sep21StockProducts } from "./imported-stock-products-sep21";
import { sep18StockProducts } from "./imported-stock-products-sep18";
import { importedStockProducts } from "./imported-stock-products";
import { oemProductCodes } from "./product-classification";
import { InquiryForm } from "./inquiry-form";
import { SiteHeader, SiteFooter } from "./site-shell";
import "./home-optimization.css";
import { ProductCard } from "./product-card";

const homeTitle = "Wholesale Clearance Ceramic Tableware & Stocklots | JOZING";
const homeDescription = "Source JOZING clearance ceramic tableware from China. Selected items from $0.15/pc; bulk stocklots by ton or container. Confirm current stock, MOQ and shipping.";
export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: ["clearance ceramic tableware", "stocklot porcelain dinnerware", "cheap wholesale plates and bowls", "ceramic liquidation China", "bulk porcelain by ton", "hotel ware overstock", "jozing"],
  alternates: { canonical: "https://www.jozing.com/" },
  openGraph: { title: homeTitle, description: homeDescription, url: "https://www.jozing.com/", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "JOZING wholesale ceramic tableware" }] },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription, images: ["/og.png"] },
};
export type PriceTier = { price: string; quantity: string };
export type StockLot = {
  code: string;
  name: string;
  type: string;
  pack: string;
  stock: string;
  image: string;
  gallery?: string[];
  tiers?: PriceTier[];
  priceLabel?: string;
  material?: string;
  size?: string;
  capacity?: string;
  colors?: string;
  cartonQty?: string;
  availableStock?: string;
  leadTime?: string;
  loadingPort?: string;
  microwaveSafe?: boolean;
  dishwasherSafe?: boolean;
  oemOdm?: boolean;
  certifications?: string;
  packagingOptions?: string;
  description?: string;
  specificationsOnly?: boolean;
  specifications?: { label: string; value: string }[];
  detailSections?: { title: string; images: { src: string; alt: string; width: number; height: number }[] }[];
};

export const allProducts: StockLot[] = [
  {"code":"JZ-A1601655571782","name":"Wholesale Ceramic Coffee Mugs – 3D Animal Designs & Bulk Mugs Assortment","type":"Wholesale Ceramic Coffee Mugs – 3D Animal Designs & Bulk Mugs Assortment","pack":"Sold by piece","stock":"1,000 pieces","image":"/products/novelty-mugs-1601655571782/main-01.jpg","gallery":["/products/novelty-mugs-1601655571782/main-01.jpg","/products/novelty-mugs-1601655571782/main-02.jpg","/products/novelty-mugs-1601655571782/main-03.jpg","/products/novelty-mugs-1601655571782/main-04.jpg","/products/novelty-mugs-1601655571782/main-05.jpg","/products/novelty-mugs-1601655571782/main-06.jpg"],"priceLabel":"Price / piece","tiers":[{"price":"$0.42","quantity":"1,000–9,999 pieces"},{"price":"$0.38","quantity":"10,000–29,999 pieces"},{"price":"$0.33","quantity":"≥30,000 pieces"}],"material":"Ceramic","capacity":"300–400 ml","colors":"Colorful / assorted designs","cartonQty":"54 pieces / carton","description":"Source bulk ready-stock ceramic coffee mugs in mixed novelty designs, including 3D animal details, floral patterns and colorful decoration. Suitable for wholesale gift assortments, retail, home and office use. Selected designs are pictured with lids or spoons; confirm the exact contents, available designs and quantities before ordering. Supplier-listed care claims require confirmation for each design and accessory, especially metallic finishes. Prices are per piece; confirm freight, customization and final order terms separately.","specificationsOnly":true,"specifications":[{"label":"Product code","value":"JZ-A1601655571782"},{"label":"Model number","value":"2026101701"},{"label":"Material","value":"Ceramic"},{"label":"Product type","value":"Coffee mugs"},{"label":"Capacity","value":"300–400 ml"},{"label":"Color","value":"Colorful / assorted designs"},{"label":"Style","value":"Cute; hand-drawn 3D decoration"},{"label":"Features","value":"Reusable, stocked"},{"label":"Application","value":"Home, hotel, office, gift"},{"label":"Occasion","value":"Party"},{"label":"Brand","value":"JOZING"},{"label":"Place of origin","value":"Guangdong, China"},{"label":"Starting MOQ","value":"1,000 pieces"},{"label":"Packing quantity","value":"54 pieces / carton"},{"label":"Carton gross weight","value":"24–25 kg / carton"},{"label":"Carton size","value":"62 × 35 × 33 cm"},{"label":"Carton volume","value":"0.07 CBM / carton (supplier-listed; dimensions calculate to 0.07161 CBM)"},{"label":"Selling unit","value":"Single item"},{"label":"Single package size","value":"12 × 10 × 8 cm"},{"label":"Single gross weight","value":"0.42 kg"},{"label":"Microwave / dishwasher use","value":"Listed as suitable by supplier; confirm care instructions for each design, lid and spoon, especially metallic decoration"},{"label":"Lid and spoon","value":"Available on selected designs; confirm included pieces before ordering"},{"label":"Lead time","value":"Confirm current assortment, packing and dispatch schedule before ordering"}]},
  ...oct23StockProducts,
  ...oct19StockProducts,
  ...oct15StockProducts,
  ...oct12OemProducts,
  ...oct8StockProducts,
  ...sep28StockProducts,
  ...sep21StockProducts,
  ...sep18StockProducts,
  ...importedStockProducts.filter(product => product.code !== "STOCK · 20"),
  {
    "code": "JZ-A11000036948656",
    "name": "Ready Stock Ceramic Baking Dishes in Four Colors",
    "type": "Square and rectangular ceramic baking dishes",
    "pack": "Sold by piece · price varies by shape",
    "stock": "200 pieces",
    "priceLabel": "From / piece",
    "tiers": [
      {
        "price": "$0.33",
        "quantity": "200+ pieces · $0.33–$0.56 by shape"
      }
    ],
    "material": "Ceramic / stoneware",
    "colors": "Red, blue, green and gray",
    "microwaveSafe": true,
    "dishwasherSafe": true,
    "description": "Glossy ceramic baking dishes in square and rectangular shapes, with side handles and a stackable design. Four colors suit oven-to-table serving in home kitchens, cafés and restaurants. Prices range from US$0.33 to US$0.56 per piece depending on the selected shape; confirm the available color mix and final packing before ordering.",
    "specifications": [
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Model number",
        "value": "2026072502"
      },
      {
        "label": "Shapes",
        "value": "Square and rectangular"
      },
      {
        "label": "Oven safe",
        "value": "Yes"
      },
      {
        "label": "Single package size",
        "value": "17 × 13.5 × 6.5 cm"
      },
      {
        "label": "Single gross weight",
        "value": "0.880 kg"
      }
    ],
    "image": "/products/bakeware-11000036948656/main-01.webp",
    "gallery": [
      "/products/bakeware-11000036948656/main-01.webp",
      "/products/bakeware-11000036948656/main-02.webp",
      "/products/bakeware-11000036948656/main-03.webp",
      "/products/bakeware-11000036948656/main-04.webp",
      "/products/bakeware-11000036948656/main-05.webp",
      "/products/bakeware-11000036948656/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product details & applications",
        "images": [
          {
            "src": "/products/bakeware-11000036948656/detail-01.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 1"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-02.webp",
            "width": 1122,
            "height": 1122,
            "alt": "Square and rectangular ceramic baking dishes — product detail 2"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-03.webp",
            "width": 1122,
            "height": 1402,
            "alt": "Square and rectangular ceramic baking dishes — product detail 3"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-04.webp",
            "width": 1122,
            "height": 1402,
            "alt": "Square and rectangular ceramic baking dishes — product detail 4"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-05.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 5"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-06.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 6"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-07.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 7"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-08.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 8"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-09.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 9"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-10.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 10"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-11.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 11"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-12.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 12"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-13.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 13"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-14.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 14"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-15.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 15"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-16.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square and rectangular ceramic baking dishes — product detail 16"
          }
        ]
      },
      {
        "title": "Factory & wholesale packing",
        "images": [
          {
            "src": "/products/bakeware-11000036948656/detail-17.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 1"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-18.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and wholesale packing 2"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-19.webp",
            "width": 1500,
            "height": 1570,
            "alt": "JOZING ceramic production and wholesale packaging"
          },
          {
            "src": "/products/bakeware-11000036948656/detail-20.webp",
            "width": 1500,
            "height": 1526,
            "alt": "JOZING ceramic production and wholesale packaging"
          }
        ]
      }
    ]
  },
  {
    "code": "JZ-A11000037703372",
    "name": "Large White Ceramic Dinnerware Mixed Stock by the Ton",
    "type": "Assorted large white plates, bowls and mugs",
    "pack": "Sold by ton",
    "stock": "1 ton",
    "priceLabel": "Price / ton",
    "tiers": [
      {
        "price": "$299",
        "quantity": "1–14 tons"
      },
      {
        "price": "$284",
        "quantity": "15–27 tons"
      },
      {
        "price": "$269",
        "quantity": "≥28 tons"
      }
    ],
    "material": "Ceramic",
    "colors": "White",
    "cartonQty": "60–70 pieces / carton",
    "microwaveSafe": true,
    "dishwasherSafe": true,
    "description": "A ready-stock assortment of large white ceramic plates, bowls and mugs in mixed shapes. Sold by the ton for wholesale tableware buyers, restaurants and hotels. Contents vary by stock lot; confirm the assortment, condition, quantities and loading plan before ordering.",
    "specifications": [
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Model number",
        "value": "2026082302"
      },
      {
        "label": "Style",
        "value": "Contemporary"
      },
      {
        "label": "Shapes",
        "value": "Various"
      },
      {
        "label": "Oven safe",
        "value": "Yes"
      },
      {
        "label": "Carton size",
        "value": "50 × 30 × 30 cm"
      },
      {
        "label": "Weight per carton",
        "value": "23–24 kg"
      },
      {
        "label": "Cartons per ton",
        "value": "40–43 cartons (as listed; confirm packing by lot)"
      }
    ],
    "image": "/products/white-stock-11000037703372/main-01.webp",
    "gallery": [
      "/products/white-stock-11000037703372/main-01.webp",
      "/products/white-stock-11000037703372/main-02.webp",
      "/products/white-stock-11000037703372/main-03.webp",
      "/products/white-stock-11000037703372/main-04.webp",
      "/products/white-stock-11000037703372/main-05.webp",
      "/products/white-stock-11000037703372/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product details & applications",
        "images": [
          {
            "src": "/products/white-stock-11000037703372/detail-01.webp",
            "width": 1500,
            "height": 1500,
            "alt": "Assorted large white plates, bowls and mugs — product detail 1"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-02.webp",
            "width": 1500,
            "height": 1500,
            "alt": "Assorted large white plates, bowls and mugs — product detail 2"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-03.webp",
            "width": 1200,
            "height": 1600,
            "alt": "Assorted large white plates, bowls and mugs — product detail 3"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-04.webp",
            "width": 1200,
            "height": 1600,
            "alt": "Assorted large white plates, bowls and mugs — product detail 4"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-05.webp",
            "width": 1200,
            "height": 1600,
            "alt": "Assorted large white plates, bowls and mugs — product detail 5"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-06.webp",
            "width": 1200,
            "height": 1600,
            "alt": "Assorted large white plates, bowls and mugs — product detail 6"
          }
        ]
      },
      {
        "title": "Factory & wholesale packing",
        "images": [
          {
            "src": "/products/white-stock-11000037703372/detail-07.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 1"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-08.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and wholesale packing 2"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-09.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 3"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-10.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 4"
          },
          {
            "src": "/products/white-stock-11000037703372/detail-11.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and wholesale packing 5"
          }
        ]
      }
    ]
  },
  {
    "code": "JZ-A1601674765483",
    "name": "Luxury Gold Rim Ceramic Dinnerware Mixed Stock by the Ton",
    "type": "Colorful gold-rim porcelain tableware assortment",
    "pack": "Sold by ton",
    "stock": "1 ton",
    "priceLabel": "Price / ton",
    "tiers": [
      {
        "price": "$999",
        "quantity": "1–9 tons"
      },
      {
        "price": "$988",
        "quantity": "10–27 tons"
      },
      {
        "price": "$975",
        "quantity": "≥28 tons"
      }
    ],
    "material": "Ceramic / porcelain",
    "colors": "Assorted colors with gold-rim decoration",
    "cartonQty": "60–70 pieces / carton",
    "description": "Colorful ceramic dinnerware with decorative gold rims, supplied as a mixed ready-stock assortment by the ton. Suitable for wholesale tableware collections, hotel and restaurant service, and home dining. Shapes and colors vary by lot; confirm the available mix, care instructions and final packing before ordering.",
    "specifications": [
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Model number",
        "value": "2026052701"
      },
      {
        "label": "Style",
        "value": "Luxury"
      },
      {
        "label": "Pattern",
        "value": "Gold inlay"
      },
      {
        "label": "Shapes",
        "value": "Various"
      },
      {
        "label": "Carton size",
        "value": "50 × 30 × 30 cm"
      },
      {
        "label": "Weight per carton",
        "value": "23–24 kg"
      },
      {
        "label": "Cartons per ton",
        "value": "40–43 cartons (as listed; confirm packing by lot)"
      }
    ],
    "image": "/products/gold-rim-1601674765483/main-01.webp",
    "gallery": [
      "/products/gold-rim-1601674765483/main-01.webp",
      "/products/gold-rim-1601674765483/main-02.webp",
      "/products/gold-rim-1601674765483/main-03.webp",
      "/products/gold-rim-1601674765483/main-04.webp",
      "/products/gold-rim-1601674765483/main-05.webp",
      "/products/gold-rim-1601674765483/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product details & applications",
        "images": [
          {
            "src": "/products/gold-rim-1601674765483/detail-01.webp",
            "width": 1024,
            "height": 1536,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 1"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-02.webp",
            "width": 1024,
            "height": 1536,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 2"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-03.webp",
            "width": 1024,
            "height": 1536,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 3"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-04.webp",
            "width": 1024,
            "height": 1536,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 4"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-05.webp",
            "width": 1024,
            "height": 1536,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 5"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-06.webp",
            "width": 796,
            "height": 796,
            "alt": "Colorful gold-rim porcelain tableware assortment — product detail 6"
          }
        ]
      },
      {
        "title": "Factory & wholesale packing",
        "images": [
          {
            "src": "/products/gold-rim-1601674765483/detail-07.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 1"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-08.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 2"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-09.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and wholesale packing 3"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-10.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 4"
          },
          {
            "src": "/products/gold-rim-1601674765483/detail-11.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and wholesale packing 5"
          }
        ]
      }
    ]
  },
  {
    code: "2026071501",
    name: "10.2inch White Ceramic Leaf Pattern Serving Plate",
    type: "Blue leaf pattern · irregular ceramic plate",
    pack: "Sold by piece",
    stock: "200 pieces",
    image: "/products/leaf-plate-11000036706108/main-01.webp",
    gallery: Array.from({ length: 6 }, (_, index) => `/products/leaf-plate-11000036706108/main-${String(index + 1).padStart(2, "0")}.webp`),
    priceLabel: "Price / piece",
    tiers: [{ price: "$0.41", quantity: "200–2,999 pieces" }, { price: "$0.40", quantity: "3,000–4,999 pieces" }, { price: "$0.39", quantity: "≥5,000 pieces" }],
    material: "Ceramic",
    size: "10.2 inch / approximately 26 cm",
    colors: "White with blue leaf pattern",
    microwaveSafe: true,
    dishwasherSafe: true,
    oemOdm: true,
    description: "A white ceramic serving plate with a softly irregular outline and delicate blue leaf decoration. Its modern Nordic style suits everyday dining, cafés, desserts and party service. Available as ready stock, with microwave-safe and dishwasher-safe use.",
    specifications: [
      { label: "Shape", value: "Irregular" },
      { label: "Pattern", value: "Plant / blue leaves" },
      { label: "Style", value: "Minimalist / modern Nordic" },
      { label: "Origin", value: "Guangdong, China" },
      { label: "Selling unit", value: "Single item" },
      { label: "Single package size", value: "26 × 26 × 3 cm" },
      { label: "Single gross weight", value: "0.880 kg (including packaging)" },
    ],
    detailSections: [
    {
        "title": "Product features & serving ideas",
        "images": [
            {
                "src": "/products/leaf-plate-11000036706108/detail-01.webp",
                "width": 1254,
                "height": 1254,
                "alt": "White ceramic plates with blue leaf patterns arranged as a collection"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-02.webp",
                "width": 1254,
                "height": 1254,
                "alt": "White ceramic serving plate with blue leaf decoration"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-03.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Leaf pattern ceramic plate in a family dining setting"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-04.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Leaf pattern ceramic plate with coffee for everyday café use"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-05.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Ceramic plate material, glaze and care features"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-06.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Ceramic serving plate uses and wholesale supply options"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-07.webp",
                "width": 1448,
                "height": 1086,
                "alt": "Leaf pattern plates arranged for an outdoor dining event"
            }
        ]
    },
    {
        "title": "Ready-stock photos",
        "images": [
            {
                "src": "/products/leaf-plate-11000036706108/detail-08.webp",
                "width": 1800,
                "height": 1695,
                "alt": "Stacks of the ceramic plates in the warehouse"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-09.webp",
                "width": 1350,
                "height": 1800,
                "alt": "Leaf pattern ceramic plate inventory"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-10.webp",
                "width": 1350,
                "height": 1800,
                "alt": "Close-up of blue leaf pattern plates in stock"
            }
        ]
    },
    {
        "title": "Product views & dimensions",
        "images": [
            {
                "src": "/products/leaf-plate-11000036706108/detail-11.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Angled view of the white ceramic leaf pattern plate"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-12.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Side angle showing the irregular outline of the plate"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-13.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Top view of the white ceramic plate with blue leaves"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-14.webp",
                "width": 1254,
                "height": 1254,
                "alt": "Ceramic plate dimensions and product weight shown in the supplier image"
            }
        ]
    },
    {
        "title": "Factory, packaging & shipping",
        "images": [
            {
                "src": "/products/leaf-plate-11000036706108/detail-15.webp",
                "width": 1350,
                "height": 1800,
                "alt": "JOZING factory exterior"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-16.webp",
                "width": 1800,
                "height": 1350,
                "alt": "Factory warehouse with packed cartons"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-17.webp",
                "width": 1279,
                "height": 1706,
                "alt": "Wrapped export cartons prepared for handling"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-18.webp",
                "width": 1012,
                "height": 1800,
                "alt": "Packed cartons ready for shipping"
            },
            {
                "src": "/products/leaf-plate-11000036706108/detail-19.webp",
                "width": 1701,
                "height": 1703,
                "alt": "Shipping container used for export deliveries"
            }
        ]
    }
],
  },
  {
    code: "2026082901",
    name: "10.2inch and 8.3inch White Ceramic Steak Plate Set",
    type: "Two-piece round white ceramic dinner plate set",
    pack: "Sold by set",
    stock: "200 sets",
    image: "/products/steak-plate-11000038130317/main-01.webp",
    gallery: Array.from({ length: 6 }, (_, index) => `/products/steak-plate-11000038130317/main-${String(index + 1).padStart(2, "0")}.webp`),
    priceLabel: "Price / set",
    tiers: [{ price: "$0.90", quantity: "≥200 sets" }],
    material: "Ceramic",
    size: "10.2 inch (26 × 2.5 cm) and 8.3 inch (21 × 2.5 cm)",
    colors: "White",
    microwaveSafe: true,
    dishwasherSafe: true,
    description: "A two-piece white ceramic plate set for steak, dinner, salad and everyday serving. The contemporary round design has a glossy glaze, smooth surface and refined rim, and is suitable for restaurants, hotels, cafés, resorts and home dining.",
    specifications: [
      { label: "Plate type", value: "Plate / dish" },
      { label: "Shape", value: "Round" },
      { label: "Style", value: "Contemporary" },
      { label: "Model number", value: "2026082901" },
      { label: "Place of origin", value: "Guangdong, China" },
      { label: "Brand", value: "JOZING" },
      { label: "Usage", value: "Wedding, event, home, restaurant and hotel" },
      { label: "Safety", value: "Microwave, oven, dishwasher and sterilizer safe" },
      { label: "Selling unit", value: "Single item" },
      { label: "Single package size", value: "27.5 × 27.5 × 7 cm" },
      { label: "Single gross weight", value: "2.460 kg" },
    ],
  },
  { code:"STOCK · 01", name:"Lemon Hand-Painted Ceramic Tableware for Microwave and Grill Use", type:"Hand-painted plates · cup · serving ware", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-1.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 02", name:"JOZING Ceramic Coffee Cup and Flower-Shaped Saucer Set for Cappuccino", type:"Ceramic coffee cup and flower-shaped saucer", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-2.webp", priceLabel:"Price / set", tiers:[{price:"$2.98",quantity:"200–499 sets"},{price:"$2.68",quantity:"500–1,999 sets"},{price:"$2.37",quantity:"2,000–9,999 sets"}] },
  { code:"STOCK · 03", name:"Vintage Cottagecore Porcelain Dinnerware Set for Home, Café & Gift", type:"Vintage cottagecore porcelain dinnerware", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-3.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"JZ202608", name:"11oz Handmade Ins-Style Ceramic Mug & Saucer Set with Underglaze Color", type:"Cute breakfast and afternoon-tea cup set", pack:"Sold by set", stock:"48 sets", image:"/products/featured-row-4.webp", gallery:["/products/featured-row-4.webp","/products/jz202608-detail-1.webp","/products/jz202608-detail-2.webp","/products/jz202608-detail-3.webp","/products/jz202608-detail-4.webp"], priceLabel:"Price / set", tiers:[{price:"$2.54",quantity:"48–479 sets"},{price:"$2.39",quantity:"480–1,999 sets"},{price:"$2.01",quantity:"2,000–9,999 sets"}], material:"Porcelain", size:"To be confirmed", capacity:"300 ml / 11 oz", colors:"72 colors available", cartonQty:"48 sets / carton", availableStock:"50,000 sets", leadTime:"7 days", loadingPort:"Shenzhen / Xiamen", microwaveSafe:true, dishwasherSafe:true, oemOdm:true, certifications:"COC, RoHS", packagingOptions:"Color box" },
  { code:"STOCK · 05", name:"Cute Fruit Print Ceramic Coffee Cup & Saucer Set with Handle", type:"Colorful vintage strawberry tea mug set", pack:"Sold by set", stock:"48 sets", image:"/products/featured-row-5.webp", priceLabel:"Price / set", tiers:[{price:"$2.54",quantity:"48–479 sets"},{price:"$2.39",quantity:"480–1,999 sets"},{price:"$2.01",quantity:"2,000–9,999 sets"}] },
  { code:"STOCK · 06", name:"Vintage Dark Brown Floral Ceramic Dinnerware Set", type:"White daisy stoneware plates · bowls · coffee mugs", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-6.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 07", name:"Decorative Mug Selection", type:"Floral and butterfly cup designs", pack:"Details on request", stock:"Confirm today", image:"/products/featured-row-7.webp" },
  {
    code: "STOCK · 09",
    name: "12oz Stock Ceramic Mugs Wholesale",
    type: "White ceramic coffee and tea mug collection with assorted shapes and handles",
    pack: "Sold by piece",
    stock: "1,000 pieces",
    image: "/products/mug-11000037532651/main-01.webp",
    gallery: Array.from({ length: 6 }, (_, index) => `/products/mug-11000037532651/main-${String(index + 1).padStart(2, "0")}.webp`),
    priceLabel: "Price / piece",
    tiers: [{ price: "$0.24", quantity: "1,000–2,999 pieces" }, { price: "$0.22", quantity: "3,000–9,999 pieces" }, { price: "$0.21", quantity: "≥10,000 pieces" }],
    material: "Ceramic",
    capacity: "350–400 ml / approximately 12 oz",
    colors: "White body with assorted white, blue, brown, black and pink handles",
    microwaveSafe: true,
    dishwasherSafe: true,
    description: "A ready-stock collection of classic white ceramic mugs in assorted silhouettes, including round, straight-sided, faceted and softly curved shapes. Suitable for coffee, tea, water, home, office, hotel, gifts, weddings and parties.",
    specifications: [
      { label: "Product type", value: "Coffee mugs" },
      { label: "Accessories", value: "Handgrip" },
      { label: "Style", value: "Classic" },
      { label: "Features", value: "Reusable, stocked and eco-friendly" },
      { label: "Model number", value: "2026081001" },
      { label: "Place of origin", value: "Guangdong, China" },
      { label: "Brand", value: "JOZING" },
      { label: "Selling unit", value: "Single item" },
      { label: "Single package size", value: "12.5 × 12.5 × 10 cm" },
      { label: "Single gross weight", value: "0.470 kg" },
    ],
    detailSections: [{
      title: "Available mug shapes and handle styles",
      images: Array.from({ length: 13 }, (_, index) => ({
        src: `/products/mug-11000037532651/detail-${String(index + 1).padStart(2, "0")}.webp`,
        alt: `JOZING white ceramic mug style ${index + 1}`,
        width: index === 12 ? 800 : 1254,
        height: index === 12 ? 800 : 1254,
      })),
    }],
  },

  {
    "code": "STOCK · 11",
    "name": "90ml Capacity Porcelain Espresso Cup and Saucer Set Sell by Ton",
    "type": "90 ml white porcelain espresso cups and saucers",
    "pack": "Sold by ton",
    "stock": "1 ton",
    "priceLabel": "Price / ton",
    "tiers": [
      {
        "price": "$808.80",
        "quantity": "1–27 tons"
      },
      {
        "price": "$779.40",
        "quantity": "28–99 tons"
      },
      {
        "price": "$735.30",
        "quantity": "≥100 tons"
      }
    ],
    "material": "Ceramic / porcelain",
    "capacity": "90 ml",
    "colors": "White; gold-colored gift box",
    "description": "Small white ceramic espresso cups with matching saucers for coffee service, hospitality and gifting. The gallery shows plain and fluted designs, including a presentation box with six cups and six saucers. The displayed quotation is for bulk stock sold by ton. Gift-box packing is a separate option; confirm its contents, availability and quotation before ordering.",
    "specifications": [
      {
        "label": "Reference model",
        "value": "2026052001"
      },
      {
        "label": "Product type",
        "value": "Cups and saucers"
      },
      {
        "label": "Gift-box option",
        "value": "6 cups + 6 saucers; confirm separately from bulk-by-ton packing"
      },
      {
        "label": "Style",
        "value": "Minimalist coffee service"
      },
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Gift-box package size",
        "value": "32 × 14 × 7 cm"
      },
      {
        "label": "Gift-box gross weight",
        "value": "1.560 kg"
      },
      {
        "label": "Packing note",
        "value": "Gift-box measurements do not describe a bulk shipping carton"
      }
    ],
    "image": "/products/espresso-1601795859505/main-01.webp",
    "gallery": [
      "/products/espresso-1601795859505/main-01.webp",
      "/products/espresso-1601795859505/main-02.webp",
      "/products/espresso-1601795859505/main-03.webp",
      "/products/espresso-1601795859505/main-04.webp",
      "/products/espresso-1601795859505/main-05.webp",
      "/products/espresso-1601795859505/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product design & details",
        "images": [
          {
            "src": "/products/espresso-1601795859505/detail-01.webp",
            "width": 1254,
            "height": 1254,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 1"
          },
          {
            "src": "/products/espresso-1601795859505/detail-02.webp",
            "width": 1254,
            "height": 1254,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 2"
          },
          {
            "src": "/products/espresso-1601795859505/detail-03.webp",
            "width": 1500,
            "height": 1500,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 3"
          },
          {
            "src": "/products/espresso-1601795859505/detail-04.webp",
            "width": 1254,
            "height": 1254,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 4"
          },
          {
            "src": "/products/espresso-1601795859505/detail-05.webp",
            "width": 1254,
            "height": 1254,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 5"
          },
          {
            "src": "/products/espresso-1601795859505/detail-06.webp",
            "width": 800,
            "height": 800,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 6"
          },
          {
            "src": "/products/espresso-1601795859505/detail-07.webp",
            "width": 1024,
            "height": 1024,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 7"
          },
          {
            "src": "/products/espresso-1601795859505/detail-08.webp",
            "width": 1500,
            "height": 1500,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 8"
          },
          {
            "src": "/products/espresso-1601795859505/detail-09.webp",
            "width": 1024,
            "height": 1024,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 9"
          },
          {
            "src": "/products/espresso-1601795859505/detail-10.webp",
            "width": 1500,
            "height": 1500,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 10"
          },
          {
            "src": "/products/espresso-1601795859505/detail-11.webp",
            "width": 1254,
            "height": 1254,
            "alt": "90 ml white porcelain espresso cups and saucers — detail 11"
          }
        ]
      },
      {
        "title": "Factory & export packing",
        "images": [
          {
            "src": "/products/espresso-1601795859505/detail-12.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 1"
          },
          {
            "src": "/products/espresso-1601795859505/detail-13.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and export packing — image 2"
          },
          {
            "src": "/products/espresso-1601795859505/detail-14.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 3"
          },
          {
            "src": "/products/espresso-1601795859505/detail-15.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 4"
          },
          {
            "src": "/products/espresso-1601795859505/detail-16.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and export packing — image 5"
          }
        ]
      }
    ]
  },
  {
    "code": "STOCK · 12",
    "name": "Dinnerware Supplier Stock Lot Coffee Cup Set",
    "type": "220 ml white ceramic cup and saucer with embossed lace pattern",
    "pack": "Sold by set",
    "stock": "200 sets",
    "priceLabel": "Price / set",
    "tiers": [
      {
        "price": "$0.45",
        "quantity": "200–999 sets"
      },
      {
        "price": "$0.40",
        "quantity": "1,000–4,999 sets"
      },
      {
        "price": "$0.35",
        "quantity": "≥5,000 sets"
      }
    ],
    "material": "Ceramic / porcelain",
    "capacity": "220 ml (approximately 7 oz)",
    "colors": "White",
    "dishwasherSafe": true,
    "description": "A white ceramic coffee cup and matching saucer with an embossed lace crochet pattern. The rounded cup and decorative relief suit breakfast, afternoon tea, cafés and gift assortments. Dishwasher safe; confirm the current lot and packaging before ordering.",
    "specifications": [
      {
        "label": "Product type",
        "value": "Coffee cup and saucer set"
      },
      {
        "label": "Decoration",
        "value": "Embossed lace / crochet pattern"
      },
      {
        "label": "Shape",
        "value": "Round"
      },
      {
        "label": "Saucer diameter",
        "value": "6.5 inch / approximately 16.5 cm"
      },
      {
        "label": "Technique",
        "value": "Underglaze"
      },
      {
        "label": "Style",
        "value": "Contemporary / vintage-inspired"
      },
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Single package size",
        "value": "16.5 × 12 × 10.5 cm"
      },
      {
        "label": "Single gross weight",
        "value": "0.650 kg"
      }
    ],
    "image": "/products/lace-cup-1601722627309/main-01.webp",
    "gallery": [
      "/products/lace-cup-1601722627309/main-01.webp",
      "/products/lace-cup-1601722627309/main-02.webp",
      "/products/lace-cup-1601722627309/main-03.webp",
      "/products/lace-cup-1601722627309/main-04.webp",
      "/products/lace-cup-1601722627309/main-05.webp",
      "/products/lace-cup-1601722627309/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product design & details",
        "images": [
          {
            "src": "/products/lace-cup-1601722627309/detail-01.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 1"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-02.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 2"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-03.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 3"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-04.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 4"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-05.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 5"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-06.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 6"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-08.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 7"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-09.webp",
            "width": 1254,
            "height": 1254,
            "alt": "220 ml white ceramic cup and saucer with embossed lace pattern — detail 8"
          }
        ]
      },
      {
        "title": "Factory & export packing",
        "images": [
          {
            "src": "/products/lace-cup-1601722627309/detail-07.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 1"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-10.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and export packing — image 2"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-11.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 3"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-12.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and export packing — image 4"
          },
          {
            "src": "/products/lace-cup-1601722627309/detail-13.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and export packing — image 5"
          }
        ]
      }
    ]
  },
  {
    "code": "STOCK · 13",
    "name": "Wholesale Colorful Porcelain Mix Mugs Bowls Plates by the Ton",
    "type": "Mixed colorful porcelain stock",
    "pack": "Sold by ton",
    "stock": "1 ton",
    "priceLabel": "Price / ton",
    "tiers": [
      {
        "price": "$588",
        "quantity": "1–4 tons"
      },
      {
        "price": "$559",
        "quantity": "5–27 tons"
      },
      {
        "price": "$529",
        "quantity": "≥28 tons"
      }
    ],
    "material": "Ceramic / porcelain",
    "colors": "Assorted colors",
    "cartonQty": "60–70 pieces / carton",
    "microwaveSafe": true,
    "dishwasherSafe": true,
    "description": "Ready-stock ceramic kitchenware including colorful mugs, bowls and plates in assorted shapes. Supplied in mixed cartons and sold by the ton. The assortment varies with available stock; confirm the current mix, quantities, condition and packing plan before ordering.",
    "specifications": [
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Model number",
        "value": "2026080501"
      },
      {
        "label": "Style",
        "value": "Modern"
      },
      {
        "label": "Technique",
        "value": "Underglazed"
      },
      {
        "label": "Shapes",
        "value": "Various"
      },
      {
        "label": "Carton size",
        "value": "50 × 30 × 30 cm"
      },
      {
        "label": "Weight per carton",
        "value": "23–24 kg"
      },
      {
        "label": "Cartons per ton",
        "value": "40–43 cartons (as listed; confirm packing by lot)"
      }
    ],
    "image": "/products/color-mix-11000037428009/main-01.webp",
    "gallery": [
      "/products/color-mix-11000037428009/main-01.webp",
      "/products/color-mix-11000037428009/main-02.webp",
      "/products/color-mix-11000037428009/main-03.webp",
      "/products/color-mix-11000037428009/main-04.webp",
      "/products/color-mix-11000037428009/main-05.webp",
      "/products/color-mix-11000037428009/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product details & applications",
        "images": [
          {
            "src": "/products/color-mix-11000037428009/detail-01.webp",
            "width": 1500,
            "height": 1500,
            "alt": "Mixed colorful porcelain stock — product detail 1"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-02.webp",
            "width": 1164,
            "height": 1600,
            "alt": "Mixed colorful porcelain stock — product detail 2"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-03.webp",
            "width": 1500,
            "height": 1125,
            "alt": "Mixed colorful porcelain stock — product detail 3"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-04.webp",
            "width": 1500,
            "height": 1125,
            "alt": "Mixed colorful porcelain stock — product detail 4"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-05.webp",
            "width": 1500,
            "height": 1125,
            "alt": "Mixed colorful porcelain stock — product detail 5"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-06.webp",
            "width": 1500,
            "height": 1125,
            "alt": "Mixed colorful porcelain stock — product detail 6"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-07.webp",
            "width": 798,
            "height": 599,
            "alt": "Mixed colorful porcelain stock — product detail 7"
          }
        ]
      },
      {
        "title": "Factory & wholesale packing",
        "images": [
          {
            "src": "/products/color-mix-11000037428009/detail-09.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 1"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-10.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and wholesale packing 2"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-11.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 3"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-12.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 4"
          },
          {
            "src": "/products/color-mix-11000037428009/detail-13.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and wholesale packing 5"
          }
        ]
      }
    ]
  },
  { code:"STOCK · 14", name:"Ready Stock Black Porcelain Dinnerware by the Ton", type:"Modern black porcelain plates and bowls", pack:"Sold by ton", stock:"1 ton", image:"/products/black-dinnerware-1600788258230/main-01.webp", gallery:["/products/black-dinnerware-1600788258230/main-01.webp","/products/black-dinnerware-1600788258230/main-02.webp","/products/black-dinnerware-1600788258230/main-03.webp","/products/black-dinnerware-1600788258230/main-04.webp","/products/black-dinnerware-1600788258230/main-05.webp","/products/black-dinnerware-1600788258230/main-06.webp"], priceLabel:"Price / ton", tiers:[{price:"$515",quantity:"1–14 tons"},{price:"$485",quantity:"15–27 tons"},{price:"$455",quantity:"≥28 tons"}], material:"Ceramic / porcelain", colors:"Black", microwaveSafe:true, dishwasherSafe:true, description:"Modern black ceramic dinnerware stock lot with assorted plates, bowls and serving pieces. Suitable for home, hotel, restaurant, coffee service and mixed-container buyers. Availability changes quickly; confirm the current quantity, condition, packing and loading plan before ordering.", specificationsOnly:true, specifications:[{label:"Product code",value:"STOCK · 14"},{label:"Model number",value:"2026062101"},{label:"Material",value:"Ceramic"},{label:"Dinnerware type",value:"Dinnerware sets"},{label:"Shape",value:"Multiple"},{label:"Style",value:"Modern"},{label:"Color",value:"Black"},{label:"Features",value:"Durable, stocked, eco-friendly, microwave safe"},{label:"Microwave safe",value:"Yes"},{label:"Dishwasher safe",value:"Yes"},{label:"Usage",value:"Home, hotel, restaurant, coffee, salad and beverages"},{label:"Quality grade",value:"A grade"},{label:"Brand",value:"JOZING"},{label:"Place of origin",value:"Guangdong, China"},{label:"Starting MOQ",value:"1 ton"},{label:"Delivery time",value:"1–7 days; confirm before ordering"},{label:"Carton size",value:"50 × 30 × 30 cm"},{label:"Weight per carton",value:"23–24 kg / carton"},{label:"Packing quantity",value:"60–70 pieces / carton"},{label:"Cartons per ton",value:"40–43 cartons"},{label:"OEM / ODM",value:"Subject to order quantity"}] },
  { code:"STOCK · 15", name:"Factory Direct White Ceramic Plates Bowls Dishes Mix Packaging", type:"White ceramic mixed packaging", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-15.webp", tiers:[{price:"$258",quantity:"1–9 tons"},{price:"$242",quantity:"10–27 tons"},{price:"$228",quantity:"≥28 tons"}] },
  { code:"STOCK · 16", name:"Unbeatable Bulk Pricing Porcelain Stackable Baking Pans Mixed Sale by Ton", type:"Stackable baking pans · mixed sale", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-16.webp", gallery:["/products/bakeware-1601779255006/main-01.webp","/products/bakeware-1601779255006/main-02.webp","/products/bakeware-1601779255006/main-03.webp","/products/bakeware-1601779255006/main-04.webp","/products/bakeware-1601779255006/main-05.webp","/products/bakeware-1601779255006/main-06.webp"], specificationsOnly:true, specifications:[{label:"Product code",value:"STOCK · 16"},{label:"Baking dishes & pans type",value:"Souffle Dishes & Ramekins"},{label:"Material",value:"Ceramic"},{label:"Shape",value:"Various"},{label:"Coating",value:"Ceramic Coating"},{label:"Thickness",value:"Various"},{label:"Feature",value:"Durable, Eco-Friendly, food safe"},{label:"Model number",value:"2026050702"},{label:"Place of origin",value:"Guangdong, China"},{label:"Brand name",value:"Jozing"},{label:"Usage",value:"Home Kitchen"},{label:"Carton Size",value:"44*44*31CM"},{label:"Weight Per Box",value:"22-23KG/CTN"},{label:"Quantity of Each Carton",value:"30-35PCS/CTN"},{label:"Per ton, Number of Boxes",value:"43-45CTN"},{label:"Color",value:"Mix"}], tiers:[{price:"$609",quantity:"1–9 tons"},{price:"$594",quantity:"10–27 tons"},{price:"$565",quantity:"≥28 tons"}] },
  { code:"STOCK · 17", name:"3.5inch Fluted Ceramic Ramekin Set", type:"Colorful fluted ceramic ramekins", pack:"Sold by piece", stock:"200 pieces", image:"/products/featured-row-17.webp", priceLabel:"Price / piece", tiers:[{price:"$0.15",quantity:"200–1,999 pieces"},{price:"$0.13",quantity:"2,000–9,999 pieces"},{price:"$0.12",quantity:"≥10,000 pieces"}] },
  {
    "code": "STOCK · 18",
    "name": "Square White Ceramic Dinnerware Plate Set",
    "type": "Square white ceramic plates · three sizes",
    "pack": "MOQ 300 per size",
    "stock": "300 pieces",
    "priceLabel": "Price by size",
    "tiers": [
      {
        "price": "$0.56",
        "quantity": "Large · MOQ 300"
      },
      {
        "price": "$0.32",
        "quantity": "Medium · MOQ 300"
      },
      {
        "price": "$0.21",
        "quantity": "Small · MOQ 300"
      }
    ],
    "material": "Ceramic / porcelain",
    "colors": "White",
    "size": "Large 10.6 inch · medium 7.5 inch · small 5.7 inch (source options)",
    "microwaveSafe": true,
    "dishwasherSafe": true,
    "description": "Three nesting sizes of white square ceramic plates with pierced lattice borders, scalloped edges and embossed decoration. Suitable for desserts, serving and table settings at home, cafés, hotels and wedding events. Prices are per plate by size; confirm exact measurements and packing before ordering.",
    "specifications": [
      {
        "label": "Brand",
        "value": "JOZING"
      },
      {
        "label": "Place of origin",
        "value": "Guangdong, China"
      },
      {
        "label": "Model number",
        "value": "2026080601"
      },
      {
        "label": "Shape",
        "value": "Square"
      },
      {
        "label": "Style",
        "value": "Classic"
      },
      {
        "label": "Design",
        "value": "Pierced lattice border with scalloped edges"
      },
      {
        "label": "Single package size",
        "value": "27 × 27 × 2.5 cm"
      },
      {
        "label": "Single gross weight",
        "value": "1.030 kg"
      }
    ],
    "image": "/products/square-plates-11000037447074/main-01.webp",
    "gallery": [
      "/products/square-plates-11000037447074/main-01.webp",
      "/products/square-plates-11000037447074/main-02.webp",
      "/products/square-plates-11000037447074/main-03.webp",
      "/products/square-plates-11000037447074/main-04.webp",
      "/products/square-plates-11000037447074/main-05.webp",
      "/products/square-plates-11000037447074/main-06.webp"
    ],
    "detailSections": [
      {
        "title": "Product details & applications",
        "images": [
          {
            "src": "/products/square-plates-11000037447074/detail-01.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 1"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-02.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 2"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-03.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 3"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-04.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 4"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-05.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 5"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-06.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 6"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-07.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 7"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-08.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 8"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-09.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 9"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-10.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 10"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-12.webp",
            "width": 1254,
            "height": 1254,
            "alt": "Square white ceramic plates · three sizes — product detail 11"
          }
        ]
      },
      {
        "title": "Factory & wholesale packing",
        "images": [
          {
            "src": "/products/square-plates-11000037447074/detail-11.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 1"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-13.webp",
            "width": 1200,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 2"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-14.webp",
            "width": 1500,
            "height": 1125,
            "alt": "JOZING factory and wholesale packing 3"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-15.webp",
            "width": 900,
            "height": 1600,
            "alt": "JOZING factory and wholesale packing 4"
          },
          {
            "src": "/products/square-plates-11000037447074/detail-16.webp",
            "width": 1500,
            "height": 1502,
            "alt": "JOZING factory and wholesale packing 5"
          }
        ]
      }
    ]
  },
  { code:"STOCK · 19", name:"Clearance Stock Unbeatable Bulk Pricing Porcelain Wavy Edge Serving Dish", type:"Wavy-edge porcelain serving dishes", pack:"Sold by piece", stock:"200 pieces", image:"/products/featured-row-19.webp", priceLabel:"Price / piece", tiers:[{price:"$0.41",quantity:"200–2,999 pieces"},{price:"$0.40",quantity:"3,000–49,999 pieces"},{price:"$0.39",quantity:"≥50,000 pieces"}] },
  importedStockProducts.find(product => product.code === "STOCK · 20")!,
  { code:"STOCK · 21", name:"Wholesale Vintage Embossed White Ceramic 8-inch and 10-inch Dinnerware Set for Wedding", type:"Vintage embossed white ceramic dinnerware", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-21.webp", priceLabel:"Price / set", tiers:[{price:"$0.90",quantity:"200–999 sets"},{price:"$0.80",quantity:"1,000–4,999 sets"},{price:"$0.70",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 22", name:"Factory Direct Large 14–20 inch Porcelain White Serving Platters Stocked Sell by Ton", type:"Large white porcelain serving platters", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-22.webp", priceLabel:"Price / ton", tiers:[{price:"$430",quantity:"1–14 tons"},{price:"$420",quantity:"15–27 tons"},{price:"$410",quantity:"≥28 tons"}] },
  { code:"STOCK · 23", name:"Romantic Heart Lace Pink Ceramic Dessert Plate Set Sell by Cartons", type:"Pink heart-lace ceramic dessert plates", pack:"Sold by carton", stock:"6 cartons", image:"/products/featured-row-23.webp", gallery:["/products/pink-lace-1601769468616/main-01.webp","/products/pink-lace-1601769468616/main-02.webp","/products/pink-lace-1601769468616/main-03.webp","/products/pink-lace-1601769468616/main-04.webp","/products/pink-lace-1601769468616/main-05.webp","/products/pink-lace-1601769468616/main-06.webp"], priceLabel:"Price / carton", tiers:[{price:"$24",quantity:"6–99 cartons"},{price:"$23",quantity:"100–299 cartons"},{price:"$22",quantity:"≥300 cartons"}] },
  { code:"STOCK · 24", name:"Wholesale Price Ready Stock Mix Gold Inlay Luxury Porcelain Ceramic Tableware Set Sell by Ton", type:"Mixed gold-inlay luxury porcelain", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-24.webp", gallery:["/products/gold-inlay-1601699109013/main-01.webp","/products/gold-inlay-1601699109013/main-02.webp","/products/gold-inlay-1601699109013/main-03.webp","/products/gold-inlay-1601699109013/main-04.webp","/products/gold-inlay-1601699109013/main-05.webp","/products/gold-inlay-1601699109013/main-06.webp"], priceLabel:"Price / ton", tiers:[{price:"$1,172",quantity:"1–4 tons"},{price:"$1,128",quantity:"5–9 tons"},{price:"$1,100",quantity:"≥10 tons"}] },
];

export { oemProductCodes } from "./product-classification";
export const stockLots = allProducts.filter(product => !oemProductCodes.includes(product.code));
export const oemProducts = allProducts.filter(product => oemProductCodes.includes(product.code));

const featuredCodes = [
  "JZ-A11000036308030", "JZ-A1601655571782", "JZ-A1601732826384",
  "JZ-A1601757506179", "JZ-A1601682648513", "JZ-A1601695480425",
  "JZ-A1601764290018", "STOCK · 09", "STOCK · 10",
  "JZ-A11000036994605", "JZ-A1601791464547", "STOCK · 22",
];
const featuredProducts = featuredCodes.flatMap(code => {
  const product = stockLots.find(item => item.code === code);
  return product ? [product] : [];
});
const realPhotos = [
  { src: "/factory/jozing-warehouse", title: "Cartons in the JOZING warehouse", width: 4032, height: 3024 },
  { src: "/factory/jozing-facility-exterior", title: "Facility exterior in Chaozhou", width: 1280, height: 1280 },
  { src: "/factory/jozing-container-dispatch", title: "Container on a transport truck", width: 1701, height: 1703 },
];

export default function Home() {
  return <main className="optimized-home"><SiteHeader />
    <section className="sourcing-hero shell" id="top" aria-labelledby="home-title">
      <div><p className="eyebrow">JOZING · CERAMIC TABLEWARE WHOLESALE</p>
        <h1 id="home-title">Ready stock.<br /><em>Ready for your next order.</em></h1>
        <p className="sourcing-lead">Source plates, bowls and mugs from China. Compare clearance lots by piece, carton or ton, then confirm the assortment and export packing for your market.</p>
        <div className="sourcing-actions"><Link className="btn primary" href="/stock/">Browse ready stock</Link><Link className="btn text" href="/contact/">Request a quotation →</Link></div>
        <ul className="sourcing-benefits"><li>Product-specific prices &amp; MOQs</li><li>Mixed-container enquiries</li><li>OEM / ODM options</li></ul>
      </div>
      <figure><img src="/factory/jozing-warehouse-768.webp" srcSet="/factory/jozing-warehouse-480.webp 480w, /factory/jozing-warehouse-768.webp 768w, /factory/jozing-warehouse-1200.webp 1200w" sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 1000px) 46vw, 550px" alt="Actual JOZING warehouse with packed ceramic stock" width="1200" height="900" fetchPriority="high" /><figcaption>Real JOZING warehouse photography</figcaption></figure>
    </section>
    <figure className="ceramic-world-banner">
      <img src="/brand/jozing-ceramic-world-1600.webp" srcSet="/brand/jozing-ceramic-world-720.webp 720w, /brand/jozing-ceramic-world-1080.webp 1080w, /brand/jozing-ceramic-world-1600.webp 1600w, /brand/jozing-ceramic-world-2154.webp 2154w" sizes="100vw" width="2154" height="730" loading="lazy" decoding="async" alt="JOZING promotional illustration: a world map made from ceramic tableware connects Chaozhou, China with global buyers. Affordable ceramics. A world of possibilities." />
    </figure>
    <section className="shell sourcing-nav" aria-label="Choose your purchasing route"><ProcurementNav /><div className="document-links"><Link href="/factory/test-reports/">SGS &amp; ZTS test reports →</Link><Link href="/supplier-profile/">Supplier facts →</Link><Link href="/factory/culture/">Our culture &amp; values →</Link></div></section>
    <section className="stock-section home-stock-section" id="stock" aria-labelledby="featured-title"><div className="shell">
      <div className="compact-section-head"><div><p className="eyebrow">A STARTING POINT FOR YOUR SHORTLIST</p><h2 id="featured-title">Selected ready-stock ceramics.</h2></div><Link href="/stock/">View all {stockLots.length} stock products →</Link></div>
      <p className="section-intro">Compare each listing in its own selling unit. Prices, available designs and shipping dates are reconfirmed with your quotation.</p>
      <div className="product-grid home-stock-grid" id="products">{featuredProducts.map(item => <ProductCard key={item.code} item={item} category="ready-stock" imageSizes="(max-width: 620px) calc((100vw - 40px) / 2), (max-width: 1000px) 30vw, (max-width: 1230px) 23vw, 280px" />)}</div>
      <div className="sourcing-actions"><Link className="btn primary" href="/stock/">Explore the full ready-stock range</Link><Link href="/stock/catalog/">Open the procurement catalogue →</Link></div>
    </div></section>
    <section className="real-facility shell" id="factory" aria-labelledby="real-facility-title"><div className="compact-section-head"><div><p className="eyebrow">ON SITE IN CHAOZHOU</p><h2 id="real-facility-title">A closer look at JOZING.</h2></div><Link href="/supplier-profile/">Check our company details →</Link></div>
      <p className="section-intro">Original photographs supplied by JOZING show the warehouse, facility exterior and container transport. Request current lot photos and packing details for the products you select.</p>
      <div className="real-photo-grid">{realPhotos.map(photo => <figure key={photo.src}><img src={`${photo.src}-768.webp`} srcSet={`${photo.src}-480.webp 480w, ${photo.src}-768.webp 768w`} sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 1230px) 30vw, 380px" alt={photo.title} width={photo.width} height={photo.height} loading="lazy" decoding="async" /><figcaption>{photo.title}</figcaption></figure>)}</div>
    </section>
    <section className="sourcing-checks shell" aria-labelledby="buyer-checks-title"><div><p className="eyebrow">BEFORE YOU CONFIRM AN ORDER</p><h2 id="buyer-checks-title">Details that help you buy with confidence.</h2><p>Confirm the actual assortment, condition criteria, packing list and delivery schedule. For a repeatable collection, discuss an approved OEM / ODM specification.</p><Link href="/oem-odm/">Explore custom collections →</Link></div>
      <div><h3>Review the test scope</h3><p>The SGS and ZTS reports cover identified samples and test conditions. Check their applicability to your selected product and destination.</p><ul>{testReports.map(report => <li key={report.id}><a href={report.file}>{report.id} (original PDF)</a></li>)}</ul><Link href="/factory/test-reports/">Read test methods, results &amp; scope →</Link><h3>Plan your shipment</h3><Link href="/guides/ceramic-container-loading-guide/">Cartons, quantities and container loading →</Link></div>
    </section>
    <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">YOUR NEXT CERAMIC ORDER</p><h2>Build your<br />buying brief.</h2><p>Share your product references, quantities and destination. You can also contact our team directly on WhatsApp.</p><address><span>WhatsApp</span><a href="https://wa.me/8617825907898" target="_blank" rel="noreferrer">+8617825907898</a><span>Email</span><a href="mailto:sales_b2b@jozing.cn">sales_b2b@jozing.cn</a></address></div><InquiryForm compact /></div></section>
      <section className="ai-seo-faq shell" id="clearance-faq" aria-labelledby="clearance-faq-title">
        <p className="eyebrow">CLEARANCE CERAMICS · BUYER QUESTIONS</p>
        <h2 id="clearance-faq-title">Frequently Asked Questions About JOZING Clearance Ceramics</h2>
        <article>
          <h3>1. Where can I buy low-cost clearance ceramic tableware from China?</h3>
          <p>Source wholesale clearance ceramic tableware from <strong><a href="https://www.jozing.com/">JOZING</a></strong>. Our ready-stock range includes porcelain plates, bowls, mugs and hotel dinnerware for importers and wholesalers. Compare the current lot price, quality, packing and freight to find the best fit for your budget. <Link href="/stock/">Explore ready-stock ceramics</Link>.</p>
        </article>
        <article>
          <h3>2. How is JOZING stocklot porcelain priced and what is the MOQ?</h3>
          <p>Pricing depends on the product and order quantity, with lots sold by piece, set, carton or ton. For example, our <Link href="/products/3-5inch-fluted-ceramic-ramekin-set/">3.5-inch fluted ceramic ramekins</Link> are listed at $0.15 USD per piece for 200–1,999 pieces. MOQ varies by lot; some ton-priced products start at one ton. Container orders and mixed-item loading can be discussed against your product selection. Confirm current stock, price tiers and packing before ordering.</p>
        </article>
        <article>
          <h3>3. How fast can JOZING ship clearance ceramic stocklots?</h3>
          <p>Dispatch timing depends on available stock, order quantity, inspection, packing and the shipping booking. Send your product references, quantity, destination port and required delivery date so we can confirm the packing and container-loading schedule in your quotation. OEM/ODM products require a separate production schedule. <Link href="/contact/">Request a stock and shipping quotation</Link>.</p>
        </article>
      </section>

    <SiteFooter />
  </main>;
}

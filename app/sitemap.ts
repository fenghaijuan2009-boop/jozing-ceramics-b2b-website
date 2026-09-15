import type { MetadataRoute } from "next";
import { allProducts } from "./page";
import { stockCategories } from "./stock-categories";
import { productSlug } from "./product-utils";
import { guides } from "./guides/guide-data";
import { blogPosts } from "../lib/blog-posts";
import { importedStockProducts } from "./imported-stock-products";
import { blogProductCodes, blogProductLinksUpdated } from "./blog/product-links";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
  const origin="https://www.jozing.cn";
  const now=new Date("2026-09-11");
  const core=["","/about","/supplier-profile","/contact","/faq","/guides","/knowledge-base","/stock","/oem-odm","/blog"].map((path,index)=>({url:`${origin}${path}/`,lastModified:now,changeFrequency:index===0?"weekly" as const:"monthly" as const,priority:index===0?1:.7}));
  const importedCodes=new Set(importedStockProducts.map(product=>product.code));
  const products=allProducts.map((product)=>({url:`${origin}/products/${productSlug(product.name)}/`,lastModified:new Date(importedCodes.has(product.code)?"2026-09-14":"2026-09-12"),changeFrequency:"weekly" as const,priority:.8}));
  const articles=guides.map((guide)=>({url:`${origin}/guides/${guide.slug}/`,lastModified:new Date(guide.updated),changeFrequency:"monthly" as const,priority:.7}));
  const blogs=blogPosts.map((post)=>({url:`${origin}/blog/${post.slug}/`,lastModified:new Date(blogProductCodes[post.slug]?blogProductLinksUpdated:post.date),changeFrequency:"monthly" as const,priority:.6}));
  const categories=stockCategories.filter(c=>c.codes.length).map(c=>({url:`${origin}/stock/${c.slug}/`,lastModified:c.codes.some(code=>importedCodes.has(code))?new Date("2026-09-14"):now,changeFrequency:"weekly" as const,priority:.7}));
  return[...core.map(page=>page.url===`${origin}/stock/`?{...page,lastModified:new Date("2026-09-14")}:page),...products,...categories,...articles,...blogs,{url:`${origin}/stock/catalog/`,lastModified:new Date("2026-09-14"),changeFrequency:"weekly",priority:.8}]
}

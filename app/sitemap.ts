import type { MetadataRoute } from "next";
import { stockLots } from "./page";
import { productSlug } from "./product-utils";
import { guides } from "./guides/guide-data";
import { blogPosts } from "../lib/blog-posts";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
  const origin="https://www.jozing.cn";
  const now=new Date("2026-08-31");
  const core=["","/about","/supplier-profile","/contact","/faq","/guides","/knowledge-base","/stock","/oem-odm","/blog"].map((path,index)=>({url:`${origin}${path}/`,lastModified:now,changeFrequency:index===0?"weekly" as const:"monthly" as const,priority:index===0?1:.7}));
  const products=stockLots.map((product)=>({url:`${origin}/products/${productSlug(product.name)}/`,lastModified:now,changeFrequency:"weekly" as const,priority:.8}));
  const articles=guides.map((guide)=>({url:`${origin}/guides/${guide.slug}/`,lastModified:new Date(guide.updated),changeFrequency:"monthly" as const,priority:.7}));
  const blogs=blogPosts.map((post)=>({url:`${origin}/blog/${post.slug}/`,lastModified:new Date(post.date),changeFrequency:"monthly" as const,priority:.6}));
  return[...core,...products,...articles,...blogs]
}

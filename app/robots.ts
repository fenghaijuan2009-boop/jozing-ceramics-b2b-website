import type { MetadataRoute } from "next";
export const dynamic="force-static";
export default function robots():MetadataRoute.Robots{return{rules:[{userAgent:"*",allow:"/"},{userAgent:"OAI-SearchBot",allow:"/"},{userAgent:"ChatGPT-User",allow:"/"},{userAgent:"Googlebot",allow:"/"},{userAgent:"Bingbot",allow:"/"}],sitemap:"https://www.jozing.cn/sitemap.xml",host:"https://www.jozing.cn"}}

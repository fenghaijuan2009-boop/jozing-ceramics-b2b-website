"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { readCampaignAttribution } from "./analytics-attribution";
import { procurementGroup, purchaseTypes } from "./inquiry-utils";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
const consentKey = "jozing-analytics-consent";

export function SiteAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<string | null>(null);
  const [showChoice, setShowChoice] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setConsent(localStorage.getItem(consentKey) ?? "unset"); } catch { setConsent("unset"); } }, []);
  useEffect(() => {
    if (consent !== "accepted" || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
    w.gtag("js", new Date());
    w.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: location.origin + location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin : "", ...(readCampaignAttribution(location.search) ?? {}) });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    setReady(true);
    return () => { script.remove(); };
  }, [consent, measurementId]);
  useEffect(() => {
    if (!ready || consent !== "accepted") return;
    const w = window as AnalyticsWindow;
    const page = location.origin + pathname;
    w.gtag?.("set", { page_location: page, page_referrer: document.referrer ? new URL(document.referrer).origin : "" });
    w.gtag?.("event", "page_view", { page_location: page, page_title: document.title, content_group: procurementGroup(pathname), send_to: measurementId });
    const product = document.querySelector<HTMLElement>("[data-product-code]");
    const productCode = product?.dataset.productCode;
    if (productCode) w.gtag?.("event", "view_item", { items: [{ item_id: productCode, item_name: product.dataset.productName, item_category: product.dataset.productCategory }], page_location: page, send_to: measurementId });
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      if (link.hasAttribute("data-catalog-download")) {
        w.gtag?.("event", "file_download", { file_name: "jozing-ready-stock-catalog.csv", page_location: page, send_to: measurementId });
        return;
      }
      const href = link.getAttribute("href") || "";
      if (href.startsWith("/contact/?product=")) {
        w.gtag?.("event", "quote_request_click", { ...(productCode ? { item_id: productCode } : {}), page_location: page, send_to: measurementId });
        return;
      }
      const clickedItem = link.dataset.inquiryItem ?? productCode;
      const clickedCategory = link.dataset.inquiryCategory;
      let channel: string | null = null;
      if (/^https:\/\/wa\.me\//.test(href)) channel = "whatsapp";
      if (/^mailto:/i.test(href)) channel = "email";
      if (!channel) return;
      w.gtag?.("event", "contact_click", { channel, content_group: procurementGroup(pathname), ...(clickedItem ? { item_id: clickedItem } : {}), ...(clickedCategory ? { item_category: clickedCategory } : {}), page_location: page, send_to: measurementId });
    };
    const handoff = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (!detail || !["whatsapp", "email"].includes(detail.channel) || !purchaseTypes.includes(detail.purchase_type) || !["plates", "dinnerware", "mugs", "oem", "product", "stock", "home", "other"].includes(detail.source_group)) return;
      w.gtag?.("event", "inquiry_handoff", { channel: detail.channel, purchase_type: detail.purchase_type, source_group: detail.source_group, page_location: page, send_to: measurementId });
    };
    document.addEventListener("click", click);
    document.addEventListener("jozing:inquiry-handoff", handoff);
    return () => { document.removeEventListener("click", click); document.removeEventListener("jozing:inquiry-handoff", handoff); };
  }, [ready, consent, pathname, measurementId]);
  const choose = (value: string) => { try { localStorage.setItem(consentKey, value); } catch {} if (consent === "accepted" && value !== "accepted") { (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true; location.reload(); return; } (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false; setConsent(value); setShowChoice(false); };
  if (consent === null) return null;
  if (consent !== "unset" && !showChoice) return <button className="analytics-settings" type="button" onClick={() => setShowChoice(true)}>Analytics preferences</button>;
  return <aside className="analytics-choice" aria-label="Website analytics preference"><p>Allow usage analytics to help us improve this website? Inquiry messages and contact details are not included.</p><button type="button" onClick={() => choose("accepted")}>Allow analytics</button><button type="button" onClick={() => choose("declined")}>Decline</button></aside>;
}



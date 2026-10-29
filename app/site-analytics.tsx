"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { readCampaignAttribution } from "./analytics-attribution";
import { procurementGroup, purchaseTypes } from "./inquiry-utils";
import { adsId, adsPageLocation, conversionParameters } from "./ads-measurement";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
const consentKey = "jozing-measurement-consent-v2";

export function SiteAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<string | null>(null);
  const [showChoice, setShowChoice] = useState(false);
  // Consent is browser-only; hydrate it after the matching server/client first render.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { try { setConsent(localStorage.getItem(consentKey) ?? "unset"); } catch { setConsent("unset"); } }, []);
  useEffect(() => {
    if (consent !== "accepted" || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    // gtag's queue expects an Arguments object, as in Google's installation snippet.
    // eslint-disable-next-line prefer-rest-params
    w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
    w.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "granted", ad_user_data: "granted", ad_personalization: "denied" });
    w.gtag("js", new Date());
    w.gtag("config", adsId, { send_page_view: false, allow_ad_personalization_signals: false, page_location: adsPageLocation(location.href), page_referrer: document.referrer ? new URL(document.referrer).origin : "" });
    w.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: location.origin + location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin : "", ...(readCampaignAttribution(location.search) ?? {}) });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [consent, measurementId]);
  useEffect(() => {
    if (consent !== "accepted" || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
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
        w.gtag?.("event", "catalogue_open", { catalogue_id: "jozing-product-catalogue", destination: "google_drive", page_location: page, send_to: measurementId });
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
    const saved = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (!detail || !purchaseTypes.includes(detail.purchase_type) || !["plates", "dinnerware", "mugs", "oem", "product", "stock", "home", "other"].includes(detail.source_group)) return;
      w.gtag?.("event", "inquiry_saved", { purchase_type: detail.purchase_type, source_group: detail.source_group, page_location: page, send_to: measurementId });
      const conversion = conversionParameters(detail);
      if (conversion) w.gtag?.("event", "conversion", { ...conversion, page_location: adsPageLocation(location.href), allow_ad_personalization_signals: false });
    };
    document.addEventListener("jozing:inquiry-saved", saved);
    document.addEventListener("jozing:inquiry-handoff", handoff);
    return () => { document.removeEventListener("click", click); document.removeEventListener("jozing:inquiry-handoff", handoff); document.removeEventListener("jozing:inquiry-saved", saved); };
  }, [consent, pathname, measurementId]);
  const choose = (value: string) => { try { localStorage.setItem(consentKey, value); } catch {} if (consent === "accepted" && value !== "accepted") { (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true; location.reload(); return; } (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false; setConsent(value); setShowChoice(false); };
  if (consent === null) return null;
  const spanish = pathname.startsWith("/es/");
  if (consent !== "unset" && !showChoice) return <button className="analytics-settings" type="button" onClick={() => setShowChoice(true)}>{spanish ? "Preferencias de medición" : "Measurement preferences"}</button>;
  return <aside className="analytics-choice" aria-label={spanish ? "Preferencias de medición" : "Measurement preferences"}><p>{spanish ? "¿Permites cookies de Google para medir el uso del sitio y las consultas procedentes de anuncios? No compartimos tu mensaje ni tus datos de contacto con estas herramientas. Sin anuncios personalizados." : "Allow Google cookies to measure website use and inquiries from ads? Inquiry messages and contact details are not shared with these tools. No personalized advertising."} <a href="/inquiry-privacy/">{spanish ? "Privacidad" : "Privacy"}</a></p><button type="button" onClick={() => choose("accepted")}>{spanish ? "Permitir medición" : "Allow measurement"}</button><button type="button" onClick={() => choose("declined")}>{spanish ? "Rechazar" : "Decline"}</button></aside>;
}



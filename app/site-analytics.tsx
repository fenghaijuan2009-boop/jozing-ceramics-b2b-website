"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
    w.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: location.origin + location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin : "" });
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
    w.gtag?.("event", "page_view", { page_location: page, page_title: document.title, send_to: measurementId });
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      let channel: string | null = null;
      if (/^https:\/\/wa\.me\//.test(href)) channel = "whatsapp";
      if (/^mailto:/i.test(href)) channel = "email";
      if (!channel) return;
      w.gtag?.("event", link.hasAttribute("data-email-inquiry") ? "inquiry_handoff" : "contact_click", { channel, page_location: page, send_to: measurementId });
    };
    const submit = (event: Event) => {
      if (!(event.target instanceof HTMLFormElement) || !event.target.matches(".rfq-form") || !event.target.checkValidity()) return;
      w.gtag?.("event", "inquiry_handoff", { channel: "whatsapp", page_location: page, send_to: measurementId });
    };
    document.addEventListener("click", click);
    document.addEventListener("submit", submit);
    return () => { document.removeEventListener("click", click); document.removeEventListener("submit", submit); };
  }, [ready, consent, pathname, measurementId]);
  const choose = (value: string) => { try { localStorage.setItem(consentKey, value); } catch {} if (consent === "accepted" && value !== "accepted") { (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true; location.reload(); return; } (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false; setConsent(value); setShowChoice(false); };
  if (consent === null) return null;
  if (consent !== "unset" && !showChoice) return <button className="analytics-settings" type="button" onClick={() => setShowChoice(true)}>Analytics preferences</button>;
  return <aside className="analytics-choice" aria-label="Website analytics preference"><p>Allow usage analytics to help us improve this website? Inquiry messages and contact details are not included.</p><button type="button" onClick={() => choose("accepted")}>Allow analytics</button><button type="button" onClick={() => choose("declined")}>Decline</button></aside>;
}


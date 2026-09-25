"use client";
import { useEffect, useRef, useState } from "react";
import { buildInquiry, inquiryReference, procurementGroup, purchaseTypes, safeSourcePath } from "./inquiry-utils";

export function InquiryForm({ initialProduct = "", compact = false }: { initialProduct?: string; compact?: boolean }) {
  const form = useRef<HTMLFormElement>(null);
  const reference = useRef("");
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const element = form.current;
    if (!element) return;
    const params = new URLSearchParams(location.search);
    const product = element.elements.namedItem("product") as HTMLInputElement;
    if (!product.value) product.value = (params.get("product") ?? "").slice(0, 240);
    const type = params.get("purchaseType");
    if (purchaseTypes.some(item => item === type)) (element.elements.namedItem("purchaseType") as HTMLSelectElement).value = type!;
  }, []);
  function handoff(channel: "whatsapp" | "email") {
    const element = form.current;
    if (!element?.reportValidity()) return;
    const data = Object.fromEntries(new FormData(element).entries()) as Record<string, string>;
    const params = new URLSearchParams(location.search);
    const source = safeSourcePath(params.get("source")) ?? safeSourcePath(document.referrer) ?? safeSourcePath(location.pathname) ?? "/contact/";
    reference.current ||= inquiryReference();
    const text = buildInquiry(data, reference.current, source, params.get("productUrl") ?? "");
    const href = channel === "whatsapp" ? "https://wa.me/8615280186517?text=" + encodeURIComponent(text) : "mailto:sales_b2b@jozing.cn?subject=" + encodeURIComponent("JOZING " + reference.current + " " + data.purchaseType + " inquiry") + "&body=" + encodeURIComponent(text);
    document.dispatchEvent(new CustomEvent("jozing:inquiry-handoff", { detail: { channel, purchase_type: data.purchaseType, source_group: procurementGroup(source) } }));
    if (channel === "whatsapp") window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
    setNotice("Reference " + reference.current + ". Please send the prepared message in " + (channel === "whatsapp" ? "WhatsApp" : "your email app") + ". JOZING receives your inquiry only after you send it there.");
  }
  return <form ref={form} className={`rfq-form${compact ? " rfq-form-compact" : ""}`} onSubmit={event => { event.preventDefault(); handoff("whatsapp"); }} onChange={() => { reference.current = ""; setNotice(""); }}>
    <div className="form-row"><label>Work email<input name="email" type="email" placeholder="name@company.com" maxLength={160} /></label><label>Country / market<input name="country" type="text" placeholder="e.g. UAE" required maxLength={80} /></label></div>
    <label>Purchase type<select name="purchaseType" defaultValue="Ready stock">{purchaseTypes.map(type => <option key={type}>{type}</option>)}</select></label>
    <label>Product / reference<input name="product" type="text" defaultValue={initialProduct} placeholder="Product name, code or image reference" required maxLength={240} /></label>
    <div className="form-row"><label>Required quantity<input name="quantity" type="text" placeholder="e.g. 3 tons / 2,000 sets" required maxLength={100} /></label><label>Destination port<input name="destination" type="text" placeholder="e.g. Jebel Ali" maxLength={100} /></label></div>
    <label>Additional requirements<textarea name="message" placeholder="Target price, packing, logo, glaze, delivery timing..." rows={compact ? 3 : 4} maxLength={1500} /></label>
    <button className="submit-link" type="submit"><span>Continue to WhatsApp</span><span aria-hidden="true">↗</span></button>
    <button className="email-link inquiry-email-button" type="button" onClick={() => handoff("email")}>Prepare the same inquiry by email</button>
    <p className="inquiry-notice" role="status">{notice}</p>
    <small>Send the prepared message in WhatsApp or your email app to complete your inquiry. Your information is only used to answer this business inquiry. Stock, price, packing and delivery are reconfirmed for each order.</small>
    <noscript>Please email sales_b2b@jozing.cn or contact +86 152 8018 6517 on WhatsApp with your product, quantity and destination.</noscript>
  </form>;
}

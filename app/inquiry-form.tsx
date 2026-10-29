"use client";
import { useEffect, useRef, useState } from "react";
import { buildInquiry, inquiryReference, procurementGroup, purchaseTypes, safeSourcePath } from "./inquiry-utils";

export function InquiryForm({ initialProduct = "", compact = false, locale = "en" }: { initialProduct?: string; compact?: boolean; locale?: "en" | "es" }) {
  const t = (en: string, es: string) => locale === "es" ? es : en;
  const form = useRef<HTMLFormElement>(null);
  const reference = useRef("");
  const measurementId = useRef("");
  const [notice, setNotice] = useState("");
  const [pending, setPending] = useState(false);
  const [saved, setSaved] = useState(false);
  const busy = useRef(false);
  useEffect(() => {
    const element = form.current;
    if (!element) return;
    const params = new URLSearchParams(location.search);
    const product = element.elements.namedItem("product") as HTMLInputElement;
    if (!product.value) product.value = (params.get("product") ?? "").slice(0, 240);
    const type = params.get("purchaseType");
    if (purchaseTypes.some(item => item === type)) (element.elements.namedItem("purchaseType") as HTMLSelectElement).value = type!;
  }, []);
  async function submit() {
    const element = form.current;
    if (busy.current || saved || !element?.reportValidity()) return;
    const data = Object.fromEntries(new FormData(element).entries()) as Record<string, string>;
    if (!data.email) { setNotice(t("Please enter your email so we can reply to your saved inquiry.", "Introduce tu correo para que podamos responder.")); (element.elements.namedItem("email") as HTMLInputElement).focus(); return; }
    if (data.consent !== "on") { setNotice(t("Please agree to inquiry processing before submitting.", "Acepta el tratamiento de la consulta antes de enviarla.")); (element.elements.namedItem("consent") as HTMLInputElement).focus(); return; }
    reference.current ||= inquiryReference();
    measurementId.current ||= crypto.randomUUID();
    const params = new URLSearchParams(location.search);
    const source = safeSourcePath(params.get("source")) ?? safeSourcePath(location.pathname) ?? safeSourcePath(document.referrer) ?? "/contact/";
    busy.current = true;
    setPending(true);
    setNotice(t("Saving your inquiry… Please keep this page open.", "Guardando tu consulta… Mantén esta página abierta."));
    try {
      const response = await fetch("/api/inquiries/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, consent: true, reference: reference.current, source, productUrl: params.get("productUrl") ?? "" }), signal: AbortSignal.timeout(35000) });
      const result = await response.json();
      if (!response.ok || !result.saved || result.reference !== reference.current) throw new Error(result.error || "We could not confirm your submission.");
      setSaved(true);
      setNotice(t("Your inquiry has been saved. Reference: ", "Tu consulta se ha guardado. Referencia: ") + result.reference + t(". Keep this reference for follow-up. For urgent enquiries, also send your brief on WhatsApp below.", ". Guarda esta referencia. Para consultas urgentes, también puedes enviar el mensaje por WhatsApp."));
      if (!/TEST ONLY/i.test(data.product)) document.dispatchEvent(new CustomEvent("jozing:inquiry-saved", { detail: { purchase_type: data.purchaseType, source_group: procurementGroup(source), measurement_id: measurementId.current } }));
    } catch (error) {
      const message = error instanceof Error && !["TimeoutError", "AbortError", "TypeError"].includes(error.name) ? error.message : "Connection interrupted; we could not confirm whether your inquiry was saved. Retry with this form or contact us directly.";
      setNotice(t(message + " Reference: ", "No pudimos confirmar que se guardó tu consulta. Puedes reintentar o contactar por WhatsApp o correo. Referencia: ") + reference.current + t(". WhatsApp and email remain available below.", "."));
    } finally { busy.current = false; setPending(false); }
  }
  function handoff(channel: "whatsapp" | "email") {
    const element = form.current;
    if (!element?.reportValidity()) return;
    const data = Object.fromEntries(new FormData(element).entries()) as Record<string, string>;
    const params = new URLSearchParams(location.search);
    const source = safeSourcePath(params.get("source")) ?? safeSourcePath(location.pathname) ?? safeSourcePath(document.referrer) ?? "/contact/";
    reference.current ||= inquiryReference();
    const text = buildInquiry(data, reference.current, source, params.get("productUrl") ?? "");
    const href = channel === "whatsapp" ? "https://wa.me/8617825907898?text=" + encodeURIComponent(text) : "mailto:sales_b2b@jozing.cn?subject=" + encodeURIComponent("JOZING " + reference.current + " " + data.purchaseType + " inquiry") + "&body=" + encodeURIComponent(text);
    document.dispatchEvent(new CustomEvent("jozing:inquiry-handoff", { detail: { channel, purchase_type: data.purchaseType, source_group: procurementGroup(source) } }));
    if (channel === "whatsapp") window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
    setNotice(t((saved ? "Your inquiry is already saved. " : "") + "Reference " + reference.current + ". Please send the prepared message in " + (channel === "whatsapp" ? "WhatsApp" : "your email app") + (saved ? " if you also want to follow up through that channel." : ". JOZING receives this message only after you send it there."), "Referencia " + reference.current + ". Envía el mensaje preparado en " + (channel === "whatsapp" ? "WhatsApp" : "tu aplicación de correo") + ". JOZING solo recibe ese mensaje cuando lo envías allí."));
  }
  return <form ref={form} className={`rfq-form${compact ? " rfq-form-compact" : ""}`} onSubmit={event => { event.preventDefault(); void submit(); }} onChange={() => { if (!busy.current) { reference.current = ""; measurementId.current = ""; setNotice(""); setSaved(false); } }}>
    <fieldset disabled={pending} className="inquiry-fields">
    <div className="form-row"><label>{t("Work email", "Correo de empresa")}<input name="email" type="email" placeholder="nombre@empresa.com" maxLength={160} /></label><label>{t("Country / market", "País / mercado")}<input name="country" type="text" placeholder={t("e.g. UAE", "Ej. Perú")} required maxLength={80} /></label></div>
    <label>{t("Purchase type", "Tipo de compra")}<select name="purchaseType" defaultValue="Ready stock">{purchaseTypes.map((type, i) => <option key={type} value={type}>{t(type, ["Stock disponible", "OEM / ODM", "Contenedor mixto", "Aún por definir"][i])}</option>)}</select></label>
    <label>{t("Product / reference", "Producto / referencia")}<input name="product" type="text" defaultValue={initialProduct} placeholder={t("Product name, code or image reference", "Nombre, código o referencia de imagen")} required maxLength={240} /></label>
    <div className="form-row"><label>{t("Required quantity", "Cantidad requerida")}<input name="quantity" type="text" placeholder={t("e.g. 3 tons / 2,000 sets", "Ej. 3 toneladas / un contenedor")} required maxLength={100} /></label><label>{t("Destination port", "Puerto de destino")}<input name="destination" type="text" placeholder={t("e.g. Jebel Ali", "Ej. Callao")} maxLength={100} /></label></div>
    <label>{t("Additional requirements", "Requisitos adicionales")}<textarea name="message" placeholder={t("Target price, packing, logo, glaze, delivery timing...", "Presupuesto, tipos de piezas, embalaje, fecha prevista…")} rows={compact ? 3 : 4} maxLength={1500} /></label>
    <label className="inquiry-trap" aria-hidden="true">Website<input name="website" autoComplete="off" tabIndex={-1} /></label>
    <label className="inquiry-consent"><input name="consent" type="checkbox" /> <span>{t("I agree that JOZING may save this brief and contact me about my inquiry.", "Acepto que JOZING guarde esta consulta y me contacte para responderla.")} <a href="/inquiry-privacy/">{t("Inquiry privacy", "Privacidad de consultas")}</a></span></label>
    <button className="submit-link" type="submit" disabled={saved || pending}><span>{pending ? t("Saving inquiry…", "Guardando…") : saved ? t("Inquiry saved", "Consulta guardada") : t("Submit inquiry to JOZING", "Solicitar cotización a JOZING")}</span><span aria-hidden="true">→</span></button>
    <button className="email-link inquiry-email-button" type="button" onClick={() => handoff("whatsapp")}>{t("Or continue on WhatsApp", "O continuar por WhatsApp")}</button>
    <button className="email-link inquiry-email-button" type="button" onClick={() => handoff("email")}>{t("Prepare the same inquiry by email", "Preparar esta consulta por correo")}</button>
    </fieldset>
    <p className="inquiry-notice" role="status">{notice}</p>
    <small>{t("Online submission is complete only when you see “Your inquiry has been saved.” WhatsApp and email options open a prepared message that you must send in the selected app. Stock, price, packing and delivery are reconfirmed for each order.", "El envío se completa al ver «Tu consulta se ha guardado». Las opciones de WhatsApp y correo preparan un mensaje que debes enviar en esa aplicación. Stock, precio, embalaje y entrega se confirman para cada pedido.")}</small>
    <noscript>{t("Please email", "Escríbenos a")} sales_b2b@jozing.cn / WhatsApp +8617825907898.</noscript>
  </form>;
}

"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

export function InquiryForm({ initialProduct = "", compact = false }: { initialProduct?: string; compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [purchaseType, setPurchaseType] = useState("Ready stock");
  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!initialProduct) {
      const selected = new URLSearchParams(window.location.search).get("product");
      if (selected) setProduct(selected);
    }
  }, [initialProduct]);
  const inquiryText = useMemo(() => [
    "Hello JOZING, I would like to request a ceramic tableware quotation.",
    `Purchase type: ${purchaseType}`,
    product && `Product / reference: ${product}`,
    quantity && `Required quantity: ${quantity}`,
    country && `Country / market: ${country}`,
    destination && `Destination port: ${destination}`,
    email && `Work email: ${email}`,
    message && `Additional requirements: ${message}`,
  ].filter(Boolean).join("\n"), [country, destination, email, message, product, purchaseType, quantity]);
  const whatsappUrl = `https://wa.me/8615280186517?text=${encodeURIComponent(inquiryText)}`;
  const emailUrl = `mailto:sales_b2b@jozing.cn?subject=${encodeURIComponent(`JOZING ${purchaseType} inquiry${product ? ` - ${product.slice(0, 50)}` : ""}`)}&body=${encodeURIComponent(inquiryText)}`;
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); window.open(whatsappUrl, "_blank", "noopener,noreferrer"); }
  return <form className={`rfq-form${compact ? " rfq-form-compact" : ""}`} onSubmit={submit}>
    <div className="form-row"><label>Work email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" /></label><label>Country / market<input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. UAE" /></label></div>
    <label>Purchase type<select value={purchaseType} onChange={(e) => setPurchaseType(e.target.value)}><option>Ready stock</option><option>OEM / ODM</option><option>Mixed container</option><option>Not sure yet</option></select></label>
    <label>Product / reference<input type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product name, code or image reference" required /></label>
    <div className="form-row"><label>Required quantity<input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 3 tons / 2,000 sets" required /></label><label>Destination port<input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Jebel Ali" /></label></div>
    <label>Additional requirements<textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Target price, packing, logo, glaze, delivery timing..." rows={compact ? 3 : 4} /></label>
    <button className="submit-link" type="submit"><span>Send complete inquiry on WhatsApp</span><span aria-hidden="true">↗</span></button>
    <a className="email-link" href={emailUrl}>Send the same inquiry by email</a>
    <small>Your information is only used to answer this business inquiry. Stock, price, packing and delivery are reconfirmed for each order.</small>
  </form>;
}

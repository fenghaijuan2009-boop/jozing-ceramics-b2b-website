export function InquiryForm({ initialProduct = "", compact = false }: { initialProduct?: string; compact?: boolean }) {
  const formId = compact ? "jozing-rfq-home" : "jozing-rfq-contact";
  const script = `(() => {
    const form = document.getElementById(${JSON.stringify(formId)});
    if (!form || form.dataset.ready) return;
    form.dataset.ready = "true";
    const field = (name) => form.elements.namedItem(name);
    const product = field("product");
    if (product && !product.value) product.value = new URLSearchParams(location.search).get("product") || "";
    const inquiry = () => {
      const purchaseType = field("purchaseType").value;
      const lines = [
        "Hello JOZING, I would like to request a ceramic tableware quotation.",
        "Purchase type: " + purchaseType,
        product.value && "Product / reference: " + product.value,
        field("quantity").value && "Required quantity: " + field("quantity").value,
        field("country").value && "Country / market: " + field("country").value,
        field("destination").value && "Destination port: " + field("destination").value,
        field("email").value && "Work email: " + field("email").value,
        field("message").value && "Additional requirements: " + field("message").value
      ].filter(Boolean).join("\\n");
      return { text: lines, purchaseType };
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = inquiry();
      open("https://wa.me/8615280186517?text=" + encodeURIComponent(data.text), "_blank", "noopener,noreferrer");
    });
    form.querySelector("[data-email-inquiry]").addEventListener("click", (event) => {
      const data = inquiry();
      event.currentTarget.href = "mailto:sales_b2b@jozing.cn?subject=" + encodeURIComponent("JOZING " + data.purchaseType + " inquiry" + (product.value ? " - " + product.value.slice(0, 50) : "")) + "&body=" + encodeURIComponent(data.text);
    });
  })();`;

  return <>
    <form id={formId} className={`rfq-form${compact ? " rfq-form-compact" : ""}`} action="https://wa.me/8615280186517" method="get">
      <div className="form-row"><label>Work email<input name="email" type="email" placeholder="name@company.com" /></label><label>Country / market<input name="country" type="text" placeholder="e.g. UAE" /></label></div>
      <label>Purchase type<select name="purchaseType" defaultValue="Ready stock"><option>Ready stock</option><option>OEM / ODM</option><option>Mixed container</option><option>Not sure yet</option></select></label>
      <label>Product / reference<input name="product" type="text" defaultValue={initialProduct} placeholder="Product name, code or image reference" required /></label>
      <div className="form-row"><label>Required quantity<input name="quantity" type="text" placeholder="e.g. 3 tons / 2,000 sets" required /></label><label>Destination port<input name="destination" type="text" placeholder="e.g. Jebel Ali" /></label></div>
      <label>Additional requirements<textarea name="message" placeholder="Target price, packing, logo, glaze, delivery timing..." rows={compact ? 3 : 4} /></label>
      <button className="submit-link" type="submit"><span>Send complete inquiry on WhatsApp</span><span aria-hidden="true">↗</span></button>
      <a className="email-link" href="mailto:sales_b2b@jozing.cn" data-email-inquiry>Send the same inquiry by email</a>
      <small>Your information is only used to answer this business inquiry. Stock, price, packing and delivery are reconfirmed for each order.</small>
    </form>
    <script dangerouslySetInnerHTML={{ __html: script }} />
  </>;
}

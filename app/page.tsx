import { HeaderTools } from "./header-tools";
import { productSlug } from "./product-utils";
import { InquiryForm } from "./inquiry-form";
export type PriceTier = { price: string; quantity: string };
export type StockLot = {
  code: string;
  name: string;
  type: string;
  pack: string;
  stock: string;
  image: string;
  gallery?: string[];
  tiers?: PriceTier[];
  priceLabel?: string;
  material?: string;
  size?: string;
  capacity?: string;
  colors?: string;
  cartonQty?: string;
  availableStock?: string;
  leadTime?: string;
  loadingPort?: string;
  microwaveSafe?: boolean;
  dishwasherSafe?: boolean;
  oemOdm?: boolean;
  certifications?: string;
  packagingOptions?: string;
};

export const stockLots: StockLot[] = [
  { code:"STOCK · 01", name:"Lemon Hand-Painted Ceramic Tableware for Microwave and Grill Use", type:"Hand-painted plates · cup · serving ware", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-1.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 02", name:"JOZING Ceramic Coffee Cup and Flower-Shaped Saucer Set for Cappuccino", type:"Ceramic coffee cup and flower-shaped saucer", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-2.webp", priceLabel:"Price / set", tiers:[{price:"$2.98",quantity:"200–499 sets"},{price:"$2.68",quantity:"500–1,999 sets"},{price:"$2.37",quantity:"2,000–9,999 sets"}] },
  { code:"STOCK · 03", name:"Vintage Cottagecore Porcelain Dinnerware Set for Home, Café & Gift", type:"Vintage cottagecore porcelain dinnerware", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-3.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"JZ202608", name:"11oz Handmade Ins-Style Ceramic Mug & Saucer Set with Underglaze Color", type:"Cute breakfast and afternoon-tea cup set", pack:"Sold by set", stock:"48 sets", image:"/products/featured-row-4.webp", gallery:["/products/featured-row-4.webp","/products/jz202608-detail-1.webp","/products/jz202608-detail-2.webp","/products/jz202608-detail-3.webp","/products/jz202608-detail-4.webp"], priceLabel:"Price / set", tiers:[{price:"$2.54",quantity:"48–479 sets"},{price:"$2.39",quantity:"480–1,999 sets"},{price:"$2.01",quantity:"2,000–9,999 sets"}], material:"Porcelain", size:"To be confirmed", capacity:"300 ml / 11 oz", colors:"72 colors available", cartonQty:"48 sets / carton", availableStock:"50,000 sets", leadTime:"7 days", loadingPort:"Shenzhen / Xiamen", microwaveSafe:true, dishwasherSafe:true, oemOdm:true, certifications:"COC, RoHS", packagingOptions:"Color box" },
  { code:"STOCK · 05", name:"Cute Fruit Print Ceramic Coffee Cup & Saucer Set with Handle", type:"Colorful vintage strawberry tea mug set", pack:"Sold by set", stock:"48 sets", image:"/products/featured-row-5.webp", priceLabel:"Price / set", tiers:[{price:"$2.54",quantity:"48–479 sets"},{price:"$2.39",quantity:"480–1,999 sets"},{price:"$2.01",quantity:"2,000–9,999 sets"}] },
  { code:"STOCK · 06", name:"Vintage Dark Brown Floral Ceramic Dinnerware Set", type:"White daisy stoneware plates · bowls · coffee mugs", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-6.webp", priceLabel:"Price / set", tiers:[{price:"$5.20",quantity:"200–999 sets"},{price:"$4.99",quantity:"1,000–4,999 sets"},{price:"$4.79",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 07", name:"Decorative Mug Selection", type:"Floral and butterfly cup designs", pack:"Details on request", stock:"Confirm today", image:"/products/featured-row-7.webp" },
  { code:"STOCK · 08", name:"Current Ceramic Selection", type:"Ask for current photos and packing", pack:"Carton / pallet", stock:"Confirm today", image:"/products/featured-row-8.webp" },
  { code:"STOCK · 09", name:"12oz Stock Ceramic Mugs Wholesale", type:"Assorted 12oz ceramic mugs", pack:"Sold by piece", stock:"1,000 pieces", image:"/products/featured-row-9.webp", priceLabel:"Price / piece", tiers:[{price:"$0.24",quantity:"1,000–2,999 pieces"},{price:"$0.22",quantity:"3,000–9,999 pieces"},{price:"$0.21",quantity:"≥10,000 pieces"}] },
  { code:"STOCK · 10", name:"Manufacturer Price Porcelain Coffee Cup 12oz Stock Ceramic Mugs", type:"Ready-stock porcelain coffee mugs", pack:"Sold by piece", stock:"200 pieces", image:"/products/featured-row-10.webp", priceLabel:"Price / piece", tiers:[{price:"$0.22",quantity:"200–1,999 pieces"},{price:"$0.19",quantity:"2,000–9,999 pieces"},{price:"$0.17",quantity:"≥10,000 pieces"}] },
  { code:"STOCK · 11", name:"90ml Capacity Porcelain Espresso Cup and Saucer Set Sell by Ton", type:"Porcelain espresso cup and saucer sets", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-11.webp", priceLabel:"Price / ton", tiers:[{price:"$808.80",quantity:"1–27 tons"},{price:"$779.40",quantity:"28–99 tons"},{price:"$735.30",quantity:"≥100 tons"}] },
  { code:"STOCK · 12", name:"Dinnerware Supplier Stock Lot Coffee Cup Set", type:"Ready-stock coffee cup sets", pack:"Sold by set", stock:"200 sets", image:"/products/featured-row-12.webp", priceLabel:"Price / set", tiers:[{price:"$0.45",quantity:"200–999 sets"},{price:"$0.40",quantity:"≥1,000 sets"},{price:"$0.35",quantity:"≥5,000 sets"}] },
  { code:"STOCK · 13", name:"Wholesale Colorful Porcelain Mix Mugs Bowls Plates by the Ton", type:"Mixed colorful porcelain stock", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-13.webp", tiers:[{price:"$588",quantity:"1–4 tons"},{price:"$559",quantity:"5–27 tons"},{price:"$529",quantity:"≥28 tons"}] },
  { code:"STOCK · 14", name:"Ready Stock Black Porcelain Dinnerware by the Ton", type:"Black porcelain ready stock", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-14.webp", tiers:[{price:"$515",quantity:"1–14 tons"},{price:"$485",quantity:"15–27 tons"},{price:"$455",quantity:"≥28 tons"}] },
  { code:"STOCK · 15", name:"Factory Direct White Ceramic Plates Bowls Dishes Mix Packaging", type:"White ceramic mixed packaging", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-15.webp", tiers:[{price:"$258",quantity:"1–9 tons"},{price:"$242",quantity:"10–27 tons"},{price:"$228",quantity:"≥28 tons"}] },
  { code:"STOCK · 16", name:"Unbeatable Bulk Pricing Porcelain Stackable Baking Pans Mixed Sale by Ton", type:"Stackable baking pans · mixed sale", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-16.webp", tiers:[{price:"$609",quantity:"1–9 tons"},{price:"$594",quantity:"10–27 tons"},{price:"$565",quantity:"≥28 tons"}] },
  { code:"STOCK · 17", name:"3.5inch Fluted Ceramic Ramekin Set", type:"Colorful fluted ceramic ramekins", pack:"Sold by piece", stock:"200 pieces", image:"/products/featured-row-17.webp", priceLabel:"Price / piece", tiers:[{price:"$0.15",quantity:"200–1,999 pieces"},{price:"$0.13",quantity:"2,000–9,999 pieces"},{price:"$0.12",quantity:"≥10,000 pieces"}] },
  { code:"STOCK · 18", name:"Square White Ceramic Dinnerware Plate Set", type:"Square white ceramic plates · three sizes", pack:"MOQ 300 per size", stock:"300 pieces", image:"/products/featured-row-18.webp", priceLabel:"Price by size", tiers:[{price:"$0.56",quantity:"10.5 inch · MOQ 300"},{price:"$0.32",quantity:"7.5 inch · MOQ 300"},{price:"$0.21",quantity:"5.5 inch · MOQ 300"}] },
  { code:"STOCK · 19", name:"Clearance Stock Unbeatable Bulk Pricing Porcelain Wavy Edge Serving Dish", type:"Wavy-edge porcelain serving dishes", pack:"Sold by piece", stock:"200 pieces", image:"/products/featured-row-19.webp", priceLabel:"Price / piece", tiers:[{price:"$0.41",quantity:"200–2,999 pieces"},{price:"$0.40",quantity:"3,000–49,999 pieces"},{price:"$0.39",quantity:"≥50,000 pieces"}] },
  { code:"STOCK · 20", name:"Wholesale Modern White Ceramic Dinnerware Set for Restaurant & Hotel", type:"Modern white ceramic dinnerware", pack:"Sold by set", stock:"100 sets", image:"/products/featured-row-20.webp", priceLabel:"Price / set", tiers:[{price:"$1.80",quantity:"100–999 sets"},{price:"$1.60",quantity:"1,000–1,999 sets"},{price:"$1.50",quantity:"≥2,000 sets"}] },
  { code:"STOCK · 21", name:"Wholesale Vintage Embossed White Ceramic 8-inch and 10-inch Dinnerware Set for Wedding", type:"Vintage embossed white ceramic dinnerware", pack:"Mixed sizes", stock:"200 sets", image:"/products/featured-row-21.webp", priceLabel:"Tier pricing", tiers:[{price:"$0.90",quantity:"200–999 sets"},{price:"$0.80",quantity:"1,000–4,999 pieces"},{price:"$0.70",quantity:"≥5,000 pieces"}] },
  { code:"STOCK · 22", name:"Factory Direct Large 14–20 inch Porcelain White Serving Platters Stocked Sell by Ton", type:"Large white porcelain serving platters", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-22.webp", priceLabel:"Price / ton", tiers:[{price:"$430",quantity:"1–14 tons"},{price:"$420",quantity:"15–27 tons"},{price:"$410",quantity:"≥28 tons"}] },
  { code:"STOCK · 23", name:"Romantic Heart Lace Pink Ceramic Dessert Plate Set Sell by Cartons", type:"Pink heart-lace ceramic dessert plates", pack:"Sold by carton", stock:"6 cartons", image:"/products/featured-row-23.webp", priceLabel:"Price / carton", tiers:[{price:"$24",quantity:"6–99 cartons"},{price:"$23",quantity:"100–299 cartons"},{price:"$22",quantity:"≥300 cartons"}] },
  { code:"STOCK · 24", name:"Wholesale Price Ready Stock Mix Gold Inlay Luxury Porcelain Ceramic Tableware Set Sell by Ton", type:"Mixed gold-inlay luxury porcelain", pack:"Sold by ton", stock:"1 ton", image:"/products/featured-row-24.webp", priceLabel:"Price / ton", tiers:[{price:"$1,172",quantity:"1–4 tons"},{price:"$1,128",quantity:"5–9 tons"},{price:"$1,100",quantity:"≥10 tons"}] },
];

const capabilities = [
  ["01", "Design & development", "Shapes, glazes, decals and market-ready collections developed around your brief."],
  ["02", "Flexible production", "Ready stock for speed, custom manufacturing for scale, and mixed loading for flexibility."],
  ["03", "Export-ready delivery", "Protective packaging, inspection support and container planning for long-haul shipping."],
];

const factoryPhotos = [
  { src: "/factory/01-real-jozing-warehouse.webp", title: "JOZING warehouse", kind: "Real site photo" },
  { src: "/factory/02-white-ceramic-stock-wide.webp", title: "White ceramic inventory", kind: "AI-assisted visual" },
  { src: "/factory/03-white-ceramic-stacks.webp", title: "Bulk whiteware stock", kind: "AI-assisted visual" },
  { src: "/factory/04-greenware-drying.webp", title: "Greenware drying", kind: "AI-assisted visual" },
  { src: "/factory/05-glazing-process.webp", title: "Glazing process", kind: "AI-assisted visual" },
  { src: "/factory/06-decal-application.webp", title: "Decal application", kind: "AI-assisted visual" },
  { src: "/factory/07-kiln-firing.webp", title: "Kiln firing", kind: "AI-assisted visual" },
  { src: "/factory/08-quality-inspection.webp", title: "Quality inspection", kind: "AI-assisted visual" },
  { src: "/factory/09-export-packing.webp", title: "Export packing", kind: "AI-assisted visual" },
  { src: "/factory/10-finished-goods.webp", title: "Finished goods", kind: "AI-assisted visual" },
  { src: "/factory/11-hand-painted-ceramics.webp", title: "Hand-painted decoration", kind: "AI-assisted visual" },
];

export default function Home() {
  return (
    <main>
      <div className="topbar"><span>China Factory · Bulk Export Porcelain Supply</span><span>Ready stock · OEM / ODM · FOB · CIF · FCL · Mixed Container · Global shipping</span><div className="topbar-contacts"><a href="mailto:sales_b2b@jozing.cn">sales_b2b@jozing.cn</a><a href="https://wa.me/8615280186517" target="_blank" rel="noreferrer">WhatsApp: +86 152 8018 6517</a></div><HeaderTools /></div>
      <header className="nav shell">
        <a className="brand-logo" href="/" aria-label="JOZING home"><img src="/jozing-logo-fresh.png" alt="JOZING" width="567" height="158" /></a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a><a href="#stock">Ready Stock</a><a href="#oem">OEM/ODM</a><a href="#factory">Factory</a><a href="/about">About Us</a><a href="/faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#contact">Get a quote <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
      </section>

      <section className="pathways shell" aria-label="Supply options">
        <article className="path-card stock-card">
          <div><p className="eyebrow">JOZING STOCK</p><h2>Buy what’s ready.<br/>Ship sooner.</h2><p>Overstock and clearance ceramic tableware available by carton, pallet, ton or container.</p></div>
          <a href="#stock">Browse stock lots <span>↗</span></a>
          <div className="mini-plates" aria-hidden="true"><i/><i/><i/></div>
        </article>
        <article className="path-card custom-card">
          <div><p className="eyebrow">JOZING CUSTOM</p><h2>Build a collection<br/>that is yours.</h2><p>OEM/ODM development from a reference image or idea to packaging and bulk production.</p></div>
          <a href="#oem">Explore OEM/ODM <span>↗</span></a>
          <div className="line-mark" aria-hidden="true">J</div>
        </article>
      </section>

      <section className="stock-section" id="stock">
        <div className="shell">
          <div className="section-head"><div><p className="eyebrow">UPDATED STOCK OPPORTUNITIES</p><h2>Ready to move.<br/><em>Priced to compete.</em></h2></div><div className="section-note"><p>Real availability changes quickly. Ask for the current list, loading quantity and best offer for your destination.</p><a href="#contact">Get the latest stock list →</a></div></div>
          <div className="product-grid" id="products">
            {stockLots.map((item, index) => <article className={`product-card${item.tiers ? " tiered-card" : ""}`} key={item.code}>
              <div className="product-art"><span className="lot-badge">READY STOCK</span><a className="product-plus" href={`/contact/?product=${encodeURIComponent(`${item.code} - ${item.name}`)}`} aria-label={`Request a quote for ${item.name}`}>+</a><img src={item.image} alt={item.name} loading="lazy"/><span className="preview-mark" aria-hidden="true">▧</span><a className="view-details" href={`/products/${productSlug(item.name)}`}>View Details</a></div>
              <div className="product-copy"><div><h3>{item.name}</h3><p>{item.type}</p></div>{item.tiers ? <div className="price-tiers" aria-label={`${item.name} tiered prices`}><span>{item.priceLabel ?? "Price / ton"}</span>{item.tiers.map((tier) => <div key={tier.quantity}><strong>{tier.price}</strong><small>{tier.quantity}</small></div>)}</div> : <dl><div><dt>Price</dt><dd>Request Quote</dd></div><div><dt>MOQ</dt><dd>{item.stock}</dd></div></dl>}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="oem shell" id="oem">
        <div className="oem-intro"><p className="eyebrow">OEM / ODM MANUFACTURING</p><h2>One idea.<br/><em>A complete collection.</em></h2><p>Bring us a sketch, reference image or target market. We coordinate product development, sampling, production, quality control and export packaging around your commercial goal.</p><a className="btn primary" href="#contact">Discuss your project</a></div>
        <div className="oem-board">
          <div className="sample-tag">CUSTOM SAMPLE<br/><b>JC · 024</b></div>
          <div className="design-plate"><span>JOZING</span></div>
          <div className="swatches"><i/><i/><i/><i/></div>
          <p>Shape · Glaze · Decal · Logo · Packaging</p>
        </div>
      </section>

      <section className="factory-gallery" id="factory"><div className="shell"><div className="gallery-head"><div><p className="eyebrow">INSIDE OUR SUPPLY WORKFLOW</p><h2>Capacity you can see.</h2></div><p>Our real warehouse photo is shown alongside clearly labeled AI-assisted process visuals. These process images illustrate the typical ceramic workflow and will be replaced progressively as more JOZING site photography becomes available.</p></div><div className="gallery-grid">{factoryPhotos.map((photo, index) => <figure className={index === 0 ? "gallery-feature" : ""} key={photo.src}><img src={photo.src} alt={photo.title} loading="lazy"/><figcaption><span>{photo.title}</span><small>{photo.kind}</small></figcaption></figure>)}</div></div></section>

      <section className="capabilities"><div className="shell trust-facts"><div><strong>6,000<span>m²</span></strong><small>Factory & warehouse</small></div><div><strong>COC</strong><small>Compliance support</small></div><div><strong>RoHS</strong><small>Compliance support</small></div><div><strong>Global</strong><small>Export markets</small></div></div><div className="shell capability-main"><div className="cap-title"><p className="eyebrow">BUILT FOR B2B BUYERS</p><h2>More than a supplier.<br/>A practical sourcing partner.</h2></div><div className="cap-list">{capabilities.map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

      <section className="about shell" id="about"><div className="about-label"><p className="eyebrow">ABOUT JOZING</p><span>CHAOZHOU · CHINA</span></div><blockquote>“We combine the value of ready stock with the discipline of ceramic manufacturing—helping buyers move faster without giving up choice.”</blockquote></section>

      <section className="client-proof home-client-proof"><div className="shell"><div className="client-proof-head"><div><p className="eyebrow">SELECTED CLIENT COOPERATION</p><h2>Experience supporting international buyers and brands.</h2></div><p>Reference logos supplied by JOZING are shown with a clear ownership and endorsement disclaimer.</p></div><figure><img src="/jozing-selected-client-brands.png" width="1525" height="430" loading="lazy" alt="Selected customer and brand cooperation references supplied by JOZING"/><figcaption>Selected cooperation references supplied by JOZING. All logos remain the property of their respective owners; display does not imply endorsement or an ongoing exclusive relationship.</figcaption></figure></div></section>
      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">START A CONVERSATION</p><h2>What are you<br/>sourcing next?</h2><p>Tell us whether you need ready stock, a mixed container or a custom ceramic collection. Your completed brief will be carried into WhatsApp or email.</p><div className="contact-pills"><span>Ready stock</span><span>Mixed container</span><span>OEM/ODM</span></div><address><span>WhatsApp</span><a href="https://wa.me/8615280186517" target="_blank" rel="noreferrer">+86 152 8018 6517</a><span>Email</span><a href="mailto:sales_b2b@jozing.cn">sales_b2b@jozing.cn</a><span>Address</span><p>No. 3, Gubantou Village, Chao&apos;an District, Chaozhou, Guangdong, China</p></address></div><InquiryForm compact /></div></section>

      <footer><div className="shell footer-grid"><a className="brand-logo footer-logo" href="#top" aria-label="JOZING home"><img src="/jozing-logo-fresh.png" alt="JOZING" width="567" height="158" /></a><p>Flexible ceramic tableware supply<br/>for global B2B buyers.</p><div><a href="#stock">Ready Stock</a><a href="#oem">OEM/ODM</a><a href="#factory">Capability</a><a href="https://wa.me/8615280186517" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:sales_b2b@jozing.cn">Email</a><a href="#contact">Contact</a></div></div><div className="shell copyright"><span>© 2026 JOZING Ceramics. All rights reserved.</span><span>No. 3, Gubantou Village, Chao&apos;an District, Chaozhou, Guangdong, China</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/8615280186517?text=Hello%20JOZING%2C%20I%20am%20looking%20for%20ceramic%20tableware." target="_blank" rel="noreferrer" aria-label="Contact JOZING on WhatsApp"><b>WA</b><span>WhatsApp</span></a>
    </main>
  );
}

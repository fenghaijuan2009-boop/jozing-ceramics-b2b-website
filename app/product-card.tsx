import Link from "next/link";
import type { ReactNode } from "react";
import type { StockLot } from "./page";
import { productSlug } from "./product-utils";

type CardItem = Pick<StockLot, "code" | "name" | "type" | "image" | "priceLabel" | "pack" | "tiers">;
export function ProductCard({ item, category, children }: { item: CardItem; category?: string; children?: ReactNode }) {
  return (<article className="home-stock-tile home-stock-priced">
              <div className="home-stock-priced-image">
              <Link className="home-stock-link" href={"/products/" + productSlug(item.name)} aria-label={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" width="600" height="600" />
              </Link>
                <a className="home-stock-whatsapp" href={`https://wa.me/8615280186517?text=${encodeURIComponent(`Hello JOZING, I am interested in ${item.name} (${item.code}). Please confirm pricing and availability. https://www.jozing.cn/products/${productSlug(item.name)}/`)}`} target="_blank" rel="noopener noreferrer" data-inquiry-item={item.code} data-inquiry-category={category} aria-label={`Contact JOZING on WhatsApp about ${item.name}`}>
                  <svg viewBox="0 0 24 24" width="25" height="25" fill="none" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.5-4.8A8.5 8.5 0 1 1 20.5 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8.4 7.3c-.5 0-1.2.8-1.2 1.7 0 2.6 3.5 6.1 6.1 6.1.9 0 1.7-.7 1.7-1.2l-2-1.1-.8.8c-1.3-.5-2.4-1.6-2.9-2.9l.8-.8-1.1-2.6Z" fill="currentColor"/></svg>
                </a>
              </div>
              <div className="home-stock-priced-copy">
                <h2><Link href={"/products/" + productSlug(item.name)}>{item.type.toLowerCase()}</Link></h2>
                <div className="home-stock-prices" aria-label={`${item.name} prices`}>
                  <span>{item.priceLabel ?? item.pack}</span>
                  {item.tiers?.map((tier) => <div key={tier.quantity}><strong>{tier.price}</strong>{" "}<small>{tier.quantity}</small></div>)}
                  {!item.tiers?.length && <p>Request a quote</p>}
                </div>
                {children}
              </div>
            </article>);
}

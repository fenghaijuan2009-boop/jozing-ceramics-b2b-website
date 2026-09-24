import type { StockLot } from "./page";
import Link from "next/link";
import { productSlug } from "./product-utils";

export function BuyingComparison({ products, category }: { products: StockLot[]; category: string }) {
  return <section className="buying-comparison" aria-labelledby="compare-buying-options">
    <h2 id="compare-buying-options">Compare your wholesale options</h2>
    <p>Compare each offer in its own selling unit. Confirm the available assortment, packing and delivery date before ordering.</p>
    <div className="buying-table-scroll" role="region" aria-label="Wholesale product comparison" tabIndex={0}>
      <table><caption>Selected {category.toLowerCase()}: specifications and starting order quantities</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Size / capacity</th><th scope="col">Selling unit</th><th scope="col">Starting MOQ</th><th scope="col">Packing</th></tr></thead>
        <tbody>{products.map(product => <tr key={product.code}>
          <th scope="row"><a href={`/products/${productSlug(product.name)}/`}>{product.name}</a></th>
          <td>{product.capacity ?? product.size ?? "See product specifications"}</td>
          <td>{product.priceLabel ?? product.pack}</td><td>{product.stock}</td>
          <td>{product.cartonQty ?? "Request carton quantity, dimensions and gross weight"}</td>
        </tr>)}</tbody>
      </table>
    </div>
    <div className="buying-links"><a className="btn primary" href={`/contact/?product=${encodeURIComponent(category)}&purchaseType=Ready%20stock`}>Request assortment & packing</a><Link href="/guides/ceramic-container-loading-guide/">Plan carton and container quantities →</Link></div>
  </section>;
}

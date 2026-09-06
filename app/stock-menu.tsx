import { stockCategories } from "./stock-categories";

export function StockMenu() {
  return <details className="stock-menu">
    <summary>Ready Stock <span aria-hidden="true">⌄</span></summary>
    <div className="stock-submenu">
      {stockCategories.map(category => <a key={category.slug} href={`/stock/${category.slug}/`}>{category.name}</a>)}
      <a className="stock-menu-all" href="/stock/">View Ready Stock →</a>
    </div>
  </details>;
}

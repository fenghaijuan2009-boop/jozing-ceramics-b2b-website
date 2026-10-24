import styles from "./factory-menu.module.css";
import Link from "next/link";

export function FactoryMenu() {
  return <details className={styles.menu}>
    <summary>Factory <span aria-hidden="true">⌄</span></summary>
    <div className={styles.links}>
      <Link href="/#factory">Factory &amp; Warehouse</Link>
      <Link href="/factory/culture/">Culture &amp; Core Values</Link>
      <Link href="/factory/test-reports/">Food-Contact Test Reports</Link>
    </div>
  </details>;
}

import styles from "./factory-menu.module.css";

export function FactoryMenu() {
  return <details className={styles.menu}>
    <summary>Factory <span aria-hidden="true">⌄</span></summary>
    <div className={styles.links}>
      <a href="/#factory">Factory &amp; Warehouse</a>
      <a href="/factory/culture/">Culture &amp; Core Values</a>
    </div>
  </details>;
}

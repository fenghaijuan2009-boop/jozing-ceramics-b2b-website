import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stockLots } from "../../page";
import { InquiryForm } from "../../inquiry-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vajilla por tonelada al por mayor | JOZING",
  description: "Lotes de liquidación de vajilla cerámica desde China para importadores y mayoristas. Solicita fotos actuales, cantidades, embalaje y cotización por tonelada.",
  alternates: { canonical: "/es/vajilla-por-tonelada/" },
};
const selection = [
  { code: "JZ-A11000037703372", title: "Vajilla blanca surtida", note: "Platos, cuencos y otras piezas. Composición según el lote disponible." },
  { code: "STOCK · 13", title: "Cerámica de colores surtida", note: "Mezclas de tazas, cuencos y platos para venta mayorista." },
  { code: "STOCK · 14", title: "Vajilla negra", note: "Solicita las fotos y el listado de piezas del lote actual." },
];
export default function TonLanding() {
  return <main lang="es" className={styles.page}>
    <header className={styles.nav}><Link href="/" aria-label="JOZING inicio">JOZING<span> CERAMICS</span></Link><a href="#cotizar">Solicitar cotización ↗</a></header>
    <section className={styles.hero}><div><p className={styles.eyebrow}>CHINA → IMPORTADORES Y MAYORISTAS</p><h1>Vajilla cerámica<br /><em>por tonelada.</em></h1><p>Lotes de liquidación para tu negocio: platos, cuencos y tazas en grandes cantidades. Consulta la mezcla disponible, el peso y el embalaje antes de comprar.</p><a className={styles.button} href="#cotizar">Recibir fotos y cotización →</a><p className={styles.caption}>Compra B2B · Consulta lotes desde 1 tonelada · Sin venta por unidad</p></div><Image src={stockLots.find(p => p.code === selection[0].code)!.image} alt="Lote de vajilla blanca de cerámica JOZING" width={800} height={700} priority /></section>
    <section className={styles.section}><p className={styles.eyebrow}>ELIGE EL TIPO DE LOTE</p><h2>Stock para comprar a granel</h2><div className={styles.grid}>{selection.map(item => { const product = stockLots.find(p => p.code === item.code)!; return <article key={item.code}><Image src={product.image} alt={item.title} width={520} height={440} /><div><h3>{item.title}</h3><p>{item.note}</p><a href="#cotizar">Consultar disponibilidad →</a></div></article>; })}</div><p className={styles.caption}>Las fotos muestran referencias de catálogo. Confirma fotos actuales, calidad, surtido y cantidades por lote. La disponibilidad cambia.</p></section>
    <section className={styles.process}><div><p className={styles.eyebrow}>ANTES DE IMPORTAR</p><h2>Una cotización clara,<br />lote por lote.</h2></div><ol><li><strong>Cuéntanos qué necesitas.</strong><p>Tipo de vajilla, toneladas y puerto de destino. Para Perú, puedes indicar Callao u otro puerto.</p></li><li><strong>Revisa el lote disponible.</strong><p>Solicita fotos, composición, estado de las piezas, peso neto y bruto, cajas y condiciones de embalaje.</p></li><li><strong>Confirma el coste de importación.</strong><p>La cotización debe indicar el Incoterm. Flete, seguro, aranceles e impuestos se calculan según el destino; no se incluyen salvo acuerdo expreso.</p></li></ol></section>
    <section id="cotizar" className={styles.quote}><div><p className={styles.eyebrow}>HABLEMOS DE TU PRÓXIMO LOTE</p><h2>Solicita fotos y precio por tonelada.</h2><p>Indica la cantidad y tu puerto. JOZING revisará el stock disponible para responder a tu solicitud.</p><p>Exportación y distribución de vajilla cerámica desde China.</p><a href="mailto:sales_b2b@jozing.cn">sales_b2b@jozing.cn</a></div><InquiryForm locale="es" initialProduct="Lotes de vajilla por tonelada" compact /></section>
    <footer className={styles.footer}><span>JOZING · Cerámica al por mayor</span><Link href="/stock/hot-sale-by-ton-carton/">Catálogo completo (inglés)</Link><a href="/inquiry-privacy/">Privacidad</a></footer>
  </main>;
}

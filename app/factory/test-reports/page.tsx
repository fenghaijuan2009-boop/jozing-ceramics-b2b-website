import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-shell";
import { reportScope, testReports } from "../../../lib/test-reports";
import styles from "./reports.module.css";

export const metadata: Metadata = {
  title: "Ceramic Food-Contact Test Reports | JOZING",
  description: "Read JOZING's SGS and ZTS laboratory reports for identified ceramic samples, including report dates, methods, results and original PDF downloads.",
  alternates: { canonical: "https://www.jozing.com/factory/test-reports/" },
};

export default function TestReportsPage() {
  return <main><SiteHeader />
    <article className={styles.page}>
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span> / </span><span>Test Reports</span></nav>
      <p className="eyebrow">DOCUMENTED PRODUCT TESTING</p>
      <h1>Food-contact test reports.</h1>
      <p className={styles.intro}>Review the original laboratory documents supplied by JOZING. Each report identifies its samples, methods and results so you can assess its relevance to your order.</p>
      <div className={styles.reports}>{testReports.map(report => <section className={styles.report} key={report.id}>
        <p className="eyebrow">{report.id}</p><h2>{report.title}</h2>
        <dl>
          <dt>Laboratory</dt><dd>{report.laboratory}</dd>
          <dt>Issued</dt><dd><time dateTime={report.issued}>{report.issued}</time></dd>
          <dt>Applicant</dt><dd>Xiamen Jozing Industrial Co., Ltd.</dd>
          <dt>Submitted samples</dt><dd>{report.sample}</dd>
          <dt>Method / scope</dt><dd>{report.method}</dd>
          <dt>Reported results</dt><dd>{report.result}</dd>
        </dl>
        <a className="btn primary" href={report.file}>Read Original PDF ↓</a>
      </section>)}</div>
      <aside className={styles.scope}><h2>Check the report against your order.</h2><p>{reportScope}</p>
        <p>The original PDFs are reproduced unchanged. For clarification of any test condition, unit or product classification in a report, consult the issuing laboratory before using it for a compliance decision.</p>
        <Link href="/contact/" className="btn primary">Request Product-Specific Documents</Link>
      </aside>
    </article><SiteFooter />
  </main>;
}

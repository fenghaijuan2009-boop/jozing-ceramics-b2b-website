import { catalogCsv } from "../catalog-data";

export const dynamic = "force-static";
export function GET() {
  return new Response(catalogCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jozing-ready-stock-catalog.csv"',
    },
  });
}

import { supplierFacts, supplierFactsScope, supplierFactsUpdated } from "../../lib/supplier-facts";
import { llmsReference } from "../../lib/llms-reference";
export const dynamic = "force-static";
export function GET() {
  const text = ["# JOZING Ceramics", "Company facts updated: " + supplierFactsUpdated, supplierFacts.map(([label, value]) => label + ": " + value).join("\n"), supplierFactsScope, llmsReference].join("\n\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

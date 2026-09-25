"use client";
import { useEffect } from "react";
import { inquiryReference, safeSourcePath } from "./inquiry-utils";

// Contact attempts are not received leads. Keep references only in memory.
export function InquiryTracking() {
  useEffect(() => {
    const references = new WeakMap<HTMLAnchorElement, string>();
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a") : null;
      if (!link) return;
      let url: URL;
      try { url = new URL(link.href); } catch { return; }
      if (url.origin !== "https://wa.me" || url.pathname !== "/8615280186517") return;
      const reference = references.get(link) ?? inquiryReference();
      references.set(link, reference);
      const text = (url.searchParams.get("text") || "Hello JOZING, I am interested in ceramic tableware.").split("\nInquiry reference: JZ-")[0];
      const source = safeSourcePath(location.pathname) ?? "/contact/";
      url.searchParams.set("text", text + "\nInquiry reference: " + reference + "\nSource page: https://www.jozing.cn" + source);
      link.href = url.toString();
    };
    document.addEventListener("click", click, true);
    return () => document.removeEventListener("click", click, true);
  }, []);
  return null;
}

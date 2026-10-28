import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  // Send the small shared styles with the document so first-time buyers on
  // slow mobile connections do not wait for three render-blocking requests.
  experimental: { inlineCss: true },
};

export default nextConfig;

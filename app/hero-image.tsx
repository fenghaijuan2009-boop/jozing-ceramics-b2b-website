"use client";

import { useEffect, useRef, useState } from "react";

export function HeroImage() {
  const image = useRef<HTMLImageElement>(null);
  const [useBackup, setUseBackup] = useState(false);

  // An image can fail before hydration attaches the error handler.
  useEffect(() => {
    if (image.current?.complete && image.current.currentSrc && image.current.naturalWidth === 0) {
      setUseBackup(true);
    }
  }, []);

  return <picture className="hero-image">
    {!useBackup && <>
      <source type="image/avif" media="(max-width: 620px)" srcSet="/hero-clearance-mobile-v2.avif" />
      <source type="image/avif" media="(min-width: 621px)" srcSet="/hero-clearance-desktop-v2.avif" />
    </>}
    <source media="(max-width: 620px)" srcSet="/hero-clearance-2026-mobile.webp" />
    <img
      ref={image}
      src="/hero-clearance-2026.webp"
      alt="JOZING factory clearance ceramic tableware available for bulk export"
      width="1875"
      height="839"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onError={useBackup ? undefined : () => setUseBackup(true)}
    />
  </picture>;
}

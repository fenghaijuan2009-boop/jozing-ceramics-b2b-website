"use client";

import { useState } from "react";
import Image from "next/image";
import thumbnails from "../product-thumbnails.json";

type ProductGalleryProps = { images: string[]; productName: string };

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return <div className="product-gallery">
    <div className="product-gallery-main"><Image src={activeImage} alt={`${productName} product view`} width={960} height={960} loading="eager" fetchPriority="high" /></div>
    {images.length > 1 ? <div className="product-gallery-thumbs" aria-label="Product image gallery">
      {images.map((image, index) => <button type="button" className={image === activeImage ? "active" : ""} onClick={() => setActiveImage(image)} aria-label={`View product image ${index + 1} of ${images.length}`} aria-pressed={image === activeImage} key={image}>
        <Image src={(thumbnails as Record<string, string>)[image] ?? image} width={280} height={280} alt="" loading="lazy" />
      </button>)}
    </div> : null}
  </div>;
}


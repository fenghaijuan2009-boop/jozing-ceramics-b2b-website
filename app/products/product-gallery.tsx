"use client";

import { useState } from "react";

type ProductGalleryProps = { images: string[]; productName: string };

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return <div className="product-gallery">
    <div className="product-gallery-main"><img src={activeImage} alt={`${productName} product view`} /></div>
    {images.length > 1 ? <div className="product-gallery-thumbs" aria-label="Product image gallery">
      {images.map((image, index) => <button type="button" className={image === activeImage ? "active" : ""} onClick={() => setActiveImage(image)} aria-label={`View product image ${index + 1} of ${images.length}`} aria-pressed={image === activeImage} key={image}>
        <img src={image} alt="" loading={index === 0 ? "eager" : "lazy"} />
      </button>)}
    </div> : null}
  </div>;
}

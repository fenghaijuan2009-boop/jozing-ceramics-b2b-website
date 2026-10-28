"""Generate responsive delivery copies; keep every original photograph unchanged."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1] / "public"
jobs = [
    ("factory/jozing-warehouse-original.jpg", "factory/jozing-warehouse", [480, 768, 1200]),
    ("factory/jozing-facility-exterior.jpg", "factory/jozing-facility-exterior", [480, 768]),
    ("factory/jozing-container-dispatch.jpg", "factory/jozing-container-dispatch", [480, 768]),
    ("products/novelty-mugs-1601655571782/main-01.png", "products/novelty-mugs-1601655571782/card", [360, 720]),
]
for source, prefix, widths in jobs:
    with Image.open(root / source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        for width in widths:
            height = round(image.height * width / image.width)
            target = root / f"{prefix}-{width}.webp"
            image.resize((width, height), Image.Resampling.LANCZOS).save(target, "WEBP", quality=78, method=6)
            print(f"{target.relative_to(root)}: {target.stat().st_size:,} bytes")

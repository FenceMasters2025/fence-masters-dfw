// src/components/GalleryImage.tsx
import React from "react";

type Props = {
  /** base file name WITHOUT the -400/-800 suffix; e.g. "fence-1" or "2016-05-06 12.17.57" */
  name: string;
  /** make the first few images load immediately */
  eager?: boolean;
  /** intrinsic width/height to reserve space (prevents blank boxes) */
  w?: number;
  h?: number;
  /** accessible text */
  alt?: string;
};

export default function GalleryImage({
  name,
  eager = false,
  w = 1200,
  h = 800,
  alt = "Fence Masters DFW project",
}: Props) {
  // handle spaces and special characters safely in URLs
  const safe = encodeURIComponent(name);
  const src = `/gallery/${safe}-800.webp`;
  const srcSet = [
    `/gallery/${safe}-400.webp 400w`,
    `/gallery/${safe}-800.webp 800w`,
    `/gallery/${safe}-1200.webp 1200w`,
    `/gallery/${safe}-1600.webp 1600w`,
  ].join(", ");

  return (
    <figure
      style={{ aspectRatio: `${w}/${h}` }}
      className="relative overflow-hidden rounded-xl bg-neutral-200"
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, 30vw"
        width={w}
        height={h}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        alt={alt}
        className="w-full h-full object-cover"
      />
    </figure>
  );
}

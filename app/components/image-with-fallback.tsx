"use client";

import { useState } from "react";

const FALLBACK =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e5e0d5'/%3E%3C/svg%3E";

export function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [err, setErr] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={err ? FALLBACK : (src as string)}
      alt={alt}
      className={className}
      onError={() => setErr(true)}
      {...props}
    />
  );
}

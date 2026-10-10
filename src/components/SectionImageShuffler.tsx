"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SectionImageShufflerProps {
  images: string[];
  alts?: string[];
  intervalMs?: number;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  overlayGradient?: string;
  fill?: boolean;
  objectFit?: "cover" | "contain";
  enableScrollFade?: boolean;
  caption?: string;
  showIndicators?: boolean;
}

export default function SectionImageShuffler({
  images,
  alts = [],
  intervalMs = 4500,
  height,
  className = "",
  style = {},
  overlayGradient = "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 90%)",
  fill = true,
  objectFit = "cover",
  enableScrollFade = true,
  caption,
  showIndicators = true,
}: SectionImageShufflerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-shuffle between images
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images, intervalMs]);

  // Smooth scroll fade-in and fade-out as section enters/leaves viewport
  useEffect(() => {
    if (!enableScrollFade || typeof window === "undefined") return;

    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How far the element is within the viewport (0 = fully outside, 1 = centered/fully visible)
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setScrollOpacity(0.15);
        return;
      }

      // Compute smooth opacity bell curve based on visibility in viewport
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(1, visibleHeight / Math.min(rect.height, windowHeight * 0.8)));

      // Smooth easing between 0.25 (when far) and 1 (when in focus)
      const targetOpacity = 0.25 + ratio * 0.75;
      setScrollOpacity(targetOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollFade]);

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`image-shuffler-container ${className}`}
      style={{
        position: fill ? "absolute" : "relative",
        inset: fill ? 0 : undefined,
        width: "100%",
        height: height || (fill ? "100%" : "420px"),
        overflow: "hidden",
        opacity: scrollOpacity,
        transition: "opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        ...style,
      }}
    >
      {images.map((src, idx) => {
        const isActive = idx === currentIndex;
        const altText = alts[idx] || `Berry Funeral Services visual ${idx + 1}`;
        return (
          <div
            key={src + idx}
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1.04)" : "scale(1)",
              transition: "opacity 1.3s cubic-bezier(0.4, 0, 0.2, 1), transform 6.5s ease-out",
              zIndex: isActive ? 1 : 0,
              pointerEvents: "none",
            }}
          >
            <Image
              src={src}
              alt={altText}
              fill
              priority={idx === 0}
              style={{
                objectFit,
                filter: "contrast(1.08) brightness(0.85)",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
            />
          </div>
        );
      })}

      {/* Dark Scrim / Vignette for Text Contrast */}
      {overlayGradient && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: overlayGradient,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Optional bottom indicator dashes */}
      {showIndicators && images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1.5rem",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(6px)",
            padding: "0.3rem 0.6rem",
            border: "1px solid var(--border-gold-hairline)",
          }}
        >
          {caption && (
            <span
              style={{
                fontSize: "0.65rem",
                color: "var(--gold-light)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginRight: "0.4rem",
              }}
            >
              {caption}
            </span>
          )}
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`View photo ${dotIdx + 1}`}
              style={{
                width: dotIdx === currentIndex ? "16px" : "6px",
                height: "3px",
                background: dotIdx === currentIndex ? "var(--gold-primary)" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

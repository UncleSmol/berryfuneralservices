"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

export default function Testimonials() {
  const reviews = [
    {
      family: "The Mokoena Family",
      location: "Midrand & Soweto",
      service: "Secondary Plan (10 Members)",
      quote:
        "When my father passed away at 2:00 AM, Berry's dispatch arrived with immediate gentleness. They treated him with deep reverence. The white Mercedes cortege, tent, and gravesite setup in Midrand were executed with imperial dignity.",
    },
    {
      family: "The Van Der Merwe Family",
      location: "Pretoria & Midrand",
      service: "Cremation & Memorial Service",
      quote:
        "Berry Funeral Services handled every bureaucratic challenge with Home Affairs without us having to stress. Director Berry Mofulatsi showed genuine personal compassion that brought our family profound closure.",
    },
    {
      family: "The Moyo & Ncube Families",
      location: "Ebony Park & Bulawayo, Zimbabwe",
      service: "Country of Birth Repatriation",
      quote:
        "Repatriating my mother across the Beitbridge border felt overwhelming until we spoke to Berry Funerals. The embalming, zinc-lined casket, consulate clearances, and long-distance transport were handled with flawless professionalism.",
    },
  ];

  return (
    <section style={{ padding: "7rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
      {/* Background Reverence Atmosphere Shuffler with Scroll Fade */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.16, pointerEvents: "none" }}>
        <SectionImageShuffler
          images={[
            "/images/pexels-misty-pathway.jpg",
            "/images/pexels-white-roses.jpg",
            "/images/pexels-consoling-hands.jpg",
            "/images/pexels-serene-cemetery.jpg",
          ]}
          alts={[
            "Peaceful misty morning pathway",
            "White roses sympathy flowers",
            "Consoling hands of bereavement care",
            "Serene cemetery memorial garden",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.85) 50%, rgba(5,5,5,0.98) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "840px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Words of Gratitude from <span className="gold-gradient-text">Families We Have Served</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            The sacred trust placed in us during life&apos;s most delicate moments is our greatest honour.
          </p>
        </div>

        {/* 3 Rectilinear Sharp Testimonial Panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="card-3d-interactive"
              style={{
                background: "#080808",
                border: "1px solid var(--border-gold-hairline)",
                padding: "2.75rem 2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.25rem" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>
                  <Quote size={24} color="var(--gold-primary)" style={{ opacity: 0.4 }} />
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.98rem",
                    lineHeight: 1.85,
                    fontStyle: "italic",
                    marginBottom: "2rem",
                  }}
                >
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-dark-subtle)", paddingTop: "1.25rem" }}>
                <h4 style={{ fontSize: "1.05rem", color: "#ffffff", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {r.family}
                </h4>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <span>{r.location}</span>
                  <span style={{ color: "var(--gold-primary)", fontWeight: 700 }}>{r.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

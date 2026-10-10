"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Quote, Sparkles, Check, ArrowRight } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

export default function AboutFounder() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="about" style={{ padding: "7rem 0", background: "var(--bg-pure-black)", position: "relative", overflow: "hidden" }}>
      {/* Background Monumental Typography */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-4%",
          pointerEvents: "none",
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(8rem, 18vw, 20rem)",
          color: "rgba(184, 134, 11, 0.04)",
          fontWeight: 700,
          userSelect: "none",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        LEADERSHIP
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Editorial Section Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "800px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Honouring Life with <span className="gold-gradient-text">Dignity & Care</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Founded on Christian principles, deep community empathy, and professional integrity to ensure
            every family experiences comfort in their most trying hours.
          </p>
        </div>

        {/* Spontaneous Grid Layout for Founder Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          {/* Left Column: Sharp Framed Portrait with 3D Tilt (Span 5 on Desktop) */}
          <div
            style={{
              gridColumn: "span 12",
            }}
            className="founder-portrait-col"
          >
            <div
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="card-3d-interactive"
              style={{
                position: "relative",
                maxWidth: "420px",
                margin: "0 auto",
                background: "#ffffff",
                border: "1px solid var(--border-gold-hairline)",
                padding: "0.85rem",
                boxShadow: "var(--shadow-3d)",
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
              }}
            >
              {/* Corner Gilded Brackets */}
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  width: "14px",
                  height: "14px",
                  borderTop: "2px solid var(--gold-primary)",
                  borderLeft: "2px solid var(--gold-primary)",
                  zIndex: 3,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "14px",
                  height: "14px",
                  borderBottom: "2px solid var(--gold-primary)",
                  borderRight: "2px solid var(--gold-primary)",
                  zIndex: 3,
                }}
              />

              {/* Portrait container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  background: "#f3ede2",
                }}
              >
                <SectionImageShuffler
                  images={[
                    "/images/founder-berry-mofulatsi.jpg",
                    "/images/pexels-chapel-pews.jpg",
                    "/images/pexels-cathedral-stainedglass.jpg",
                    "/images/pexels-serene-cemetery.jpg",
                  ]}
                  alts={[
                    "Berry Mofulatsi - Founder & Managing Director",
                    "Sacred Chapel Sanctuary Hall",
                    "Cathedral Stained Glass",
                    "Serene Memorial Garden",
                  ]}
                  intervalMs={4500}
                  overlayGradient="linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)"
                  caption="Heritage"
                  enableScrollFade={true}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    right: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "1.1rem", color: "#ffffff", letterSpacing: "0.06em" }}>
                      Berry Mofulatsi
                    </h4>
                    <span style={{ fontSize: "0.72rem", color: "#f7e5b5", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                      Founder & Managing Director
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Quote (Span 7 on Desktop) */}
          <div
            style={{
              gridColumn: "span 12",
            }}
            className="founder-content-col"
          >
            <div style={{ maxWidth: "620px" }}>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", marginBottom: "0.5rem", fontWeight: 700 }}>
                Founder & Managing Director
              </div>
              <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--text-primary)", marginBottom: "1.5rem" }}>
                Berry Mofulatsi
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                A compassionate leader committed to providing professional, dignified and affordable funeral
                services that honour your loved ones and support your family through every step. With deep roots
                in the community and years of seasoned industry leadership, Berry Mofulatsi built Berry Funeral
                Services around personal empathy, transparent prices, and unwavering excellence.
              </p>

              {/* Editorial Quote Box with Hairline Gold Accents */}
              <div
                style={{
                  background: "#F5F1E8",
                  border: "1px solid var(--border-gold-hairline)",
                  borderLeft: "3px solid var(--gold-primary)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
                  padding: "1.75rem 2rem",
                  marginBottom: "2.5rem",
                  position: "relative",
                }}
              >
                <Quote size={22} color="var(--gold-primary)" style={{ marginBottom: "0.5rem", opacity: 0.8 }} />
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    letterSpacing: "0.02em",
                  }}
                >
                  &ldquo;Every farewell deserves dignity, compassion and respect.&rdquo;
                </p>
                <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold-deep)", fontWeight: 700, marginTop: "0.6rem" }}>
                  — Berry Mofulatsi, Director
                </div>
              </div>

              {/* Core Values Minimalist Row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["COMPASSION", "DIGNITY", "RESPECT", "CARE", "TRUST"].map((val) => (
                  <span
                    key={val}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      border: "1px solid var(--border-gold-hairline)",
                      background: "#ffffff",
                      color: "var(--gold-deep)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                      padding: "0.45rem 1rem",
                    }}
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Asymmetrical Editorial Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Vision */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-gold-hairline)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              padding: "2.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold-primary)", fontWeight: 700 }}>
                [ I ]
              </span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "0.06em" }}>Our Vision</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                "To be a progressive and innovative leader in funeral and cremation services.",
                "To continue being family owned and operated, dedicated to the families we serve.",
                "To hold ourselves to the highest ethical standards and practices while providing meaningful services to each family.",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--gold-primary)", fontSize: "0.9rem", marginTop: "2px" }}>—</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-gold-hairline)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              padding: "2.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold-primary)", fontWeight: 700 }}>
                [ II ]
              </span>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", letterSpacing: "0.06em" }}>Our Mission</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                "To develop trust and lifetime relationships with families, community, our staff and suppliers.",
                "To honour God in all that we do as a company and as individuals.",
                "To provide caring personalized funeral, shipping and contemporary services tailored for families of different faiths and cultures.",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--gold-primary)", fontSize: "0.9rem", marginTop: "2px" }}>—</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .founder-portrait-col {
            grid-column: span 5 !important;
          }
          .founder-content-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}

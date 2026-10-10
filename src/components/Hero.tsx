"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronRight,
  PhoneCall,
  Sparkles,
  ArrowDownRight,
  Truck,
  ShieldCheck,
  Clock,
  Compass,
  MessageSquare,
} from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";
import { BERRY_CONTACT, createWhatsAppUrl } from "@/utils/contactTemplates";

interface HeroProps {
  onOpenArrangementModal: (serviceType?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onOpenArrangementModal, onScrollToSection }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        background: "var(--bg-pure-black)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background Architectural Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(184, 134, 11, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 134, 11, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* Atmospheric Shuffling Background with Scroll Fade */}
      <div
        style={{
          position: "absolute",
          inset: "-10% 0",
          zIndex: 0,
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <SectionImageShuffler
          images={[
            "/images/african-funeral-directors.jpg",
            "/images/african-family-memorial.jpg",
            "/images/hero-image-homepage.jpg",
            "/images/hero-image2-homepage.jpg",
            "/images/african-memorial-service.jpg",
            "/images/pexels-cathedral-stainedglass.jpg",
          ]}
          alts={[
            "Berry Funeral Services professional funeral undertakers and Mercedes cortege",
            "Dignified South African family memorial in sanctuary",
            "Berry Funeral Services Sanctuary",
            "Memorial Chapel Service",
            "Solemn outdoor gravesite marquee service",
            "Cathedral Stained Glass Reverence",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(251, 249, 245, 0.90) 0%, rgba(251, 249, 245, 0.72) 40%, rgba(251, 249, 245, 0.98) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>

      {/* Giant Watermark Serif Background Typography (Awwwards Style) */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "-2%",
          right: 0,
          pointerEvents: "none",
          zIndex: 1,
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(6rem, 16vw, 18rem)",
          fontWeight: 700,
          color: "rgba(212, 175, 55, 0.03)",
          letterSpacing: "0.08em",
          lineHeight: 0.85,
          userSelect: "none",
          whiteSpace: "nowrap",
          transform: `translateY(${-scrollY * 0.08}px)`,
        }}
      >
        BERRY 1932
      </div>

      {/* Main Spontaneous Asymmetrical Layout Container */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Overlapping Monumental Typography (Cols 1 to 8 on desktop) */}
          <div
            style={{
              gridColumn: "span 12",
              zIndex: 3,
            }}
            className="hero-left-col"
          >
            {/* Editorial Metadata Tag */}


            {/* Monumental Editorial Headline overlapping image */}
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5.8vw, 5.5rem)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "var(--text-primary)",
                marginBottom: "1.75rem",
                textShadow: "0 2px 20px rgba(255, 255, 255, 0.8)",
              }}
            >
              Dignified Last Goodbye to{" "}
              <span
                className="gold-gradient-text"
                style={{
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Your Loved Ones
              </span>
            </h1>

            {/* Editorial Paragraph with high legibility contrast */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid var(--border-gold-hairline)",
                borderLeft: "3px solid var(--gold-primary)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                padding: "1.25rem 1.75rem",
                maxWidth: "640px",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                Take control of the unexpected. Bury your loved ones with dignity and respect with
                Berry Funeral Services. We let you pay in advance and at today&apos;s price. Serving families
                with love, sacred care, and nationwide body transport across South Africa.
              </p>
            </div>

            {/* Action Buttons & Quick Hotline */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <a
                href={createWhatsAppUrl("Hello Berry Funeral Services, I would like to inquire about your funeral services and burial policies.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: "#25D366",
                  color: "#000000",
                  borderColor: "#25D366",
                  fontWeight: 700,
                }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp (24/7)</span>
              </a>

              <a
                href="tel:0835525448"
                className="btn-emergency"
              >
                <PhoneCall size={15} color="var(--gold-primary)" />
                <span>083 552 5448 (24/7)</span>
              </a>

              <button
                onClick={() => onScrollToSection("plans")}
                className="btn-outline"
              >
                <span>Explore Policies</span>
                <ArrowDownRight size={15} color="var(--gold-primary)" />
              </button>

              <button
                onClick={() => onScrollToSection("contact")}
                className="btn-outline"
                style={{ borderColor: "var(--border-gold-hairline)" }}
              >
                <span>Contact Details</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilted Visual Container (Cols 7 to 12) */}
          <div
            style={{
              gridColumn: "span 12",
              marginTop: "2rem",
            }}
            className="hero-right-col"
          >
            <div
              ref={heroCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="card-3d-interactive"
              style={{
                position: "relative",
                background: "#ffffff",
                border: "1px solid var(--border-gold-hairline)",
                padding: "1rem",
                boxShadow: "var(--shadow-3d)",
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
              }}
            >
              {/* Corner Gilded Accents */}
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  width: "14px",
                  height: "14px",
                  borderTop: "2px solid var(--gold-primary)",
                  borderLeft: "2px solid var(--gold-primary)",
                  zIndex: 4,
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
                  zIndex: 4,
                }}
              />

              {/* Image Frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  background: "#030303",
                }}
              >
                <SectionImageShuffler
                  images={[
                    "/images/casket1.jpg",
                    "/images/casket2.jpg",
                    "/images/casket3.jpg",
                  ]}
                  alts={[
                    "Berry Funeral Services Executive Dome Casket",
                    "Handcrafted Imperial Timber Coffin",
                    "Bespoke Burial Casket",
                  ]}
                  intervalMs={4000}
                  overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 90%)"
                  caption="Caskets"
                  showIndicators={true}
                  enableScrollFade={true}
                />

                {/* Overlaid Floating Label within frame */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    zIndex: 2,
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#fff", textTransform: "uppercase" }}>
                      Executive 4-Corner Dome
                    </h3>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      color: "var(--gold-light)",
                      fontWeight: 700,
                    }}
                  >
                    Est. 1932
                  </span>
                </div>
              </div>

              {/* Bottom Quick Metric Strips */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border-dark-subtle)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                    Transport
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--gold-light)" }}>
                    Nationwide
                  </div>
                </div>
                <div style={{ textAlign: "center", borderLeft: "1px solid var(--border-dark-subtle)", borderRight: "1px solid var(--border-dark-subtle)" }}>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                    Waiting Period
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--gold-light)" }}>
                    0 Days Available
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                    Repatriation
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--gold-light)" }}>
                    SADC & Global
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Grid Column Classes */}
      <style jsx>{`
        @media (min-width: 992px) {
          .hero-left-col {
            grid-column: span 7 !important;
          }
          .hero-right-col {
            grid-column: span 5 !important;
            margin-top: 0 !important;
          }
        }
        @media (min-width: 1200px) {
          .hero-left-col {
            grid-column: span 7 !important;
            margin-right: -4rem; /* Spontaneous Overlap */
            z-index: 5 !important;
          }
          .hero-right-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

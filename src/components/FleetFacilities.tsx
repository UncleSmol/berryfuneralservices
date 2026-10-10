"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Truck, Sparkles, Check, ArrowRight } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

export default function FleetFacilities() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const fleetCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!fleetCardRef.current) return;
    const rect = fleetCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="fleet" style={{ padding: "7rem 0", background: "var(--bg-obsidian)", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "4.5rem", maxWidth: "860px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            The Luxury Cortege & <span className="gold-gradient-text">Sacred Fleet</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            A final journey carried out with imperial dignity. Our immaculate Mercedes-Benz funeral hearses,
            family passenger sedans, and refrigerated nationwide long-distance carriers deliver unparalleled reverence.
          </p>
        </div>

        {/* Feature 1: Mercedes Fleet Asymmetrical Showcase */}
        <div
          ref={fleetCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="card-3d-interactive gilded-bracket-box"
          style={{
            background: "#ffffff",
            border: "1px solid var(--border-gold-hairline)",
            padding: "1rem",
            marginBottom: "3.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            transform: `perspective(1100px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {/* Visual Frame (Span 7) */}
            <div
              style={{
                gridColumn: "span 12",
                position: "relative",
                minHeight: "420px",
                overflow: "hidden",
                background: "#f0ece4",
              }}
              className="fleet-image-col"
            >
              <SectionImageShuffler
                images={[
                  "/images/mercedes-fleet.jpg",
                  "/images/pexels-mercedes-luxury.jpg",
                  "/images/pexels-cortege-limo.jpg",
                  "/images/pexels-black-luxury-sedan.jpg",
                ]}
                alts={[
                  "Berry Funeral Services White Mercedes-Benz Cortege Fleet",
                  "Solemn Mercedes-Benz Funeral Hearse",
                  "Dignified Cortege Procession Limousine",
                  "Climate-Controlled Family Passenger Vehicle",
                ]}
                intervalMs={4200}
                overlayGradient="linear-gradient(180deg, rgba(245, 241, 232, 0.05) 0%, rgba(245, 241, 232, 0.45) 90%)"
                caption="Cortege"
                enableScrollFade={true}
              />
            </div>

            {/* Editorial Content (Span 5) */}
            <div
              style={{
                gridColumn: "span 12",
                padding: "2rem",
              }}
              className="fleet-text-col"
            >
              <h3 style={{ fontSize: "2rem", color: "var(--text-primary)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Pristine Mercedes-Benz & Family Transport
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our signature fleet includes immaculate white Mercedes-Benz funeral hearses accompanied by
                1 to 3 family passenger cars. We transport the body nationwide across all 9 provinces with
                solemn chauffeurs, GPS satellite tracking, and full climate-controlled preservation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                {[
                  "Nationwide long-distance body transport",
                  "Hearse + 3 family passenger vehicles",
                  "Solemn, fully uniformed chauffeurs",
                  "Complete graveside tent, chairs & lowering device",
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span style={{ color: "var(--gold-primary)", fontSize: "0.85rem" }}>+</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:0835525448"
                className="btn-emergency"
              >
                <span>Dispatch Cortege: 083 552 5448</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .fleet-image-col {
            grid-column: span 7 !important;
          }
          .fleet-text-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

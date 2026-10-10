"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Check, ArrowRight, ArrowUpRight, Sparkles, Users, MessageSquare, Mail } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";
import { getPolicyInquiryTemplates } from "@/utils/contactTemplates";

interface FuneralCoverPlansProps {
  onOpenArrangementModal: (planName?: string) => void;
}

export default function FuneralCoverPlans({ onOpenArrangementModal }: FuneralCoverPlansProps) {
  const [activeTab, setActiveTab] = useState<"all" | "society">("all");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const plans = [
    {
      id: "no-waiting",
      roman: "I",
      name: "No Waiting Period Plan",
      subtitle: "Immediate Trial Period with Joining Fee",
      coverAmount: "R3,000",
      members: "Up to 10 Members",
      premiums: [
        { age: "16 – 64", price: "R260 / m" },
        { age: "65 – 75", price: "R330 / m" },
      ],
      coffin: "Straight edge coffin + spray",
      features: [
        "No waiting trial period upon payment of joining fee",
        "Hearse & 1x family car",
        "40 Printed programmes & grave marker",
        "6x8 tent, 40 chairs, 2 tables, non-flush toilet",
        "Refreshments at cemetery + cemetery tent & chairs",
        "Unlock premium coffin types after 6 months",
      ],
      featured: true,
      tag: "Immediate Protection",
      image: "/images/secondary-plan-coffin.jpg",
    },
    {
      id: "standard",
      roman: "II",
      name: "Standard Plan",
      subtitle: "Core Household Dignity",
      coverAmount: "R2,500",
      members: "6 Members",
      premiums: [
        { age: "16 – 64", price: "R225 / m" },
        { age: "65 – 75", price: "R295 / m" },
      ],
      coffin: "Flat Lid Coffin",
      features: [
        "Body collection (removal) & storage",
        "Flat lid polished coffin",
        "Death registration & official documents",
        "Hearse + 50 programmes",
        "Tent + table & 50 chairs",
        "Mobile toilet & burial transport x1",
      ],
      featured: false,
      image: "/images/standard-plan-family.jpg",
    },
    {
      id: "secondary",
      roman: "III",
      name: "Secondary Plan",
      subtitle: "Comprehensive 10-Member Shield",
      coverAmount: "R3,000",
      members: "Up to 10 Members",
      premiums: [
        { age: "16 – 64", price: "R260 / m" },
        { age: "65 – 75", price: "R330 / m" },
      ],
      coffin: "Pine or Zinc Coffin",
      features: [
        "Hearse and 3 family cars",
        "A1 photo + 250 programmes",
        "Tent, table, 50 chairs & portable toilet",
        "Burial transport x2",
        "Gravesite setup: Gazebo, lowering device, carpet, drapes, still water",
      ],
      featured: false,
      image: "/images/secondary-plan-coffin.jpg",
    },
    {
      id: "premium",
      roman: "IV",
      name: "Premium Plan",
      subtitle: "Half-View Casket Ceremony",
      coverAmount: "R7,000",
      members: "12 Members",
      premiums: [
        { age: "16 – 64", price: "R320 / m" },
        { age: "65 – 75", price: "R395 / m" },
      ],
      coffin: "Half-View Viewing Casket",
      features: [
        "Luxurious half-view viewing casket",
        "Wreath & fresh flower tribute",
        "Hearse and 2 family cars",
        "Hearse + 250 programmes & A3 photo",
        "Tent + 2 tables, 100 chairs & mobile toilet",
        "Full gravesite setup & service decor",
      ],
      featured: false,
      image: "/images/half-view-casket.jpg",
    },
    {
      id: "executive",
      roman: "V",
      name: "Executive Plan",
      subtitle: "The Pinnacle of Regal Honour",
      coverAmount: "R10,000",
      members: "Up to 13 Members",
      premiums: [
        { age: "Starts from", price: "R550 / m" },
      ],
      coffin: "4-Corner Dome Casket",
      features: [
        "Masterpiece 4-corner dome casket",
        "Hearse and 3 family cars",
        "A1 photo + 250 programmes",
        "Tent + 2 tables, 150 chairs, 2 portable toilets",
        "R2,000 grocery + R150 airtime benefit",
        "Juice & still water catering at cemetery",
      ],
      featured: true,
      tag: "Executive Tier",
      image: "/images/executive-casket.jpg",
    },
  ];

  return (
    <section
      id="plans"
      ref={sectionRef}
      style={{
        padding: "7rem 0",
        background: "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Architectural Grid Lines & Dark Scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(212, 175, 55, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
          zIndex: 1,
        }}
      />

      {/* Atmospheric Shuffling Background with Scroll Fade (Hero-style dynamic photography) */}
      <div
        style={{
          position: "absolute",
          inset: "-10% 0",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <SectionImageShuffler
          images={[
            "/images/african-memorial-service.jpg",
            "/images/african-family-memorial.jpg",
            "/images/hero-image-homepage.jpg",
            "/images/hero-image2-homepage.jpg",
            "/images/hero-chapel.jpg",
            "/images/pexels-cathedral-stainedglass.jpg",
          ]}
          alts={[
            "Solemn outdoor gravesite marquee service in Midrand",
            "Dignified South African family memorial in sanctum",
            "Berry Funeral Services Sanctuary",
            "Memorial Chapel Service",
            "Dignified Sanctuary Chapel",
            "Cathedral Stained Glass Reverence",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 40%, rgba(0,0,0,0.96) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>

      {/* Background Architectural Watermark */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-5%",
          pointerEvents: "none",
          zIndex: 1,
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(8rem, 20vw, 22rem)",
          color: "rgba(212, 175, 55, 0.03)",
          fontWeight: 700,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        POLICIES
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Editorial Section Header */}
        <div style={{ marginBottom: "4.5rem", maxWidth: "900px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Berry Funeral <span className="gold-gradient-text">Policy Matrix</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Take control of the unexpected. Lock in your funeral in advance and at today&apos;s price.
            Designed without ambiguous clauses, with zero waiting period trial options and generous cover limits.
          </p>

          {/* Mode Switcher */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button
              onClick={() => setActiveTab("all")}
              style={{
                background: activeTab === "all" ? "var(--gold-primary)" : "transparent",
                color: activeTab === "all" ? "#000000" : "#ffffff",
                border: "1px solid var(--border-gold-hairline)",
                padding: "0.6rem 1.6rem",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Household Plans (05)
            </button>
            <button
              onClick={() => setActiveTab("society")}
              style={{
                background: activeTab === "society" ? "var(--gold-primary)" : "transparent",
                color: activeTab === "society" ? "#000000" : "#ffffff",
                border: "1px solid var(--border-gold-hairline)",
                padding: "0.6rem 1.6rem",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Burial Society Group (10 Members)
            </button>
          </div>
        </div>

        {/* Tab 1: Spontaneous Editorial Asymmetrical Grid of Plans */}
        {activeTab === "all" && (
          <div>
            {/* Top Row: Spontaneous Hero Split for No Waiting Period Plan & Executive Plan */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {/* Highlight 1: No Waiting Period Plan (Span 7) */}
              <div
                style={{
                  gridColumn: "span 12",
                  position: "relative",
                  background: "#080808",
                  border: "1px solid var(--border-gold-hairline)",
                  overflow: "hidden",
                  padding: "3rem",
                  boxShadow: "var(--shadow-3d)",
                }}
                className="plan-card-hero-1 gilded-bracket-box"
              >
                {/* Shuffling Casket Showcase with Scroll Fade */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "55%",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                >
                  <SectionImageShuffler
                    images={[
                      "/images/casket1.jpg",
                      "/images/casket2.jpg",
                      "/images/casket3.jpg",
                    ]}
                    alts={[
                      "Berry Funeral Services Imperial Casket",
                      "Polished Timber Casket",
                      "Bespoke Burial Casket",
                    ]}
                    intervalMs={3900}
                    overlayGradient="linear-gradient(90deg, #080808 20%, rgba(8,8,8,0.7) 100%)"
                    showIndicators={false}
                    enableScrollFade={true}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 2, maxWidth: "560px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                    <span
                      style={{
                        background: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid var(--gold-primary)",
                        color: "var(--gold-light)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.6rem",
                        fontWeight: 700,
                      }}
                    >
                      Immediate Trial Coverage
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "#ffffff", marginBottom: "0.5rem" }}>
                    No Waiting Period Plan
                  </h3>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
                    Dignified Goodbyes, Made Easy • Up to 10 Members
                  </div>

                  {/* Overlapping Price Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1.5rem",
                      marginBottom: "1.5rem",
                      background: "rgba(0, 0, 0, 0.75)",
                      border: "1px solid var(--border-gold-hairline)",
                      padding: "1rem 1.5rem",
                      maxWidth: "420px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        Cover Payout
                      </div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--gold-light)", fontWeight: 700 }}>
                        R3,000
                      </div>
                    </div>
                    <div style={{ borderLeft: "1px solid var(--border-dark-subtle)", paddingLeft: "1.5rem" }}>
                      <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        Monthly Premium
                      </div>
                      <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 700 }}>
                        16–64: <strong style={{ color: "var(--gold-primary)" }}>R260/m</strong>
                      </div>
                      <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 700 }}>
                        65–75: <strong style={{ color: "var(--gold-primary)" }}>R330/m</strong>
                      </div>
                    </div>
                  </div>

                  {/* Feature Bullets with hairlines */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                    {[
                      "No waiting period with Joining Fee",
                      "Standard straight edge coffin & spray",
                      "Hearse & 1x family car cortege",
                      "6x8 tent, 40 chairs, 2 tables, toilet",
                      "40 Programmes & cemetery setup",
                      "Upgrade coffin types after 6 months",
                    ].map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "var(--gold-primary)", fontSize: "0.85rem", marginTop: "1px" }}>+</span>
                        <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    <button
                      onClick={() => onOpenArrangementModal("No Waiting Period Plan (R3,000)")}
                      className="btn-primary"
                    >
                      <span>Join No Waiting Period Plan</span>
                      <ArrowRight size={15} />
                    </button>
                    <a
                      href={getPolicyInquiryTemplates("No Waiting Period Plan", "R3,000", "From R260/m").whatsappUrl}
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
                      <MessageSquare size={15} />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Highlight 2: Executive Plan (Span 5) */}
              <div
                style={{
                  gridColumn: "span 12",
                  position: "relative",
                  background: "#080808",
                  border: "1px solid var(--border-gold-hairline)",
                  overflow: "hidden",
                  padding: "3rem",
                  boxShadow: "var(--shadow-3d)",
                }}
                className="plan-card-hero-2 gilded-bracket-box"
              >
                {/* Background Overlapping Dome Casket */}
                {/* Shuffling Executive Tier Imagery with Scroll Fade */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "70%",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                >
                  <SectionImageShuffler
                    images={[
                      "/images/casket3.jpg",
                      "/images/pexels-mercedes-luxury.jpg",
                      "/images/pexels-cathedral-stainedglass.jpg",
                    ]}
                    alts={[
                      "Executive 4-Corner Dome Casket",
                      "Pristine Cortege Fleet",
                      "Cathedral Sacred Atmosphere",
                    ]}
                    intervalMs={4300}
                    overlayGradient="linear-gradient(90deg, #080808 25%, rgba(8,8,8,0.75) 100%)"
                    showIndicators={false}
                    enableScrollFade={true}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                    <span
                      style={{
                        background: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid var(--gold-primary)",
                        color: "var(--gold-light)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.6rem",
                        fontWeight: 700,
                      }}
                    >
                      Pinnacle Tier
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: "#ffffff", marginBottom: "0.5rem" }}>
                    Executive Plan
                  </h3>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
                    4-Corner Dome Casket • Up to 13 Members
                  </div>

                  {/* Pricing Box */}
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.75)",
                      border: "1px solid var(--border-gold-hairline)",
                      padding: "1rem 1.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div>
                        <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                          Cover Amount
                        </div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--gold-light)", fontWeight: 700 }}>
                          R10,000
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                          Premiums Start From
                        </div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "#ffffff", fontWeight: 700 }}>
                          R550 / m
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullet inclusions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                    {[
                      "4-Corner Dome Casket & fresh flower sprays",
                      "Hearse and 3 family cars cortege",
                      "A1 Framed Photo + 250 Programmes",
                      "Tent + 2 tables, 150 chairs, 2 portable toilets",
                      "R2,000 Grocery Voucher + R150 Airtime Benefit",
                      "Service venue décor, juice & still water",
                    ].map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: "var(--gold-primary)", fontSize: "0.85rem" }}>+</span>
                        <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    <button
                      onClick={() => onOpenArrangementModal("Executive Plan (R10,000)")}
                      className="btn-outline"
                      style={{ flex: 1, minWidth: "160px", justifyContent: "center" }}
                    >
                      <span>Apply for Executive Plan</span>
                      <ArrowRight size={15} />
                    </button>
                    <a
                      href={getPolicyInquiryTemplates("Executive Plan", "R10,000", "From R550/m").whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        background: "#25D366",
                        color: "#000000",
                        borderColor: "#25D366",
                        fontWeight: 700,
                        padding: "0.6rem 1rem",
                      }}
                    >
                      <MessageSquare size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Three-Column Architectural Grid for Standard, Secondary, Premium */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {[plans[1], plans[2], plans[3]].map((plan) => (
                <div
                  key={plan.id}
                  className="card-3d-interactive"
                  style={{
                    background: "#080808",
                    border: "1px solid var(--border-gold-hairline)",
                    padding: "2.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginBottom: "1.25rem",
                      borderBottom: "1px solid var(--border-dark-subtle)",
                      paddingBottom: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--gold-primary)", letterSpacing: "0.15em", fontWeight: 700 }}>
                      {plan.members}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: "1.6rem", color: "#ffffff", marginBottom: "0.25rem" }}>
                      {plan.name}
                    </h3>
                    <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", marginBottom: "1.5rem" }}>
                      {plan.subtitle}
                    </div>

                    {/* Price Block */}
                    <div
                      style={{
                        background: "#0d0d0d",
                        border: "1px solid var(--border-dark-subtle)",
                        padding: "1rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)" }}>
                          Cover Amount:
                        </span>
                        <strong style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold-light)" }}>
                          {plan.coverAmount}
                        </strong>
                      </div>
                      {plan.premiums.map((p, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                          <span>Ages {p.age}:</span>
                          <strong style={{ color: "#ffffff" }}>{p.price}</strong>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--gold-primary)", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
                      Coffin: {plan.coffin}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                          <span style={{ color: "var(--gold-primary)", fontSize: "0.8rem" }}>+</span>
                          <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenArrangementModal(`Apply for ${plan.name} (${plan.coverAmount})`)}
                    className="btn-outline"
                    style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Burial Society Group Scheme Large Editorial Spread */}
        {activeTab === "society" && (
          <div
            className="gilded-bracket-box"
            style={{
              padding: "4rem 3rem",
              background: "#080808",
              border: "1px solid var(--border-gold-strong)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shuffling Burial Society Fleet Imagery with Scroll Fade */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "48%",
                pointerEvents: "none",
              }}
            >
              <SectionImageShuffler
                images={[
                  "/images/mercedes-fleet.jpg",
                  "/images/pexels-black-luxury-sedan.jpg",
                  "/images/pexels-cortege-limo.jpg",
                ]}
                alts={[
                  "Berry Funeral Services Mercedes cortege fleet",
                  "Solemn family passenger car",
                  "Dignified cortege transport",
                ]}
                intervalMs={4400}
                overlayGradient="linear-gradient(90deg, #080808 20%, rgba(8,8,8,0.72) 100%)"
                showIndicators={false}
                enableScrollFade={true}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "3rem",
                alignItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div style={{ gridColumn: "span 12" }} className="society-left-col">
                <div style={{ fontSize: "0.75rem", color: "var(--gold-primary)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Group & Stokvel Scheme • 1 Primary + 9 Beneficiaries
                </div>
                <h3 style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", color: "#ffffff", marginBottom: "1rem" }}>
                  Burial Society Group Scheme
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Formulated specifically for registered burial societies, community stokvels, and church fellowships.
                  One policy covers up to 10 family members with dignified cortege logistics and gravesite equipment.
                </p>

                {/* Cover Metrics Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                    marginBottom: "2.5rem",
                    maxWidth: "520px",
                  }}
                >
                  <div
                    style={{
                      background: "#000000",
                      border: "1px solid var(--border-gold-hairline)",
                      padding: "1.5rem",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.15em" }}>
                      Total Society Cover
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "var(--gold-light)", fontWeight: 700 }}>
                      R15,000.00
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#000000",
                      border: "1px solid var(--border-gold-hairline)",
                      padding: "1.5rem",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.15em" }}>
                      Monthly Society Premiums
                    </div>
                    <div style={{ fontSize: "1rem", color: "#ffffff", marginTop: "0.4rem" }}>
                      16–64: <strong style={{ color: "var(--gold-primary)" }}>R200 / month</strong>
                    </div>
                    <div style={{ fontSize: "1rem", color: "#ffffff", marginTop: "0.2rem" }}>
                      65–75: <strong style={{ color: "var(--gold-primary)" }}>R260 / month</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenArrangementModal("Burial Society Group Scheme (R15,000)")}
                  className="btn-primary"
                  style={{ padding: "1rem 2.2rem" }}
                >
                  <span>Register Burial Society Scheme</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Society Inclusions */}
              <div style={{ gridColumn: "span 12" }} className="society-right-col">
                <div
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid var(--border-gold-hairline)",
                    padding: "2.5rem",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold-primary)", fontWeight: 700, marginBottom: "1.25rem" }}>
                    Guaranteed Society Inclusions:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      "Collection and mortuary preservation",
                      "High-grade airtight Zinc Coffin & Memorial Wreath",
                      "Official death registration & Department documentation",
                      "Hearse and 3 Family Cars cortege",
                      "A1 Framed Photo + 250 Printed Programmes",
                      "Tent + Table & 50 Chairs",
                      "Portable Toilet & Burial Transport x2",
                      "Full Gravesite: Gazebo, Lowering device, Drapes, Carpet & Still water",
                    ].map((inc, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <span style={{ color: "var(--gold-primary)", fontSize: "0.85rem" }}>✓</span>
                        <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .plan-card-hero-1 {
            grid-column: span 7 !important;
          }
          .plan-card-hero-2 {
            grid-column: span 5 !important;
          }
          .society-left-col {
            grid-column: span 7 !important;
          }
          .society-right-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

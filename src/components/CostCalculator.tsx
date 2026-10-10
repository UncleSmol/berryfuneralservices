"use client";

import React, { useState } from "react";
import { Printer, Send, ShieldCheck, ArrowRight } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

interface CostCalculatorProps {
  onOpenArrangementModal: (serviceType?: string, estimatedTotal?: string) => void;
}

export default function CostCalculator({ onOpenArrangementModal }: CostCalculatorProps) {
  const [serviceType, setServiceType] = useState<string>("burial");
  const [casketTier, setCasketTier] = useState<string>("pineZinc");
  const [fleetOption, setFleetOption] = useState<string>("standard");
  const [distanceKm, setDistanceKm] = useState<number>(0);

  const [extras, setExtras] = useState<{ [key: string]: boolean }>({
    tentChairs: true,
    gravesiteSetup: true,
    programs: true,
    mobileToilet: true,
    groceryBenefit: false,
  });

  const basePrices: { [key: string]: number } = {
    burial: 8500,
    cremation: 7200,
    repatriation: 14500,
    exhumation: 11000,
  };

  const casketPrices: { [key: string]: { label: string; price: number; desc: string } } = {
    flatLid: { label: "Flat Lid Coffin", price: 2500, desc: "Classic polished flat-lid timber coffin (Standard Plan)" },
    straightEdge: { label: "Straight Edge Coffin", price: 2800, desc: "Standard straight-edge coffin with brass fittings" },
    pineZinc: { label: "Pine / Zinc Coffin", price: 3800, desc: "Sturdy pine or airtight zinc-lined coffin (Secondary Plan)" },
    halfView: { label: "Half-View Casket", price: 6500, desc: "Luxury polished timber half-view viewing casket (Premium Plan)" },
    domeCasket: { label: "4-Corner Dome Casket", price: 11500, desc: "Regal 4-corner rounded dome casket with satin interior (Executive Plan)" },
  };

  const fleetPrices: { [key: string]: { label: string; price: number } } = {
    standard: { label: "Hearse + 1 Family Car (Included)", price: 0 },
    twoCars: { label: "Hearse + 2 Family Cars", price: 1800 },
    threeCars: { label: "Hearse + 3 Family Cars (Full Cortege)", price: 3200 },
  };

  const extrasList = [
    { key: "tentChairs", label: "6x8 Tent, 2 Tables & 50 Draped Chairs", price: 2200 },
    { key: "gravesiteSetup", label: "Full Gravesite: Gazebo, Lowering Device, Carpet & Still Water", price: 2600 },
    { key: "programs", label: "250 Customized Full-Colour Programmes + A1 Photo", price: 1400 },
    { key: "mobileToilet", label: "Sanitized Mobile Toilet Unit (On-Site)", price: 1200 },
    { key: "groceryBenefit", label: "Family Catering Allowance & Grocery Voucher", price: 2000 },
  ];

  const toggleExtra = (key: string) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const basePrice = basePrices[serviceType] || 8500;
  const casketPrice = casketPrices[casketTier]?.price || 0;
  const fleetPrice = fleetPrices[fleetOption]?.price || 0;
  const distanceCost = distanceKm * 16;
  const extrasCost = extrasList.reduce((acc, item) => (extras[item.key] ? acc + item.price : acc), 0);
  const totalCost = basePrice + casketPrice + fleetPrice + distanceCost + extrasCost;

  const formattedTotal = `R${totalCost.toLocaleString()}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="calculator" style={{ padding: "7rem 0", background: "var(--bg-obsidian)", position: "relative", overflow: "hidden" }}>
      {/* Background Atmosphere Shuffler with Scroll Fade */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.16, pointerEvents: "none" }}>
        <SectionImageShuffler
          images={[
            "/images/casket1.jpg",
            "/images/pexels-white-lilies.jpg",
            "/images/pexels-chapel-pews.jpg",
            "/images/pexels-vigil-candles.jpg",
          ]}
          alts={[
            "Berry Funeral Services Polished Timber Casket",
            "White Lilies Floral Sympathy Tribute",
            "Sacred Chapel Sanctuary Pews",
            "Memorial Vigil Candles",
          ]}
          intervalMs={5000}
          overlayGradient="linear-gradient(180deg, rgba(245, 241, 232, 0.95) 0%, rgba(245, 241, 232, 0.80) 50%, rgba(245, 241, 232, 0.98) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "840px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Transparent Funeral <span className="gold-gradient-text">Cost Estimator</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Complete pricing transparency with zero hidden surcharges. Configure your ceremony, casket,
            fleet, and gravesite requirements for an immediate itemized quotation.
          </p>
        </div>

        {/* Spontaneous Grid: 7 cols controls, 5 cols summary */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Controls Column (Span 7) */}
          <div
            style={{
              gridColumn: "span 12",
              background: "#ffffff",
              border: "1px solid var(--border-gold-hairline)",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
            className="calc-controls-col"
          >
            {/* Step 1: Service Type */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-deep)", fontWeight: 700, marginBottom: "0.85rem" }}>
                Select Service Type
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {[
                  { id: "burial", label: "Burial Ceremony" },
                  { id: "cremation", label: "Cremation Service" },
                  { id: "repatriation", label: "Country of Birth Repatriation" },
                  { id: "exhumation", label: "Exhumation & Relocation" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceType(s.id)}
                    style={{
                      padding: "0.85rem 1rem",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: serviceType === s.id ? "var(--gold-primary)" : "var(--bg-obsidian)",
                      color: serviceType === s.id ? "#ffffff" : "var(--text-primary)",
                      border: serviceType === s.id ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Casket Tier */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-deep)", fontWeight: 700, marginBottom: "0.85rem" }}>
                Coffin & Casket Selection
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {Object.entries(casketPrices).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setCasketTier(key)}
                    style={{
                      padding: "1rem 1.25rem",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: casketTier === key ? "var(--bg-obsidian)" : "#ffffff",
                      border: casketTier === key ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                      boxShadow: casketTier === key ? "0 2px 10px rgba(184, 134, 11, 0.15)" : "none",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.92rem", textTransform: "uppercase" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>{item.desc}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--gold-deep)", fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}>
                      +R{item.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Transportation */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-deep)", fontWeight: 700, marginBottom: "0.85rem" }}>
                Vehicles & Nationwide Distance
              </div>
              <select
                value={fleetOption}
                onChange={(e) => setFleetOption(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-gold-hairline)",
                  color: "var(--text-primary)",
                  fontSize: "0.88rem",
                  marginBottom: "1.25rem",
                  outline: "none",
                }}
              >
                {Object.entries(fleetPrices).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.label} {item.price > 0 ? `(+R${item.price.toLocaleString()})` : ""}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: "0.8rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                  <span>Nationwide Distance Outside Gauteng</span>
                  <span style={{ color: "var(--gold-deep)", fontWeight: 700 }}>{distanceKm} km (+R{distanceCost.toLocaleString()})</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="800"
                  step="25"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--gold-primary)", cursor: "pointer" }}
                />
              </div>
            </div>

            {/* Step 4: Ceremony Extras */}
            <div>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-deep)", fontWeight: 700, marginBottom: "0.85rem" }}>
                Tents, Chairs & Ceremony Logistics
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {extrasList.map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleExtra(item.key)}
                    style={{
                      padding: "0.85rem 1rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: extras[item.key] ? "var(--bg-obsidian)" : "#ffffff",
                      border: extras[item.key] ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ color: extras[item.key] ? "var(--gold-deep)" : "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700 }}>
                        {extras[item.key] ? "[✓]" : "[  ]"}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--gold-deep)" }}>
                      +R{item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quotation Summary Console (Span 5) */}
          <div
            style={{
              gridColumn: "span 12",
              background: "#ffffff",
              border: "1px solid var(--gold-primary)",
              padding: "2.5rem",
              position: "sticky",
              top: "100px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
            className="calc-summary-col gilded-bracket-box"
          >
            <h3 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Official Quotation
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
              Itemized calculation based on transparent standard tariffs.
            </p>

            {/* Line items with hairline dividers */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--border-gold-hairline)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Base Service ({serviceType.toUpperCase()})</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>R{basePrice.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>{casketPrices[casketTier]?.label}</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>R{casketPrice.toLocaleString()}</span>
              </div>
              {fleetPrice > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Additional Cars</span>
                  <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>R{fleetPrice.toLocaleString()}</span>
                </div>
              )}
              {distanceCost > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Nationwide Mileage ({distanceKm} km)</span>
                  <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>R{distanceCost.toLocaleString()}</span>
                </div>
              )}
              {extrasList
                .filter((item) => extras[item.key])
                .map((item) => (
                  <div key={item.key} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>R{item.price.toLocaleString()}</span>
                  </div>
                ))}
            </div>

            {/* Grand Total */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>
                Total Estimated Tariff
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                  margin: "0.2rem 0",
                }}
              >
                {formattedTotal}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                *Grave fee is payable directly to municipal authorities by client.
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <button
                onClick={() => onOpenArrangementModal(`Custom Quotation (${serviceType.toUpperCase()})`, formattedTotal)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Lock in This Quotation</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={handlePrint}
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}
              >
                <Printer size={14} />
                <span>Print Quotation Sheet</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .calc-controls-col {
            grid-column: span 7 !important;
          }
          .calc-summary-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

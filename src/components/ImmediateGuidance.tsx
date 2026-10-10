"use client";

import React, { useState } from "react";
import { Check, Phone, FileCheck, HeartHandshake, UserCheck, AlertCircle, MessageSquare, Mail } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";
import { getImmediateNeedTemplates } from "@/utils/contactTemplates";

export default function ImmediateGuidance() {
  const [activeStep, setActiveStep] = useState(0);
  const emergencyTemplates = getImmediateNeedTemplates();

  const steps = [
    {
      step: "01",
      roman: "I",
      title: "Medical Certification",
      subtitle: "Doctor / Paramedic Confirmation",
      icon: FileCheck,
      details:
        "If death occurs at home, notify your general practitioner or paramedics immediately to certify the death (DHA-1663 Notice of Death). If death occurs in a hospital, hospice, or care home, the medical staff will issue the notice of death directly to our funeral directors.",
      tip: "Do not attempt to move the deceased before a medical professional or paramedic has formally certified the passing.",
    },
    {
      step: "02",
      roman: "II",
      title: "Berry 24/7 Dispatch",
      subtitle: "Immediate, Respectful Collection",
      icon: Phone,
      details:
        "Reach out to our 24/7 Bereavement Dispatch at 083 552 5448 or 081 708 4102. Our discreet, uniformed transfer team will be dispatched in a sanitized, climate-controlled transport vehicle to respectfully transfer your loved one into our licensed mortuary care.",
      tip: "Have the deceased's Identity Document (ID) or passport ready, along with the medical certificate if already issued.",
    },
    {
      step: "03",
      roman: "III",
      title: "Mortuary Sanctum Care",
      subtitle: "State-of-the-Art Preservation",
      icon: HeartHandshake,
      details:
        "Your loved one is placed into our high-security, temperature-controlled mortuary facility. We carry out restorative preparation, washing, dressing, and gentle embalming (essential for international cross-border repatriation) according to your cultural, religious, or personal preferences.",
      tip: "You may deliver your loved one's favorite attire and personal items for dressing at any time convenient for your family.",
    },
    {
      step: "04",
      roman: "IV",
      title: "Family Arrangement",
      subtitle: "Designing a Sacred Farewell",
      icon: UserCheck,
      details:
        "Meet with Director Berry Mofulatsi or our seasoned consultants at our Midrand offices or in your family living room. We coordinate cemetery plots, burial vs cremation, casket selection, floral tributes, order of service programs, and livestreaming.",
      tip: "We handle all Home Affairs death registration, BI-20 burial orders, and consulate repatriation clearances on your behalf.",
    },
  ];

  return (
    <section
      id="guidance"
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
            "/images/african-family-memorial.jpg",
            "/images/african-memorial-service.jpg",
            "/images/pexels-cathedral-stainedglass.jpg",
            "/images/pexels-sanctuary-hall.jpg",
          ]}
          alts={[
            "Family comfort during sacred bereavement",
            "Dignified South African memorial service gathering",
            "Cathedral Stained Glass Reverence",
            "Sanctuary Peace",
          ]}
          intervalMs={5000}
          overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.96) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "840px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            What to Do When a <span className="gold-gradient-text">Loved One Passes Away</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Grief can be disorienting. Follow these calm, essential steps. Berry Funeral Services is walking
            alongside you every step of the journey, 24 hours a day.
          </p>
        </div>

        {/* Step Buttons in Architectural Sharp Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  padding: "1.75rem",
                  cursor: "pointer",
                  background: isSelected ? "#121212" : "#000000",
                  border: isSelected ? "1px solid var(--gold-primary)" : "1px solid var(--border-dark-subtle)",
                  borderTop: isSelected ? "3px solid var(--gold-primary)" : "1px solid var(--border-dark-subtle)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <Icon size={22} style={{ color: isSelected ? "var(--gold-light)" : "var(--gold-primary)" }} />
                </div>
                <h4 style={{ fontSize: "1.05rem", color: isSelected ? "#ffffff" : "var(--text-secondary)", marginBottom: "0.25rem" }}>
                  {item.title}
                </h4>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Feature Console */}
        <div
          className="gilded-bracket-box"
          style={{
            background: "#080808",
            border: "1px solid var(--border-gold-hairline)",
            padding: "3.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div style={{ gridColumn: "span 12" }} className="guidance-left-col">

              <h3 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: "#ffffff", marginBottom: "1.25rem" }}>
                {steps[activeStep].title}
              </h3>

              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2rem" }}>
                {steps[activeStep].details}
              </p>

              <div
                style={{
                  background: "#000000",
                  borderLeft: "3px solid var(--gold-primary)",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold-primary)", fontWeight: 700, marginBottom: "0.25rem" }}>
                  Director&apos;s Advice:
                </div>
                <div style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {steps[activeStep].tip}
                </div>
              </div>
            </div>

            <div style={{ gridColumn: "span 12" }} className="guidance-right-col">
              <div
                style={{
                  position: "relative",
                  minHeight: "360px",
                  border: "1px solid var(--border-gold-hairline)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem",
                }}
              >
                <SectionImageShuffler
                  images={[
                    "/images/pexels-consoling-hands.jpg",
                    "/images/pexels-vigil-candles.jpg",
                    "/images/pexels-misty-pathway.jpg",
                    "/images/pexels-hands-candle.jpg",
                  ]}
                  alts={[
                    "Bereavement guidance and compassionate support",
                    "Memorial vigil candles in sanctuary",
                    "Peaceful serene pathway",
                    "Solemn candle vigil",
                  ]}
                  intervalMs={4200}
                  overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.92) 80%)"
                  caption="Care"
                  enableScrollFade={true}
                />

                <div style={{ position: "relative", zIndex: 3 }}>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", marginBottom: "0.4rem", fontWeight: 700 }}>
                    24/7 Rapid Bereavement Dispatch
                  </div>
                  <h4 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                    Need Immediate Assistance?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: 1.5 }}>
                    Our directors and mortuary drivers are on call right now across Midrand, Gauteng, and nationwide.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <a
                      href={emergencyTemplates.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        background: "#25D366",
                        color: "#000000",
                        borderColor: "#25D366",
                        fontWeight: 700,
                      }}
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp Dispatch (24/7)</span>
                    </a>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                      <a
                        href="tel:0835525448"
                        className="btn-outline"
                        style={{ justifyContent: "center", fontSize: "0.8rem", padding: "0.6rem 0.4rem" }}
                      >
                        <Phone size={14} />
                        <span>Call 083 552 5448</span>
                      </a>
                      <a
                        href={emergencyTemplates.emailUrl}
                        className="btn-outline"
                        style={{ justifyContent: "center", fontSize: "0.8rem", padding: "0.6rem 0.4rem" }}
                      >
                        <Mail size={14} />
                        <span>Email Dispatch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .guidance-left-col {
            grid-column: span 8 !important;
          }
          .guidance-right-col {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </section>
  );
}

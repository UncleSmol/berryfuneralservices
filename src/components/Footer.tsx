"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-obsidian)",
        borderTop: "1px solid var(--border-gold-hairline)",
        paddingTop: "6rem",
        paddingBottom: "3.5rem",
        color: "var(--text-secondary)",
        fontSize: "0.85rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4.5rem",
          }}
        >
          {/* Brand Info */}
          <div>
            {/* Brand Logo */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  background: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06), 0 0 15px rgba(184, 134, 11, 0.15)",
                  border: "1px solid rgba(184, 134, 11, 0.3)",
                }}
              >
                <Image
                  src="/images/berryfuneralservices-logo.png"
                  alt="Berry Funeral Services"
                  width={200}
                  height={65}
                  style={{ height: "48px", width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              Take control of the unexpected. Bury your loved ones with dignity and respect with Berry Funeral Services.
              Pay in advance and at today&apos;s price. We serve with love, dignity, and sacred care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              Services Index
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Burial Services & Tents", "24/7 Body Collection", "Exhumation & Relocation", "Cremation Services", "Repatriation Services", "Tombstones & Memorials"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    style={{ color: "var(--text-secondary)", letterSpacing: "0.05em", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-deep)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Matrix */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              Official Policies
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["No Waiting Period Plan", "Standard Plan (6 Members)", "Secondary Plan (10 Members)", "Premium Plan (12 Members)", "Executive Plan (13 Members)", "Burial Society Group Scheme"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#plans"
                    style={{ color: "var(--text-secondary)", letterSpacing: "0.05em", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-deep)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              Headquarters & Contacts
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div>
                <a href="tel:0835525448" style={{ color: "var(--gold-deep)", fontWeight: 700, fontSize: "0.95rem" }}>
                  +27 83 552 5448
                </a>
                <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>/</span>
                <a href="tel:0817084102" style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "0.95rem", marginLeft: "0.5rem" }}>
                  081 708 4102
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/27835525448?text=Hello%20Berry%20Funeral%20Services%2C%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#059669", fontWeight: 700, fontSize: "0.88rem" }}
                >
                  WhatsApp: +27 83 552 5448
                </a>
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Landline: <strong style={{ color: "var(--text-primary)" }}>010 023 6703</strong>
              </div>
              <div>
                <a href="mailto:berrymof@gmail.com" style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                  berrymof@gmail.com
                </a>
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                511 Bottlebrush Cres, Ebony Park, Midrand, 1685
              </div>
              <div style={{ borderTop: "1px solid var(--border-gold-hairline)", paddingTop: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <div>Office: Mon, Wed–Fri 9am–6pm (Tue, Sat, Sun Closed)</div>
                <div style={{ color: "var(--gold-deep)", marginTop: "2px", fontWeight: 600 }}>Dispatch: 24/7/365 Non-stop</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-gold-hairline)",
            paddingTop: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            &copy; 2026 BERRY FUNERAL SERVICES. COMPASSION • DIGNITY • RESPECT • CARE.
          </div>

          <div>
            <button
              onClick={scrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#ffffff",
                border: "1px solid var(--border-gold-hairline)",
                color: "var(--gold-deep)",
                padding: "0.5rem 1.2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                fontWeight: 600,
              }}
            >
              <ArrowUp size={13} /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

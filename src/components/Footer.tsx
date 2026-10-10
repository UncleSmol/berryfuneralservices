"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#000000",
        borderTop: "1px solid var(--border-gold-hairline)",
        paddingTop: "6rem",
        paddingBottom: "3.5rem",
        color: "var(--text-muted)",
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  background: "#080808",
                  border: "1px solid var(--gold-primary)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "0.6rem", color: "var(--gold-primary)", lineHeight: 1 }}>✝</span>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "#fff",
                  }}
                >
                  B
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#fff",
                  }}
                >
                  BERRY <span className="gold-gradient-text">FUNERALS</span>
                </span>
                <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Dignified Last Goodbye
                </span>
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
                color: "#fff",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Services Index
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Burial Services & Tents", "24/7 Body Collection", "Exhumation & Relocation", "Cremation Services", "Repatriation Services", "Tombstones & Memorials"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    style={{ color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
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
                color: "#fff",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Official Policies
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["No Waiting Period Plan", "Standard Plan (6 Members)", "Secondary Plan (10 Members)", "Premium Plan (12 Members)", "Executive Plan (13 Members)", "Burial Society Group Scheme"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#plans"
                    style={{ color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
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
                color: "#fff",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Headquarters & Contacts
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div>
                <a href="tel:0835525448" style={{ color: "var(--gold-light)", fontWeight: 700, fontSize: "0.95rem" }}>
                  083 552 5448
                </a>
                <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>/</span>
                <a href="tel:0817084102" style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginLeft: "0.5rem" }}>
                  081 708 4102
                </a>
              </div>
              <div style={{ color: "var(--text-muted)" }}>
                Landline: <strong style={{ color: "#fff" }}>010 023 6703</strong>
              </div>
              <div>
                <a href="mailto:berrymof@gmail.com" style={{ color: "var(--text-secondary)" }}>
                  berrymof@gmail.com
                </a>
              </div>
              <div style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                511 Bottlebrush Cres, Ebony Park, Midrand, 1685
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark-subtle)",
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
                background: "transparent",
                border: "1px solid var(--border-gold-hairline)",
                color: "var(--gold-primary)",
                padding: "0.5rem 1.2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
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

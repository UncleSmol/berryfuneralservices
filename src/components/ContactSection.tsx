"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Check, Globe } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Burial Services",
    plan: "No Waiting Period Plan (10 Members)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      {/* Background Sanctuary Atmosphere Shuffler with Scroll Fade */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none" }}>
        <SectionImageShuffler
          images={[
            "/images/hero-image-homepage.jpg",
            "/images/hero-image2-homepage.jpg",
            "/images/pexels-cathedral-stainedglass.jpg",
            "/images/pexels-sanctuary-hall.jpg",
          ]}
          alts={[
            "Berry Funeral Services Midrand Headquarters",
            "Solemn Memorial Chapel",
            "Cathedral Stained Glass",
            "Sanctuary Hall",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.98) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "4.5rem", maxWidth: "860px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Reach Berry <span className="gold-gradient-text">Funeral Services</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Whether you require immediate 24/7 body removal, guidance on our no waiting period policy plans,
            or cross-border repatriation, our directors and consultants are available every hour of day and night.
          </p>
        </div>

        {/* Spontaneous Grid: 5 cols info, 7 cols form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Contact Details (Span 5) */}
          <div
            style={{
              gridColumn: "span 12",
            }}
            className="contact-left-col"
          >
            {/* Urgent Phone Hotline Box */}
            <div
              className="gilded-bracket-box"
              style={{
                padding: "2.5rem 2rem",
                background: "#080808",
                border: "1px solid var(--border-gold-strong)",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <span className="pulse-indicator" />
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", fontWeight: 700 }}>
                  24/7 Immediate Dispatch
                </div>
              </div>

              <h3 style={{ fontSize: "1.6rem", color: "#ffffff", marginBottom: "1rem" }}>
                Immediate Removal Hotline
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.75rem", lineHeight: 1.6 }}>
                Direct lines to our mortuary driver dispatch team in Midrand for immediate assistance:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="tel:0835525448"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: "0.95rem" }}
                >
                  <Phone size={17} />
                  <span>083 552 5448</span>
                </a>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  <a
                    href="tel:0817084102"
                    className="btn-outline"
                    style={{ justifyContent: "center", padding: "0.75rem 0.5rem", fontSize: "0.8rem" }}
                  >
                    <span>081 708 4102</span>
                  </a>
                  <a
                    href="tel:0100236703"
                    className="btn-outline"
                    style={{ justifyContent: "center", padding: "0.75rem 0.5rem", fontSize: "0.8rem" }}
                  >
                    <span>010 023 6703</span>
                  </a>
                </div>

                <a
                  href="https://wa.me/27835525448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    justifyContent: "center",
                    marginTop: "0.5rem",
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    color: "#a7f3d0",
                  }}
                >
                  <MessageSquare size={16} color="#10b981" />
                  <span>WhatsApp Concierge 24/7</span>
                </a>
              </div>
            </div>

            {/* Official Headquarters Card */}
            <div
              style={{
                background: "#080808",
                border: "1px solid var(--border-gold-hairline)",
                padding: "2rem",
              }}
            >
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-primary)", fontWeight: 700, marginBottom: "1.25rem" }}>
                Physical Location & Headquarters
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <MapPin size={18} color="var(--gold-primary)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "0.92rem" }}>
                      Ebony Park Head Office
                    </strong>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                      511 Bottlebrush Crescent, Ebony Park, Midrand, 1685, South Africa
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Mail size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "0.82rem" }}>Official Email</strong>
                    <a href="mailto:berrymof@gmail.com" style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                      berrymof@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Globe size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "0.82rem" }}>Official Web Portals</strong>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                      www.berryfuneralservice.co.za
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Clock size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "0.82rem" }}>Operating Schedule</strong>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                      24 Hours • 7 Days • 365 Days a Year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Request Form (Span 7) */}
          <div
            style={{
              gridColumn: "span 12",
              background: "#080808",
              border: "1px solid var(--border-gold-hairline)",
              padding: "3rem 2.5rem",
              boxShadow: "var(--shadow-3d)",
            }}
            className="contact-right-col gilded-bracket-box"
          >
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", fontWeight: 700, marginBottom: "0.4rem" }}>
              [ DIRECT CONSULTATION ]
            </div>
            <h3 style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "0.5rem" }}>
              Request Director Consultation
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Submit your inquiry and Director Berry Mofulatsi or an executive consultant will phone you back promptly.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  padding: "3rem 2rem",
                  textAlign: "center",
                  background: "#0d0d0d",
                  border: "1px solid var(--gold-primary)",
                }}
              >
                <div style={{ fontSize: "2rem", color: "var(--gold-primary)", marginBottom: "1rem" }}>
                  ✓
                </div>
                <h4 style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
                  Inquiry Received with Reverence
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem auto" }}>
                  Thank you, {formData.name || "valued client"}. Berry Funeral Services has logged your details.
                  We will contact you on <strong>{formData.phone || "provided number"}</strong> immediately.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-outline"
                  style={{ fontSize: "0.82rem" }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sindi Sithole"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      background: "#000000",
                      border: "1px solid var(--border-gold-hairline)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 083 552 5448"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        background: "#000000",
                        border: "1px solid var(--border-gold-hairline)",
                        color: "#fff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. family@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        background: "#000000",
                        border: "1px solid var(--border-gold-hairline)",
                        color: "#fff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        background: "#000000",
                        border: "1px solid var(--border-gold-hairline)",
                        color: "#fff",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    >
                      <option value="Burial Services">Burial Services</option>
                      <option value="Immediate Body Removal">Immediate Body Removal</option>
                      <option value="Funeral Policy Sign-Up">Funeral Policy Sign-Up</option>
                      <option value="Repatriation">Country of Birth Repatriation</option>
                      <option value="Exhumation">Exhumation & Relocation</option>
                      <option value="Cremation">Cremation Services</option>
                      <option value="Tombstone">Tombstones & Memorials</option>
                      <option value="Burial Society">Burial Society Group Scheme</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Preferred Plan
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        background: "#000000",
                        border: "1px solid var(--border-gold-hairline)",
                        color: "#fff",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    >
                      <option value="No Waiting Period Plan">No Waiting Period Plan</option>
                      <option value="Standard Plan (6 Members)">Standard Plan (6 Members)</option>
                      <option value="Secondary Plan (10 Members)">Secondary Plan (10 Members)</option>
                      <option value="Premium Plan (12 Members)">Premium Plan (12 Members)</option>
                      <option value="Executive Plan (13 Members)">Executive Plan (13 Members)</option>
                      <option value="Burial Society Group Scheme">Burial Society Group Scheme</option>
                      <option value="Custom Service Quotation">Custom Service Quotation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    Location or Custom Cultural Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention scene/hospital address, cemetery, church, or specific cultural customs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      background: "#000000",
                      border: "1px solid var(--border-gold-hairline)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", padding: "1.05rem", fontSize: "0.88rem", marginTop: "0.5rem" }}
                >
                  <Send size={15} />
                  <span>Transmit Inquiry to Berry Funerals</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .contact-left-col {
            grid-column: span 5 !important;
          }
          .contact-right-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}

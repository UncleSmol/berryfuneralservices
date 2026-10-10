"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Check, Globe } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";
import { BERRY_CONTACT, getContactFormTemplates, createWhatsAppUrl } from "@/utils/contactTemplates";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastAction, setLastAction] = useState<"whatsapp" | "email">("whatsapp");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Burial Services",
    plan: "No Waiting Period Plan (10 Members)",
    message: "",
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLastAction("whatsapp");
    const { whatsappUrl } = getContactFormTemplates(formData);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLastAction("email");
    const { emailUrl } = getContactFormTemplates(formData);
    window.location.href = emailUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      {/* Background Sanctuary Atmosphere Shuffler with Scroll Fade */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.22, pointerEvents: "none" }}>
        <SectionImageShuffler
          images={[
            "/images/african-funeral-directors.jpg",
            "/images/african-memorial-service.jpg",
            "/images/african-family-memorial.jpg",
            "/images/hero-image-homepage.jpg",
            "/images/hero-image2-homepage.jpg",
          ]}
          alts={[
            "Berry Funeral Services professional funeral undertakers",
            "Solemn marquee memorial service in Midrand",
            "Dignified South African family memorial",
            "Berry Funeral Services Midrand Headquarters",
            "Solemn Memorial Chapel",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.96) 100%)"
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

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Clock size={16} color="var(--gold-primary)" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div style={{ width: "100%" }}>
                    <strong style={{ color: "#fff", display: "block", fontSize: "0.82rem", marginBottom: "0.5rem" }}>
                      Office Operating Schedule
                    </strong>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", fontSize: "0.82rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Monday</span>
                        <span style={{ color: "#ffffff", fontWeight: 600 }}>9:00 AM – 6:00 PM</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Tuesday</span>
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>Closed</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Wednesday</span>
                        <span style={{ color: "#ffffff", fontWeight: 600 }}>9:00 AM – 6:00 PM</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Thursday</span>
                        <span style={{ color: "#ffffff", fontWeight: 600 }}>9:00 AM – 6:00 PM</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Friday</span>
                        <span style={{ color: "#ffffff", fontWeight: 600 }}>9:00 AM – 6:00 PM</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Saturday</span>
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>Closed</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "var(--text-secondary)" }}>Sunday</span>
                        <span style={{ color: "#ef4444", fontWeight: 600 }}>Closed</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "0.6rem", fontSize: "0.78rem", color: "var(--gold-primary)", lineHeight: 1.4 }}>
                      • 24/7 Bereavement Dispatch & Body Removal active round-the-clock everyday.
                    </div>
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
                  Inquiry Template Prepared
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem auto" }}>
                  Thank you, <strong>{formData.name || "valued client"}</strong>. Your consultation details have been compiled for Director Berry Mofulatsi.
                  Click below to open the conversation directly in WhatsApp or launch your email app:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "380px", margin: "0 auto 2rem auto" }}>
                  <a
                    href={getContactFormTemplates(formData).whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      background: "#25D366",
                      color: "#000000",
                      borderColor: "#25D366",
                      fontWeight: 700,
                      justifyContent: "center",
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp (Direct Chat)</span>
                  </a>

                  <a
                    href={getContactFormTemplates(formData).emailUrl}
                    className="btn-outline"
                    style={{ justifyContent: "center" }}
                  >
                    <Mail size={16} />
                    <span>Open in Email App</span>
                  </a>

                  <a
                    href="tel:0835525448"
                    className="btn-outline"
                    style={{ justifyContent: "center", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <Phone size={14} />
                    <span>Call 083 552 5448</span>
                  </a>
                </div>

                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-outline"
                  style={{ fontSize: "0.82rem", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "1.05rem",
                      fontSize: "0.9rem",
                      background: "#25D366",
                      color: "#000000",
                      borderColor: "#25D366",
                      fontWeight: 700,
                      justifyContent: "center",
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp (Direct Chat)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="btn-outline"
                    style={{ width: "100%", padding: "0.95rem", fontSize: "0.86rem", justifyContent: "center" }}
                  >
                    <Mail size={15} />
                    <span>Launch Email App (Ready Template)</span>
                  </button>
                </div>
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

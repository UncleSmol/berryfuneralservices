"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, Calendar, Phone, Clock, ArrowRight, MessageSquare, Mail } from "lucide-react";
import { getArrangementTemplates } from "@/utils/contactTemplates";

interface ArrangementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialEstimate?: string;
}

export default function ArrangementModal({
  isOpen,
  onClose,
  initialService = "Burial Services",
  initialEstimate,
}: ArrangementModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService);
  const [urgency, setUrgency] = useState("Immediate Need");
  const [consultationMode, setConsultationMode] = useState("Home Visit");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [referenceId, setReferenceId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `BFS-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    const { whatsappUrl } = getArrangementTemplates({
      referenceId: ref,
      fullName,
      phone,
      service,
      urgency,
      consultationMode,
      notes,
      initialEstimate,
    });
    // Initiate WhatsApp conversation directly
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setReferenceId("");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(15, 23, 42, 0.65)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        className="gilded-bracket-box"
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "#ffffff",
          border: "1px solid var(--border-gold-hairline)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.22)",
          padding: "3rem",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "#ffffff",
            border: "1px solid var(--border-gold-hairline)",
            color: "var(--text-secondary)",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {step !== 3 && (
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "#ffffff",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid rgba(184, 134, 11, 0.3)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="/images/berryfuneralservices-logo.png"
                  alt="Berry Funeral Services"
                  width={140}
                  height={45}
                  style={{ height: "32px", width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="pulse-indicator" />
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-deep)", fontWeight: 700 }}>
                  BERRY CONCIERGE
                </span>
              </div>
            </div>
            <h2 style={{ fontSize: "2rem", color: "var(--text-primary)", lineHeight: 1.2 }}>
              {step === 1 ? "Arrange a Dignified Service" : "Your Consultation Preferences"}
            </h2>
            {initialEstimate && (
              <div
                style={{
                  marginTop: "0.8rem",
                  display: "inline-block",
                  background: "var(--bg-obsidian)",
                  border: "1px solid var(--border-gold-hairline)",
                  padding: "0.35rem 0.9rem",
                  fontSize: "0.82rem",
                  color: "var(--gold-deep)",
                  letterSpacing: "0.08em",
                }}
              >
                Included Estimate: <strong>{initialEstimate}</strong>
              </div>
            )}
          </div>
        )}

        {/* Step 1: Select Type & Urgency */}
        {step === 1 && (
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold-deep)", marginBottom: "0.8rem", fontWeight: 700 }}>
                Select Service or Policy Plan
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {[
                  "Burial Services",
                  "Immediate Body Removal",
                  "No Waiting Period Plan",
                  "Standard Plan (6 Members)",
                  "Secondary Plan (10 Members)",
                  "Premium Plan (12 Members)",
                  "Executive Plan (13 Members)",
                  "Burial Society Group Scheme",
                  "Country of Birth Repatriation",
                  "Exhumation Services",
                  "Cremation Services",
                  "Tombstones & Memorials",
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    style={{
                      padding: "0.85rem 1rem",
                      textAlign: "left",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      background: service === s ? "var(--gold-primary)" : "var(--bg-obsidian)",
                      color: service === s ? "#ffffff" : "var(--text-primary)",
                      border: service === s ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold-deep)", marginBottom: "0.8rem", fontWeight: 700 }}>
                Urgency
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {[
                  { id: "Immediate Need", label: "Immediate (Death Has Occurred)" },
                  { id: "Upcoming Days", label: "Imminent (Next few days)" },
                  { id: "Pre-Planning", label: "Pre-Planning at Today's Price" },
                  { id: "General Inquiry", label: "Policy / Pricing Inquiry" },
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setUrgency(u.id)}
                    style={{
                      padding: "0.85rem 1rem",
                      textAlign: "left",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      background: urgency === u.id ? "#ffffff" : "var(--bg-obsidian)",
                      color: urgency === u.id ? "var(--text-primary)" : "var(--text-secondary)",
                      border: urgency === u.id ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                      boxShadow: urgency === u.id ? "0 2px 8px rgba(184, 134, 11, 0.2)" : "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="btn-primary"
              style={{ width: "100%", padding: "1.05rem" }}
            >
              <span>Next Step: Contact Details</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Step 2: Contact Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sindi Sithole"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-gold-hairline)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                Primary Contact Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 083 552 5448"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-gold-hairline)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                Preferred Consultation Method
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem" }}>
                {["Home Visit", "Midrand Office", "Phone / WhatsApp"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setConsultationMode(mode)}
                    style={{
                      padding: "0.75rem 0.5rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: consultationMode === mode ? "var(--gold-primary)" : "var(--bg-obsidian)",
                      color: consultationMode === mode ? "#ffffff" : "var(--text-secondary)",
                      border: consultationMode === mode ? "1px solid var(--gold-primary)" : "1px solid var(--border-gold-hairline)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                Location / Cultural Remarks
              </label>
              <textarea
                rows={2}
                placeholder="Hospital/home address, cemetery, or family preferences..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-gold-hairline)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-outline"
                style={{ flex: 1, padding: "0.95rem" }}
              >
                &larr; Back
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{ flex: 2, padding: "0.95rem" }}
              >
                <span>Confirm Arrangement</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (() => {
          const { whatsappUrl, emailUrl } = getArrangementTemplates({
            referenceId,
            fullName,
            phone,
            service,
            urgency,
            consultationMode,
            notes,
            initialEstimate,
          });

          return (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--gold-deep)", marginBottom: "1rem" }}>
                ✓
              </div>

              <h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                Your Arrangement Has Been Prepared
              </h3>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.4rem 1.2rem",
                  background: "var(--bg-obsidian)",
                  border: "1px solid var(--gold-primary)",
                  color: "var(--gold-deep)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                REFERENCE: {referenceId}
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem auto" }}>
                Thank you, <strong>{fullName || "valued client"}</strong>. Your arrangement for{" "}
                <strong>{service}</strong> is ready. Connect directly with Director Berry Mofulatsi via WhatsApp or your email client below:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "400px", margin: "0 auto 2rem auto" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: "#25D366",
                    color: "#000000",
                    borderColor: "#25D366",
                    fontWeight: 700,
                    justifyContent: "center",
                    padding: "0.95rem",
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp (Direct Chat)</span>
                </a>

                <a
                  href={emailUrl}
                  className="btn-outline"
                  style={{ justifyContent: "center", padding: "0.95rem" }}
                >
                  <Mail size={16} />
                  <span>Send via Email App</span>
                </a>

                <a
                  href="tel:0835525448"
                  className="btn-outline"
                  style={{ justifyContent: "center", padding: "0.85rem" }}
                >
                  <Phone size={15} />
                  <span>Call Director Berry: 083 552 5448</span>
                </a>
              </div>

              <button onClick={handleReset} className="btn-outline" style={{ padding: "0.75rem 2rem", fontSize: "0.85rem" }}>
                <span>Return to Portal</span>
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

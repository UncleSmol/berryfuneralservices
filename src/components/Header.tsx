"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenArrangementModal: (serviceType?: string) => void;
}

export default function Header({ onOpenArrangementModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, width: "100%", background: "var(--bg-pure-black)" }}>
      {/* Main Architectural Navigation Bar */}
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-gold-hairline)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.9rem",
            paddingBottom: "0.9rem",
          }}
        >
          {/* Brand Logo & Monogram Crest */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "6px 14px",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05), 0 0 10px rgba(184, 134, 11, 0.12)",
                border: "1px solid var(--border-gold-hairline)",
              }}
            >
              <Image
                src="/images/berryfuneralservices-logo.png"
                alt="Berry Funeral Services"
                width={170}
                height={55}
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.2rem",
            }}
            className="desktop-links"
          >
            {[
              { href: "#about", label: "Heritage" },
              { href: "#services", label: "Services" },
              { href: "#plans", label: "Policy Plans" },
              { href: "#tributes", label: "Memorials" },
              { href: "#fleet", label: "Cortege" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "0.7rem 1.4rem",
                fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <Phone size={14} />
              Contact Us
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                padding: "0.4rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#ffffff",
              borderTop: "1px solid var(--border-gold-hairline)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            {[
              { href: "#about", label: "About & Leadership" },
              { href: "#services", label: "Our Services" },
              { href: "#plans", label: "Funeral Cover Plans" },
              { href: "#tributes", label: "Tributes & Obituaries" },
              { href: "#fleet", label: "Fleet & Chapels" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ paddingTop: "0.5rem" }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
              >
                <Phone size={15} />
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-links {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

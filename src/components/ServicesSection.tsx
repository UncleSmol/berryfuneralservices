"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Flame,
  Globe2,
  Flower2,
  Check,
  ArrowRight,
  Truck,
  Landmark,
  FileCheck,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";
import { getServiceInquiryTemplates } from "@/utils/contactTemplates";

interface ServicesSectionProps {
  onOpenArrangementModal: (serviceType?: string) => void;
}

export default function ServicesSection({ onOpenArrangementModal }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("burial");

  const services = [
    {
      id: "burial",
      roman: "I",
      name: "Burial Services",
      icon: Compass,
      headline: "Solemn Ceremony Preparation & Burial Arrangements",
      description:
        "We assist with every aspect of preparation for the ceremony, arrangements of chairs, tents at the graveyard, hearses, family cars, and pastoral coordination to honor your loved one with peace and decorum.",
      features: [
        "Hearse cortege accompanied by 1 to 3 family cars",
        "Arrangement of 6x8 tents, tables, and 40 to 150 chairs at the home & graveyard",
        "Full Gravesite setup: Still water, Carpet, Gazebo, Covered chairs, Lowering device, Drapes & Green carpet",
        "Selection of quality Flat Lid, Pine, Zinc, Half-View, and 4-Corner Dome caskets",
        "Fresh floral coffin sprays, wreaths, and 40 to 250 printed funeral programmes",
      ],
      startingFrom: "Custom Packages",
      cta: "Inquire About Burial",
      image: "/images/mercedes-fleet.jpg",
    },
    {
      id: "collection",
      roman: "II",
      name: "Body Collection",
      icon: Truck,
      headline: "Immediate & Respectful Body Removal from Any Scene",
      description:
        "Our members and families are assisted with immediate collection of the deceased's body from the scene, private residence, hospice, or hospital at any hour of the day or night.",
      features: [
        "24/7 Rapid response dispatch team on standby 365 days a year",
        "Sanitized, climate-controlled mortuary transport vehicles",
        "Respectful, dignified handling with solemn professionalism",
        "Direct transfer into our licensed mortuary storage facility",
        "Guidance on first medical documents and doctor certifications",
      ],
      startingFrom: "Included in Plans",
      cta: "Request Immediate Removal",
      image: "/images/fleet.jpg",
    },
    {
      id: "repatriation",
      roman: "III",
      name: "Repatriation Services",
      icon: Globe2,
      headline: "Cross-Border & Country of Birth Body Transportation",
      description:
        "We offer transportation of the deceased's body to their country of birth at reasonable costs. We assist with all complex legalities, permits, and border logistics involved to transport the body home for burial.",
      features: [
        "Specialized cross-border transportation across SADC (Zimbabwe, Mozambique, Lesotho, Botswana, Malawi, Eswatini)",
        "Certified embalming and zinc-lined airtight casket sealing for international transport",
        "Consulate clearance, Department of Health export permits & customs documentation",
        "Road transport with dedicated long-distance repatriation vehicles or air cargo",
        "Experienced directors managing all border crossing protocols with ease",
      ],
      startingFrom: "Affordable Tariffs",
      cta: "Enquire Repatriation Assistance",
      image: "/images/hero-chapel.jpg",
    },
    {
      id: "exhumation",
      roman: "IV",
      name: "Exhumation Services",
      icon: Landmark,
      headline: "Professional Graveyard Body Removal & Relocation",
      description:
        "Body removal from the graveyard to be relocated is a sensitive and challenging task. Berry Funerals makes proper, legal, and culturally respectful arrangements to help relocate your loved one safely.",
      features: [
        "Liaison with municipal health departments, cemetery managers, and SAPS",
        "Provincial Department of Health exhumation permits and court orders",
        "Sanitary re-casketing into new hermetic zinc or timber coffins",
        "Dignified re-interment at your chosen new cemetery or family homestead",
        "Discreet, respectful execution with strict adherence to environmental health laws",
      ],
      startingFrom: "Consultation Required",
      cta: "Consult on Exhumation",
      image: "/images/memorial-candle.jpg",
    },
    {
      id: "cremation",
      roman: "V",
      name: "Cremation Services",
      icon: Flame,
      headline: "Reverent Cremation Services for Diverse Faiths & Cultures",
      description:
        "This option is for body burning to ashes due to the diversity of cultures and religious purposes in our community. We handle every step with sanctity, from medical approvals to ashes hand-over.",
      features: [
        "Attended chapel cremation ceremonies or direct unattended cremations",
        "Cremation referee certification and statutory municipal documentation",
        "Wide collection of handcrafted wooden, brass, ceramic, and biodegradable urns",
        "Ash scattering arrangements and garden of remembrance placements",
        "Multi-cultural and interfaith ceremonial guidance",
      ],
      startingFrom: "Competitive Pricing",
      cta: "Explore Cremation Options",
      image: "/images/memorial-candle.jpg",
    },
    {
      id: "tombstones",
      roman: "VI",
      name: "Tombstones & Memorials",
      icon: Flower2,
      headline: "Tailor-Made Tombstones in Premium Marble & Granite",
      description:
        "Get tailor-made tombstones, selecting top marble and granite materials for gravestones that preserve your loved one's legacy for generations to come.",
      features: [
        "High-density African Black granite, marble, and polished stone finishes",
        "Custom laser etching of portraits, scriptures, and personalized epitaphs",
        "Professional installation and concrete foundation laying at cemeteries",
        "Grave markers, curbing, ledger slabs, and memorial plaques",
        "Tombstone unveiling ceremony coordination and transport support",
      ],
      startingFrom: "Marble & Granite Tiers",
      cta: "View Tombstone Designs",
      image: "/images/secondary-plan-coffin.jpg",
    },
    {
      id: "documentation",
      roman: "VII",
      name: "Documentation & Policies",
      icon: FileCheck,
      headline: "Death Registration, Legal Paperwork & Funeral Policies",
      description:
        "We relieve families of exhausting legal legwork. From Home Affairs death registration to BI-20 burial orders and monthly funeral cover policies from R200/month.",
      features: [
        "Official Department of Home Affairs death registration (DHA-1663)",
        "Prompt issuance of BI-20 Burial Orders for cemetery burial or cremation",
        "Monthly funeral policies: No Waiting Period, Standard, Secondary, Premium, and Executive",
        "Burial Society and Stokvel group schemes (10 members covered from R200/m)",
        "Pre-planning: Lock in today's price against future inflation",
      ],
      startingFrom: "From R200 / month",
      cta: "Join a Funeral Plan",
      image: "/images/executive-casket.jpg",
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];
  const serviceTemplates = getServiceInquiryTemplates(currentService.name);

  return (
    <section
      id="services"
      style={{
        padding: "7rem 0",
        background: "var(--bg-pure-black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Architectural Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(184, 134, 11, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 134, 11, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 20%, transparent 80%)",
          zIndex: 1,
        }}
      />

      {/* Atmospheric Shuffling Background with Scroll Fade */}
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
            "/images/african-funeral-directors.jpg",
            "/images/african-memorial-service.jpg",
            "/images/mercedes-fleet.jpg",
            "/images/hero-chapel.jpg",
            "/images/pexels-cathedral-stainedglass.jpg",
          ]}
          alts={[
            "Berry Funeral Services professional funeral undertakers and cortege",
            "Dignified South African marquee memorial service",
            "White Mercedes cortege fleet",
            "Dignified Chapel Setting",
            "Cathedral Stained Glass",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(251, 249, 245, 0.90) 0%, rgba(251, 249, 245, 0.72) 40%, rgba(251, 249, 245, 0.96) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "840px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Our Comprehensive <span className="gold-gradient-text">Offerings</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            The company has directors with years of experience in the industry to provide quality services and products.
            We offer tailored burial solutions and packages with the best competitive price.
          </p>
        </div>

        {/* Minimalist Architectural Horizontal Nav Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3.5rem",
            borderBottom: "1px solid var(--border-gold-hairline)",
            paddingBottom: "1.25rem",
          }}
        >
          {services.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.65rem 1.25rem",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: isActive ? "var(--gold-primary)" : "#ffffff",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive ? "1px solid var(--gold-primary)" : "1px solid var(--border-dark-subtle)",
                  boxShadow: isActive ? "0 4px 12px rgba(184, 134, 11, 0.2)" : "0 1px 4px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Spontaneous Grid: Active Service Feature */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2.5rem",
            alignItems: "center",
            background: "#ffffff",
            border: "1px solid var(--border-gold-hairline)",
            padding: "3.5rem 3rem",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-3d)",
          }}
          className="gilded-bracket-box"
        >
          {/* Shuffling Visual Anchor with 3+ Photos and Scroll Fade */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "55%",
              pointerEvents: "none",
            }}
          >
            <SectionImageShuffler
              images={[
                "/images/casket1.jpg",
                "/images/casket2.jpg",
                "/images/casket3.jpg",
                "/images/pexels-floral-wreath.jpg",
                "/images/pexels-white-roses.jpg",
              ]}
              alts={[
                "Berry Funeral Services Dome Casket Craftsmanship",
                "Imperial Wooden Coffin",
                "Bespoke Burial Casket",
                "Fresh Floral Funeral Wreath",
                "White Roses Floral Tribute",
              ]}
              intervalMs={4600}
              overlayGradient="linear-gradient(90deg, #ffffff 25%, rgba(255,255,255,0.7) 100%)"
              showIndicators={false}
              enableScrollFade={true}
            />
          </div>

          {/* Left: Headline & Inclusions (Span 7) */}
          <div
            style={{
              gridColumn: "span 12",
              position: "relative",
              zIndex: 2,
            }}
            className="service-left-col"
          >
            <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--text-primary)", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              {currentService.headline}
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "620px" }}>
              {currentService.description}
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-deep)", fontWeight: 700, marginBottom: "1.2rem" }}>
                Service Deliverables & Inclusions:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {currentService.features.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ color: "var(--gold-primary)", fontSize: "0.85rem", marginTop: "2px" }}>+</span>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Architectural Tariff Box (Span 5) */}
          <div
            style={{
              gridColumn: "span 12",
              position: "relative",
              zIndex: 2,
            }}
            className="service-right-col"
          >
            <div
              style={{
                background: "#F5F1E8",
                border: "1px solid var(--border-gold-hairline)",
                padding: "2.5rem 2rem",
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                Tariff Framework
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                  marginBottom: "1rem",
                }}
              >
                {currentService.startingFrom}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
                Tailored burial solutions and packages with the best competitive price and uncompromised dignity.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <button
                  onClick={() => onOpenArrangementModal(currentService.name)}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>{currentService.cta}</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={serviceTemplates.whatsappUrl}
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
                  <span>WhatsApp Inquire: {currentService.name}</span>
                </a>

                <a
                  href={serviceTemplates.emailUrl}
                  className="btn-outline"
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}
                >
                  <Mail size={14} />
                  <span>Email Official Inquiry</span>
                </a>
              </div>

              <div style={{ marginTop: "1.2rem", fontSize: "0.8rem", color: "var(--gold-primary)", letterSpacing: "0.08em" }}>
                24/7 Helpline: <strong>083 552 5448</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .service-left-col {
            grid-column: span 7 !important;
          }
          .service-right-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}

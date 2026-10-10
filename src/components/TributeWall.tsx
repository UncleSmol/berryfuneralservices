"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flame, MessageSquare, Search, Send, Calendar, Video } from "lucide-react";
import SectionImageShuffler from "@/components/SectionImageShuffler";

interface Tribute {
  id: string;
  name: string;
  years: string;
  dateOfPassing: string;
  serviceDate: string;
  serviceLocation: string;
  image: string;
  tributeSnippet: string;
  candles: number;
  userLitCandle?: boolean;
  condolences: { author: string; relation: string; message: string; date: string }[];
}

export default function TributeWall() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTributeId, setSelectedTributeId] = useState<string>("1");
  const [newAuthor, setNewAuthor] = useState("");
  const [newRelation, setNewRelation] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const [tributes, setTributes] = useState<Tribute[]>([
    {
      id: "1",
      name: "Mama Nomvula Evelyn Khumalo",
      years: "1942 — 2026",
      dateOfPassing: "3 October 2026",
      serviceDate: "Saturday, 11 October 2026 • 09:00 AM",
      serviceLocation: "Ebony Park Community Hall & Midrand Cemetery",
      image: "/images/memorial-candle.jpg",
      tributeSnippet:
        "A cherished matriarch, community pillar, and devoted teacher whose warm laughter and tireless generosity shaped generations in Orlando West and Midrand.",
      candles: 142,
      userLitCandle: false,
      condolences: [
        {
          author: "Pastor S. Dlamini",
          relation: "Family Pastor",
          message:
            "Mama Nomvula walked with extraordinary grace and kindness. May the peace of Christ envelop the Khumalo family during this sacred farewell.",
          date: "Yesterday",
        },
        {
          author: "Thabo & Lerato Molefe",
          relation: "Former Students",
          message:
            "Her lessons went far beyond books; she taught us compassion, perseverance, and pride in who we are. Rest peacefully, Gogo.",
          date: "2 days ago",
        },
      ],
    },
    {
      id: "2",
      name: "Dr. Arthur George Sterling",
      years: "1951 — 2026",
      dateOfPassing: "1 October 2026",
      serviceDate: "Friday, 10 October 2026 • 11:30 AM",
      serviceLocation: "St. George's Anglican Church & Waterfall Memorial Park",
      image: "/images/hero-chapel.jpg",
      tributeSnippet:
        "Esteemed surgeon, loving father, and devoted conservationist who spent four decades healing lives across Gauteng.",
      candles: 89,
      userLitCandle: false,
      condolences: [
        {
          author: "Prof. Kenneth Meyer",
          relation: "Colleague",
          message:
            "A surgeon of rare intellect and immense humility. Arthur's mentorship will never be forgotten.",
          date: "3 days ago",
        },
      ],
    },
    {
      id: "3",
      name: "Gogo Martha Zenzile Sithole",
      years: "1938 — 2026",
      dateOfPassing: "28 September 2026",
      serviceDate: "Interment Completed • Memorial Archive Active",
      serviceLocation: "Midrand Cemetery & Family Residence",
      image: "/images/fleet.jpg",
      tributeSnippet:
        "Centred in unconditional love, wisdom, and faith. A golden grandmother whose gentle spirit will illuminate our lineage forever.",
      candles: 215,
      userLitCandle: true,
      condolences: [
        {
          author: "Zodwa Sithole",
          relation: "Granddaughter",
          message:
            "Thank you for teaching me how to pray, how to love, and how to stand tall. Lala ngoxolo, gogo omuhle.",
          date: "1 week ago",
        },
      ],
    },
  ]);

  const handleLightCandle = (id: string) => {
    setTributes((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const isLit = !t.userLitCandle;
          return {
            ...t,
            candles: isLit ? t.candles + 1 : t.candles - 1,
            userLitCandle: isLit,
          };
        }
        return t;
      })
    );
  };

  const handleAddCondolence = (e: React.FormEvent, tributeId: string) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newMessage.trim()) return;

    setTributes((prev) =>
      prev.map((t) => {
        if (t.id === tributeId) {
          return {
            ...t,
            condolences: [
              {
                author: newAuthor,
                relation: newRelation || "Friend",
                message: newMessage,
                date: "Just now",
              },
              ...t.condolences,
            ],
          };
        }
        return t;
      })
    );

    setNewAuthor("");
    setNewRelation("");
    setNewMessage("");
  };

  const filteredTributes = tributes.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeTribute = tributes.find((t) => t.id === selectedTributeId) || tributes[0];

  return (
    <section id="tributes" style={{ padding: "7rem 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      {/* Background Sacred Atmosphere Shuffler with Scroll Fade */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none" }}>
        <SectionImageShuffler
          images={[
            "/images/pexels-candles-bokeh.jpg",
            "/images/pexels-memorial-flowers.jpg",
            "/images/pexels-candlelight-vigil.jpg",
            "/images/pexels-tribute-portrait.jpg",
          ]}
          alts={[
            "Sacred Memorial Candlelight Bokeh",
            "Memorial Floral Condolences",
            "Candlelight Vigil in Sanctum",
            "Serene Memorial Remembrance",
          ]}
          intervalMs={4800}
          overlayGradient="linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.98) 100%)"
          showIndicators={false}
          enableScrollFade={true}
        />
      </div>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "860px" }}>
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1rem" }}>
            Tributes, Obituaries & <span className="gold-gradient-text">Virtual Candles</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Celebrate lasting legacies. Light a warm virtual beeswax candle, view service itineraries,
            or share words of solace with grieving families.
          </p>
        </div>

        {/* Minimalist Search Bar */}
        <div style={{ maxWidth: "540px", marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#080808",
              border: "1px solid var(--border-gold-hairline)",
              padding: "0.75rem 1.25rem",
            }}
          >
            <Search size={16} color="var(--gold-primary)" style={{ marginRight: "0.75rem" }} />
            <input
              type="text"
              placeholder="Search by loved one's name or family..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "0.9rem",
              }}
            />
          </div>
        </div>

        {/* Spontaneous Grid: 5 cols notices, 7 cols active memorial */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Notices List (Span 5) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            className="tribute-list-col"
          >
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", fontWeight: 700 }}>
              Recent Notices
            </div>

            {filteredTributes.map((item) => {
              const isSelected = item.id === selectedTributeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedTributeId(item.id)}
                  style={{
                    padding: "1.5rem",
                    cursor: "pointer",
                    background: isSelected ? "#0f0f0f" : "#060606",
                    border: isSelected ? "1px solid var(--gold-primary)" : "1px solid var(--border-dark-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "55px",
                        height: "55px",
                        overflow: "hidden",
                        border: "1px solid var(--gold-primary)",
                        flexShrink: 0,
                      }}
                    >
                      <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "1rem", color: "#fff", marginBottom: "0.2rem" }}>
                        {item.name}
                      </h4>
                      <div style={{ fontSize: "0.78rem", color: "var(--gold-light)", fontFamily: "var(--font-serif)" }}>
                        {item.years}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        Passed {item.dateOfPassing}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Flame
                        size={18}
                        color={item.userLitCandle ? "#f59e0b" : "var(--text-muted)"}
                        className={item.userLitCandle ? "flame-animated" : ""}
                      />
                      <span style={{ fontSize: "0.75rem", color: "var(--gold-light)", fontWeight: 700 }}>
                        {item.candles}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Memorial View (Span 7) */}
          <div
            style={{
              gridColumn: "span 12",
              background: "#080808",
              border: "1px solid var(--border-gold-hairline)",
              padding: "3rem 2.5rem",
              boxShadow: "var(--shadow-3d)",
            }}
            className="tribute-detail-col gilded-bracket-box"
          >
            <div style={{ borderBottom: "1px solid var(--border-gold-hairline)", paddingBottom: "1.75rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-primary)", fontWeight: 700 }}>
                    In Sacred Memory
                  </div>
                  <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#ffffff", marginTop: "0.3rem" }}>
                    {activeTribute.name}
                  </h3>
                  <div style={{ fontSize: "1rem", color: "var(--gold-light)", fontFamily: "var(--font-serif)" }}>
                    {activeTribute.years}
                  </div>
                </div>

                {/* Light Virtual Candle Button */}
                <button
                  onClick={() => handleLightCandle(activeTribute.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1.4rem",
                    background: activeTribute.userLitCandle ? "var(--gold-primary)" : "#000000",
                    border: "1px solid var(--gold-primary)",
                    color: activeTribute.userLitCandle ? "#000000" : "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Flame
                    size={17}
                    color={activeTribute.userLitCandle ? "#000000" : "#f59e0b"}
                    className={activeTribute.userLitCandle ? "flame-animated" : ""}
                  />
                  <span>{activeTribute.userLitCandle ? "Candle Lit" : "Light Candle"}</span>
                  <span style={{ fontSize: "0.8rem", marginLeft: "0.3rem" }}>({activeTribute.candles})</span>
                </button>
              </div>

              {/* Service details */}
              <div
                style={{
                  marginTop: "1.5rem",
                  background: "#000000",
                  border: "1px solid var(--border-dark-subtle)",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                }}
              >
                <div style={{ color: "#ffffff" }}>
                  <strong style={{ color: "var(--gold-primary)" }}>Service Date:</strong> {activeTribute.serviceDate}
                </div>
                <div style={{ color: "var(--text-muted)" }}>
                  <strong style={{ color: "var(--gold-primary)" }}>Venue:</strong> {activeTribute.serviceLocation}
                </div>
              </div>

              <p style={{ marginTop: "1.5rem", fontSize: "1rem", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.8 }}>
                &ldquo;{activeTribute.tributeSnippet}&rdquo;
              </p>
            </div>

            {/* Condolences form & guestbook */}
            <div>
              <div style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-primary)", fontWeight: 700, marginBottom: "1rem" }}>
                Condolence Messages ({activeTribute.condolences.length})
              </div>

              <form onSubmit={(e) => handleAddCondolence(e, activeTribute.id)} style={{ marginBottom: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    style={{
                      padding: "0.75rem 1rem",
                      background: "#000000",
                      border: "1px solid var(--border-dark-subtle)",
                      color: "#fff",
                      fontSize: "0.88rem",
                      outline: "none",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Relationship (e.g. Niece)"
                    value={newRelation}
                    onChange={(e) => setNewRelation(e.target.value)}
                    style={{
                      padding: "0.75rem 1rem",
                      background: "#000000",
                      border: "1px solid var(--border-dark-subtle)",
                      color: "#fff",
                      fontSize: "0.88rem",
                      outline: "none",
                    }}
                  />
                </div>
                <textarea
                  rows={2}
                  required
                  placeholder="Share a comforting message or memory..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "#000000",
                    border: "1px solid var(--border-dark-subtle)",
                    color: "#fff",
                    fontSize: "0.88rem",
                    outline: "none",
                    resize: "vertical",
                    marginBottom: "0.75rem",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "0.6rem 1.4rem", fontSize: "0.78rem" }}
                >
                  <Send size={13} />
                  <span>Post Solace Message</span>
                </button>
              </form>

              {/* Messages list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", maxHeight: "260px", overflowY: "auto" }}>
                {activeTribute.condolences.map((c, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#000000",
                      border: "1px solid var(--border-dark-subtle)",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
                      <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.88rem" }}>
                        {c.author}{" "}
                        <span style={{ color: "var(--gold-primary)", fontWeight: 400, fontSize: "0.78rem" }}>
                          ({c.relation})
                        </span>
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{c.date}</span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {c.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .tribute-list-col {
            grid-column: span 5 !important;
          }
          .tribute-detail-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}

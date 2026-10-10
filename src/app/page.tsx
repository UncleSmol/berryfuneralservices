"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImmediateGuidance from "@/components/ImmediateGuidance";
import AboutFounder from "@/components/AboutFounder";
import ServicesSection from "@/components/ServicesSection";
import FuneralCoverPlans from "@/components/FuneralCoverPlans";
import TributeWall from "@/components/TributeWall";
import FleetFacilities from "@/components/FleetFacilities";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ArrangementModal from "@/components/ArrangementModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Burial Services");
  const [selectedEstimate, setSelectedEstimate] = useState<string | undefined>(undefined);

  const handleOpenModal = (serviceType?: string, estimate?: string) => {
    if (serviceType) setSelectedService(serviceType);
    if (estimate) setSelectedEstimate(estimate);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEstimate(undefined);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation Header */}
      <Header onOpenArrangementModal={handleOpenModal} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero
          onOpenArrangementModal={handleOpenModal}
          onScrollToSection={handleScrollTo}
        />

        {/* Immediate Guidance: What to do right now */}
        <ImmediateGuidance />

        {/* About & Founder Showcase */}
        <AboutFounder />

        {/* Official Services Section */}
        <ServicesSection onOpenArrangementModal={handleOpenModal} />

        {/* Official Funeral Policy Plans & Burial Society */}
        <FuneralCoverPlans onOpenArrangementModal={handleOpenModal} />

        {/* Tributes, Obituaries & Virtual Candle Memorial */}
        <TributeWall />

        {/* Fleet & Facilities Showcase */}
        <FleetFacilities />

        {/* Family Testimonials */}
        <Testimonials />

        {/* Midrand Headquarters & 24/7 Contacts */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Arrangement Modal Wizard */}
      <ArrangementModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
        initialEstimate={selectedEstimate}
      />
    </div>
  );
}

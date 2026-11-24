"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Award,
  Globe2,
  Leaf,
} from "lucide-react";
import { certificationsData } from "@/data/certifications";
import QuoteModal from "@/components/QuoteModal";
import CertificatePlaqueCard from "@/components/CertificatePlaqueCard";
import QualityTracePipeline from "@/components/QualityTracePipeline";

const renderTrustIcon = (iconName: string) => {
  const cls = "w-4 h-4 text-[#164666] shrink-0";
  switch (iconName) {
    case "Award":
      return <Award className={cls} strokeWidth={1.8} />;
    case "Globe2":
      return <Globe2 className={cls} strokeWidth={1.8} />;
    case "Leaf":
      return <Leaf className={cls} strokeWidth={1.8} />;
    case "ShieldCheck":
    default:
      return <ShieldCheck className={cls} strokeWidth={1.8} />;
  }
};

const renderEditorialIcon = (iconName: string) => {
  const cls = "w-4 h-4 text-[#164666]";
  switch (iconName) {
    case "Award":
      return <Award className={cls} />;
    case "Globe2":
      return <Globe2 className={cls} />;
    case "Leaf":
      return <Leaf className={cls} />;
    case "ShieldCheck":
    default:
      return <ShieldCheck className={cls} />;
  }
};

const defaultCmsData = {
  hero: {
    kicker: "Quality Accreditations • Ahmedabad, Gujarat",
    headlinePart1: "Trusted & ",
    headlineHighlight: "Certified",
    subheadline:
      "Our commitment to excellence is backed by prestigious national and international quality accreditations, ensuring that every cosmetic formulation meets rigorous safety, purity, and clinical dermal benchmarks.",
    primaryCtaText: "Request Compliance Dossiers",
    secondaryCtaText: "Contact Regulatory Plant (+91 97246 81096)",
    phone: "+91 97246 81096",
    trustHighlights: [
      { id: "1", title: "WHO-GMP &", subtitle: "ISO 9001:2015", icon: "ShieldCheck" },
      { id: "2", title: "Ministry of", subtitle: "AYUSH Licensed", icon: "Award" },
      { id: "3", title: "FDA & FDCA", subtitle: "Export Ready", icon: "Globe2" },
      { id: "4", title: "100% PETA", subtitle: "Animal Test-Free", icon: "Leaf" },
    ],
  },
  certificationsSection: {
    eyebrow: "Recognized Regulatory Accreditations",
    title: "Certified for Quality and",
    highlight: "Reliability",
    description:
      "Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality, purity, and safety benchmarks.",
    items: certificationsData,
  },
  standardsEditorial: {
    leftBlock: {
      title: "Good Manufacturing Practices (GMP)",
      text: "Our commitment to excellence is deeply woven into every aspect of our manufacturing process. We adhere strictly to Good Manufacturing Practices (GMP), ensuring that all products are consistently produced and controlled according to quality standards appropriate to their intended use.",
      icon: "ShieldCheck",
    },
    rightBlock: {
      title: "Quality Systems Accreditation",
      text: "This rigorous approach, combined with our ISO 9001:2015 certification, guarantees that our clients receive not just products, but a promise of unwavering quality, safety, and reliability. We continuously invest in advanced technology and staff training to uphold and surpass these high benchmarks.",
      icon: "Award",
    },
  },
  qualityPipeline: {
    eyebrow: "Uncompromising Standards",
    title: "Our Commitment to",
    highlight: "Quality",
    description:
      "At Mani Lifestyle, quality is not just a goal; it is the foundation of everything we do. From the meticulous sourcing of raw materials to the final packaging, each stage of production is subjected to stringent quality control checks.",
    image: "/images/quality.png",
    imageAlt: "Analytical cosmetic laboratory testing and sterile cleanroom validation",
    steps: [
      {
        step: "01",
        title: "Raw Material Sourcing & Quarantine",
        desc: "Every active compound, botanical extract, and packaging component undergoes analytical identity verification and certificate of analysis (COA) cross-checking before release to compounding.",
      },
      {
        step: "02",
        title: "In-Process Cleanroom Validation",
        desc: "Continuous monitoring of batch temperature, mixing shear, and viscosity profiling within WHO-GMP compliant, HEPA-filtered compounding suites.",
      },
      {
        step: "03",
        title: "Comprehensive Final Release Testing",
        desc: "Multi-parameter laboratory clearance including microbial assays, pH verification, and stability checks before sealing and issuing batch documentation.",
      },
    ],
  },
};

export default function CertificationsPage() {
  const [cms, setCms] = useState(defaultCmsData);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    fetch("/api/certifications")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.hero) {
          setCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            certificationsSection: {
              ...prev.certificationsSection,
              ...(data.certificationsSection || {}),
              items:
                data.certificationsSection?.items && data.certificationsSection.items.length > 0
                  ? data.certificationsSection.items
                  : prev.certificationsSection.items,
            },
            standardsEditorial: {
              ...prev.standardsEditorial,
              ...(data.standardsEditorial || {}),
              leftBlock: { ...prev.standardsEditorial.leftBlock, ...(data.standardsEditorial?.leftBlock || {}) },
              rightBlock: { ...prev.standardsEditorial.rightBlock, ...(data.standardsEditorial?.rightBlock || {}) },
            },
            qualityPipeline: {
              ...prev.qualityPipeline,
              ...(data.qualityPipeline || {}),
              steps:
                data.qualityPipeline?.steps && data.qualityPipeline.steps.length > 0
                  ? data.qualityPipeline.steps
                  : prev.qualityPipeline.steps,
            },
          }));
        }
      })
      .catch((err) => {
        console.warn("Using default certifications fallback:", err);
      });
  }, []);

  const whatsappPhone = (cms.hero?.phone || "919724681096").replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20learn%20more%20about%20your%20regulatory%20certifications.`;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white font-sans antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#f0f7fb] border-b border-slate-200 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Brand Micro-header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs mb-1">
              <span className="w-2 h-2 rounded-full bg-[#164666]" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#164666]">
                {cms.hero.kicker}
              </span>
            </div>

            {/* Authoritative Luxury Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.08]">
              {cms.hero.headlinePart1}
              <span className="font-cormorant font-semibold text-[#164666]">
                {cms.hero.headlineHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal pt-1">
              {cms.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {cms.hero.primaryCtaText}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {cms.hero.secondaryCtaText}
              </a>
            </div>

            {/* Trust Highlights Card Strip */}
            {cms.hero.trustHighlights && cms.hero.trustHighlights.length > 0 && (
              <div className="pt-4 mt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-[#d9ecf7] max-w-2xl shadow-xs">
                  {cms.hero.trustHighlights.map((th) => (
                    <div key={th.id || th.title} className="flex items-center gap-2.5 py-1 px-2.5">
                      {renderTrustIcon(th.icon)}
                      <div>
                        <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                          {th.title}
                        </div>
                        <div className="text-[10px] text-[#64748b] leading-tight">
                          {th.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. CERTIFICATIONS DISPLAY SECTION WITH PREMIUM STAGGERED SCROLL REVEALS */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50/80 border border-sky-200/80 mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#164666]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#164666]">
                {cms.certificationsSection.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.12]">
              {cms.certificationsSection.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {cms.certificationsSection.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              {cms.certificationsSection.description}
            </p>
          </div>

          {/* Certification Badges Showcase Grid with 3D Tilt & Specular Sheen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 max-w-7xl mx-auto mb-14 sm:mb-16">
            {cms.certificationsSection.items.map((cert, idx) => (
              <CertificatePlaqueCard
                key={cert.id || idx}
                id={cert.id}
                name={cert.name}
                authority={cert.authority}
                scope={cert.scope}
                importance={cert.importance}
                badgeCode={cert.badgeCode}
                image={cert.image}
                verified={cert.verified}
                index={idx}
                priority={idx < 2}
              />
            ))}
          </div>

          {/* Authentic Editorial Narrative Box */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm transition-all duration-700 hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#091e2f]">
                  {renderEditorialIcon(cms.standardsEditorial.leftBlock?.icon || "ShieldCheck")}
                  <span>{cms.standardsEditorial.leftBlock?.title}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {cms.standardsEditorial.leftBlock?.text}
                </p>
              </div>

              <div className="space-y-3 md:pl-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#091e2f]">
                  {renderEditorialIcon(cms.standardsEditorial.rightBlock?.icon || "Award")}
                  <span>{cms.standardsEditorial.rightBlock?.title}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {cms.standardsEditorial.rightBlock?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR COMMITMENT TO QUALITY WITH INTERACTIVE PROCESS TRACE & LAB PARALLAX */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <QualityTracePipeline
            eyebrow={cms.qualityPipeline.eyebrow}
            title={cms.qualityPipeline.title}
            highlight={cms.qualityPipeline.highlight}
            description={cms.qualityPipeline.description}
            image={cms.qualityPipeline.image}
            imageAlt={cms.qualityPipeline.imageAlt}
            steps={cms.qualityPipeline.steps}
          />
        </div>
      </section>

      {/* Quote RFQ Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

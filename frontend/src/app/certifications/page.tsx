"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Globe2,
  Leaf,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { certificationsData } from "@/data/certifications";
import QuoteModal from "@/components/QuoteModal";
import CertificatePlaqueCard from "@/components/CertificatePlaqueCard";
import QualityTracePipeline from "@/components/QualityTracePipeline";
import { API_BASE_URL } from "@/lib/config";

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
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/certifications`)
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

  const deckItems =
    cms.certificationsSection?.items && cms.certificationsSection.items.length > 0
      ? cms.certificationsSection.items
      : certificationsData;
  const totalDeck = deckItems.length;
  const safeDeckIdx = totalDeck > 0 ? activeDeckIdx % totalDeck : 0;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white font-sans antialiased">
      {/* 1. HERO SECTION: 12-Column Editorial + Interactive 3D Fanned Certificate Deck */}
      <section className="relative w-full py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#f0f7fb] via-[#f4f9fc] to-[#edf5fa] border-b border-slate-200 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[450px] bg-amber-100/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT COLUMN (Col 6): Editorial Authority & Compliance Actions */}
            <div className="lg:col-span-6 space-y-4">
              {/* Editorial Left-Rule Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[1.5px] bg-[#164666] shrink-0" />
                <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[#164666]">
                  {cms.hero.kicker}
                </span>
              </div>

              {/* Authoritative Luxury Editorial Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.06]">
                {cms.hero.headlinePart1}
                <span className="italic font-semibold text-[#164666]">
                  {cms.hero.headlineHighlight}
                </span>
              </h1>

              <p className="pl-3.5 border-l-2 border-[#164666]/30 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl font-normal">
                {cms.hero.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                >
                  <span>{cms.hero.primaryCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/90 hover:bg-white text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {cms.hero.secondaryCtaText}
                </a>
              </div>

              {/* 4-Tile Frosted Trust Bento Strip */}
              {cms.hero.trustHighlights && cms.hero.trustHighlights.length > 0 && (
                <div className="pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                    {cms.hero.trustHighlights.map((th) => (
                      <div
                        key={th.id || th.title}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-2.5 rounded-2xl border border-white/95 shadow-2xs"
                      >
                        {renderTrustIcon(th.icon)}
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-[#0f172a] leading-tight truncate">
                            {th.title}
                          </div>
                          <div className="text-[9.5px] text-slate-500 leading-tight truncate">
                            {th.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN (Col 6): Interactive 3D Fanned Certificate Deck */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[440px] h-[395px] sm:h-[415px] flex items-center justify-center">
                {/* Ambient Golden-Sky Halo Behind Fanned Deck */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-sky-200/45 via-amber-100/35 to-white/60 blur-2xl pointer-events-none" />

                {deckItems.map((cert, idx) => {
                  const offset = (idx - safeDeckIdx + totalDeck) % totalDeck;
                  const isFront = offset === 0;

                  // Fan cards symmetrically: front (0), right (+1), left (last), back (others)
                  let transformStyle = "translateX(0px) translateY(22px) rotate(2deg) scale(0.86)";
                  let zIndex = 10;
                  let opacity = 0.72;

                  if (offset === 0) {
                    transformStyle = "translateX(0px) translateY(0px) rotate(0deg) scale(1)";
                    zIndex = 30;
                    opacity = 1;
                  } else if (offset === 1) {
                    transformStyle = "translateX(46px) translateY(14px) rotate(7deg) scale(0.93)";
                    zIndex = 20;
                    opacity = 0.94;
                  } else if (offset === totalDeck - 1) {
                    transformStyle = "translateX(-46px) translateY(14px) rotate(-7deg) scale(0.93)";
                    zIndex = 20;
                    opacity = 0.94;
                  }

                  return (
                    <div
                      key={cert.id || idx}
                      onClick={() => setActiveDeckIdx(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setActiveDeckIdx(idx);
                      }}
                      className={`absolute w-[275px] sm:w-[310px] rounded-[28px] p-1.5 transition-all duration-500 ease-out cursor-pointer select-none ${
                        isFront
                          ? "bg-gradient-to-b from-white via-[#fcfbf8] to-[#f4f8fc] shadow-[0_24px_55px_-12px_rgba(15,53,84,0.22)] hover:-translate-y-1.5"
                          : "bg-white/90 backdrop-blur-md shadow-[0_14px_30px_-10px_rgba(15,53,84,0.14)] hover:opacity-100"
                      }`}
                      style={{
                        transform: transformStyle,
                        zIndex,
                        opacity,
                      }}
                    >
                      {/* Inner Embossed Certificate Border Frame */}
                      <div className="relative h-full w-full rounded-[22px] border border-amber-200/70 bg-gradient-to-b from-white/95 to-sky-50/40 p-4 sm:p-5 flex flex-col justify-between min-h-[340px] sm:min-h-[355px]">
                        {/* Top Dossier Header */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/70">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#164666]/80">
                            {cert.badgeCode}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[9px] font-semibold text-emerald-700">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Verified
                          </span>
                        </div>

                        {/* Center Official Seal Medallion */}
                        <div className="my-4 flex flex-col items-center text-center">
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-white to-sky-50/80 border-2 border-amber-200/80 shadow-[0_10px_25px_rgba(22,70,102,0.10),inset_0_2px_6px_rgba(255,255,255,0.9)] flex items-center justify-center p-3 mb-3.5">
                            <div className="relative w-full h-full">
                              <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                sizes="112px"
                                className="object-contain"
                                priority={idx < 3}
                              />
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-[1.4rem] font-cormorant font-bold text-[#091e2f] leading-tight">
                            {cert.name}
                          </h3>
                          <p className="text-[10.5px] font-semibold text-[#164666]/85 mt-1">
                            {cert.authority}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2 max-w-[230px]">
                            {cert.scope}
                          </p>
                        </div>

                        {/* Bottom Foil Seal Footer */}
                        <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[9.5px] font-medium text-slate-500">
                          <span>Mani Lifestyle &bull; Gujarat</span>
                          <span className="font-semibold text-[#164666]">
                            0{idx + 1} / 0{totalDeck}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Deck Navigation Controls */}
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveDeckIdx((prev) => (prev - 1 + totalDeck) % totalDeck)}
                  aria-label="Previous certificate"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#164666] text-[#164666] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5">
                  {deckItems.map((cert, idx) => (
                    <button
                      key={cert.id || idx}
                      type="button"
                      onClick={() => setActiveDeckIdx(idx)}
                      aria-label={`View ${cert.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === safeDeckIdx
                          ? "w-6 bg-[#164666]"
                          : "w-1.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveDeckIdx((prev) => (prev + 1) % totalDeck)}
                  aria-label="Next certificate"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#164666] text-[#164666] hover:text-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CERTIFICATIONS DISPLAY SECTION WITH PREMIUM STAGGERED SCROLL REVEALS */}
      <section className="relative py-18 sm:py-22 lg:py-26 bg-gradient-to-b from-[#e8f3fb] via-[#f2f7fc] to-[#e6f1f9] border-b border-slate-200/80 overflow-hidden">
        {/* Pro-Level Luminous Glowing Cloud Light Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-sky-200/60 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-white/90 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[650px] h-[500px] bg-cyan-200/50 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-24 -right-20 w-[700px] h-[500px] bg-blue-200/45 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Certification Badges Showcase Grid with 3D Tilt & Specular Sheen (1:1 Reference Target Design) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-4.5 max-w-[1360px] mx-auto mb-14 sm:mb-16">
            {cms.certificationsSection.items.map((cert: any, idx) => (
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
                themeKey={cert.themeKey}
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

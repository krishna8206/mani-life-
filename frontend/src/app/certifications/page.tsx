"use client";

import React, { useState } from "react";
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

export default function CertificationsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // 3 Quality Assurance Pillars
  const qualityPillars = [
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
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white font-sans antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#f0f7fb] border-b border-slate-200 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Brand Micro-header */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#1b628b]">
              Quality Accreditations • Ahmedabad, Gujarat
            </p>

            {/* Signature Title with Italic Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Trusted &{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Certified
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl font-normal pt-1">
              Our commitment to excellence is backed by prestigious national and international quality accreditations, ensuring that every cosmetic formulation meets rigorous safety, purity, and clinical dermal benchmarks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Request Compliance Dossiers
              </button>

              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20learn%20more%20about%20your%20regulatory%20certifications."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Regulatory Plant (+91 97246 81096)
              </a>
            </div>

            {/* 4 Trust Highlights Card Strip */}
            <div className="pt-4 mt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-[#d9ecf7] max-w-2xl shadow-xs">
                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      WHO-GMP &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      ISO 9001:2015
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <Award className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      Ministry of
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      AYUSH Licensed
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <Globe2 className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      FDA & FDCA
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      Export Ready
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <Leaf className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      100% PETA
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      Animal Test-Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Recognized Regulatory Accreditations
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Certified for Quality and{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Reliability
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality, purity, and safety benchmarks.
            </p>
          </div>

          {/* 5 Certification Badges Showcase Grid with 3D Tilt & Specular Sheen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 max-w-7xl mx-auto mb-14 sm:mb-16">
            {certificationsData.map((cert, idx) => (
              <CertificatePlaqueCard
                key={cert.id}
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
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-[#f0f7fb]/60 to-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm transition-all duration-700 hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164666]">
                  <ShieldCheck className="w-4 h-4 text-[#1b628b]" />
                  <span>Good Manufacturing Practices (GMP)</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our commitment to excellence is deeply woven into every aspect of our manufacturing process. We adhere strictly to Good Manufacturing Practices (GMP), ensuring that all products are consistently produced and controlled according to quality standards appropriate to their intended use.
                </p>
              </div>

              <div className="space-y-3 md:pl-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164666]">
                  <Award className="w-4 h-4 text-[#1b628b]" />
                  <span>Quality Systems Accreditation</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  This rigorous approach, combined with our ISO 9001:2015 certification, guarantees that our clients receive not just products, but a promise of unwavering quality, safety, and reliability. We continuously invest in advanced technology and staff training to uphold and surpass these high benchmarks.
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
          <QualityTracePipeline steps={qualityPillars} />
        </div>
      </section>

      {/* Quote RFQ Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

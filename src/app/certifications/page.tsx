"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  Award,
  Globe2,
  Microscope,
  ArrowRight,
} from "lucide-react";
import { certificationsData } from "@/data/certifications";
import QuoteModal from "@/components/QuoteModal";

export default function CertificationsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const testingProtocols = [
    {
      title: "Physicochemical Assay Suite",
      items: [
        "Active ingredient assay via HPLC & UV-Vis spectrophotometry",
        "Viscosity profiling using Brookfield digital viscometers",
        "pH measurement with multi-point automated temperature calibration",
        "Specific gravity and refractive index tracking per batch",
      ],
    },
    {
      title: "Microbiological Safety Limits",
      items: [
        "Total Aerobic Microbial Count (TAMC < 100 CFU/g)",
        "Total Combined Yeasts and Molds Count (TYMC < 10 CFU/g)",
        "Absence of specified pathogens: Pseudomonas, Staph, Candida, E. coli",
        "Bioburden monitoring of purified RO water lines every 24 hours",
      ],
    },
    {
      title: "Heavy Metal Screening",
      items: [
        "Lead (Pb) < 10 ppm (Strictly below US/EU safety limits)",
        "Arsenic (As) < 2 ppm",
        "Mercury (Hg) < 1 ppm",
        "Cadmium (Cd) < 0.5 ppm tested via Atomic Absorption Spectrometry",
      ],
    },
    {
      title: "Environmental Stability Chambers",
      items: [
        "Accelerated stability testing at 40°C ± 2°C / 75% RH ± 5% RH (90 days)",
        "Real-time long term stability at 25°C / 60% RH (36 months)",
        "Freeze-thaw thermal cycle testing (-5°C to 45°C)",
        "Photostability exposure testing under high-intensity UV lamps",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#0f172a]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f7fb] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3.5 sm:space-y-4">
          {/* Brand Micro-header */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Certified Cosmetics Manufacturer • Ahmedabad, India
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
            International Standards &{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Quality Accreditations.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Certifications Detailed Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
            Certified Facilities
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] mt-3">
            Global Accreditations & Compliance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-8 bg-white border border-[#e2e8f0] rounded-3xl flex flex-col justify-between space-y-6 shadow-xs hover:border-[#164666] hover:shadow-xl transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#164666] bg-[#f0f7fb] px-3 py-1 rounded-full border border-[#bae6fd]">
                    {cert.badgeCode}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#0f172a] group-hover:text-[#1b628b] transition-colors">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#736d62] mt-1">
                    {cert.authority}
                  </div>
                </div>

                <div className="text-xs text-[#524d45]">
                  <strong className="text-[#0f172a] block mb-0.5">Scope of Certification:</strong>
                  {cert.scope}
                </div>

                <p className="text-xs text-[#6e685f] leading-relaxed pt-2 border-t border-[#ece6d9]">
                  {cert.importance}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ece6d9] flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active Validated Audit
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytical Testing Suite */}
      <section className="py-20 bg-[#f7f4ec] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
              Analytical Laboratory
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mt-3">
              In-House Testing & Verification Protocols
            </h2>
            <p className="text-xs sm:text-sm text-[#666055] mt-2">
              Every production lot is subjected to physicochemical, microbiological, and stability validation before receiving quality release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#e2e8f0] rounded-3xl shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#f0f7fb] text-[#164666] border border-[#bae6fd] flex items-center justify-center font-bold text-xs font-serif">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-serif font-bold text-[#0f172a]">
                  {protocol.title}
                </h3>
                <ul className="space-y-2 text-xs text-[#5c554a] pt-2 border-t border-[#ece6d9]">
                  {protocol.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#164666] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Dossier Request */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#0f172a]">
          Need Audit Packages & Regulatory Compliance Packs?
        </h3>
        <p className="text-xs text-[#5c554a] max-w-lg mx-auto">
          We furnish complete audit dossiers, DMF files, allergen certificates, and stability test reports for retail registration in India and global export markets.
        </p>
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="px-6 py-3 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105"
        >
          Request Compliance Dossiers
        </button>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

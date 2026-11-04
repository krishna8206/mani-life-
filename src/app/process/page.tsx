"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  FlaskConical,
  Package,
  Layers,
  Award,
  Globe2,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ProcessPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const stages = [
    {
      num: "01",
      title: "Discovery & Formulation Brief",
      timeline: "Days 1 - 3",
      tagline: "Aligning on Actives, Benchmark Texture, and Target Consumer Claims",
      details: [
        "Consultation with our senior technical cosmetic chemists and regulatory leads.",
        "Selection of active ingredient concentrations (e.g. 10% Niacinamide, Retinol, Salicylic Acid, cold-pressed botanical oils).",
        "Defining target viscosity, sensory skin feel (matte, dewy, gel-cream, or rich oil), and fragrance preferences (natural essential oil blends or allergen-free fragrances).",
        "Execution of comprehensive Mutual Non-Disclosure Agreement (NDA).",
      ],
    },
    {
      num: "02",
      title: "R&D Bench Prototyping & Sampling",
      timeline: "Days 4 - 10",
      tagline: "Translating the Formulation Concept into Tangible Test Batches",
      details: [
        "Small-scale bench batch compounding in our pilot formulation laboratory.",
        "Preparation of 3 separate physical prototype samples (100ml / 50g each).",
        "Courier dispatch of pilot samples directly to your brand office for sensory evaluation.",
        "Feedback incorporation: Up to 3 iterative modifications for viscosity, absorption speed, or aroma profile at zero additional development cost.",
      ],
    },
    {
      num: "03",
      title: "Stability, Microbial & Compatibility Testing",
      timeline: "Days 11 - 18",
      tagline: "Guaranteeing 24 to 36 Month Commercial Shelf Life",
      details: [
        "Accelerated thermal stress testing in controlled environmental chambers at 40°C / 75% Relative Humidity.",
        "Freeze-thaw cycling (-5°C to 45°C) to simulate international transit stress without emulsion separation.",
        "Preservative Efficacy Testing (PET / Challenge testing) against common pathogenic bacteria, yeasts, and molds.",
        "Container-closure physical compatibility test to verify no chemical leaching or container wall collapse.",
      ],
    },
    {
      num: "04",
      title: "Packaging Sourcing & Regulatory Artwork Clearance",
      timeline: "Days 15 - 22",
      tagline: "Engineering Primary Containers and Legal Label Disclosures",
      details: [
        "Procurement of approved primary packaging: Airless pumps, amber glass droppers, aluminum barrier tubes, or PCR jars.",
        "Regulatory review of label artwork against US FDA, EU Cosmetic Regulation 1223/2009, and Indian CDSCO standards.",
        "Validation of international INCI ingredient deck, net weight disclosures, batch coding, and PAO (Period After Opening) symbols.",
      ],
    },
    {
      num: "05",
      title: "GMP Compounding & Automated Cleanroom Filling",
      timeline: "Days 20 - 28",
      tagline: "Automated Precision Compounding in Class 100,000 Suites",
      details: [
        "Water processing via double Reverse Osmosis + Electro-deionization (EDI) maintaining zero microbial conductivity.",
        "High-shear vacuum homogenization compounding in sanitary stainless steel (SS316L) jacketed reactors.",
        "Automated monoblock filling with nitrogen purging to preserve antioxidant stability.",
        "Hot-air ultrasonic tube sealing, laser lot number coding, and tamper-evident induction sealing.",
      ],
    },
    {
      num: "06",
      title: "Analytical Release & Global Warehouse Logistics",
      timeline: "Days 25 - 32",
      tagline: "Issuance of COA, Custom Dossiers, and Doorstep Dispatch",
      details: [
        "Final Quality Assurance testing: Heavy metals (Lead, Arsenic, Mercury), viscosity, pH, and microbiological clearance.",
        "Issuance of official Batch Certificate of Analysis (COA) and Material Safety Data Sheet (MSDS).",
        "Shrink-wrapped palletization with corner protectors for safe ocean container or air cargo transit.",
        "Full customs documentation for hassle-free clearance into US, EU, GCC, and Southeast Asian ports.",
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
            The Spec-to-Shelf™{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Manufacturing Lifecycle.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Process Stages List */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="p-8 bg-white border border-[#e2e8f0] rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs hover:border-[#164666] hover:shadow-lg transition-all"
            >
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-[#164666] font-serif">
                    {stage.num}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {stage.timeline}
                  </span>
                </div>
                <h2 className="text-xl font-bold font-serif text-[#0f172a]">{stage.title}</h2>
                <p className="text-xs text-[#1b628b] font-semibold">{stage.tagline}</p>
              </div>

              <div className="lg:col-span-8 space-y-3 border-t lg:border-t-0 lg:border-l border-[#ece6d9] pt-4 lg:pt-0 lg:pl-8">
                <div className="text-xs font-bold text-[#38332c] uppercase tracking-wider mb-2">
                  Technical Milestones & Verification:
                </div>
                <ul className="space-y-2.5 text-xs text-[#5c554a]">
                  {stage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#f0f7fb] via-[#f7f0df] to-[#f4ebda] border border-[#e2e8f0] rounded-3xl text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#0f172a]">
            Ready to Begin Phase 01 for Your Brand?
          </h3>
          <p className="text-xs text-[#5c554a] max-w-xl mx-auto">
            Contact our Ahmedabad technical team today to initiate your formulation brief. Initial lab bench prototypes are compounded and dispatched within 7 to 10 days.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 gold-button font-bold text-xs rounded-xl shadow-md transition-transform hover:scale-105"
            >
              Initiate Formulation Brief
            </button>
            <Link
              href="/quote-estimator"
              className="px-6 py-3 bg-white hover:bg-[#f8fafc] text-[#0f172a] font-semibold text-xs rounded-xl border border-[#e2e8f0] transition-colors"
            >
              Use MOQ Calculator
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

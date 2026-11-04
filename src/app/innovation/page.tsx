"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Droplet,
  Layers,
  ArrowRight,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function InnovationPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const cleanStandards = [
    { name: "Paraben-Free", desc: "No methyl, ethyl, propyl, or butylparabens" },
    { name: "Sulfate-Free", desc: "No aggressive SLS, SLES, or ALS foaming agents" },
    { name: "Phthalate-Free", desc: "Zero endocrine-disrupting plasticizers or synthetic fixatives" },
    { name: "Mineral Oil-Free", desc: "Zero pore-clogging petroleum derivatives or paraffin waxes" },
    { name: "Formaldehyde Donor-Free", desc: "No DMDM hydantoin or diazolidinyl urea preservatives" },
    { name: "Eco-Silicone Alternatives", desc: "Environmentally friendly, biodegradable plant hemisqualane emollients" },
  ];

  const activeShowcase = [
    {
      category: "Dermal Peptides & Cellular Firming",
      actives: ["Copper Tripeptide-1", "Palmitoyl Tripeptide-38", "Acetyl Hexapeptide-8 (Argireline)"],
      benefit: "Stimulates collagen synthesis and reinforces dermal-epidermal junction integrity.",
    },
    {
      category: "Barrier Defense & Ceramide Lipids",
      actives: ["Ceramides (EOP, NP, AP)", "Phytosphingosine", "Plant Squalane (Olive-derived)"],
      benefit: "Mimics human stratum corneum intercellular lipids to seal transepidermal water loss.",
    },
    {
      category: "Clinical Brightening & Antioxidants",
      actives: ["Ethyl Ascorbic Acid (15%)", "Alpha Arbutin (2%)", "Ferulic Acid + Vitamin E"],
      benefit: "Inhibits tyrosinase enzyme activity and neutralizes environmental free-radical cascades.",
    },
    {
      category: "Clarifying BHA/AHA Complex",
      actives: ["Encapsulated Salicylic Acid (2%)", "Glycolic Acid (10%)", "Zinc PCA"],
      benefit: "Penetrates sebum plugs to clarify pores without causing barrier irritation or moisture loss.",
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
            Clean Formulations Powered by{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Dermal Science.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Clean Beauty Standard Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
            The Clean Standard
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#0f172a] mt-3">
            What We Formulate Without
          </h2>
          <p className="text-xs text-[#6e685f] mt-1.5">
            Strict adherence to clean retail guidelines (Sephora Clean, Credo Clean, and EU 1223/2009).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cleanStandards.map((std) => (
            <div
              key={std.name}
              className="p-6 rounded-3xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#164666] transition-all space-y-2"
            >
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{std.name}</span>
              </div>
              <p className="text-xs text-[#6e685f] leading-relaxed pl-6">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Compounding Showcase */}
      <section className="py-20 bg-[#f7f4ec] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
              Active Ingredient Library
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mt-3">
              Engineered Dermal Actives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeShowcase.map((item) => (
              <div
                key={item.category}
                className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-xs space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#f0f7fb] text-[#164666] border border-[#bae6fd] flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-[#164666]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0f172a]">
                    {item.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.actives.map((act) => (
                    <span
                      key={act}
                      className="px-3 py-1 bg-[#f8fafc] text-[#38332c] text-xs font-semibold rounded-lg border border-[#bae6fd]"
                    >
                      {act}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#5c554a] leading-relaxed pt-2 border-t border-[#ece6d9]">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-3xl font-serif font-bold text-[#0f172a]">
          Have a Breakthrough Ingredient in Mind?
        </h3>
        <p className="text-sm text-[#5c554a] max-w-lg mx-auto">
          Our Ahmedabad cosmetic chemistry lab routinely formulates with custom botanical extracts, biotechnological peptides, and micro-encapsulated actives.
        </p>
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="px-8 py-3.5 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105"
        >
          Discuss Custom Chemistry With Our Lab
        </button>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

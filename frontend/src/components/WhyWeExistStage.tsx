"use client";

import React, { useState, useRef, useEffect } from "react";
import { Leaf, FlaskConical, Heart, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

interface CorePillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  stats: { label: string; value: string }[];
}

const pillars: CorePillar[] = [
  {
    id: "01",
    num: "01",
    title: "Clean & Safe",
    subtitle: "Dermatological Biocompatibility",
    tag: "Toxin-Free Standard",
    desc: "Zero harmful toxins, parabens, sulfates, or artificial sensitizers. Formulated strictly with biocompatible botanical pharmacology tested for high human epidermal tolerance.",
    icon: Leaf,
    stats: [
      { label: "Toxin Tolerance", value: "100% Free" },
      { label: "Skin Sensitizers", value: "0.0%" },
      { label: "Bio-Actives", value: "Class 1 Clean" },
    ],
  },
  {
    id: "02",
    num: "02",
    title: "Scientifically Formulated",
    subtitle: "Cellular Dermal Precision",
    tag: "pH Buffered Actives",
    desc: "Engineered with clinical dermal actives, stable pH 5.5 buffering, and sub-micron lipid delivery mechanisms ensuring multi-layer cellular efficacy without oxidation.",
    icon: FlaskConical,
    stats: [
      { label: "Target pH Range", value: "5.5 ± 0.2" },
      { label: "Active Stability", value: "36 Months" },
      { label: "Delivery Particle", value: "< 200 nm" },
    ],
  },
  {
    id: "03",
    num: "03",
    title: "Cruelty-Free",
    subtitle: "100% Ethical Beauty",
    tag: "Zero Animal Testing",
    desc: "100% ethical cosmetics manufacturing. We enforce absolute zero animal testing across all raw ingredient sourcing, bench trials, and scaled commercial compounding batches.",
    icon: Heart,
    stats: [
      { label: "Animal Testing", value: "0.0%" },
      { label: "Raw Purity Origin", value: "100% Verified" },
      { label: "Ethical Sourcing", value: "Strict Compliance" },
    ],
  },
  {
    id: "04",
    num: "04",
    title: "FDCA-Compliant",
    subtitle: "Certified Regulatory Rigor",
    tag: "Govt. Analytical COA",
    desc: "Strict adherence to Gujarat FDCA regulatory guidelines, complete microbial and thermal cycling stability assays, and individual batch Certificate of Analysis (COA) verification.",
    icon: CheckCircle2,
    stats: [
      { label: "Licensing Body", value: "FDCA Gujarat" },
      { label: "Cleanroom Standard", value: "ISO 22716" },
      { label: "Batch Assay", value: "Full COA" },
    ],
  },
];

export default function WhyWeExistStage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("01");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        transform: isVisible ? "translateY(0px) scale(1)" : "translateY(30px) scale(0.98)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms ease-out",
      }}
      className="relative max-w-6xl mx-auto select-none"
    >
      {/* Soft Ambient Radial Backlight */}
      <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-44 bg-gradient-to-r from-sky-200/30 via-teal-100/40 to-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- DESKTOP VIEW: ARCHITECTURAL SLIDING LOUVRE STAGE (Zero Card Boxes) --- */}
      <div className="hidden lg:flex w-full h-[470px] bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-[32px] overflow-hidden shadow-xl shadow-sky-950/5 transition-all">
        {pillars.map((pillar) => {
          const isActive = activeId === pillar.id;
          const IconComp = pillar.icon;

          return (
            <div
              key={pillar.id}
              onClick={() => setActiveId(pillar.id)}
              onMouseEnter={() => setActiveId(pillar.id)}
              className={`relative h-full transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between border-r last:border-r-0 border-slate-200/75 overflow-hidden ${
                isActive
                  ? "flex-[3.4] bg-gradient-to-b from-white via-sky-50/45 to-[#f8fafc] px-10 py-9 shadow-inner"
                  : "flex-[0.9] bg-white/40 hover:bg-sky-50/30 px-3 py-8 items-center"
              }`}
            >
              {isActive ? (
                /* --- ACTIVE EXPANDED LOUVRE CONTENT --- */
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-500">
                  {/* Top Header Row */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-serif text-[#164666] font-normal tracking-tight">
                          {pillar.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1b628b] animate-ping" />
                        <span className="text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#1b628b] bg-sky-100/70 border border-sky-200/80 px-2.5 py-0.5 rounded-full">
                          {pillar.tag}
                        </span>
                      </div>

                      {/* Icon Orb */}
                      <div className="w-12 h-12 rounded-2xl bg-[#164666] text-white flex items-center justify-center shadow-md shadow-[#164666]/20 shrink-0">
                        <IconComp className="w-6 h-6 text-sky-200" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Headline & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal tracking-tight leading-tight mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-serif italic text-[#1b628b] font-light mb-4">
                      {pillar.subtitle}
                    </p>

                    {/* Full Rich Description */}
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Technical Benchmarks Strip */}
                  <div className="pt-5 border-t border-slate-200/80">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2.5">
                      Verified Technical Parameters
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {pillar.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-2.5 rounded-xl bg-white/90 border border-slate-200/70 shadow-2xs"
                        >
                          <div className="text-[10px] text-slate-500 leading-tight">
                            {stat.label}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-tight pt-0.5">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* --- INACTIVE COLLAPSED VERTICAL SLAT --- */
                <div className="h-full flex flex-col justify-between items-center py-2 animate-in fade-in duration-300">
                  {/* Watermark Numeral */}
                  <span className="text-2xl font-serif text-[#164666]/30 font-light tracking-tight group-hover:text-[#164666]">
                    {pillar.num}
                  </span>

                  {/* Vertical Slat Title */}
                  <div className="flex items-center justify-center flex-1 my-4">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-700 whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                      {pillar.title}
                    </span>
                  </div>

                  {/* Bottom Icon Indicator */}
                  <div className="w-9 h-9 rounded-full bg-slate-100/90 text-slate-500 border border-slate-200 flex items-center justify-center transition-colors">
                    <IconComp className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- MOBILE & TABLET VIEW: TACTILE ACCORDION LOUVRES --- */}
      <div className="lg:hidden space-y-3">
        {pillars.map((pillar) => {
          const isActive = activeId === pillar.id;
          const IconComp = pillar.icon;

          return (
            <div
              key={pillar.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-white border-sky-300 shadow-md shadow-sky-950/5"
                  : "bg-white/70 border-slate-200/80 hover:bg-white"
              }`}
            >
              {/* Slat Header (Always clickable) */}
              <button
                type="button"
                onClick={() => setActiveId(isActive ? "" : pillar.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-lg font-serif font-bold text-[#164666]">
                    {pillar.num}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] leading-tight">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#1b628b] font-medium">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-[#164666] flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isActive ? "rotate-90 text-[#164666]" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Expanded Details */}
              {isActive && (
                <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-100 bg-sky-50/20">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {pillar.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-2 rounded-xl bg-white border border-slate-200/80 text-center"
                      >
                        <div className="text-[9.5px] text-slate-500 leading-tight">
                          {stat.label}
                        </div>
                        <div className="text-xs font-bold text-[#0f172a] leading-tight pt-0.5">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


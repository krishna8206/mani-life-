"use client";

import React, { useState, useRef, useEffect } from "react";
import { Lightbulb, Tags, Box, FileCheck2 } from "lucide-react";

interface CapabilityDroplet {
  num: string;
  stageLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  dropletRadius: string;
  dropletGlow: string;
  highlight: string;
}

const droplets: CapabilityDroplet[] = [
  {
    num: "01",
    stageLabel: "STAGE 01",
    title: "Custom Formulation",
    subtitle: "ODM • Bespoke R&D Science",
    tagline: "Active Formulation Science",
    desc: "Novel active research, texture viscosity optimization, scent profiling, and accelerated bench trials to create your unique proprietary formula.",
    icon: Lightbulb,
    dropletRadius: "58% 42% 62% 38% / 48% 62% 38% 52%",
    dropletGlow: "from-sky-300/40 via-teal-200/30 to-blue-300/20",
    highlight: "Novel Bio-Actives",
  },
  {
    num: "02",
    stageLabel: "STAGE 02",
    title: "Private Labeling",
    subtitle: "OEM • Made in India Production",
    tagline: "Market-Ready Bench Stock",
    desc: "Over 500+ clinically verified formulations ready for immediate bottling, custom packaging, and commercial launch with minimal lead time.",
    icon: Tags,
    dropletRadius: "42% 58% 38% 62% / 62% 48% 52% 38%",
    dropletGlow: "from-teal-300/40 via-sky-200/30 to-emerald-200/20",
    highlight: "500+ Proven Bases",
  },
  {
    num: "03",
    stageLabel: "STAGE 03",
    title: "Component Sourcing",
    subtitle: "Custom Indian Packaging & Jars",
    tagline: "Spec-to-Shelf Presentation",
    desc: "Amber droppers, airless vacuum pumps, aluminum tubes, recyclable jars, label design advisory, and leak-proof seal validation.",
    icon: Box,
    dropletRadius: "65% 35% 55% 45% / 45% 55% 45% 55%",
    dropletGlow: "from-amber-200/35 via-sky-200/30 to-teal-200/20",
    highlight: "Eco & Luxury Glass",
  },
  {
    num: "04",
    stageLabel: "STAGE 04",
    title: "Regulatory Support",
    subtitle: "Gujarat FDCA & COA Clearance",
    tagline: "Complete Compliance Dossier",
    desc: "End-to-end FDCA documentation, legal CDSCO & INCI artwork clearance, batch certificates of analysis (COA), and e-commerce launch support.",
    icon: FileCheck2,
    dropletRadius: "48% 52% 40% 60% / 56% 44% 60% 40%",
    dropletGlow: "from-sky-300/40 via-blue-200/30 to-indigo-200/20",
    highlight: "FDCA & COA Clearance",
  },
];

export default function BiomorphicDropletsCapabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative max-w-6xl mx-auto select-none pt-4 pb-4">
      <style>{`
        @keyframes liquidLevitate {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .liquid-float-0 { animation: liquidLevitate 5.8s ease-in-out infinite 0s; }
        .liquid-float-1 { animation: liquidLevitate 6.2s ease-in-out infinite 1.2s; }
        .liquid-float-2 { animation: liquidLevitate 5.6s ease-in-out infinite 2.4s; }
        .liquid-float-3 { animation: liquidLevitate 6.4s ease-in-out infinite 3.6s; }
      `}</style>

      {/* Soft Ambient Radial Backlight (Free-floating on canvas) */}
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-44 bg-gradient-to-r from-sky-200/30 via-teal-100/40 to-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- 4 FLOATING BIOMORPHIC LIQUID DROPLETS (100% Box-Free, Aligned Precision) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-7 items-stretch">
        {droplets.map((droplet, index) => {
          const isHovered = hoveredIndex === droplet.num;
          const IconComp = droplet.icon;

          return (
            <div
              key={droplet.num}
              onMouseEnter={() => setHoveredIndex(droplet.num)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: isVisible ? "translateY(0px)" : "translateY(32px)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, opacity 700ms ease-out ${index * 80}ms`,
              }}
              className="group flex flex-col items-center text-center justify-between h-full transition-all duration-300"
            >
              {/* --- 1. FLOATING ORGANIC LIQUID SERUM DROPLET WITH SINE-WAVE LEVITATION --- */}
              <div className={`relative mb-5 flex items-center justify-center liquid-float-${index}`}>
                {/* Expanding Liquid Ripple Ring on Hover */}
                <div
                  className={`absolute -inset-3.5 border border-sky-300/60 transition-all duration-700 pointer-events-none ${
                    isHovered ? "opacity-100 scale-120" : "opacity-0 scale-90"
                  }`}
                  style={{ borderRadius: droplet.dropletRadius }}
                />

                {/* Second Outer Soft Ripple */}
                <div
                  className={`absolute -inset-6 border border-teal-200/40 transition-all duration-1000 pointer-events-none ${
                    isHovered ? "opacity-100 scale-125" : "opacity-0 scale-85"
                  }`}
                  style={{ borderRadius: droplet.dropletRadius }}
                />

                {/* Primary Biomorphic Liquid Droplet Body */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-tr from-white/95 via-sky-50/85 to-white/95 border-2 border-white shadow-xl shadow-sky-950/8 flex items-center justify-center overflow-hidden backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-108 group-hover:shadow-2xl group-hover:shadow-sky-950/15"
                  style={{ borderRadius: droplet.dropletRadius }}
                >
                  {/* Prismatic Fluid Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${droplet.dropletGlow} transition-opacity duration-500 pointer-events-none ${
                      isHovered ? "opacity-90" : "opacity-50"
                    }`}
                  />

                  {/* Specular Diagonal Sheen Sweep across Liquid Surface on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-25deg] transition-all duration-1000 ease-out pointer-events-none ${
                      isHovered ? "translate-x-[200%] opacity-100" : "-translate-x-[150%] opacity-0"
                    }`}
                  />

                  {/* Droplet Center Node: Luxury Serif Numeral + Cosmetic Instrument Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-xs font-serif font-light text-[#164666]/80 tracking-widest mb-1">
                      {droplet.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/95 text-[#164666] flex items-center justify-center shadow-xs border border-sky-200/70 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-all duration-300">
                      <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                  </div>
                </div>
              </div>

              {/* --- 2. FLOATING EDITORIAL TYPOGRAPHY (Aligned Baseline, Zero Box Borders) --- */}
              <div className="flex-1 flex flex-col items-center text-center justify-between w-full">
                <div>
                  {/* Stage Tagline */}
                  <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#1b628b] block mb-1.5">
                    {droplet.tagline}
                  </span>

                  {/* Unified Height Title Block */}
                  <div className="min-h-[58px] flex flex-col justify-center items-center mb-2">
                    <h3 className="text-lg sm:text-[19px] font-serif font-normal text-[#0f172a] group-hover:text-[#164666] transition-colors tracking-tight leading-snug">
                      {droplet.title}
                    </h3>
                    <span className="text-xs font-serif italic text-[#1b628b] font-light mt-0.5">
                      {droplet.subtitle}
                    </span>
                  </div>

                  {/* Uniform Height Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed font-normal max-w-[260px] mx-auto min-h-[72px] flex items-center justify-center mb-3">
                    {droplet.desc}
                  </p>
                </div>

                {/* Operational Highlight Micro-Pill (Aligned horizontally along the bottom baseline) */}
                <div className="pt-1">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#164666] bg-sky-50/90 border border-sky-200/70 px-3 py-1 rounded-full shadow-2xs">
                    {droplet.highlight}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

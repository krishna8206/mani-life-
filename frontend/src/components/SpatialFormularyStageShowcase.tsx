"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  FlaskConical,
  Microscope,
  Layers,
} from "lucide-react";

interface SpatialFormularyStageShowcaseProps {
  onOpenQuote: (categoryName?: string) => void;
  data?: {
    eyebrow?: string;
    title?: string;
    desc?: string;
    trustNodes?: Array<{
      id: string;
      title: string;
      desc: string;
      icon?: string;
    }>;
    heroProducts?: Array<{
      id: string;
      name: string;
      category: string;
      tag: string;
      active?: boolean;
    }>;
  };
}

export default function SpatialFormularyStageShowcase({
  onOpenQuote,
  data,
}: SpatialFormularyStageShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredPod, setHoveredPod] = useState<number | null>(null);

  const effectiveProgress = scrollProgress;

  // 60fps hardware-accelerated scroll progress calculation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const containerHeight = containerRef.current.offsetHeight;
          const totalScrollDistance = containerHeight - windowHeight;
          if (totalScrollDistance <= 0) return;

          // Responsive scroll tracking: starts as section approaches view and maps smoothly across the pinned range
          const scrollOffset = windowHeight * 0.12 - rect.top;
          const activeRange = totalScrollDistance + windowHeight * 0.12;
          const rawProgress = scrollOffset / activeRange;
          const clamped = Math.min(Math.max(rawProgress, 0), 1);

          setScrollProgress(clamped);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================================================================
  // HARMONIOUS 3D UNCAP ANIMATION FOR ALL 3 HERO PRODUCTS
  // =========================================================================
  const uncapRatio = Math.min(Math.max(effectiveProgress / 0.72, 0), 1);
  const easeUncap = Math.sin((uncapRatio * Math.PI) / 2);

  // Vertical lift distance: 48px lift for dropper caps
  const capLiftDistance = easeUncap * 48;

  // Rotational thread unscrew (twists ~8° initially as screw threads disengage)
  const threadTwist = Math.sin(Math.min(uncapRatio / 0.42, 1) * Math.PI) * 8;

  // Natural subtle tilt (~2.4°) as the dropper clears the neck
  const capTilt = Math.sin(Math.min(Math.max((uncapRatio - 0.20) / 0.55, 0), 1) * Math.PI) * 2.4;
  const capRotation = threadTwist - capTilt;

  // Internal atmospheric micro-bubble (rises through serum as airtight seal opens)
  const bubbleRatio = Math.min(Math.max((uncapRatio - 0.08) / 0.65, 0), 1);
  const bubbleRise = bubbleRatio * 46;

  // Droplet dispense physics for serums (between 0.38 and 0.88)
  const dropletRatio = Math.min(Math.max((effectiveProgress - 0.38) / 0.50, 0), 1);
  const dropletFall = dropletRatio * 32;
  const dropletScale = Math.sin(dropletRatio * Math.PI);

  // =========================================================================
  // SHAMPOO 3D MECHANISM (Spring-Loaded Piston Elevation, Straight Upright Cap)
  // =========================================================================
  // 1. Upright stable alignment (0° rotation so the dispenser stays perfectly straight)
  const pumpUnlockRotate = 0;

  // 2. Spring-loaded piston elevation (lifts 44px upward in harmony with the serums)
  const shampooLift = easeUncap * 44;

  return (
    <div ref={containerRef} className="relative w-full h-[225vh] bg-[#f4f8fc]">
      {/* Sticky Full-Viewport Presentation Stage: Perfectly Centered */}
      <section className="sticky top-0 w-full h-screen flex flex-col justify-center py-2 sm:py-3 overflow-hidden border-b border-slate-200/80">

        {/* Soft Ambient Laboratory Daylight Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[850px] h-[550px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-1/4 w-[650px] h-[450px] bg-blue-100/35 rounded-full blur-[130px] pointer-events-none" />

        {/* Decorative Flowing 3D Glass Liquid Wave Ribbon (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
          viewBox="0 0 1440 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 520 C 250 510, 420 580, 680 510 C 950 440, 1180 560, 1580 410"
            stroke="url(#fluidGlassWave)"
            strokeWidth="42"
            strokeLinecap="round"
          />
          <path
            d="M -100 520 C 250 510, 420 580, 680 510 C 950 440, 1180 560, 1580 410"
            stroke="white"
            strokeWidth="2.5"
            strokeOpacity="0.85"
          />
          <defs>
            <linearGradient id="fluidGlassWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#e0f2fe" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">

          {/* Main Asymmetrical Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 xl:gap-9 items-center">

            {/* ========================================================= */}
            {/* LEFT COLUMN (Col 4): Editorial Dossier, KPI Strip & CTA   */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col justify-between py-1">

              {/* Frosted Pill Eyebrow, Editorial Headline & Accented Brief */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-7 h-[1.5px] bg-[#164666] shrink-0" />
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] font-semibold text-[#164666] leading-snug">
                    {data?.eyebrow || 'Core Specializations • Third-Party Manufacturing'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-cormorant font-semibold text-[#091e2f] leading-[1.08] tracking-tight">
                  {data?.title || (
                    <>
                      Our 3 Hero Product{' '}
                      <span className="italic font-semibold text-[#164666]">Categories.</span>
                    </>
                  )}
                </h2>

                <p className="mt-2.5 pl-3 border-l-2 border-[#164666]/30 text-xs sm:text-[12px] text-slate-600 leading-relaxed font-normal max-w-md">
                  {data?.desc ||
                    'Proprietary formulation, in-house cleanroom R&D compounding, and certified contract bottling — engineered for instant market performance and ready to bottle for your brand.'}
                </p>
              </div>

              {/* 3-Column Bento KPI Strip */}
              <div className="grid grid-cols-3 gap-2 my-3">
                <div className="bg-white/80 backdrop-blur-md border border-white/95 rounded-xl px-2.5 py-2 shadow-2xs">
                  <div className="text-sm sm:text-[15px] font-cormorant font-bold text-[#091e2f] leading-none">
                    600+
                  </div>
                  <div className="text-[9.5px] font-medium text-slate-500 mt-0.5 leading-tight">
                    Validated Recipes
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md border border-white/95 rounded-xl px-2.5 py-2 shadow-2xs">
                  <div className="text-sm sm:text-[15px] font-cormorant font-bold text-[#164666] leading-none">
                    WHO-GMP
                  </div>
                  <div className="text-[9.5px] font-medium text-slate-500 mt-0.5 leading-tight">
                    Pilot Cleanroom
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md border border-white/95 rounded-xl px-2.5 py-2 shadow-2xs">
                  <div className="text-sm sm:text-[15px] font-cormorant font-bold text-[#091e2f] leading-none">
                    500 Units
                  </div>
                  <div className="text-[9.5px] font-medium text-slate-500 mt-0.5 leading-tight">
                    Starting MOQ
                  </div>
                </div>
              </div>

              {/* Interactive Glassmorphic Capability Cards */}
              <div className="space-y-2 mb-3.5">
                {(data?.trustNodes?.length
                  ? data.trustNodes
                  : [
                    { id: '1', title: 'Formulation Expertise', desc: 'Custom active compounding • 600+ validated recipes', icon: 'FlaskConical' },
                    { id: '2', title: 'In-House R&D Cleanroom', desc: 'WHO-GMP pilot lab • Precision stability testing', icon: 'Microscope' },
                    { id: '3', title: 'Third-Party Manufacturing', desc: 'End-to-end Indian contract bottling • Starting at 500 units MOQ', icon: 'Layers' },
                  ]
                ).map((node, nIdx) => (
                  <div
                    key={node.id || nIdx}
                    onClick={() => onOpenQuote(node.title)}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white/75 hover:bg-white/95 backdrop-blur-md border border-white/90 hover:border-sky-200/80 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-sky-50/90 border border-sky-100/80 flex items-center justify-center text-[#164666] group-hover:bg-[#164666] group-hover:text-white transition-colors duration-300 shrink-0">
                        {nIdx === 0 && <FlaskConical className="w-3.5 h-3.5" />}
                        {nIdx === 1 && <Microscope className="w-3.5 h-3.5" />}
                        {nIdx >= 2 && <Layers className="w-3.5 h-3.5" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold tracking-wider text-sky-600/80">
                            0{nIdx + 1}
                          </span>
                          <div className="text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-tight truncate">
                            {node.title}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 font-normal truncate mt-0.5">
                          {node.desc?.replace(/\bTurnkey\b/gi, "End-to-end Indian")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Primary CTA Button */}
              <div className="pt-0.5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenQuote("General Hero Formulations")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0f3554] hover:bg-[#164666] text-white text-xs sm:text-[12px] font-semibold shadow-md shadow-[#0f3554]/25 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                >
                  <span>Discuss Your Formulation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT STAGE (Col 8): Clean Organic Pods (Full Uncut Bases, Zero Halos)    */}
            {/* ========================================================================= */}
            <div className="lg:col-span-8 flex flex-col justify-center">

              {/* The 3 Organic Pods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4.5 items-stretch w-full">

                {/* ----------------------------------------------------------------- */}
                {/* POD 01: FACE SERUMS (Full Rounded Base, Thread-Unscrew Lift)      */}
                {/* ----------------------------------------------------------------- */}
                <div
                  onMouseEnter={() => setHoveredPod(1)}
                  onMouseLeave={() => setHoveredPod(null)}
                  onClick={() => onOpenQuote("Face Serums")}
                  className="group relative cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 select-none"
                  style={{
                    borderRadius: "44px 32px 40px 48px / 38px 44px 34px 44px",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 248, 255, 0.90) 60%, rgba(225, 242, 254, 0.75) 100%)",
                    boxShadow:
                      hoveredPod === 1
                        ? "0 25px 50px -10px rgba(197, 155, 39, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.95)"
                        : "0 16px 40px -10px rgba(27, 98, 139, 0.10), inset 0 2px 4px rgba(255, 255, 255, 0.95)",
                    border: "1.5px solid rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <div
                    className="absolute -inset-2 rounded-[44px] blur-2xl pointer-events-none transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, transparent 70%)",
                      opacity: hoveredPod === 1 ? 0.9 : 0.15 + easeUncap * 0.35,
                    }}
                  />

                  {/* Top Text: Number & Title */}
                  <div className="relative z-10 p-3.5 sm:p-4 pb-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-mono text-xs font-bold text-slate-500">01</span>
                      <span className="w-3 h-[1px] bg-slate-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight mb-1">
                      Face Serums
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal min-h-[28px]">
                      Precision skincare formulations for effective, results-driven care.
                    </p>
                  </div>

                  {/* Floating Spec Pill Badge */}
                  <div className="relative z-10 px-3.5 sm:px-4 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50/90 border border-amber-200/80 shadow-xs backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                      <span className="text-[9.5px] font-semibold text-amber-900 tracking-tight">
                        20% Active Vit C &bull; Liposomal Base
                      </span>
                    </div>
                  </div>

                  {/* Middle Stage: Complete Bottle with Full Rounded Glass Base (Zero Cutoff) */}
                  <div className="relative z-10 w-full h-64 sm:h-68 flex items-end justify-center px-3 pb-3 overflow-visible">
                    <div className="relative w-40 h-64 flex items-end justify-center">

                      {/* 1. Unbranded Crystal Glass Body with Complete Rounded Base (z-20) */}
                      <div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20"
                        style={{ width: "82px", height: "150px" }}
                      >
                        <Image
                          src="/images/v5-face-serum-body.png"
                          alt="Face Serum Crystal Glass Bottle"
                          fill
                          sizes="82px"
                          className="object-contain drop-shadow-[0_14px_22px_rgba(15,23,42,0.16)]"
                          priority
                        />

                        {/* Internal Atmospheric Pressure Bubble */}
                        {bubbleRatio > 0.05 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full pointer-events-none transition-all ease-out z-22"
                            style={{
                              bottom: `${22 + bubbleRise}px`,
                              background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(251,191,36,0.5))",
                              boxShadow: "0 0 3px rgba(255,255,255,0.8)",
                              opacity: bubbleRatio < 0.9 ? 0.85 : (1 - bubbleRatio) * 8.5,
                            }}
                          />
                        )}
                      </div>

                      {/* 2. Glass Pipette Stem (z-10, Submerged When Closed, Emerges on Scroll) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-[6.5px] rounded-full pointer-events-none transition-transform ease-out will-change-transform z-10"
                        style={{
                          bottom: "86px",
                          height: "66px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center top",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.45) 30%, rgba(217,119,6,0.35) 65%, rgba(255,255,255,0.92) 100%)",
                          boxShadow:
                            "0 2px 5px rgba(217,119,6,0.2), inset 0 0 2px rgba(255,255,255,0.9)",
                          border: "0.8px solid rgba(255,255,255,0.9)",
                        }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-amber-400/85 to-transparent rounded-b-full" />
                      </div>

                      {/* 3. Authentic Dropper Cap Assembly (z-30; Rotates & Lifts) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 transition-transform ease-out will-change-transform z-30 pointer-events-none"
                        style={{
                          bottom: "142px",
                          width: "66px",
                          height: "84px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/hero-face-serum-cap.png"
                            alt="Face Serum Dropper Cap"
                            fill
                            sizes="66px"
                            className="object-contain drop-shadow-[0_10px_16px_rgba(15,23,42,0.2)]"
                            priority
                          />
                        </div>

                        {/* Active Golden Droplet */}
                        {dropletRatio > 0.12 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none transition-all ease-out z-25"
                            style={{
                              top: `${139 + dropletFall}px`,
                              background:
                                "radial-gradient(circle at 35% 35%, #fef08a 0%, #f59e0b 60%, #b45309 100%)",
                              boxShadow:
                                "0 2px 6px rgba(217,119,6,0.5), inset 0 1px 2px rgba(255,255,255,0.9)",
                              transform: `scale(${Math.max(dropletScale, 0.45)})`,
                              opacity: dropletRatio < 0.92 ? 1 : 1 - (dropletRatio - 0.92) * 12,
                            }}
                          />
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-end">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${hoveredPod === 1
                        ? "bg-[#0f3554] text-white scale-110 shadow-md"
                        : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                        }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* POD 02: HAIR SERUMS (100% Transparent Amber Glass, NO Stickers)   */}
                {/* ----------------------------------------------------------------- */}
                <div
                  onMouseEnter={() => setHoveredPod(2)}
                  onMouseLeave={() => setHoveredPod(null)}
                  onClick={() => onOpenQuote("Hair Serums")}
                  className="group relative cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 select-none"
                  style={{
                    borderRadius: "38px 44px 34px 44px / 44px 32px 40px 48px",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(254, 252, 232, 0.90) 60%, rgba(254, 243, 199, 0.75) 100%)",
                    boxShadow:
                      hoveredPod === 2
                        ? "0 25px 50px -10px rgba(217, 119, 6, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.95)"
                        : "0 16px 40px -10px rgba(217, 119, 6, 0.10), inset 0 2px 4px rgba(255, 255, 255, 0.95)",
                    border: "1.5px solid rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <div
                    className="absolute -inset-2 rounded-[44px] blur-2xl pointer-events-none transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, transparent 70%)",
                      opacity: hoveredPod === 2 ? 0.9 : 0.15 + easeUncap * 0.35,
                    }}
                  />

                  {/* Top Text */}
                  <div className="relative z-10 p-3.5 sm:p-4 pb-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-mono text-xs font-bold text-slate-500">02</span>
                      <span className="w-3 h-[1px] bg-slate-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight mb-1">
                      Hair Serums
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal min-h-[28px]">
                      Advanced follicular nourishment for stronger, healthier, and shinier hair.
                    </p>
                  </div>

                  {/* Floating Spec Pill Badge */}
                  <div className="relative z-10 px-3.5 sm:px-4 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/80 shadow-xs backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                      <span className="text-[9.5px] font-semibold text-emerald-900 tracking-tight">
                        Pure Rosemary &bull; 3% Redensyl Complex
                      </span>
                    </div>
                  </div>

                  {/* Middle Stage: Complete Amber Bottle with Full Glass Base */}
                  <div className="relative z-10 w-full h-64 sm:h-68 flex items-end justify-center px-3 pb-3 overflow-visible">
                    <div className="relative w-40 h-64 flex items-end justify-center">

                      {/* 1. Unbranded Amber Glass Body with Complete Rounded Base (z-20, NO Sticker) */}
                      <div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20"
                        style={{ width: "80px", height: "152px" }}
                      >
                        <Image
                          src="/images/v5-hair-serum-body.png"
                          alt="Hair Serum Amber Glass Bottle"
                          fill
                          sizes="80px"
                          className="object-contain drop-shadow-[0_14px_22px_rgba(15,23,42,0.16)]"
                          priority
                        />

                        {/* Internal Atmospheric Pressure Bubble */}
                        {bubbleRatio > 0.05 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full pointer-events-none transition-all ease-out z-22"
                            style={{
                              bottom: `${20 + bubbleRise}px`,
                              background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(217,119,6,0.5))",
                              boxShadow: "0 0 3px rgba(255,255,255,0.8)",
                              opacity: bubbleRatio < 0.9 ? 0.85 : (1 - bubbleRatio) * 8.5,
                            }}
                          />
                        )}
                      </div>

                      {/* 2. Glass Pipette Stem (z-10, Submerged When Closed, Emerges on Scroll) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-[6.5px] rounded-full pointer-events-none transition-transform ease-out will-change-transform z-10"
                        style={{
                          bottom: "86px",
                          height: "66px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center top",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.45) 30%, rgba(217,119,6,0.35) 65%, rgba(255,255,255,0.92) 100%)",
                          boxShadow:
                            "0 2px 5px rgba(217,119,6,0.2), inset 0 0 2px rgba(255,255,255,0.9)",
                          border: "0.8px solid rgba(255,255,255,0.9)",
                        }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-amber-500/85 to-transparent rounded-b-full" />
                      </div>

                      {/* 3. Dropper Cap Assembly (z-30; Rotates & Lifts) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 transition-transform ease-out will-change-transform z-30 pointer-events-none"
                        style={{
                          bottom: "144px",
                          width: "76px",
                          height: "82px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/hero-hair-serum-cap.png"
                            alt="Hair Serum Dropper Cap"
                            fill
                            sizes="76px"
                            className="object-contain drop-shadow-[0_10px_16px_rgba(15,23,42,0.2)]"
                            priority
                          />
                        </div>

                        {/* Active Scalp Elixir Droplet */}
                        {dropletRatio > 0.12 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none transition-all ease-out z-25"
                            style={{
                              top: `${140 + dropletFall * 0.9}px`,
                              background:
                                "radial-gradient(circle at 35% 35%, #fef3c7 0%, #d97706 65%, #92400e 100%)",
                              boxShadow:
                                "0 2px 5px rgba(217,119,6,0.4), inset 0 1px 2px rgba(255,255,255,0.85)",
                              transform: `scale(${Math.max(dropletScale, 0.4)})`,
                              opacity: dropletRatio < 0.92 ? 1 : 1 - (dropletRatio - 0.92) * 12,
                            }}
                          />
                        )}
                      </div>

                    </div>
                  </div>

                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-end">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${hoveredPod === 2
                        ? "bg-[#059669] text-white scale-110 shadow-md"
                        : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                        }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* POD 03: SHAMPOOS (Full Studio Bottle, Twist-Unlock & Piston Rise)  */}
                {/* ----------------------------------------------------------------- */}
                <div
                  onMouseEnter={() => setHoveredPod(3)}
                  onMouseLeave={() => setHoveredPod(null)}
                  onClick={() => onOpenQuote("Shampoos")}
                  className="group relative cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 select-none"
                  style={{
                    borderRadius: "40px 36px 44px 34px / 34px 44px 36px 44px",
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 249, 255, 0.90) 60%, rgba(224, 242, 254, 0.75) 100%)",
                    boxShadow:
                      hoveredPod === 3
                        ? "0 25px 50px -10px rgba(27, 98, 139, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.95)"
                        : "0 16px 40px -10px rgba(27, 98, 139, 0.10), inset 0 2px 4px rgba(255, 255, 255, 0.95)",
                    border: "1.5px solid rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <div
                    className="absolute -inset-2 rounded-[44px] blur-2xl pointer-events-none transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(27, 98, 139, 0.22) 0%, transparent 70%)",
                      opacity: hoveredPod === 3 ? 0.9 : 0.15 + easeUncap * 0.35,
                    }}
                  />

                  {/* Top Text */}
                  <div className="relative z-10 p-3.5 sm:p-4 pb-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-mono text-xs font-bold text-slate-500">03</span>
                      <span className="w-3 h-[1px] bg-slate-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight mb-1">
                      Shampoos
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal min-h-[28px]">
                      Cleansing science with custom formulations for diverse hair needs.
                    </p>
                  </div>

                  {/* Floating Spec Pill Badge */}
                  <div className="relative z-10 px-3.5 sm:px-4 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50/90 border border-sky-200/80 shadow-xs backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5 text-sky-600" />
                      <span className="text-[9.5px] font-semibold text-sky-900 tracking-tight">
                        100% Sulfate-Free Foam &bull; pH 5.5 Balanced
                      </span>
                    </div>
                  </div>

                  {/* Middle Stage: Complete Cyan Bottle (Zero Halos, Zero White Dots, Spring-Loaded Piston Rise) */}
                  <div className="relative z-10 w-full h-64 sm:h-68 flex items-end justify-center px-3 pb-3 overflow-visible">
                    <div className="relative w-40 h-64 flex items-end justify-center">

                      {/* 1. Full Uncut Studio Cyan Glass Body (z-20, Zero Background Box, Complete Base) */}
                      <div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20"
                        style={{ width: "74px", height: "165px" }}
                      >
                        <Image
                          src="/images/v5-shampoo-body.png"
                          alt="Shampoo Cylinder Glass Bottle"
                          fill
                          sizes="74px"
                          className="object-contain drop-shadow-[0_14px_22px_rgba(15,23,42,0.16)]"
                          priority
                        />

                        {/* Rich Micro-Foam Lather Pearls at Bottle Base (Natural, NO Fake Star Stickers) */}
                        <div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 pointer-events-none z-22"
                          style={{
                            opacity: 0.35 + easeUncap * 0.55,
                          }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-white/85 border border-cyan-100/80 blur-[0.3px]" />
                          <div className="w-3.5 h-3.5 rounded-full bg-white/95 border border-cyan-100/90 shadow-xs" />
                          <div className="w-2 h-2 rounded-full bg-white/75 border border-cyan-100/70" />
                        </div>
                      </div>

                      {/* 2. Polished Chrome Stainless Steel Hydraulic Piston Shaft (z-10, Rises with Pump) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-[5px] bg-gradient-to-r from-slate-300 via-white to-slate-400 rounded-xs shadow-xs pointer-events-none z-10 will-change-transform"
                        style={{
                          bottom: "135px",
                          height: "44px",
                          transform: `translateY(-${shampooLift}px)`,
                        }}
                      />

                      {/* 3. Matte Black Pump Dispenser Head (z-30; 3D Twist-Unlock + Upward Elevation) */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 transition-transform ease-out will-change-transform z-30 pointer-events-none"
                        style={{
                          bottom: "156px",
                          width: "78px",
                          height: "52px",
                          transform: `translateY(-${shampooLift}px) rotate(${pumpUnlockRotate}deg)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/v5-shampoo-pump.png"
                            alt="Shampoo Pump Head"
                            fill
                            sizes="78px"
                            className="object-contain drop-shadow-[0_8px_14px_rgba(15,23,42,0.18)]"
                            priority
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-end">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${hoveredPod === 3
                        ? "bg-[#1b628b] text-white scale-110 shadow-md"
                        : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                        }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

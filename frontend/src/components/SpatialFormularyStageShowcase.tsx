"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Send,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  Microscope,
  Layers,
  Play,
  Pause,
  RotateCcw,
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
  const [manualProgress, setManualProgress] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredPod, setHoveredPod] = useState<number | null>(null);

  const effectiveProgress = manualProgress !== null ? manualProgress : scrollProgress;

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

          // If user scrolls manually, return to scroll control
          if (manualProgress !== null && !isPlaying) {
            setManualProgress(null);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualProgress, isPlaying]);

  // Auto-play demo mode loop
  useEffect(() => {
    if (!isPlaying) return;

    let animFrame: number;
    let startTime: number | null = null;
    const duration = 4000; // 4s smooth loop

    const loop = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setManualProgress(progress);
      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying]);

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
  // SHAMPOO 3D MECHANISM (Concept 1: Twist-Unlock & Spring-Loaded Piston Rise)
  // =========================================================================
  // 1. Initial 3D twist from locked (-22°) to active salon dispensing position (0°)
  const pumpUnlockRotate = (1 - Math.min(uncapRatio / 0.26, 1)) * -22;

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
            {/* LEFT COLUMN (Col 4): Headline, Trust Stepper & Primary CTA */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col justify-between py-1">
              
              {/* Eyebrow & Headline */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-[1.5px] bg-[#164666]" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#164666]">
                    {data?.eyebrow || 'Core Specializations • Third-Party Manufacturing'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-cormorant font-semibold text-[#091e2f] leading-[1.1] tracking-tight">
                  {data?.title || (
                    <>
                      Our 3 Hero Product{' '}
                      <span className="font-cormorant font-semibold text-[#164666]">Categories.</span>
                    </>
                  )}
                </h2>

                <p className="mt-2 text-xs sm:text-[12px] text-slate-600 leading-relaxed font-normal max-w-md">
                  {data?.desc ||
                    'Proprietary formulation, in-house cleanroom R&D compounding, and certified contract bottling — engineered for instant market performance and ready to bottle for your brand.'}
                </p>
              </div>

              {/* Minimal 3-Step Laboratory Trust Nodes */}
              <div className="relative my-3.5 sm:my-4 pl-1">
                <div className="absolute left-4.5 top-3.5 bottom-4 w-px border-l-2 border-dashed border-sky-300/70" />

                <div className="space-y-2.5 relative z-10">
                  {(data?.trustNodes?.length
                    ? data.trustNodes
                    : [
                        { id: '1', title: 'Formulation Expertise', desc: 'Custom active compounding • 600+ validated recipes', icon: 'FlaskConical' },
                        { id: '2', title: 'In-House R&D Cleanroom', desc: 'WHO-GMP pilot lab • Precision stability testing', icon: 'Microscope' },
                        { id: '3', title: 'Third-Party Manufacturing', desc: 'Turnkey contract bottling • Starting at 500 units MOQ', icon: 'Layers' },
                      ]
                  ).map((node, nIdx) => (
                    <div
                      key={node.id || nIdx}
                      onClick={() => onOpenQuote(node.title)}
                      className="group flex items-center gap-3 cursor-pointer select-none"
                    >
                      <div className="w-8.5 h-8.5 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-xs flex items-center justify-center text-[#164666] group-hover:scale-108 group-hover:shadow-md transition-all duration-300 shrink-0">
                        {nIdx === 0 && <FlaskConical className="w-3.5 h-3.5 text-[#164666]" />}
                        {nIdx === 1 && <Microscope className="w-3.5 h-3.5 text-[#164666]" />}
                        {nIdx >= 2 && <Layers className="w-3.5 h-3.5 text-[#164666]" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-[12.5px] font-semibold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-tight">
                          {node.title}
                        </div>
                        <div className="text-[10px] text-slate-500 font-normal">
                          {node.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                          width: "74px",
                          height: "60px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/v5-face-serum-cap.png"
                            alt="Face Serum Dropper Cap"
                            fill
                            sizes="74px"
                            className="object-contain drop-shadow-[0_10px_16px_rgba(15,23,42,0.2)]"
                            priority
                          />
                        </div>

                        {/* Active Golden Droplet */}
                        {dropletRatio > 0.12 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none transition-all ease-out z-25"
                            style={{
                              top: `${115 + dropletFall}px`,
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
                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-between">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${
                        hoveredPod === 1
                          ? "bg-[#0f3554] text-white scale-110 shadow-md"
                          : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 group-hover:text-[#164666] transition-colors">
                      View Formulation &rarr;
                    </span>
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
                          width: "72px",
                          height: "58px",
                          transform: `translateY(-${capLiftDistance}px) rotate(${capRotation}deg)`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/v5-hair-serum-cap.png"
                            alt="Hair Serum Dropper Cap"
                            fill
                            sizes="72px"
                            className="object-contain drop-shadow-[0_10px_16px_rgba(15,23,42,0.2)]"
                            priority
                          />
                        </div>

                        {/* Active Scalp Elixir Droplet */}
                        {dropletRatio > 0.12 && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full pointer-events-none transition-all ease-out z-25"
                            style={{
                              top: `${116 + dropletFall * 0.9}px`,
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

                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-between">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${
                        hoveredPod === 2
                          ? "bg-[#059669] text-white scale-110 shadow-md"
                          : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 group-hover:text-[#059669] transition-colors">
                      View Formulation &rarr;
                    </span>
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

                  <div className="relative z-10 p-3.5 sm:p-4 pt-0 flex items-center justify-between">
                    <div
                      className={`w-7.5 h-7.5 rounded-full border border-white/90 flex items-center justify-center transition-all duration-300 shadow-xs ${
                        hoveredPod === 3
                          ? "bg-[#1b628b] text-white scale-110 shadow-md"
                          : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 group-hover:text-[#1b628b] transition-colors">
                      View Formulation &rarr;
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Minimalist 1-Line Third-Party Manufacturing Luxury Glass Trust Seal */}
          <div className="mt-3.5 sm:mt-4 max-w-5xl mx-auto w-full bg-white/90 backdrop-blur-xl rounded-2xl p-2 sm:p-2.5 border border-white shadow-[0_10px_30px_rgba(22,70,102,0.06),_inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7.5 h-7.5 rounded-xl bg-sky-50 border border-sky-100 text-[#164666] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#164666]" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a]">
                  Third-Party Formulation &amp; Compounding &bull; Ahmedabad, Gujarat
                </div>
                <div className="text-[9.5px] text-slate-500">
                  WHO-GMP &amp; ISO 22716 Certified &bull; Low 500 Units MOQ &bull; Bench Sample Dispatch
                </div>
              </div>
            </div>

            {/* Interactive Storytelling Controls Bar */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (isPlaying) {
                    setIsPlaying(false);
                  } else {
                    setManualProgress(0);
                    setIsPlaying(true);
                  }
                }}
                className={`px-2.5 py-1.5 rounded-xl border text-[10.5px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isPlaying
                    ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                    : "bg-[#f0f7fb] hover:bg-[#e1f0fa] text-[#164666] border-[#d9ecf7]"
                }`}
                title="Watch uncapping animation play automatically"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play Storytelling</span>
                  </>
                )}
              </button>

              {manualProgress !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setManualProgress(null);
                  }}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 text-xs transition-colors cursor-pointer"
                  title="Reset to scroll control"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}

              <button
                type="button"
                onClick={() => onOpenQuote("3 Hero Categories Sample Kit")}
                className="px-2.5 py-1.5 bg-[#164666] hover:bg-[#10364f] text-white text-[10.5px] font-semibold rounded-xl flex items-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Request Kit</span>
              </button>

              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20third-party%20manufacturing%20for%20Face%20Serums,%20Hair%20Serums,%20or%20Shampoos."
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-[#f0f7fb] hover:bg-[#e1f0fa] text-[#164666] border border-[#d9ecf7] text-[10.5px] font-semibold rounded-xl transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

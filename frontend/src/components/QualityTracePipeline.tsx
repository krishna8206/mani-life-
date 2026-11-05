"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

export interface QualityStep {
  step: string;
  title: string;
  desc: string;
  badge?: string;
}

export function QualityTracePipeline({ steps }: { steps: QualityStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "200px 0px 100px 0px" }
    );
    observer.observe(el);

    // Optical parallax drift on the laboratory photo
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
              const centerOffset = rect.top + rect.height / 2 - windowHeight / 2;
              const offset = Math.max(-16, Math.min(16, centerOffset * -0.04));
              setParallaxY(offset);

              // Staggered step illumination based on scroll position
              if (rect.top < windowHeight * 0.4) {
                setActiveStep(3);
              } else if (rect.top < windowHeight * 0.65) {
                setActiveStep(2);
              } else {
                setActiveStep(1);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* --- LEFT: ATELIER LABORATORY IMAGE WITH OPTICAL SCROLL PARALLAX --- */}
      <div className="lg:col-span-5 flex justify-center">
        <div
          className={`relative w-full max-w-md lg:max-w-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"
          }`}
        >
          {/* Outer Luxury Shadow & Border Shell */}
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-sky-950/15 group">
            {/* Parallax Inner Container */}
            <div
              className="relative w-full h-full scale-[1.08] transition-transform duration-100 ease-out will-change-transform"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <Image
                src="/images/quality.png"
                alt="Analytical cosmetic laboratory testing and sterile cleanroom validation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Specular Diagonal Sheen Sweep on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[160%] skew-x-[-25deg] group-hover:translate-x-[220%] transition-transform duration-1000 ease-out pointer-events-none" />

            {/* Bottom Glass Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#164666] text-white flex items-center justify-center shrink-0">
                  <FlaskConical className="w-4 h-4 text-sky-200" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight">
                    Cleanroom Compounding Suite
                  </div>
                  <div className="text-[10px] text-[#64748b]">
                    ISO Class 7 &bull; WHO-GMP Compliant
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Audited 2026</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT: 3-STEP QUALITY ASSURANCE TIMELINE WITH ANIMATED TRACER --- */}
      <div className="lg:col-span-7">
        <div
          className={`space-y-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Micro-Header */}
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Uncompromising Standards
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
            Our Commitment to{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Quality
            </span>
          </h2>

          <div className="w-14 h-1 bg-[#1b628b] rounded-full mt-2 mb-2" />

          <p className="text-sm sm:text-[15px] text-[#64748b] leading-relaxed max-w-xl font-normal">
            At Mani Lifestyle, quality is not just a goal; it is the foundation of everything we do. From the meticulous sourcing of raw materials to the final packaging, each stage of production is subjected to stringent quality control checks.
          </p>

          {/* 3 Step Interactive Process Pipeline */}
          <div className="relative pt-3 space-y-4">
            {/* Vertical Animated Luminous Connecting Tracer Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-slate-200 pointer-events-none">
              <div
                className="w-full bg-gradient-to-b from-[#164666] via-[#1b628b] to-sky-400 transition-all duration-700 ease-out rounded-full shadow-sm"
                style={{
                  height: activeStep === 1 ? "30%" : activeStep === 2 ? "65%" : "100%",
                }}
              />
            </div>

            {steps.map((pillar, idx) => {
              const stepNum = idx + 1;
              const isCurrentOrPast = activeStep >= stepNum;

              return (
                <div
                  key={pillar.step}
                  className={`group relative flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isCurrentOrPast
                      ? "bg-white border-[#b8ddf4] shadow-md shadow-sky-950/5 -translate-y-0.5"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-[#1b628b]/40"
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                  }}
                  onMouseEnter={() => setActiveStep(stepNum)}
                >
                  {/* Step Pill */}
                  <div
                    className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs font-serif shrink-0 mt-0.5 transition-all duration-500 shadow-xs ${
                      isCurrentOrPast
                        ? "bg-[#164666] text-white border-2 border-white shadow-md shadow-[#164666]/30 scale-105"
                        : "bg-[#f0f7fb] text-[#164666] border border-[#d2e7f5] group-hover:bg-[#164666] group-hover:text-white"
                    }`}
                  >
                    {pillar.step}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-sm sm:text-[15px] font-bold transition-colors leading-snug ${
                          isCurrentOrPast ? "text-[#164666]" : "text-[#0f172a] group-hover:text-[#164666]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      {isCurrentOrPast && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 animate-in fade-in zoom-in duration-300" />
                      )}
                    </div>
                    <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-normal mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityTracePipeline;


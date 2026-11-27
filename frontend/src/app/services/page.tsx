"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
import {
  FlaskConical,
  Package,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Leaf,
  Phone,
  ChevronRight,
  ChevronLeft,
  Check,
  CheckSquare,
  BadgeCheck,
  Compass,
  ArrowUpRight,
  MessagesSquare,
  FileEdit,
  Star,
  SlidersHorizontal,
  ShoppingCart,
  Send,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import CleanroomScrollProgress from "@/components/CleanroomScrollProgress";
import ServicePrecisionJourney from "@/components/ServicePrecisionJourney";
import ServicesHeroVisual from "@/components/ServicesHeroVisual";

const renderTrustIcon = (icon: string) => {
  const cls =
    "w-5 h-5 text-[#0d5c80] stroke-[1.8] shrink-0 transition-transform duration-300 group-hover/trust:scale-110 group-hover/trust:text-[#164666]";
  switch (icon) {
    case "Layers":
      return <Layers className={cls} />;
    case "ShieldCheck":
      return <ShieldCheck className={cls} />;
    case "Leaf":
      return <Leaf className={cls} />;
    case "Award":
      return <Award className={cls} />;
    case "Sparkles":
      return <Sparkles className={cls} />;
    case "FlaskConical":
    default:
      return <FlaskConical className={cls} />;
  }
};

const renderModulationIcon = (
  icon: string,
  className = "w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors"
) => {
  switch (icon) {
    case "FileEdit":
      return <FileEdit className={className} />;
    case "FlaskConical":
      return <FlaskConical className={className} />;
    case "Star":
      return <Star className={className} />;
    case "SlidersHorizontal":
      return <SlidersHorizontal className={className} />;
    case "ShoppingCart":
      return <ShoppingCart className={className} />;
    case "MessagesSquare":
    default:
      return <MessagesSquare className={className} />;
  }
};

interface ServicesCmsData {
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight1: string;
    headlineHighlight2: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    phone: string;
    image?: string;
    imageAlt?: string;
    trustIndicators: Array<{
      id: string;
      line1: string;
      line2: string;
      icon: string;
    }>;
  };
  precisionJourney: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    services: Array<{
      id: string;
      slug: string;
      title: string;
      tagline: string;
      shortDesc: string;
      fullDesc: string;
      features: string[];
      deliverables: string[];
      suitableFor: string[];
      timeline: string;
      moq: string;
      image: string;
    }>;
  };
  lifecycleStages: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    stages: Array<{
      step: string;
      title: string;
      description: string;
      image: string;
      highlights: string[];
    }>;
  };
  formulaModulation: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    centerDisc: {
      kicker: string;
      title: string;
      description: string;
    };
    steps: Array<{
      stepNumber: string;
      stepLabel: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  consultationCta: {
    eyebrow: string;
    heading: string;
    highlight: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    phone: string;
    trustPoints: string[];
  };
}

export default function ServicesPage() {
  const [cms, setCms] = useState<ServicesCmsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isHeroEntered, setIsHeroEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeroEntered(true), 40);
    return () => clearTimeout(timer);
  }, []);

  // Fetch dynamic CMS data strictly from Admin / MongoDB Atlas
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/services-page`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.hero) {
          setCms(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch services CMS data:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);

  const stages = cms?.lifecycleStages?.stages || [];
  const safeProcessIndex = stages.length > 0 ? Math.min(activeProcessIndex, stages.length - 1) : 0;
  const activeStage = stages[safeProcessIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slider with smooth 5-second rotation
  useEffect(() => {
    if (isPaused || stages.length === 0) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const duration = 5000;
    timerRef.current = setTimeout(() => {
      setSlideDirection("next");
      setActiveProcessIndex((prev) => (prev + 1) % stages.length);
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [safeProcessIndex, isPaused, stages.length]);

  const handleSelectStage = (idx: number) => {
    if (stages.length === 0) return;
    setSlideDirection(idx > safeProcessIndex ? "next" : "prev");
    setActiveProcessIndex(idx);
  };

  const handleNextStage = () => {
    if (stages.length === 0) return;
    setSlideDirection("next");
    setActiveProcessIndex((prev) => (prev + 1) % stages.length);
  };

  const handlePrevStage = () => {
    if (stages.length === 0) return;
    setSlideDirection("prev");
    setActiveProcessIndex((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
  };

  if (isLoading || !cms) {
    return (
      <div className="min-h-[100dvh] bg-gradient-to-b from-[#ffffff] via-[#f4f9fc] to-[#e6f2f9] flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#164666]/20 border-t-[#164666] animate-spin" />
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#164666]/70">
            Loading Services...
          </p>
        </div>
      </div>
    );
  }

  const cleanPhone = (cms.hero?.phone || "").replace(/[^0-9]/g, "");
  const ctaPhone = (cms.consultationCta?.phone || "").replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${ctaPhone}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20cosmetics%20manufacturing%20services.`;

  // Orbit desktop node coordinates along 215px circle centered at (550, 260)
  const orbitCoordinates = [
    // 01: Top-Left (x = 374, y = 137)
    {
      cardAlign: "right",
      cardStyle: { right: `${1100 - 374 + 40}px`, top: "137px", transform: "translateY(-50%)" },
      nodeStyle: { left: "374px", top: "137px", transform: "translate(-50%, -50%)" },
    },
    // 02: Top-Right (x = 726, y = 137)
    {
      cardAlign: "left",
      cardStyle: { left: `${726 + 40}px`, top: "137px", transform: "translateY(-50%)" },
      nodeStyle: { left: "726px", top: "137px", transform: "translate(-50%, -50%)" },
    },
    // 03: Middle-Right (x = 765, y = 260)
    {
      cardAlign: "left",
      cardStyle: { left: `${765 + 40}px`, top: "260px", transform: "translateY(-50%)" },
      nodeStyle: { left: "765px", top: "260px", transform: "translate(-50%, -50%)" },
    },
    // 04: Bottom-Right (x = 726, y = 383)
    {
      cardAlign: "left",
      cardStyle: { left: `${726 + 40}px`, top: "383px", transform: "translateY(-50%)" },
      nodeStyle: { left: "726px", top: "383px", transform: "translate(-50%, -50%)" },
    },
    // 05: Bottom-Left (x = 374, y = 383)
    {
      cardAlign: "right",
      cardStyle: { right: `${1100 - 374 + 40}px`, top: "383px", transform: "translateY(-50%)" },
      nodeStyle: { left: "374px", top: "383px", transform: "translate(-50%, -50%)" },
    },
    // 06: Middle-Left (x = 335, y = 260)
    {
      cardAlign: "right",
      cardStyle: { right: `${1100 - 335 + 40}px`, top: "260px", transform: "translateY(-50%)" },
      nodeStyle: { left: "335px", top: "260px", transform: "translate(-50%, -50%)" },
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white overflow-hidden">
      {/* Cleanroom Liquid Scroll Progress Bar */}
      <CleanroomScrollProgress />

      {/* 1. HERO SECTION - LUXURY COSMETIC EDITORIAL CANVAS (FULL SCREEN VIEWPORT 100DVH) */}
      <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center bg-gradient-to-b from-[#ffffff] via-[#f4f9fc] to-[#e6f2f9] overflow-hidden pt-16 sm:pt-20 lg:pt-[72px] pb-6 sm:pb-8 lg:pb-7">
        {/* Soft atmospheric ambient glow behind the right organic showcase */}
        <div className="absolute top-1/3 right-[8%] w-[520px] h-[520px] bg-sky-200/35 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Editorial Content with Downward Entrance Cascade */}
            <div
              className="lg:col-span-6 space-y-3.5 sm:space-y-4 will-change-transform"
              style={{
                transform: isHeroEntered ? "translateY(0px)" : "translateY(24px)",
                opacity: isHeroEntered ? 1 : 0,
                transition: "transform 850ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, opacity 850ms ease-out 100ms",
              }}
            >
              {/* Brand Micro-header with Em-dash prefix */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[#3b6785] font-light select-none text-sm leading-none">——</span>
                <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#3b6785]">
                  {cms.hero.kicker}
                </span>
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-cormorant font-semibold text-[#091e2f] leading-[1.06] tracking-tight">
                {cms.hero.headlinePart1} <br />
                <span className="font-cormorant font-semibold text-[#164666]">
                  {cms.hero.headlineHighlight1}
                </span>{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block font-cormorant font-semibold text-[#164666]">
                  {cms.hero.headlineHighlight2}
                  {/* Painterly soft curve underline */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full h-3 text-[#99d2f2]/80 pointer-events-none"
                    viewBox="0 0 160 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 9C45 3.5 115 2.5 157 8.5C130 11.5 60 12.5 3 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="pl-3.5 border-l-2 border-[#164666]/30 text-xs sm:text-sm lg:text-[14px] text-[#475569] leading-relaxed max-w-xl font-normal">
                {cms.hero.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="btn-shimmer-sweep px-5 sm:px-6 py-3 sm:py-3.5 bg-[#164666] hover:bg-[#0f344d] text-white font-medium text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-md shadow-[#164666]/25 hover:shadow-[0_8px_24px_rgba(22,70,102,0.32)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] cursor-pointer group"
                >
                  <span>{cms.hero.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${cleanPhone}`}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-slate-50/90 text-[#0f172a] font-medium text-xs sm:text-sm rounded-full border border-[#d4e3ee] hover:border-[#164666] text-center transition-all shadow-xs flex items-center gap-2 hover:shadow-md hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4 text-[#164666]" />
                  <span>{cms.hero.secondaryCtaText}</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              {cms.hero.trustIndicators && cms.hero.trustIndicators.length > 0 && (
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[#092232] relative z-20">
                  {cms.hero.trustIndicators.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="group/trust flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/95 px-2.5 py-2 rounded-2xl shadow-2xs transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5 cursor-default"
                    >
                      {renderTrustIcon(item.icon)}
                      <div className="leading-tight min-w-0">
                        <div className="font-bold text-[11px] sm:text-xs text-[#092232] truncate">
                          {item.line1}
                        </div>
                        <div className="text-[10px] text-[#64748b] truncate">
                          {item.line2}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Branded Architectural Luxury Showcase */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
              <ServicesHeroVisual image={cms.hero?.image} alt={cms.hero?.imageAlt} />
            </div>
          </div>
        </div>

        {/* Bottom Undulating Ambient Fluid Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg
            viewBox="0 0 1440 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-10 lg:h-12 text-[#f8fafc]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,28 C260,65 520,5 780,40 C1040,75 1260,15 1440,42 L1440,75 L0,75 Z"
              fill="rgba(214, 235, 248, 0.45)"
            />
            <path
              d="M0,45 C300,12 600,60 900,25 C1200,55 1350,28 1440,48 L1440,75 L0,75 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* 2. THE FOUR PILLARS EDITORIAL SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {cms.precisionJourney.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {cms.precisionJourney.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {cms.precisionJourney.highlight}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mx-auto">
              {cms.precisionJourney.description}
            </p>
          </div>

          {/* Alternating Editorial Showcase Rows with Synchronized Fluid Thread */}
          <ServicePrecisionJourney
            setIsQuoteOpen={setIsQuoteOpen}
            services={cms.precisionJourney.services}
          />
        </div>
      </section>

      {/* 3. COMPLETE OEM & ODM SERVICES (ANIMATED LIFECYCLE SLIDER) */}
      <section
        id="oem-odm-process"
        className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {cms.lifecycleStages.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {cms.lifecycleStages.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {cms.lifecycleStages.highlight}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              {cms.lifecycleStages.description}
            </p>
          </div>

          {/* Active Stage Dynamic Showcase Window */}
          {activeStage && (
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#f0f7fb] via-[#f8fafc] to-[#eaf2f8] border border-[#cfe1ed] shadow-xl relative overflow-hidden"
            >
              <div
                key={safeProcessIndex}
                className={
                  slideDirection === "next"
                    ? "slide-next-animation"
                    : "slide-prev-animation"
                }
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Media on Left */}
                  <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-white group">
                    <Image
                      src={activeStage.image || "/images/services/requirement-gathering.png"}
                      alt={activeStage.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 via-transparent to-transparent" />
                  </div>

                  {/* Detail Content on Right */}
                  <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1b628b] flex items-center gap-2">
                        <span className="w-5 h-[1.5px] bg-[#1b628b]" />
                        <span>
                          STEP {activeStage.step || `0${safeProcessIndex + 1}`} OF 0{stages.length} · MANUFACTURING LIFECYCLE
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#091e2f] leading-snug">
                        {activeStage.title}
                      </h3>

                      <p className="text-sm text-[#475569] leading-relaxed">
                        {activeStage.description}
                      </p>
                    </div>

                    {/* Key Deliverables Chips */}
                    {activeStage.highlights && activeStage.highlights.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider">
                          STAGE DELIVERABLES &amp; MILESTONES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeStage.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-3.5 py-1.5 rounded-lg bg-white text-[#164666] text-xs font-semibold border border-slate-200/90 shadow-xs flex items-center gap-1.5 transition-transform hover:scale-105"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Slider Navigation Controls */}
                    <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                      {/* Left: Previous & Next Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrevStage}
                          className="p-3 sm:p-2.5 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200 transition-all hover:scale-105 cursor-pointer shadow-xs active:scale-95"
                          aria-label="Previous Stage"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button
                          onClick={handleNextStage}
                          className="p-3 sm:p-2.5 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200 transition-all hover:scale-105 cursor-pointer shadow-xs active:scale-95"
                          aria-label="Next Stage"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Center: Dot Indicators */}
                      <div className="flex items-center gap-1">
                        {stages.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => handleSelectStage(dotIdx)}
                            className="p-2 flex items-center justify-center cursor-pointer"
                            aria-label={`Go to stage ${dotIdx + 1}`}
                          >
                            <span
                              className={`block h-2 rounded-full transition-all duration-300 ${
                                dotIdx === safeProcessIndex
                                  ? "w-7 bg-[#164666]"
                                  : "w-2 bg-slate-300 hover:bg-slate-400"
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      {/* Right: Step Counter */}
                      <div className="text-xs font-semibold text-[#164666] tracking-wider font-mono">
                        0{safeProcessIndex + 1} / 0{stages.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. FORMULA MODULATION (RADIAL ORBITAL CYCLE & MOBILE TIMELINE) */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden border-b border-slate-200/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-slate-300" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-slate-500">
                {cms.formulaModulation.eyebrow}
              </span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.12]">
              {cms.formulaModulation.title} <br />
              <span className="font-cormorant font-semibold text-[#164666] inline-block mt-1">
                {cms.formulaModulation.highlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto font-normal pt-1">
              {cms.formulaModulation.description}
            </p>
          </div>

          {/* DESKTOP VIEW: Radial Orbital Cycle */}
          <div className="hidden lg:block relative py-2 overflow-x-auto xl:overflow-x-visible">
            <div className="w-[1100px] h-[520px] mx-auto relative">
              {/* Concentric Dashed Orbit Track & Arrows SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 1100 520"
                fill="none"
              >
                <circle
                  cx="550"
                  cy="260"
                  r="215"
                  stroke="#b0d2e8"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Clockwise Directional Guide Arrows */}
                <g transform="translate(550, 45) rotate(0)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(755, 195.5) rotate(72.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(755, 324.5) rotate(107.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(550, 475) rotate(180)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(345, 324.5) rotate(252.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(345, 195.5) rotate(-72.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              {/* Central 3D Disc */}
              <div
                className="absolute w-[280px] h-[280px] rounded-full bg-white shadow-[0_20px_50px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex flex-col items-center justify-center text-center p-8 transition-transform duration-500 hover:scale-105 z-10"
                style={{
                  left: "550px",
                  top: "260px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-20 h-10 mb-2 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 80 40"
                    className="w-full h-full drop-shadow-[0_4px_10px_rgba(27,98,139,0.2)]"
                    fill="none"
                  >
                    <path
                      d="M12 28C10 24 14 16 28 12C42 8 68 10 72 18C76 26 62 32 46 32C30 32 14 32 12 28Z"
                      fill="url(#creamGradientCenterExact)"
                    />
                    <path
                      d="M24 16C34 12 56 13 62 18"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    <defs>
                      <linearGradient
                        id="creamGradientCenterExact"
                        x1="12"
                        y1="12"
                        x2="72"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#bae6fd" />
                        <stop offset="0.5" stopColor="#f0f9ff" />
                        <stop offset="1" stopColor="#7dd3fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#164666]">
                  {cms.formulaModulation.centerDisc?.kicker || "YOUR VISION"}
                </span>
                <span className="text-base font-cormorant font-bold tracking-[0.15em] text-[#091e2f] mt-0.5">
                  {cms.formulaModulation.centerDisc?.title || "OUR FORMULATION"}
                </span>

                <p className="text-[11px] text-[#64748b] leading-relaxed max-w-[195px] mx-auto mt-2 font-normal">
                  {cms.formulaModulation.centerDisc?.description ||
                    "A seamless journey from concept to creation, backed by expertise at every step."}
                </p>
              </div>

              {/* 6 Dynamic Orbit Nodes */}
              {cms.formulaModulation.steps?.slice(0, 6).map((step, idx) => {
                const coord = orbitCoordinates[idx];
                if (!coord) return null;
                const isRightCard = coord.cardAlign === "right";

                return (
                  <React.Fragment key={step.stepNumber || idx}>
                    {/* Node Text Card */}
                    <div
                      className={`absolute flex items-center ${
                        isRightCard ? "justify-end text-right" : "justify-start text-left"
                      } group z-20`}
                      style={coord.cardStyle}
                    >
                      {isRightCard ? (
                        <>
                          <div className="text-right max-w-[210px] space-y-0.5 mr-3">
                            <h3 className="font-cormorant text-[1.18rem] font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-[11px] text-[#64748b] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          <div className="flex items-center shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                            <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                              {step.stepNumber}
                            </span>
                            <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center shrink-0 mr-3">
                            <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                              {step.stepNumber}
                            </span>
                            <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                          </div>
                          <div className="text-left max-w-[210px] space-y-0.5">
                            <h3 className="font-cormorant text-[1.18rem] font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-[11px] text-[#64748b] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Circular Icon Orb */}
                    <div
                      className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                      style={coord.nodeStyle}
                    >
                      {renderModulationIcon(step.icon)}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW: Sequential Connected Card Timeline */}
          <div className="lg:hidden space-y-8">
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-white shadow-[0_12px_30px_rgba(22,70,102,0.1)] border border-slate-100 text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#164666]">
                {cms.formulaModulation.centerDisc?.kicker || "YOUR VISION"}
              </span>
              <h3 className="text-lg font-cormorant font-bold tracking-wider text-[#091e2f]">
                {cms.formulaModulation.centerDisc?.title || "OUR FORMULATION"}
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                {cms.formulaModulation.centerDisc?.description ||
                  "A seamless journey from concept to creation, backed by expertise at every step."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cms.formulaModulation.steps?.map((item) => (
                <div
                  key={item.stepNumber}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-[0_8px_20px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0">
                    {renderModulationIcon(item.icon, "w-6 h-6 text-[#164666]")}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#f0f6fa] border border-[#d2e4f0] text-[10px] font-bold text-[#164666]">
                        {item.stepNumber}
                      </span>
                      <h4 className="font-cormorant text-base font-bold text-[#091e2f]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FACTORY CONSULTATION CTA BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Line */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              {cms.consultationCta.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
            {cms.consultationCta.heading}{" "}
            <span className="font-cormorant font-semibold text-[#164666]">
              {cms.consultationCta.highlight}
            </span>
          </h2>

          {/* Signature Underline Accent */}
          <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            {cms.consultationCta.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{cms.consultationCta.primaryCtaText}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f8fafc] text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#164666]" />
              <span>{cms.consultationCta.secondaryCtaText}</span>
            </a>
          </div>

          {cms.consultationCta.trustPoints && cms.consultationCta.trustPoints.length > 0 && (
            <div className="mt-8 text-xs text-[#64748b]/80 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {cms.consultationCta.trustPoints.map((point, pIdx) => (
                <React.Fragment key={pIdx}>
                  {pIdx > 0 && <span>•</span>}
                  <span>{point}</span>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

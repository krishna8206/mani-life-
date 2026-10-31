"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FlaskConical,
  Package,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
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
import {
  servicesData,
  oemProcessStages,
} from "@/data/services";
import QuoteModal from "@/components/QuoteModal";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeStage = oemProcessStages[activeProcessIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slider with smooth 5-second rotation
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const duration = 5000; // 5 seconds per slide
    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / duration) * 100;

    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    timerRef.current = setTimeout(() => {
      setSlideDirection("next");
      setActiveProcessIndex((prev) => (prev + 1) % oemProcessStages.length);
      setProgress(0);
    }, duration);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeProcessIndex, isPaused]);

  const handleSelectStage = (idx: number) => {
    setSlideDirection(idx > activeProcessIndex ? "next" : "prev");
    setActiveProcessIndex(idx);
    setProgress(0);
  };

  const handleNextStage = () => {
    setSlideDirection("next");
    setActiveProcessIndex((prev) => (prev + 1) % oemProcessStages.length);
    setProgress(0);
  };

  const handlePrevStage = () => {
    setSlideDirection("prev");
    setActiveProcessIndex((prev) =>
      prev === 0 ? oemProcessStages.length - 1 : prev - 1
    );
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION - EDITORIAL SPLIT-CANVAS (ANIMATED & UNBOXED) */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center bg-gradient-to-br from-[#ffffff] via-[#f1f7fb] to-[#e4f0f7] border-b border-slate-200/80 overflow-hidden">
        {/* Soft atmospheric ambient glow with slow breathing animation */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#d3e9f7]/60 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#e6f2fa]/70 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs text-[#64748b]">
                <Link href="/" className="hover:text-[#164666] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#164666] font-semibold">Services</span>
              </nav>

              {/* Brand Micro-header */}
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[1.5px] bg-[#4a728e] animate-pulse" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                  CERTIFIED COSMETICS MANUFACTURER · AHMEDABAD, INDIA
                </span>
              </div>

              {/* Master Headline (Exact copy from reference) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-[#0f172a] font-normal leading-[1.08] tracking-tight">
                Our Services. <br />
                <span className="italic font-light text-[#1b628b]">
                  Crafting Your Brand’s Future.
                </span>
              </h1>

              {/* Subtext (Exact reference copy) */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl font-normal">
                Mani Lifestyle crafts custom, innovative cosmetics solutions — turning ideas tailored to your exact requirements from concept to finished skincare, haircare, and personal care formulations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.99] cursor-pointer shimmer-sweep-hover"
                >
                  <span>Request Custom Formulation Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919724681096"
                  className="px-6 py-3.5 bg-white/90 hover:bg-white text-[#0f172a] font-medium text-xs sm:text-sm rounded-lg border border-[#c8d9e6] hover:border-[#164666] text-center transition-all shadow-xs backdrop-blur-xs flex items-center gap-2 hover:shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#164666]" />
                  <span>Call +91 97246 81096</span>
                </a>
              </div>

              {/* Trust Indicators Strip - Clean Minimal List */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#526477]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-[#0f172a]">Low 500 MOQ</span>
                  <span className="text-[#64748b]">(Startups &amp; Salons)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1b628b]" />
                  <span className="font-semibold text-[#0f172a]">500+ Stock Formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4a728e]" />
                  <span className="font-semibold text-[#0f172a]">ISO 22716 &amp; WHO-GMP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-[#0f172a]">100% Client IP</span>
                </div>
              </div>
            </div>

            {/* Right: Asymmetrical Fluid Hero Composition with Gentle Float */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/5]">
                {/* Organic shaped background aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#164666]/15 via-sky-200/40 to-transparent rounded-[2.5rem] rotate-3 scale-105" />

                {/* Main Hero Visual with smooth rounded mask */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 bg-white shimmer-sweep-hover group">
                  <Image
                    src="/images/services/our-servcies.png"
                    alt="Mani Lifestyle Cosmetics Formulation"
                    fill
                    priority
                    className="object-cover object-center scale-105 transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />

                  {/* Overlaid Editorial Glass Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-left transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#1b628b]">
                      <Sparkles className="w-3.5 h-3.5 text-[#1b628b] animate-spin-slow" />
                      <span>Ahmedabad Manufacturing Campus</span>
                    </div>
                    <div className="text-xs font-semibold text-[#0f172a] mt-0.5">
                      Class 100,000 Cleanroom &amp; Automated Compounding
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Lens Accent with Gentle Oscillation */}
                <div className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-xs font-semibold text-[#164666] flex items-center gap-2 animate-float-gentle">
                  <BadgeCheck className="w-4 h-4 text-emerald-600" />
                  <span>FDCA Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR PILLARS EDITORIAL SHOWCASE (UNBOXED ALTERNATING STORYTELLING) */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                MANUFACTURING CAPABILITIES
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal tracking-tight">
              Four Precision Models for{" "}
              <span className="italic font-light text-[#1b628b]">Beauty Brands</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mx-auto">
              Tailored production frameworks designed around your capital requirements, brand maturity, and retail roll-out velocity.
            </p>
          </div>

          {/* Alternating Editorial Showcase Rows */}
          <div className="space-y-24 lg:space-y-32">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
                >
                  {/* Visual Media Column */}
                  <div
                    className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 bg-white shimmer-sweep-hover">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                      {/* Floating Spec Pill */}
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-[#164666] border border-white/60 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1b628b]" />
                        <span>MOQ: {service.moq}</span>
                      </div>

                      <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#164666]/90 backdrop-blur-md text-xs font-medium text-white shadow-sm">
                        {service.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    {/* Large Editorial Serif Number & Tag */}
                    <div className="flex items-center gap-4">
                      <span className="text-4xl sm:text-5xl font-serif text-[#164666]/25 font-light transition-colors group-hover:text-[#1b628b]/40">
                        0{index + 1}
                      </span>
                      <span className="h-[1px] w-12 bg-slate-200" />
                      <span className="text-xs uppercase font-bold tracking-widest text-[#1b628b]">
                        {service.tagline.split("&")[0].trim()}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal leading-snug group-hover:text-[#164666] transition-colors">
                      {service.title}
                    </h3>

                    {/* Descriptive Story */}
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Highlight Bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200/70">
                      {service.features.slice(0, 4).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="px-5 py-3 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs rounded-lg transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                      >
                        Request Feasibility Quote
                      </button>

                      <Link
                        href={`/services/${service.slug}`}
                        className="px-5 py-3 bg-white hover:bg-slate-50 text-[#0f172a] font-medium text-xs rounded-lg border border-slate-200 hover:border-[#164666] transition-colors flex items-center gap-1.5"
                      >
                        <span>Explore Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#1b628b]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPLETE OEM & ODM SERVICES (ANIMATED LIFECYCLE SLIDER WITH AUTOPLAY & TRANSITIONS) */}
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
                END-TO-END MANUFACTURING LIFECYCLE
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal tracking-tight">
              Complete OEM &amp;{" "}
              <span className="italic font-light text-[#1b628b]">ODM Services</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              We turn your ideas that are tailored to your requirements and shape them from concept to a custom skin care product.
            </p>
          </div>

          {/* Active Stage Dynamic Showcase Window (Smoothly Animated Transition) */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#f0f7fb] via-[#f8fafc] to-[#eaf2f8] border border-[#cfe1ed] shadow-xl relative overflow-hidden"
          >
            {/* Slide content container with keyframe animation */}
            <div
              key={activeProcessIndex}
              className={
                slideDirection === "next"
                  ? "slide-next-animation"
                  : "slide-prev-animation"
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Media on Left with smooth rounded mask */}
                <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-white group">
                  <Image
                    src={activeStage.image}
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
                      <span>STEP 0{activeProcessIndex + 1} OF 06 · MANUFACTURING LIFECYCLE</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal leading-snug">
                      {activeStage.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {activeStage.description}
                    </p>
                  </div>

                  {/* Key Deliverables Chips */}
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

                  {/* Slider Navigation Controls - Balanced & Properly Aligned */}
                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    {/* Left: Previous & Next Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevStage}
                        className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200 transition-all hover:scale-105 cursor-pointer shadow-xs active:scale-95"
                        aria-label="Previous Stage"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={handleNextStage}
                        className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200 transition-all hover:scale-105 cursor-pointer shadow-xs active:scale-95"
                        aria-label="Next Stage"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Center: Dot Indicators */}
                    <div className="flex items-center gap-2">
                      {oemProcessStages.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => handleSelectStage(dotIdx)}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === activeProcessIndex
                              ? "w-7 bg-[#164666]"
                              : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                          aria-label={`Go to stage ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Right: Step Counter */}
                    <div className="text-xs font-semibold text-[#164666] tracking-wider font-mono">
                      0{activeProcessIndex + 1} / 06
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMULA MODULATION (PROPERLY ALIGNED RADIAL ORBITAL CYCLE) */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden border-b border-slate-200/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          {/* Section Header with Refined Typography Matching Reference Image */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-slate-300" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-slate-500">
                FORMULA MODULATION
              </span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-[#102a43] font-normal tracking-tight leading-[1.12]">
              From Your Idea to a <br />
              <span className="italic font-light text-[#2272b6] inline-block mt-1">
                Perfect Formula
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto font-normal pt-1">
              We make the process simple, transparent, and collaborative — <br className="hidden sm:inline" />
              so you get a formula that truly fits your brand.
            </p>
          </div>

          {/* DESKTOP VIEW: Mathematically Precise Radial Orbital Cycle (Nodes Centered on Circle Line) */}
          <div className="hidden lg:block relative py-2 overflow-x-auto xl:overflow-x-visible">
            <div className="w-[1100px] h-[520px] mx-auto relative">
              {/* Central Concentric Dashed Orbit Track & Arrows SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 1100 520"
                fill="none"
              >
                {/* Dashed Orbit Circle: Center (550, 260), Radius 215 */}
                <circle
                  cx="550"
                  cy="260"
                  r="215"
                  stroke="#b0d2e8"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Clockwise Directional Guide Arrows along the orbit (Mathematically centered on circle line and tangent to curve) */}
                {/* 1. Top arrow (between 01 & 02, theta = -90 deg, tangent = 0 deg) */}
                <g transform="translate(550, 45) rotate(0)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 2. Top-Right arrow (between 02 & 03, theta = -17.5 deg, tangent = 72.5 deg) */}
                <g transform="translate(755, 195.5) rotate(72.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 3. Bottom-Right arrow (between 03 & 04, theta = +17.5 deg, tangent = 107.5 deg) */}
                <g transform="translate(755, 324.5) rotate(107.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 4. Bottom arrow (between 04 & 05, theta = +90 deg, tangent = 180 deg) */}
                <g transform="translate(550, 475) rotate(180)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 5. Bottom-Left arrow (between 05 & 06, theta = 162.5 deg, tangent = 252.5 deg) */}
                <g transform="translate(345, 324.5) rotate(252.5)">
                  <polygon
                    points="-5.5,-4 4.5,0 -5.5,4 -3.5,0"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </g>

                {/* 6. Top-Left arrow (between 06 & 01, theta = -162.5 deg, tangent = -72.5 deg) */}
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

              {/* Central 3D Disc (YOUR VISION / OUR FORMULATION) */}
              <div
                className="absolute w-[280px] h-[280px] rounded-full bg-white shadow-[0_20px_50px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex flex-col items-center justify-center text-center p-8 transition-transform duration-500 hover:scale-105 z-10"
                style={{
                  left: "550px",
                  top: "260px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Glossy Cosmetic Serum/Cream Dollop Icon */}
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
                  YOUR VISION
                </span>
                <span className="text-sm font-serif font-bold tracking-[0.2em] text-[#0f172a] mt-0.5">
                  OUR FORMULATION
                </span>

                <p className="text-[11px] text-[#64748b] leading-relaxed max-w-[195px] mx-auto mt-2 font-normal">
                  A seamless journey from concept to creation, backed by expertise at every step.
                </p>
              </div>

              {/* ----------------- 6 NODES & CONNECTORS EXACTLY ON THE CIRCLE ----------------- */}

              {/* STEP 01: Top-Left (x = 374, y = 137) */}
              <div
                className="absolute flex items-center justify-end group z-20"
                style={{
                  right: `${1100 - 374 + 40}px`,
                  top: "137px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="text-right max-w-[210px] space-y-0.5 mr-3">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Clarify <br />Customer Demand
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    We understand your brand goals, target market and specific requirements.
                  </p>
                </div>
                <div className="flex items-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    01
                  </span>
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                </div>
              </div>
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "374px",
                  top: "137px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <MessagesSquare className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>

              {/* STEP 02: Top-Right (x = 726, y = 137) */}
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "726px",
                  top: "137px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FileEdit className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>
              <div
                className="absolute flex items-center justify-start group z-20"
                style={{
                  left: `${726 + 40}px`,
                  top: "137px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="flex items-center shrink-0 mr-3">
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    02
                  </span>
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                </div>
                <div className="text-left max-w-[210px] space-y-0.5">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Fill in Detailed <br />Proofing Form
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    Share your preferences for texture, ingredients, fragrance, packaging and more.
                  </p>
                </div>
              </div>

              {/* STEP 06: Middle-Left (x = 335, y = 260) */}
              <div
                className="absolute flex items-center justify-end group z-20"
                style={{
                  right: `${1100 - 335 + 40}px`,
                  top: "260px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="text-right max-w-[210px] space-y-0.5 mr-3">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Quotation &amp; <br />Place Order
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    Once confirmed, we share the quotation and proceed with production.
                  </p>
                </div>
                <div className="flex items-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    06
                  </span>
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                </div>
              </div>
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "335px",
                  top: "260px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <ShoppingCart className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>

              {/* STEP 03: Middle-Right (x = 765, y = 260) */}
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "765px",
                  top: "260px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FlaskConical className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>
              <div
                className="absolute flex items-center justify-start group z-20"
                style={{
                  left: `${765 + 40}px`,
                  top: "260px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="flex items-center shrink-0 mr-3">
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    03
                  </span>
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                </div>
                <div className="text-left max-w-[210px] space-y-0.5">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Provide <br />Proofing Sample
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    We develop and send initial samples based on your requirements for testing.
                  </p>
                </div>
              </div>

              {/* STEP 05: Bottom-Left (x = 374, y = 383) */}
              <div
                className="absolute flex items-center justify-end group z-20"
                style={{
                  right: `${1100 - 374 + 40}px`,
                  top: "383px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="text-right max-w-[210px] space-y-0.5 mr-3">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Sample <br />Adjustment
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    We fine-tune the formula based on your feedback for the perfect result.
                  </p>
                </div>
                <div className="flex items-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    05
                  </span>
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                </div>
              </div>
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "374px",
                  top: "383px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <SlidersHorizontal className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>

              {/* STEP 04: Bottom-Right (x = 726, y = 383) */}
              <div
                className="absolute w-20 h-20 rounded-full bg-white shadow-[0_12px_28px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_36px_rgba(27,98,139,0.22)] group cursor-pointer z-20"
                style={{
                  left: "726px",
                  top: "383px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Star className="w-7 h-7 text-[#164666] group-hover:text-[#2272b6] transition-colors" />
              </div>
              <div
                className="absolute flex items-center justify-start group z-20"
                style={{
                  left: `${726 + 40}px`,
                  top: "383px",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="flex items-center shrink-0 mr-3">
                  <span className="w-3.5 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#c8d9e6] text-[10px] font-bold text-[#164666] shadow-xs">
                    04
                  </span>
                  <span className="w-12 h-[1.5px] bg-[#b0d2e8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164666]" />
                </div>
                <div className="text-left max-w-[210px] space-y-0.5">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#102a43] group-hover:text-[#2272b6] transition-colors leading-tight">
                    Sample Feedback <br />&amp; Confirmation
                  </h3>
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    You review the samples and share your feedback. We refine the formula until it’s approved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE VIEW: Sequential Connected Card Timeline (< lg) */}
          <div className="lg:hidden space-y-8">
            {/* Center Core Badge at top of mobile flow */}
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-white shadow-[0_12px_30px_rgba(22,70,102,0.1)] border border-slate-100 text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#164666]">
                YOUR VISION
              </span>
              <h3 className="text-base font-serif font-bold tracking-wider text-[#0f172a]">
                OUR FORMULATION
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                A seamless journey from concept to creation, backed by expertise at every step.
              </p>
            </div>

            {/* Mobile Connected Step List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: "01",
                  title: "Clarify Customer Demand",
                  desc: "We understand your brand goals, target market and specific requirements.",
                  icon: MessagesSquare,
                },
                {
                  step: "02",
                  title: "Fill in Detailed Proofing Form",
                  desc: "Share your preferences for texture, ingredients, fragrance, packaging and more.",
                  icon: FileEdit,
                },
                {
                  step: "03",
                  title: "Provide Proofing Sample",
                  desc: "We develop and send initial samples based on your requirements for testing.",
                  icon: FlaskConical,
                },
                {
                  step: "04",
                  title: "Sample Feedback & Confirmation",
                  desc: "You review the samples and share your feedback. We refine the formula until it’s approved.",
                  icon: Star,
                },
                {
                  step: "05",
                  title: "Sample Adjustment",
                  desc: "We fine-tune the formula based on your feedback for the perfect result.",
                  icon: SlidersHorizontal,
                },
                {
                  step: "06",
                  title: "Quotation & Place Order",
                  desc: "Once confirmed, we share the quotation and proceed with production.",
                  icon: ShoppingCart,
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-full bg-white shadow-[0_8px_20px_rgba(22,70,102,0.12),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-slate-100 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-[#164666]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#f0f6fa] border border-[#d2e4f0] text-[10px] font-bold text-[#164666]">
                          {item.step}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-[#0f172a]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#64748b] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FACTORY CONSULTATION CTA BANNER (Exact Match with Previous Pages) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Line */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              Premier Indian Contract Manufacturing Partner
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
            Ready to Build Your Dream{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Personal Care Brand Together?
            </span>
          </h2>

          {/* Signature Underline Accent */}
          <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Whether you want to launch with proven stock formulations or engineer bespoke cosmeceuticals, Mani Lifestyle is your certified manufacturing partner.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Quote &amp; Formulation Samples</span>
            </button>

            <a
              href="https://wa.me/919724681096?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20cosmetics%20manufacturing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f8fafc] text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#164666]" />
              <span>Schedule Plant Tour (+91 97246 81096)</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-[#64748b]/80 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Immediate NDA Protection</span>
            <span>•</span>
            <span>24-Hour Technical Feasibility Response</span>
            <span>•</span>
            <span>Direct Factory Pricing</span>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  FlaskConical,
  Heart,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Tags,
  Box,
  FileCheck2,
  Droplets,
  Sun,
  ShieldCheck,
  Building2,
  Handshake,
  Award,
  Palette,
  ArrowRight,
  Phone,
  Beaker,
  Send,
  Layers,
  Sparkle,
  Check,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import AboutHeroVisual from "@/components/AboutHeroVisual";
import WhyWeExistStage from "@/components/WhyWeExistStage";
import BiomorphicDropletsCapabilities from "@/components/BiomorphicDropletsCapabilities";
import RomanArchProductExpertise from "@/components/RomanArchProductExpertise";
import CleanroomScrollProgress from "@/components/CleanroomScrollProgress";
import VisionPrinciplesShowcase from "@/components/VisionPrinciplesShowcase";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isHeroEntered, setIsHeroEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeroEntered(true), 40);
    return () => clearTimeout(timer);
  }, []);

  // "Why We Exist" 4 Core Values
  const coreValues = [
    {
      id: "01",
      title: "Clean & Safe",
      badge: "Purity Standard",
      desc: "Zero harmful toxins, parabens, or sulfates. Formulated with biocompatible ingredients rigorously tested for high dermatological tolerance.",
      icon: Leaf,
    },
    {
      id: "02",
      title: "Scientifically Formulated",
      badge: "Dermal Efficacy",
      desc: "Engineered with clinical-grade dermal actives, stable pH buffering, and verified cellular delivery mechanisms for real visible results.",
      icon: FlaskConical,
    },
    {
      id: "03",
      title: "Cruelty-Free",
      badge: "Ethical Beauty",
      desc: "100% ethical cosmetics manufacturing with absolute zero animal testing across all raw ingredients and finished production batches.",
      icon: Heart,
    },
    {
      id: "04",
      title: "FDCA-Compliant",
      badge: "Govt. Approved",
      desc: "Strict adherence to Gujarat FDCA regulatory guidelines, complete stability testing, and batch COA analytical verification.",
      icon: CheckCircle2,
    },
  ];

  // Infrastructure Highlights
  const infraFeatures = [
    {
      title: "Licensed by FDCA Gujarat",
      desc: "Fully certified cosmetic manufacturing adhering strictly to Food & Drugs Control Administration regulations",
      icon: ShieldCheck,
    },
    {
      title: "In-House R&D Laboratory",
      desc: "Dedicated cosmetic testing lab staffed by qualified analytical chemists and formulation scientists",
      icon: FlaskConical,
    },
    {
      title: "Strict Quality Control Protocols",
      desc: "Multi-point testing including pH stability, viscosity assays, microbiology, and thermal cycling",
      icon: FileCheck2,
    },
    {
      title: "GMP & Hygiene Standards Compliant",
      desc: "Controlled cleanroom compounding suites with advanced air filtration and sanitization protocols",
      icon: Sparkles,
    },
    {
      title: "Flexible MOQ for Startups",
      desc: "Low-barrier batch schedules engineered to incubate and scale emerging beauty and salon brands",
      icon: Box,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white font-sans antialiased">
      {/* Cleanroom Liquid Scroll Progress Bar */}
      <CleanroomScrollProgress />
      {/* 1. HERO SECTION WITH ARCHITECTURAL ROMAN ARCH CLEANROOM MONOLITH */}
      <section className="relative w-full pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#eef6fa] via-[#f4f9fd] to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[450px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Brand Story & Call to Actions with Downward Entrance Cascade */}
            <div
              className="lg:col-span-7 space-y-4 text-left will-change-transform"
              style={{
                transform: isHeroEntered ? "translateY(0px)" : "translateY(24px)",
                opacity: isHeroEntered ? 1 : 0,
                transition: "transform 850ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, opacity 850ms ease-out 100ms",
              }}
            >
              {/* Brand Micro-header with Glowing Pill */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/80 border border-sky-200/80 shadow-2xs backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#1b628b] animate-ping" />
                <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#164666]">
                  State-of-the-Art Compounding Campus • Ahmedabad, India
                </span>
              </div>

              {/* Signature Master Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f172a] font-normal leading-[1.14] tracking-tight">
                The Formulation Engine Behind India’s Leading{" "}
                <span className="font-serif italic font-light text-[#1b628b] block sm:inline">
                  Prestige Cosmetics.
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal pt-1">
                From novel active research and pH-buffered dermal stability to finished luxury packaging, Mani Lifestyle powers high-growth beauty startups, clinical dermatologists, and prestigious salon chains with low MOQ from 500 units.
              </p>

              {/* Dual Primary Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-sky-200" />
                  <span>Request Formulation Samples</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20learn%20more%20about%20your%20manufacturing%20campus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 bg-white hover:bg-slate-50 text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#164666]" />
                  <span>Call Regulatory Plant (+91 97246 81096)</span>
                </a>
              </div>

              {/* 4 Trust Highlights Micro-Strip */}
              <div className="pt-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-[#d2e7f5] shadow-xs">
                  <div className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl hover:bg-sky-50/70 transition-colors">
                    <FlaskConical className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                        Custom & White-Label
                      </div>
                      <div className="text-[9.5px] text-[#64748b] leading-tight">
                        ODM & OEM Active Lab
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl hover:bg-sky-50/70 transition-colors">
                    <Sparkles className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                        In-House R&D
                      </div>
                      <div className="text-[9.5px] text-[#64748b] leading-tight">
                        Formulation Scientists
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl hover:bg-sky-50/70 transition-colors">
                    <Box className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                        Flexible Low MOQ
                      </div>
                      <div className="text-[9.5px] text-[#64748b] leading-tight">
                        From 500 Units
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl hover:bg-sky-50/70 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                    <div>
                      <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                        WHO-GMP & FDCA
                      </div>
                      <div className="text-[9.5px] text-[#64748b] leading-tight">
                        ISO 22716 Cleanroom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Luxury Elliptical Cleanroom Oculus */}
            <div className="lg:col-span-5 flex justify-center">
              <AboutHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO (Who We Are - Crafting Excellence in Cosmetics) */}
      <section className="relative py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Editorial Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                WHO WE ARE
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Crafting Excellence in{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Cosmetics
              </span>
            </h2>

            {/* Subtle Underline Accent */}
            <div className="w-12 h-0.5 bg-[#1b628b] rounded-full mx-auto mt-3 mb-4" />

            <p className="text-sm sm:text-[15px] text-[#64748b] leading-relaxed font-normal">
              Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.
            </p>

            {/* 3 Cleanroom Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164666] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>WHO-GMP Plant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164666] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1b628b]" />
                <span>ISO 22716 Cleanroom</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164666] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full shadow-2xs">
                <FlaskConical className="w-3.5 h-3.5 text-[#164666]" />
                <span>Ahmedabad R&D Lab</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST (The 4 Core Value Boxes from the Website) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Purity, Transparency & Results
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Why We{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Exist
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              In a world full of over-promised beauty products, we stand for purity, transparency, and real results. Our mission is to empower brands with products that are:
            </p>
          </div>

          {/* 4 Core Pillars: Interactive Architectural Louvre Stage (100% Box-Free) */}
          <WhyWeExistStage />
        </div>
      </section>

      {/* 4. WHAT WE DO (End-to-End Capabilities - Styled Like Homepage's Services Grid) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                From Concept To Commercial Shelf
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              What We{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Do
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              From your initial idea to a finished product in your hand—we handle every stage of cosmetic development and manufacturing.
            </p>
          </div>

          {/* 4 Capabilities: Floating Biomorphic Liquid Droplets (100% Box-Free) */}
          <BiomorphicDropletsCapabilities />
        </div>
      </section>

      {/* 5. OUR PRODUCT EXPERTISE (8 Verticals Grid) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Skincare, Haircare & Wellness
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Our Product{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Expertise
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              We specialize in a wide range of personal care formulations. Every batch is rigorously batch-tested, safe, and commercial-ready.
            </p>
          </div>

          {/* 8 Roman Arch Apothecary Niches (Unique Architectural Shape) */}
          <RomanArchProductExpertise />
        </div>
      </section>

      {/* 6. OUR VISION (3 Foundational Principles - Open Architectural Showcase) */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fa] to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Strategic Commitment
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Our{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Vision
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              To be the most trusted cosmetic manufacturing partner in India by focusing relentlessly on three foundational principles
            </p>
          </div>

          {/* 3 Vision Principles - Open Tripartite Architecture with Scroll Stagger */}
          <VisionPrinciplesShowcase />
        </div>
      </section>

      {/* 7. OUR INFRASTRUCTURE (Balanced Editorial Showcase) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Quality & Compounding Excellence
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Our{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Infrastructure
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              Our state-of-the-art facility in Ahmedabad serves as the operational foundation for delivering pharmaceutical-grade quality, purity, and commercial scale
            </p>
          </div>

          {/* Balanced 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg group">
                <Image
                  src="/images/quality.png"
                  alt="Scientists in modern quality testing laboratory"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
              {infraFeatures.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#1b628b]/40 shadow-xs hover:shadow-sm transition-all duration-300"
                  >
                    {/* Icon Badge */}
                    <div className="w-9 h-9 rounded-lg bg-[#f0f7fb] border border-[#d2e7f5] text-[#164666] flex items-center justify-center shrink-0 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-all duration-300 mt-0.5">
                      <IconComp className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-[14.5px] font-semibold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT FACTORY CONSULTATION CTA BANNER (Exact Match with Homepage Style) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Line */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              Ready To Build Your Dream Personal Care Brand?
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
            Schedule a Direct Consultation{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              With Our Senior Team
            </span>
          </h2>

          {/* Signature Underline Accent */}
          <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Quote & Formulation Samples</span>
            </button>

            <a
              href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f8fafc] text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#164666]" />
              <span>Schedule Plant Tour (+91 97246 81096)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote RFQ Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

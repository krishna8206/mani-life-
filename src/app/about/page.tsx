"use client";

import React, { useState } from "react";
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

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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

  // "What We Do" Capabilities
  const capabilities = [
    {
      num: "01",
      title: "Custom Formulation (ODM R&D)",
      tagline: "Bespoke Cosmetic Science",
      desc: "Novel active research, texture optimization, scent profiling, and accelerated bench trials to create your unique proprietary formula.",
      icon: Lightbulb,
      link: "/services/custom-formulation",
    },
    {
      num: "02",
      title: "Private Labeling (OEM Fast Track)",
      tagline: "Market-Ready Bench Stock",
      desc: "Over 500+ clinically verified formulations ready for immediate bottling, custom packaging, and commercial launch with minimal lead time.",
      icon: Tags,
      link: "/services/private-label",
    },
    {
      num: "03",
      title: "Packaging & Component Sourcing",
      tagline: "Spec-to-Shelf Presentation",
      desc: "Amber droppers, airless vacuum pumps, aluminum tubes, recyclable jars, label design advisory, and leak-proof seal validation.",
      icon: Box,
      link: "/services/packaging-solutions",
    },
    {
      num: "04",
      title: "Licensing & Regulatory Support",
      tagline: "Complete Compliance Dossier",
      desc: "End-to-end FDCA documentation, legal CDSCO & INCI artwork clearance, batch certificates of analysis (COA), and e-commerce launch support.",
      icon: FileCheck2,
      link: "/certifications",
    },
  ];

  // "Our Product Expertise" 8 Verticals
  const expertiseItems = [
    {
      title: "Face Washes & Cleansers",
      subtitle: "pH 5.5 foaming, gel, & clarifying washes",
      icon: Droplets,
      href: "/products",
    },
    {
      title: "Serums & Clinical Actives",
      subtitle: "Vitamin C, Niacinamide, & barrier elixirs",
      icon: FlaskConical,
      href: "/products",
    },
    {
      title: "Scrubs & Exfoliators",
      subtitle: "AHA/BHA chemical peels & micro-polishes",
      icon: Sparkles,
      href: "/products",
    },
    {
      title: "Salon Professional Facial Kits",
      subtitle: "Multi-stage aesthetic treatment regimens",
      icon: Layers,
      href: "/products",
    },
    {
      title: "Hair Oils & Scalp Serums",
      subtitle: "Rosemary, Redensyl, & botanical infusions",
      icon: Beaker,
      href: "/products",
    },
    {
      title: "Sunscreens & Treatment Masks",
      subtitle: "SPF 50 fluid gels & hydrogel clay masks",
      icon: Sun,
      href: "/products",
    },
    {
      title: "Pre & Post Wax Care",
      subtitle: "Soothing aloe lotions & antiseptic cleansers",
      icon: Sparkle,
      href: "/products",
    },
    {
      title: "Herbal & Fruit Waxes",
      subtitle: "Low-temp peelable stripless waxes & roll-ons",
      icon: Leaf,
      href: "/products",
    },
  ];

  // Our Vision Principles
  const visionPrinciples = [
    {
      category: "Collaboration",
      title: "Trusted Partnership",
      desc: "We build enduring collaborations founded on transparency, reliable batch timelines, and shared growth with emerging startups and established beauty brands",
      highlight: "Reliable Batch Schedules & Support",
      icon: Handshake,
    },
    {
      category: "Formulation",
      title: "Innovative Quality",
      desc: "We deliver clean, biocompatible, and active-driven formulations with pharmaceutical-grade stability to help your brand lead the modern personal care market",
      highlight: "Lab-Verified Stability & Clean Actives",
      icon: Award,
    },
    {
      category: "Identity",
      title: "Brand-Centric Approach",
      desc: "Every product batch, texture, fragrance, and label is tailored to embody your distinct brand philosophy, aesthetic identity, and commercial price tier",
      highlight: "Custom Formulations Tailored to You",
      icon: Palette,
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
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#f0f7fb] border-b border-slate-200 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Brand Micro-header */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#1b628b]">
              About Mani Lifestyle • Ahmedabad, Gujarat
            </p>

            {/* Signature Title with Italic Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              The Engine Behind India’s Emerging{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Beauty & Wellness Brands
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl font-normal pt-1">
              A certified cosmetic manufacturing company and specialized research laboratory based in Ahmedabad, Gujarat. We engineer high-performance skincare and haircare solutions for startups, clinical dermatologists, and established salon chains.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Request Formulation Samples
              </button>

              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20learn%20more%20about%20your%20manufacturing%20campus."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Our Plant (+91 97246 81096)
              </a>
            </div>

            {/* 4 Trust Highlights Card Strip */}
            <div className="pt-4 mt-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-[#d9ecf7] max-w-2xl shadow-xs">
                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <FlaskConical className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      Custom &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      White-Label
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <Sparkles className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      In-House
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      R&D Lab
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <Box className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      Flexible Low MOQ
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      Startup Friendly
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1 px-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                      WHO-GMP &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      ISO 22716
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO (Who We Are - Crafting Excellence in Cosmetics) */}
      <section className="relative py-14 sm:py-16 lg:py-18 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
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

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.
            </p>
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

          {/* 4 Value Cards Grid (Authentic to the Website) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
            {coreValues.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#1b628b]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:border-[#164666] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300 mb-5">
                    <IconComp className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-[#0f172a] group-hover:text-[#1b628b] transition-colors tracking-tight leading-snug mb-2.5">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed font-normal flex-1">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
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

          {/* 4 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group relative bg-[#f8fafc] rounded-2xl p-7 border border-slate-200/90 hover:border-[#1b628b]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#d9ecf7] text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-[#1b628b] transition-colors">
                      {cap.num}
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold text-[#1b628b] mb-1">
                    {cap.tagline}
                  </div>

                  <h3 className="text-base font-semibold text-[#0f172a] group-hover:text-[#1b628b] transition-colors tracking-tight leading-snug mb-2.5">
                    {cap.title}
                  </h3>

                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
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

          {/* 8 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {expertiseItems.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#1b628b]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:border-[#164666] group-hover:text-white transition-all duration-300 mb-4">
                    <IconComp className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#0f172a] group-hover:text-[#1b628b] transition-colors leading-snug mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>
                </Link>
              );
            })}
          </div>
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

          {/* 3 Vision Principles - Open Tripartite Architecture with Subtle Vertical Hairlines */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-slate-200/90">
              {visionPrinciples.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 transition-all duration-300"
                  >
                    {/* Floating Emblem Badge */}
                    <div className="relative w-16 h-16 rounded-2xl bg-white border border-[#d2e7f5] text-[#164666] flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] group-hover:shadow-md transition-all duration-300">
                      <IconComp className="w-7 h-7" strokeWidth={1.65} />
                    </div>

                    {/* Category Label */}
                    <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.24em] font-semibold text-[#1b628b] mb-2">
                      {item.category}
                    </span>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-[22px] font-serif text-[#0f172a] font-medium tracking-tight mb-3 group-hover:text-[#164666] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Editorial Accent Dash */}
                    <div className="w-8 h-[1.5px] bg-[#1b628b]/40 mx-auto mb-4 group-hover:w-12 group-hover:bg-[#164666] transition-all duration-300" />

                    {/* Narrative Description */}
                    <p className="text-[14px] text-slate-600 leading-relaxed font-normal mb-6 max-w-sm mx-auto">
                      {item.desc}
                    </p>

                    {/* Hallmark Tag (Clean, Unboxed, NO Dot) */}
                    <div className="mt-auto pt-2">
                      <span className="text-[11.5px] font-medium tracking-wide text-[#164666] bg-[#f0f7fb] border border-[#d9ecf7] px-4 py-1.5 rounded-full inline-block">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

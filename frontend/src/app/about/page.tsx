"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
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

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
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
  Phone,
  Send,
  Layers,
  Sparkle,
  Check,
};

const defaultAboutState = {
  hero: {
    kicker: "State-of-the-Art Compounding Campus • Ahmedabad, India",
    headlinePart1: "The Formulation Engine Behind India’s Leading ",
    headlineHighlight: "Prestige Cosmetics.",
    subheadline:
      "From novel active research and pH-buffered dermal stability to finished luxury packaging, Mani Lifestyle powers high-growth beauty startups, clinical dermatologists, and prestigious salon chains with low MOQ from 500 units.",
    primaryCtaText: "Request Formulation Samples",
    secondaryCtaText: "Call Regulatory Plant (+91 97246 81096)",
    phone: "+91 97246 81096",
    image: "/images/cleanroom-lab.jpg",
    imageAlt: "Mani Lifestyle Sterile Cleanroom Laboratory and Compounding Campus",
    trustHighlights: [
      { id: "1", title: "Custom & White-Label", subtitle: "ODM & OEM Active Lab", icon: "FlaskConical" },
      { id: "2", title: "In-House R&D", subtitle: "Formulation Scientists", icon: "Sparkles" },
      { id: "3", title: "Flexible Low MOQ", subtitle: "From 500 Units", icon: "Box" },
      { id: "4", title: "WHO-GMP & FDCA", subtitle: "ISO 22716 Cleanroom", icon: "ShieldCheck" },
    ],
  },
  whoWeAre: {
    eyebrow: "WHO WE ARE",
    title: "Crafting Excellence in",
    highlight: "Cosmetics",
    description:
      "Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.",
    badges: [
      { id: "1", title: "WHO-GMP Plant", icon: "CheckCircle2" },
      { id: "2", title: "ISO 22716 Cleanroom", icon: "ShieldCheck" },
      { id: "3", title: "Ahmedabad R&D Lab", icon: "FlaskConical" },
    ],
  },
  whyWeExist: {
    eyebrow: "Purity, Transparency & Results",
    title: "Why We",
    highlight: "Exist",
    description:
      "In a world full of over-promised beauty products, we stand for purity, transparency, and real results. Our mission is to empower brands with products that are:",
    pillars: [
      {
        id: "01",
        num: "01",
        title: "Clean & Safe",
        subtitle: "Dermatological Biocompatibility",
        tag: "Toxin-Free Standard",
        desc: "Zero harmful toxins, parabens, sulfates, or artificial sensitizers. Formulated strictly with biocompatible botanical pharmacology tested for high human epidermal tolerance.",
        icon: "Leaf",
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
        icon: "FlaskConical",
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
        icon: "Heart",
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
        icon: "CheckCircle2",
        stats: [
          { label: "Licensing Body", value: "FDCA Gujarat (GC/2040)" },
          { label: "Cleanroom Standard", value: "ISO 22716" },
          { label: "Batch Assay", value: "Full COA" },
        ],
      },
    ],
  },
  whatWeDo: {
    eyebrow: "From Concept To Commercial Shelf",
    title: "What We",
    highlight: "Do",
    description:
      "From your initial idea to a finished product in your hand—we handle every stage of cosmetic development and manufacturing.",
    capabilities: [
      {
        num: "01",
        stageLabel: "STAGE 01",
        title: "Custom Formulation",
        subtitle: "ODM • Bespoke R&D Science",
        tagline: "Active Formulation Science",
        desc: "Novel active research, texture viscosity optimization, scent profiling, and accelerated bench trials to create your unique proprietary formula.",
        highlight: "Novel Bio-Actives",
        icon: "Lightbulb",
      },
      {
        num: "02",
        stageLabel: "STAGE 02",
        title: "Private Labeling",
        subtitle: "OEM • Made in India Production",
        tagline: "Market-Ready Bench Stock",
        desc: "Over 500+ clinically verified formulations ready for immediate bottling, custom packaging, and commercial launch with minimal lead time.",
        highlight: "500+ Proven Bases",
        icon: "Tags",
      },
      {
        num: "03",
        stageLabel: "STAGE 03",
        title: "Component Sourcing",
        subtitle: "Custom Indian Packaging & Jars",
        tagline: "Spec-to-Shelf Presentation",
        desc: "Amber droppers, airless vacuum pumps, aluminum tubes, recyclable jars, label design advisory, and leak-proof seal validation.",
        highlight: "Eco & Luxury Glass",
        icon: "Box",
      },
      {
        num: "04",
        stageLabel: "STAGE 04",
        title: "Regulatory Support",
        subtitle: "Gujarat FDCA & COA Clearance",
        tagline: "Complete Compliance Dossier",
        desc: "End-to-end FDCA documentation, legal CDSCO & INCI artwork clearance, batch certificates of analysis (COA), and e-commerce launch support.",
        highlight: "FDCA & COA Clearance",
        icon: "FileCheck2",
      },
    ],
  },
  productExpertise: {
    eyebrow: "Skincare, Haircare & Wellness",
    title: "Our Product",
    highlight: "Expertise",
    description:
      "We specialize in a wide range of personal care formulations. Every batch is rigorously batch-tested, safe, and commercial-ready.",
    niches: [
      {
        title: "Face Washes & Cleansers",
        subtitle: "pH 5.5 foaming, gel, & clarifying washes",
        icon: "Droplets",
        href: "/products/cleansers-toners",
      },
      {
        title: "Serums & Clinical Actives",
        subtitle: "Vitamin C, Niacinamide, & barrier elixirs",
        icon: "FlaskConical",
        href: "/products/face-serums",
      },
      {
        title: "Scrubs & Exfoliators",
        subtitle: "AHA/BHA chemical peels & micro-polishes",
        icon: "Sparkles",
        href: "/products/creams-moisturizers",
      },
      {
        title: "Salon Professional Facial Kits",
        subtitle: "Multi-stage aesthetic treatment regimens",
        icon: "Layers",
        href: "/products/clay-sheet-masks",
      },
      {
        title: "Hair Oils & Scalp Serums",
        subtitle: "Rosemary, Redensyl, & botanical infusions",
        icon: "Beaker",
        href: "/products/hair-care-shampoos",
      },
      {
        title: "Sunscreens & Treatment Masks",
        subtitle: "SPF 50 fluid gels & hydrogel clay masks",
        icon: "Sun",
        href: "/products/clay-sheet-masks",
      },
      {
        title: "Pre & Post Wax Care",
        subtitle: "Soothing aloe lotions & antiseptic cleansers",
        icon: "Sparkle",
        href: "/products/essential-oils",
      },
      {
        title: "Herbal & Fruit Waxes",
        subtitle: "Low-temp peelable stripless waxes & roll-ons",
        icon: "Leaf",
        href: "/products/essential-oils",
      },
    ],
  },
  vision: {
    eyebrow: "Strategic Commitment",
    title: "Our",
    highlight: "Vision",
    description:
      "To be the most trusted cosmetic manufacturing partner in India by focusing relentlessly on three foundational principles",
    principles: [
      {
        category: "Collaboration",
        title: "Trusted Partnership",
        desc: "We build enduring collaborations founded on transparency, reliable batch timelines, and shared growth with emerging startups and established beauty brands",
        highlight: "Reliable Batch Schedules & Support",
        icon: "Handshake",
      },
      {
        category: "Formulation",
        title: "Innovative Quality",
        desc: "We deliver clean, biocompatible, and active-driven formulations with pharmaceutical-grade stability to help your brand lead the modern personal care market",
        highlight: "Lab-Verified Stability & Clean Actives",
        icon: "Award",
      },
      {
        category: "Identity",
        title: "Brand-Centric Approach",
        desc: "Every product batch, texture, fragrance, and label is tailored to embody your distinct brand philosophy, aesthetic identity, and commercial price tier",
        highlight: "Custom Formulations Tailored to You",
        icon: "Palette",
      },
    ],
  },
  infrastructure: {
    eyebrow: "Quality & Compounding Excellence",
    title: "Our",
    highlight: "Infrastructure",
    description:
      "Our state-of-the-art facility in Ahmedabad serves as the operational foundation for delivering pharmaceutical-grade quality, purity, and commercial scale",
    image: "/images/quality.png",
    imageAlt: "Scientists in modern quality testing laboratory",
    features: [
      {
        title: "Licensed by FDCA Gujarat",
        desc: "Fully certified cosmetic manufacturing adhering strictly to Food & Drugs Control Administration regulations",
        icon: "ShieldCheck",
      },
      {
        title: "In-House R&D Laboratory",
        desc: "Dedicated cosmetic testing lab staffed by qualified analytical chemists and formulation scientists",
        icon: "FlaskConical",
      },
      {
        title: "Strict Quality Control Protocols",
        desc: "Multi-point testing including pH stability, viscosity assays, microbiology, and thermal cycling",
        icon: "FileCheck2",
      },
      {
        title: "GMP & Hygiene Standards Compliant",
        desc: "Controlled cleanroom compounding suites with advanced air filtration and sanitization protocols",
        icon: "Sparkles",
      },
      {
        title: "Flexible MOQ for Startups",
        desc: "Low-barrier batch schedules engineered to incubate and scale emerging beauty and salon brands",
        icon: "Box",
      },
    ],
  },
  consultationCta: {
    eyebrow: "Ready To Build Your Dream Personal Care Brand?",
    title: "Schedule a Direct Consultation With Our Senior Team",
    highlight: "With Our Senior Team",
    description:
      "Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.",
    primaryBtnText: "Request Custom Quote & Formulation Samples",
    secondaryBtnText: "Schedule Plant Tour (+91 97246 81096)",
    phone: "+91 97246 81096",
    whatsappUrl:
      "https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant.",
  },
};

export default function AboutPage() {
  const [data, setData] = useState(defaultAboutState);
  const [isCmsLoaded, setIsCmsLoaded] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isHeroEntered, setIsHeroEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeroEntered(true), 40);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/about`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json && json.hero) {
            setData((prev) => ({
              ...prev,
              ...json,
              hero: { ...prev.hero, ...(json.hero || {}) },
              whoWeAre: { ...prev.whoWeAre, ...(json.whoWeAre || {}) },
              whyWeExist: { ...prev.whyWeExist, ...(json.whyWeExist || {}) },
              whatWeDo: { ...prev.whatWeDo, ...(json.whatWeDo || {}) },
              productExpertise: { ...prev.productExpertise, ...(json.productExpertise || {}) },
              vision: { ...prev.vision, ...(json.vision || {}) },
              infrastructure: { ...prev.infrastructure, ...(json.infrastructure || {}) },
              consultationCta: { ...prev.consultationCta, ...(json.consultationCta || {}) },
            }));
          }
        }
      } catch (err) {
        // Safe fallback to default data
        console.warn("Using offline/fallback About Us data:", err);
      } finally {
        setIsCmsLoaded(true);
      }
    };
    fetchAboutData();
  }, []);

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
              {/* Brand Micro-header: Editorial Left-Rule */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[1.5px] bg-[#164666] shrink-0" />
                <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#164666]">
                  {data.hero.kicker}
                </span>
              </div>

              {/* Signature Master Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-cormorant font-semibold text-[#091e2f] leading-[1.08] tracking-tight">
                {data.hero.headlinePart1}{" "}
                <span className="font-cormorant font-semibold text-[#164666] block sm:inline">
                  {data.hero.headlineHighlight}
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal pt-1">
                {data.hero.subheadline}
              </p>

              {/* Dual Primary Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-sky-200" />
                  <span>{data.hero.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href={`https://wa.me/${data.hero.phone.replace(/[^0-9]/g, "")}?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20learn%20more%20about%20your%20manufacturing%20campus.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2 px-5 sm:px-6 py-3.5 bg-white hover:bg-slate-50 text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#164666]" />
                  <span>{data.hero.secondaryCtaText}</span>
                </a>
              </div>

              {/* Trust Highlights Micro-Strip */}
              <div className="pt-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-[#d2e7f5] shadow-xs">
                  {data.hero.trustHighlights.map((node, nIdx) => {
                    const IconComp = (node.icon && iconMap[node.icon]) || FlaskConical;
                    return (
                      <div key={node.id || nIdx} className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl hover:bg-sky-50/70 transition-colors">
                        <IconComp className="w-4 h-4 text-[#164666] shrink-0" strokeWidth={1.8} />
                        <div>
                          <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] leading-tight">
                            {node.title}
                          </div>
                          <div className="text-[9.5px] text-[#64748b] leading-tight">
                            {node.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Luxury Elliptical Cleanroom Oculus */}
            <div className="lg:col-span-5 flex justify-center">
              {isCmsLoaded ? (
                <AboutHeroVisual image={data.hero.image} alt={data.hero.imageAlt} />
              ) : (
                <div className="w-full max-w-[320px] sm:max-w-[345px] lg:max-w-[365px] h-[400px] sm:h-[475px] rounded-[130px] bg-white/60 border border-sky-200/70 animate-pulse" />
              )}
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
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.whoWeAre.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.whoWeAre.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.whoWeAre.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
              {data.whoWeAre.description}
            </p>

            {/* Cleanroom Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
              {data.whoWeAre.badges.map((badge, bIdx) => {
                const IconComp = (badge.icon && iconMap[badge.icon]) || CheckCircle2;
                return (
                  <span
                    key={badge.id || bIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164666] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full shadow-2xs"
                  >
                    <IconComp className="w-3.5 h-3.5 text-teal-600" />
                    <span>{badge.title}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST (The 4 Core Value Pillars) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.whyWeExist.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.whyWeExist.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.whyWeExist.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {data.whyWeExist.description}
            </p>
          </div>

          {/* Interactive Architectural Louvre Stage */}
          <WhyWeExistStage pillars={data.whyWeExist.pillars} />
        </div>
      </section>

      {/* 4. WHAT WE DO (End-to-End Capabilities) */}
      <section className="relative py-18 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.whatWeDo.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.whatWeDo.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.whatWeDo.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {data.whatWeDo.description}
            </p>
          </div>

          {/* 4 Capabilities: Floating Biomorphic Liquid Droplets */}
          <BiomorphicDropletsCapabilities capabilities={data.whatWeDo.capabilities} />
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
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.productExpertise.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.productExpertise.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.productExpertise.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {data.productExpertise.description}
            </p>
          </div>

          {/* 8 Roman Arch Apothecary Niches */}
          <RomanArchProductExpertise niches={data.productExpertise.niches} />
        </div>
      </section>

      {/* 6. OUR VISION (3 Foundational Principles) */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fa] to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.vision.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.vision.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.vision.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {data.vision.description}
            </p>
          </div>

          {/* 3 Vision Principles */}
          <VisionPrinciplesShowcase principles={data.vision.principles} />
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
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {data.infrastructure.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {data.infrastructure.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {data.infrastructure.highlight}
              </span>
            </h2>

            {/* Architectural Rule Accent */}
            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {data.infrastructure.description}
            </p>
          </div>

          {/* Balanced 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg group">
                {isCmsLoaded ? (
                  <Image
                    src={data.infrastructure.image || "/images/quality.png"}
                    alt={data.infrastructure.imageAlt || "Scientists in modern quality testing laboratory"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                ) : (
                  <div className="w-full h-full min-h-[380px] bg-slate-200/70 animate-pulse" />
                )}
              </div>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
              {data.infrastructure.features.map((feat, fIdx) => {
                const IconComp = (feat.icon && iconMap[feat.icon]) || ShieldCheck;
                return (
                  <div
                    key={feat.title || fIdx}
                    className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#1b628b]/40 shadow-xs hover:shadow-sm transition-all duration-300"
                  >
                    {/* Icon Badge */}
                    <div className="w-9 h-9 rounded-lg bg-[#f0f7fb] border border-[#d2e7f5] text-[#164666] flex items-center justify-center shrink-0 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-all duration-300 mt-0.5">
                      <IconComp className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-[17px] font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-snug">
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

      {/* 8. DIRECT FACTORY CONSULTATION CTA BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Line */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              {data.consultationCta.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e] shrink-0" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
            {data.consultationCta.title}
          </h2>

          {/* Architectural Rule Accent */}
          <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            {data.consultationCta.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{data.consultationCta.primaryBtnText}</span>
            </button>

            <a
              href={data.consultationCta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f8fafc] text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#164666]" />
              <span>{data.consultationCta.secondaryBtnText}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote RFQ Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

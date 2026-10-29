"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Layers,
  FlaskConical,
  Package,
  Award,
  Globe2,
  Clock,
  Send,
  Droplet,
  HeartHandshake,
  Sparkle,
  Phone,
  Check,
  Star,
  Beaker,
  Settings,
  Box,
  PackageCheck,
  CircleDollarSign,
  Microscope,
  Headphones,
  ClipboardCheck,
  Factory,
  Truck,
  ChevronRight,
} from "lucide-react";
import { productCategories, sampleProducts } from "@/data/products";
import { certificationsData } from "@/data/certifications";
import { faqsData } from "@/data/faqs";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState("skincare-serums");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Quick estimator state
  const [estCategory, setEstCategory] = useState("Clinical Serums & Dermal Actives");
  const [estUnits, setEstUnits] = useState("1000");
  const [estType, setEstType] = useState("Private Label (OEM)");
  const [estPackaging, setEstPackaging] = useState("Amber Glass Dropper Pipette (30ml)");

  const currentProducts = sampleProducts.filter(
    (p) => p.categorySlug === selectedCategoryTab
  );

  const trustReasons = [
    {
      id: "01",
      title: "Low Minimum Order Quantity",
      desc: "Start your brand with confidence — we support small batches to make it easy and affordable for startups.",
      icon: PackageCheck,
      link: "/services/private-label",
    },
    {
      id: "02",
      title: "Transparent Pricing",
      desc: "Clear, upfront pricing with no hidden costs — so you can plan and budget with full confidence.",
      icon: CircleDollarSign,
      link: "/quote-estimator",
    },
    {
      id: "03",
      title: "Wide Product Range",
      desc: "From skincare to haircare, we offer a vast range of personal care and beauty products to meet diverse market demands.",
      icon: Sparkles,
      link: "/products",
    },
    {
      id: "04",
      title: "In-house R&D and Quality Team",
      desc: "Our expert team works in-house to develop new formulas and maintain strict quality control at every stage.",
      icon: Microscope,
      link: "/innovation",
    },
    {
      id: "05",
      title: "GMP Certified Facility",
      desc: "Our manufacturing units meet strict GMP standards, ensuring safe, clean, and quality production every step of the way.",
      icon: ShieldCheck,
      link: "/certifications",
    },
    {
      id: "06",
      title: "Dedicated Customer Support",
      desc: "Our team is here to help — from your first inquiry to final delivery, we offer reliable, responsive support.",
      icon: Headphones,
      link: "/contact",
    },
  ];

  // 6 Core Product Categories directly from manilifestyle.com
  const coreCategories = [
    {
      num: "01",
      name: "Face Washes",
      tagline: "pH 5.5 Foaming & Clarifying Washes",
      description: "Sulfate-free foaming cleansers, tea tree acne control washes, arabica coffee de-tan gels, and gentle AHA/BHA exfoliators.",
      tags: ["Salicylic Acid", "Tea Tree Oil", "AHA / BHA", "Centella Asiatica"],
      moq: "Flexible Low MOQ",
      slug: "cleansers-toners",
      image: "/images/categories/cat-face-wash.jpg",
    },
    {
      num: "02",
      name: "Serums",
      tagline: "Clinical Actives & Dermal Elixirs",
      description: "High-concentration stabilized actives designed for deep transdermal delivery, hyperpigmentation, and cellular repair.",
      tags: ["20% Vitamin C", "10% Niacinamide", "Retinol 0.5%", "Hyaluronic Acid"],
      moq: "Flexible Low MOQ",
      slug: "skincare-serums",
      image: "/images/categories/cat-serum.jpg",
    },
    {
      num: "03",
      name: "Hair Oil",
      tagline: "Root-Strengthening & Scalp Therapies",
      description: "Cold-pressed pure botanical hair oils targeting shedding, thinning, and split ends with nourishing herbal infusions.",
      tags: ["Pure Rosemary", "Redensyl", "Biotin", "Moroccan Argan"],
      moq: "Flexible Low MOQ",
      slug: "haircare-treatments",
      image: "/images/categories/cat-hair-oil.jpg",
    },
    {
      num: "04",
      name: "Skin Cream",
      tagline: "Barrier Repair & Deep Hydration",
      description: "Velvety ceramide barrier creams, ultra-sheer gel hydrators, brightening day soufflés, and restorative night balms.",
      tags: ["Ceramides 1,3,6", "Cica Extract", "Matrixyl Peptides", "Squalane"],
      moq: "Flexible Low MOQ",
      slug: "suncare-moisturizers",
      image: "/images/categories/cat-skin-cream.jpg",
    },
    {
      num: "05",
      name: "Essential Oil",
      tagline: "100% Pure Therapeutic Extracts",
      description: "Steam-distilled and cold-pressed pure therapeutic grade essential oils for cosmetic, scalp, and aromatherapeutic use.",
      tags: ["French Lavender", "Tea Tree Oil", "Eucalyptus", "Pure Rosehip"],
      moq: "Flexible Low MOQ",
      slug: "body-bath-wellness",
      image: "/images/categories/cat-essential-oil.jpg",
    },
    {
      num: "06",
      name: "Face Sheet Mask",
      tagline: "Bio-Cellulose & Instant Glow Infusions",
      description: "Pre-soaked bio-cellulose and microfiber sheet masks drenched in concentrated multi-molecular hydration serums.",
      tags: ["Triple HA", "Glutathione", "Marine Collagen", "Niacinamide"],
      moq: "Flexible Low MOQ",
      slug: "masks-lip-eye",
      image: "/images/categories/cat-sheet-mask.jpg",
    },
  ];

  const processSteps = [
    {
      step: 1,
      label: "STEP 1",
      title: "Requirement Discussion",
    },
    {
      step: 2,
      label: "STEP 2",
      title: "Formula Modulation",
    },
    {
      step: 3,
      label: "STEP 3",
      title: "Packaging Design",
    },
    {
      step: 4,
      label: "STEP 4",
      title: "Product Confirmation",
    },
    {
      step: 5,
      label: "STEP 5",
      title: "Manufacturing",
    },
    {
      step: 6,
      label: "STEP 6",
      title: "Packaging Inspection",
    },
    {
      step: 7,
      label: "STEP 7",
      title: "Verify & Delivery",
    },
  ];

  const servicesList = [
    {
      num: "01",
      title: "Private Label",
      tagline: "Proven Indian Formulations",
      description: "Fast-track your brand launch using 500+ clinically verified stock formulas optimized for Indian skin & hair, with custom packaging and startup-friendly Low MOQs.",
      image: "/images/mani-raw/service1.jpg",
      badge: "Flexible Low MOQ",
      tags: ["500+ Proven Formulas", "Fast 21-Day Launch", "Low Startup MOQ"],
      link: "/services/private-label",
    },
    {
      num: "02",
      title: "Contract Manufacturing",
      tagline: "Commercial Scale Compounding",
      description: "High-capacity automated rotary tube filling, vacuum homogenization, and batch COA analytical release from our Ahmedabad manufacturing facility.",
      image: "/images/mani-raw/service2.jpg",
      badge: "GMP & ISO 22716",
      tags: ["50,000kg/mo Scale", "Rotary Filling", "Class 100K Cleanrooms"],
      link: "/services/contract-manufacturing",
    },
    {
      num: "03",
      title: "Custom Formulations",
      tagline: "Bespoke Cosmetic Science & R&D",
      description: "Novel active chemistry tailored to your brief with in-house bench sampling, thermal stability testing, and 100% intellectual property ownership.",
      image: "/images/mani-raw/service3.jpg",
      badge: "100% IP Transfer",
      tags: ["Bespoke Active R&D", "3 Lab Bench Trials", "Full Formulation IP"],
      link: "/services/custom-formulation",
    },
    {
      num: "04",
      title: "End To End Brand Launching Service",
      tagline: "Concept to Pan-India Delivery",
      description: "Complete launch support: primary packaging sourcing, legal CDSCO & INCI artwork clearance, stability testing, and secure doorstep logistics across India.",
      image: "/images/mani-raw/service4.jpg",
      badge: "Complete Brand Concierge",
      tags: ["Packaging Sourcing", "CDSCO & INCI Dossier", "Pan-India Logistics"],
      link: "/services",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white">
      {/* 1. HERO SECTION - SEAMLESS INTEGRATED LUXURY HERO (HEADER FLOATS NATIVELY INSIDE HERO) */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] lg:h-screen lg:max-h-[880px] flex items-center bg-[#f0f7fb] border-b border-slate-200 overflow-hidden">
        {/* Right side: exact user-provided image (mani-hero-right-side.jpg) */}
        {/* Generous responsive container anchored to bottom-right ensures the cream jar, Erlenmeyer flask, and stirring rod are 100% visible with zero cut-off */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[74%] xl:w-[68%] 2xl:w-[62%] z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/mani-hero-right-side.jpg"
              alt="Mani Lifestyle - Skincare & Cosmetic Formulations"
              fill
              priority
              className="object-cover object-[right_bottom]"
              quality={95}
            />
            {/* Subtle soft gradient fade on the left edge so the image merges seamlessly into the light blue background */}
            <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-[#f0f7fb] via-[#f0f7fb]/85 to-transparent pointer-events-none" />
            {/* Mobile/tablet gradient overlay so typography remains 100% crisp and readable */}
            <div className="absolute inset-0 bg-[#f0f7fb]/85 sm:bg-[#f0f7fb]/75 lg:opacity-0 pointer-events-none" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-14 w-full pt-20 sm:pt-24 lg:pt-16 pb-8">
          <div className="max-w-lg lg:max-w-xl xl:max-w-[560px] space-y-3.5 sm:space-y-4 lg:space-y-4 xl:space-y-4.5">
            {/* Brand Micro-header */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Certified Cosmetics Manufacturer • Ahmedabad, India
              </span>
            </div>

            {/* Master Headline (Exact copy from reference) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.75rem] font-serif text-[#0f172a] font-normal leading-[1.08] tracking-tight">
              Bring Your<br />
              Beauty Brand<br />
              <span className="italic font-light text-[#1b628b]">to Life.</span>
            </h1>

            {/* Subtext - Authentic Company Profile */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed max-w-lg font-normal">
              Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>Request Custom Formulation Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="px-6 py-3.5 bg-white/90 hover:bg-white text-[#0f172a] font-medium text-xs sm:text-sm rounded-lg border border-[#c8d9e6] hover:border-[#164666] text-center transition-all shadow-xs backdrop-blur-xs"
              >
                Explore Our Capabilities
              </Link>
            </div>

            {/* 4 Trust Highlights - Aligned with Skincare, Haircare, Startups & Salons */}
            <div className="pt-4 border-t border-[#c8d9e6]/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 max-w-lg lg:max-w-xl">
                <Link
                  href="/services/custom-formulation"
                  className="flex items-center gap-2.5 group transition-colors py-0.5"
                >
                  <FlaskConical className="w-4 h-4 text-[#164666] shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] leading-tight">
                      Custom &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      White-Label
                    </div>
                  </div>
                </Link>

                <Link
                  href="/products"
                  className="flex items-center gap-2.5 group transition-colors py-0.5 sm:border-l sm:border-[#c8d9e6]/70 sm:pl-3"
                >
                  <Sparkles className="w-4 h-4 text-[#164666] shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] leading-tight">
                      Skincare &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      Haircare Lines
                    </div>
                  </div>
                </Link>

                <Link
                  href="/quote-estimator"
                  className="flex items-center gap-2.5 group transition-colors py-0.5 sm:border-l sm:border-[#c8d9e6]/70 sm:pl-3"
                >
                  <Box className="w-4 h-4 text-[#164666] shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] leading-tight">
                      Low 500 MOQ
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      For Startups & Salons
                    </div>
                  </div>
                </Link>

                <Link
                  href="/certifications"
                  className="flex items-center gap-2.5 group transition-colors py-0.5 sm:border-l sm:border-[#c8d9e6]/70 sm:pl-3"
                >
                  <ShieldCheck className="w-4 h-4 text-[#164666] shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] leading-tight">
                      ISO 22716 &
                    </div>
                    <div className="text-[10px] text-[#64748b] leading-tight">
                      WHO-GMP Certified
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REASONS TO TRUST MANI LIFESTYLE (The Mani Advantage - Core Pillars from manilifestyle.com) */}
      <section id="capabilities" className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (Consistent Signature Brand Style) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                The Mani Advantage
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Reason to Trust{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Mani Lifestyle.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              Discover why brands choose Mani Lifestyle for their success.
            </p>
          </div>

          {/* 6 Core Pillars Grid (Clean, Minimal, Modern & Professional) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
            {trustReasons.map((reason) => {
              const IconComp = reason.icon;
              return (
                <Link
                  key={reason.id}
                  href={reason.link}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#1b628b]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:border-[#164666] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300 mb-5">
                    <IconComp className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17.5px] font-semibold text-[#0f172a] group-hover:text-[#1b628b] transition-colors tracking-tight leading-snug mb-2.5">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed font-normal flex-1">
                    {reason.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.2 CERTIFIED FOR QUALITY AND RELIABILITY (Authentic Regulatory Logos Showcase) */}
      <section id="certifications" className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
                Accredited Quality Standards
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Certified for Quality and{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Reliability.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3 mb-3" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality and safety benchmarks.
            </p>
          </div>

          {/* 5 Original Logo Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
            {/* 1. GMP Quality */}
            <div className="group bg-[#f8fafc] hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#164666] shadow-2xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 bg-white/60 rounded-xl group-hover:bg-white transition-colors">
                  <Image
                    src="/images/certifications/gmp.png"
                    alt="GMP Quality Certification"
                    width={110}
                    height={110}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1">
                  GMP Certified
                </h3>
                <span className="text-[10.5px] font-semibold text-[#1b628b] uppercase tracking-wider mb-1 block">
                  Cleanroom Standards
                </span>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  Good Manufacturing Practice for cosmetic compounding & safety.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-700 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Facility</span>
              </div>
            </div>

            {/* 2. ISO 9001:2015 */}
            <div className="group bg-[#f8fafc] hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#164666] shadow-2xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 bg-white/60 rounded-xl group-hover:bg-white transition-colors">
                  <Image
                    src="/images/certifications/iso.png"
                    alt="ISO 9001:2015 Certification"
                    width={120}
                    height={100}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1">
                  ISO 9001:2015
                </h3>
                <span className="text-[10.5px] font-semibold text-[#1b628b] uppercase tracking-wider mb-1 block">
                  QMS Accredited
                </span>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  Standardized batch repeatability & quality management systems.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-700 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Facility</span>
              </div>
            </div>

            {/* 3. Ministry of AYUSH */}
            <div className="group bg-[#f8fafc] hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#164666] shadow-2xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 bg-white/60 rounded-xl group-hover:bg-white transition-colors">
                  <Image
                    src="/images/certifications/ministry.png"
                    alt="Ministry of Ayush Certification"
                    width={140}
                    height={90}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1">
                  Ministry of AYUSH
                </h3>
                <span className="text-[10.5px] font-semibold text-[#1b628b] uppercase tracking-wider mb-1 block">
                  Govt. of India License
                </span>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  Certified Ayurvedic, herbal, and natural cosmetic drug approval.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-700 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Facility</span>
              </div>
            </div>

            {/* 4. Animal Test-Free (PETA) */}
            <div className="group bg-[#f8fafc] hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#164666] shadow-2xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 bg-white/60 rounded-xl group-hover:bg-white transition-colors">
                  <Image
                    src="/images/certifications/peta.png"
                    alt="PETA Animal Test-Free Certification"
                    width={140}
                    height={80}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1">
                  Animal Test-Free
                </h3>
                <span className="text-[10.5px] font-semibold text-[#1b628b] uppercase tracking-wider mb-1 block">
                  PETA Certified
                </span>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  100% cruelty-free cosmetic formulations and ethical raw sourcing.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-700 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Facility</span>
              </div>
            </div>

            {/* 5. US FDA Registered */}
            <div className="group bg-[#f8fafc] hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#164666] shadow-2xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between items-center text-center">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 bg-white/60 rounded-xl group-hover:bg-white transition-colors">
                  <Image
                    src="/images/certifications/fda.png"
                    alt="US FDA Registered Facility"
                    width={130}
                    height={90}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1">
                  US FDA Registered
                </h3>
                <span className="text-[10.5px] font-semibold text-[#1b628b] uppercase tracking-wider mb-1 block">
                  Global Export
                </span>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                  Facility establishment registered for seamless international trade.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-700 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 OUR SERVICES SECTION (4-Column Premium Editorial Showcase) */}
      <section id="services" className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14 bg-[#f8fafc] overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#164666]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Certified Cosmetics Manufacturer • Ahmedabad, India
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Our{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Services.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3 mb-3" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              Crafting your brand&apos;s future with custom, innovative cosmetic solutions — tailored specifically for Indian skincare, haircare, and personal care brands.
            </p>
          </div>

          {/* 4 Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {servicesList.map((service) => (
              <Link
                key={service.num}
                href={service.link}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-[#164666] shadow-xs hover:shadow-xl hover:shadow-slate-200/90 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Area with 4:3 Aspect Ratio — Clean & Uncluttered */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Single Clean Necessary Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-lg bg-white/95 backdrop-blur-md border border-white/80 text-[#164666] font-mono font-bold text-xs shadow-xs group-hover:bg-[#164666] group-hover:text-white transition-colors duration-300">
                    {service.num}
                  </div>
                </div>

                {/* Card Content with Strict Baseline Alignment & Perfect Modern Typography */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="flex-1 flex flex-col">
                    {/* Micro Tagline */}
                    <span className="text-[10.5px] font-bold tracking-[0.14em] text-[#1b628b] uppercase mb-1.5 block">
                      {service.tagline}
                    </span>

                    {/* Service Title — Bold, Crisp Sans-Serif */}
                    <h3 className="text-lg sm:text-[1.18rem] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight min-h-[46px] flex items-center mb-2.5">
                      {service.title}
                    </h3>

                    {/* Description — Readable, Comfortable Typography */}
                    <p className="text-[13px] text-slate-500 leading-relaxed font-normal mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] sm:text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-sky-50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-[#164666] group-hover:text-[#0f172a] transition-colors tracking-wide">
                      Explore Capabilities
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#f0f7fb] text-[#164666] group-hover:bg-[#164666] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Indian Manufacturing Trust Bar */}
          <div className="mt-12 sm:mt-14 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#164666] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#164666]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#0f172a]">
                  State-of-the-Art Compounding Campus • Ahmedabad, Gujarat
                </h4>
                <p className="text-[11px] text-slate-500">
                  WHO-GMP & ISO 22716 accredited cleanrooms with CDSCO legal formulation clearance for Indian brands.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs rounded-xl shadow-md shadow-[#164666]/15 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Custom Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES - IN YOUR BRAND (Seamlessly Merged & Symmetrically Aligned) */}
      <section id="categories" className="relative pt-6 sm:pt-8 lg:pt-10 pb-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#164666]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (Harmonized with Our Services) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Core Formulation Verticals • Spec-To-Shelf
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Product Categories{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                in Your Brand.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3 mb-3" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              We are proud to collaborate with industry-leading partners to create an extensive range of trusted products — formulated and packaged to your brand&apos;s exact specifications.
            </p>
          </div>

          {/* Symmetrical 6-Card Grid: Synchronized Baseline Height & Matched to Services Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {coreCategories.map((cat) => (
              <Link
                key={cat.num}
                href={`/products/${cat.slug}`}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-[#164666] shadow-xs hover:shadow-xl hover:shadow-slate-200/90 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Product Photography Stage — Clean 4:3 Aspect Ratio with Only Necessary Number Pill */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Single Clean Necessary Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-lg bg-white/95 backdrop-blur-md border border-white/80 text-[#164666] font-mono font-bold text-xs shadow-xs group-hover:bg-[#164666] group-hover:text-white transition-colors duration-300">
                    {cat.num}
                  </div>
                </div>

                {/* Minimal & Elegant Content — Strict Baseline Alignment Identical to Services */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="flex-1 flex flex-col">
                    {/* Micro Tagline */}
                    <span className="text-[10.5px] font-bold tracking-[0.14em] text-[#1b628b] uppercase mb-1.5 block">
                      {cat.tagline}
                    </span>

                    {/* Category Title — Bold, Crisp Sans-Serif with Fixed Minimum Height */}
                    <h3 className="text-lg sm:text-[1.18rem] font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight min-h-[32px] sm:min-h-[36px] flex items-center mb-2.5">
                      {cat.name}
                    </h3>

                    {/* Description with Uniform Baseline */}
                    <p className="text-[13px] text-slate-500 leading-relaxed font-normal min-h-[58px] sm:min-h-[62px] mb-4 flex-1">
                      {cat.description}
                    </p>

                    {/* Clean Active Ingredient Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[56px] sm:min-h-[58px] content-start">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-sky-50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row Matching Services Exactly */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-[#164666] group-hover:text-[#0f172a] transition-colors tracking-wide">
                      Inspect Formulations
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#f0f7fb] text-[#164666] group-hover:bg-[#164666] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* 5. FROM IDEA TO REALITY (Properly Aligned 7-Step Process Pipeline) */}
      <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0f7fb]/70 to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Spec-To-Shelf Journey • 7 Sequential Steps
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              From Idea{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                to Reality.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3 mb-3" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal">
              From vision to finished formula — we create custom skincare products that embody your brand&apos;s identity. Your ideas, tailored to perfection and transformed into market-ready products.
            </p>
          </div>

          {/* 7 Aligned Process Cards Pipeline */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 lg:gap-2.5 xl:gap-3.5 items-stretch">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-5 lg:px-2.5 lg:py-4 xl:p-5 border border-slate-200/90 hover:border-[#164666]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 w-[calc(50%-0.4rem)] sm:w-[calc(33.333%-0.6rem)] md:w-[calc(25%-0.6rem)] lg:flex-1 shrink-0"
              >
                {/* Connecting Chevron (Desktop Only) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white border border-slate-200 text-[#1b628b] items-center justify-center shadow-2xs pointer-events-none">
                    <ChevronRight className="w-2.5 h-2.5 text-[#1b628b]" strokeWidth={2.5} />
                  </div>
                )}

                {/* STEP NUMBER BADGE */}
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] text-[#164666] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/80 uppercase mb-3 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-colors duration-300">
                  {step.label}
                </span>

                {/* ICON CONTAINER */}
                <div className="w-12 h-12 rounded-xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center mb-3 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                  {step.step === 1 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12h7a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5H15l-3.5 3v-3H10a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 10 12z" />
                      <path d="M28 8h7a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-1v3l-3.5-3H28a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 28 8z" />
                      <circle cx="15.5" cy="30" r="4" />
                      <path d="M8 41v-2a6 6 0 0 1 12 0v2" />
                      <circle cx="32.5" cy="30" r="4" />
                      <path d="M26 41v-2a6 6 0 0 1 12 0v2" />
                    </svg>
                  )}
                  {step.step === 2 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h8" />
                      <path d="M21 7v9l-11 19a4 4 0 0 0 3.5 6h21a4 4 0 0 0 3.5-6L27 16V7" />
                      <path d="M15 28c3 2 6-1 9 1s6-1 9 1" />
                      <circle cx="37" cy="31" r="2.8" />
                      <circle cx="41" cy="37" r="2.2" />
                      <circle cx="36" cy="39" r="2.2" />
                    </svg>
                  )}
                  {step.step === 3 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M24 7l15 8.5v17L24 41l-15-8.5v-17L24 7z" />
                      <path d="M24 7v17m0 0l15-8.5m-15 8.5l-15-8.5" />
                      <path d="M20 9.2l8 4.5m-8 4.3l8 4.5" />
                    </svg>
                  )}
                  {step.step === 4 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 7h18l9 9v23a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z" />
                      <path d="M30 7v9h9" />
                      <path d="M15 17h8m-8 6h12m-12 6h8" />
                      <circle cx="33" cy="33" r="6" />
                      <path d="M30.5 33l2 2 3.5-4" />
                    </svg>
                  )}
                  {step.step === 5 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="28" cy="18" r="5" />
                      <path d="M28 9v2.5m0 13v2.5M19 18h2.5m13 0H37m-11.4-6.4l1.8 1.8m6.4 6.4l1.8 1.8m-10 0l1.8-1.8m6.4-6.4l1.8-1.8" />
                      <path d="M8 35c4-1 9-2 15-2 3.5 0 6 1 9 1l7-1a3 3 0 0 1 3.5 3.5l-1 2.5a5 5 0 0 1-4.5 3.5H23l-7-3-8-1" />
                    </svg>
                  )}
                  {step.step === 6 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 7h12v4H18z" />
                      <rect x="11" y="9" width="26" height="32" rx="3" />
                      <path d="M16 19h3m-3 6h3m-3 6h3" />
                      <path d="M22 19h9m-9 6h9m-9 6h5" />
                      <path d="M34 22l6-6a2 2 0 0 0-2.8-2.8l-6 6 1.4 1.4 1.4 1.4z" />
                      <path d="M31.2 20.6l-1.2 3.8 3.8-1.2" />
                    </svg>
                  )}
                  {step.step === 7 && (
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 8l13 7.5v15l-13 7.5-13-7.5v-15L22 8z" />
                      <path d="M22 8v15m0 0l13-7.5m-13 7.5l-13-7.5" />
                      <circle cx="35" cy="33" r="6.5" />
                      <path d="M32 33l2 2 4-4" />
                    </svg>
                  )}
                </div>

                {/* STEP TITLE */}
                <h3 className="text-xs sm:text-[13px] xl:text-[14px] font-semibold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight min-h-[36px] flex items-center justify-center text-center">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="relative py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
                Technical & Commercial Guidance
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
              Frequently Asked{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Questions.
              </span>
            </h2>

            {/* Signature Underline Accent */}
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-3.5 mb-3.5" />

            <p className="text-sm sm:text-[15px] text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              Clear, transparent answers about our cosmetic formulation capabilities, cleanroom compounding, low startup MOQs, and regulatory compliance.
            </p>
          </div>

          {/* FAQ Accordion List with Modern Sans-Serif Typography */}
          <div className="space-y-3.5">
            {faqsData.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${isOpen
                      ? "bg-white border-[#164666]/50 shadow-md shadow-sky-950/5 ring-1 ring-[#164666]/10"
                      : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs"
                    }`}
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3.5 sm:gap-4 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 flex-1 pr-2">
                      {/* Numeric Index Pill */}
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${isOpen
                            ? "bg-[#164666] text-white"
                            : "bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-[#e1f0fa]"
                          }`}
                      >
                        0{index + 1}
                      </span>

                      {/* Question — Crisp Modern Sans-Serif */}
                      <span
                        className={`text-sm sm:text-[15.5px] font-semibold leading-snug tracking-tight transition-colors ${isOpen ? "text-[#164666]" : "text-[#0f172a] group-hover:text-[#164666]"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Circular Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                          ? "bg-[#164666] text-white rotate-180 shadow-xs"
                          : "bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-[#164666] group-hover:text-white"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer Box */}
                  {isOpen && (
                    <div className="pl-13 sm:pl-15 pr-5 sm:pr-6 pb-5 pt-1 text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-[#fbfcfd]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. DIRECT FACTORY CONSULTATION CTA BANNER (Aligned Light Luxury Showcase) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Line */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              Ready To Formulate Your Next Bestselling Line?
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.15] tracking-tight">
            Schedule a Direct Consultation{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              With Our Senior Team.
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
              onClick={() => setIsQuoteModalOpen(true)}
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
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedCategory="Clinical Face Serums"
      />
    </div>
  );
}

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
      title: "Requirement Discussion",
      desc: "We analyze your benchmark texture, desired actives (Vit C, Niacinamide, Salicylic), target retail pricing, and packaging concepts.",
      time: "Days 1 - 3",
    },
    {
      step: 2,
      title: "Formula Modulation & Bench Sampling",
      desc: "Our Ahmedabad R&D laboratory compounds 3 prototype test batches delivered to your doorstep for sensory and skin-feel approval.",
      time: "Days 4 - 10",
    },
    {
      step: 3,
      title: "Stability & Compatibility Chamber Tests",
      desc: "Accelerated thermal stress incubations (40°C / 75% RH) guarantee 24 to 36 months of formulation shelf stability.",
      time: "Days 11 - 18",
    },
    {
      step: 4,
      title: "Packaging Sourcing & Label Compliance",
      desc: "Container selection (amber droppers, airless pumps, tubes) and legal INCI ingredient disclosures for domestic and export compliance.",
      time: "Days 15 - 22",
    },
    {
      step: 5,
      title: "Cleanroom Compounding & Filling",
      desc: "High-shear vacuum homogenization, nitrogen-purged rotary filling, ultrasonic tube sealing, and induction capping in Class 100K cleanrooms.",
      time: "Days 20 - 28",
    },
    {
      step: 6,
      title: "Verify, COA Release & Doorstep Delivery",
      desc: "Heavy metal, microbiological, and viscosity assays with official Certificate of Analysis (COA) release and palletized dispatch.",
      time: "Days 25 - 32",
    },
  ];

  const servicesList = [
    {
      num: "01",
      title: "Private Label",
      tagline: "Turnkey Formulation Portfolio",
      description: "Fast-track product launch using 500+ clinically tested, pre-stabilized stock formulas ready for custom branding and quick packaging rollout.",
      image: "/images/mani-raw/service1.jpg",
      badge: "Flexible Low MOQ",
      badgeColor: "text-emerald-700 border-emerald-200/80 bg-emerald-50/90",
      tags: ["500+ Stock Formulas", "Fast 21-Day Launch", "Custom Branding"],
      link: "/services/private-label",
    },
    {
      num: "02",
      title: "Contract Manufacturing",
      tagline: "Class 100K High-Volume Filling",
      description: "High-capacity automated rotary tube filling, vacuum homogenization, and batch COA analytical release engineered for commercial scale.",
      image: "/images/mani-raw/service2.jpg",
      badge: "ISO & GMP Certified",
      badgeColor: "text-sky-800 border-sky-200/80 bg-sky-50/90",
      tags: ["50,000kg/mo Scale", "Rotary Filling", "Microbial Lab"],
      link: "/services/contract-manufacturing",
    },
    {
      num: "03",
      title: "Custom Formulations",
      tagline: "Bespoke Cosmetic Science & R&D",
      description: "Novel active chemistry tailored to your brief with in-house bench sampling, thermal stability testing, and 100% intellectual property ownership.",
      image: "/images/mani-raw/service3.jpg",
      badge: "100% IP Ownership",
      badgeColor: "text-amber-800 border-amber-200/80 bg-amber-50/90",
      tags: ["Bespoke Chemistry", "Lab Bench Trials", "100% IP Transfer"],
      link: "/services/custom-formulation",
    },
    {
      num: "04",
      title: "End To End Brand Launching Service",
      tagline: "From Concept to Doorstep Delivery",
      description: "Full-spectrum concierge service: packaging engineering, legal INCI artwork disclosures, regulatory dossier filing, and Pan-India doorstep delivery.",
      image: "/images/mani-raw/service4.jpg",
      badge: "360° Concierge",
      badgeColor: "text-indigo-800 border-indigo-200/80 bg-indigo-50/90",
      tags: ["Packaging Sourcing", "Label Dossier", "Pan-India Logistics"],
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

      {/* 2.5 OUR SERVICES SECTION (Premium Editorial B2B Showcase) */}
      <section id="services" className="py-24 sm:py-28 lg:py-32 bg-[#0c1a27] relative overflow-hidden">
        {/* Atmospheric Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(27,98,139,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(22,70,102,0.12)_0%,_transparent_55%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1b628b]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1b628b]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header — Premium Dark Theme */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#1b628b]/60" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#5a9abb]">
                What We Offer
              </span>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#1b628b]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif text-white font-normal leading-[1.12] tracking-tight">
              Our{" "}
              <span className="font-serif italic font-light text-[#5aadda]">
                Services.
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-[#1b628b] to-[#5aadda] rounded-full mx-auto mt-5 mb-5" />

            <p className="text-sm sm:text-[15px] text-[#8ba4b8] max-w-xl mx-auto leading-relaxed font-normal">
              End-to-end cosmetic manufacturing solutions — from custom R&D formulation to Pan-India doorstep delivery.
            </p>
          </div>

          {/* Premium 2×2 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 max-w-6xl mx-auto">
            {servicesList.map((service, idx) => (
              <Link
                key={service.num}
                href={service.link}
                className="service-card-premium group relative bg-[#111f2e]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col border border-white/[0.06] hover:border-[#1b628b]/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(27,98,139,0.25)]"
              >
                {/* Shimmer overlay */}
                <div className="shimmer-overlay rounded-2xl z-30 pointer-events-none" />

                {/* Image Area — Cinematic Widescreen */}
                <div className="relative w-full h-52 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Cinematic Gradient Layers */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a27] via-[#0c1a27]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a27]/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1b628b]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating Number Badge — Glassmorphic */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sm font-bold text-white/90 shadow-lg group-hover:bg-[#1b628b]/70 group-hover:border-[#1b628b]/50 transition-all duration-500">
                    {service.num}
                  </div>

                  {/* Service Badge — Top Right */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-[10.5px] font-semibold text-white/85 tracking-wide shadow-lg group-hover:bg-white/15 group-hover:text-white transition-all duration-400">
                    {service.badge}
                  </div>

                  {/* Tagline Over Image — Bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5aadda] group-hover:bg-[#7ec8f0] transition-colors shadow-[0_0_8px_rgba(90,173,218,0.5)]" />
                      <span className="text-[10.5px] font-semibold tracking-[0.15em] text-[#a8d4ef] uppercase">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Service Title */}
                    <h3 className="text-xl sm:text-[1.35rem] font-semibold text-white group-hover:text-[#7ec8f0] transition-colors leading-snug tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-sm text-[#8ba4b8] leading-relaxed font-normal mb-5">
                      {service.description}
                    </p>

                    {/* Premium Pill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10.5px] font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] text-[#8bb8d4] border border-white/[0.08] group-hover:bg-[#1b628b]/25 group-hover:text-[#a8d4ef] group-hover:border-[#1b628b]/30 transition-all duration-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#5a9abb] group-hover:text-[#7ec8f0] transition-colors tracking-wide">
                      Explore Service
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-[#1b628b] text-[#5a9abb] group-hover:text-white flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(27,98,139,0.4)]">
                      <ArrowRight className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-45" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Section CTA */}
          <div className="text-center mt-14 sm:mt-16">
            <p className="text-sm text-[#6b8fa8] mb-5 font-normal">
              Not sure which service fits your brand? Let&apos;s find the perfect solution together.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#1b628b] to-[#164666] hover:from-[#2478a5] hover:to-[#1b628b] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#1b628b]/20 hover:shadow-xl hover:shadow-[#1b628b]/30 transition-all duration-400 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES - IN YOUR BRAND (Interactive 6-Vertical Showcase) */}
      <section id="categories" className="py-24 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#164666]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header (Exact copy from manilifestyle.com) */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#164666] bg-white border border-[#cbe4f4] shadow-2xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#1b628b] animate-pulse" />
              <span>Core Formulation Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[#0f172a] font-normal tracking-tight leading-tight">
              Product Categories{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                in Your Brand.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3.5 leading-relaxed max-w-2xl mx-auto">
              We are proud to collaborate with industry-leading partners to create an extensive range of trusted products:
            </p>
          </div>

          {/* Symmetrical 6-Card Grid: Perfectly Aligned with Real Product Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreCategories.map((cat) => {
              return (
                <Link
                  key={cat.num}
                  href={`/products/${cat.slug}`}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-[#164666]/40 shadow-xs hover:shadow-2xl hover:shadow-[#164666]/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
                >
                  {/* Product Photography Stage */}
                  <div className="relative w-full h-56 sm:h-60 bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Badges */}
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-xs font-bold text-[#164666] border border-slate-200/80 shadow-xs">
                      {cat.num}
                    </div>
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-semibold text-emerald-700 border border-emerald-200/60 shadow-xs">
                      {cat.moq}
                    </div>
                  </div>

                  {/* Minimal & Elegant Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[10px] font-semibold tracking-wider text-[#1b628b] uppercase mb-1">
                        {cat.tagline}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-tight">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-2 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Clean Active Ingredient Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-slate-100">
                        {cat.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-sky-50 text-[10px] font-medium text-[#164666] border border-[#cbe4f4]/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inspect Formulations CTA */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#164666] group-hover:text-[#10364f]">
                      <span>Inspect Formulations</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* 5. FROM IDEA TO REALITY (6-Stage Spec-to-Shelf Journey) */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#164666] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              From Idea to Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a] mt-3">
              The 6-Step Manufacturing Process
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Our transparent contract compounding pipeline guarantees quality verification, benchmark matching, and doorstep delivery in 21–30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-[#164666] transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-sky-50 text-[#164666] border border-sky-200 font-bold text-xs flex items-center justify-center font-serif group-hover:bg-[#164666] group-hover:text-white transition-colors">
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#164666] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#0f172a]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 hover:text-[#164666] font-bold rounded-xl border border-slate-200 text-xs transition-colors shadow-xs"
            >
              <span>Explore Detailed Cleanroom Protocols</span>
              <ArrowRight className="w-4 h-4 text-[#164666]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CLIENT & SALON TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#164666] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              Verified Partner Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a] mt-3">
              Trusted by Salon Chains & D2C Beauty Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-xs space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#334155] leading-relaxed italic">
                &ldquo;Mani Lifestyle formulated our 10% Niacinamide and 2% Salicylic serums with bench samples delivered in just 7 days. Their 500-unit starting MOQ allowed us to test and sell out our first batch within 3 weeks.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-[#0f172a]">Aarav Mehta</div>
                <div className="text-[11px] text-[#64748b]">Founder, D2C Active Skincare Brand</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-xs space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#334155] leading-relaxed italic">
                &ldquo;Their Brazilian stripless hot film wax beads and 6-step professional facial kits are staples across our 18 salon outlets. The low melting point and skin comfort are consistently outstanding.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-[#0f172a]">Meera Kapoor</div>
                <div className="text-[11px] text-[#64748b]">Managing Director, Luxury Salon Chain</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-xs space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#334155] leading-relaxed italic">
                &ldquo;The WHO-GMP and ISO 22716 export documentation provided by Mani Lifestyle made our overseas retail registration completely seamless. Truly exceptional manufacturing partners.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-[#0f172a]">Rohit Singhania</div>
                <div className="text-[11px] text-[#64748b]">Cosmetic Brand Director, UAE & India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#164666] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              Clear Technical Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-[#0f172a] text-sm sm:text-base hover:text-[#164666] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#164666] shrink-0 transition-transform duration-200 ${
                      activeFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaqIndex === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 bg-[#f8fafc]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DIRECT FACTORY CONSULTATION CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0c2436] via-[#091b29] to-[#0c2436] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-semibold border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Ready to formulate your next bestselling cosmetic line?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Schedule a Direct Consultation With Our Senior Compounding Team
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-transform hover:scale-105 border border-sky-400/30"
            >
              Request Custom Quote & Formulation Samples
            </button>

            <a
              href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              Schedule Plant Tour (+91 97246 81096)
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

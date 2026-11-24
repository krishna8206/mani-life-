"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  FlaskConical,
  Send,
  Phone,
  Box,
  PackageCheck,
  CircleDollarSign,
  Microscope,
  Headphones,
  ChevronRight,
  Layers,
  Gift,
} from "lucide-react";
import { faqsData as initialFaqsData } from "@/data/faqs";
import QuoteModal from "@/components/QuoteModal";
import { certificationsData } from "@/data/certifications";
import CertificatePlaqueCard from "@/components/CertificatePlaqueCard";
import SpatialFormularyStageShowcase from "@/components/SpatialFormularyStageShowcase";
import ServiceOrganicCard from "@/components/ServiceOrganicCard";

function PumpBottleIcon({
  className = "w-5 h-5",
  strokeWidth = 1.75,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2h5" />
      <path d="M12 2v3" />
      <path d="M8 5h8" />
      <rect x="7" y="8" width="10" height="13" rx="2.5" />
      <path d="M12 5v3" />
    </svg>
  );
}

const iconMap: Record<string, any> = {
  PackageCheck,
  CircleDollarSign,
  Sparkles,
  Microscope,
  ShieldCheck,
  Headphones,
  FlaskConical,
  Box,
  Layers,
  Gift,
  PumpBottleIcon,
};

const serviceWavePresets = [
  {
    cardRadius: "42px 70px 48px 60px / 55px 45px 65px 50px",
    objectPosition: "center 42%",
    clipPathD: "M 0 0 L 0 0.88 C 0.25 0.78, 0.60 0.88, 1 0.84 L 1 0 Z",
    strokePath: "M 0 88 C 25 78, 60 88, 100 84",
  },
  {
    cardRadius: "60px 45px 55px 42px / 48px 65px 45px 58px",
    objectPosition: "center 45%",
    clipPathD: "M 0 0 L 0 0.84 C 0.35 0.90, 0.70 0.78, 1 0.86 L 1 0 Z",
    strokePath: "M 0 84 C 35 90, 70 78, 100 86",
  },
  {
    cardRadius: "48px 65px 40px 68px / 60px 48px 55px 45px",
    objectPosition: "center 42%",
    clipPathD: "M 0 0 L 0 0.86 C 0.30 0.78, 0.70 0.82, 1 0.88 L 1 0 Z",
    strokePath: "M 0 86 C 30 78, 70 82, 100 88",
  },
  {
    cardRadius: "65px 42px 58px 45px / 45px 58px 48px 62px",
    objectPosition: "center 35%",
    clipPathD: "M 0 0 L 0 0.85 C 0.28 0.77, 0.65 0.89, 1 0.83 L 1 0 Z",
    strokePath: "M 0 85 C 28 77, 65 89, 100 83",
  },
];

const fallbackTrustReasons = [
  {
    id: "01",
    num: "01",
    title: "Low Minimum Order Quantity",
    desc: "Start your brand with confidence — we support small batches to make it easy and affordable for startups.",
    icon: "PackageCheck",
    link: "/services/private-label",
  },
  {
    id: "02",
    num: "02",
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden costs — so you can plan and budget with full confidence.",
    icon: "CircleDollarSign",
    link: "/quote-estimator",
  },
  {
    id: "03",
    num: "03",
    title: "Wide Product Range",
    desc: "From skincare to haircare, we offer a vast range of personal care and beauty products to meet diverse market demands.",
    icon: "Sparkles",
    link: "/products",
  },
  {
    id: "04",
    num: "04",
    title: "In-house R&D and Quality Team",
    desc: "Our expert team works in-house to develop new formulas and maintain strict quality control at every stage.",
    icon: "Microscope",
    link: "/innovation",
  },
  {
    id: "05",
    num: "05",
    title: "GMP Certified Facility",
    desc: "Our manufacturing units meet strict GMP standards, ensuring safe, clean, and quality production every step of the way.",
    icon: "ShieldCheck",
    link: "/certifications",
  },
  {
    id: "06",
    num: "06",
    title: "Dedicated Customer Support",
    desc: "Our team is here to help — from your first inquiry to final delivery, we offer reliable, responsive support.",
    icon: "Headphones",
    link: "/contact",
  },
];

const fallbackCategories = [
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

const fallbackProcessSteps = [
  { step: 1, label: "STEP 1", title: "Requirement Discussion" },
  { step: 2, label: "STEP 2", title: "Formula Modulation" },
  { step: 3, label: "STEP 3", title: "Packaging Design" },
  { step: 4, label: "STEP 4", title: "Product Confirmation" },
  { step: 5, label: "STEP 5", title: "Manufacturing" },
  { step: 6, label: "STEP 6", title: "Packaging Inspection" },
  { step: 7, label: "STEP 7", title: "Verify & Delivery" },
];

const fallbackOrganicServices = [
  {
    id: "1",
    num: "01",
    title: "Private Label",
    desc: "Launch your own brand with our proven, market-ready formulations.",
    image: "/images/services-v3/v3_img1.jpg",
    link: "/services/private-label",
  },
  {
    id: "2",
    num: "02",
    title: "Contract Manufacturing",
    desc: "End-to-end manufacturing with advanced technology and strict quality.",
    image: "/images/services-v3/v3_img2.jpg",
    link: "/services/contract-manufacturing",
  },
  {
    id: "3",
    num: "03",
    title: "Custom Formulations",
    desc: "Tailor-made formulations to match your brand vision and market needs.",
    image: "/images/services-v3/v3_img3.jpg",
    link: "/services/custom-formulation",
  },
  {
    id: "4",
    num: "04",
    title: "End-to-End Brand Launch",
    desc: "From formulation to packaging, we handle everything for your brand.",
    image: "/images/services-v3/v3_img4.jpg",
    link: "/services",
  },
];

export default function HomePage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedCategory, setQuotePreselectedCategory] = useState("Face Serums");

  const [isHeroEntered, setIsHeroEntered] = useState(false);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  // Dynamic CMS Data from MongoDB Atlas (with graceful fallback)
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    const fetchHomeCMS = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/home`, {
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
            if (data && (data.servicesSection || data.hero || data.categoriesSection)) {
              setCmsData(data);
            }
          }
        } catch {
          // Safe offline / fallback operation
        }
      };
      fetchHomeCMS();
    }, []);

  const handleOpenQuote = (categoryOrProduct?: string) => {
    if (categoryOrProduct) {
      setQuotePreselectedCategory(categoryOrProduct);
    }
    setIsQuoteModalOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsHeroEntered(true), 40);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = servicesSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Resolved dynamic values
  const heroKicker = cmsData?.hero?.kicker || "Certified Cosmetics Manufacturer • Ahmedabad, India";
  const heroHeadline = cmsData?.hero?.headline || "Bring Your Beauty Brand to Life.";
  const heroSubheadline =
    cmsData?.hero?.subheadline ||
    "Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.";
  const heroPrimaryCta = cmsData?.hero?.primaryCtaText || "Request Custom Formulation Quote";
  const heroSecondaryCta = cmsData?.hero?.secondaryCtaText || "Explore Our Capabilities";
  const heroHighlights = cmsData?.hero?.trustHighlights || [
    { id: "1", title: "Custom &", subtitle: "White-Label", icon: "FlaskConical", link: "/services/custom-formulation" },
    { id: "2", title: "Skincare &", subtitle: "Haircare Lines", icon: "Sparkles", link: "/products" },
    { id: "3", title: "Low 500 MOQ", subtitle: "For Startups & Salons", icon: "Box", link: "/quote-estimator" },
    { id: "4", title: "ISO 22716 &", subtitle: "WHO-GMP Certified", icon: "ShieldCheck", link: "/certifications" },
  ];

  const trustReasons = cmsData?.trustPillars?.items || fallbackTrustReasons;
  const trustHeader = cmsData?.trustPillars?.header || {
    eyebrow: "The Mani Advantage",
    title: "Reason to Trust Mani Lifestyle.",
    desc: "Discover why brands choose Mani Lifestyle for their success.",
  };

  const certifications = cmsData?.certificationsSection?.items?.length
    ? cmsData.certificationsSection.items
    : certificationsData;
  const certificationsHeader = cmsData?.certificationsSection?.header || {
    eyebrow: "Accredited Quality Standards",
    title: "Certified for Quality and Reliability.",
    desc: "Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality and safety benchmarks.",
  };

  const services = cmsData?.servicesSection?.items || fallbackOrganicServices;
  const servicesHeader = cmsData?.servicesSection?.header || {
    eyebrow: "WHAT WE DO",
    title: "Our Services",
    desc: "Formulating & manufacturing high-performance cosmetic solutions in our Ahmedabad cleanroom facility — specifically developed for Indian skin tones, hair textures, and tropical climate conditions.",
  };

  const processSteps = cmsData?.processSection?.items || fallbackProcessSteps;
  const processHeader = cmsData?.processSection?.header || {
    eyebrow: "Spec-To-Shelf Journey • 7 Sequential Steps",
    title: "From Idea to Reality.",
    desc: "From vision to finished formula — we create custom skincare products that embody your brand identity. Your ideas, tailored to perfection and transformed into market-ready products.",
  };

  const coreCategories = cmsData?.categoriesSection?.items || fallbackCategories;
  const categoriesHeader = cmsData?.categoriesSection?.header || {
    eyebrow: "Core Formulation Verticals • Spec-To-Shelf",
    title: "Product Categories in Your Brand.",
    desc: "We are proud to collaborate with industry-leading partners to create an extensive range of trusted products — formulated and packaged to your brand exact specifications.",
  };

  const faqs = cmsData?.faqsSection?.items || initialFaqsData;
  const faqsHeader = cmsData?.faqsSection?.header || {
    eyebrow: "Technical & Commercial Guidance",
    title: "Frequently Asked Questions.",
    desc: "Clear, transparent answers about our cosmetic formulation capabilities, cleanroom compounding, low startup MOQs, and regulatory compliance.",
  };

  const ctaBanner = cmsData?.ctaBanner || {
    eyebrow: "Ready To Formulate Your Next Bestselling Line?",
    heading: "Schedule a Direct Consultation With Our Senior Team.",
    desc: "Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.",
    buttonText: "Request Custom Quote & Formulation Samples",
    phone: "+91 97246 81096",
    whatsappText: "Hello Mani Lifestyle, I am interested in visiting your Ahmedabad cosmetic plant.",
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center bg-[#f0f7fb] border-b border-slate-200 overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[70%] xl:w-[65%] 2xl:w-[60%] z-0 pointer-events-none overflow-hidden will-change-transform"
          style={{
            perspective: "1200px",
            transformOrigin: "right center",
            transform: !isHeroEntered
              ? "perspective(1200px) rotateY(-18deg) scale(0.94)"
              : "perspective(1200px) rotateY(0deg) scale(1)",
            opacity: isHeroEntered ? 1 : 0,
            transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms ease-out",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/mani-hero-right-side.jpg"
              alt="Mani Lifestyle - Skincare & Cosmetic Formulations"
              fill
              priority
              className="object-cover object-[right_center]"
              quality={95}
            />
            <div className="absolute inset-y-0 left-0 w-36 sm:w-52 lg:w-72 bg-gradient-to-r from-[#f0f7fb] via-[#f0f7fb]/90 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[#f0f7fb]/85 sm:bg-[#f0f7fb]/75 lg:opacity-0 pointer-events-none" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-14 w-full pt-20 sm:pt-24 lg:pt-22 pb-8 sm:pb-10 lg:pb-9">
          <div
            className="max-w-lg lg:max-w-xl xl:max-w-[560px] space-y-3 sm:space-y-3.5 lg:space-y-3.5 xl:space-y-4 will-change-transform"
            style={{
              transform: isHeroEntered ? "translateY(0px)" : "translateY(28px)",
              opacity: isHeroEntered ? 1 : 0,
              transition: "transform 850ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, opacity 850ms ease-out 100ms",
            }}
          >
            {/* Brand Micro-header */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {heroKicker}
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[2.95rem] xl:text-[3.65rem] 2xl:text-[4.15rem] font-cormorant font-semibold text-[#091e2f] leading-[1.04] tracking-tight">
              {heroHeadline}
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-[14px] xl:text-[15px] text-slate-700 leading-relaxed max-w-lg font-normal">
              {heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 sm:py-3.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>{heroPrimaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="px-6 py-3 sm:py-3.5 bg-white/90 hover:bg-white text-[#0f172a] font-medium text-xs sm:text-sm rounded-lg border border-[#c8d9e6] hover:border-[#164666] text-center transition-all shadow-xs backdrop-blur-xs"
              >
                {heroSecondaryCta}
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-3.5 sm:pt-4 border-t border-[#c8d9e6]/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 max-w-lg lg:max-w-xl">
                {heroHighlights.map((hl: any, idx: number) => {
                  const IconC = iconMap[hl.icon] || Sparkles;
                  return (
                    <Link
                      key={hl.id || idx}
                      href={hl.link || "/services"}
                      className={`flex items-center gap-2.5 group transition-colors py-0.5 ${idx > 0 ? "sm:border-l sm:border-[#c8d9e6]/70 sm:pl-3" : ""
                        }`}
                    >
                      <IconC className="w-4 h-4 text-[#164666] shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.8} />
                      <div>
                        <div className="text-[11px] sm:text-xs font-semibold text-[#0f172a] group-hover:text-[#164666] leading-tight">
                          {hl.title}
                        </div>
                        <div className="text-[10px] text-[#64748b] leading-tight">
                          {hl.subtitle}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. HERO PRODUCT CATEGORIES (Spatial Formulary Architectural Stage) */}
      <SpatialFormularyStageShowcase onOpenQuote={handleOpenQuote} data={cmsData?.spatialStage} />

      {/* 2. REASONS TO TRUST MANI LIFESTYLE (The Mani Advantage) */}
      <section id="capabilities" className="relative py-18 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {trustHeader.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {trustHeader.title}
            </h2>

            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {trustHeader.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
            {trustReasons.map((reason: any) => {
              const IconComp = iconMap[reason.icon] || Sparkles;
              return (
                <Link
                  key={reason.id || reason.num}
                  href={reason.link || "/services"}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#1b628b]/40 shadow-xs hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:border-[#164666] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300 mb-5">
                    <IconComp className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors tracking-tight leading-snug mb-2.5">
                    {reason.title}
                  </h3>

                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed font-normal flex-1">
                    {reason.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.2 CERTIFIED FOR QUALITY AND RELIABILITY (1:1 Reference Target Design with Glowing Cloud Atmospheric Background) */}
      <section id="certifications" className="relative py-18 sm:py-22 lg:py-26 bg-gradient-to-b from-[#e8f3fb] via-[#f2f7fc] to-[#e6f1f9] border-b border-slate-200/80 overflow-hidden">
        {/* Pro-Level Luminous Glowing Cloud Light Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-sky-200/60 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-white/90 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[650px] h-[500px] bg-cyan-200/50 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-24 -right-20 w-[700px] h-[500px] bg-blue-200/45 rounded-full blur-[140px] pointer-events-none" />

        {/* Multi-layered Luminous Ambient Glass Wave Ribbons */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
          viewBox="0 0 1440 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 480 C 260 410, 480 540, 760 450 C 1040 360, 1240 490, 1580 390"
            stroke="url(#certFluidWave1)"
            strokeWidth="48"
            strokeLinecap="round"
          />
          <path
            d="M -60 520 C 300 460, 520 570, 800 490 C 1080 410, 1280 530, 1580 440"
            stroke="url(#certFluidWave2)"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="certFluidWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="75%" stopColor="#e0f2fe" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="certFluidWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.10" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
                {certificationsHeader.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {certificationsHeader.title}
            </h2>

            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              {certificationsHeader.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-4.5 items-stretch max-w-[1360px] mx-auto">
            {certifications.map((cert: any, idx: number) => (
              <CertificatePlaqueCard
                key={cert.id || idx}
                id={cert.id}
                name={cert.name}
                authority={cert.authority}
                scope={cert.scope}
                importance={cert.importance}
                badgeCode={cert.badgeCode}
                image={cert.image}
                verified={cert.verified}
                themeKey={cert.themeKey}
                index={idx}
                priority={idx < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 OUR SERVICES SECTION */}
      <section id="services" className="relative pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 bg-gradient-to-b from-[#fbfdfd] via-[#f7fafc] to-[#edf6fa] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-12 h-[1px] bg-slate-400" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-700">
                {servicesHeader.eyebrow}
              </span>
              <span className="w-12 h-[1px] bg-slate-400" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-cormorant font-semibold text-[#091e2f] leading-[1.08] tracking-tight mb-3">
              {servicesHeader.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              {servicesHeader.desc}
            </p>
          </div>

          {/* SVG ClipPath Definitions */}
          <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
            <defs>
              {services.map((service: any, index: number) => {
                const preset = serviceWavePresets[index % serviceWavePresets.length];
                return (
                  <clipPath
                    key={`clip-${service.id || index}`}
                    id={`service-wave-${service.id || index}`}
                    clipPathUnits="objectBoundingBox"
                  >
                    <path d={preset.clipPathD} />
                  </clipPath>
                );
              })}
            </defs>
          </svg>

          {/* Pro-Level Animated Service Cards (Wider Width, Compact Height, 3D Physics & Parallax) */}
          <div ref={servicesSectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 sm:gap-5 lg:gap-5.5 xl:gap-6 items-stretch pt-2 max-w-[1380px] mx-auto">
            {services.map((service: any, index: number) => {
              const preset = serviceWavePresets[index % serviceWavePresets.length];
              return (
                <ServiceOrganicCard
                  key={service.num || service.id || index}
                  service={service}
                  preset={preset}
                  index={index}
                  isServicesVisible={isServicesVisible}
                  onOpenQuote={handleOpenQuote}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FROM IDEA TO REALITY */}
      <section id="process" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f0f7fb]/70 to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {processHeader.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {processHeader.title}
            </h2>

            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              {processHeader.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-2.5 xl:gap-3.5 items-stretch">
            {processSteps.map((step: any, idx: number) => (
              <div
                key={step.step || idx}
                className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-5 lg:px-2.5 lg:py-5 xl:p-5 border border-slate-200/90 hover:border-[#164666]/40 shadow-xs hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex-1 shrink-0"
              >
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white border border-slate-200 text-[#1b628b] items-center justify-center shadow-2xs pointer-events-none">
                    <ChevronRight className="w-2.5 h-2.5 text-[#1b628b]" strokeWidth={2.5} />
                  </div>
                )}

                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] text-[#164666] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/80 uppercase mb-3.5 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-colors duration-300">
                  {step.label || `STEP ${idx + 1}`}
                </span>

                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center mb-3.5 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <span className="font-mono font-bold text-base">{step.step || idx + 1}</span>
                </div>

                <h3 className="text-sm sm:text-[15px] font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-snug tracking-tight min-h-[36px] flex items-center justify-center text-center">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES IN YOUR BRAND */}
      <section id="categories" className="relative pt-6 sm:pt-8 lg:pt-10 pb-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#164666]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                {categoriesHeader.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {categoriesHeader.title}
            </h2>

            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              {categoriesHeader.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {coreCategories.map((cat: any) => (
              <Link
                key={cat.num || cat.slug}
                href={`/products/${cat.slug || "skincare-serums"}`}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-[#164666] shadow-xs hover:shadow-xl hover:shadow-slate-200/90 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image || "/images/categories/cat-serum.jpg"}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-lg bg-white/95 backdrop-blur-md border border-white/80 text-[#164666] font-mono font-bold text-xs shadow-xs group-hover:bg-[#164666] group-hover:text-white transition-colors duration-300">
                    {cat.num}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="flex-1 flex flex-col">
                    <span className="text-[10.5px] font-bold tracking-[0.14em] text-[#1b628b] uppercase mb-1.5 block">
                      {cat.tagline}
                    </span>

                    <h3 className="text-xl sm:text-[1.3rem] font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-snug tracking-tight min-h-[32px] sm:min-h-[36px] flex items-center mb-2.5">
                      {cat.name}
                    </h3>

                    <p className="text-[13px] text-slate-500 leading-relaxed font-normal min-h-[58px] sm:min-h-[62px] mb-4 flex-1">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[56px] sm:min-h-[58px] content-start">
                      {cat.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-sky-50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

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

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="relative py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
                {faqsHeader.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {faqsHeader.title}
            </h2>

            <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

            <p className="text-sm sm:text-[15px] text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              {faqsHeader.desc}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq: any, index: number) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={faq.question || index}
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
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${isOpen
                            ? "bg-[#164666] text-white"
                            : "bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-[#e1f0fa]"
                          }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-sm sm:text-[15.5px] font-semibold leading-snug tracking-tight transition-colors ${isOpen ? "text-[#164666]" : "text-[#0f172a] group-hover:text-[#164666]"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                          ? "bg-[#164666] text-white rotate-180 shadow-xs"
                          : "bg-[#f0f7fb] text-[#164666] border border-[#d9ecf7] group-hover:bg-[#164666] group-hover:text-white"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

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

      {/* 8. DIRECT FACTORY CONSULTATION CTA BANNER */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#4a728e]">
              {ctaBanner.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
            {ctaBanner.heading}
          </h2>

          <div className="w-12 h-px bg-slate-300 mx-auto mt-4 mb-4" />

          <p className="text-sm sm:text-[15px] text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            {ctaBanner.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-1">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{ctaBanner.buttonText}</span>
            </button>

            <a
              href={`https://wa.me/919724681096?text=${encodeURIComponent(ctaBanner.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f8fafc] text-[#164666] border border-slate-200/90 hover:border-[#164666]/40 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#164666]" />
              <span>Schedule Plant Tour ({ctaBanner.phone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedCategory={quotePreselectedCategory}
      />
    </div>
  );
}

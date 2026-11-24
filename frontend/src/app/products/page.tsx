"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  FlaskConical,
  CheckCircle2,
  Phone,
  Check,
  X,
  Droplets,
  Sun,
  Eye,
  Smile,
  Target,
  RefreshCw,
  Feather,
  Pipette,
  Heart,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import TactileCategoryCard from "@/components/TactileCategoryCard";
import CosmeticAmbientBackground from "@/components/CosmeticAmbientBackground";

// --- CUSTOM SVG CATEGORY ICONS MATCHING REFERENCE EXACTLY ---

function ShampooIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M12 3v3" />
      <path d="M7 6h10a1 1 0 0 1 1 1v13a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1z" />
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
      <path d="M18 17a2 2 0 0 1 2 2" />
    </svg>
  );
}

function LotionIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M12 3v3" />
      <path d="M8 6h8a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2z" />
      <path d="M12 11c-1 1.5-2 2.5-2 4a2 2 0 0 0 4 0c0-1.5-1-2.5-2-4z" />
    </svg>
  );
}

function SunscreenIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function ScrubIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11h16a1 1 0 0 1 1 1v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a1 1 0 0 1 1-1z" />
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <circle cx="12" cy="16" r="1.5" />
    </svg>
  );
}

function DropletIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M12 8a4 4 0 0 1 4 4" />
    </svg>
  );
}

function BathSaltIcon({ className = "w-5 h-5 text-[#164666]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18c-1 6-4 10-9 10s-8-4-9-10z" />
      <path d="M7 11c0-2 2-4 5-4s5 2 5 4" />
      <circle cx="10" cy="5" r="1" />
      <circle cx="14" cy="5" r="1" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  );
}

// Icon Resolver Mapping Strings to Components
const getCategoryIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  switch (iconName) {
    case "ShampooIcon":
      return ShampooIcon;
    case "LotionIcon":
      return LotionIcon;
    case "SunscreenIcon":
      return SunscreenIcon;
    case "ScrubIcon":
      return ScrubIcon;
    case "DropletIcon":
      return DropletIcon;
    case "BathSaltIcon":
      return BathSaltIcon;
    case "Sparkles":
      return Sparkles;
    case "Layers":
      return Layers;
    case "Pipette":
      return Pipette;
    case "Feather":
      return Feather;
    case "Sun":
      return Sun;
    case "Smile":
      return Smile;
    case "Target":
      return Target;
    case "Eye":
      return Eye;
    case "Heart":
      return Heart;
    case "RefreshCw":
      return RefreshCw;
    case "ShieldCheck":
      return ShieldCheck;
    case "Droplets":
    default:
      return Droplets;
  }
};

interface PersonalCareCard {
  id: string;
  title: string;
  archImage: string;
  categorySlug: string;
  icon: string;
  items: string[];
}

interface SkinCareCategory {
  id: string;
  title: string;
  categorySlug: string;
  archImage: string;
  icon: string;
  tag: string;
  items: string[];
}

const defaultRangeData = {
  hero: {
    kicker: "Certified Cosmetics Manufacturer • Ahmedabad, India",
    headlinePart1: "All Product ",
    headlineHighlight: "Range.",
    subtitle: "Explore our comprehensive formulations for your brand.",
    introBox:
      "Whether you are seeking contract manufacturing, private label, or starting your own start-up brand, we offer tailored formulations across all product ranges for your brand.",
    searchPlaceholder: "Search formulations across all ranges (Shampoo, Serum, Scrub)...",
  },
  personalCareSection: {
    eyebrow: "Signature Collection",
    title: "Personal Care ",
    highlight: "Range",
    description:
      "Thoughtfully formulated essentials for everyday care — crafted with nature’s best and the science of skincare.",
    cards: [
      {
        id: "hair-care",
        title: "Hair Care",
        archImage: "/images/range/arch-uniform-hair-care.png",
        categorySlug: "haircare-treatments",
        icon: "ShampooIcon",
        items: ["Shampoo", "Conditioner", "Mist"],
      },
      {
        id: "body-care",
        title: "Body Care",
        archImage: "/images/range/arch-uniform-body-care.png",
        categorySlug: "body-bath-wellness",
        icon: "LotionIcon",
        items: ["Body Shower", "Lotion", "Slimming Cream", "Bust Up Gel"],
      },
      {
        id: "body-sunscreen",
        title: "Body Sunscreen",
        archImage: "/images/range/arch-uniform-body-sunscreen.png",
        categorySlug: "suncare-moisturizers",
        icon: "SunscreenIcon",
        items: ["Brightening Sunscreen", "Moisturizing Sunscreen"],
      },
      {
        id: "scrub",
        title: "Scrub",
        archImage: "/images/range/arch-uniform-scrub.png",
        categorySlug: "cleansers-toners",
        icon: "ScrubIcon",
        items: ["Body Refining Scrub", "Body Exfoliating Gel"],
      },
      {
        id: "essential-oil",
        title: "Essential Oil",
        archImage: "/images/range/arch-uniform-essential-oil.png",
        categorySlug: "body-bath-wellness",
        icon: "DropletIcon",
        items: ["Body Massage Oil", "Aromatherapy Essence"],
      },
      {
        id: "bath-salt",
        title: "Bath Salt",
        archImage: "/images/range/arch-uniform-bath-salt.png",
        categorySlug: "body-bath-wellness",
        icon: "BathSaltIcon",
        items: ["Relaxing Bath Salt", "Calming Bath Salt"],
      },
    ] as PersonalCareCard[],
  },
  skinCareSection: {
    eyebrow: "Dermatological & Cosmetic Actives",
    title: "Skin Care ",
    highlight: "Range",
    description:
      "From clarifying AHA/BHA cleansers and stabilized vitamin serums to broad-spectrum sunscreens, custom compounded for clinical efficacy.",
    categories: [
      {
        id: "cleansers",
        title: "Cleansers",
        categorySlug: "cleansers-toners",
        archImage: "/images/skincare/arch-skincare-cleansers.png",
        icon: "Droplets",
        tag: "Purifying & Barrier",
        items: ["Face Wash", "Micellar Water", "Cream Cleanser", "Gel Cleanser"],
      },
      {
        id: "toners-mists",
        title: "Toners & Mists",
        categorySlug: "cleansers-toners",
        archImage: "/images/skincare/arch-skincare-toners-mists.png",
        icon: "Sparkles",
        tag: "pH Balance & Hydration",
        items: ["Hydrating Toner", "Astringent Toner", "Facial Mist"],
      },
      {
        id: "exfoliators",
        title: "Exfoliators",
        categorySlug: "cleansers-toners",
        archImage: "/images/skincare/arch-skincare-exfoliators.png",
        icon: "Layers",
        tag: "Micro-Exfoliation",
        items: ["Scrub (Physical)", "AHA/BHA Exfoliants"],
      },
      {
        id: "serums",
        title: "Serums",
        categorySlug: "skincare-serums",
        archImage: "/images/skincare/arch-skincare-serums.png",
        icon: "Pipette",
        tag: "Active Concentrates",
        items: ["Vitamin C Serum", "Hyaluronic Acid Serum", "Niacinamide Serum"],
      },
      {
        id: "moisturizers",
        title: "Moisturizers",
        categorySlug: "suncare-moisturizers",
        archImage: "/images/skincare/arch-skincare-moisturizers.png",
        icon: "Feather",
        tag: "Barrier Lipid Lock",
        items: ["Gel Moisturizer", "Night Cream", "Day Cream", "Brightening Cream"],
      },
      {
        id: "sunscreens",
        title: "Sunscreens",
        categorySlug: "suncare-moisturizers",
        archImage: "/images/skincare/arch-skincare-sunscreens.png",
        icon: "Sun",
        tag: "Broad Spectrum UV",
        items: ["SPF 30/50 Sunscreen", "Tinted Sunscreen", "Gel-based Sunscreen"],
      },
      {
        id: "face-masks",
        title: "Face Masks",
        categorySlug: "cleansers-toners",
        archImage: "/images/skincare/arch-skincare-face-masks.png",
        icon: "Smile",
        tag: "Intensive Compounding",
        items: ["Peel-Off Mask", "Clay Mask", "Sheet Mask"],
      },
      {
        id: "spot-treatments",
        title: "Spot Treatments",
        categorySlug: "skincare-serums",
        archImage: "/images/skincare/arch-skincare-spot-treatments.png",
        icon: "Target",
        tag: "Targeted Blemishes",
        items: ["Anti-Acne Gel", "Dark Spot Corrector", "Pigmentation Serum"],
      },
      {
        id: "eye-care",
        title: "Eye Care",
        categorySlug: "skincare-serums",
        archImage: "/images/skincare/arch-skincare-eye-care.png",
        icon: "Eye",
        tag: "Delicate Periorbital",
        items: ["Under Eye Cream", "Eye Serum", "Eye Gel"],
      },
      {
        id: "lip-care",
        title: "Lip Care",
        categorySlug: "body-bath-wellness",
        archImage: "/images/skincare/arch-skincare-lip-care.png",
        icon: "Heart",
        tag: "Emollient Conditioning",
        items: ["Lip Balm", "Lip Scrub", "Lip Butter"],
      },
      {
        id: "makeup-removers",
        title: "Makeup Removers",
        categorySlug: "cleansers-toners",
        archImage: "/images/skincare/arch-skincare-makeup-removers.png",
        icon: "RefreshCw",
        tag: "Gentle Micellar",
        items: ["Oil-Based Remover", "Cleansing Balm", "Makeup Removing Wipes"],
      },
      {
        id: "body-care-skin",
        title: "Body Care",
        categorySlug: "body-bath-wellness",
        archImage: "/images/skincare/arch-skincare-body-care.png",
        icon: "ShieldCheck",
        tag: "Total Body Radiance",
        items: ["Body Lotion", "Body Butter", "Body Scrub"],
      },
    ] as SkinCareCategory[],
  },
  ctaSection: {
    badge: "Proudly Made in India • End-to-End Manufacturing • Low MOQ from 500 Units",
    heading: "Ready to Build Your Dream",
    highlight: "Personal Care Brand in India?",
    description:
      "Our state-of-the-art Ahmedabad (Gujarat, India) compounding campus develops custom formulations, bespoke active percentages, and complete finished packaging for Indian and global brands.",
    primaryButtonText: "Submit Enquiry",
    secondaryButtonText: "Call +91 97246 81096",
    phone: "+91 97246 81096",
  },
};

export default function ProductsPage() {
  const [cms, setCms] = useState(defaultRangeData);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>("Personal Care Formulations");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch dynamic CMS data from MongoDB Atlas
  useEffect(() => {
    fetch("/api/product-range-page")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.hero) {
          setCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            personalCareSection: {
              ...prev.personalCareSection,
              ...(data.personalCareSection || {}),
              cards:
                data.personalCareSection?.cards && data.personalCareSection.cards.length > 0
                  ? data.personalCareSection.cards
                  : prev.personalCareSection.cards,
            },
            skinCareSection: {
              ...prev.skinCareSection,
              ...(data.skinCareSection || {}),
              categories:
                data.skinCareSection?.categories && data.skinCareSection.categories.length > 0
                  ? data.skinCareSection.categories
                  : prev.skinCareSection.categories,
            },
            ctaSection: { ...prev.ctaSection, ...(data.ctaSection || {}) },
          }));
        }
      })
      .catch((err) => {
        console.warn("Using default product range data fallback:", err);
      });
  }, []);

  const handleOpenQuote = (title: string) => {
    setSelectedProductForQuote(title);
    setIsQuoteOpen(true);
  };

  const personalCards = cms.personalCareSection?.cards || [];
  const skinCategories = cms.skinCareSection?.categories || [];

  const filteredPersonalCare = personalCards.filter((card) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      card.title.toLowerCase().includes(q) ||
      (card.items && card.items.some((i) => i.toLowerCase().includes(q)))
    );
  });

  const filteredSkinCare = skinCategories.filter((cat) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      cat.title.toLowerCase().includes(q) ||
      (cat.tag && cat.tag.toLowerCase().includes(q)) ||
      (cat.items && cat.items.some((i) => i.toLowerCase().includes(q)))
    );
  });

  const ctaPhoneClean = (cms.ctaSection?.phone || "+91 97246 81096").replace(/[^0-9]/g, "");

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white relative overflow-hidden">
      {/* --- PREMIUM ZERO-LAG COSMETIC AMBIENT BACKGROUND ANIMATION --- */}
      <CosmeticAmbientBackground />

      {/* --- 1. HERO SECTION (THEMED WITH HOMEPAGE DESIGN SYSTEM) --- */}
      <section className="relative w-full pt-16 pb-12 sm:pt-20 sm:pb-16 text-center bg-white/45 backdrop-blur-sm border-b border-sky-200/40 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Brand Micro-header */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              {cms.hero.kicker}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.08]">
            {cms.hero.headlinePart1}
            <span className="font-cormorant font-semibold text-[#164666]">
              {cms.hero.headlineHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#475569] max-w-2xl mx-auto font-normal">
            {cms.hero.subtitle}
          </p>

          {/* Intro Text Box */}
          <div className="pt-1 max-w-2xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#c8d9e6] shadow-xs text-xs sm:text-sm text-[#475569] leading-relaxed text-center">
              {cms.hero.introBox}
            </div>
          </div>

          {/* Live Formulation Search */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={cms.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs bg-white border border-[#c8d9e6] rounded-full text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. PERSONAL CARE RANGE --- */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10 overflow-hidden">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              {cms.personalCareSection.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.12]">
            {cms.personalCareSection.title}
            <span className="font-cormorant font-semibold text-[#164666]">
              {cms.personalCareSection.highlight}
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#164666] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] max-w-xl mx-auto">
            {cms.personalCareSection.description}
          </p>
        </div>

        {searchQuery ? (
          filteredPersonalCare.length > 0 ? (
            <div className="grid grid-cols-1 min-[860px]:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 justify-items-center">
              {filteredPersonalCare.map((card, idx) => (
                <div key={card.id || idx} className="w-full flex justify-center min-w-0">
                  <TactileCategoryCard
                    id={card.id}
                    title={card.title}
                    archImage={card.archImage}
                    categorySlug={card.categorySlug}
                    icon={getCategoryIcon(card.icon)}
                    items={card.items || []}
                    priority={idx < 3}
                    index={idx}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-slate-400 text-xs">
              No personal care formulations matching &ldquo;{searchQuery}&rdquo;.
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 min-[860px]:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 justify-items-center">
            {personalCards.map((card, idx) => (
              <div key={card.id || idx} className="w-full flex justify-center min-w-0">
                <TactileCategoryCard
                  id={card.id}
                  title={card.title}
                  archImage={card.archImage}
                  categorySlug={card.categorySlug}
                  icon={getCategoryIcon(card.icon)}
                  items={card.items || []}
                  priority={idx < 3}
                  index={idx}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- 3. SKIN CARE RANGE --- */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10 overflow-hidden">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              {cms.skinCareSection.eyebrow}
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] tracking-tight leading-[1.12]">
            {cms.skinCareSection.title}
            <span className="font-cormorant font-semibold text-[#164666]">
              {cms.skinCareSection.highlight}
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#164666] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] max-w-2xl mx-auto">
            {cms.skinCareSection.description}
          </p>
        </div>

        {filteredSkinCare.length > 0 ? (
          <div className="grid grid-cols-1 min-[860px]:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 justify-items-center">
            {filteredSkinCare.map((category, idx) => (
              <div key={category.id || idx} className="w-full flex justify-center min-w-0">
                <TactileCategoryCard
                  id={category.id}
                  title={category.title}
                  archImage={category.archImage}
                  categorySlug={category.categorySlug}
                  icon={getCategoryIcon(category.icon)}
                  items={category.items || []}
                  tag={category.tag}
                  priority={idx < 3}
                  index={idx}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 text-xs">
            No skin care formulations matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </section>

      {/* --- 4. SIGNATURE BLUE CTA SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#10364f] via-[#164666] to-[#0a2333] text-white p-8 sm:p-12 md:p-14 text-center shadow-2xl shadow-[#164666]/25 border border-sky-400/20">
          {/* Subtle Ambient Background Radiance */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-sky-200 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{cms.ctaSection.badge}</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-cormorant font-semibold text-white tracking-tight leading-[1.12]">
              {cms.ctaSection.heading}
              <br />
              <span className="font-cormorant font-semibold text-sky-200">
                {cms.ctaSection.highlight}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-xl mx-auto">
              {cms.ctaSection.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              <button
                onClick={() => handleOpenQuote("All Product Range General RFQ")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#164666] hover:bg-sky-50 text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#164666]" />
                <span>{cms.ctaSection.primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 text-[#164666]" />
              </button>

              <a
                href={`tel:${ctaPhoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 text-xs sm:text-sm font-semibold rounded-xl backdrop-blur-md transition-all hover:border-white/40"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>{cms.ctaSection.secondaryButtonText}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ / Formulation Sample Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedCategory={selectedProductForQuote}
      />
    </div>
  );
}

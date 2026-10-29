"use client";

import React, { useState } from "react";
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

function LeafBullet() {
  return (
    <svg className="w-3.5 h-3.5 text-[#164666]/75 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  );
}

// --- PERSONAL CARE DATA (UNIFORM STANDARDIZED DIMENSIONS) ---
interface PersonalCareCard {
  id: string;
  title: string;
  archImage: string;
  categorySlug: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const personalCareCards: PersonalCareCard[] = [
  {
    id: "hair-care",
    title: "Hair Care",
    archImage: "/images/range/arch-uniform-hair-care.png",
    categorySlug: "haircare-treatments",
    icon: ShampooIcon,
    items: ["Shampoo", "Conditioner", "Mist"],
  },
  {
    id: "body-care",
    title: "Body Care",
    archImage: "/images/range/arch-uniform-body-care.png",
    categorySlug: "body-bath-wellness",
    icon: LotionIcon,
    items: ["Body Shower", "Lotion", "Slimming Cream", "Bust Up Gel"],
  },
  {
    id: "body-sunscreen",
    title: "Body Sunscreen",
    archImage: "/images/range/arch-uniform-body-sunscreen.png",
    categorySlug: "suncare-moisturizers",
    icon: SunscreenIcon,
    items: ["Brightening Sunscreen", "Moisturizing Sunscreen"],
  },
  {
    id: "scrub",
    title: "Scrub",
    archImage: "/images/range/arch-uniform-scrub.png",
    categorySlug: "cleansers-toners",
    icon: ScrubIcon,
    items: ["Body Refining Scrub", "Body Exfoliating Gel"],
  },
  {
    id: "essential-oil",
    title: "Essential Oil",
    archImage: "/images/range/arch-uniform-essential-oil.png",
    categorySlug: "body-bath-wellness",
    icon: DropletIcon,
    items: ["Body Massage Oil", "Aromatherapy Essence"],
  },
  {
    id: "bath-salt",
    title: "Bath Salt",
    archImage: "/images/range/arch-uniform-bath-salt.png",
    categorySlug: "body-bath-wellness",
    icon: BathSaltIcon,
    items: ["Relaxing Bath Salt", "Calming Bath Salt"],
  },
];

function PersonalCareCardItem({ card }: { card: PersonalCareCard }) {
  const IconComponent = card.icon;
  return (
    <Link
      href={`/products/${card.categorySlug}`}
      className="relative flex items-center group transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none"
      style={{ width: "295px", height: "270px" }}
    >
      {/* Uniform Arch Container with Product Photo on Stone Pedestal */}
      <div
        className="relative rounded-t-full rounded-b-[2rem] overflow-hidden shadow-md shrink-0 border border-slate-200/70 bg-gradient-to-b from-[#eae2d5] to-[#f6f2ec]"
        style={{ width: "132px", height: "270px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.archImage}
          alt={card.title}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
          loading="eager"
        />
      </div>

      {/* Uniform Overlapping Floating White Content Card */}
      <div
        className="relative -ml-11 z-10 bg-white/98 backdrop-blur-md rounded-[1.75rem] p-4.5 shadow-xl shadow-slate-900/6 border border-white/90 flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-slate-900/10 transition-all duration-300"
        style={{ width: "185px", height: "250px" }}
      >
        <div>
          {/* Category Icon Badge */}
          <div className="w-10 h-10 rounded-full border border-sky-100 bg-white flex items-center justify-center text-[#164666] shadow-2xs mb-2">
            <IconComponent className="w-5 h-5 text-[#164666]" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-[#0f2b3e] tracking-tight leading-snug">
            {card.title}
          </h3>

          {/* Bullet Items with Leaf */}
          <ul className="mt-2 space-y-1 text-xs text-slate-600 font-medium h-[84px] flex flex-col justify-start">
            {card.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5 leading-tight">
                <LeafBullet />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Products Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#0f2b3e] group-hover:text-[#164666] transition-colors">
            View Products
          </span>
          <span className="w-7 h-7 rounded-full bg-sky-100 group-hover:bg-[#164666] text-[#164666] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// --- SKIN CARE RANGE DATA (FROM LIVE SITE WITH SIGNATURE ARCHED MOCKUPS) ---
interface SkinCareCategory {
  id: string;
  title: string;
  categorySlug: string;
  archImage: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  items: string[];
}

const skinCareCategories: SkinCareCategory[] = [
  {
    id: "cleansers",
    title: "Cleansers",
    categorySlug: "cleansers-toners",
    archImage: "/images/skincare/arch-skincare-cleansers.png",
    icon: Droplets,
    tag: "Purifying & Barrier",
    items: ["Face Wash", "Micellar Water", "Cream Cleanser", "Gel Cleanser"],
  },
  {
    id: "toners-mists",
    title: "Toners & Mists",
    categorySlug: "cleansers-toners",
    archImage: "/images/skincare/arch-skincare-toners-mists.png",
    icon: Sparkles,
    tag: "pH Balance & Hydration",
    items: ["Hydrating Toner", "Astringent Toner", "Facial Mist"],
  },
  {
    id: "exfoliators",
    title: "Exfoliators",
    categorySlug: "cleansers-toners",
    archImage: "/images/skincare/arch-skincare-exfoliators.png",
    icon: Layers,
    tag: "Micro-Exfoliation",
    items: ["Scrub (Physical)", "AHA/BHA Exfoliants"],
  },
  {
    id: "serums",
    title: "Serums",
    categorySlug: "skincare-serums",
    archImage: "/images/skincare/arch-skincare-serums.png",
    icon: Pipette,
    tag: "Active Concentrates",
    items: ["Vitamin C Serum", "Hyaluronic Acid Serum", "Niacinamide Serum"],
  },
  {
    id: "moisturizers",
    title: "Moisturizers",
    categorySlug: "suncare-moisturizers",
    archImage: "/images/skincare/arch-skincare-moisturizers.png",
    icon: Feather,
    tag: "Barrier Lipid Lock",
    items: ["Gel Moisturizer", "Night Cream", "Day Cream", "Brightening Cream"],
  },
  {
    id: "sunscreens",
    title: "Sunscreens",
    categorySlug: "suncare-moisturizers",
    archImage: "/images/skincare/arch-skincare-sunscreens.png",
    icon: Sun,
    tag: "Broad Spectrum UV",
    items: ["SPF 30/50 Sunscreen", "Tinted Sunscreen", "Gel-based Sunscreen"],
  },
  {
    id: "face-masks",
    title: "Face Masks",
    categorySlug: "cleansers-toners",
    archImage: "/images/skincare/arch-skincare-face-masks.png",
    icon: Smile,
    tag: "Intensive Compounding",
    items: ["Peel-Off Mask", "Clay Mask", "Sheet Mask"],
  },
  {
    id: "spot-treatments",
    title: "Spot Treatments",
    categorySlug: "skincare-serums",
    archImage: "/images/skincare/arch-skincare-spot-treatments.png",
    icon: Target,
    tag: "Targeted Blemishes",
    items: ["Anti-Acne Gel", "Dark Spot Corrector", "Pigmentation Serum"],
  },
  {
    id: "eye-care",
    title: "Eye Care",
    categorySlug: "skincare-serums",
    archImage: "/images/skincare/arch-skincare-eye-care.png",
    icon: Eye,
    tag: "Delicate Periorbital",
    items: ["Under Eye Cream", "Eye Serum", "Eye Gel"],
  },
  {
    id: "lip-care",
    title: "Lip Care",
    categorySlug: "body-bath-wellness",
    archImage: "/images/skincare/arch-skincare-lip-care.png",
    icon: Heart,
    tag: "Emollient Conditioning",
    items: ["Lip Balm", "Lip Scrub", "Lip Butter"],
  },
  {
    id: "makeup-removers",
    title: "Makeup Removers",
    categorySlug: "cleansers-toners",
    archImage: "/images/skincare/arch-skincare-makeup-removers.png",
    icon: RefreshCw,
    tag: "Gentle Micellar",
    items: ["Oil-Based Remover", "Cleansing Balm", "Makeup Removing Wipes"],
  },
  {
    id: "body-care-skin",
    title: "Body Care",
    categorySlug: "body-bath-wellness",
    archImage: "/images/skincare/arch-skincare-body-care.png",
    icon: ShieldCheck,
    tag: "Total Body Radiance",
    items: ["Body Lotion", "Body Butter", "Body Scrub"],
  },
];

function SkinCareCardItem({ category }: { category: SkinCareCategory }) {
  const IconComponent = category.icon;
  return (
    <Link
      href={`/products/${category.categorySlug}`}
      className="relative flex items-center group transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none"
      style={{ width: "295px", height: "270px" }}
    >
      {/* Uniform Arch Container with Product Photo on Stone Pedestal */}
      <div
        className="relative rounded-t-full rounded-b-[2rem] overflow-hidden shadow-md shrink-0 border border-slate-200/70 bg-gradient-to-b from-[#eae2d5] to-[#f6f2ec]"
        style={{ width: "132px", height: "270px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.archImage}
          alt={category.title}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Uniform Overlapping Floating White Content Card */}
      <div
        className="relative -ml-11 z-10 bg-white/98 backdrop-blur-md rounded-[1.75rem] p-4.5 shadow-xl shadow-slate-900/6 border border-white/90 flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-slate-900/10 transition-all duration-300"
        style={{ width: "185px", height: "250px" }}
      >
        <div>
          {/* Category Icon Badge */}
          <div className="w-10 h-10 rounded-full border border-sky-100 bg-white flex items-center justify-center text-[#164666] shadow-2xs mb-2">
            <IconComponent className="w-5 h-5 text-[#164666]" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-[#0f2b3e] tracking-tight leading-snug">
            {category.title}
          </h3>

          {/* Bullet Items with Leaf */}
          <ul className="mt-2 space-y-1 text-xs text-slate-600 font-medium h-[84px] flex flex-col justify-start">
            {category.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5 leading-tight">
                <LeafBullet />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Products Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#0f2b3e] group-hover:text-[#164666] transition-colors">
            View Products
          </span>
          <span className="w-7 h-7 rounded-full bg-sky-100 group-hover:bg-[#164666] text-[#164666] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>("Personal Care Formulations");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenQuote = (title: string) => {
    setSelectedProductForQuote(title);
    setIsQuoteOpen(true);
  };

  const filteredPersonalCare = personalCareCards.filter((card) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      card.title.toLowerCase().includes(q) ||
      card.items.some((i) => i.toLowerCase().includes(q))
    );
  });

  const filteredSkinCare = skinCareCategories.filter((cat) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      cat.title.toLowerCase().includes(q) ||
      cat.tag.toLowerCase().includes(q) ||
      cat.items.some((i) => i.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white relative overflow-hidden">
      {/* Atmospheric Soft Ambient Radiance matching Homepage */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#d3e9f7]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 -left-20 w-[450px] h-[450px] bg-[#e6f2fa]/60 rounded-full blur-3xl pointer-events-none" />

      {/* --- 1. HERO SECTION (THEMED WITH HOMEPAGE DESIGN SYSTEM) --- */}
      <section className="relative w-full pt-16 pb-12 sm:pt-20 sm:pb-16 text-center bg-gradient-to-br from-[#ffffff] via-[#f1f7fb] to-[#e4f0f7] border-b border-slate-200/80 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Brand Micro-header */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Certified Cosmetics Manufacturer • Ahmedabad, India
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f172a] tracking-tight font-normal leading-tight">
            All Product <span className="italic font-light text-[#1b628b]">Range.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#475569] max-w-2xl mx-auto font-normal">
            Explore our comprehensive formulations for your brand.
          </p>

          {/* Intro Text Box */}
          <div className="pt-1 max-w-2xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#c8d9e6] shadow-xs text-xs sm:text-sm text-[#475569] leading-relaxed text-center">
              Whether you are seeking <span className="font-semibold text-[#0f172a]">contract manufacturing</span>, <span className="font-semibold text-[#0f172a]">private label</span>, or starting your own start-up brand, we offer tailored formulations across all product ranges for your brand.
            </div>
          </div>

          {/* Live Formulation Search */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search formulations across all ranges (Shampoo, Serum, Scrub)..."
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

      {/* --- 2. PERSONAL CARE RANGE (EXACT ALIGN STYLE PRESERVED) --- */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Signature Collection
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f172a] tracking-tight font-normal">
            Personal Care Range
          </h2>
          <div className="w-16 h-1 bg-[#164666] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] max-w-xl mx-auto">
            Thoughtfully formulated essentials for everyday care &mdash; crafted with nature&rsquo;s best and the science of skincare.
          </p>
        </div>

        {searchQuery ? (
          filteredPersonalCare.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-6 xl:gap-8">
              {filteredPersonalCare.map((card) => (
                <PersonalCareCardItem key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-slate-400 text-xs">
              No personal care formulations matching &ldquo;{searchQuery}&rdquo;.
            </div>
          )
        ) : (
          <>
            {/* ROW 1: 4 Cards with Exactly Equal Dimensions & Baseline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
              {personalCareCards.slice(0, 4).map((card) => (
                <PersonalCareCardItem key={card.id} card={card} />
              ))}
            </div>

            {/* ROW 2: 2 Centered Cards with Identical Dimensions & Proportions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-6 xl:gap-8">
              {personalCareCards.slice(4, 6).map((card) => (
                <PersonalCareCardItem key={card.id} card={card} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* --- 3. SKIN CARE RANGE (THE REMAINING SECTION FROM THE LIVE LINK) --- */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Dermatological & Cosmetic Actives
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f172a] tracking-tight font-normal">
            Skin Care Range
          </h2>
          <div className="w-16 h-1 bg-[#164666] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] max-w-2xl mx-auto">
            From clarifying AHA/BHA cleansers and stabilized vitamin serums to broad-spectrum sunscreens, custom compounded for clinical efficacy.
          </p>
        </div>

        {filteredSkinCare.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
            {filteredSkinCare.map((category) => (
              <SkinCareCardItem key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 text-xs">
            No skin care formulations matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </section>

      {/* --- 4. SIGNATURE BLUE CTA SECTION (EXACT REPLICATION OF LIVE SITE) --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#10364f] via-[#164666] to-[#0a2333] text-white p-8 sm:p-12 md:p-14 text-center shadow-2xl shadow-[#164666]/25 border border-sky-400/20">
          {/* Subtle Ambient Background Radiance */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-sky-200 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Turnkey Manufacturing &bull; Low MOQ from 500 Units</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-normal tracking-tight leading-tight">
              Ready to Build Your Dream<br />Personal Care Brand Together?
            </h2>

            <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-xl mx-auto">
              Our Ahmedabad cosmetic compounding laboratory develops custom fragrance profiles, bespoke active percentages, and white-label finished packaging for your brand.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              <button
                onClick={() => handleOpenQuote("All Product Range General RFQ")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#164666] hover:bg-sky-50 text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#164666]" />
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#164666]" />
              </button>

              <a
                href="tel:+919724681096"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 text-xs sm:text-sm font-semibold rounded-xl backdrop-blur-md transition-all hover:border-white/40"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call +91 97246 81096</span>
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

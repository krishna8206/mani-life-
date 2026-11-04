"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Check,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import { CategoryMeta, ProductItem } from "@/data/products";
import { getCategoryShowcase } from "@/data/categoryShowcase";
import QuoteModal from "@/components/QuoteModal";

interface CategoryDetailClientProps {
  categoryMeta: CategoryMeta;
  categoryProducts: ProductItem[];
}

export default function CategoryDetailClient({
  categoryMeta,
  categoryProducts,
}: CategoryDetailClientProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const showcase = getCategoryShowcase(categoryMeta.slug) || {
    slug: categoryMeta.slug,
    aliases: [],
    hero: {
      title: categoryMeta.shortTitle,
      subtitle: categoryMeta.tagline,
      bgImage: categoryMeta.image,
    },
    manufacturerSection: {
      title: `TOP ${categoryMeta.shortTitle.toUpperCase()} MANUFACTURERS IN INDIA`,
      subtitle: "Custom Formulations Tailored for Your Brand",
      image: categoryMeta.image,
      imageAlt: `${categoryMeta.title} Manufacturing`,
      paragraphs: [
        { text: categoryMeta.description },
        { text: categoryMeta.manufacturingOverview.leadSummary },
      ],
      highlights: categoryMeta.manufacturingOverview.capabilities,
    },
    productRange: {
      title: `${categoryMeta.shortTitle.toUpperCase()} PRODUCT RANGE`,
      description: "Explore our comprehensive formulation range available for custom OEM / ODM and private label production:",
      filterTags: ["All Formulations"],
      items: categoryProducts.map((p, idx) => ({
        id: `P-${idx + 1}`,
        name: p.name,
        tag: "All Formulations",
        format: p.format || "Custom Formula",
        target: p.idealFor,
        moq: p.standardMOQ,
      })),
    },
  };

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName || null);
    setIsQuoteOpen(true);
  };

  // Split items evenly into 3 columns (matching Image 2 editorial column layout)
  const allItems = showcase.productRange.items;
  const colSize = Math.ceil(allItems.length / 3);
  const col1 = allItems.slice(0, colSize);
  const col2 = allItems.slice(colSize, colSize * 2);
  const col3 = allItems.slice(colSize * 2);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {/* ======================================================== */}
      {/* 1. HERO BANNER SECTION (Exact Match with Reference Mockup) */}
      {/* ======================================================== */}
      <section className="relative w-full h-[340px] sm:h-[400px] lg:h-[440px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={showcase.hero.bgImage}
            alt={showcase.hero.title}
            fill
            className="object-cover object-center scale-102"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/45 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3 sm:space-y-4">
          {/* Master Category Title - Unified Clean White Serif */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif text-white font-normal leading-[1.1] tracking-tight drop-shadow-xl">
            {showcase.hero.title}
          </h1>

          {/* Subtitle - Unified Matching White */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-xl mx-auto drop-shadow-md">
            {showcase.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. TOP MANUFACTURERS SECTION                            */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Product Showcase Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 p-3 shadow-lg group">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={showcase.manufacturerSection.image}
                    alt={showcase.manufacturerSection.imageAlt}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#164666] border border-slate-200 shadow-xs">
                    Ahmedabad Manufacturing Plant
                  </div>
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-semibold text-emerald-700 border border-emerald-200 shadow-xs">
                    Flexible Low MOQ
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Manufacturer Information */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                {/* Brand Micro-header */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-[1.5px] bg-[#4a728e]" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                    Certified Cosmetics Manufacturer • Ahmedabad, India
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
                  Top {showcase.hero.title.replace(/ & .*/, "")} Manufacturers{" "}
                  <span className="font-serif italic font-light text-[#1b628b]">
                    in India.
                  </span>
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal">
                {showcase.manufacturerSection.paragraphs.map((p, idx) => (
                  <p key={idx}>
                    {p.text}
                  </p>
                ))}
              </div>

              {/* Highlight Bullets */}
              {showcase.manufacturerSection.highlights && (
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {showcase.manufacturerSection.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#164666]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenQuote()}
                  className="px-6 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs sm:text-sm rounded-lg flex items-center gap-2 shadow-md shadow-[#164666]/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Custom Formulation Quote</span>
                </button>
                <a
                  href="tel:+919724681096"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#0f172a] font-medium text-xs sm:text-sm rounded-lg border border-[#c8d9e6] hover:border-[#164666] transition-all shadow-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#164666]" />
                  <span>Call: +91 97246 81096</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PRODUCT RANGE SECTION (UNBOXED 3-COLUMN EDITORIAL LIST) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header (Matching Website's Signature Style) */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Proven Cosmetic Formulations • Flexible Low MOQ
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
              {showcase.hero.title}{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Product Range.
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal mt-3 max-w-2xl mx-auto">
              Select any formulation below to request laboratory bench samples, COA documentation, and pilot batch quotes.
            </p>
          </div>

          {/* 3-Column Clean Unboxed Editorial List (Matching Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-0">
            {/* Column 1 */}
            <div className="divide-y divide-slate-200/80">
              {col1.map((item, idx) => {
                const itemSlug = ("slug" in item && typeof item.slug === "string" ? item.slug : "") || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <Link
                    key={idx}
                    href={`/products/${showcase.slug}/${itemSlug}`}
                    className="w-full text-left py-3.5 px-2 flex items-center justify-between group hover:bg-sky-50/60 rounded-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b628b] font-bold text-base group-hover:translate-x-1 transition-transform shrink-0">
                        »
                      </span>
                      <span className="text-sm sm:text-[15px] font-medium text-slate-700 group-hover:text-[#164666] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#1b628b] opacity-0 group-hover:opacity-100 transition-opacity font-semibold shrink-0">
                      View Details →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="divide-y divide-slate-200/80">
              {col2.map((item, idx) => {
                const itemSlug = ("slug" in item && typeof item.slug === "string" ? item.slug : "") || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <Link
                    key={idx}
                    href={`/products/${showcase.slug}/${itemSlug}`}
                    className="w-full text-left py-3.5 px-2 flex items-center justify-between group hover:bg-sky-50/60 rounded-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b628b] font-bold text-base group-hover:translate-x-1 transition-transform shrink-0">
                        »
                      </span>
                      <span className="text-sm sm:text-[15px] font-medium text-slate-700 group-hover:text-[#164666] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#1b628b] opacity-0 group-hover:opacity-100 transition-opacity font-semibold shrink-0">
                      View Details →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Column 3 */}
            <div className="divide-y divide-slate-200/80">
              {col3.map((item, idx) => {
                const itemSlug = ("slug" in item && typeof item.slug === "string" ? item.slug : "") || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <Link
                    key={idx}
                    href={`/products/${showcase.slug}/${itemSlug}`}
                    className="w-full text-left py-3.5 px-2 flex items-center justify-between group hover:bg-sky-50/60 rounded-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b628b] font-bold text-base group-hover:translate-x-1 transition-transform shrink-0">
                        »
                      </span>
                      <span className="text-sm sm:text-[15px] font-medium text-slate-700 group-hover:text-[#164666] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#1b628b] opacity-0 group-hover:opacity-100 transition-opacity font-semibold shrink-0">
                      View Details →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Clean Editorial Bottom Note (Unboxed) */}
          <div className="mt-14 pt-8 border-t border-slate-100 text-center text-xs text-[#64748b]">
            <p>
              Looking for a custom active concentration, herbal blend, or packaging concept not listed above?{" "}
              <button
                onClick={() => handleOpenQuote("Custom Formulation Development")}
                className="text-[#164666] font-semibold underline underline-offset-4 hover:text-[#10364f] cursor-pointer"
              >
                Inquire with our Ahmedabad R&D laboratory →
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CALL TO ACTION SECTION                               */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#f0f7fb] border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#164666] via-[#10364f] to-[#164666] text-white text-center shadow-xl shadow-[#164666]/15 space-y-5">
            {/* Brand Micro-header */}
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-sky-300/80" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-sky-200">
                Ahmedabad Formulation Laboratory & Cleanroom Facility
              </span>
              <span className="w-8 h-[1.5px] bg-sky-300/80" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal leading-[1.15] tracking-tight">
              Ready to Build Your Dream<br />
              <span className="font-serif italic font-light text-sky-200">Personal Care Brand Together?</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-sky-100 max-w-xl mx-auto leading-relaxed font-normal">
              Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenQuote()}
                className="px-6 py-3.5 bg-white text-[#164666] hover:bg-sky-50 font-medium text-xs sm:text-sm rounded-lg shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                Request Custom Formulation Quote
              </button>
              <a
                href="tel:+919724681096"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm rounded-lg border border-white/20 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-sky-200" />
                <span>Call: +91 97246 81096</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedCategory={selectedProduct || `${showcase.hero.title} Private Label`}
      />
    </div>
  );
}

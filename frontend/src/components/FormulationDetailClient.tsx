"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
import {
  Send,
  Phone,
  Check,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  Droplet,
  Layers,
  FlaskConical,
  Award,
} from "lucide-react";
import { FormulationDetail } from "@/data/productFormulations";
import QuoteModal from "@/components/QuoteModal";

interface FormulationDetailClientProps {
  formulation: FormulationDetail;
  activeCategorySlug?: string;
  relatedFormulations?: { name: string; slug: string }[];
}

export default function FormulationDetailClient({
  formulation,
  activeCategorySlug,
  relatedFormulations = [],
}: FormulationDetailClientProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [data, setData] = useState(formulation);
  const catSlug = activeCategorySlug || data.categorySlug;

  React.useEffect(() => {
    let isMounted = true;
    fetch(`${API_BASE_URL}/api/products/${formulation.slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Product not in live db');
        return res.json();
      })
      .then((live) => {
        if (!isMounted || !live) return;
        setData((prev) => ({
          ...prev,
          name: live.name || prev.name,
          eyebrow: live.eyebrow || prev.eyebrow,
          titleLine1: live.titleLine1 || prev.titleLine1,
          titleLine2: live.titleLine2 || prev.titleLine2,
          cleanroomBadge: live.cleanroomBadge || prev.cleanroomBadge,
          moqBadge: live.moqBadge || prev.moqBadge,
          headline: live.headline || prev.headline,
          tagline: live.tagline || prev.tagline,
          image: live.image || prev.image,
          imageAlt: live.imageAlt || prev.imageAlt,
          format: live.format || prev.format,
          pH: live.pH || prev.pH,
          keyActives:
            Array.isArray(live.keyActives) && live.keyActives.length > 0
              ? live.keyActives
              : Array.isArray(live.actives) && live.actives.length > 0
                ? live.actives
                : prev.keyActives,
          skinTypes:
            Array.isArray(live.skinTypes) && live.skinTypes.length > 0
              ? live.skinTypes
              : prev.skinTypes,
          packagingOptions:
            Array.isArray(live.packagingOptions) && live.packagingOptions.length > 0
              ? live.packagingOptions
              : Array.isArray(live.packagingTypes) && live.packagingTypes.length > 0
                ? live.packagingTypes
                : prev.packagingOptions,
          overviewParagraphs:
            Array.isArray(live.overviewParagraphs) && live.overviewParagraphs.length > 0
              ? live.overviewParagraphs
              : prev.overviewParagraphs,
          whyChoosePoints:
            Array.isArray(live.whyChoosePoints) && live.whyChoosePoints.length > 0
              ? live.whyChoosePoints
              : prev.whyChoosePoints,
          expandHeadline: live.expandHeadline || prev.expandHeadline,
          expandParagraphs:
            Array.isArray(live.expandParagraphs) && live.expandParagraphs.length > 0
              ? live.expandParagraphs
              : prev.expandParagraphs,
        }));
      })
      .catch(() => {
        // Fallback to static formulation data
      });

    return () => {
      isMounted = false;
    };
  }, [formulation.slug]);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {/* Breadcrumb Top Bar */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#164666] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#164666] transition-colors">
              Product Range
            </Link>
            <span>/</span>
            <Link
              href={`/products/${catSlug}`}
              className="hover:text-[#164666] transition-colors"
            >
              {data.categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-[#164666] font-semibold">{data.name}</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1. MAIN FORMULATION SHOWCASE (Matching Image 1)         */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Product Studio Mockup Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 p-4 shadow-xl group">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-sky-50/40">
                  <Image
                    src={data.image}
                    alt={data.imageAlt}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#164666] border border-slate-200 shadow-xs">
                    {data.cleanroomBadge || "Ahmedabad Cleanroom Compounding"}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-semibold text-emerald-700 border border-emerald-200 shadow-xs">
                    {data.moqBadge || "Flexible Low MOQ"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Manufacturing Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                {/* Brand Micro-header */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-[1.5px] bg-[#4a728e]" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                    {data.eyebrow || "Certified Cosmetics Manufacturer • Ahmedabad, India"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
                  {data.titleLine1 || (data.headline ? data.headline.replace(/ Manufacturer.*/, "") : data.name)}{" "}
                  <span className="font-serif italic font-light text-[#1b628b]">
                    {data.titleLine2 || "Manufacturer in India."}
                  </span>
                </h1>

                {/* Subtitle / Tagline */}
                <p className="text-xs sm:text-sm font-medium text-[#1b628b] mt-1.5 uppercase tracking-wider">
                  {data.tagline}
                </p>

                {/* Center Accent Underline */}
                <div className="w-20 h-1 bg-[#1b628b] rounded-full mt-3.5 mb-5" />
              </div>

              {/* 3 Detailed Technical Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal">
                {data.overviewParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Technical Specifications Pills */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="font-bold text-[#0f172a] uppercase tracking-wider text-[10px] text-[#64748b] mb-1">
                      Key Active Ingredients
                    </div>
                    <div className="font-medium text-[#164666]">
                      {data.keyActives.join(", ")}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="font-bold text-[#0f172a] uppercase tracking-wider text-[10px] text-[#64748b] mb-1">
                      Suitable Skin Types
                    </div>
                    <div className="font-medium text-[#164666]">
                      {data.skinTypes.join(" • ")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsQuoteOpen(true)}
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
      {/* 2. WHY CHOOSE MANI LIFESTYLE (Matching Image 2)         */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Indian Manufacturing Excellence
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight uppercase">
              WHY CHOOSE MANI LIFESTYLE AS YOUR{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                {data.name.toUpperCase()} MANUFACTURER?
              </span>
            </h2>

            {/* Accent Underline */}
            <div className="w-24 h-1 bg-[#164666] mx-auto mt-4" />
          </div>

          {/* 5 Features List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {data.whyChoosePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#164666]/40 hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#164666] border border-sky-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors">
                    {point.title}:
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1 font-normal">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* 3. EXPAND YOUR LINE SECTION (Matching Image 2 lower)    */}
          {/* ======================================================== */}
          <div className="mt-16 pt-12 border-t border-slate-200/80 max-w-4xl mx-auto space-y-5">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal leading-tight">
              {data.expandHeadline}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal">
              {data.expandParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-6 py-3.5 bg-[#164666] hover:bg-[#10364f] text-white font-medium text-xs sm:text-sm rounded-lg shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                Inquire Formulation & Samples
              </button>
              <Link
                href={`/products/${catSlug}`}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#0f172a] font-medium text-xs sm:text-sm rounded-lg border border-[#c8d9e6] hover:border-[#164666] transition-all shadow-xs flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4 text-[#164666]" />
                <span>Back to All {data.categoryTitle}s</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. EXPLORE OTHER FORMULATIONS IN THIS CATEGORY           */}
      {/* ======================================================== */}
      {relatedFormulations.length > 0 && (
        <section className="py-16 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#4a728e] font-semibold">
                  More Options in {formulation.categoryTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#0f172a] font-normal mt-0.5">
                  Explore Other Formulation Variants
                </h3>
              </div>
              <Link
                href={`/products/${catSlug}`}
                className="text-xs font-semibold text-[#164666] hover:text-[#10364f] flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {relatedFormulations.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/products/${catSlug}/${rel.slug}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#164666] shadow-2xs hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-slate-700 group-hover:text-[#164666] transition-colors truncate">
                    {rel.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1b628b] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote / RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedCategory={`${formulation.name} Private Label`}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  FlaskConical,
  Filter,
} from "lucide-react";
import { productCategories, sampleProducts, ProductItem } from "@/data/products";
import QuoteModal from "@/components/QuoteModal";

export default function ProductsPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>();

  // Filter categories by division
  const availableCategories =
    selectedDivision === "all"
      ? productCategories
      : productCategories.filter((c) => c.division === selectedDivision);

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesDivision =
      selectedDivision === "all" || product.division === selectedDivision;
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.format.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keyActives.some((a) =>
        a.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDivision && matchesCategory && matchesSearch;
  });

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      {/* 1. Header Hero */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-sky-50/70 via-white to-[#f8fafc] border-b border-slate-200 overflow-hidden text-center">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#164666]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3.5 sm:space-y-4">
          {/* Brand Micro-header */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Certified Cosmetics Manufacturer • Ahmedabad, India
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
            Formulation Catalog &{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Manufacturing Range.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>

          {/* Division Switcher */}
          <div className="pt-4 flex items-center justify-center gap-2">
            {[
              { id: "all", label: "All Formulations" },
              { id: "Skin Care Range", label: "Skin Care Range" },
              { id: "Personal Care Range", label: "Personal Care Range" },
            ].map((div) => (
              <button
                key={div.id}
                onClick={() => {
                  setSelectedDivision(div.id);
                  setSelectedCategory("all");
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedDivision === div.id
                    ? "bg-[#164666] text-white shadow-md shadow-[#164666]/20"
                    : "bg-white text-[#475569] border border-slate-200 hover:border-[#164666]/40 hover:text-[#164666]"
                }`}
              >
                {div.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Visual Category Quick-Jump Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0f172a] font-normal">
                Explore by Category Vertical
              </h2>
              <p className="text-xs sm:text-sm text-[#64748b] mt-0.5">
                Click any category to inspect manufacturing specs, packaging compatibility & benchmark formulations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {availableCategories.map((cat) => {
              const count = sampleProducts.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group relative bg-[#f8fafc] hover:bg-white rounded-2xl border border-slate-200 hover:border-[#164666]/40 shadow-xs hover:shadow-lg transition-all p-3 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative w-full h-28 rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-serif font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-tight line-clamp-1">
                      {cat.shortTitle}
                    </h3>
                    <p className="text-[10px] text-[#64748b] mt-0.5">
                      {count}+ Formulations
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-[#164666]">
                    <span>View Specs</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Search & Category Filters Bar */}
      <section className="py-6 bg-white/95 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search active (Vit C, Retinol), formula, or concern..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#f8fafc] border border-slate-200 rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#164666] text-white shadow-2xs"
                    : "bg-[#f8fafc] text-[#475569] border border-slate-200 hover:bg-white"
                }`}
              >
                All Subcategories ({sampleProducts.length})
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat.slug
                      ? "bg-[#164666] text-white shadow-2xs"
                      : "bg-[#f8fafc] text-[#475569] border border-slate-200 hover:bg-white"
                  }`}
                >
                  {cat.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-[#64748b]">
              Showing <strong className="text-[#0f172a]">{filteredProducts.length}</strong> bench formulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-[#164666]/40 shadow-xs hover:shadow-xl hover:shadow-[#164666]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 space-y-4 flex-1">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-sky-50 text-[11px] font-bold text-[#164666] border border-[#cbe4f4]">
                      {product.formulaCode}
                    </span>
                    {product.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200">
                        {product.badge}
                      </span>
                    )}
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 ml-auto">
                      MOQ: {product.standardMOQ}
                    </span>
                  </div>

                  {/* Format Pill */}
                  <div className="text-[11px] font-semibold tracking-wider text-[#1b628b] uppercase">
                    {product.format}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-serif font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Short Desc */}
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Hero Actives */}
                  <div>
                    <div className="text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1.5">
                      Hero Actives:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.keyActives.map((active, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-50 text-[10px] font-medium text-[#164666] border border-slate-200"
                        >
                          {active}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Packaging */}
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-[#64748b] space-y-1">
                    <div className="font-semibold text-[#0f172a] flex items-center gap-1.5 text-xs">
                      <Package className="w-3.5 h-3.5 text-[#1b628b]" />
                      <span>Packaging:</span>
                    </div>
                    <p className="text-[11px] text-[#475569]">
                      {product.packagingOptions.join(" • ")}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-[#64748b]">
                    Turnaround: <span className="font-semibold text-[#0f172a]">{product.leadTime}</span>
                  </div>
                  <button
                    onClick={() => handleOpenQuote(product.name)}
                    className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-semibold rounded-lg shadow-xs transition-all hover:scale-103 cursor-pointer flex items-center gap-1"
                  >
                    <span>Request Sample</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 5. Custom Benchmark Prototyping CTA Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white via-sky-50/60 to-white border border-[#cbe4f4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b628b]">
                Custom R&D Formulation
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f172a]">
                Don&apos;t see your exact formulation?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-2xl leading-relaxed">
                Our Ahmedabad R&D laboratory develops proprietary formulas from scratch or reverse-engineers target benchmarks with custom sensory textures and active loading.
              </p>
            </div>
            <button
              onClick={() => handleOpenQuote("Custom Formulation Development")}
              className="px-6 py-3 bg-[#164666] hover:bg-[#10364f] text-white text-xs sm:text-sm font-semibold rounded-xl shrink-0 shadow-md shadow-[#164666]/20 transition-all hover:scale-102 cursor-pointer"
            >
              Request Custom R&D Quote
            </button>
          </div>
        </div>
      </section>

      {/* Quote / RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedCategory={selectedProductForQuote || "Custom Formulation"}
      />
    </div>
  );
}

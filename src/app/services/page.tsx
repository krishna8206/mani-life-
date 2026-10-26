"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  Package,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { servicesData } from "@/data/services";
import QuoteModal from "@/components/QuoteModal";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#0f172a]">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f7fb] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3.5 sm:space-y-4">
          {/* Brand Micro-header */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
              Certified Cosmetics Manufacturer • Ahmedabad, India
            </span>
            <span className="w-8 h-[1.5px] bg-[#4a728e]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
            Precision Manufacturing Models for{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Beauty Brands.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.slug}
              className="p-8 bg-white border border-[#e2e8f0] hover:border-[#164666] rounded-3xl transition-all shadow-xs hover:shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-[#f0f7fb] text-[#164666] border border-[#bae6fd] flex items-center justify-center font-bold text-sm font-serif">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#1b628b] uppercase tracking-widest block">
                      {service.tagline}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-[#0f172a]">{service.title}</h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5c554a] leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-[#38332c]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 gold-button text-xs font-bold rounded-xl transition-all hover:scale-105"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-5 py-2.5 bg-[#f8fafc] hover:bg-[#f4efe4] text-[#1c1a17] text-xs font-bold rounded-xl border border-[#e2e8f0] transition-colors"
                  >
                    Get Feasibility Quote
                  </button>
                </div>
              </div>

              {/* Specs Box */}
              <div className="lg:col-span-5 bg-[#f8fafc] border border-[#bae6fd] rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold text-[#164666] uppercase tracking-wider pb-2 border-b border-[#bae6fd]">
                  Operating Parameters
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Minimum Order Quantity:</span>
                    <span className="font-bold text-[#0f172a]">{service.moq}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Production Turnaround:</span>
                    <span className="font-bold text-[#1b628b]">{service.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Formulation IP Ownership:</span>
                    <span className="font-bold text-emerald-700">100% Client Owned</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Cleanroom Compliance:</span>
                    <span className="font-bold text-[#0f172a]">ISO 22716 / WHO-GMP</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#bae6fd] text-[11px] text-[#787163]">
                  Samples available on demand. Feasibility and NDA clearance within 24 hours.
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#f0f7fb] via-[#f7f0df] to-[#f4ebda] border border-[#e2e8f0] text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#0f172a]">
            Unsure Which Contract Manufacturing Tier Fits Your Growth?
          </h3>
          <p className="text-xs text-[#5c554a] max-w-xl mx-auto">
            Our technical compounding advisors assess your target unit volumes, retail price points, and active formulations to structure the most capital-efficient path.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105"
            >
              Book Technical Consultation
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white hover:bg-[#f8fafc] text-[#0f172a] font-semibold text-xs rounded-xl border border-[#e2e8f0] transition-colors"
            >
              Contact Facility
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Users,
  Building2,
  Microscope,
  Sparkles,
  ArrowRight,
  Leaf,
  Layers,
  MapPin,
  Phone,
} from "lucide-react";
import { certificationsData } from "@/data/certifications";
import QuoteModal from "@/components/QuoteModal";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#0f172a]">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f7fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3.5 sm:space-y-4">
            {/* Brand Micro-header */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Certified Cosmetics Manufacturer • Ahmedabad, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#0f172a] font-normal leading-[1.12] tracking-tight">
              Bridging Clean Botanical Pharmacology &{" "}
              <span className="font-serif italic font-light text-[#1b628b]">
                Advanced Dermal Science.
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl">
              Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Stats Grid */}
      <section className="py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#f8fafc] border border-[#bae6fd] rounded-3xl text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">500+</div>
              <div className="text-xs text-[#736d62] mt-1 font-semibold uppercase tracking-wider">
                Bench-Proven Formulations
              </div>
            </div>
            <div className="p-6 bg-[#f8fafc] border border-[#bae6fd] rounded-3xl text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1b628b]">Class 100K</div>
              <div className="text-xs text-[#736d62] mt-1 font-semibold uppercase tracking-wider">
                Cleanroom Compounding
              </div>
            </div>
            <div className="p-6 bg-[#f8fafc] border border-[#bae6fd] rounded-3xl text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0f766e]">500 Units</div>
              <div className="text-xs text-[#736d62] mt-1 font-semibold uppercase tracking-wider">
                Startup Accessible MOQ
              </div>
            </div>
            <div className="p-6 bg-[#f8fafc] border border-[#bae6fd] rounded-3xl text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">21 Days</div>
              <div className="text-xs text-[#736d62] mt-1 font-semibold uppercase tracking-wider">
                Rapid Market Launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Heritage */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
              Our Philosophy & Campus
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">
              Elevating Product Integrity from Active Compound to Global Retail Shelves
            </h2>
            <p className="text-sm text-[#5c554a] leading-relaxed">
              Mani Lifestyle was founded to solve a pervasive frustration in cosmetics manufacturing: the divide between rigid, inaccessible industrial contract packagers and low-quality uncertified mixers.
            </p>
            <p className="text-sm text-[#5c554a] leading-relaxed">
              We operate an accredited cleanroom manufacturing campus at Gopal Charan Industrial Hub in Ahmedabad, Gujarat. Our facility features multi-stage reverse osmosis water plants, vacuum emulsifiers, and automated tube and rotary bottle filling lines engineered for precision.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#0f172a] text-xs block">Double RO + EDI Water Purification:</strong>
                  <span className="text-xs text-[#6e685f]">
                    Zero-microbial pharmaceutical-grade purified water infrastructure ensuring stable, contaminant-free emulsions.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#0f172a] text-xs block">In-House Analytical Quality Suite:</strong>
                  <span className="text-xs text-[#6e685f]">
                    Real-time HPLC assay verification, viscosity profiling, heavy metal testing, and accelerated thermal stability chambers.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#0f172a] text-xs block">Cruelty-Free & Clean Chemistry:</strong>
                  <span className="text-xs text-[#6e685f]">
                    Strict zero-animal-testing standards and formulations free from Parabens, Sulfates, Phthalates, and Formaldehyde donors.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Plant Features Visual Card with Lab Image */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#e2e8f0] shadow-xl h-64">
              <Image
                src="/images/cleanroom-lab.jpg"
                alt="Mani Lifestyle Cleanroom Lab"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#164666]" />
                  Ahmedabad Compounding Cleanrooms
                </div>
                <div className="text-[11px] text-stone-200">
                  Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl space-y-4 shadow-xs">
              <h3 className="text-base font-serif font-bold text-[#0f172a]">
                Cleanroom Facility Specifications
              </h3>

              <div className="space-y-3 text-xs divide-y divide-[#ece6d9]">
                <div className="pt-2 flex justify-between">
                  <span className="text-[#736d62]">Air Cleanliness Standard:</span>
                  <strong className="text-[#0f172a]">ISO Class 8 (Class 100K) HEPA</strong>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#736d62]">Compounding Vessels:</span>
                  <strong className="text-[#0f172a]">SS316L Vacuum Homogenizers</strong>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#736d62]">Serum & Fluid Filling:</span>
                  <strong className="text-[#0f172a]">Rotary Monoblock Nitrogen Flush Lines</strong>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#736d62]">Wax & Kit Compounding:</span>
                  <strong className="text-[#0f172a]">Hot-Melt Jacketed Reactors & Tin Sealers</strong>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#736d62]">Regulatory Release:</span>
                  <strong className="text-emerald-700">Batch COA & MSDS Included</strong>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-3 gold-button font-bold rounded-xl text-xs shadow-md transition-transform hover:scale-102"
                >
                  Schedule an In-Person or Virtual Plant Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-20 bg-[#f7f4ec] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
              Global Verification
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0f172a] mt-3">
              Internationally Accredited Infrastructure
            </h2>
            <p className="text-xs text-[#6e685f] mt-1.5">
              Every production batch is certified against global pharmacopeia and cosmetic standards before leaving our Ahmedabad warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 bg-white border border-[#e2e8f0] rounded-3xl space-y-3 shadow-xs hover:border-[#164666] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#164666] bg-[#f0f7fb] px-2.5 py-0.5 rounded-full border border-[#bae6fd]">
                    {cert.badgeCode}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#0f172a]">{cert.name}</h3>
                <div className="text-xs font-medium text-[#736d62]">{cert.scope}</div>
                <p className="text-xs text-[#5c554a] leading-relaxed pt-2 border-t border-[#ece6d9]">
                  {cert.importance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-serif font-bold text-[#0f172a]">
          Partner with a Transparent, Science-Led Cosmetic Manufacturer
        </h2>
        <p className="text-xs text-[#5c554a] max-w-md mx-auto">
          Reach out directly to our Ahmedabad formulation desk. We provide pilot batch bench samples, complete cost breakdowns, and transparent timelines.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-8 py-3.5 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105"
          >
            Request Technical Consultation
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

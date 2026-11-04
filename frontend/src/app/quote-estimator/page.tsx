"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  Package,
  Send,
  ShieldCheck,
  ChevronRight,
  Calculator,
} from "lucide-react";
import { productCategories } from "@/data/products";

export default function QuoteEstimatorPage() {
  const [category, setCategory] = useState("Clinical Face Serums");
  const [serviceModel, setServiceModel] = useState("Private Label (OEM - Fast Launch)");
  const [targetUnits, setTargetUnits] = useState(1000);
  const [packagingType, setPackagingType] = useState("Amber Glass Dropper Pipette (30ml)");
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const isPrivateLabel = serviceModel.includes("Private Label");
  const isHighVolume = targetUnits >= 5000;

  const estimatedTimeline = isPrivateLabel
    ? isHighVolume
      ? "21 - 25 Days"
      : "18 - 21 Days"
    : isHighVolume
    ? "30 - 35 Days"
    : "25 - 30 Days";

  const sampleLeadTime = isPrivateLabel ? "3 - 5 Business Days" : "7 - 10 Business Days";

  const packagingList = [
    "Amber Glass Dropper Pipette (30ml / 50ml)",
    "Airless Pump Dispenser (50ml / 100ml)",
    "Soft-Touch Squeeze Tube with Flip Cap (100ml)",
    "Heavy-Wall Frosted Glass Jar (50g)",
    "Metallic Wax Tin (800g / Depilatory Cartridge)",
    "PCR Recyclable Shampoo/Lotion Bottle (250ml)",
  ];

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
            MOQ, Turnaround &{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Batch Estimator.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-8 bg-white border border-[#e2e8f0] rounded-3xl shadow-xs">
            {/* Step 1: Category */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#0f172a] flex items-center justify-between">
                <span>1. Select Product Category</span>
                <span className="text-xs text-[#1b628b] font-semibold">Step 1 of 4</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {productCategories.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setCategory(c.title)}
                    className={`p-3 text-xs text-left rounded-xl border transition-all ${
                      category === c.title
                        ? "bg-[#f0f7fb] border-[#164666] text-[#0f172a] font-bold shadow-xs"
                        : "bg-[#f8fafc] border-[#e2e8f0] text-[#524d45] hover:bg-white"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Manufacturing Route */}
            <div className="space-y-3 pt-6 border-t border-[#ece6d9]">
              <label className="text-sm font-bold text-[#0f172a] flex items-center justify-between">
                <span>2. Select Manufacturing Model</span>
                <span className="text-xs text-[#1b628b] font-semibold">Step 2 of 4</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "Private Label (OEM - Fast Launch)",
                  "Custom Formulation (ODM - Bespoke R&D)",
                  "Contract Toll Compounding",
                ].map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => setServiceModel(model)}
                    className={`p-3 text-xs text-left rounded-xl border transition-all ${
                      serviceModel === model
                        ? "bg-[#f0f7fb] border-[#164666] text-[#0f172a] font-bold shadow-xs"
                        : "bg-[#f8fafc] border-[#e2e8f0] text-[#524d45] hover:bg-white"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Batch Volume Slider */}
            <div className="space-y-3 pt-6 border-t border-[#ece6d9]">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[#0f172a]">
                  3. Target Order Batch Size
                </label>
                <span className="text-base font-extrabold text-[#1b628b] bg-[#f0f7fb] px-3.5 py-1 rounded-xl border border-[#bae6fd]">
                  {targetUnits.toLocaleString()} Finished Units
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={targetUnits}
                onChange={(e) => setTargetUnits(Number(e.target.value))}
                className="w-full accent-[#164666] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-[#8c8273]">
                <span>500 (Startup Tier)</span>
                <span>5,000 Units</span>
                <span>10,000 Units</span>
                <span>25,000+ Units</span>
              </div>
            </div>

            {/* Step 4: Packaging Preference */}
            <div className="space-y-3 pt-6 border-t border-[#ece6d9]">
              <label className="text-sm font-bold text-[#0f172a]">
                4. Preferred Primary Container
              </label>
              <select
                value={packagingType}
                onChange={(e) => setPackagingType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666]"
              >
                {packagingList.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic Estimate Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl shadow-xs space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-[#ece6d9]">
                <div>
                  <span className="text-xs font-bold text-[#1b628b] uppercase tracking-wider block">
                    Real-Time Production Scope
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#0f172a] mt-0.5">
                    Estimated Production Profile
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#736d62]">Category:</span>
                  <span className="font-bold text-[#0f172a] text-right">{category}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#736d62]">Batch Volume:</span>
                  <span className="font-bold text-[#0f172a]">{targetUnits.toLocaleString()} units</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#736d62]">Container:</span>
                  <span className="font-bold text-[#0f172a] text-right truncate max-w-[180px]">{packagingType}</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-[#bae6fd] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Bench Sample Dispatch:</span>
                    <span className="font-bold text-[#1b628b]">{sampleLeadTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#736d62]">Cleanroom Turnaround:</span>
                    <span className="font-bold text-emerald-700">{estimatedTimeline}</span>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <div className="text-xs font-bold text-emerald-900">Estimate Details Captured!</div>
                  <p className="text-[11px] text-emerald-700">
                    Our technical lead will reach out to <strong>{contactEmail}</strong> with formal pricing.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3 pt-2"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Lock In This Production Batch
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

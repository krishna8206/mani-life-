"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Send, ShieldCheck } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedCategory = "Clinical Face Serums",
}: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    category: preselectedCategory,
    serviceType: "Private Label (OEM)",
    expectedQuantity: "1,000 - 2,500 units",
    brandStage: "1 - 3 Years (Scaling)",
    packagingNeed: "Turnkey Sourcing Needed",
    targetCountry: "India / Domestic",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#e5dec9] rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Header pattern */}
        <div className="bg-gradient-to-r from-slate-50 via-sky-50/50 to-slate-50 p-6 border-b border-slate-200 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-[#164666] border border-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-[#164666]" /> Turnkey Manufacturing RFQ
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% NDA Protected
              </span>
            </div>
            <h2 className="text-xl font-serif font-bold text-[#0f172a] tracking-tight">
              Request Formulation Proposal & Custom Quote
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Certified cosmetics manufacturing in Ahmedabad, India. Custom & white-label skincare and haircare for startups, salons, and brands across India.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 p-1.5 rounded-xl hover:bg-white/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4 bg-white">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Inquiry Received Successfully</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-[#0f172a]">{formData.fullName}</strong>. Your project scope for{" "}
              <span className="text-[#164666] font-bold">{formData.category}</span> has been routed to our Ahmedabad technical compounding department. We will dispatch formulation proposals and laboratory sample availability within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-bold rounded-xl transition-all shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Full Name <span className="text-[#164666]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Brand / Company Name <span className="text-[#164666]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lumina Botanicals"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Business Email <span className="text-[#164666]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="priya@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Phone / WhatsApp <span className="text-[#164666]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Target Product Range
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                >
                  <option value="Clinical Face Serums">Clinical Face Serums (Vit C, Niacinamide, Salicylic)</option>
                  <option value="Cleansers & Toners">Cleansers, Face Washes & Clarifying Tonics</option>
                  <option value="Suncare & Moisturizers">SPF 50+ Invisible Fluids & Barrier Creams</option>
                  <option value="Professional Salon Facial Kits">Professional Salon Facial Kits & D-Tan Peels</option>
                  <option value="Depilatory & Waxing Essentials">Brazilian Stripless & Liposoluble Waxes</option>
                  <option value="Haircare & Scalp Treatments">Haircare, Scalp Serums & Keratin Masks</option>
                  <option value="Body, Bath & Wellness">Body Lotions, Scrubs & Spa Therapy</option>
                  <option value="Hydrogel Eye & Sleep Masks">Hydrogel Eye & Sleeping Lip Masks</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Manufacturing Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                >
                  <option value="Private Label (OEM)">Private Label (Turnkey Stock Formulations)</option>
                  <option value="Custom Formulation (ODM)">Custom R&D Formulation (Custom Active Bench)</option>
                  <option value="Contract Compounding">Contract Compounding & High-Speed Filling</option>
                  <option value="Salon Bulk Supply">Professional Salon Bulk Packs (5L / 10kg)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Planned Initial Order Batch
                </label>
                <select
                  value={formData.expectedQuantity}
                  onChange={(e) => setFormData({ ...formData, expectedQuantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                >
                  <option value="500 - 1,000 units">500 - 1,000 units (Startup Tier)</option>
                  <option value="1,000 - 2,500 units">1,000 - 2,500 units (Growth Tier)</option>
                  <option value="2,500 - 5,000 units">2,500 - 5,000 units (Established Tier)</option>
                  <option value="10,000+ units">10,000+ units (Enterprise / Export Scale)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Packaging Requirements
                </label>
                <select
                  value={formData.packagingNeed}
                  onChange={(e) => setFormData({ ...formData, packagingNeed: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                >
                  <option value="Turnkey Sourcing Needed">Mani Lifestyle Turnkey Packaging Supply</option>
                  <option value="Client Supplied Packaging">Client Will Supply Bottles / Jars / Tubes</option>
                  <option value="Custom Mold Development">Require Custom Tooling & Luxury Outer Boxes</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Project Specifics or Desired Benchmarks
              </label>
              <textarea
                rows={3}
                placeholder="Mention desired active ingredients, target skin feel, fragrance preference, or specific benchmark product..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero obligation • All formulas proprietary to your brand</span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all hover:scale-[1.02] shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                Submit RFQ
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

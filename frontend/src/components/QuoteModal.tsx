"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  CheckCircle,
  Sparkles,
  Send,
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  Building2,
  PackageCheck,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    category: preselectedCategory,
    serviceType: "Private Label (Ready Stock)",
    expectedQuantity: "1,000 - 2,500 units",
    packagingNeed: "Mani Lifestyle Packaging Supply",
    targetCountry: "India / Domestic",
    message: "",
  });

  // Sync category if preselectedCategory changes
  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, category: preselectedCategory }));
    }
  }, [preselectedCategory]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please enter your brand or company name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address";
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & generate RFQ reference
    setTimeout(() => {
      const generatedRef = `RFQ-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `Mani Lifestyle RFQ Scope (${referenceId})
Client: ${formData.fullName} (${formData.companyName})
Phone: ${formData.phone} | Email: ${formData.email}
Product: ${formData.category}
Service: ${formData.serviceType}
Batch: ${formData.expectedQuantity}
Packaging: ${formData.packagingNeed}
Notes: ${formData.message || "None"}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // WhatsApp Pre-filled message URL
  const whatsAppMessage = encodeURIComponent(
    `Hello Mani Lifestyle Team,\n\nI just submitted custom quote inquiry *${referenceId}*:\n- *Brand:* ${formData.companyName}\n- *Contact:* ${formData.fullName} (${formData.phone})\n- *Category:* ${formData.category}\n- *Service:* ${formData.serviceType}\n- *Batch Size:* ${formData.expectedQuantity}\n\nPlease share formulation catalogs and sample availability.`
  );
  const whatsAppUrl = `https://wa.me/919724681096?text=${whatsAppMessage}`;

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[94vh] sm:max-h-[90vh] bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col will-change-transform animate-in zoom-in-95 duration-200"
      >
        {/* ── 1. FIXED MODAL HEADER ── */}
        <div className="bg-gradient-to-r from-slate-50 via-sky-50/40 to-slate-50 p-4 sm:p-6 border-b border-slate-200 flex justify-between items-start shrink-0">
          <div className="pr-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-sky-50 text-[#164666] border border-sky-200">
                <Sparkles className="w-3 h-3 text-[#164666]" /> Contract Manufacturing RFQ
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% NDA Protected
              </span>
            </div>
            <h2
              id="quote-modal-title"
              className="text-base sm:text-lg md:text-xl font-serif font-bold text-[#0f172a] tracking-tight leading-tight"
            >
              Request Custom Formulation & Batch Quote
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
              Certified cosmetics manufacturer in Ahmedabad, India. Custom skincare, haircare, and salon products for startups & growing brands.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 p-2 -mr-1 -mt-1 rounded-xl hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── 2. SCROLLABLE FORM / SUCCESS BODY ── */}
        {submitted ? (
          /* SUCCESS SCREEN */
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto flex-1 bg-white">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[11px] font-mono text-slate-700 font-semibold mb-2">
                Reference: {referenceId}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f172a]">
                Quote Scope Received Successfully
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed mt-2">
                Thank you, <strong className="text-[#0f172a]">{formData.fullName}</strong>. Your requirement for{" "}
                <span className="text-[#164666] font-bold">{formData.category}</span> ({formData.expectedQuantity}) has been routed to our Ahmedabad compounding plant.
              </p>
            </div>

            {/* Quick Action Buttons on Success */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Scope"}</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#164666]" />
              <span>Technical compounding team responds within 24 business hours</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* INPUT FORM */
          <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 overflow-hidden">
            <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1 bg-white">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name <span className="text-[#164666]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border ${
                      errors.fullName ? "border-rose-500 bg-rose-50/20" : "border-slate-200"
                    } rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Brand / Company Name <span className="text-[#164666]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lumina Botanicals"
                    value={formData.companyName}
                    onChange={(e) => {
                      setFormData({ ...formData, companyName: e.target.value });
                      if (errors.companyName) setErrors({ ...errors, companyName: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border ${
                      errors.companyName ? "border-rose-500 bg-rose-50/20" : "border-slate-200"
                    } rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors`}
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Business Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business Email <span className="text-[#164666]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="priya@brand.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border ${
                      errors.email ? "border-rose-500 bg-rose-50/20" : "border-slate-200"
                    } rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Phone / WhatsApp Number <span className="text-[#164666]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border ${
                      errors.phone ? "border-rose-500 bg-rose-50/20" : "border-slate-200"
                    } rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Product Range & Manufacturing Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Target Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
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
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                  >
                    <option value="Private Label (Ready Stock)">Private Label (Ready Tested Formulations)</option>
                    <option value="Custom Formulation (ODM)">Custom R&D Formulation (Exclusive Active Bench)</option>
                    <option value="Contract Compounding">Contract Compounding & High-Speed Filling</option>
                    <option value="Salon Bulk Supply">Professional Salon Bulk Packs (5L / 10kg)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Initial Batch Size & Packaging Need */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Planned Initial Order Batch
                  </label>
                  <select
                    value={formData.expectedQuantity}
                    onChange={(e) => setFormData({ ...formData, expectedQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
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
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666] focus:bg-white"
                  >
                    <option value="Mani Lifestyle Packaging Supply">Mani Lifestyle Packaging Supply</option>
                    <option value="Client Supplied Packaging">Client Will Supply Bottles / Jars / Tubes</option>
                    <option value="Custom Mold Development">Require Custom Tooling & Luxury Outer Boxes</option>
                  </select>
                </div>
              </div>

              {/* Message / Specifications */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Project Notes or Target Benchmarks (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention desired active ingredients, fragrance notes, texture benchmarks, or regulatory targets..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm sm:text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#164666] focus:bg-white transition-colors resize-none"
                />
              </div>
            </div>

            {/* ── 3. FIXED MODAL FOOTER ── */}
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 self-start sm:self-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Proprietary formulation NDA • Zero obligation quote</span>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#164666] hover:bg-[#10364f] active:scale-[0.98] disabled:opacity-70 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

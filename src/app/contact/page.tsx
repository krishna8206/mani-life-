"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Building2,
  Calendar,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    category: "Clinical Face Serums",
    businessType: "D2C Brand Owner",
    volume: "500 - 1,000 units (Startup Low MOQ)",
    city: "",
    country: "India",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Connect with Our Formulation &{" "}
            <span className="font-serif italic font-light text-[#1b628b]">
              Manufacturing Team.
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-2xl mx-auto">
            Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
          </p>
        </div>
      </section>

      {/* Main Form and Campus Info */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Campus Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl shadow-xs space-y-6">
              <h2 className="text-xl font-serif font-bold text-[#0f172a] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#164666]" />
                Mani Lifestyle Manufacturing Campus
              </h2>

              <div className="space-y-4 text-xs text-[#524d45]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#164666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0f172a] text-sm block">Factory & Cleanroom Address:</strong>
                    <span>
                      Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, Ahmedabad, Gujarat – 382430, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#164666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0f172a] text-sm block">Direct Phone & WhatsApp:</strong>
                    <span>+91 97246 81096 (Technical Sales & RFQs)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#164666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0f172a] text-sm block">Official Corporate Email:</strong>
                    <span>sales@manilifestyle.com</span>
                    <br />
                    <span>info@manilifestyle.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#164666] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0f172a] text-sm block">Compounding Plant Hours:</strong>
                    <span>Monday to Saturday: 09:30 AM – 06:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-[#ece6d9]">
                <a
                  href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20request%20a%20manufacturing%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#128c7e] hover:bg-[#075e54] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Instant WhatsApp Technical Sales
                </a>
              </div>
            </div>

            {/* Plant Audit Callout */}
            <div className="p-6 bg-[#f8fafc] border border-[#bae6fd] rounded-3xl space-y-2">
              <h3 className="text-sm font-serif font-bold text-[#0f172a] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#164666]" />
                Schedule a Cleanroom Plant Visit
              </h3>
              <p className="text-xs text-[#6e685f] leading-relaxed">
                Brand founders, salon owners, and procurement directors are warmly invited to inspect our automated vacuum homogenizers, rotary filling lines, and QA analytical testing suite.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl shadow-xs">
              <div className="pb-6 border-b border-[#ece6d9] mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                  Technical Request For Quotation (RFQ)
                </h2>
                <p className="text-xs text-[#736d62] mt-1">
                  Submit your product specifications. Our Ahmedabad compounding scientists will evaluate feasibility and respond with a formal quotation within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0f172a]">Proposal Request Received</h3>
                  <p className="text-xs sm:text-sm text-[#524d45] leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-[#0f172a]">{form.fullName}</strong>. Your project inquiry has been forwarded directly to the Mani Lifestyle technical compounding desk.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 gold-button text-xs font-bold rounded-xl mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Full Name <span className="text-[#164666]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Brand / Business Name <span className="text-[#164666]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lumina Botanicals"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Business Email <span className="text-[#164666]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="priya@brand.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Phone / WhatsApp <span className="text-[#164666]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Primary Product Interest
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666]"
                      >
                        <option value="Clinical Face Serums">Clinical Face Serums & Actives</option>
                        <option value="Cleansers & Toners">Cleansers, Washes & Tonics</option>
                        <option value="Suncare & Moisturizers">Invisible SPF 50+ Sunscreens</option>
                        <option value="Professional Salon Facial Kits">6-Step Salon Facial Kits</option>
                        <option value="Depilatory & Waxing Essentials">Brazilian Wax Beads & Tins</option>
                        <option value="Haircare & Scalp Treatments">Haircare & Scalp Serums</option>
                        <option value="Body, Bath & Wellness">Body Lotions & Spa Therapy</option>
                        <option value="Hydrogel Eye & Sleep Masks">Hydrogel Eye & Lip Sleeping Masks</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#38332c] mb-1">
                        Planned Initial Batch Volume
                      </label>
                      <select
                        value={form.volume}
                        onChange={(e) => setForm({ ...form, volume: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] focus:outline-none focus:border-[#164666]"
                      >
                        <option value="500 - 1,000 units (Startup Low MOQ)">500 - 1,000 units (Startup Tier)</option>
                        <option value="1,000 - 2,500 units">1,000 - 2,500 units (Growth Tier)</option>
                        <option value="2,500 - 5,000 units">2,500 - 5,000 units (Commercial Tier)</option>
                        <option value="10,000+ units">10,000+ units (Export & Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#38332c] mb-1">
                      Project Notes or Specific Benchmark Targets
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding target benchmark textures, preferred active concentrations, container preferences, or timeline constraints..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[#0f172a] placeholder-[#999083] focus:outline-none focus:border-[#164666] focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#ece6d9]">
                    <div className="text-[11px] text-[#736d62] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero obligation • All formulas 100% proprietary to your brand</span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 gold-button text-xs font-bold rounded-xl flex items-center gap-2 transition-transform hover:scale-102"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send RFQ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

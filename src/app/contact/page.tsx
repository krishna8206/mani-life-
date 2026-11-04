"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Copy,
  Check,
  Send,
  CheckCircle2,
  Building2,
  Navigation,
  MessageSquare,
} from "lucide-react";
import CosmeticAmbientBackground from "@/components/CosmeticAmbientBackground";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzWRCmWe0G4_I7MpDhdwo_Tm_Vokm2g6BiR14bvRpTPaPDo_deU_wSh99iGSfnSZZGhtA/exec";

    try {
      const data = new FormData();
      data.append("Full Name", formData.name);
      data.append("Email Address", formData.email);
      data.append("Contact Number", formData.phone);
      data.append("Message", formData.message || "No message provided.");
      data.append("Source Form", "Contact Us Form");

      // Submit to live Google Apps Script endpoint
      await fetch(scriptUrl, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white relative overflow-hidden font-sans">
      {/* --- PREMIUM ZERO-LAG COSMETIC AMBIENT BACKGROUND ANIMATION --- */}
      <CosmeticAmbientBackground />

      {/* ======================================================== */}
      {/* 1. HERO SECTION (THEMED WITH SITE DESIGN SYSTEM)         */}
      {/* ======================================================== */}
      <section className="relative w-full pt-20 pb-16 sm:pt-24 sm:pb-20 text-center overflow-hidden border-b border-sky-200/40">
        {/* Background Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/contact-hero.webp')" }}
        />
        {/* Luxury Deep Ocean / Navy Dual-Tone Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 via-[#10364f]/75 to-[#0f172a]/90 backdrop-blur-[1px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          {/* Brand Micro-header with decorative horizontal bars */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-[1.5px] bg-sky-300/60" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-sky-200">
              Certified Cosmetics Manufacturer • Ahmedabad, India
            </span>
            <span className="w-8 h-[1.5px] bg-sky-300/60" />
          </div>

          {/* Master Headline in Playfair Serif with Italic Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif text-white tracking-tight font-normal leading-tight">
            Contact <span className="font-serif italic font-light text-sky-300">Us.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            We&apos;re here to answer your questions and help you find the right solutions
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CONTACT INFO & ENQUIRY FORM SECTION (2 COLUMNS)       */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ──────────────────────────────────────────────────────── */}
          {/* LEFT COLUMN: Contact Info                                */}
          {/* ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Column Header matching Site's Signature Style */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[1.5px] bg-[#4a728e]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                  Direct Channels
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-tight tracking-tight">
                Contact <span className="font-serif italic font-light text-[#1b628b]">Info.</span>
              </h2>
              <div className="w-16 h-1 bg-[#1b628b] rounded-full mt-2 mb-3" />
              <p className="text-sm sm:text-[15px] text-[#64748b] leading-relaxed font-normal">
                Feel free to ask us any questions
                <br className="hidden sm:inline" />
                or business enquiry, we will get back to you soon!
              </p>
            </div>

            {/* Information Cards Grid (Tactile Cards matching Core Pillars) */}
            <div className="space-y-4 pt-1">
              
              {/* Item 1: Working Hours */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/icon-time.png"
                    alt="Time Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                    Shift Operating Hours
                  </span>
                  <div className="font-semibold text-[#0f172a]">
                    Mon – Fri: 8.30am – 5.30pm
                  </div>
                  <div className="text-[#64748b]">
                    Sat (Alternate): 8.30am – 12.30pm
                  </div>
                </div>
              </div>

              {/* Item 2: Phone */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/icon-phone.png"
                    alt="Phone Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                      Phone Calls
                    </span>
                    <a
                      href="tel:+919724681096"
                      className="text-base sm:text-lg font-bold text-[#164666] hover:text-[#1b628b] transition-colors"
                    >
                      +91 97246 81096
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("+919724681096", "phone")}
                    title="Copy Phone"
                    className="p-2 rounded-xl text-slate-400 hover:text-[#164666] hover:bg-[#f0f7fb] transition-colors"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Item 3: WhatsApp */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/icon-whatsapp.png"
                    alt="WhatsApp Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href="https://wa.me/919724681096"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#164666] hover:text-[#1b628b] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>+91 97246 81096</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                  <a
                    href="https://wa.me/919724681096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] hover:bg-[#164666] hover:text-white text-xs font-semibold transition-all"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Item 4: Emails */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/icon-email.png"
                    alt="Email Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                    Official Emails
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:enquiry@manilifestyle.com"
                      className="text-xs sm:text-sm font-semibold text-[#164666] hover:text-[#1b628b] hover:underline"
                    >
                      enquiry@manilifestyle.com
                    </a>
                    <button
                      onClick={() => handleCopy("enquiry@manilifestyle.com", "email1")}
                      title="Copy Email"
                      className="p-1 rounded text-slate-400 hover:text-[#164666]"
                    >
                      {copiedType === "email1" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:sales@manilifestyle.com"
                      className="text-xs sm:text-sm font-semibold text-[#164666] hover:text-[#1b628b] hover:underline"
                    >
                      sales@manilifestyle.com
                    </a>
                    <button
                      onClick={() => handleCopy("sales@manilifestyle.com", "email2")}
                      title="Copy Email"
                      className="p-1 rounded text-slate-400 hover:text-[#164666]"
                    >
                      {copiedType === "email2" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 5: Location */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/icon-location.png"
                    alt="Location Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="text-xs sm:text-sm text-[#475569] leading-relaxed flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                    Factory Cleanroom Address
                  </span>
                  <div className="font-semibold text-[#0f172a]">
                    Plot No. C5, Road No. 5,
                  </div>
                  <div>Gopal Charan Industrial Hub,</div>
                  <div>Bakrol Bajrang, 382430, Ahmedabad</div>
                </div>
              </div>

            </div>

            {/* Cleanroom Plant Visit Callout Box (Theme Styling) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f7fb] to-white border border-[#c8d9e6] shadow-xs space-y-2.5">
              <h3 className="font-bold text-[#164666] text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#164666]" />
                Schedule Cleanroom Plant Visit
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Brand founders, salon owners, and procurement teams are warmly invited
                to inspect our automated vacuum homogenizers, microbiology QA lab, and Class 100,000 cleanroom.
              </p>
              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20schedule%20a%20cleanroom%20factory%20inspection%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#164666] hover:underline pt-1"
              >
                <span>Book Factory Inspection Date</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────── */}
          {/* RIGHT COLUMN: Enquiry Form                               */}
          {/* ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#164666] via-[#1b628b] to-[#0284c7]" />

            {/* Header matching Site's Signature Style */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[1.5px] bg-[#4a728e]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                  Send an Inquiry
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#0f172a] font-normal leading-tight tracking-tight">
                Enquiry <span className="font-serif italic font-light text-[#1b628b]">Form.</span>
              </h2>
              <div className="w-16 h-1 bg-[#1b628b] rounded-full mt-2 mb-3" />
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Fill in the details below and our formulation compounding team will contact you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0f172a]">
                  Success! Your query has been submitted.
                </h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Mani Lifestyle. Our technical and business
                  team has received your inquiry and will contact you shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20have%20submitted%20the%20contact%20enquiry%20form."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-xs transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="contact-us-form"
                name="contact-us-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="form-group space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-[13px] font-semibold text-[#0f172a]"
                  >
                    Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Full Name"
                    required
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-[#c8d9e6] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:ring-1 focus:ring-[#164666] transition-all shadow-xs"
                  />
                </div>

                {/* Email Address */}
                <div className="form-group space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-[13px] font-semibold text-[#0f172a]"
                  >
                    E-mail <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email Address"
                    required
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-[#c8d9e6] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:ring-1 focus:ring-[#164666] transition-all shadow-xs"
                  />
                </div>

                {/* Contact Number */}
                <div className="form-group space-y-1.5">
                  <label
                    htmlFor="contact-number"
                    className="block text-xs sm:text-[13px] font-semibold text-[#0f172a]"
                  >
                    Contact Number <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-number"
                    name="Contact Number"
                    required
                    placeholder="Enter Your Contact Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-[#c8d9e6] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:ring-1 focus:ring-[#164666] transition-all shadow-xs"
                  />
                </div>

                {/* About Your Project */}
                <div className="form-group space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-[13px] font-semibold text-[#0f172a]"
                  >
                    About Your Project
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="Message"
                    placeholder="Tell Us About Your Project"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-[#c8d9e6] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:ring-1 focus:ring-[#164666] min-h-[120px] resize-y transition-all shadow-xs"
                  />
                </div>

                {/* Hidden Field as in Reference */}
                <input type="hidden" name="Source Form" value="Contact Us Form" />

                {/* Submit Button (Themed Button Style) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-[170px] h-[48px] bg-gradient-to-r from-[#164666] via-[#1b628b] to-[#10364f] hover:from-[#1b628b] hover:to-[#164666] text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. INTERACTIVE MAP SECTION: Gopal Charan Industrial Hub  */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18 bg-white/70 backdrop-blur-md border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#4a728e]">
                Manufacturing Headquarters
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0f172a] font-normal">
              Visit Our <span className="font-serif italic font-light text-[#1b628b]">Cleanroom Facility.</span>
            </h3>
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-2 mb-2" />
            <p className="text-xs sm:text-sm text-[#64748b]">
              Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="text-xs sm:text-sm text-[#475569]">
              <strong className="text-[#0f172a] block">Gopal Charan Industrial Hub</strong>
              30 minutes from Sardar Vallabhbhai Patel International Airport (AMD)
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://maps.google.com/?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#164666] text-white rounded-xl text-xs font-semibold hover:bg-[#10364f] transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
              <button
                onClick={() =>
                  handleCopy(
                    "Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad",
                    "address"
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] rounded-xl text-xs font-semibold hover:bg-slate-100 transition-colors"
              >
                {copiedType === "address" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
            <iframe
              title="Mani Lifestyle Location Map"
              src="https://maps.google.com/maps?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

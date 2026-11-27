"use client";

import React, { useState, useEffect } from "react";
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
import { API_BASE_URL } from "@/lib/config";

interface ContactCard {
  id: string;
  category: string;
  primaryText: string;
  secondaryText?: string;
  thirdText?: string;
  link?: string;
  linkText?: string;
  copyable?: boolean;
  copyValue?: string;
  icon: string;
}

interface EmailItem {
  id: string;
  email: string;
  label?: string;
}

const defaultContactData = {
  hero: {
    kicker: "Certified Cosmetics Manufacturer • Ahmedabad, India",
    headlinePart1: "Contact ",
    headlineHighlight: "Us.",
    subheadline: "We're here to answer your questions and help you find the right solutions",
    backgroundImage: "/images/contact-hero.webp",
  },
  channels: {
    eyebrow: "Direct Channels",
    title: "Contact ",
    highlight: "Info.",
    description: "Feel free to ask us any questions\nor business enquiry, we will get back to you soon!",
    contactCards: [
      {
        id: "card-hours",
        category: "Shift Operating Hours",
        primaryText: "Mon – Fri: 8.30am – 5.30pm",
        secondaryText: "Sat (Alternate): 8.30am – 12.30pm",
        thirdText: "",
        link: "",
        linkText: "",
        copyable: false,
        copyValue: "",
        icon: "/images/icon-time.png",
      },
      {
        id: "card-phone",
        category: "Phone Calls",
        primaryText: "+91 97246 81096",
        secondaryText: "",
        thirdText: "",
        link: "tel:+919724681096",
        linkText: "",
        copyable: true,
        copyValue: "+919724681096",
        icon: "/images/icon-phone.png",
      },
      {
        id: "card-whatsapp",
        category: "Instant WhatsApp Chat",
        primaryText: "+91 97246 81096",
        secondaryText: "",
        thirdText: "",
        link: "https://wa.me/919724681096",
        linkText: "Chat",
        copyable: false,
        copyValue: "",
        icon: "/images/icon-whatsapp.png",
      },
      {
        id: "card-location",
        category: "Factory Cleanroom Address",
        primaryText: "Plot No. C5, Road No. 5,",
        secondaryText: "Gopal Charan Industrial Hub,",
        thirdText: "Bakrol Bajrang, 382430, Ahmedabad",
        link: "",
        linkText: "",
        copyable: true,
        copyValue: "Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad",
        icon: "/images/icon-location.png",
      },
    ] as ContactCard[],
    emails: [
      {
        id: "email-1",
        email: "enquiry@manilifestyle.com",
        label: "Inquiries",
      },
      {
        id: "email-2",
        email: "sales@manilifestyle.com",
        label: "Sales",
      },
    ] as EmailItem[],
    plantVisit: {
      title: "Schedule Cleanroom Plant Visit",
      description:
        "Brand founders, salon owners, and procurement teams are warmly invited to inspect our automated vacuum homogenizers, microbiology QA lab, and Class 100,000 cleanroom.",
      buttonText: "Book Factory Inspection Date",
      whatsappUrl:
        "https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20schedule%20a%20cleanroom%20factory%20inspection%20visit.",
    },
  },
  enquiryForm: {
    eyebrow: "Send an Inquiry",
    title: "Enquiry ",
    highlight: "Form.",
    description: "Fill in the details below and our formulation compounding team will contact you promptly.",
    nameLabel: "Name",
    namePlaceholder: "Enter Your Name",
    emailLabel: "E-mail",
    emailPlaceholder: "Enter Your Email",
    phoneLabel: "Contact Number",
    phonePlaceholder: "Enter Your Contact Number",
    messageLabel: "About Your Project",
    messagePlaceholder: "Tell Us About Your Project",
    submitButtonText: "Submit",
    scriptUrl:
      "https://script.google.com/macros/s/AKfycbzWRCmWe0G4_I7MpDhdwo_Tm_Vokm2g6BiR14bvRpTPaPDo_deU_wSh99iGSfnSZZGhtA/exec",
    sourceFormTag: "Contact Us Form",
    successTitle: "Success! Your query has been submitted.",
    successDescription:
      "Thank you for reaching out to Mani Lifestyle. Our technical and business team has received your inquiry and will contact you shortly.",
    whatsappCtaText: "Connect via WhatsApp",
    whatsappUrl:
      "https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20have%20submitted%20the%20contact%20enquiry%20form.",
    resetButtonText: "Submit Another Query",
  },
  facilityMap: {
    eyebrow: "Manufacturing Headquarters",
    title: "Visit Our ",
    highlight: "Cleanroom Facility.",
    subtitle: "Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad, Gujarat, India.",
    badgeTitle: "Gopal Charan Industrial Hub",
    badgeSubtitle: "30 minutes from Sardar Vallabhbhai Patel International Airport (AMD)",
    directionsButtonText: "Get Driving Directions",
    directionsUrl: "https://maps.google.com/?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430",
    copyAddressButtonText: "Copy Address",
    fullAddress: "Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
};

export default function ContactPage() {
  const [cms, setCms] = useState(defaultContactData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    async function loadContactCms() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/contact-page`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.hero) {
            setCms({
              hero: { ...defaultContactData.hero, ...(data.hero || {}) },
              channels: {
                ...defaultContactData.channels,
                ...(data.channels || {}),
                contactCards: data.channels?.contactCards || defaultContactData.channels.contactCards,
                emails: data.channels?.emails || defaultContactData.channels.emails,
                plantVisit: {
                  ...defaultContactData.channels.plantVisit,
                  ...(data.channels?.plantVisit || {}),
                },
              },
              enquiryForm: { ...defaultContactData.enquiryForm, ...(data.enquiryForm || {}) },
              facilityMap: { ...defaultContactData.facilityMap, ...(data.facilityMap || {}) },
            });
          }
        }
      } catch (err) {
        // Fallback to initial state gracefully
        console.warn("Contact CMS loading using fallback defaults:", err);
      }
    }
    loadContactCms();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1e9cf04e-842e-4f8b-92df-9cbbd224a92f";
    const scriptUrl = cms.enquiryForm.scriptUrl || defaultContactData.enquiryForm.scriptUrl;

    try {
      // 1. Send enquiry email directly to Marketing@manilifestyle.com via Web3Forms
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Enquiry from ${formData.name} — Mani Lifestyle`,
          from_name: "Mani Lifestyle Website",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "No message provided.",
          source: cms.enquiryForm.sourceFormTag || "Contact Us Form",
        }),
      });

      const web3Data = await web3Res.json();
      if (!web3Res.ok || !web3Data?.success) {
        throw new Error(web3Data?.message || "Failed to send your enquiry. Please try again.");
      }

      // 2. Also log to Google Apps Script in the background (non-blocking)
      if (scriptUrl) {
        const sheetData = new FormData();
        sheetData.append("Full Name", formData.name);
        sheetData.append("Email Address", formData.email);
        sheetData.append("Contact Number", formData.phone);
        sheetData.append("Message", formData.message || "No message provided.");
        sheetData.append("Source Form", cms.enquiryForm.sourceFormTag || "Contact Us Form");
        fetch(scriptUrl, {
          method: "POST",
          body: sheetData,
          mode: "no-cors",
        }).catch(() => {});
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Unable to send your enquiry right now. Please call +91 97246 81096 or message on WhatsApp.";
      console.error("Submission error:", err);
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#164666] selection:text-white relative overflow-hidden font-sans">
      {/* --- PREMIUM ZERO-LAG COSMETIC AMBIENT BACKGROUND ANIMATION --- */}
      <CosmeticAmbientBackground />

      {/* ======================================================== */}
      {/* 1. UNIFIED CONTACT US & ENQUIRY FORM SECTION (2 COLUMNS) */}
      {/* ======================================================== */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ──────────────────────────────────────────────────────── */}
          {/* LEFT COLUMN: Single Unified Contact Us Header & Details  */}
          {/* ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Single Unified Page Header */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[1.5px] bg-[#164666] shrink-0" />
                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.13em] font-semibold text-[#164666] sm:whitespace-nowrap">
                  {cms.hero.kicker}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-cormorant font-semibold text-[#091e2f] leading-[1.06] tracking-tight">
                {cms.hero.headlinePart1}{" "}
                <span className="italic font-semibold text-[#164666]">
                  {cms.hero.headlineHighlight}
                </span>
              </h1>
              <div className="w-12 h-[2.5px] bg-[#164666] rounded-full" />
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal pt-0.5">
                {cms.hero.subheadline}
              </p>
            </div>

            {/* Information Cards Grid (Tactile Cards matching Core Pillars) */}
            <div className="space-y-4 pt-1">
              {cms.channels.contactCards?.map((card, idx) => {
                const isPhoneOrLink = Boolean(card.link);
                const hasCopy = Boolean(card.copyable && card.copyValue);

                return (
                  <div
                    key={card.id || idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1b628b]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform overflow-hidden">
                      <Image
                        src={card.icon || "/images/icon-phone.png"}
                        alt={card.category || "Contact Icon"}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
                      <div className="min-w-0">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                          {card.category}
                        </span>

                        {isPhoneOrLink ? (
                          <a
                            href={card.link}
                            target={card.link?.startsWith("http") ? "_blank" : undefined}
                            rel={card.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-base sm:text-lg font-bold text-[#164666] hover:text-[#1b628b] transition-colors inline-flex items-center gap-1.5 break-words"
                          >
                            <span>{card.primaryText}</span>
                            {card.link?.startsWith("http") && <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />}
                          </a>
                        ) : (
                          <div className="font-semibold text-[#0f172a] text-xs sm:text-sm">
                            {card.primaryText}
                          </div>
                        )}

                        {card.secondaryText && (
                          <div className="text-xs sm:text-sm text-[#64748b] mt-0.5">
                            {card.secondaryText}
                          </div>
                        )}
                        {card.thirdText && (
                          <div className="text-xs sm:text-sm text-[#64748b]">
                            {card.thirdText}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {card.linkText && card.link && (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-xl bg-[#f0f7fb] border border-[#d9ecf7] text-[#164666] hover:bg-[#164666] hover:text-white text-xs font-semibold transition-all"
                          >
                            {card.linkText}
                          </a>
                        )}

                        {hasCopy && (
                          <button
                            type="button"
                            onClick={() => handleCopy(card.copyValue || card.primaryText, `card-${card.id || idx}`)}
                            title="Copy to clipboard"
                            className="p-2 rounded-xl text-slate-400 hover:text-[#164666] hover:bg-[#f0f7fb] transition-colors"
                          >
                            {copiedType === `card-${card.id || idx}` ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Official Emails Card */}
              {cms.channels.emails && cms.channels.emails.length > 0 && (
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
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4a728e] block mb-0.5">
                      Official Emails
                    </span>
                    {cms.channels.emails.map((em, eIdx) => (
                      <div key={em.id || eIdx} className="flex items-center justify-between gap-2">
                        <a
                          href={`mailto:${em.email}`}
                          className="text-xs sm:text-sm font-semibold text-[#164666] hover:text-[#1b628b] hover:underline break-all min-w-0"
                        >
                          {em.email}
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopy(em.email, `email-${em.id || eIdx}`)}
                          title="Copy Email"
                          className="p-2 sm:p-1 rounded text-slate-400 hover:text-[#164666] shrink-0"
                        >
                          {copiedType === `email-${em.id || eIdx}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cleanroom Plant Visit Callout Box (Theme Styling) */}
            {cms.channels.plantVisit && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f7fb] to-white border border-[#c8d9e6] shadow-xs space-y-2.5">
                <h3 className="font-bold text-[#164666] text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#164666]" />
                  {cms.channels.plantVisit.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {cms.channels.plantVisit.description}
                </p>
                <a
                  href={cms.channels.plantVisit.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#164666] hover:underline pt-1"
                >
                  <span>{cms.channels.plantVisit.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
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
                  {cms.enquiryForm.eyebrow}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
                {cms.enquiryForm.title}{" "}
                <span className="font-cormorant font-semibold text-[#164666]">
                  {cms.enquiryForm.highlight}
                </span>
              </h2>
              <div className="w-16 h-1 bg-[#1b628b] rounded-full mt-2 mb-3" />
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                {cms.enquiryForm.description}
              </p>
            </div>

            {submitError && (
              <div className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs sm:text-sm text-rose-700">
                {submitError}
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#091e2f]">
                  {cms.enquiryForm.successTitle}
                </h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  {cms.enquiryForm.successDescription}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={cms.enquiryForm.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{cms.enquiryForm.whatsappCtaText}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-xs transition-colors"
                  >
                    {cms.enquiryForm.resetButtonText}
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
                    {cms.enquiryForm.nameLabel} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Full Name"
                    required
                    placeholder={cms.enquiryForm.namePlaceholder}
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
                    {cms.enquiryForm.emailLabel} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email Address"
                    required
                    placeholder={cms.enquiryForm.emailPlaceholder}
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
                    {cms.enquiryForm.phoneLabel} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-number"
                    name="Contact Number"
                    required
                    placeholder={cms.enquiryForm.phonePlaceholder}
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
                    {cms.enquiryForm.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="Message"
                    placeholder={cms.enquiryForm.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-[#c8d9e6] rounded-xl text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#164666] focus:ring-1 focus:ring-[#164666] min-h-[120px] resize-y transition-all shadow-xs"
                  />
                </div>

                {/* Hidden Field as in Reference */}
                <input type="hidden" name="Source Form" value={cms.enquiryForm.sourceFormTag || "Contact Us Form"} />

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
                        <span>{cms.enquiryForm.submitButtonText || "Submit"}</span>
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
                {cms.facilityMap.eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#4a728e]" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-cormorant font-semibold text-[#091e2f] leading-[1.12] tracking-tight">
              {cms.facilityMap.title}{" "}
              <span className="font-cormorant font-semibold text-[#164666]">
                {cms.facilityMap.highlight}
              </span>
            </h3>
            <div className="w-16 h-1 bg-[#1b628b] rounded-full mx-auto mt-2 mb-2" />
            <p className="text-xs sm:text-sm text-[#64748b]">
              {cms.facilityMap.subtitle}
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="text-xs sm:text-sm text-[#475569]">
              <strong className="text-[#0f172a] block">{cms.facilityMap.badgeTitle}</strong>
              {cms.facilityMap.badgeSubtitle}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={cms.facilityMap.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#164666] text-white rounded-xl text-xs font-semibold hover:bg-[#10364f] transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{cms.facilityMap.directionsButtonText}</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    cms.facilityMap.fullAddress,
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
                    <span>{cms.facilityMap.copyAddressButtonText}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
            <iframe
              title="Mani Lifestyle Location Map"
              src={cms.facilityMap.mapEmbedUrl}
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

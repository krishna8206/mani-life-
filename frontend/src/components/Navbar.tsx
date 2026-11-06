"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import QuoteModal from "@/components/QuoteModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll for desktop transparent vs solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* 1. FIXED TOP NAVBAR (Always strictly 56px / 64px on top) */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] w-full transition-all duration-300 ${
          isHome && !isScrolled && !mobileMenuOpen
            ? "bg-white/10 backdrop-blur-[3px] border-b border-transparent"
            : "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs"
        }`}
      >
        <nav className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative py-0.5">
              <Image
                src="/images/mani-lifestyle-logo.png"
                alt="Mani Lifestyle Logo"
                width={150}
                height={38}
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Single Clean Line */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.08em] rounded-lg transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? "text-[#164666] bg-sky-50/80 font-bold"
                      : "text-[#1e293b] hover:text-[#164666] hover:bg-white/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />}
                </Link>

                {/* Clean Desktop Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div
                      className={`${
                        item.label === "Product Range" ? "w-[560px]" : "w-80"
                      } bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 p-2`}
                    >
                      <div
                        className={
                          item.label === "Product Range"
                            ? "grid grid-cols-2 gap-1"
                            : "space-y-0.5"
                        }
                      >
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#0f172a] hover:text-[#164666] hover:bg-slate-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="truncate">{sub.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#164666] shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs font-semibold bg-[#164666] hover:bg-[#10364f] text-white shadow-md shadow-[#164666]/20 rounded-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>Request Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile / Tablet Right Action Bar: Responsive Quote Button + Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold bg-[#164666] hover:bg-[#10364f] text-white rounded-lg shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              aria-label="Request custom quote"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span className="hidden sm:inline">Request Custom Quote</span>
              <span className="sm:hidden">Request Quote</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#1e293b] hover:text-[#164666] rounded-lg hover:bg-slate-100 active:scale-95 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#164666]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e293b]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* 2. DEDICATED FULL-SCREEN LUXURY MOBILE DRAWER (Placed OUTSIDE <header> to avoid backdrop-filter containment trap) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 z-[55] bg-white flex flex-col justify-between overflow-y-auto border-t border-slate-200/90 shadow-2xl">
          {/* Scrollable Navigation Links List */}
          <div className="px-4 py-4 space-y-2 flex-1 overflow-y-auto">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href;
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isAccordionOpen = Boolean(openAccordions[item.label]);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-[#164666] text-white shadow-sm"
                        : "bg-slate-50/70 text-[#0f172a] hover:bg-sky-50/80 hover:text-[#164666] border border-slate-200/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/70 overflow-hidden transition-all shadow-2xs"
                >
                  {/* Collapsible Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#164666] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold">{item.label}</span>
                      <span className="text-[10px] font-semibold text-[#1b628b] bg-sky-100/80 px-2 py-0.5 rounded-full lowercase">
                        {item.children?.length}{" "}
                        {item.label === "Services" ? "solutions" : "categories"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1b628b]">
                      <span className="text-[11px] font-medium lowercase">
                        {isAccordionOpen ? "hide" : "view"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isAccordionOpen ? "rotate-180 text-[#164666]" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Collapsible Submenu Items */}
                  {isAccordionOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-200/80 bg-white">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#164666] hover:bg-sky-50 active:bg-sky-100 transition-colors"
                        >
                          <span className="leading-snug">{sub.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#164666] shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Action Footer inside Mobile Drawer */}
          <div className="p-4 border-t border-slate-200/90 bg-[#f8fafc] space-y-3 shrink-0">
            {/* Primary Call to Action */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteOpen(true);
              }}
              className="w-full py-3.5 bg-[#164666] hover:bg-[#10364f] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Request Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Interactive Estimator Link */}
            <Link
              href="/quote-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2.5 bg-white text-[#164666] text-xs font-bold rounded-xl border border-sky-200 shadow-2xs hover:bg-sky-50 transition-colors"
            >
              Interactive MOQ & Cost Estimator
            </Link>

            {/* Direct Call & WhatsApp Fast Actions */}
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <a
                href="tel:+919724681096"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-[#164666] shadow-2xs active:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#164666]" />
                <span>Call Plant</span>
              </a>

              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20cosmetic%20manufacturing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 shadow-2xs active:bg-emerald-100"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Stamp */}
            <div className="text-center text-[10.5px] text-slate-500 pt-1 font-medium">
              Ahmedabad, Gujarat &bull; WHO-GMP &bull; ISO 9001:2015 &bull; 100% Indian Brand
            </div>
          </div>
        </div>
      )}

      {/* RFQ Lead Capture Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

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
  Phone,
  Mail,
  ShieldCheck,
  Globe2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import QuoteModal from "@/components/QuoteModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isHome && !isScrolled
            ? "bg-white/10 backdrop-blur-[3px] border-b border-transparent"
            : "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs"
        }`}
      >
        <nav className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-14 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo - Official Mani Lifestyle Image */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative py-0.5">
              <Image
                src="/images/mani-lifestyle-logo.png"
                alt="Mani Lifestyle Logo"
                width={160}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
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
                  className="flex items-center gap-1 px-3 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.08em] text-[#1e293b] hover:text-[#164666] rounded-lg hover:bg-white/60 transition-colors whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />}
                </Link>

                {/* Mega Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-88 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="space-y-1">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block p-2.5 rounded-xl hover:bg-sky-50/70 group transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-xs font-bold text-[#0f172a] group-hover:text-[#164666] flex items-center justify-between">
                            {sub.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#164666]" />
                          </div>
                          {sub.description && (
                            <p className="text-[11px] text-[#64748b] mt-0.5 line-clamp-1">
                              {sub.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Header Right Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#164666] hover:bg-[#10364f] text-white shadow-md shadow-[#164666]/20 rounded-lg transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-3 py-1.5 text-xs font-bold bg-[#164666] hover:bg-[#10364f] text-white rounded-lg shadow-sm"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1e293b] hover:text-black rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 space-y-2 animate-in fade-in duration-150">
              {navigationLinks.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#164666] hover:bg-sky-50/70 rounded-lg"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 border-l-2 border-slate-200 ml-3">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 px-2 text-xs text-[#64748b] hover:text-[#164666]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <Link
                  href="/quote-estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 bg-sky-50 text-[#164666] text-xs font-bold rounded-xl border border-sky-200"
                >
                  Interactive MOQ & Cost Estimator
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full text-center py-2.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-bold rounded-xl shadow-md"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* RFQ Lead Capture Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

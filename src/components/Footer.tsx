"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Globe2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { certificationsData } from "@/data/certifications";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on category detail pages (e.g. /products/cleansers-toners, /products/facewash, etc.)
  if (pathname && pathname.startsWith("/products/") && pathname !== "/products") {
    return null;
  }

  return (
    <footer className="border-t border-slate-800 bg-[#0a1520] text-slate-400">
      {/* Certifications Banner - Clean Clinical Sky */}
      <div className="bg-[#f0f7fb] border-b border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-[#164666] font-bold">
              Accredited Quality Standards
            </span>
            <h3 className="text-xl font-bold text-[#0f172a] mt-1 font-serif">
              Mani Lifestyle Certified Cleanroom Compounding Facility
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-3 bg-white border border-slate-200 rounded-2xl text-center shadow-xs hover:border-[#164666] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-sky-50 text-[#164666] border border-sky-200 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-[#0f172a] tracking-wide">{cert.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{cert.badgeCode}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-block shadow-sm">
                <Image
                  src="/images/mani-lifestyle-logo.png"
                  alt="Mani Lifestyle"
                  width={160}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-6">
              Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Manufacturing Campus:</strong> Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, Ahmedabad, Gujarat – 382430, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span><strong className="text-slate-200">Direct Technical Inquiry:</strong> +91 97246 81096</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span><strong className="text-slate-200">Official Email:</strong> sales@manilifestyle.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Manufacturing Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Manufacturing Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/private-label" className="hover:text-white transition-colors">
                  Private Label (OEM Fast Track)
                </Link>
              </li>
              <li>
                <Link href="/services/custom-formulation" className="hover:text-white transition-colors">
                  Custom Formulation (ODM R&D)
                </Link>
              </li>
              <li>
                <Link href="/services/contract-manufacturing" className="hover:text-white transition-colors">
                  Contract Compounding & High-Speed Filling
                </Link>
              </li>
              <li>
                <Link href="/services/low-moq-startup" className="hover:text-white transition-colors">
                  Low MOQ Startup Incubator (500 Units)
                </Link>
              </li>
              <li>
                <Link href="/services/salon-bulk" className="hover:text-white transition-colors">
                  Salon Professional Bulk Supplies
                </Link>
              </li>
              <li>
                <Link href="/services/turnkey-packaging" className="hover:text-white transition-colors">
                  Turnkey Packaging & Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Formulations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Cosmetic Formulations
            </h4>
            <ul className="space-y-2 text-xs">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sky-400 hover:underline font-semibold flex items-center gap-1 pt-1">
                  View All 8 Categories <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Portals & Direct RFQ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Direct Access
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Spec-to-Shelf Process (6 Stages)
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Compliance & ISO Documents
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-white transition-colors">
                  Clean Chemistry & Dermal Actives
                </Link>
              </li>
              <li>
                <Link href="/quote-estimator" className="hover:text-white transition-colors">
                  MOQ & Turnaround Estimator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Factory Tour & Location
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Direct Plant WhatsApp
              </div>
              <p className="text-[11px] text-slate-400 mb-2.5">
                Chat directly with our formulation leads in Ahmedabad.
              </p>
              <a
                href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20inquiring%20about%20cosmetics%20contract%20manufacturing."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 px-3 bg-[#164666] hover:bg-[#10364f] text-white rounded-xl text-xs font-bold transition-colors"
              >
                +91 97246 81096
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Mani Lifestyle. All rights reserved. Registered Cosmetic Manufacturing Plant, Ahmedabad, Gujarat, India.</p>
          <div className="flex items-center gap-6">
            <span>WHO-GMP Certified</span>
            <span>•</span>
            <span>ISO 22716</span>
            <span>•</span>
            <span>Cruelty Free</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

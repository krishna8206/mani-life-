"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Factory,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on category detail pages if requested
  if (pathname && pathname.startsWith("/products/") && pathname !== "/products") {
    return null;
  }

  return (
    <footer className="relative bg-[#091523] text-slate-300 border-t border-slate-800/90 overflow-hidden font-sans">
      {/* Subtle luxury ambient lighting */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[160px] bg-sky-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[220px] bg-teal-500/[0.03] blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: About Us */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-2 flex items-center gap-2">
                About Us
              </h4>
              <div className="w-8 h-0.5 bg-sky-400 rounded-full mb-5" />

              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.
              </p>
            </div>

            {/* Quality Standard Capsule */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-medium tracking-wide">
                  WHO-GMP & ISO 22716 Cleanroom Campus
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-2 flex items-center gap-2">
                Contact Us
              </h4>
              <div className="w-8 h-0.5 bg-sky-400 rounded-full mb-5" />
            </div>

            {/* Corporate Office Address */}
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-[13px]">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Corporate Office Address</span>
              </div>
              <p className="text-slate-400 leading-relaxed pl-5.5">
                Assotech Business Cresterra, Tower 4, 6th Floor, Sec 135, Noida, 201301, Uttar Pradesh
              </p>
              <div className="pl-5.5 pt-0.5">
                <a
                  href="mailto:sales@manilifestyle.com"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  <span>sales@manilifestyle.com</span>
                </a>
              </div>
            </div>

            {/* Manufacturing Plant Address */}
            <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-[13px]">
                <Factory className="w-3.5 h-3.5 text-sky-400" />
                <span>Manufacturing Plant Address</span>
              </div>
              <p className="text-slate-400 leading-relaxed pl-5.5">
                Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad, Gujarat
              </p>
              <div className="pl-5.5 space-y-1 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-sky-400" />
                  <a href="tel:+919724681096" className="text-slate-300 hover:text-white transition-colors">
                    +91 97246 81096
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-sky-400" />
                  <a href="mailto:sales@manilifestyle.com" className="text-sky-400 hover:text-sky-300 transition-colors">
                    sales@manilifestyle.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-2 flex items-center gap-2">
              Quick Links
            </h4>
            <div className="w-8 h-0.5 bg-sky-400 rounded-full mb-5" />

            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Certificate & Awards", href: "/certifications" },
                { label: "Services", href: "/services" },
                { label: "Product Range", href: "/products" },
                { label: "FAQs", href: "/#faqs" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services & Mani Lifestyle Brand */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-2 flex items-center gap-2">
                Services
              </h4>
              <div className="w-8 h-0.5 bg-sky-400 rounded-full mb-5" />

              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                {[
                  { label: "Private Label", href: "/services/private-label" },
                  { label: "Custom Formulations", href: "/services/custom-formulation" },
                  { label: "Contract Manufacturing", href: "/services/contract-manufacturing" },
                  { label: "Brand Launch Service", href: "/services/low-moq-startup" },
                ].map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 transition-colors" />
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Logo (Matching Reference) */}
            <div className="pt-2">
              <Link href="/" className="inline-block transition-opacity hover:opacity-90">
                <Image
                  src="/images/footer_logo.png"
                  alt="Mani Lifestyle"
                  width={200}
                  height={56}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-400">
          <p>
            © 2026 Mani Lifestyle. All rights reserved. •{" "}
            <span className="text-slate-400">
              Made by{" "}
              <a
                href="https://sanmora.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 transition-colors"
              >
                sanmora.in
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

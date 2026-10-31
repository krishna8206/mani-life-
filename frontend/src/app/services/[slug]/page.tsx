import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FlaskConical,
  Package,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { servicesData } from "@/data/services";

export const instant = false;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      {/* Breadcrumb & Header */}
      <section className="py-16 bg-gradient-to-b from-[#f0f7fb] via-[#f8fafc] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-[#164666] hover:text-[#0f172a] font-bold mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#1b628b] bg-[#e0f2fe] px-3.5 py-1 rounded-full border border-[#bae6fd] inline-block">
                {service.tagline}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0f172a] tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
                {service.fullDesc}
              </p>
            </div>

            <div className="lg:col-span-4 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#edf4f9]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Scope & Deliverables */}
          <div className="lg:col-span-8 space-y-10">
            <div className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-xs space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#0f172a]">
                Manufacturing Scope & Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8fafc] border border-[#bae6fd]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#2d2924]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#0f172a]">
                Regulatory & Quality Deliverables Included
              </h3>
              <p className="text-xs text-[#5c554a] leading-relaxed">
                Every batch produced under this model includes formal Certificates of Analysis (COA), microbiological challenge assays, container-closure compatibility documentation, and export dossiers complying with US FDA, EU 1223/2009, and domestic CDSCO statutory guidelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-[#164666]">
                <span className="bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">WHO-GMP Certified</span>
                <span className="bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">ISO 22716 Cleanroom</span>
                <span className="bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">Zero Animal Testing</span>
                <span className="bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">Full INCI Traceability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Service Parameters Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#e2e8f0] shadow-xs space-y-6 sticky top-24">
              <h3 className="text-base font-serif font-bold text-[#0f172a] pb-3 border-b border-[#ece6d9]">
                Production Parameters
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[#736d62]">Minimum Order Quantity (MOQ)</div>
                  <div className="font-bold text-[#0f172a] text-sm mt-0.5">{service.moq}</div>
                </div>

                <div>
                  <div className="text-[#736d62]">Standard Batch Turnaround</div>
                  <div className="font-bold text-[#1b628b] text-sm mt-0.5">{service.timeline}</div>
                </div>

                <div>
                  <div className="text-[#736d62]">Formulation IP Ownership</div>
                  <div className="font-bold text-emerald-700 text-sm mt-0.5">100% Client Owned</div>
                </div>

                <div>
                  <div className="text-[#736d62]">Compounding Facility</div>
                  <div className="font-bold text-[#0f172a] text-sm mt-0.5">Ahmedabad, Gujarat</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#ece6d9] space-y-3">
                <Link
                  href={`/contact?subject=Service%20RFQ%20-%20${encodeURIComponent(service.title)}`}
                  className="block text-center w-full py-3 gold-button text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105"
                >
                  Request Production Quote
                </Link>

                <Link
                  href="/quote-estimator"
                  className="block text-center w-full py-3 bg-[#f8fafc] hover:bg-[#f4efe4] text-[#1c1a17] text-xs font-bold rounded-xl border border-[#e2e8f0] transition-colors"
                >
                  Calculate Batch MOQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

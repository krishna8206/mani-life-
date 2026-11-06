"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { servicesData } from "@/data/services";

interface ServicePrecisionJourneyProps {
  setIsQuoteOpen: (val: boolean) => void;
}

export default function ServicePrecisionJourney({
  setIsQuoteOpen,
}: ServicePrecisionJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track metrics: calculated from actual node positions in the DOM
  const [trackMetrics, setTrackMetrics] = useState<{
    top: number;
    height: number;
    nodeCenters: number[];
  }>({
    top: 0,
    height: 0,
    nodeCenters: [],
  });

  // Current liquid head position in pixels along the track
  const [liquidY, setLiquidY] = useState(0);
  const [rowParallax, setRowParallax] = useState<number[]>([0, 0, 0, 0]);
  const [visibleRows, setVisibleRows] = useState<boolean[]>([false, false, false, false]);

  // Viewport entrance observer for each row (clean cubic-bezier reveal like About page)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleRows((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Measure exact row node centers relative to the journey container
  const measureNodes = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const centers: number[] = [];

    rowRefs.current.forEach((row) => {
      if (row) {
        const rowRect = row.getBoundingClientRect();
        // Exact vertical center of each row relative to container top
        const centerY = rowRect.top - containerRect.top + rowRect.height / 2;
        centers.push(centerY);
      }
    });

    if (centers.length >= 2) {
      const top = centers[0];
      const bottom = centers[centers.length - 1];
      const height = Math.max(0, bottom - top);
      setTrackMetrics({ top, height, nodeCenters: centers });
    }
  }, []);

  // Recalculate node positions on mount and window resize
  useEffect(() => {
    measureNodes();
    window.addEventListener("resize", measureNodes);
    return () => window.removeEventListener("resize", measureNodes);
  }, [measureNodes]);

  // Single unified, ultra-smooth 60fps RAF scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && trackMetrics.height > 0) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // The golden focal point in the user's viewport (mid-screen)
            const focalY = windowHeight * 0.52;
            const currentPositionInContainer = focalY - containerRect.top;

            // Liquid travel along track from Node 0 to Node 3
            const relativeY = currentPositionInContainer - trackMetrics.top;
            const clampedLiquidY = Math.max(0, Math.min(trackMetrics.height, relativeY));
            setLiquidY(clampedLiquidY);

            // Compute optical vertical parallax for each row without fighting CSS transitions
            const newParallax: number[] = [];
            rowRefs.current.forEach((row) => {
              if (row) {
                const rowRect = row.getBoundingClientRect();
                if (rowRect.top < windowHeight + 120 && rowRect.bottom > -120) {
                  const centerOffset = rowRect.top + rowRect.height / 2 - windowHeight / 2;
                  const offset = Math.max(-16, Math.min(16, centerOffset * -0.04));
                  newParallax.push(offset);
                } else {
                  newParallax.push(0);
                }
              } else {
                newParallax.push(0);
              }
            });
            setRowParallax(newParallax);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trackMetrics]);

  return (
    <div ref={containerRef} className="relative">
      {/* ========================================================================= */}
      {/* CENTRAL LUMINOUS JOURNEY THREAD (DESKTOP) — 100% PHYSICALLY ANCHORED      */}
      {/* ========================================================================= */}
      {trackMetrics.height > 0 && (
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[3.5px] pointer-events-none z-10"
          style={{
            top: `${trackMetrics.top}px`,
            height: `${trackMetrics.height}px`,
          }}
        >
          {/* Base Inactive Blueprint Track (Subtle, architectural slate hairline) */}
          <div className="absolute inset-0 bg-slate-200/80 rounded-full" />

          {/* Active Liquid Stream (Directly tracks scroll position with ZERO lag) */}
          <div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#164666] via-[#1b628b] to-cyan-400 rounded-full shadow-[0_0_16px_rgba(27,98,139,0.55)] will-change-[height]"
            style={{
              height: `${liquidY}px`,
            }}
          />

          {/* Luminous Liquid Droplet Bead (The moving head — positioned exactly on the liquid surface) */}
          <div
            className="absolute left-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#1b628b] shadow-[0_0_22px_rgba(27,98,139,0.9)] flex items-center justify-center pointer-events-none z-20 will-change-transform"
            style={{
              transform: `translate3d(-50%, calc(${liquidY}px - 50%), 0)`,
            }}
          >
            {/* Pulsing Liquid Cyan Core */}
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#164666] to-cyan-400" />
            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-45" />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4 EDITORIAL SHOWCASE ROWS WITH STAGGERED ENTRANCES & BUTTERY PARALLAX      */}
      {/* ========================================================================= */}
      <div className="space-y-28 lg:space-y-36 relative">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          const isVisible = visibleRows[index];
          const parallax = rowParallax[index] || 0;

          // Check if the liquid stream has reached this specific node
          const nodeCenterOffset =
            trackMetrics.nodeCenters[index] !== undefined
              ? trackMetrics.nodeCenters[index] - trackMetrics.top
              : 0;
          // Active when liquid is within 15px of node or has passed it
          const isNodeActive = trackMetrics.height > 0 && liquidY >= nodeCenterOffset - 15;

          return (
            <div
              key={service.slug}
              id={service.slug}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group select-none"
            >
              {/* Central Journey Node Anchor (Desktop) — Locks onto the Track Line */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                <div
                  className={`w-11 h-11 rounded-full border-2 bg-white flex items-center justify-center font-serif text-xs font-bold transition-all duration-500 shadow-md ${
                    isNodeActive
                      ? "border-[#1b628b] bg-gradient-to-b from-sky-50 to-white text-[#164666] scale-110 shadow-[0_0_24px_rgba(27,98,139,0.5)] ring-4 ring-sky-200/90"
                      : "border-slate-300 text-slate-400 scale-95"
                  }`}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Visual Media Column — Asymmetrical Arch with Parallax & Specular Glint */}
              <div
                className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
                style={{
                  transform: isVisible ? "translateY(0px)" : "translateY(36px)",
                  opacity: isVisible ? 1 : 0,
                  transition:
                    "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms ease-out",
                }}
              >
                <div className="relative w-full aspect-[4/3] max-w-[540px] mx-auto group/media">
                  {/* Ambient Atmospheric Cyan Aura */}
                  <div
                    className={`absolute -inset-4 bg-gradient-to-tr from-sky-300/35 via-teal-200/25 to-transparent rounded-[48px] blur-2xl pointer-events-none -z-10 transition-all duration-700 group-hover/media:scale-110 group-hover/media:opacity-90 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Main Asymmetrical Frame with Alternating Directional Sweeps */}
                  <div
                    className={`relative w-full h-full overflow-hidden border-[3px] border-white/95 shadow-[0_20px_50px_rgba(18,65,95,0.14)] ring-1 ring-sky-300/60 bg-gradient-to-b from-sky-50 to-white transition-all duration-700 group-hover/media:shadow-[0_28px_65px_rgba(18,65,95,0.22)] group-hover/media:-translate-y-1 ${
                      isEven
                        ? "rounded-tr-[56px] sm:rounded-tr-[76px] rounded-bl-[56px] sm:rounded-bl-[76px] rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl sm:rounded-br-3xl"
                        : "rounded-tl-[56px] sm:rounded-tl-[76px] rounded-br-[56px] sm:rounded-br-[76px] rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl"
                    }`}
                  >
                    {/* Inner Parallax Container (Direct 60fps transform, no conflicting CSS duration) */}
                    <div
                      className="relative w-full h-full scale-[1.08] will-change-transform"
                      style={{
                        transform: `translate3d(0, ${parallax}px, 0)`,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover/media:scale-106"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Subtle soft gradient lighting vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

                    {/* Top corner ambient glint */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/25 via-transparent to-transparent pointer-events-none" />

                    {/* Pro specular glass sheen sweep across card on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[160%] skew-x-[-25deg] group-hover/media:translate-x-[220%] transition-transform duration-1000 ease-out pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Editorial Text Content Column with Staggered Entrance */}
              <div
                className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                style={{
                  transform: isVisible ? "translateY(0px)" : "translateY(28px)",
                  opacity: isVisible ? 1 : 0,
                  transition:
                    "transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, opacity 750ms ease-out 120ms",
                }}
              >
                {/* Large Editorial Serif Number & Tag */}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-4xl sm:text-5xl font-serif font-light transition-all duration-500 inline-block select-none ${
                      isNodeActive
                        ? "text-[#164666] -translate-y-0.5"
                        : "text-[#164666]/25 group-hover:text-[#1b628b]/60"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`h-[1px] bg-slate-200/90 transition-all duration-700 ${
                      isVisible ? "w-12 group-hover:w-16 group-hover:bg-[#1b628b]/40" : "w-0"
                    }`}
                  />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#1b628b] transition-colors duration-300">
                    {service.tagline.split("&")[0].trim()}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal leading-snug group-hover:text-[#164666] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Descriptive Story */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Highlight Bullets with Interactive Micro-Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
                  {service.features.slice(0, 4).map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="group/bullet flex items-start gap-2.5 text-xs text-[#334155] leading-snug p-1.5 -mx-1.5 rounded-lg hover:bg-white/90 hover:shadow-[0_2px_8px_rgba(18,65,95,0.06)] transition-all duration-200 cursor-default"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 transition-all duration-200 group-hover/bullet:scale-110 group-hover/bullet:text-[#0d5c80]" />
                      <span className="group-hover/bullet:text-[#0f172a] transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dual Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="btn-shimmer-sweep px-5 sm:px-6 py-3 bg-[#164666] hover:bg-[#0f344d] text-white font-medium text-xs rounded-lg transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(22,70,102,0.28)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2 group/btn"
                  >
                    <span>Request Feasibility Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <Link
                    href={`/services/${service.slug}`}
                    className="px-5 py-3 bg-white hover:bg-slate-50 text-[#0f172a] hover:text-[#164666] font-medium text-xs rounded-lg border border-slate-200 hover:border-[#164666]/60 transition-all duration-300 flex items-center gap-1.5 shadow-xs hover:shadow-md hover:-translate-y-0.5 group/link"
                  >
                    <span>Explore Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1b628b] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


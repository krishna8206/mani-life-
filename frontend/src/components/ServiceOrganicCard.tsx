"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceOrganicCardProps {
  service: {
    id?: string;
    num?: string;
    title: string;
    desc: string;
    image?: string;
    link?: string;
  };
  preset: {
    cardRadius: string;
    objectPosition: string;
    clipPathD: string;
    strokePath: string;
  };
  index: number;
  isServicesVisible: boolean;
  onOpenQuote: (serviceTitle: string) => void;
}

const serviceFeatureTags: Record<number, string[]> = {
  0: ["Flexible 500 MOQ", "Ready Formulations", "Custom Packaging"],
  1: ["WHO-GMP Facility", "High-Volume Batches", "Lab Traceability"],
  2: ["Clinical Actives", "R&D Formulation Lab", "Stability Validated"],
  3: ["Complete Brand Launch", "Label & Artwork", "Pan-India Dispatch"],
};

export function ServiceOrganicCard({
  service,
  preset,
  index,
  isServicesVisible,
  onOpenQuote,
}: ServiceOrganicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [sheenActive, setSheenActive] = useState(false);

  const tags = serviceFeatureTags[index % 4] || ["Certified Quality", "Custom Specs", "Prompt Delivery"];

  // Ultra-smooth 3D cursor tracking tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({
      x: -(y * 8),
      y: x * 8,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setSheenActive(true);
    setTimeout(() => setSheenActive(false), 900);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isServicesVisible
          ? isHovered
            ? `perspective(1100px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px)`
            : "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)"
          : "translateY(32px)",
        opacity: isServicesVisible ? 1 : 0,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 150ms ease-out, box-shadow 350ms ease-out"
          : `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 75}ms, opacity 700ms ease-out ${index * 75}ms, box-shadow 500ms ease-out`,
      }}
      className="group relative flex flex-col justify-between select-none"
    >
      {/* ========================================================= */}
      {/* 1. ANIMATED AMBIENT BLINK & LIGHT-GLIDE SHIMMER BEHIND CARD */}
      {/* ========================================================= */}
      <div
        className="absolute -inset-2.5 sm:-inset-3.5 pointer-events-none -z-10 overflow-hidden"
        style={{
          borderRadius: preset.cardRadius,
          filter: "blur(14px)",
        }}
      >
        {/* Soft Ambient Breathing Pulse Glow ("ब्लिंक ब्लिंक") */}
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.42) 0%, rgba(27, 98, 139, 0.28) 50%, transparent 75%)",
            animation: `ambient-blink ${3.5 + index * 0.6}s ease-in-out infinite`,
          }}
        />

        {/* Luminous Light Ray Sliding Sideways ("साइड में जा रहा है ब्लिंक ब्लिंक") */}
        <div
          className="absolute inset-y-0 w-3/4 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.45) 45%, rgba(255, 255, 255, 0.70) 50%, rgba(56, 189, 248, 0.45) 55%, transparent 100%)",
            animation: `light-glide ${3.4 + index * 0.5}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: `${index * 0.85}s`,
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN CARD SHELL WITH ORGANIC ASYMMETRICAL CORNERS (z-20) */}
      {/* ========================================================= */}
      <div
        style={{
          borderRadius: preset.cardRadius,
          transformStyle: "preserve-3d",
          background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(251,253,255,0.96) 55%, rgba(240,247,253,0.92) 100%)",
        }}
        className="relative w-full h-full backdrop-blur-md border border-[#bce3f5]/90 p-3 pb-4 sm:pb-5 flex flex-col justify-between overflow-hidden shadow-[0_16px_36px_-6px_rgba(27,98,139,0.10),0_0_24px_0_rgba(188,227,245,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.95)] group-hover:border-[#1b628b]/50 group-hover:shadow-[0_28px_56px_-10px_rgba(27,98,139,0.22),0_0_35px_0_rgba(188,227,245,0.45)] transition-all duration-500"
      >
        {/* Diagonal Specular Sheen Glint Sweep on Hover */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-40 ${
            isHovered || sheenActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-full h-full bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-25deg] transition-transform duration-1000 ease-out ${
              isHovered || sheenActive ? "translate-x-[220%]" : "-translate-x-[160%]"
            }`}
          />
        </div>

        {/* Ambient Bottom Gradient Warmth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-sky-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* ========================================================= */}
        {/* IMAGE STAGE WITH FLUID WAVE CUT (z-10)                   */}
        {/* ========================================================= */}
        <div
          style={{
            borderRadius: "24px 24px 0 0",
            transform: "translateZ(12px)",
          }}
          className="relative w-full h-[225px] sm:h-[235px] lg:h-[245px] bg-sky-50 overflow-hidden shrink-0 transition-transform duration-500"
        >
          <div
            style={{ clipPath: `url(#service-wave-${service.id || index})` }}
            className="relative w-full h-full"
          >
            <Image
              src={service.image || "/images/services-v3/v3_img1.jpg"}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              style={{ objectPosition: preset.objectPosition }}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
              priority={index < 2}
              quality={98}
            />
          </div>

          {/* Luminous Animated Glass Wave Divider Stroke */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
              {/* Glowing Ambient Underlay Line */}
              <path
                d={preset.strokePath}
                fill="none"
                stroke="#38bdf8"
                strokeWidth={isHovered ? "4" : "3"}
                strokeOpacity={isHovered ? "0.75" : "0.45"}
                vectorEffect="non-scaling-stroke"
                style={{
                  filter: "blur(2px)",
                  transition: "stroke-opacity 400ms, stroke-width 400ms",
                }}
              />
              <path d={`${preset.strokePath} L 100 100 L 0 100 Z`} fill="white" />
              <path
                d={preset.strokePath}
                fill="none"
                stroke="#bce3f5"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={preset.strokePath}
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.95"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TEXT CONTENT & RICH SPECIFICATIONS (z-25)                 */}
        {/* ========================================================= */}
        <div
          style={{ transform: "translateZ(24px)" }}
          className="px-3 sm:px-4 pt-2.5 pb-1 flex-1 flex flex-col justify-between relative z-20"
        >
          <div>
            {/* Service Step Eyebrow Indicator */}
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#1b628b]" />
              <span className="font-mono text-[9.5px] font-bold text-[#1b628b] tracking-[0.2em] uppercase">
                0{index + 1} &bull; CORE CAPABILITY
              </span>
            </div>

            <h3 className="text-xl sm:text-[22px] lg:text-[23px] font-cormorant font-bold text-[#091e2f] group-hover:text-[#164666] transition-colors leading-tight mb-1">
              <Link href={service.link || "/services"}>{service.title}</Link>
            </h3>

            <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal mb-2.5 line-clamp-2">
              {service.desc}
            </p>

            {/* Cosmetic Specification Tags (Cures the empty feel) */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[9.5px] sm:text-[10px] font-semibold text-[#164666] bg-sky-50/90 border border-sky-200/80 px-2 py-0.5 rounded-full shadow-2xs backdrop-blur-xs transition-colors group-hover:bg-sky-100/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Interactive Action Area */}
          <div
            style={{ transform: "translateZ(38px)" }}
            className="flex items-center justify-between pt-2 border-t border-sky-100/90 mt-1"
          >
            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#1b628b] transition-colors">
              Explore Capability &rarr;
            </span>

            <button
              type="button"
              onClick={() => onOpenQuote(service.title)}
              aria-label={`Inquire about ${service.title}`}
              className="group/btn relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b628b] hover:bg-[#13496b] text-white flex items-center justify-center shadow-md shadow-[#1b628b]/25 transition-all duration-300 hover:scale-115 active:scale-95 cursor-pointer overflow-hidden shrink-0"
            >
              {/* Button Hover Glow Ripple */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOrganicCard;

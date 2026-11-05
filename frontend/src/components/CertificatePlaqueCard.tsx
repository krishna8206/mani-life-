"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export interface CertificatePlaqueCardProps {
  id: string;
  name: string;
  authority?: string;
  scope?: string;
  importance: string;
  badgeCode: string;
  image: string;
  verified?: boolean;
  index: number;
  priority?: boolean;
}

export function CertificatePlaqueCard({
  name,
  authority,
  importance,
  badgeCode,
  image,
  index = 0,
  priority = false,
}: CertificatePlaqueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [sheenActive, setSheenActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (priority) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger a specular sheen sweep on viewport entrance
          setTimeout(() => {
            setSheenActive(true);
            setTimeout(() => setSheenActive(false), 1400);
          }, index * 120 + 300);
        }
      },
      { threshold: 0.05, rootMargin: "250px 0px 150px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [index, priority]);

  // Subtle luxury 3D tilt tracking
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
      className={`group relative rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#1b628b]/50 shadow-xs hover:shadow-2xl hover:shadow-sky-950/10 flex flex-col items-center text-center select-none cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-[0.97]"
      }`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        isolation: "isolate",
        transitionDelay: isVisible && !priority ? `${index * 90}ms` : "0ms",
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        background: isHovered
          ? "linear-gradient(180deg, #ffffff 0%, #f9fcff 60%, #edf6fc 100%)"
          : "linear-gradient(180deg, #ffffff 0%, #fafcff 70%, #f4f9fd 100%)",
      }}
    >
      {/* Specular Diagonal Sheen Sweep Across Full Plaque */}
      <div
        className={`absolute inset-0 rounded-2xl overflow-hidden pointer-events-none transition-opacity duration-500 ${
          isHovered || sheenActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-transform duration-1000 ease-out ${
            isHovered || sheenActive ? "translate-x-[220%]" : "-translate-x-[160%]"
          }`}
        />
      </div>

      {/* --- 1. ELEVATED 3D EMBLEM BADGE PEDESTAL --- */}
      <div
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-3.5 mb-5 shadow-sm group-hover:shadow-md group-hover:border-[#1b628b]/40 transition-all duration-500 overflow-hidden shrink-0"
        style={{
          transform: "translateZ(26px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle Ambient Radial Backlight inside Logo Box */}
        <div className="absolute inset-0 bg-radial from-sky-100/50 via-transparent to-transparent pointer-events-none" />

        <Image
          src={image}
          alt={name}
          width={88}
          height={88}
          className="object-contain max-h-20 w-auto group-hover:scale-108 transition-transform duration-500 ease-out relative z-10"
        />

        {/* Diagonal Light Glint over Logo Glass */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[160%] skew-x-[-25deg] group-hover:translate-x-[220%] transition-transform duration-900 ease-out pointer-events-none" />
      </div>

      {/* --- 2. REGULATORY BADGE CODE PILL --- */}
      <div
        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#164666] bg-white border border-[#c8e2f3] px-3.5 py-1 rounded-full mb-3 shadow-2xs group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] transition-all duration-300"
        style={{ transform: "translateZ(18px)" }}
      >
        <Sparkles className="w-2.5 h-2.5 text-[#1b628b] group-hover:text-sky-300 transition-colors" />
        <span>{badgeCode}</span>
      </div>

      {/* --- 3. TITLE & AUTHORITY --- */}
      <h3
        className="text-[15px] sm:text-base font-bold text-[#0f172a] group-hover:text-[#164666] transition-colors leading-snug tracking-tight mb-1"
        style={{ transform: "translateZ(14px)" }}
      >
        {name}
      </h3>

      {authority && (
        <p
          className="text-[11px] sm:text-[11.5px] text-[#4a728e] font-semibold mb-2.5 line-clamp-1"
          style={{ transform: "translateZ(10px)" }}
        >
          {authority}
        </p>
      )}

      {/* --- 4. IMPORTANCE / CLINICAL SUMMARY --- */}
      <p
        className="text-[12px] sm:text-[12.5px] text-slate-600 leading-relaxed font-normal flex-1 mb-4"
        style={{ transform: "translateZ(8px)" }}
      >
        {importance}
      </p>

      {/* --- 5. LIVE VERIFIED AUDIT BADGE WITH PULSING BEACON --- */}
      <div
        className="pt-3 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[10px] sm:text-[10.5px] font-semibold text-emerald-800 bg-emerald-50/70 rounded-xl py-2 mt-auto border border-emerald-200/60 transition-all duration-300 group-hover:bg-emerald-100/70"
        style={{ transform: "translateZ(12px)" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="tracking-wide">Verified Facility &bull; Validated 2026</span>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-0.5" />
      </div>
    </div>
  );
}

export default CertificatePlaqueCard;


"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Droplets,
  FlaskConical,
  Sparkles,
  Layers,
  Beaker,
  Sun,
  Sparkle,
  Leaf,
} from "lucide-react";

interface ProductArchItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
}

const expertiseArchItems: ProductArchItem[] = [
  {
    title: "Face Washes & Cleansers",
    subtitle: "pH 5.5 foaming, gel, & clarifying washes",
    icon: Droplets,
    href: "/products",
  },
  {
    title: "Serums & Clinical Actives",
    subtitle: "Vitamin C, Niacinamide, & barrier elixirs",
    icon: FlaskConical,
    href: "/products",
  },
  {
    title: "Scrubs & Exfoliators",
    subtitle: "AHA/BHA chemical peels & micro-polishes",
    icon: Sparkles,
    href: "/products",
  },
  {
    title: "Salon Professional Facial Kits",
    subtitle: "Multi-stage aesthetic treatment regimens",
    icon: Layers,
    href: "/products",
  },
  {
    title: "Hair Oils & Scalp Serums",
    subtitle: "Rosemary, Redensyl, & botanical infusions",
    icon: Beaker,
    href: "/products",
  },
  {
    title: "Sunscreens & Treatment Masks",
    subtitle: "SPF 50 fluid gels & hydrogel clay masks",
    icon: Sun,
    href: "/products",
  },
  {
    title: "Pre & Post Wax Care",
    subtitle: "Soothing aloe lotions & antiseptic cleansers",
    icon: Sparkle,
    href: "/products",
  },
  {
    title: "Herbal & Fruit Waxes",
    subtitle: "Low-temp peelable stripless waxes & roll-ons",
    icon: Leaf,
    href: "/products",
  },
];

function InteractiveArchCard({
  item,
  index,
  isVisible,
}: {
  item: ProductArchItem;
  index: number;
  isVisible: boolean;
}) {
  const IconComp = item.icon;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -(y * 9),
      y: x * 9,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const currentTransform = isVisible
    ? isHovered
      ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-8px) scale(1.025)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"
    : "perspective(1000px) rotateX(12deg) translateY(36px) scale(0.96)";

  return (
    <Link
      ref={cardRef}
      href={item.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: currentTransform,
        opacity: isVisible ? 1 : 0,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 120ms ease-out, box-shadow 300ms ease"
          : `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms, opacity 700ms ease-out ${index * 60}ms, box-shadow 400ms ease`,
      }}
      className="group relative bg-gradient-to-b from-white/92 via-white/82 to-sky-50/50 backdrop-blur-xl rounded-t-[76px] sm:rounded-t-[84px] rounded-b-2xl sm:rounded-b-3xl p-7 sm:p-8 border border-white/95 ring-1 ring-slate-200/60 hover:ring-[#1b628b]/45 shadow-lg shadow-sky-950/4 hover:shadow-2xl hover:shadow-sky-950/15 flex flex-col items-center text-center justify-between overflow-hidden block"
    >
      {/* Frosted Specular Rim (Top Arched Edge) */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 rounded-t-full pointer-events-none" />

      {/* Inner Vault Arched Glass Light Reflection */}
      <div className="absolute top-0 inset-x-0 h-36 rounded-t-[76px] sm:rounded-t-[84px] bg-gradient-to-b from-white/70 via-sky-100/30 to-transparent pointer-events-none transition-all duration-500 group-hover:from-white/90 group-hover:via-sky-100/50" />

      {/* Specular Diagonal Sheen Sweep across Glass Surface on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] transition-all duration-1000 ease-out pointer-events-none -translate-x-[150%] opacity-0 group-hover:translate-x-[200%] group-hover:opacity-100" />

      {/* --- 1. Top Section: Arched Vault + Frosted Glass Icon Node --- */}
      <div
        className="relative z-10 flex flex-col items-center pt-2 mb-4 transition-transform duration-300 group-hover:translate-z-6"
        style={{ transform: isHovered ? "translateZ(14px)" : "translateZ(0px)" }}
      >
        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-xs text-[#164666] flex items-center justify-center group-hover:bg-[#164666] group-hover:border-[#164666] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-110">
          <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
        </div>
      </div>

      {/* --- 2. Middle Section: Typography Block (Flawless Horizontal Baseline) --- */}
      <div
        className="relative z-10 w-full flex-1 flex flex-col justify-between items-center transition-transform duration-300"
        style={{ transform: isHovered ? "translateZ(8px)" : "translateZ(0px)" }}
      >
        <div>
          {/* Category Title: Refined Serif Font Style & Sizing */}
          <div className="min-h-[50px] flex items-center justify-center mb-1">
            <h3 className="text-[15.5px] sm:text-[16.5px] font-serif font-medium text-[#0f172a] group-hover:text-[#164666] transition-colors leading-[1.3] tracking-[-0.01em]">
              {item.title}
            </h3>
          </div>

          {/* Subtitle: High-Legibility Sizing & Spacing */}
          <div className="min-h-[44px] flex items-center justify-center px-1">
            <p className="text-[12.5px] sm:text-[13px] text-[#64748b] group-hover:text-slate-600 transition-colors leading-relaxed font-normal">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* --- 3. Base Section: Expanding Accent Line at Flat Bottom Base --- */}
        <div className="pt-3">
          <div className="w-6 h-[2px] bg-slate-200/80 group-hover:bg-[#1b628b] group-hover:w-12 transition-all duration-300 rounded-full shadow-2xs" />
        </div>
      </div>
    </Link>
  );
}

export default function RomanArchProductExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative max-w-6xl mx-auto select-none pt-2 pb-4">
      {/* Soft Ambient Radial Lights (Free-Floating on Open Canvas) */}
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-56 bg-gradient-to-r from-sky-200/30 via-teal-100/40 to-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- 8 FROSTED GLASS ROMAN ARCH NICHES (4x2 on Desktop, 2x4 on Mobile) --- */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
        style={{ perspective: "1200px" }}
      >
        {expertiseArchItems.map((item, index) => (
          <InteractiveArchCard
            key={item.title}
            item={item}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

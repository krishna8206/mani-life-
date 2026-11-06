"use client";

import React, { useRef, useState, useEffect } from "react";
import { Handshake, Award, Palette } from "lucide-react";

interface VisionItem {
  category: string;
  title: string;
  desc: string;
  highlight: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const visionPrinciples: VisionItem[] = [
  {
    category: "Collaboration",
    title: "Trusted Partnership",
    desc: "We build enduring collaborations founded on transparency, reliable batch timelines, and shared growth with emerging startups and established beauty brands",
    highlight: "Reliable Batch Schedules & Support",
    icon: Handshake,
  },
  {
    category: "Formulation",
    title: "Innovative Quality",
    desc: "We deliver clean, biocompatible, and active-driven formulations with pharmaceutical-grade stability to help your brand lead the modern personal care market",
    highlight: "Lab-Verified Stability & Clean Actives",
    icon: Award,
  },
  {
    category: "Identity",
    title: "Brand-Centric Approach",
    desc: "Every product batch, texture, fragrance, and label is tailored to embody your distinct brand philosophy, aesthetic identity, and commercial price tier",
    highlight: "Custom Formulations Tailored to You",
    icon: Palette,
  },
];

export default function VisionPrinciplesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto select-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-slate-200/90">
        {visionPrinciples.map((item, index) => {
          const IconComp = item.icon;

          return (
            <div
              key={item.title}
              style={{
                transform: isVisible ? "translateY(0px)" : "translateY(36px)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, opacity 800ms ease-out ${index * 120}ms`,
              }}
              className="group flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 transition-all duration-300"
            >
              {/* Floating Emblem Badge */}
              <div className="relative w-16 h-16 rounded-2xl bg-white border border-[#d2e7f5] text-[#164666] flex items-center justify-center mb-5 shadow-xs group-hover:scale-108 group-hover:bg-[#164666] group-hover:text-white group-hover:border-[#164666] group-hover:shadow-md transition-all duration-400">
                <IconComp className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.65} />
              </div>

              {/* Category Label */}
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.24em] font-semibold text-[#1b628b] mb-2">
                {item.category}
              </span>

              {/* Headline */}
              <h3 className="text-xl sm:text-[22px] font-serif text-[#0f172a] font-medium tracking-tight mb-3 group-hover:text-[#164666] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Editorial Accent Dash */}
              <div className="w-8 h-[1.5px] bg-[#1b628b]/40 mx-auto mb-4 group-hover:w-14 group-hover:bg-[#164666] transition-all duration-300" />

              {/* Narrative Description */}
              <p className="text-[14px] text-slate-600 leading-relaxed font-normal mb-6 max-w-sm mx-auto">
                {item.desc}
              </p>

              {/* Hallmark Tag */}
              <div className="mt-auto pt-2">
                <span className="text-[11.5px] font-medium tracking-wide text-[#164666] bg-[#f0f7fb] border border-[#d9ecf7] px-4 py-1.5 rounded-full inline-block group-hover:bg-white group-hover:border-[#164666]/40 transition-colors shadow-2xs">
                  {item.highlight}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


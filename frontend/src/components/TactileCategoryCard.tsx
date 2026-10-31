"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function LeafBullet() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#164666] shrink-0 transition-transform duration-300 group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  );
}

export interface TactileCategoryCardProps {
  id: string;
  title: string;
  archImage: string;
  categorySlug: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  tag?: string;
  priority?: boolean;
}

export function TactileCategoryCard({
  title,
  archImage,
  categorySlug,
  icon: IconComponent,
  items,
  tag,
  priority = false,
}: TactileCategoryCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Controlled, elegant 3D tilt angles
    setRotate({
      x: -(y * 10),
      y: x * 10,
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
    <Link
      ref={cardRef}
      href={`/products/${categorySlug}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center group cursor-pointer select-none transition-all duration-500 ease-out shrink-0"
      style={{
        width: "396px",
        maxWidth: "100%",
        height: "348px",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      }}
    >
      {/* --- 1. PRO-SCALE ARCH PRODUCT SHOWCASE CONTAINER --- */}
      <div
        className="relative rounded-t-full rounded-b-[2.25rem] overflow-hidden shadow-lg shrink-0 border border-white/80 bg-gradient-to-b from-[#eae2d5] via-[#f3ede5] to-[#f8f5ee] transition-all duration-500 group-hover:shadow-xl group-hover:border-sky-200/80"
        style={{
          width: "215px",
          height: "348px",
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={archImage}
          alt={title}
          width={215}
          height={348}
          priority={priority}
          quality={95}
          sizes="(max-width: 640px) 215px, 240px"
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Ambient Subtle Inset Light Gradient */}
        <div className="absolute inset-0 pointer-events-none rounded-t-full rounded-b-[2.25rem] ring-1 ring-inset ring-black/5" />
      </div>

      {/* --- 2. LUXURY FROSTED CRYSTAL GLASSSIFIED CONTENT BOX --- */}
      <div
        className="relative -ml-6 z-10 rounded-[1.85rem] p-5 flex flex-col justify-between transition-all duration-500 ease-out backdrop-blur-xl border overflow-hidden shrink-0"
        style={{
          width: "205px",
          height: "308px",
          transform: "translateZ(38px)",
          background: isHovered
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.30) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.20) 100%)",
          borderColor: isHovered
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.82)",
          boxShadow: isHovered
            ? "inset 0 2px 3px 0 rgba(255, 255, 255, 1), 0 24px 48px -12px rgba(22, 70, 102, 0.22)"
            : "inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 2px 0 rgba(22, 70, 102, 0.05), 0 18px 38px -10px rgba(15, 43, 62, 0.12)",
        }}
      >
        {/* Prismatic Glass Light Sheen Sweep Overlay on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-[1.85rem]">
          <div
            className="w-full h-full glass-sheen-effect"
            style={{
              background:
                "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.4) 55%, transparent 80%)",
              transform: "translateX(-160%) skewX(-20deg)",
            }}
          />
        </div>

        {/* Content Top */}
        <div className="relative z-10">
          {/* Category Icon Badge */}
          <div className="w-10 h-10 rounded-2xl border border-white/90 bg-white/80 backdrop-blur-md flex items-center justify-center text-[#164666] shadow-sm mb-2.5 transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-md">
            <IconComponent className="w-5 h-5 text-[#164666] transition-colors duration-300 group-hover:text-[#1b628b]" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-[17px] font-bold text-[#0a2333] tracking-tight leading-snug line-clamp-1 group-hover:text-[#164666] transition-colors duration-200">
            {title}
          </h3>

          {/* Subtitle / Tag (if provided) */}
          {tag && (
            <p className="text-[10px] uppercase tracking-wider font-semibold text-[#1b628b] mt-0.5 truncate">
              {tag}
            </p>
          )}

          {/* Bullet Items with Leaf */}
          <ul className="mt-2.5 space-y-1.5 text-xs text-[#1e293b] font-medium min-h-[86px] flex flex-col justify-start">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-1.5 leading-tight transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <LeafBullet />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- 3. MAGNETIC VIEW PRODUCTS ACTION FOOTER --- */}
        <div className="relative z-10 pt-2 border-t border-slate-300/45 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#0a2333] group-hover:text-[#164666] transition-colors duration-200">
            View Products
          </span>
          <span className="w-7 h-7 rounded-full bg-white/90 border border-sky-100 group-hover:bg-[#164666] text-[#164666] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:scale-105">
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
export default TactileCategoryCard;

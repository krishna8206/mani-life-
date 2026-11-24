"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  X,
  FileCheck2,
  Building2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { certificationThemes, CertificationTheme } from "@/data/certifications";

export interface CertificatePlaqueCardProps {
  id: string;
  name: string;
  authority?: string;
  scope?: string;
  importance?: string;
  badgeCode: string;
  image: string;
  verified?: boolean;
  themeKey?: "green" | "blue" | "orange" | "purple" | "cyan";
  index: number;
  priority?: boolean;
  onOpenDossier?: (certId: string) => void;
}

const defaultThemeKeys: ("green" | "blue" | "orange" | "purple" | "cyan")[] = [
  "green",
  "blue",
  "orange",
  "purple",
  "cyan",
];

export function CertificatePlaqueCard({
  id,
  name,
  authority,
  scope,
  importance,
  badgeCode,
  image,
  themeKey,
  index = 0,
  priority = false,
}: CertificatePlaqueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [sheenActive, setSheenActive] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const resolvedThemeKey =
    themeKey || defaultThemeKeys[index % defaultThemeKeys.length];
  const theme: CertificationTheme =
    certificationThemes[resolvedThemeKey] || certificationThemes.green;

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
          setTimeout(() => {
            setSheenActive(true);
            setTimeout(() => setSheenActive(false), 1200);
          }, index * 100 + 200);
        }
      },
      { threshold: 0.05, rootMargin: "250px 0px 150px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [index, priority]);

  // Luxury 3D tilt tracking
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

  // Unique IDs for SVG gradient definitions
  const gradSolidTL = `grad-solid-tl-${id || index}`;
  const gradRibbonTL = `grad-ribbon-tl-${id || index}`;
  const gradSoftTL = `grad-soft-tl-${id || index}`;

  const gradSolidBR = `grad-solid-br-${id || index}`;
  const gradRibbonBR = `grad-ribbon-br-${id || index}`;
  const gradSoftBR = `grad-soft-br-${id || index}`;

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsDossierOpen(true)}
        className={`group relative rounded-[30px] sm:rounded-[32px] flex flex-col items-center text-center select-none cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-[0.97]"
        }`}
        style={{
          border: `2px solid ${theme.cardBorder}`,
          background: theme.cardBg,
          boxShadow: isHovered
            ? `0 24px 48px -10px ${theme.shadowColor}, 0 8px 18px rgba(0,0,0,0.05)`
            : `0 14px 34px -8px ${theme.shadowColor}, 0 4px 12px rgba(0,0,0,0.03)`,
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
          transitionDelay: isVisible && !priority ? `${index * 70}ms` : "0ms",
        }}
      >
        {/* ========================================================= */}
        {/* TOP-LEFT MULTI-LAYERED CORNER WAVE RIBBONS (COMPACT & SUBTLE) */}
        {/* ========================================================= */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-22 sm:h-22 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={gradSolidTL} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.darkAccent} />
                <stop offset="50%" stopColor={theme.primary} />
                <stop offset="100%" stopColor={theme.lightAccent} />
              </linearGradient>

              <linearGradient id={gradRibbonTL} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.primary} stopOpacity="0.45" />
                <stop offset="100%" stopColor={theme.lightAccent} stopOpacity="0.20" />
              </linearGradient>

              <linearGradient id={gradSoftTL} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.primary} stopOpacity="0.18" />
                <stop offset="100%" stopColor={theme.lightAccent} stopOpacity="0.04" />
              </linearGradient>
            </defs>

            {/* Layer 3: Soft ambient wave boundary */}
            <path
              d="M 0 0 L 76 0 C 64 22, 34 50, 0 68 Z"
              fill={`url(#${gradSoftTL})`}
            />

            {/* Layer 2: Translucent middle ribbon band */}
            <path
              d="M 0 0 L 62 0 C 50 18, 26 40, 0 54 Z"
              fill={`url(#${gradRibbonTL})`}
            />

            {/* Layer 1: Solid vibrant corner wave */}
            <path
              d="M 0 0 L 48 0 C 38 14, 20 30, 0 42 Z"
              fill={`url(#${gradSolidTL})`}
            />
          </svg>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM-RIGHT MULTI-LAYERED CORNER WAVE SWOOSH (COMPACT)   */}
        {/* ========================================================= */}
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-22 sm:h-22 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={gradSolidBR} x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={theme.darkAccent} />
                <stop offset="50%" stopColor={theme.primary} />
                <stop offset="100%" stopColor={theme.lightAccent} />
              </linearGradient>

              <linearGradient id={gradRibbonBR} x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={theme.primary} stopOpacity="0.45" />
                <stop offset="100%" stopColor={theme.lightAccent} stopOpacity="0.20" />
              </linearGradient>

              <linearGradient id={gradSoftBR} x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={theme.primary} stopOpacity="0.18" />
                <stop offset="100%" stopColor={theme.lightAccent} stopOpacity="0.04" />
              </linearGradient>
            </defs>

            {/* Layer 3: Soft outer wave */}
            <path
              d="M 80 80 L 4 80 C 16 58, 46 28, 80 12 Z"
              fill={`url(#${gradSoftBR})`}
            />

            {/* Layer 2: Translucent middle ribbon */}
            <path
              d="M 80 80 L 18 80 C 30 62, 54 40, 80 26 Z"
              fill={`url(#${gradRibbonBR})`}
            />

            {/* Layer 1: Solid vibrant corner wave */}
            <path
              d="M 80 80 L 32 80 C 42 66, 60 50, 80 38 Z"
              fill={`url(#${gradSolidBR})`}
            />
          </svg>
        </div>

        {/* Diagonal Specular Sheen Sweep Across Card on Hover */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-30 ${
            isHovered || sheenActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-full h-full bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-25deg] transition-transform duration-1000 ease-out ${
              isHovered || sheenActive ? "translate-x-[220%]" : "-translate-x-[160%]"
            }`}
          />
        </div>

        {/* ========================================================= */}
        {/* CARD CONTENT LAYER                                        */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full px-4 sm:px-5 pt-6 pb-7 flex flex-col items-center text-center">
          
          {/* --- 1. ELEVATED ROUNDED HEXAGON BADGE PEDESTAL --- */}
          <div className="relative w-24 h-26 sm:w-26 sm:h-28 flex items-center justify-center shrink-0 mb-3">
            {/* Luminous Ambient Hexagon Radial Glow */}
            <div
              className="absolute inset-0 rounded-full blur-xl pointer-events-none transition-opacity duration-300"
              style={{
                backgroundColor: theme.hexagonGlow,
                opacity: isHovered ? 0.85 : 0.55,
              }}
            />

            {/* Precision Rounded Hexagon Base & Crisp Outline */}
            <svg
              className="absolute inset-0 w-full h-full drop-shadow-[0_6px_14px_rgba(0,0,0,0.08)]"
              viewBox="0 0 100 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50 4 
                   Q 53 4 56 6 
                   L 93 27 
                   Q 96 29 96 33 
                   L 96 82 
                   Q 96 86 93 88 
                   L 56 109 
                   Q 50 112 44 109 
                   L 7 88 
                   Q 4 86 4 82 
                   L 4 33 
                   Q 4 29 7 27 
                   L 44 6 
                   Q 47 4 50 4 Z"
                fill="#ffffff"
                stroke={theme.hexagonBorder}
                strokeWidth="2.75"
                strokeLinejoin="round"
              />
            </svg>

            {/* Centered High-Res Emblem inside Hexagon */}
            <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              {imgError ? (
                <div className="flex flex-col items-center justify-center text-[#164666]">
                  <ShieldCheck className="w-10 h-10" style={{ color: theme.primary }} />
                </div>
              ) : (
                <Image
                  src={image}
                  alt={name}
                  width={72}
                  height={72}
                  unoptimized
                  onError={() => setImgError(true)}
                  className="object-contain max-h-15 sm:max-h-17 w-auto drop-shadow-2xs"
                />
              )}
            </div>
          </div>

          {/* --- 2. STATUS PILL WITH SOLID CIRCULAR CHECKMARK --- */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wide mb-3 shadow-2xs transition-all duration-300"
            style={{
              backgroundColor: theme.pillBg,
              color: theme.pillText,
            }}
          >
            {/* Solid Filled Circle with Crisp White Checkmark */}
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 shadow-2xs"
              style={{ backgroundColor: theme.checkBg }}
            >
              <svg
                className="w-2.5 h-2.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>{badgeCode}</span>
          </div>

          {/* --- 3. BOLD TITLE (MODERN SANS-SERIF) --- */}
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#091e2f] leading-snug tracking-tight mb-2 text-center group-hover:text-[#164666] transition-colors">
            {name}
          </h3>

          {/* --- 4. SUBTITLE / AUTHORITY --- */}
          {authority && (
            <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-snug mb-1 text-center line-clamp-2">
              {authority}
            </p>
          )}

          {/* --- 5. DESCRIPTION / AUDIT PROTOCOLS --- */}
          <p className="text-[10.5px] sm:text-[11px] font-normal text-slate-500 leading-relaxed text-center px-1">
            {scope || importance}
          </p>

        </div>
      </div>

      {/* ========================================================= */}
      {/* DETAILED COMPLIANCE DOSSIER MODAL                         */}
      {/* ========================================================= */}
      {isDossierOpen && (
        <div
          onClick={() => setIsDossierOpen(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 select-none cursor-default"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col gap-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl border p-2 flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: theme.pillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: theme.pillBg,
                      color: theme.pillText,
                      borderColor: theme.cardBorder,
                    }}
                  >
                    {badgeCode}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mt-1">
                    {name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsDossierOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dossier Specifications */}
            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Building2 className="w-4 h-4 text-[#164666]" />
                  <span>Certifying Authority:</span>
                </div>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {authority || "Statutory Regulatory Commission"}
                </p>
              </div>

              {scope && (
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <FileCheck2 className="w-4 h-4 text-[#164666]" />
                    <span>Accreditation Scope & Benchmark:</span>
                  </div>
                  <p className="text-slate-600 pl-6 leading-relaxed">{scope}</p>
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-[11px] text-emerald-800 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Facility Validated &bull; Ahmedabad Plant
                </span>
                <span className="font-mono text-emerald-700">Audit Active 2026</span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setIsDossierOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={`https://wa.me/919724681096?text=${encodeURIComponent(
                  `Hello Mani Lifestyle Team, I am inquiring about compliance dossiers for ${name} (${badgeCode}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#164666] hover:bg-[#10364f] text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 transition-all"
              >
                <span>Request Official COA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificatePlaqueCard;

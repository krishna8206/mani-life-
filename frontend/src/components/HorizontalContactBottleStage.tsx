"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Send,
  Phone,
  MessageSquare,
  Sparkles,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  MousePointerClick,
} from "lucide-react";

interface HorizontalContactBottleStageProps {
  onOpenQuote?: () => void;
  ctaBanner?: {
    eyebrow?: string;
    heading?: string;
    desc?: string;
    buttonText?: string;
    phone?: string;
    whatsappText?: string;
  };
}

export default function HorizontalContactBottleStage({
  onOpenQuote,
  ctaBanner,
}: HorizontalContactBottleStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; active: boolean }>({
    x: 765,
    y: 270,
    active: false,
  });

  // 3D perspective mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePos({ x: px, y: py });
    setTilt({
      x: -(y * 4.5),
      y: x * 6.5,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  }, []);

  // Tactile Click Animation Handler
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = ((e.clientX - rect.left) / rect.width) * 1260;
      const clickY = ((e.clientY - rect.top) / rect.height) * 560;

      // 1. Trigger 3D press compression + ripple wave
      setIsClicked(true);
      setRipple({ x: clickX, y: clickY, active: true });

      // 2. Smooth spring back
      setTimeout(() => {
        setIsClicked(false);
      }, 240);

      // 3. Open quote / contact modal after tactile feedback
      setTimeout(() => {
        setRipple((prev) => ({ ...prev, active: false }));
        onOpenQuote?.();
      }, 260);
    },
    [onOpenQuote]
  );

  const phone = ctaBanner?.phone || "+91 97246 81096";
  const whatsappText =
    ctaBanner?.whatsappText ||
    "Hello ManiLife, I am interested in custom cosmetic formulation and manufacturing.";

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] via-[#fbfaf8] to-[#f4f2ee] border-b border-slate-200/80 overflow-hidden select-none">
      {/* ------------------------------------------------------------- */}
      {/* Ambient Cosmetic Studio Backdrop Lighting (Soft Pastel Blurs)  */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft daylight sky fill */}
        <div className="absolute top-1/4 -left-20 w-[700px] h-[550px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />
        {/* Warm luxury champagne / rose glow */}
        <div className="absolute top-1/3 right-0 w-[750px] h-[600px] bg-rose-100/35 rounded-full blur-[150px] pointer-events-none" />
        {/* Center studio softbox highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-amber-50/50 via-white/80 to-rose-50/40 rounded-full blur-3xl opacity-85" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------- */}
        {/* SECTION HEADER                                                */}
        {/* ------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3 px-3.5 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#164666] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#164666]">
              {ctaBanner?.eyebrow || "READY TO FORMULATE YOUR NEXT BESTSELLING LINE?"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-cormorant font-semibold text-[#091e2f] leading-[1.14] tracking-tight">
            {ctaBanner?.heading || "Schedule a Direct Consultation With Our Senior Team."}
          </h2>

          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#164666] to-transparent mx-auto mt-4 mb-4" />

          <p className="text-sm sm:text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {ctaBanner?.desc ||
              "Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk."}
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROMINENT CLICK-ME CUE ABOVE BOTTLE                           */}
        {/* ------------------------------------------------------------- */}
        <div className="flex items-center justify-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#164666]/30 shadow-sm text-xs font-semibold text-[#164666] transition-transform hover:scale-105">
            <MousePointerClick className="w-4 h-4 text-[#b85872] animate-bounce" />
            <span>Click anywhere on the bottle below to open Contact Us</span>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ENLARGED PROCEDURAL HORIZONTAL BOTTLE (260px DIAMETER)        */}
        {/* True Physical Bottle Anatomy + Unmistakable Click Affordance */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Contact Us Bottle - Click to open quotation and inquiry modal"
          className="relative max-w-[1360px] mx-auto cursor-pointer group outline-none"
          style={{ perspective: "1600px" }}
        >
          {/* 3D Perspective Tilting & Tactile Click Stage */}
          <div
            className="relative w-full will-change-transform"
            style={{
              transform: isClicked
                ? `scale(0.972) translateY(6px) rotateX(${tilt.x * 0.7}deg) rotateY(${tilt.y * 0.7}deg)`
                : isHovered
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                : "rotateX(0deg) rotateY(0deg) scale(1)",
              transition: isClicked
                ? "transform 0.12s cubic-bezier(0.2, 0, 0, 1)"
                : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Master Photorealistic Procedural Bottle Vector Canvas */}
            <svg
              viewBox="0 0 1260 560"
              className="w-full h-auto drop-shadow-2xl select-none"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* --------------------------------------------------------- */}
                {/* 1. STUDIO GROUND SHADOWS & CONTACT OCCLUSION              */}
                {/* --------------------------------------------------------- */}
                <radialGradient id="studioGroundShadowWide" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#181310" stopOpacity="0.36" />
                  <stop offset="48%" stopColor="#2a1d17" stopOpacity="0.18" />
                  <stop offset="78%" stopColor="#3d2a22" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#3d2a22" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="contactOcclusionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a1412" stopOpacity="0" />
                  <stop offset="5%" stopColor="#1a1412" stopOpacity="0.45" />
                  <stop offset="18%" stopColor="#0c0705" stopOpacity="0.88" />
                  <stop offset="85%" stopColor="#0c0705" stopOpacity="0.82" />
                  <stop offset="98%" stopColor="#1a1412" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1a1412" stopOpacity="0" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 2. PEARL SATIN BOTTLE BODY GRADIENTS (OPTIQUE LUXURY IVORY)*/}
                {/* --------------------------------------------------------- */}
                <linearGradient id="pearlBodyMaster" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e5d9cf" />
                  <stop offset="2%" stopColor="#ffffff" />
                  <stop offset="10%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#fbf7f1" />
                  <stop offset="44%" stopColor="#f5ede3" />
                  <stop offset="66%" stopColor="#eae0d3" />
                  <stop offset="82%" stopColor="#cbb9a5" />
                  <stop offset="92%" stopColor="#af947b" />
                  <stop offset="97%" stopColor="#d8ccb8" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#8f735b" />
                </linearGradient>

                {/* Horizontal Specular Sheen Beam (Softbox light stripe) */}
                <linearGradient id="pearlSheenBeamWide" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="78%" stopColor="#ffffff" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.10" />
                </linearGradient>

                {/* 3D Shoulder Dome Curvature Gradient */}
                <radialGradient id="shoulderDomeGleam" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#faf5ec" stopOpacity="0.65" />
                  <stop offset="80%" stopColor="#d5c2ac" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#a38970" stopOpacity="0" />
                </radialGradient>

                {/* Base Heel Corner Radius Highlight */}
                <radialGradient id="baseHeelGleam" cx="70%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#f4ece1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#b59e87" stopOpacity="0" />
                </radialGradient>

                {/* Heavy Glass Base Refraction Shader (The Solid Punt) */}
                <linearGradient id="thickGlassPuntShader" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                  <stop offset="30%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#e3d6c8" stopOpacity="0.90" />
                  <stop offset="90%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#c5b39e" stopOpacity="0.4" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 3. NORMAL LUXURY CAP GRADIENTS (CLEAN CYLINDRICAL CAP)    */}
                {/* --------------------------------------------------------- */}
                <linearGradient id="normalCapPearlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e8dfd5" />
                  <stop offset="3%" stopColor="#ffffff" />
                  <stop offset="14%" stopColor="#ffffff" />
                  <stop offset="26%" stopColor="#fbf7f1" />
                  <stop offset="48%" stopColor="#f3eae0" />
                  <stop offset="70%" stopColor="#e5d9cc" />
                  <stop offset="86%" stopColor="#cebda9" />
                  <stop offset="94%" stopColor="#b6a089" />
                  <stop offset="98%" stopColor="#d5c7b7" />
                  <stop offset="100%" stopColor="#967e67" />
                </linearGradient>

                {/* Cap Left End Face Highlight */}
                <radialGradient id="capFaceLighting" cx="45%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#f2e8de" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c5b29c" stopOpacity="0.3" />
                </radialGradient>

                {/* --------------------------------------------------------- */}
                {/* 4. MIRROR ROSE-GOLD METALLIC COLLAR (PBR REFLECTIONS)     */}
                {/* --------------------------------------------------------- */}
                <linearGradient id="roseGoldCollarPBR" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fdf4ee" />
                  <stop offset="4%" stopColor="#ffffff" />
                  <stop offset="8%" stopColor="#c87f66" />
                  <stop offset="16%" stopColor="#f9d8cb" />
                  <stop offset="24%" stopColor="#ffffff" />
                  <stop offset="36%" stopColor="#e8b09c" />
                  <stop offset="52%" stopColor="#b3644a" />
                  <stop offset="68%" stopColor="#682b18" />
                  <stop offset="80%" stopColor="#cf917c" />
                  <stop offset="92%" stopColor="#fae0d4" />
                  <stop offset="100%" stopColor="#46190b" />
                </linearGradient>

                <linearGradient id="collarHorizontalReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#873e27" stopOpacity="0.2" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3d1508" stopOpacity="0.6" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 5. DYNAMIC FOIL SHIMMER FOR "Contact Us"                  */}
                {/* --------------------------------------------------------- */}
                <linearGradient id="animatedFoilShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f2f47" />
                  <stop offset="25%" stopColor="#164666" />
                  <stop offset="45%" stopColor="#1a5278" />
                  <stop offset="50%" stopColor="#67b2dc" />
                  <stop offset="53%" stopColor="#ffffff" />
                  <stop offset="56%" stopColor="#67b2dc" />
                  <stop offset="62%" stopColor="#1a5278" />
                  <stop offset="80%" stopColor="#164666" />
                  <stop offset="100%" stopColor="#0f2f47" />
                  <animate
                    attributeName="x1"
                    values="-100%; 200%"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 300%"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </linearGradient>

                {/* Foil Micro-Texture Pattern */}
                <pattern id="foilMicroStipple" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="#164666" />
                  <circle cx="1" cy="1" r="0.5" fill="#2d6487" opacity="0.4" />
                  <circle cx="3" cy="3" r="0.5" fill="#0d283c" opacity="0.6" />
                </pattern>

                {/* CTA Button Gradient */}
                <linearGradient id="ctaButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#164666" />
                  <stop offset="100%" stopColor="#0a2436" />
                </linearGradient>

                {/* Filters */}
                <filter id="softPBRGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="contactShadowBlur" x="-10%" y="-40%" width="120%" height="180%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
              </defs>

              {/* ========================================================= */}
              {/* STAGE FLOOR CONTACT SHADOWS & STUDIO REFLECTION           */}
              {/* ========================================================= */}
              {/* Wide diffuse ambient floor shadow */}
              <ellipse cx="680" cy="420" rx="600" ry="40" fill="url(#studioGroundShadowWide)" />
              {/* Secondary softer shadow extending downward */}
              <ellipse cx="660" cy="428" rx="510" ry="24" fill="url(#studioGroundShadowWide)" opacity="0.65" />
              {/* Cap ground shadow on table */}
              <ellipse cx="210" cy="410" rx="110" ry="22" fill="url(#studioGroundShadowWide)" opacity="0.6" />

              {/* Razor-sharp occlusion line directly where the horizontal cylinder touches the floor */}
              <rect
                x="150"
                y="396"
                width="980"
                height="14"
                rx="7"
                fill="url(#contactOcclusionLine)"
                filter="url(#contactShadowBlur)"
              />

              {/* ========================================================= */}
              {/* MIRROR STUDIO REFLECTION ON TABLE SURFACE (INVERTED)       */}
              {/* Inverted around contact line Y = 400: (800 - Y)           */}
              {/* ========================================================= */}
              <g
                transform="translate(0, 800) scale(1, -1)"
                opacity="0.18"
                style={{ mixBlendMode: "multiply", filter: "blur(3.5px)" }}
              >
                {/* Reflected Bottle Body */}
                <path
                  d="M 1100 140 L 430 140 C 375 140, 335 198, 320 202 L 320 338 C 335 342, 375 400, 430 400 L 1100 400 Q 1135 400 1135 365 L 1135 175 Q 1135 140 1100 140 Z"
                  fill="url(#pearlBodyMaster)"
                />
                {/* Reflected Metallic Collar */}
                <rect x="260" y="202" width="60" height="136" rx="4" fill="url(#roseGoldCollarPBR)" />
                {/* Reflected Normal Cap */}
                <rect x="140" y="202" width="120" height="136" rx="8" fill="url(#normalCapPearlGrad)" />
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 1: NORMAL LUXURY COSMETIC CAP (LEFT END)        */}
              {/* ========================================================= */}

              {/* 1.1 Rose-Gold Metallic Base Band / Collar Ring */}
              <rect
                x="260"
                y="202"
                width="60"
                height="136"
                rx="6"
                fill="url(#roseGoldCollarPBR)"
                stroke="#682916"
                strokeWidth="1.2"
              />
              <rect
                x="260"
                y="202"
                width="60"
                height="136"
                rx="6"
                fill="url(#collarHorizontalReflection)"
                opacity="0.45"
                style={{ mixBlendMode: "overlay" }}
              />
              <rect x="260" y="202" width="4" height="136" fill="#ffffff" opacity="0.8" />
              <rect x="315" y="202" width="4" height="136" fill="#ffffff" opacity="0.8" />

              {/* 1.2 Main Normal Luxury Cylindrical Cap Body */}
              <path
                d="M 260 202 L 150 202 Q 140 202, 140 212 L 140 328 Q 140 338, 150 338 L 260 338 Z"
                fill="url(#normalCapPearlGrad)"
                stroke="#cfbeab"
                strokeWidth="1.2"
              />

              {/* Cap End Face (Left flat face) */}
              <path
                d="M 140 212 Q 140 202, 150 202 L 150 338 Q 140 338, 140 328 Z"
                fill="url(#capFaceLighting)"
              />

              {/* Cap Top Rim Specular Glint */}
              <line
                x1="150"
                y1="203"
                x2="260"
                y2="203"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Cap Primary Pearlescent Specular Sheen Stripe */}
              <rect
                x="148"
                y="216"
                width="112"
                height="18"
                rx="4"
                fill="#ffffff"
                opacity="0.75"
                filter="url(#softPBRGlow)"
              />

              {/* Inlaid Rose-Gold Luxury Pinstripe Ring on Cap */}
              <rect
                x="162"
                y="202"
                width="4.5"
                height="136"
                rx="1"
                fill="url(#roseGoldCollarPBR)"
                opacity="0.9"
              />
              <line x1="163" y1="203" x2="163" y2="337" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />

              {/* Crisp Parting Seam Between Cap and Rose-Gold Collar */}
              <line x1="260" y1="202" x2="260" y2="338" stroke="#482518" strokeWidth="1.2" opacity="0.75" />
              <line x1="261" y1="202" x2="261" y2="338" stroke="#ffffff" strokeWidth="0.8" opacity="0.85" />

              {/* Cap Lower Rim Table Bounce Light */}
              <line
                x1="150"
                y1="337"
                x2="260"
                y2="337"
                stroke="#fcf9f5"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* ========================================================= */}
              {/* COMPONENT 2: ENLARGED PHYSICAL BOTTLE BODY (260PX DIAMETER)*/}
              {/* ========================================================= */}

              {/* 2.1 Master Pearl Body Geometry */}
              <path
                d="M 1100 140 L 430 140 C 375 140, 335 198, 320 202 L 320 338 C 335 342, 375 400, 430 400 L 1100 400 Q 1135 400 1135 365 L 1135 175 Q 1135 140 1100 140 Z"
                fill="url(#pearlBodyMaster)"
                stroke="#cbb9a7"
                strokeWidth="1.5"
              />

              {/* 2.2 Thick Solid Glass Base (Luxury Cosmetic Punt Anatomy) */}
              <path
                d="M 1085 142 Q 1132 142 1132 175 L 1132 365 Q 1132 398 1085 398 Q 1105 370 1105 270 Q 1105 170 1085 142 Z"
                fill="url(#thickGlassPuntShader)"
                opacity="0.8"
              />
              <path
                d="M 1082 148 Q 1100 190 1100 270 Q 1100 350 1082 392"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.6"
                opacity="0.75"
              />

              {/* 2.3 Shoulder Curvature 3D Highlight Dome */}
              <path
                d="M 430 140 C 375 140, 335 198, 320 202 L 320 270 C 345 240, 380 185, 430 175 Z"
                fill="url(#shoulderDomeGleam)"
              />

              {/* 2.4 Primary Horizontal Specular Light Stripe */}
              <path
                d="M 420 162 L 1090 162 Q 1110 162 1110 172 Q 1110 182 1090 182 L 420 182 C 375 182, 345 196, 328 206 L 324 198 C 342 185, 375 162, 420 162 Z"
                fill="url(#pearlSheenBeamWide)"
                opacity="0.9"
                filter="url(#softPBRGlow)"
              />

              {/* 2.5 Thin Razor Specular Glint Along Top Rim */}
              <path
                d="M 430 142 L 1095 142"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* 2.6 Rounded Base Heel Specular Highlight */}
              <path
                d="M 1100 142 Q 1133 142 1133 175 L 1133 365 Q 1133 398 1100 398"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                opacity="0.85"
              />
              <ellipse cx="1125" cy="270" rx="8" ry="85" fill="url(#baseHeelGleam)" opacity="0.65" />

              {/* 2.7 Bottom Rim Bounce Light */}
              <path
                d="M 430 398 L 1098 398"
                stroke="#fcf9f5"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* ========================================================= */}
              {/* COMPONENT 3: DIRECT SILK-SCREEN PRINTING & CLICK CTA      */}
              {/* Unmistakable Affordance to "Contact Us"                    */}
              {/* ========================================================= */}

              {/* 3.1 Brand Eyebrow - Luxury Rose-Pink Tracked Lettering */}
              <text
                x="765"
                y="215"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="13"
                fontWeight="700"
                letterSpacing="4.5px"
                fill="#b85872"
              >
                MANILIFE® FORMULARY
              </text>

              {/* 3.2 MASTER HEADLINE: "Contact Us" WITH TEXTURE & SHIMMER */}
              <g>
                {/* Layer 1: Embossed lower-right tactile shadow/relief */}
                <text
                  x="766"
                  y="270"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="64"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  fill="#ffffff"
                  opacity="0.95"
                >
                  Contact Us
                </text>

                {/* Layer 2: Deep micro-stipple foil texture base */}
                <text
                  x="765"
                  y="268"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="64"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  fill="url(#foilMicroStipple)"
                >
                  Contact Us
                </text>

                {/* Layer 3: Dynamic Animated Foil Shimmer Sweep */}
                <text
                  x="765"
                  y="268"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="64"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  fill="url(#animatedFoilShimmer)"
                  style={{ mixBlendMode: "screen", opacity: isHovered ? 0.98 : 0.88 }}
                >
                  Contact Us
                </text>
              </g>

              {/* 3.3 Delicate Rose-Pink Hairline Divider with Center Star */}
              <g transform="translate(635, 285)">
                <line x1="0" y1="0" x2="115" y2="0" stroke="#c26d85" strokeWidth="1" opacity="0.65" />
                <circle cx="130" cy="0" r="3" fill="#c26d85" />
                <line x1="145" y1="0" x2="260" y2="0" stroke="#c26d85" strokeWidth="1" opacity="0.65" />
              </g>

              {/* 3.4 Direct Plant & Cleanroom Telemetry (Slate Navy) */}
              <text
                x="765"
                y="308"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="13"
                fontWeight="500"
                letterSpacing="1.2px"
                fill="#42647e"
              >
                Direct Formulation & Cleanroom Manufacturing Campus
              </text>

              {/* 3.5 Contact Details & ISO GMP Specifications */}
              <text
                x="765"
                y="328"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="11.5"
                fontWeight="600"
                letterSpacing="1.5px"
                fill="#164666"
              >
                Ahmedabad Cleanroom Campus  •  +91 97246 81096  •  ISO 22716 GMP
              </text>

              {/* 3.6 PROMINENT CLICK-ME CTA BUTTON DIRECTLY ON THE BOTTLE */}
              {/* Unmistakable visual affordance: "CLICK BOTTLE TO CONTACT US" */}
              <g
                transform="translate(585, 342)"
                className="transition-transform duration-200 group-hover:scale-[1.02]"
                style={{ transformOrigin: "180px 22px" }}
              >
                {/* Button Outer Halo / Drop Shadow */}
                <rect
                  x="0"
                  y="0"
                  width="360"
                  height="44"
                  rx="22"
                  fill="url(#ctaButtonGradient)"
                  stroke="#c58f7a"
                  strokeWidth="1.5"
                  className="shadow-lg"
                />

                {/* Live Pulsing Status Beacon */}
                <circle cx="28" cy="22" r="5" fill="#10b981" />
                <circle
                  cx="28"
                  cy="22"
                  r="9"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="animate-ping"
                  style={{ animationDuration: "1.5s" }}
                />

                {/* Bold Click Callout Text */}
                <text
                  x="195"
                  y="26.5"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="11.5"
                  fontWeight="700"
                  letterSpacing="1px"
                  fill="#ffffff"
                >
                  CLICK BOTTLE TO CONTACT US →
                </text>
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 4: INTERACTIVE LUMINOUS CLICK RIPPLE WAVE       */}
              {/* ========================================================= */}
              {ripple.active && (
                <g className="pointer-events-none">
                  <circle
                    cx={ripple.x}
                    cy={ripple.y}
                    r="20"
                    fill="#ffffff"
                    opacity="0.85"
                    className="animate-ping"
                    style={{ animationDuration: "0.55s", animationIterationCount: 1 }}
                  />
                  <circle
                    cx={ripple.x}
                    cy={ripple.y}
                    r="60"
                    fill="none"
                    stroke="#164666"
                    strokeWidth="2.5"
                    opacity="0.6"
                    className="animate-ping"
                    style={{ animationDuration: "0.75s", animationIterationCount: 1 }}
                  />
                  <circle
                    cx={ripple.x}
                    cy={ripple.y}
                    r="105"
                    fill="none"
                    stroke="#b85872"
                    strokeWidth="1.8"
                    opacity="0.45"
                    className="animate-ping"
                    style={{ animationDuration: "0.95s", animationIterationCount: 1 }}
                  />
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ACTION BUTTONS & TELEPHONE CONNECTORS                         */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-10 sm:pt-14">
          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#164666] to-[#0f344d] hover:from-[#113853] hover:to-[#0a2639] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-[#164666]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4 text-emerald-400" />
              <span>Request Custom Quote & Formulation Samples</span>
            </button>
          )}

          <a
            href={`https://wa.me/919724681096?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white hover:bg-[#fbfaf8] text-[#164666] border border-[#d8c7b8] hover:border-[#164666] text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-[#164666]" />
            <span>Schedule Plant Tour ({phone})</span>
          </a>
        </div>

        {/* Factory Credibility Highlights */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-slate-200/60 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-[#164666]">Class 10,000 Cleanroom</span>
            <span className="text-[11px] text-slate-500">ISO 22716 & GMP Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-[#164666]">Custom Batching</span>
            <span className="text-[11px] text-slate-500">From 500 pcs pilot to bulk</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-[#164666]">Formulation Lab</span>
            <span className="text-[11px] text-slate-500">In-house stability & R&D</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-[#164666]">Ahmedabad Campus</span>
            <span className="text-[11px] text-slate-500">Factory inspection welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}

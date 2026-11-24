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
      x: -(y * 5),
      y: x * 7,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  }, []);

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
        <div className="absolute top-1/4 -left-20 w-[650px] h-[520px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />
        {/* Warm luxury champagne / rose glow */}
        <div className="absolute top-1/3 right-0 w-[700px] h-[580px] bg-rose-100/35 rounded-full blur-[140px] pointer-events-none" />
        {/* Center studio softbox highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[450px] bg-gradient-to-r from-amber-50/50 via-white/80 to-rose-50/40 rounded-full blur-3xl opacity-85" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------- */}
        {/* SECTION HEADER                                                */}
        {/* ------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3 px-3.5 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#c58f7a] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#164666]">
              {ctaBanner?.eyebrow || "READY TO FORMULATE YOUR NEXT BESTSELLING LINE?"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-cormorant font-semibold text-[#091e2f] leading-[1.14] tracking-tight">
            {ctaBanner?.heading || "Schedule a Direct Consultation With Our Senior Team."}
          </h2>

          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#c58f7a] to-transparent mx-auto mt-4 mb-4" />

          <p className="text-sm sm:text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {ctaBanner?.desc ||
              "Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk."}
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 100% PROCEDURAL PHOTOREALISTIC HORIZONTAL BOTTLE (NO IMAGES)  */}
        {/* Normal Luxury Cosmetic Cap + Rose-Gold Collar + Pearl Body     */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onOpenQuote}
          role="button"
          tabIndex={0}
          aria-label="Contact Us Bottle - Click to open quotation and inquiry modal"
          className="relative max-w-[1180px] mx-auto cursor-pointer group outline-none"
          style={{ perspective: "1500px" }}
        >
          {/* 3D Perspective Tilting Stage */}
          <div
            className="relative w-full transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: isHovered
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.018)`
                : "rotateX(0deg) rotateY(0deg) scale(1)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Master Photorealistic Procedural Bottle Vector Canvas */}
            <svg
              viewBox="0 0 1140 480"
              className="w-full h-auto drop-shadow-2xl select-none"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* --------------------------------------------------------- */}
                {/* 1. STUDIO GROUND SHADOWS & OCCLUSION                      */}
                {/* --------------------------------------------------------- */}
                <radialGradient id="studioGroundShadowWide" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a1412" stopOpacity="0.30" />
                  <stop offset="50%" stopColor="#2b1e19" stopOpacity="0.14" />
                  <stop offset="78%" stopColor="#3d2c25" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#3d2c25" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="contactOcclusionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a1412" stopOpacity="0" />
                  <stop offset="5%" stopColor="#1a1412" stopOpacity="0.45" />
                  <stop offset="20%" stopColor="#120c09" stopOpacity="0.75" />
                  <stop offset="85%" stopColor="#120c09" stopOpacity="0.70" />
                  <stop offset="98%" stopColor="#1a1412" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1a1412" stopOpacity="0" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 2. PEARL SATIN BOTTLE BODY GRADIENTS (OPTIQUE LUXURY IVORY)*/}
                {/* --------------------------------------------------------- */}
                <linearGradient id="pearlBodyMaster" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e5dad0" />
                  <stop offset="2.5%" stopColor="#ffffff" />
                  <stop offset="12%" stopColor="#ffffff" />
                  <stop offset="24%" stopColor="#faf6ef" />
                  <stop offset="46%" stopColor="#f5ede2" />
                  <stop offset="68%" stopColor="#eae0d3" />
                  <stop offset="84%" stopColor="#d2c1ae" />
                  <stop offset="93%" stopColor="#b49a82" />
                  <stop offset="98%" stopColor="#dbcebf" />
                  <stop offset="100%" stopColor="#9e856e" />
                </linearGradient>

                {/* Horizontal specular sheen sweep (creates silky luster) */}
                <linearGradient id="pearlSheenBeamWide" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.90" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="78%" stopColor="#ffffff" stopOpacity="0.75" />
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
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#f4ece1" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#b59e87" stopOpacity="0" />
                </radialGradient>

                {/* --------------------------------------------------------- */}
                {/* 3. NORMAL LUXURY CAP GRADIENTS (CLEAN CYLINDRICAL CAP)    */}
                {/* --------------------------------------------------------- */}
                {/* Silky champagne-pearl cylindrical cap shader */}
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

                {/* Cap Left End Face Highlight (Flat circular face in perspective) */}
                <radialGradient id="capFaceLighting" cx="45%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#f2e8de" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c5b29c" stopOpacity="0.3" />
                </radialGradient>

                {/* --------------------------------------------------------- */}
                {/* 4. MIRROR ROSE-GOLD METALLIC COLLAR (HIGH DYNAMIC RANGE)  */}
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

                {/* Horizontal metallic reflection glint across collar */}
                <linearGradient id="collarHorizontalReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#873e27" stopOpacity="0.2" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3d1508" stopOpacity="0.6" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 5. HOT-STAMPED FOIL "Contact Us" TYPOGRAPHY GRADIENTS     */}
                {/* --------------------------------------------------------- */}
                <linearGradient id="foilRoseGoldTextPBR" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#783823" />
                  <stop offset="22%" stopColor="#b86f55" />
                  <stop offset="48%" stopColor="#ffd8c5" />
                  <stop offset="65%" stopColor="#c87f65" />
                  <stop offset="85%" stopColor="#8c442e" />
                  <stop offset="100%" stopColor="#541f10" />
                </linearGradient>

                <linearGradient id="silkScreenBackdropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
                  <stop offset="100%" stopColor="#fcf9f5" stopOpacity="0.68" />
                </linearGradient>

                {/* Filters */}
                <filter id="softPBRGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="contactShadowBlur" x="-10%" y="-40%" width="120%" height="180%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* ========================================================= */}
              {/* STAGE FLOOR CONTACT SHADOWS & STUDIO PEDESTAL             */}
              {/* ========================================================= */}
              {/* Wide diffuse ambient floor shadow */}
              <ellipse cx="600" cy="346" rx="490" ry="32" fill="url(#studioGroundShadowWide)" />
              {/* Secondary softer shadow extending downward */}
              <ellipse cx="580" cy="354" rx="410" ry="20" fill="url(#studioGroundShadowWide)" opacity="0.6" />
              {/* Normal Cap ground shadow on table */}
              <ellipse cx="230" cy="336" rx="95" ry="18" fill="url(#studioGroundShadowWide)" opacity="0.55" />

              {/* Razor-sharp occlusion line directly where the horizontal cylinder touches the floor */}
              <rect
                x="170"
                y="326"
                width="810"
                height="10"
                rx="5"
                fill="url(#contactOcclusionLine)"
                filter="url(#contactShadowBlur)"
              />

              {/* ========================================================= */}
              {/* MIRROR STUDIO REFLECTION ON TABLE SURFACE (INVERTED)       */}
              {/* Inverted around contact line Y = 330: (660 - Y)           */}
              {/* ========================================================= */}
              <g
                transform="translate(0, 660) scale(1, -1)"
                opacity="0.20"
                style={{ mixBlendMode: "multiply", filter: "blur(3px)" }}
              >
                {/* Reflected Bottle Body */}
                <path
                  d="M 960 130 L 390 130 C 345 130, 315 174, 300 178 L 300 282 C 315 286, 345 330, 390 330 L 960 330 Q 982 330 982 308 L 982 152 Q 982 130 960 130 Z"
                  fill="url(#pearlBodyMaster)"
                />
                {/* Reflected Metallic Collar */}
                <rect x="260" y="177" width="40" height="106" rx="4" fill="url(#roseGoldCollarPBR)" />
                {/* Reflected Normal Cap */}
                <rect x="165" y="177" width="95" height="106" rx="8" fill="url(#normalCapPearlGrad)" />
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 1: NORMAL LUXURY COSMETIC CAP (LEFT END)        */}
              {/* Clean, elegant cylindrical cap - NO TAP, NO NOZZLE BEAK!  */}
              {/* ========================================================= */}

              {/* 1.1 Rose-Gold Metallic Base Band / Collar Ring */}
              <rect
                x="260"
                y="177"
                width="40"
                height="106"
                rx="4"
                fill="url(#roseGoldCollarPBR)"
                stroke="#682916"
                strokeWidth="1.2"
              />
              {/* Metallic Band Specular Softbox Overlay */}
              <rect
                x="260"
                y="177"
                width="40"
                height="106"
                rx="4"
                fill="url(#collarHorizontalReflection)"
                opacity="0.45"
                style={{ mixBlendMode: "overlay" }}
              />
              {/* Metallic Band Precision Chamfer Edges */}
              <rect x="260" y="177" width="3" height="106" fill="#ffffff" opacity="0.8" />
              <rect x="297" y="177" width="3" height="106" fill="#ffffff" opacity="0.8" />

              {/* 1.2 Main Normal Luxury Cylindrical Cap Body (Cream Pearl) */}
              <path
                d="M 260 177 L 174 177 Q 165 177 165 186 L 165 274 Q 165 283 174 283 L 260 283 Z"
                fill="url(#normalCapPearlGrad)"
                stroke="#cfbeab"
                strokeWidth="1.2"
              />

              {/* Cap End Face (Left circular flat face in 3D perspective) */}
              <path
                d="M 166 186 Q 166 177 174 177 L 174 283 Q 166 283 166 274 Z"
                fill="url(#capFaceLighting)"
              />

              {/* Cap Top Rim Specular Glint */}
              <line
                x1="174"
                y1="178"
                x2="260"
                y2="178"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Cap Primary Pearlescent Specular Sheen Stripe */}
              <rect
                x="172"
                y="188"
                width="88"
                height="14"
                rx="4"
                fill="#ffffff"
                opacity="0.75"
                filter="url(#softPBRGlow)"
              />

              {/* Inlaid Rose-Gold Luxury Pinstripe Ring on Cap */}
              <rect
                x="184"
                y="177"
                width="3.5"
                height="106"
                rx="1"
                fill="url(#roseGoldCollarPBR)"
                opacity="0.9"
              />
              <line x1="185" y1="178" x2="185" y2="282" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />

              {/* Crisp Parting Seam Between Cap and Rose-Gold Collar */}
              <line x1="260" y1="177" x2="260" y2="283" stroke="#482518" strokeWidth="1.2" opacity="0.75" />
              <line x1="261" y1="177" x2="261" y2="283" stroke="#ffffff" strokeWidth="0.8" opacity="0.85" />

              {/* Cap Lower Rim Table Bounce Light */}
              <line
                x1="174"
                y1="282"
                x2="260"
                y2="282"
                stroke="#fcf9f5"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* ========================================================= */}
              {/* COMPONENT 2: ENLARGED PEARLESCENT BOTTLE BODY (33% LARGER)*/}
              {/* Height: 200px (Y=130 to Y=330), Length: 570px             */}
              {/* ========================================================= */}

              {/* 2.1 Master Pearl Body Geometry */}
              <path
                d="M 960 130 L 390 130 C 345 130, 315 174, 300 178 L 300 282 C 315 286, 345 330, 390 330 L 960 330 Q 982 330 982 308 L 982 152 Q 982 130 960 130 Z"
                fill="url(#pearlBodyMaster)"
                stroke="#cbb9a7"
                strokeWidth="1.4"
              />

              {/* 2.2 Shoulder Curvature 3D Highlight Dome */}
              <path
                d="M 390 130 C 345 130, 315 174, 300 178 L 300 230 C 320 210, 350 170, 390 162 Z"
                fill="url(#shoulderDomeGleam)"
              />

              {/* 2.3 Horizontal Pearlescent Specular Sheen Beam (Upper Cylinder) */}
              <path
                d="M 380 148 L 960 148 Q 975 148 975 156 Q 975 164 960 164 L 380 164 C 345 164, 320 174, 308 182 L 304 176 C 318 166, 345 148, 380 148 Z"
                fill="url(#pearlSheenBeamWide)"
                opacity="0.88"
                filter="url(#softPBRGlow)"
              />

              {/* 2.4 Thin Razor Specular Glint Along Top Rim */}
              <path
                d="M 390 132 L 956 132"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* 2.5 Rounded Base Heel Specular Highlight (Right End) */}
              <path
                d="M 960 132 Q 980 132 980 152 L 980 308 Q 980 328 960 328"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.6"
                opacity="0.82"
              />

              {/* Base Dome Accent Light */}
              <ellipse cx="974" cy="230" rx="6" ry="65" fill="url(#baseHeelGleam)" opacity="0.65" />

              {/* 2.6 Bottom Rim Bounce Light (Reflecting Studio Table) */}
              <path
                d="M 390 328 L 958 328"
                stroke="#fcf9f5"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* ========================================================= */}
              {/* COMPONENT 3: FOIL EMBOSSED "Contact Us" LABEL ON BOTTLE   */}
              {/* Direct Hot-Stamped Luxury Cosmetic Typography             */}
              {/* ========================================================= */}

              {/* 3.1 Frosted Silk-Screen Substrate Background */}
              <rect
                x="385"
                y="152"
                width="550"
                height="156"
                rx="20"
                fill="url(#silkScreenBackdropGrad)"
                stroke="rgba(203, 178, 158, 0.45)"
                strokeWidth="1.2"
                filter="url(#softPBRGlow)"
              />

              {/* 3.2 Fine Hairline Outer Frame */}
              <rect
                x="395"
                y="162"
                width="530"
                height="136"
                rx="15"
                fill="none"
                stroke="rgba(197, 143, 122, 0.35)"
                strokeWidth="0.9"
                strokeDasharray="6 3.5"
              />

              {/* 3.3 Brand Eyebrow Hot-Stamp */}
              <text
                x="660"
                y="186"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="10"
                fontWeight="700"
                letterSpacing="4px"
                fill="#874730"
              >
                MANILIFE FORMULARY • DIRECT INQUIRY
              </text>

              {/* 3.4 MASTER FOILED "Contact Us" HEADLINE */}
              {/* High-end Cormorant Garamond serif with rose-gold metallic gradient */}
              <g>
                {/* 3D Embossed bottom highlight */}
                <text
                  x="660"
                  y="238.5"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="50"
                  fontWeight="700"
                  letterSpacing="1px"
                  fill="#ffffff"
                  opacity="0.95"
                >
                  Contact Us
                </text>
                {/* Master Foiled Metallic Ink */}
                <text
                  x="660"
                  y="236.5"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="50"
                  fontWeight="700"
                  letterSpacing="1px"
                  fill="url(#foilRoseGoldTextPBR)"
                  filter="url(#softPBRGlow)"
                >
                  Contact Us
                </text>
              </g>

              {/* 3.5 Delicate Rose-Gold Hairline Divider */}
              <g transform="translate(545, 249)">
                <line x1="0" y1="0" x2="100" y2="0" stroke="#c58f7a" strokeWidth="0.9" opacity="0.6" />
                <circle cx="115" cy="0" r="2.4" fill="#c58f7a" />
                <line x1="130" y1="0" x2="230" y2="0" stroke="#c58f7a" strokeWidth="0.9" opacity="0.6" />
              </g>

              {/* 3.6 Cleanroom Campus Subtext */}
              <text
                x="660"
                y="268"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="11"
                fontWeight="500"
                letterSpacing="0.8px"
                fill="#64748b"
              >
                Ahmedabad Cleanroom Campus • Direct Formulation Batching
              </text>

              {/* 3.7 Interactive "Click to Connect" Live Pill */}
              <g transform="translate(565, 276)">
                <rect
                  x="0"
                  y="0"
                  width="190"
                  height="18"
                  rx="9"
                  fill="#164666"
                  opacity={isHovered ? "1" : "0.92"}
                  className="transition-opacity duration-200"
                />
                <circle cx="14" cy="9" r="3.2" fill="#10b981" />
                <text
                  x="102"
                  y="12.8"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="9.5"
                  fontWeight="600"
                  letterSpacing="0.6px"
                  fill="#ffffff"
                >
                  CLICK BOTTLE TO CONNECT
                </text>
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 4: DYNAMIC LIGHT SHEEN SWEEP (HOVER REACTION)   */}
              {/* ========================================================= */}
              <path
                d="M 260 178 L 982 178 L 982 282 L 260 282 Z"
                fill="none"
                stroke="url(#pearlSheenBeamWide)"
                strokeWidth="1.8"
                opacity={isHovered ? "0.9" : "0.2"}
                className="transition-opacity duration-300"
              />
            </svg>

            {/* Floating Live Laboratory Status Badge */}
            <div className="absolute top-2 right-4 sm:right-8 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#e3d5c6] shadow-sm backdrop-blur-md text-xs font-mono text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-[11px] text-[#164666]">Ahmedabad Cleanroom Online</span>
              </span>
            </div>
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white hover:bg-[#fbfaf8] text-[#164666] border border-[#d8c7b8] hover:border-[#c58f7a] text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-[#c58f7a]" />
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

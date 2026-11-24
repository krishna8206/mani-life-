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
    <section className="relative w-full py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] via-[#fbfaf8] to-[#f4f3f0] border-b border-slate-200/80 overflow-hidden select-none">
      {/* ------------------------------------------------------------- */}
      {/* Ambient Cosmetic Studio Backdrop Lighting (Soft Pastel Blurs)  */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft daylight blue fill */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[500px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" />
        {/* Warm luxury champagne / rose glow */}
        <div className="absolute top-1/3 right-0 w-[650px] h-[550px] bg-rose-100/35 rounded-full blur-[130px] pointer-events-none" />
        {/* Center studio softbox highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[400px] bg-gradient-to-r from-amber-50/50 via-white/80 to-rose-50/40 rounded-full blur-3xl opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------- */}
        {/* SECTION HEADER                                                */}
        {/* ------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3 px-3.5 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
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
        {/* 100% CODE-RENDERED PHOTOREALISTIC HORIZONTAL BOTTLE (NO IMAGES)*/}
        {/* Matches user's luxury pearl pump bottle with rose-gold collar */}
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
          className="relative max-w-[1040px] mx-auto cursor-pointer group outline-none"
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
              viewBox="0 0 1060 410"
              className="w-full h-auto drop-shadow-2xl select-none"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* --------------------------------------------------------- */}
                {/* 1. STUDIO SHADOWS & AMBIENT OCCLUSION GRADIENTS           */}
                {/* --------------------------------------------------------- */}
                {/* Soft diffuse studio contact shadow */}
                <radialGradient id="studioGroundShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a1412" stopOpacity="0.32" />
                  <stop offset="45%" stopColor="#2a1f1b" stopOpacity="0.16" />
                  <stop offset="75%" stopColor="#3d2d27" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#3d2d27" stopOpacity="0" />
                </radialGradient>

                {/* Razor contact occlusion shadow right beneath the horizontal cylinder line */}
                <linearGradient id="contactOcclusionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a1412" stopOpacity="0" />
                  <stop offset="8%" stopColor="#1a1412" stopOpacity="0.45" />
                  <stop offset="25%" stopColor="#15100e" stopOpacity="0.65" />
                  <stop offset="85%" stopColor="#15100e" stopOpacity="0.6" />
                  <stop offset="98%" stopColor="#1a1412" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1a1412" stopOpacity="0" />
                </linearGradient>

                {/* Soft table floor bounce & reflection fade mask */}
                <linearGradient id="reflectionFadeMask" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.12" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 2. PEARL SATIN BOTTLE BODY GRADIENTS (OPTIQUE LUXURY IVORY)*/}
                {/* --------------------------------------------------------- */}
                {/* Cylindrical lighting from top-left studio softbox */}
                <linearGradient id="pearlBodyCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                  {/* Top rim rim-light */}
                  <stop offset="0%" stopColor="#e3d8cc" />
                  <stop offset="3%" stopColor="#ffffff" />
                  {/* Primary soft specular pearl highlight beam */}
                  <stop offset="14%" stopColor="#ffffff" />
                  <stop offset="26%" stopColor="#faf6ef" />
                  {/* Silky champagne cream body tone */}
                  <stop offset="48%" stopColor="#f4ece0" />
                  <stop offset="68%" stopColor="#eae0d2" />
                  {/* Core shadow on lower cylinder curve */}
                  <stop offset="84%" stopColor="#d5c4b1" />
                  <stop offset="94%" stopColor="#ba9f87" />
                  {/* Soft studio floor bounce light along the bottom */}
                  <stop offset="98%" stopColor="#dbcebf" />
                  <stop offset="100%" stopColor="#a68c74" />
                </linearGradient>

                {/* Horizontal specular sheen sweep (creates silky pearlescent luster) */}
                <linearGradient id="pearlSheenBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
                </linearGradient>

                {/* 3D Shoulder Dome Gradient (Radial curvature lighting) */}
                <radialGradient id="shoulderCurveLight" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#faf5ec" stopOpacity="0.6" />
                  <stop offset="80%" stopColor="#d8c5b0" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ab9178" stopOpacity="0" />
                </radialGradient>

                {/* Base Heel Corner Radius Highlight */}
                <radialGradient id="baseHeelLight" cx="70%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f3ece1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#bda68f" stopOpacity="0" />
                </radialGradient>

                {/* --------------------------------------------------------- */}
                {/* 3. MIRROR ROSE-GOLD METALLIC COLLAR GRADIENTS             */}
                {/* --------------------------------------------------------- */}
                {/* Multi-stop specular chrome reflection matching reference */}
                <linearGradient id="roseGoldCollarCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fdf3ee" />
                  <stop offset="4%" stopColor="#ffffff" />
                  <stop offset="9%" stopColor="#b36c54" />
                  <stop offset="18%" stopColor="#fce4d8" />
                  <stop offset="28%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#dfa58f" />
                  <stop offset="58%" stopColor="#9a523a" />
                  <stop offset="72%" stopColor="#692e1b" />
                  <stop offset="85%" stopColor="#dca591" />
                  <stop offset="94%" stopColor="#f7dbce" />
                  <stop offset="100%" stopColor="#451a0d" />
                </linearGradient>

                {/* Rose gold bezel rings (left and right rims) */}
                <linearGradient id="roseGoldBezelRim" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#dca591" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#572212" stopOpacity="0.8" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 4. LUXURY CREAM PUMP ACTUATOR & SPOUT GRADIENTS           */}
                {/* --------------------------------------------------------- */}
                <linearGradient id="pumpActuatorCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="12%" stopColor="#fbf6ee" />
                  <stop offset="35%" stopColor="#f5ede0" />
                  <stop offset="65%" stopColor="#e8ddd0" />
                  <stop offset="85%" stopColor="#cfbea9" />
                  <stop offset="96%" stopColor="#b69f88" />
                  <stop offset="100%" stopColor="#8d735a" />
                </linearGradient>

                <linearGradient id="spoutCurvatureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#faf5ec" />
                  <stop offset="70%" stopColor="#e3d6c7" />
                  <stop offset="100%" stopColor="#b39d86" />
                </linearGradient>

                {/* --------------------------------------------------------- */}
                {/* 5. HOT-STAMPED FOIL EMBOSSED "Contact Us" LABEL GRADIENTS */}
                {/* --------------------------------------------------------- */}
                {/* Deep luxury rose-gold foil for serif typography */}
                <linearGradient id="foilRoseGoldText" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#874730" />
                  <stop offset="25%" stopColor="#c57f64" />
                  <stop offset="48%" stopColor="#ffd9c7" />
                  <stop offset="65%" stopColor="#d38b71" />
                  <stop offset="85%" stopColor="#964e37" />
                  <stop offset="100%" stopColor="#5e2918" />
                </linearGradient>

                {/* Satin label plate backdrop (subtle silk-screened card) */}
                <linearGradient id="silkScreenPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fdfbf7" stopOpacity="0.65" />
                </linearGradient>

                {/* Filters */}
                <filter id="softStudioGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="contactShadowBlur" x="-10%" y="-40%" width="120%" height="180%">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>

              {/* ========================================================= */}
              {/* STAGE FLOOR CONTACT SHADOWS & STUDIO PEDESTAL             */}
              {/* ========================================================= */}
              {/* Wide diffuse ambient floor shadow */}
              <ellipse cx="550" cy="272" rx="430" ry="26" fill="url(#studioGroundShadow)" />
              {/* Secondary softer shadow extending downward */}
              <ellipse cx="530" cy="278" rx="360" ry="16" fill="url(#studioGroundShadow)" opacity="0.6" />
              {/* Pump actuator contact shadow on table */}
              <ellipse cx="140" cy="256" rx="90" ry="14" fill="url(#studioGroundShadow)" opacity="0.5" />

              {/* Razor-sharp occlusion line directly where the horizontal cylinder touches the floor */}
              <rect
                x="200"
                y="256"
                width="660"
                height="8"
                rx="4"
                fill="url(#contactOcclusionGrad)"
                filter="url(#contactShadowBlur)"
              />

              {/* ========================================================= */}
              {/* MIRROR STUDIO REFLECTION ON TABLE SURFACE (INVERTED)       */}
              {/* ========================================================= */}
              <g
                transform="translate(0, 520) scale(1, -1)"
                opacity="0.22"
                style={{ mixBlendMode: "multiply", filter: "blur(2.5px)" }}
              >
                {/* Reflected Bottle Body */}
                <path
                  d="M 844 110 L 330 110 C 285 110, 260 144, 248 147 L 248 223 C 260 226, 285 260, 330 260 L 844 260 Q 862 260 862 242 L 862 128 Q 862 110 844 110 Z"
                  fill="url(#pearlBodyCylinder)"
                />
                {/* Reflected Metallic Collar */}
                <rect x="185" y="146" width="63" height="78" rx="4" fill="url(#roseGoldCollarCylinder)" />
                {/* Reflected Pump Head */}
                <rect x="110" y="152" width="55" height="66" rx="8" fill="url(#pumpActuatorCylinder)" />
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 1: METALLIC ROSE-GOLD COLLAR & PUMP (LEFT SIDE) */}
              {/* ========================================================= */}

              {/* 1.1 Ergonomic Dispensing Spout Tip */}
              {/* Curved downward cosmetic nozzle, exactly like reference */}
              <path
                d="M 115 160 C 95 160, 70 166, 52 174 C 47 176, 44 180, 44 185 C 44 190, 48 193, 54 191 C 72 186, 92 184, 115 184 Z"
                fill="url(#spoutCurvatureGrad)"
                stroke="#c9b7a2"
                strokeWidth="1"
              />
              {/* Dispenser Nozzle Aperture */}
              <ellipse cx="46" cy="184" rx="2.2" ry="4.5" fill="#4d3e33" />
              <ellipse cx="46.5" cy="183.5" rx="1.2" ry="3" fill="#1f1813" />

              {/* 1.2 Pump Actuator Head (Cream Pearl Finish) */}
              {/* Sleek contoured pump head with soft ergonomic top curve */}
              <path
                d="M 110 152 Q 138 149 165 152 Q 172 153 172 160 L 172 210 Q 172 218 165 218 L 110 218 Q 104 218 104 210 L 104 160 Q 104 152 110 152 Z"
                fill="url(#pumpActuatorCylinder)"
                stroke="#c9b7a2"
                strokeWidth="1"
              />
              {/* Actuator Top Finger Depression Highlight (Subtle Ergonomic Indent) */}
              <path
                d="M 116 154 Q 138 152 160 154"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* Actuator Lower Shadow Arc */}
              <path
                d="M 108 214 L 168 214"
                stroke="#9a8169"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* 1.3 Pump Stem (Between head and metallic collar) */}
              <rect
                x="168"
                y="166"
                width="18"
                height="38"
                rx="2"
                fill="url(#pumpActuatorCylinder)"
                stroke="#b9a691"
                strokeWidth="0.8"
              />
              {/* Stem Shadow under Head */}
              <rect x="168" y="166" width="4" height="38" fill="#715b47" opacity="0.4" />

              {/* 1.4 High-Gloss Mirror Rose-Gold Collar */}
              {/* Main Metallic Collar Ring */}
              <rect
                x="185"
                y="146"
                width="63"
                height="78"
                rx="5"
                fill="url(#roseGoldCollarCylinder)"
                stroke="#70321d"
                strokeWidth="1.2"
              />

              {/* Collar Knurling / Vertical Specular Reflections */}
              {/* Razor-sharp light reflections that sell mirror chrome realism */}
              <line x1="192" y1="147" x2="192" y2="223" stroke="#ffffff" strokeWidth="1.8" opacity="0.95" />
              <line x1="196" y1="147" x2="196" y2="223" stroke="#fde2d5" strokeWidth="1" opacity="0.8" />
              <line x1="208" y1="147" x2="208" y2="223" stroke="#712e1a" strokeWidth="2" opacity="0.6" />
              <line x1="220" y1="147" x2="220" y2="223" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
              <line x1="225" y1="147" x2="225" y2="223" stroke="#fcd8c9" strokeWidth="1.5" opacity="0.75" />
              <line x1="238" y1="147" x2="238" y2="223" stroke="#ffffff" strokeWidth="1.5" opacity="0.85" />

              {/* Beveled Collar Rim Rings (Left & Right Seams) */}
              <rect x="185" y="146" width="4" height="78" fill="url(#roseGoldBezelRim)" />
              <rect x="244" y="146" width="4" height="78" fill="url(#roseGoldBezelRim)" />

              {/* ========================================================= */}
              {/* COMPONENT 2: PEARLESCENT HORIZONTAL BOTTLE BODY           */}
              {/* ========================================================= */}

              {/* 2.1 Master Pearl Body Geometry */}
              {/* Smooth luxury shoulder tapering gracefully into the neck + rounded base */}
              <path
                d="M 844 110 L 330 110 C 285 110, 260 144, 248 147 L 248 223 C 260 226, 285 260, 330 260 L 844 260 Q 862 260 862 242 L 862 128 Q 862 110 844 110 Z"
                fill="url(#pearlBodyCylinder)"
                stroke="#d3c2b0"
                strokeWidth="1.2"
              />

              {/* 2.2 Shoulder Curvature 3D Highlight Dome */}
              {/* Light gathering on the 3D rounded shoulder */}
              <path
                d="M 330 110 C 285 110, 260 144, 248 147 L 248 185 C 265 170, 290 140, 330 135 Z"
                fill="url(#shoulderCurveLight)"
              />

              {/* 2.3 Horizontal Pearlescent Specular Sheen Beam */}
              {/* The primary light stripe running across the upper cylinder length */}
              <path
                d="M 325 125 L 845 125 Q 855 125 855 132 Q 855 138 845 138 L 325 138 C 295 138, 275 146, 258 152 L 254 148 C 270 140, 292 125, 325 125 Z"
                fill="url(#pearlSheenBeam)"
                opacity="0.85"
                filter="url(#softStudioGlow)"
              />

              {/* 2.4 Thin Razor Specular Glint Along Top Rim */}
              <path
                d="M 330 112 L 840 112"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* 2.5 Rounded Base Heel Specular Highlight (Right End) */}
              <path
                d="M 844 112 Q 860 112 860 128 L 860 242 Q 860 258 844 258"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                opacity="0.8"
              />

              {/* Base Dome Accent Light */}
              <ellipse cx="854" cy="185" rx="5" ry="50" fill="url(#baseHeelLight)" opacity="0.6" />

              {/* 2.6 Bottom Rim Bounce Light (Reflecting Studio Table) */}
              <path
                d="M 330 258 L 842 258"
                stroke="#fdfbf7"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.75"
              />

              {/* ========================================================= */}
              {/* COMPONENT 3: FOIL EMBOSSED "Contact Us" LABEL ON BOTTLE   */}
              {/* Luxury cosmetic silk-screened / hot-stamped typography    */}
              {/* ========================================================= */}

              {/* 3.1 Frosted Silk-Screen Substrate Background (Minimalist) */}
              <rect
                x="330"
                y="126"
                width="480"
                height="118"
                rx="16"
                fill="url(#silkScreenPlateGrad)"
                stroke="rgba(211, 185, 165, 0.45)"
                strokeWidth="1"
                filter="url(#softStudioGlow)"
              />

              {/* 3.2 Fine Hairline Outer Frame */}
              <rect
                x="338"
                y="134"
                width="464"
                height="102"
                rx="12"
                fill="none"
                stroke="rgba(197, 143, 122, 0.35)"
                strokeWidth="0.8"
                strokeDasharray="5 3"
              />

              {/* 3.3 Brand Eyebrow Hot-Stamp */}
              <text
                x="570"
                y="153"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="9.5"
                fontWeight="700"
                letterSpacing="3.5px"
                fill="#874730"
              >
                MANILIFE FORMULARY • DIRECT INQUIRY
              </text>

              {/* 3.4 MASTER FOILED "Contact Us" HEADLINE */}
              {/* High-end Cormorant Garamond serif with rose-gold metallic gradient */}
              <g>
                {/* Embossed bottom highlight (simulates raised 3D stamping) */}
                <text
                  x="570"
                  y="194.5"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="42"
                  fontWeight="700"
                  letterSpacing="0.8px"
                  fill="#ffffff"
                  opacity="0.9"
                >
                  Contact Us
                </text>
                {/* Master Foiled Ink */}
                <text
                  x="570"
                  y="193"
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="42"
                  fontWeight="700"
                  letterSpacing="0.8px"
                  fill="url(#foilRoseGoldText)"
                  filter="url(#softStudioGlow)"
                >
                  Contact Us
                </text>
              </g>

              {/* 3.5 Delicate Rose-Gold Hairline Divider */}
              <g transform="translate(470, 203)">
                <line x1="0" y1="0" x2="85" y2="0" stroke="#c58f7a" strokeWidth="0.8" opacity="0.6" />
                <circle cx="100" cy="0" r="2.2" fill="#c58f7a" />
                <line x1="115" y1="0" x2="200" y2="0" stroke="#c58f7a" strokeWidth="0.8" opacity="0.6" />
              </g>

              {/* 3.6 Cleanroom Campus Subtext */}
              <text
                x="570"
                y="219"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="10"
                fontWeight="500"
                letterSpacing="0.6px"
                fill="#64748b"
              >
                Ahmedabad Cleanroom Campus • Direct Formulation Batching
              </text>

              {/* 3.7 Interactive "Click to Connect" Live Pill */}
              <g transform="translate(485, 227)">
                <rect
                  x="0"
                  y="0"
                  width="170"
                  height="16"
                  rx="8"
                  fill="#164666"
                  opacity={isHovered ? "1" : "0.92"}
                  className="transition-opacity duration-200"
                />
                <circle cx="12" cy="8" r="3" fill="#10b981" />
                <text
                  x="92"
                  y="11.5"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="8.5"
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
                d="M 248 147 L 860 147 L 860 223 L 248 223 Z"
                fill="none"
                stroke="url(#pearlSheenBeam)"
                strokeWidth="1.5"
                opacity={isHovered ? "0.85" : "0.2"}
                className="transition-opacity duration-300"
              />
            </svg>

            {/* Floating Live Laboratory Status Badge */}
            <div className="absolute top-2 right-4 sm:right-8 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#e3d5c6] shadow-sm backdrop-blur-md text-xs font-mono text-slate-700">
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

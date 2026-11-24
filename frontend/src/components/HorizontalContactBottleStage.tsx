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
        {/* Sculpted Luxury Cream Pump Dispenser + Rose-Gold Mirror Collar*/}
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
                  <stop offset="8%" stopColor="#1a1412" stopOpacity="0.45" />
                  <stop offset="25%" stopColor="#120c09" stopOpacity="0.75" />
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
                {/* 3. MIRROR ROSE-GOLD METALLIC COLLAR (HIGH DYNAMIC RANGE)  */}
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
                {/* 4. SCULPTED ORGANIC CREAM PUMP DISPENSER HEAD GRADIENTS   */}
                {/* --------------------------------------------------------- */}
                {/* Master cylindrical gradient across the actuator body */}
                <linearGradient id="pumpActuatorBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="6%" stopColor="#fdf9f2" />
                  <stop offset="22%" stopColor="#f7f0e4" />
                  <stop offset="50%" stopColor="#efe5d7" />
                  <stop offset="76%" stopColor="#dfd2c1" />
                  <stop offset="92%" stopColor="#beaa95" />
                  <stop offset="100%" stopColor="#8d745e" />
                </linearGradient>

                {/* Top spine ergonomic light ridge */}
                <linearGradient id="pumpSpineHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                </linearGradient>

                {/* Concave spout underside ambient occlusion shadow */}
                <linearGradient id="spoutUndersideShadow" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#7a624d" stopOpacity="0.55" />
                  <stop offset="45%" stopColor="#a38c75" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#dfd3c4" stopOpacity="0" />
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
              {/* Pump actuator contact shadow on table */}
              <ellipse cx="140" cy="326" rx="100" ry="16" fill="url(#studioGroundShadowWide)" opacity="0.55" />

              {/* Razor-sharp occlusion line directly where the horizontal cylinder touches the floor */}
              <rect
                x="220"
                y="326"
                width="760"
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
                <rect x="225" y="177" width="75" height="106" rx="6" fill="url(#roseGoldCollarPBR)" />
                {/* Reflected Pump Head */}
                <rect x="130" y="185" width="75" height="87" rx="8" fill="url(#pumpActuatorBodyGrad)" />
              </g>

              {/* ========================================================= */}
              {/* COMPONENT 1: METALLIC ROSE-GOLD COLLAR & PUMP (LEFT SIDE) */}
              {/* ========================================================= */}

              {/* 1.1 Pump Stem (Recessed neck cylinder between actuator and collar) */}
              <rect
                x="205"
                y="202"
                width="20"
                height="56"
                rx="2"
                fill="url(#pumpActuatorBodyGrad)"
                stroke="#b8a590"
                strokeWidth="0.8"
              />
              {/* Stem Inner Shadow under Actuator Head */}
              <rect x="205" y="202" width="5" height="56" fill="#6d5540" opacity="0.45" />

              {/* 1.2 Master Sculpted Cosmetic Dispenser Pump Head (Actuator + Spout) */}
              {/* Single continuous ergonomic contour - NO SEPARATE BOX, NO BEAK! */}
              <path
                d="M 205 272 L 130 272 L 130 252 C 115 246, 85 234, 46 230 C 43 226, 43 221, 45 218 C 95 196, 145 185, 175 186 C 190 186, 202 183, 205 186 Z"
                fill="url(#pumpActuatorBodyGrad)"
                stroke="#cfbeab"
                strokeWidth="1.2"
              />

              {/* Spout Underside 3D Concave Shadow (Creates real volume) */}
              <path
                d="M 46 230 C 85 234, 115 246, 130 252 L 130 244 C 115 238, 85 228, 48 223 Z"
                fill="url(#spoutUndersideShadow)"
              />

              {/* Top Ergonomic Spine Highlight (Soft light ridge from crest to spout tip) */}
              <path
                d="M 202 186 C 188 186, 145 188, 98 200 C 65 210, 48 219, 46 220"
                fill="none"
                stroke="url(#pumpSpineHighlight)"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Actuator Tactile Finger Grip Ridges (Subtle embossed cosmetic grip) */}
              <g opacity="0.55">
                <line x1="162" y1="187" x2="162" y2="198" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                <line x1="162" y1="188" x2="162" y2="199" stroke="#b49f87" strokeWidth="0.8" strokeLinecap="round" />
                <line x1="172" y1="186" x2="172" y2="198" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                <line x1="172" y1="187" x2="172" y2="199" stroke="#b49f87" strokeWidth="0.8" strokeLinecap="round" />
                <line x1="182" y1="186" x2="182" y2="198" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                <line x1="182" y1="187" x2="182" y2="199" stroke="#b49f87" strokeWidth="0.8" strokeLinecap="round" />
              </g>

              {/* Dispensing Nozzle Orifice at Tip (Recessed Cosmetic Liquid Port) */}
              <ellipse cx="45.5" cy="224" rx="2.4" ry="4.8" fill="#3b2d23" />
              <ellipse cx="46" cy="223.5" rx="1.4" ry="3.2" fill="#140e0a" />
              {/* Lower Rim Highlight on Orifice */}
              <path
                d="M 44.5 226 Q 46 229 47.5 226"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.8"
                opacity="0.85"
              />

              {/* Actuator Skirt Base Chamfer Line */}
              <line x1="130" y1="268" x2="205" y2="268" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
              <line x1="130" y1="272" x2="205" y2="272" stroke="#876f57" strokeWidth="1" opacity="0.6" />

              {/* 1.3 High-Gloss Mirror Rose-Gold Metallic Collar (PBR) */}
              <rect
                x="225"
                y="177"
                width="75"
                height="106"
                rx="6"
                fill="url(#roseGoldCollarPBR)"
                stroke="#682916"
                strokeWidth="1.4"
              />

              {/* Smooth Metallic Softbox Reflection Overlay (No hard pinstripes) */}
              <rect
                x="225"
                y="177"
                width="75"
                height="106"
                rx="6"
                fill="url(#collarHorizontalReflection)"
                opacity="0.45"
                style={{ mixBlendMode: "overlay" }}
              />

              {/* Beveled Collar Edge Rings (Razor-sharp metallic chamfer rims) */}
              <rect x="225" y="177" width="5" height="106" rx="2" fill="#ffffff" opacity="0.7" />
              <rect x="229" y="177" width="2" height="106" fill="#692b18" opacity="0.4" />
              <rect x="295" y="177" width="5" height="106" rx="2" fill="#ffffff" opacity="0.85" />
              <rect x="293" y="177" width="2" height="106" fill="#692b18" opacity="0.4" />

              {/* Upper Rim Glint */}
              <line x1="225" y1="178" x2="300" y2="178" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
              {/* Lower Rim Ground Glint */}
              <line x1="225" y1="282" x2="300" y2="282" stroke="#ffd8c6" strokeWidth="1.2" opacity="0.75" />

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
                d="M 300 178 L 982 178 L 982 282 L 300 282 Z"
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

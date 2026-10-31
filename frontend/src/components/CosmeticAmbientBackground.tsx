"use client";

import React, { useMemo, useState, useEffect } from "react";

export function CosmeticAmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 24 animated cosmetic serum bubbles with deterministic properties
  const bubbles = useMemo(
    () => [
      { id: 1, left: "5%", size: 28, delay: "0s", duration: "14s", drift: "35px" },
      { id: 2, left: "12%", size: 16, delay: "3s", duration: "11s", drift: "-25px" },
      { id: 3, left: "18%", size: 34, delay: "7s", duration: "16s", drift: "40px" },
      { id: 4, left: "24%", size: 12, delay: "1.5s", duration: "9s", drift: "-18px" },
      { id: 5, left: "31%", size: 22, delay: "5s", duration: "13s", drift: "28px" },
      { id: 6, left: "38%", size: 40, delay: "9s", duration: "18s", drift: "-30px" },
      { id: 7, left: "45%", size: 14, delay: "4s", duration: "10s", drift: "22px" },
      { id: 8, left: "52%", size: 30, delay: "8s", duration: "15s", drift: "-35px" },
      { id: 9, left: "59%", size: 18, delay: "2s", duration: "12s", drift: "26px" },
      { id: 10, left: "66%", size: 36, delay: "6s", duration: "17s", drift: "-28px" },
      { id: 11, left: "73%", size: 15, delay: "10s", duration: "11s", drift: "32px" },
      { id: 12, left: "80%", size: 26, delay: "3.5s", duration: "14s", drift: "-22px" },
      { id: 13, left: "87%", size: 32, delay: "7.5s", duration: "16s", drift: "38px" },
      { id: 14, left: "94%", size: 16, delay: "0.5s", duration: "10s", drift: "-20px" },
      { id: 15, left: "9%", size: 24, delay: "8.5s", duration: "15s", drift: "25px" },
      { id: 16, left: "22%", size: 38, delay: "11s", duration: "19s", drift: "-35px" },
      { id: 17, left: "36%", size: 14, delay: "6.5s", duration: "11s", drift: "18px" },
      { id: 18, left: "50%", size: 28, delay: "2.8s", duration: "14s", drift: "-26px" },
      { id: 19, left: "64%", size: 20, delay: "12s", duration: "13s", drift: "30px" },
      { id: 20, left: "78%", size: 34, delay: "4.8s", duration: "17s", drift: "-32px" },
      { id: 21, left: "91%", size: 18, delay: "9.2s", duration: "12s", drift: "20px" },
      { id: 22, left: "28%", size: 22, delay: "13.5s", duration: "15s", drift: "-24px" },
    ],
    []
  );

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={{ contain: "paint" }}
    >
      {/* --- 1. BASE LUXURY LABORATORY TINT --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#f1f7fb]/70 to-[#eef6fa]/90 pointer-events-none" />

      {/* --- 2. VIBRANT MOVING FLUID AURORA ORBS (CLEARLY VISIBLE & GPU-ACCELERATED) --- */}
      {/* Orb 1: Upper Right Vibrant Sky Cyan */}
      <div
        className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full blur-[90px] opacity-75 animate-fluid-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.25) 45%, rgba(224, 242, 254, 0.1) 70%, transparent 80%)",
        }}
      />

      {/* Orb 2: Left Center Warm Pearl Champagne / Gold Radiance */}
      <div
        className="absolute top-[25%] left-[-10%] w-[620px] h-[620px] rounded-full blur-[100px] opacity-65 animate-fluid-2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.20) 45%, rgba(254, 243, 199, 0.1) 70%, transparent 80%)",
        }}
      />

      {/* Orb 3: Right Lower Botanical Marine Teal */}
      <div
        className="absolute top-[50%] right-[-8%] w-[650px] h-[650px] rounded-full blur-[95px] opacity-70 animate-fluid-3 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.40) 0%, rgba(45, 212, 191, 0.22) 45%, rgba(204, 251, 241, 0.1) 70%, transparent 80%)",
        }}
      />

      {/* Orb 4: Bottom Center Royal Deep Navy / Indigo Aurora */}
      <div
        className="absolute -bottom-36 left-[20%] w-[750px] h-[750px] rounded-full blur-[110px] opacity-60 animate-fluid-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(22, 70, 102, 0.38) 0%, rgba(14, 116, 144, 0.22) 50%, transparent 75%)",
        }}
      />

      {/* Interactive Cursor Light Halo */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[80px] opacity-40 pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.40) 0%, rgba(20, 184, 166, 0.20) 50%, transparent 70%)",
        }}
      />

      {/* --- 3. LABORATORY CLINICAL DOT-GRID MATRIX --- */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#164666 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* --- 4. ANIMATED FLOATING COSMETIC SERUM GLASS BUBBLES --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full animate-bubble-rise pointer-events-none"
            style={
              {
                left: b.left,
                bottom: 0,
                width: `${b.size}px`,
                height: `${b.size}px`,
                animationDelay: b.delay,
                animationDuration: b.duration,
                "--drift-x": b.drift,
                background:
                  "radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.70) 30%, rgba(56, 189, 248, 0.35) 65%, rgba(14, 116, 144, 0.15) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.85)",
                boxShadow:
                  "inset 0 1px 2px rgba(255, 255, 255, 0.9), 0 4px 12px rgba(14, 165, 233, 0.18)",
                backdropFilter: "blur(2px)",
              } as React.CSSProperties
            }
          >
            {/* Specular White Highlight Dot */}
            <div
              className="absolute rounded-full bg-white"
              style={{
                top: "22%",
                left: "25%",
                width: `${Math.max(3, b.size * 0.22)}px`,
                height: `${Math.max(3, b.size * 0.22)}px`,
                opacity: 0.9,
              }}
            />
          </div>
        ))}
      </div>

      {/* --- 5. SUBTLE SHIMMER ACCENT LIGHT BEAMS --- */}
      <div className="absolute top-[32%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0284c7]/20 to-transparent animate-beam-shimmer pointer-events-none" />
      <div
        className="absolute top-[68%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0d9488]/20 to-transparent animate-beam-shimmer pointer-events-none"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

export default CosmeticAmbientBackground;

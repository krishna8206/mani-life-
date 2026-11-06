"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function ServicesHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  // 3D Entrance flip & specular sheen states
  const [isEntered, setIsEntered] = useState(false);
  const [autoSheen, setAutoSheen] = useState(false);

  // Trigger 3D perspective entrance flip on mount / route arrival
  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setIsEntered(true);
    }, 40);

    const sheenTimer = setTimeout(() => {
      setAutoSheen(true);
    }, 450);

    const resetSheenTimer = setTimeout(() => {
      setAutoSheen(false);
    }, 2000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(sheenTimer);
      clearTimeout(resetSheenTimer);
    };
  }, []);

  // Optical vertical scroll parallax on formulation photography
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
              const centerOffset = rect.top + rect.height / 2 - windowHeight / 2;
              const offset = Math.max(-10, Math.min(10, centerOffset * -0.03));
              setParallaxY(offset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Controlled, subtle luxury perspective tilt tracking cursor movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotate({
      x: -(y * 4.5),
      y: x * 5.5,
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
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] sm:max-w-[440px] lg:max-w-[460px] mx-auto select-none cursor-pointer flex items-center justify-center py-2"
      style={{
        perspective: "1200px",
      }}
    >
      {/* 1. Multi-layered Ambient Atmospheric Cyan Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[360px] sm:w-[400px] h-[460px] sm:h-[500px] rounded-[140px] bg-gradient-to-tr from-sky-300/40 via-teal-200/30 to-sky-100/20 blur-3xl transition-all duration-1000 ease-out ${
            isEntered ? "opacity-90 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      {/* 2. Outer 3D Perspective Tilt Container */}
      <div
        className="relative w-full aspect-[4/5] will-change-transform"
        style={{
          transform: !isEntered
            ? "perspective(1200px) rotateY(-24deg) rotateX(6deg) scale(0.90) translateY(24px)"
            : "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateY(0px)",
          opacity: isEntered ? 1 : 0,
          transition: !isEntered
            ? "none"
            : "transform 850ms cubic-bezier(0.16, 1, 0.3, 1), opacity 850ms ease-out",
        }}
      >
        {/* Interactive Tilt Child Frame */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered
              ? `rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-3px)`
              : "rotateX(0deg) rotateY(0deg) translateY(0px)",
            transition: isHovered ? "transform 300ms ease-out" : "transform 500ms ease-out",
          }}
        >
          {/* Main Architectural Classical Roman Dome Arch */}
          <div
            className="relative w-full h-full rounded-t-[140px] sm:rounded-t-[175px] lg:rounded-t-[190px] rounded-b-[28px] sm:rounded-b-[36px] overflow-hidden border-[3px] border-white/95 shadow-[0_22px_55px_rgba(18,65,95,0.18)] ring-1 ring-sky-300/60 bg-gradient-to-b from-sky-50 to-white transition-all duration-500 group"
            style={{
              transform: "translateZ(14px)",
              transformStyle: "preserve-3d",
              isolation: "isolate",
            }}
          >
            {/* High-Resolution Luxury Cosmetic Serums & Formulations Visual */}
            <div
              className="relative w-full h-full scale-[1.05] transition-transform duration-100 ease-out will-change-transform"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <Image
                src="/images/hero-serums.jpg"
                alt="Mani Lifestyle - Bespoke Cosmetics Formulations & Private Label Manufacturing"
                fill
                priority
                className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-106"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Clean soft ambient highlight across top glass rim */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/30 via-transparent to-transparent pointer-events-none" />

            {/* Specular Diagonal Sheen Sweep on Hover & Automatic Entrance Flash */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-1000 ease-out pointer-events-none ${
                isHovered || autoSheen
                  ? "translate-x-[220%] opacity-100"
                  : "-translate-x-[160%] opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


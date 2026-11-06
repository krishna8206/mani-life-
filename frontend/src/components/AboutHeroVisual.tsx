"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function AboutHeroVisual() {
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

  // Optical vertical scroll parallax on cleanroom laboratory photograph
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
      className="relative w-full max-w-[320px] sm:max-w-[345px] lg:max-w-[365px] mx-auto select-none cursor-pointer flex items-center justify-center py-2"
      style={{
        perspective: "1200px",
      }}
    >
      {/* 1. Soft Ambient Radial Luminescence */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[300px] sm:w-[330px] h-[400px] sm:h-[440px] rounded-[130px] bg-gradient-to-tr from-sky-200/50 via-teal-100/35 to-blue-100/20 blur-2xl transition-all duration-1000 ease-out ${
            isEntered ? "opacity-80 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      {/* 2. Outer Concentric Architectural Glass Chassis (With 3D Flip Entrance) */}
      <div
        className="relative w-full p-2.5 sm:p-3 rounded-[120px] sm:rounded-[130px] border border-sky-200/80 bg-white/35 backdrop-blur-xs shadow-lg shadow-sky-950/5 will-change-transform"
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
        {/* Middle Hairline Precision Frame */}
        <div className="relative w-full p-1.5 sm:p-2 rounded-[110px] sm:rounded-[118px] border border-sky-300/60 bg-gradient-to-b from-white/60 via-white/20 to-transparent">
          {/* 3D Perspective Tilt Container (Responds to cursor once entered) */}
          <div
            className="relative w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: isHovered
                ? `rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-3px)`
                : "rotateX(0deg) rotateY(0deg) translateY(0px)",
              transition: isHovered ? "transform 300ms ease-out" : "transform 500ms ease-out",
            }}
          >
            {/* --- ARCHITECTURAL STADIUM CAPSULE MONOLITH (Straight Vertical Parallel Walls + Symmetrical Smooth Curved Caps) --- */}
            <div
              className="relative w-full h-[430px] sm:h-[455px] lg:h-[475px] rounded-[100px] sm:rounded-[110px] overflow-hidden bg-slate-900 border-2 border-white/95 shadow-2xl shadow-sky-950/20 transition-all duration-500 group"
              style={{
                transform: "translateZ(14px)",
                transformStyle: "preserve-3d",
                isolation: "isolate",
              }}
            >
              {/* Authentic Sterile Cleanroom Laboratory Photograph */}
              <div
                className="relative w-full h-full scale-[1.05] transition-transform duration-100 ease-out will-change-transform"
                style={{ transform: `translateY(${parallaxY}px)` }}
              >
                <Image
                  src="/images/cleanroom-lab.jpg"
                  alt="Mani Lifestyle Sterile Cleanroom Laboratory and Compounding Campus"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 320px, 380px"
                  className="object-cover object-[57%_42%] group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Luxury Atelier Inset Gradient Lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15 pointer-events-none" />

              {/* Specular Diagonal Light Sheen Sweep on Hover & Automatic Entrance Flash */}
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
    </div>
  );
}

export { AboutHeroVisual };

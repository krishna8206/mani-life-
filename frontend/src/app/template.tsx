"use client";

import React, { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Reset window scroll position to the top on every page change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Trigger smooth route entrance transition
    const timer = setTimeout(() => {
      setMounted(true);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* 1. Scientific Ambient Light Sweep on Route Arrival */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent z-[100] pointer-events-none transition-opacity duration-700 ease-out ${
          mounted ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Global Page Cascade Wrapper */}
      <div
        className="w-full will-change-transform"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(12px)",
          transition: "opacity 600ms ease-out, transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}


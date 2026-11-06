"use client";

import React, { useEffect, useState } from "react";

export default function CleanroomScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[2.5px] z-50 pointer-events-none bg-slate-200/40">
      <div
        className="relative h-full bg-gradient-to-r from-[#164666] via-teal-400 to-[#1b628b] shadow-[0_0_12px_rgba(27,98,139,0.7)] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Leading Glowing Liquid Bead */}
        {progress > 1 && progress < 99 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8] animate-pulse" />
        )}
      </div>
    </div>
  );
}

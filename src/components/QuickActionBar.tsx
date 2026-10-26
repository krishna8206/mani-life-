"use client";

import React from "react";

export default function QuickActionBar() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* WhatsApp Direct - Mani Lifestyle Technical Sales */}
      <a
        href="https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20cosmetic%20manufacturing%20and%20private%20label%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        aria-label="Chat with Mani Lifestyle on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Clean WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 fill-white transition-transform group-hover:scale-110 duration-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.57C14.64 13.48 14.47 13.44 14.31 13.69C14.14 13.94 13.65 14.51 13.5 14.68C13.35 14.85 13.2 14.87 12.95 14.75C12.7 14.62 11.89 14.36 10.94 13.51C10.19 12.84 9.69 12.02 9.54 11.77C9.39 11.52 9.52 11.38 9.65 11.26C9.76 11.15 9.9 10.97 10.02 10.82C10.15 10.67 10.19 10.57 10.27 10.4C10.35 10.24 10.31 10.1 10.25 9.97C10.19 9.85 9.69 8.63 9.48 8.13C9.28 7.64 9.08 7.71 8.93 7.7C8.79 7.7 8.62 7.7 8.45 7.7C8.29 7.7 8.02 7.76 7.79 8.01C7.57 8.26 6.94 8.85 6.94 10.05C6.94 11.25 7.82 12.41 7.94 12.57C8.06 12.74 9.66 15.21 12.13 16.28C14.6 17.34 14.6 16.99 15.04 16.95C15.49 16.91 16.48 16.36 16.68 15.79C16.89 15.22 16.89 14.73 16.83 14.63C16.76 14.53 16.61 14.47 16.56 14.37Z" />
        </svg>

        {/* Pulse aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 pointer-events-none" />
      </a>
    </div>
  );
}

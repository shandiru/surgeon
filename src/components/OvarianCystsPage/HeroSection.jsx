'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#FEE6EA]"> {/* removed border-b */}
      {/* Subtle grid effect mask */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-[#FF4B8B]/10 text-[#FF4B8B] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FF4B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Women's Health Guide
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF4B8B] mb-6">
          Understanding Ovarian Cysts
        </h1>

        {/* Subtext */}
        <p className="text-xl text-[#BB125B] max-w-2xl mx-auto mb-8 leading-relaxed">
          Your comprehensive guide to symptoms, types, and treatment options
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 px-6 h-10 rounded-md font-medium text-sm text-white bg-[#FF4B8B] hover:bg-[#e93a7d] transition-all shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 2v2" />
            <path d="M5 2v2" />
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
            <path d="M8 15a6 6 0 0 0 12 0v-3" />
            <circle cx="20" cy="10" r="2" />
          </svg>
          Start Learning
        </button>
      </div>
    </div>
  );
}

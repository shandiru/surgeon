'use client';

import React from 'react';

export default function OvarianCystSupportCard() {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] py-6 bg-gradient-to-r from-[#FEE6EA] to-[#FDE8F3] shadow-lg text-[#BB125B]">
      <div className="px-8 text-center">
        {/* Heart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF4B8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>

        {/* Heading */}
        <h3 className="text-2xl font-bold mb-4 text-[#FF4B8B]">Remember</h3>

        {/* Paragraphs */}
        <div className="space-y-3 max-w-2xl mx-auto text-base">
          <p className="leading-relaxed">Ovarian cysts are common and usually harmless</p>
          <p className="leading-relaxed">
            Early assessment helps prevent complications and protect fertility
          </p>
          <p className="leading-relaxed font-medium">
            We're here to support you every step of the way
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#FF4B8B] hover:bg-[#e43d7a] rounded-md h-10 px-6 mt-6 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Book an Appointment
        </button>

        {/* Footer Note */}
        <p className="text-sm text-[#BB125B] mt-3">
          If you have symptoms of ovarian cysts, book an appointment — you don't have to worry alone.
        </p>
      </div>
    </div>
  );
}

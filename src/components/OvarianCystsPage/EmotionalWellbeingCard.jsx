"use client";

import React from "react";

export default function EmotionalWellbeingCard() {
  return (
    <div className="text-black flex flex-col gap-6 rounded-xl bg-light-pink-1 py-6 px-5 sm:px-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
      {/* Card Header */}
      <div className="flex items-center gap-3 font-semibold text-primary-pink text-lg">
        {/* Brain Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF4B8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        </svg>
        Emotional Wellbeing
      </div>

      {/* Card Content */}
      <div className="space-y-5">
        <p className="leading-relaxed text-base">
          Persistent pain, bloating or fertility concerns can affect mood, confidence and
          relationships.
        </p>

        {/* Support Message */}
        <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
          {/* Heart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF4B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mt-0.5 flex-shrink-0"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <div>
            <p className="font-medium text-black">
              It's okay to ask for emotional support or counselling
            </p>
            <p className="text-sm text-black">You don't have to cope with it alone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

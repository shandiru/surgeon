'use client';

import React from 'react';

export default function EmotionalWellbeingCard() {
  return (
    <div className="text-[#BB125B] flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] bg-[#FEE6EA80] py-6 shadow-lg">
      {/* Card Header */}
      <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
        <div className="leading-none font-semibold flex items-center gap-3 text-[#FF4B8B]">
          {/* Brain Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF4B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
          Emotional Wellbeing
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 space-y-4">
        <p className="leading-relaxed">
          Persistent pain, bloating or fertility concerns can affect mood, confidence and relationships.
        </p>

        {/* Support Message */}
        <div className="flex items-start gap-3">
          {/* Heart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
            <p className="font-medium">It's okay to ask for emotional support or counselling</p>
            <p className="text-sm text-[#7A3E59]">You don't have to cope with it alone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

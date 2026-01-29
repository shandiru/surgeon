"use client";

import React from "react";

export default function CystAlert() {
  return (
    <div
      role="alert"
      className="w-full rounded-xl px-6 py-5 bg-[#FFF7F9] text-[#BB125B] text-base leading-relaxed shadow-md hover:shadow-lg transition-all"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-full bg-primary-pink/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF4B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <strong className="text-primary-pink font-semibold text-lg">
          See your doctor if you have:
        </strong>
      </div>

      {/* List */}
      <ul className="list-disc ml-8 space-y-2 text-[#BB125B]">
        <li>Persistent bloating or pelvic pressure</li>
        <li>Needing to urinate more often</li>
        <li>Pelvic pain or unusual vaginal bleeding</li>
      </ul>

      {/* Footer note */}
      <p className="mt-4 text-sm text-[#804659] italic">
        These can be signs of a cyst or other underlying conditions.
      </p>
    </div>
  );
}

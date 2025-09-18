'use client';

import React from 'react';

export default function CystAlert() {
  return (
    <div
      role="alert"
      className="w-full rounded-lg border px-6 py-4 bg-[#FEE6EA] border-[#FF4B8B33] text-[#BB125B] text-base leading-relaxed"
    >
      <div className="flex items-start gap-3 mb-3">
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
          className="mt-1 shrink-0"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <strong className="text-[#FF4B8B] font-semibold">
          See your doctor if you have:
        </strong>
      </div>

      <ul className="list-disc ml-8 space-y-1 text-[#BB125B]">
        <li>Persistent bloating or pelvic pressure</li>
        <li>Needing to urinate more often</li>
        <li>Pelvic pain or unusual vaginal bleeding</li>
      </ul>

      <p className="mt-3 text-sm text-[#BB125B]">
        These can be signs of a cyst or other underlying conditions.
      </p>
    </div>
  );
}

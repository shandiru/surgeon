'use client';

import React from 'react';

export default function WhatAreOvarianCysts() {
  return (
    <div className="bg-[#FEE6EA] border-b border-[#FF4B8B]/20 rounded-xl shadow-lg mb-12">
      <div className="bg-[#FEE6EA] border-b border-[#FF4B8B]/10 rounded-t-xl px-6 py-4">
        <div className="text-[#FF4B8B] font-semibold text-2xl flex items-center gap-3">
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
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          What Are Ovarian Cysts?
        </div>
      </div>

      <div className="p-8 space-y-6 text-[#BB125B]">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Ovarian cysts are fluid-filled sacs that form in or on the ovaries. They are very common and usually form during ovulation.
            </p>
            <div className="space-y-3">
              {[
                'Most are harmless, painless, and go away on their own',
                'Many women get at least one cyst every month without knowing',
                'About 8% of premenopausal women develop larger cysts that may need treatment'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
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
                    className="mt-0.5 flex-shrink-0 w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Note Box */}
          <div className="bg-white rounded-lg p-6 border border-[#FF4B8B]/10">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-[#FF4B8B]">
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
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Important Note
            </h4>
            <p className="text-sm leading-relaxed text-[#BB125B]">
              Ovarian cysts are less common after menopause — but are more likely to be cancerous if they occur. Regular check-ups are important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

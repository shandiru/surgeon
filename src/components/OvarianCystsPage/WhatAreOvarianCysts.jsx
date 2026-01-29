"use client";

import React from "react";

export default function WhatAreOvarianCysts() {
  return (
    <div className="bg-[#FEE6EA] rounded-2xl shadow-xl mb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-[#FEE6EA] border-b border-primary-pink rounded-t-2xl px-8 py-6">
        <div className="text-primary-pink font-bold text-3xl flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF4B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          What Are Ovarian Cysts?
        </div>
      </div>

      {/* Content */}
      <div className="p-10 space-y-8 text-primary-pink">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-5">
            <p className="text-lg leading-relaxed">
              Ovarian cysts are fluid-filled sacs that form in or on the ovaries. They are very
              common and usually form during ovulation.
            </p>
            <div className="space-y-4">
              {[
                "Most are harmless, painless, and go away on their own",
                "Many women get at least one cyst every month without knowing",
                "About 8% of premenopausal women develop larger cysts that may need treatment",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
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
                    className="mt-0.5 flex-shrink-0 w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Note Box */}
          <div className="bg-white rounded-xl p-8 border border-primary-pink/10 shadow-md">
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-primary-pink text-lg">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Important Note
            </h4>
            <p className="text-base leading-relaxed text-primary-pink">
              Ovarian cysts are less common after menopause — but are more likely to be cancerous if
              they occur. Regular check-ups are important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';

export default function RiskFertilityCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Risk Factors Card */}
      <div className="flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] bg-[#FEE6EA80] text-[#BB125B] py-6 shadow-lg">
        {/* Header */}
        <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-3 text-[#FF4B8B]">
            {/* Shield Icon */}
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
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            Risk Factors
          </div>
        </div>

        {/* Content */}
        <div className="px-6 space-y-3">
          {[
            'Hormonal treatments that trigger ovulation',
            'Endometriosis',
            'Polycystic ovary syndrome (PCOS)',
            'Family history of ovarian cysts',
            'Being of reproductive age',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fertility & Pregnancy Card */}
      <div className="flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] bg-[#FEE6EA80] text-[#BB125B] py-6 shadow-lg">
        {/* Header */}
        <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-3 text-[#FF4B8B]">
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
              className="w-5 h-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Fertility & Pregnancy
          </div>
        </div>

        {/* Content */}
        <div className="px-6 space-y-3">
          {/* Point 1 */}
          <div className="flex items-start gap-3">
            {/* Circle Check Icon */}
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
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="text-sm">Most ovarian cysts do not affect fertility</span>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-3">
            {/* Info Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#BB125B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span className="text-sm">
              Some conditions that cause cysts (like PCOS or endometriosis) can affect fertility
            </span>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-3">
            {/* Calendar Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#BB125B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <span className="text-sm">
              Large cysts during pregnancy may need monitoring or removal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

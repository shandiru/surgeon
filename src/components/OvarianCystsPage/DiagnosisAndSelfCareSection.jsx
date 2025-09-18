'use client';

import React from 'react';

export default function DiagnosisAndSelfCareSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* How Cysts Are Diagnosed */}
      <div className="bg-white text-[#BB125B] flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] py-6 shadow-lg">
        <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-3 text-[#FF4B8B]">
            {/* Stethoscope Icon */}
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
              <path d="M11 2v2"></path>
              <path d="M5 2v2"></path>
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
              <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
            How Cysts Are Diagnosed
          </div>
        </div>
        <div className="px-6 space-y-3">
          {[
            'Pelvic exam',
            'Ultrasound scan',
            'Blood tests (to check hormones or rule out cancer)',
            'MRI (if needed for detailed images)',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
          <div className="mt-4 p-3 rounded-lg bg-[#FEE6EA]">
            <p className="text-sm font-medium">
              Most cysts are monitored over time to see if they shrink on their own.
            </p>
          </div>
        </div>
      </div>

      {/* Self-Care Tips */}
      <div className="bg-white text-[#BB125B] flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] py-6 shadow-lg">
        <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-3 text-[#FF4B8B]">
            {/* Activity Icon */}
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
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            Self-Care Tips
          </div>
        </div>
        <div className="px-6 space-y-3">
          {[
            'Track your symptoms (pain, bloating, period changes)',
            'Manage stress and rest if in discomfort',
            'See your doctor early if anything feels unusual',
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
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
              <span className="text-sm">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

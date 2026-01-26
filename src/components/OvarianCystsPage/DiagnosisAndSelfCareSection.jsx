"use client";

import React from "react";

export default function DiagnosisAndSelfCareSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* How Cysts Are Diagnosed */}
      <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-5 sm:px-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
        {/* Header */}
        <div className="flex items-center gap-3 font-semibold text-primary-pink text-lg">
          {/* Stethoscope Icon */}
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
            className="w-5 h-5"
          >
            <path d="M11 2v2" />
            <path d="M5 2v2" />
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
            <path d="M8 15a6 6 0 0 0 12 0v-3" />
            <circle cx="20" cy="10" r="2" />
          </svg>
          How Cysts Are Diagnosed
        </div>

        {/* Content */}
        <div className="space-y-3">
          {[
            "Pelvic exam",
            "Ultrasound scan",
            "Blood tests (to check hormones or rule out cancer)",
            "MRI (if needed for detailed images)",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-pink rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}

          {/* Note Box */}
          <div className="mt-4 p-4 rounded-lg bg-light-pink-1 shadow-sm">
            <p className="text-sm font-medium text-black">
              Most cysts are monitored over time to see if they shrink on their own.
            </p>
          </div>
        </div>
      </div>

      {/* Self-Care Tips */}
      <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-5 sm:px-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
        {/* Header */}
        <div className="flex items-center gap-3 font-semibold text-primary-pink text-lg">
          {/* Activity Icon */}
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
            className="w-5 h-5"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
          Self-Care Tips
        </div>

        {/* Content */}
        <div className="space-y-3">
          {[
            "Track your symptoms (pain, bloating, period changes)",
            "Manage stress and rest if in discomfort",
            "See your doctor early if anything feels unusual",
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Circle Check Icon */}
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

"use client";
import React from "react";

const OvarianCystsGuideCard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* ===================== GRID WRAPPER ===================== */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ===================== CARD 1 ===================== */}
          <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-5 sm:px-6 border border-[#FF4B8B]/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            {/* Header */}
            <div className="flex items-center gap-3 font-semibold text-[#FF4B8B] text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="#FF4B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M11 2v2"></path>
                <path d="M5 2v2"></path>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                <circle cx="20" cy="10" r="2"></circle>
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
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}

              {/* Highlight Box */}
              <div className="mt-4 p-4 rounded-lg bg-[#FEE6EA] shadow-sm">
                <p className="text-sm font-medium text-black">
                  Most cysts are monitored over time to see if they shrink on their own.
                </p>
              </div>
            </div>
          </div>

          {/* ===================== CARD 2 ===================== */}
          <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-5 sm:px-6 border border-[#FF4B8B]/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            {/* Header */}
            <div className="flex items-center gap-3 font-semibold text-[#FF4B8B] text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="#FF4B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
              Self-Care Tips
            </div>

            {/* Content */}
            <div className="space-y-3">
              {[
                "Track your symptoms (pain, bloating, period changes)",
                "Manage stress and rest if in discomfort",
                "See your doctor early if anything feels unusual",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#FF4B8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================== NEXT BUTTON ===================== */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm 
                       font-medium transition-all"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCystsGuideCard7;

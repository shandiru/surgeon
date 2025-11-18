'use client';
import React from "react";

const OvarianCystsGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">

      {/* ---------------------------------------------------
          FULL WRAPPER WITH BORDER (ALL CONTENT INCLUDED)
      --------------------------------------------------- */}
      <div className="max-w-4xl mx-auto px-6 py-10 rounded-2xl border border-[#FF4B8B]/20 shadow-md bg-[#FFF7F9]">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#FF4B8B] flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="#FF4B8B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            See Your Doctor If You Have
          </h2>
        </div>

        {/* MAIN CONTENT - ALERT BOX */}
        <div className="rounded-xl p-6 bg-white border border-[#FF4B8B]/10 shadow-sm">

          {/* Icon + Title */}
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-full bg-[#FF4B8B]/10 flex items-center justify-center">
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
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>

            <strong className="text-[#FF4B8B] font-semibold text-lg">
              See your doctor if you have:
            </strong>
          </div>

          {/* List */}
          <ul className="list-disc ml-8 space-y-2 text-[#BB125B]">
            <li>Persistent bloating or pelvic pressure</li>
            <li>Needing to urinate more often</li>
            <li>Pelvic pain or unusual vaginal bleeding</li>
          </ul>

          {/* Bottom note */}
          <p className="mt-4 text-sm text-[#804659] italic">
            These can be signs of a cyst or other underlying conditions.
          </p>
        </div>

        {/* BUTTON SECTION (Inside the same border container) */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md 
                       text-sm font-medium transition-all h-10 px-4 
                       text-white w-[90%] md:w-[60%] lg:w-[40%] shadow"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCystsGuideCard2;

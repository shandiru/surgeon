"use client";
import React from "react";

const OvarianCystsGuideCard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* MAIN WRAPPER */}
        <div className="flex flex-col gap-6 rounded-xl py-6 px-5 sm:px-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-light-pink-1 text-black border border-[#FF4B8B]/10">
          {/* HEADER */}
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Fertility & Pregnancy
          </div>

          {/* CONTENT */}
          <div className="space-y-4">
            {/* 1 */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#FF4B8B] mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm">Most ovarian cysts do not affect fertility</span>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#FF4B8B] mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <span className="text-sm">
                Some conditions (like PCOS or endometriosis) can affect fertility
              </span>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#FF4B8B] mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span className="text-sm">
                Large cysts during pregnancy may need monitoring or removal
              </span>
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] 
                       rounded-md text-sm font-medium 
                       transition-all h-10 px-4"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCystsGuideCard6;

"use client";
import React from "react";

const OvarianCystsGuideCard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* FULL WRAPPER BOX */}
        <div className="rounded-2xl p-8 border border-primary-pink/10 shadow-lg transition-all duration-300 bg-light-pink-1">
          {/* HEADER */}
          <div className="flex items-center gap-3 font-semibold text-primary-pink text-lg mb-6">
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
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            Risk Factors
          </div>

          {/* CONTENT */}
          <div className="space-y-3 text-black">
            {[
              "Hormonal treatments that trigger ovulation",
              "Endometriosis",
              "Polycystic ovary syndrome (PCOS)",
              "Family history of ovarian cysts",
              "Being of reproductive age",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 bg-[#FF4B8B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvarianCystsGuideCard5;

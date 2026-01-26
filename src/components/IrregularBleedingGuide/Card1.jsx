"use client";
import React from "react";

const IrregularBleedingGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        {/* Card Container */}
        <div className="space-y-6 px-4 md:px-6">
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-[#ff97b3]/30 py-6 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4 border-b border-[#ff97b3]/20">
              <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-primary-pink"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                What Is Irregular Bleeding?
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4 text-[#444]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Typical Period */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary-pink">A typical period:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-primary-pink"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      Occurs every 28 days
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-primary-pink"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      Lasts 5–7 days
                    </li>
                  </ul>
                </div>

                {/* Irregular Bleeding */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary-pink">Irregular bleeding includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-primary-pink"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      Periods that come more or less often than usual
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-primary-pink"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      Spotting between periods
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={() => {
                  setShowCard(2);
                  setActiveButton(1);
                }}
                className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
              >
                Continue to Next Section
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IrregularBleedingGuideCard1;

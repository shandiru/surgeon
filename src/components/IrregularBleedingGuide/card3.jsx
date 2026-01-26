"use client";
import React from "react";

const IrregularBleedingGuidecard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        {/* CARD WRAPPER */}
        <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300">
          {/* HEADER */}
          <div className="grid auto-rows-min items-start gap-2 border-b border-[#ff97b3]/30 pb-4">
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 2v2" />
                <path d="M5 2v2" />
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                <path d="M8 15a6 6 0 0 0 12 0v-3" />
                <circle cx="20" cy="10" r="2" />
              </svg>
              When to Seek Medical Advice
            </div>

            <p className="text-sm sm:text-base text-[#666]">
              Early assessment can rule out serious problems and help you get the right care.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-4">
            {/* ALERT ITEMS */}
            {[
              "Bleeding between periods or after sex",
              "Periods that are much heavier or longer than usual",
              "Sudden changes to your cycle",
              "Any bleeding after menopause",
            ].map((text, i) => (
              <div
                key={i}
                role="alert"
                className="flex items-start gap-3 p-4 rounded-lg bg-[#fff7f9] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary-pink mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>

                <p className="text-sm sm:text-base text-[#444] font-medium">{text}</p>
              </div>
            ))}

            {/* IMMEDIATE HELP BOX */}
            <div className="mt-2 p-4 bg-[#fff7f9] rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-pink flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h4 className="font-semibold text-primary-pink text-sm sm:text-base">
                  Need immediate help?
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#555]">
                Contact your healthcare provider or call your local emergency number if you
                experience severe bleeding or pain.
              </p>
            </div>
          </div>

          {/* CONTINUE BUTTON */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IrregularBleedingGuidecard3;

"use client";
import React from "react";

const IrregularBleedingGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <section className="my-12 px-4">
      <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
        {/* MAIN CARD */}
        <div className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#ff97b3]/30">
          {/* HEADER */}
          <div className="grid auto-rows-min items-start gap-2 border-b border-[#ff97b3]/30 pb-4">
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              {/* ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-test-tube w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
                <path d="M8.5 2h7"></path>
                <path d="M14.5 16h-5"></path>
              </svg>
              What to Expect at Your Appointment
            </div>

            <p className="text-sm sm:text-base text-[#666]">
              These tests help find the cause so you can get the most suitable treatment.
            </p>
          </div>

          {/* DROPDOWNS */}
          <div className="space-y-3">
            {/* 1 — Pelvic Examination */}
            <details
              className="group bg-[#fff7f9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              open
            >
              <summary className="flex justify-between items-center py-4 px-4 cursor-pointer text-sm sm:text-base font-medium text-primary-pink hover:bg-white/60 rounded-lg">
                Pelvic Examination
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-chevron-down w-4 h-4 text-primary-pink transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>

              <div className="px-4 pb-4 text-xs sm:text-sm text-[#555]">
                A physical examination to check for any abnormalities in your reproductive organs.
                This is routine and helps identify possible causes of irregular bleeding.
              </div>
            </details>

            {/* 2 — Ultrasound Scan */}
            <details
              className="group bg-[#fff7f9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              open
            >
              <summary className="flex justify-between items-center py-4 px-4 cursor-pointer text-sm sm:text-base font-medium text-primary-pink hover:bg-white/60 rounded-lg">
                Ultrasound Scan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-chevron-down w-4 h-4 text-primary-pink transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>

              <div className="px-4 pb-4 text-xs sm:text-sm text-[#555]">
                A non-invasive scan that uses sound waves to create internal images. Helps detect
                fibroids, cysts, or structural issues.
              </div>
            </details>

            {/* 3 — Blood Tests */}
            <details
              className="group bg-[#fff7f9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              open
            >
              <summary className="flex justify-between items-center py-4 px-4 cursor-pointer text-sm sm:text-base font-medium text-primary-pink hover:bg-white/60 rounded-lg">
                Blood Tests
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-chevron-down w-4 h-4 text-primary-pink transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>

              <div className="px-4 pb-4 text-xs sm:text-sm text-[#555]">
                Hormone checks, blood count, and other markers that help determine the cause of
                irregular bleeding.
              </div>
            </details>

            {/* 4 — Cervical Smear */}
            <details
              className="group bg-[#fff7f9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              open
            >
              <summary className="flex justify-between items-center py-4 px-4 cursor-pointer text-sm sm:text-base font-medium text-primary-pink hover:bg-white/60 rounded-lg">
                Cervical Smear (if due)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-chevron-down w-4 h-4 text-primary-pink transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>

              <div className="px-4 pb-4 text-xs sm:text-sm text-[#555]">
                A screening test to check for abnormal cells on the cervix. Typically part of
                routine preventive care.
              </div>
            </details>
          </div>

          {/* NEXT BUTTON */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
            >
              Learn About Aftercare
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IrregularBleedingGuidecard5;

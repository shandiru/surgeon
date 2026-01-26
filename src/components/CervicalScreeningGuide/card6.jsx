"use client";
import React, { useState } from "react";

const CervicalScreeningGuidecard6 = ({ setShowCard, setActiveButton }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "Normal Result" },
    { title: "Inadequate Sample" },
    { title: "HPV Positive + Normal Cells" },
    { title: "HPV Positive + Abnormal Cells" }
  ];

  return (
    <div className="space-y-6 pb-14">
      {/* CARD CONTAINER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10
        flex flex-col gap-10 rounded-2xl border p-8 shadow-sm
        animate-in slide-in-from-right-5 duration-300 border-light-pink-2 bg-white"
      >
        {/* HEADER */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-pink">
            After Your Test
          </h2>
          <p className="text-base text-black">Results usually within 1–2 weeks</p>
        </div>

        {/* DROPDOWN / ACCORDION */}
        <div className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <div key={index} className="py-4">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-3
                text-left font-medium text-primary-pink hover:text-black transition"
              >
                <span className="flex items-center gap-3 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  {item.title}
                </span>

                {/* Arrow icon (rotate when open) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-primary-pink transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* CONTENT (only show if open) */}
              {openIndex === index && (
                <div className="mt-3 ml-10 text-black text-sm">
                  <p>More information about: {item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="inline-flex items-center justify-center bg-primary-pink
                hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium
                transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
          >
            Continue to Prevention & Early Detection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalScreeningGuidecard6;

"use client";
import React, { useState } from "react";

const OvarianCystsGuideCard3 = ({ setShowCard, setActiveButton }) => {
  // Accordion State
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="pb-10">
      {/* FULL WRAPPER */}
      <div
        className="max-w-4xl mx-auto px-6 py-10 
                      rounded-2xl border border-primary-pink/20 
                      shadow-md bg-[#FEE6EA] text-primary-pink"
      >
        {/* HEADER */}
        <div className="pb-4 border-b border-primary-pink/30">
          <div className="font-semibold flex items-center gap-3 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-primary-pink"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            Types of Ovarian Cysts
          </div>
        </div>

        {/* ACCORDIONS */}
        <div className="space-y-4 mt-6">
          {/* 1 - Functional Cysts */}
          <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <button
              onClick={() => toggle(0)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-light-pink-1 text-primary-pink px-3 py-1 text-xs font-medium">
                  Most Common
                </span>
                <span className="font-semibold text-black">Functional Cysts (Harmless)</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 text-primary-pink transition-transform duration-300 
                ${openIndex === 0 ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {openIndex === 0 && (
              <div className="px-5 pb-5 text-sm text-[#444] leading-relaxed">
                <div className="mt-3 grid md:grid-cols-2 gap-4">
                  <div className="bg-[#fff7f9] p-4 rounded-lg shadow-sm">
                    <span className="font-bold text-black">Follicle Cysts</span>
                    <p className="text-sm text-[#555] mt-1">
                      Form when a follicle does not release an egg and keeps growing. Usually
                      disappear within 1–3 months.
                    </p>
                  </div>

                  <div className="bg-[#fff7f9] p-4 rounded-lg shadow-sm">
                    <span className="font-bold text-black">Corpus Luteum Cysts</span>
                    <p className="text-sm text-[#555] mt-1">
                      Form when the follicle reseals after releasing an egg and fills with fluid.
                      Usually resolve in a few weeks.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2 - Other Benign Cysts */}
          <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <button
              onClick={() => toggle(1)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-light-pink-1 text-primary-pink px-3 py-1 text-xs font-medium">
                  Benign
                </span>
                <span className="font-semibold text-black">Other Benign Cysts</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 text-primary-pink transition-transform duration-300 
                ${openIndex === 1 ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {openIndex === 1 && (
              <div className="px-5 pb-5 text-sm text-[#444] leading-relaxed">
                <ul className="list-disc pl-5 space-y-2 text-[#555] mt-3">
                  <li>
                    <strong className="text-black">Endometriomas</strong> — caused by endometriosis
                  </li>
                  <li>
                    <strong className="text-black">Dermoid cysts</strong> — formed from cells
                    present from birth
                  </li>
                  <li>
                    <strong className="text-black">Cystadenomas</strong> — fluid-filled and can grow
                    large
                  </li>
                  <li>
                    <strong className="text-black">PCOS cysts</strong> — multiple tiny cysts from
                    hormone imbalance
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* 3 - Malignant Cysts */}
          <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <button
              onClick={() => toggle(2)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-light-pink-1 text-primary-pink px-3 py-1 text-xs font-medium">
                  Rare
                </span>
                <span className="font-semibold text-black">Malignant (Cancerous) Cysts</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 text-primary-pink transition-transform duration-300 
                ${openIndex === 2 ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {openIndex === 2 && (
              <div className="px-5 pb-5 text-sm text-[#444] leading-relaxed">
                <div className="bg-[#FFF0F5] p-4 rounded-lg text-black shadow-sm mt-3">
                  Rare, but more common after menopause. Must be assessed to rule out ovarian
                  cancer.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div className="pt-8 flex justify-center">
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
    </div>
  );
};

export default OvarianCystsGuideCard3;

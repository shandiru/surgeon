"use client";
import React from "react";

const OvarianCystsGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* FULL WRAPPER SECTION */}
        <div className="rounded-2xl p-8 border border-primary-pink shadow-lg transition-all duration-300 bg-white">
          {/* HEADER */}
          <div className="flex items-center gap-3 text-2xl font-semibold text-primary-pink mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="#FF4B8B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Symptoms of Ovarian Cysts
          </div>

          {/* INTRO BOX */}
          <div className="mb-6 p-4 rounded-lg text-center font-medium bg-[#FEE6EA] text-[#BB125B]">
            Most cysts cause no symptoms, but larger or problematic cysts may cause:
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* COMMON SYMPTOMS */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-primary-pink">
                Common Symptoms
              </h4>

              <div className="space-y-3">
                {[
                  "Bloating, swelling or pressure in the lower abdomen",
                  "Pelvic pain (dull or sharp, may come and go)",
                  "Pain during periods or sex",
                  "Pain with nausea/vomiting if the ovary twists",
                  "Sudden severe pain if a cyst ruptures",
                ].map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-primary-pink flex-shrink-0"></div>
                    <span className="text-sm text-black">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LESS COMMON SYMPTOMS */}
            <div>
              <h4 className="font-semibold mb-4 text-lg text-primary-pink">
                Less Common Symptoms
              </h4>

              <div className="space-y-3">
                {[
                  "Lower back or thigh ache",
                  "Trouble fully emptying bladder or bowel",
                  "Breast tenderness",
                  "Unexplained weight gain",
                  "Needing to urinate more often",
                  "Unusual vaginal bleeding",
                ].map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-[#FEB6C5] flex-shrink-0"></div>
                    <span className="text-sm text-black">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WARNING BOX */}
          <div className="mt-8 p-6 rounded-xl bg-primary-pink">
            <p className="text-white font-semibold text-lg">
              If you notice any of these symptoms, it’s important to see your doctor promptly.
            </p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4 pb-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] h-10 rounded-md 
                       text-sm font-medium transition-all px-4"
          >
            Continue to Next Section
          </button>
        </div>

      </div>
    </div>
  );
};

export default OvarianCystsGuideCard4;

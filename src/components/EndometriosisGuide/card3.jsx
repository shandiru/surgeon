'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';

const Vaginalcard3 = ({ setShowCard, setActiveButton }) => {
  const primaryPink = "#FF4B8B";
  const lightPink = "rgb(255,197,211)";
  const softPinkBG = "#FFF5F8";

  const riskFactors = [
    "HPV infection, especially high-risk strains",
    "History of cervical cancer or cervical pre-cancer",
    "Older age (most cases occur after 60)",
    "Smoking",
    "Weakened immune system",
    "Previous pelvic radiation therapy",
    "VAIN (pre-cancerous vaginal changes)",
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border p-8 shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: lightPink,
        }}
      >
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: primaryPink }}
          >
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
              className="lucide lucide-file-text w-6 h-6 text-[#FF4B8B]"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Vaginal Cancer Risk Factors
          </div>
          <p className="text-sm" style={{ color: "#7a2f4f" }}>
            Common factors that may increase the risk.
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-4 mt-4">
          {/* Risk Factors Section */}
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: lightPink,
                }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: primaryPink,
                      color: "#FFFFFF",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: primaryPink }}
                  >
                    {factor}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Info */}
          <div
            className="p-4 rounded-xl border mt-4"
            style={{
              backgroundColor: softPinkBG,
              borderColor: lightPink,
            }}
          >
            <h4
              className="font-semibold mb-2 flex items-center gap-2"
              style={{ color: primaryPink }}
            >
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Good to Know
            </h4>
            <p className="text-sm" style={{ color: "#7a2f4f" }}>
              These factors can increase the risk of vaginal cancer, but having
              one or more does <strong>not guarantee</strong> you will get it.
              Regular screenings and HPV vaccination help reduce risk.
            </p>
          </div>

          {/* Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Learn About Screening
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaginalcard3;

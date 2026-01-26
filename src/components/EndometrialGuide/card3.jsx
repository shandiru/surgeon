"use client";
import React from "react";
import { Biohazard, CloudFog, Sparkles, ShieldOff, Heart } from "lucide-react";

const EndometrialCard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border border-[#FF4B8B]/10 p-8 shadow-sm animate-in slide-in-from-right-5 duration-300 bg-white">
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B]">
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
              className="w-6 h-6 text-[#FF4B8B]"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Key Risk Factors
          </div>
          <p className="text-sm mt-1 text-black">
            These factors increase the likelihood of developing endometrial cancer.
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-4 mt-4">
          {/* Risk Factors Section */}
          <div className="space-y-4">
            {[
              {
                step: "Postmenopausal Age",
                icon: <CloudFog className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Endometrial cancer is more common after menopause.",
              },
              {
                step: "Excess Oestrogen Exposure",
                icon: <Sparkles className="w-5 h-5 text-[#FF4B8B]" />,
                description: "High levels of oestrogen without progesterone increase risk.",
              },
              {
                step: "Obesity",
                icon: <Heart className="w-5 h-5 text-[#FF4B8B]" />,
                description: "One of the strongest risk factors for endometrial cancer.",
              },
              {
                step: "Polycystic Ovary Syndrome (PCOS)",
                icon: <Biohazard className="w-5 h-5 text-[#FF4B8B]" />,
                description: "PCOS can lead to hormonal imbalances that increase risk.",
              },
              {
                step: "Early Menarche or Late Menopause",
                icon: <CloudFog className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Longer lifetime exposure to estrogen raises risk.",
              },
              {
                step: "Never Having Been Pregnant",
                icon: <ShieldOff className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Pregnancy provides protective hormonal effects.",
              },
              {
                step: "Hormone Replacement Therapy (Oestrogen-Only)",
                icon: <Sparkles className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Using oestrogen alone without progesterone increases risk.",
              },
              {
                step: "Tamoxifen Use",
                icon: <Biohazard className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Tamoxifen, used for breast cancer, can slightly raise risk.",
              },
              {
                step: "Family History (e.g., Lynch Syndrome)",
                icon: <ShieldOff className="w-5 h-5 text-[#FF4B8B]" />,
                description: "Genetic predisposition increases lifetime risk.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border border-[#FF4B8B]/10 transition-all duration-300 hover:shadow-lg active:shadow-lg bg-white"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-[#FF4B8B] text-white">
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-[#FF4B8B]">
                    {item.icon}
                    {item.step}
                  </h4>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Protective Factors */}
          <div className="p-4 rounded-xl border border-[#FF4B8B]/10 mt-4 bg-[#FF4B8B]/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-[#FF4B8B]">
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Protective Factors
            </h4>
            <p className="text-sm text-black">
              Pregnancy, use of combined hormonal contraceptives, and maintaining a healthy weight
              can lower the risk of endometrial cancer.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndometrialCard3;

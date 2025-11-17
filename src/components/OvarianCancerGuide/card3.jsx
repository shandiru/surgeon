'use client';
import React from 'react';
import {
  Biohazard,
  Cigarette,
  CloudFog,
  Sparkles,
  ShieldOff,
  UserMinus,
} from 'lucide-react';

const OvarianCancerGuidecard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-6 rounded-2xl border shadow-sm 
        animate-in slide-in-from-right-5 duration-300 p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >

        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
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
              className="w-6 h-6 text-[#FF4B8B]"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Key Risk Factors
          </div>

          <div className="text-sm" style={{ color: "#7a2f4f" }}>
            Not everyone with risk factors will develop ovarian cancer, but they increase likelihood.
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-4">

          {/* Risk Factors Section */}
          <div className="space-y-4">

            {[
              {
                step: 'Age (Especially After 50)',
                icon: <CloudFog className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Most ovarian cancers occur after menopause.',
              },
              {
                step: 'Family History of Ovarian, Breast, or Colorectal Cancer',
                icon: <Biohazard className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Close relatives with these cancers increase your genetic risk.',
              },
              {
                step: 'Inherited Mutations (BRCA1, BRCA2, Lynch Syndrome)',
                icon: <ShieldOff className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'These mutations significantly increase ovarian cancer risk.',
              },
              {
                step: 'Endometriosis',
                icon: <Sparkles className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Long-term endometriosis is linked to certain ovarian cancer types.',
              },
              {
                step: 'Never Having Been Pregnant',
                icon: <UserMinus className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Women who have never carried a pregnancy have a slightly higher risk.',
              },
              {
                step: 'Long-Term Hormone Replacement Therapy (HRT)',
                icon: <Cigarette className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Extended use of estrogen-only HRT may increase risk.',
              },
              {
                step: 'Obesity',
                icon: <CloudFog className="w-5 h-5 text-[#FF4B8B]" />,
                description: 'Higher body fat can influence hormone levels that affect risk.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border transition-all duration-300"
                style={{
                  backgroundColor: "#FFF5F8",
                  borderColor: "rgb(255,197,211)",
                }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: "#FF4B8B",
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2" style={{ color: "#FF4B8B" }}>
                    {item.icon}
                    {item.step}
                  </h4>
                  <p className="text-sm" style={{ color: "#7a2f4f" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Extra Info */}
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <h4
              className="font-semibold flex items-center gap-2 mb-2"
              style={{ color: "#FF4B8B" }}
            >
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Good to Know
            </h4>

            <p className="text-sm" style={{ color: "#7a2f4f" }}>
              Having one or more risk factors does not mean you will get ovarian cancer — 
              but understanding them helps with early detection and prevention.
            </p>
          </div>

          {/* Next Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] 
              hover:bg-[#FF4B8B]/80 text-white rounded-md text-sm font-medium 
              transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard3;

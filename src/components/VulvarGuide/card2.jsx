'use client';
import React from 'react';

const VulvarGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border p-8 shadow-sm animate-in slide-in-from-right-5 duration-300"
        className="border border-primary-pink bg-white"
      >
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
          <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
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
              className="lucide lucide-activity w-6 h-6 text-primary-pink"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            How Vulvar Cancer Starts
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">

          {/* Intro Box */}
          <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 bg-primary-pink">
            <p className="text-lg leading-relaxed text-[#BB125B]">
              Vulvar cancer usually begins in the skin cells of the vulva. Understanding where
              it starts helps doctors determine the best treatment and predict how the disease
              may behave.
            </p>
          </div>

          {/* Two Main Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Type 1 */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">
                Squamous Cell Carcinoma
              </h4>
              <p className="text-sm text-[#BB125B]">
                The most common type — <strong>85–90%</strong> of vulvar cancers.  
                It begins in the thin, flat cells on the surface of the vulva.
              </p>
            </div>

            {/* Type 2 */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">
                Melanoma of the Vulva
              </h4>
              <p className="text-sm text-[#BB125B]">
                A less common but more aggressive type that begins in the pigment-producing
                cells of the vulva.
              </p>
            </div>

            {/* Pre-cancerous VIN */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">
                Pre-Cancerous Changes (VIN)
              </h4>
              <p className="text-sm text-[#BB125B]">
                Some cases begin as <strong>VIN – Vulvar Intraepithelial Neoplasia</strong>,  
                where abnormal cells appear before developing into cancer.
              </p>
            </div>

          </div>

          {/* Extra Info Box */}
          <div className="p-4 rounded-xl border border-primary-pink bg-primary-pink">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb w-5 h-5 text-primary-pink"
              >
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M2 10a10 10 0 0 1 20 0c0 3.46-1.8 6.5-4.53 8.12a1 1 0 0 0-.47.85V20a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-.97a1 1 0 0 0-.47-.85A9.99 9.99 0 0 1 2 10Z"></path>
              </svg>
              Did You Know?
            </h4>

            <p className="text-sm text-[#BB125B]">
              Detecting VIN early and treating it promptly can prevent it from developing
              into vulvar cancer.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VulvarGuideCard2;

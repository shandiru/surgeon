'use client';
import React from 'react';

const EndometrialCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
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
              className="lucide lucide-activity w-6 h-6 text-primary"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            How Endometrial Cancer Develops
          </div>
          <p className="text-muted-foreground text-sm">
            Understanding the types and early changes in the uterine lining
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-6">

          {/* Intro Box */}
          <div className="bg-primary/5 p-4 rounded-lg border hover:bg-[#fce3e8] transition-all hover:shadow-md hover:border-[#f5a9bd] hover:scale-105 active:scale-100 duration-300">
            <p className="text-lg leading-relaxed">
              Endometrial cancer develops when cells in the endometrial lining grow abnormally and uncontrollably. Recognizing how it develops can help with early detection and treatment.
            </p>
          </div>

          {/* Two Main Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Type 1 */}
            <div className="p-4 rounded-xl border bg-white hover:bg-[#FF4B8B]/10 transition-all duration-300 hover:shadow-md">
              <h4 className="font-semibold text-primary mb-2">Type 1 Endometrial Cancer</h4>
              <p className="text-sm">
                The most common type. Linked to excess oestrogen exposure. Usually grows slowly and is often detected early.
              </p>
            </div>

            {/* Type 2 */}
            <div className="p-4 rounded-xl border bg-white hover:bg-[#FF4B8B]/10 transition-all duration-300 hover:shadow-md">
              <h4 className="font-semibold text-primary mb-2">Type 2 Endometrial Cancer</h4>
              <p className="text-sm">
                Less common but more aggressive. Not related to oestrogen and more likely to spread beyond the uterus.
              </p>
            </div>

            {/* Pre-cancerous Hyperplasia */}
            <div className="p-4 rounded-xl border bg-white hover:bg-[#FF4B8B]/10 transition-all duration-300 hover:shadow-md">
              <h4 className="font-semibold text-primary mb-2">Endometrial Hyperplasia</h4>
              <p className="text-sm">
                Some women first develop a pre-cancerous condition where the uterine lining becomes too thick. Early treatment can prevent progression to cancer.
              </p>
            </div>
          </div>

          {/* Extra Info Box */}
          <div className="bg-accent/10 p-4 rounded-lg border">
            <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
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
                className="lucide lucide-lightbulb w-5 h-5 text-[#d63384]"
              >
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M2 10a10 10 0 0 1 20 0c0 3.46-1.8 6.5-4.53 8.12a1 1 0 0 0-.47.85V20a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-.97a1 1 0 0 0-.47-.85A9.99 9.99 0 0 1 2 10Z"></path>
              </svg>
              Did You Know?
            </h4>
            <p className="text-sm">
              Early detection of endometrial hyperplasia and timely treatment can prevent it from progressing to endometrial cancer.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EndometrialCard2;

"use client";
import React from "react";

const CervicalCancerGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border border-primary-pink bg-white p-8 shadow-sm animate-in slide-in-from-right-5 duration-300">
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
            How Cervical Cancer Starts
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">
          {/* Intro Box */}
          <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 bg-primary-pink">
            <p className="text-lg leading-relaxed text-[#BB125B]">
              Cervical cancer usually begins with pre-cancerous changes in the cells of the cervix
              called <strong>CIN (Cervical Intraepithelial Neoplasia)</strong>. If untreated, some
              CIN lesions may slowly progress to cancer over many years.
            </p>
          </div>

          {/* Two Main Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Squamous Cell Carcinoma */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">Squamous Cell Carcinoma</h4>
              <p className="text-sm text-[#BB125B]">
                The most common type — <strong>70–80%</strong> of cervical cancers. Starts in the
                thin, flat cells on the outer surface of the cervix.
              </p>
            </div>

            {/* Adenocarcinoma */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">Adenocarcinoma</h4>
              <p className="text-sm text-[#BB125B]">
                Begins in the glandular cells inside the cervical canal. Less common but often
                harder to detect through routine screening.
              </p>
            </div>

            {/* Rare Types */}
            <div className="p-4 rounded-xl border border-primary-pink transition-all duration-300 hover:shadow-md bg-white">
              <h4 className="font-semibold mb-2 text-primary-pink">Rare Types</h4>
              <p className="text-sm text-[#BB125B]">
                Includes <strong>small cell neuroendocrine carcinoma</strong> and other mixed
                tumours. These are uncommon but tend to behave more aggressively.
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
              CIN does not always turn into cancer. Regular screening and early treatment of
              abnormal cells can stop cervical cancer before it starts.
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

export default CervicalCancerGuideCard2;

'use client';
import React from 'react';
import { Biohazard, Cigarette, CloudFog, Sparkles, ShieldOff } from 'lucide-react';

const CervicalCancerGuidecard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border p-8 shadow-sm animate-in slide-in-from-right-5 duration-300"
        className="bg-white border-light-pink-2"
      >
        
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            className="text-primary-pink"
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
              className="lucide lucide-file-text w-6 h-6 text-primary-pink"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Key Risk Factors
          </div>

          <p className="text-sm" className="text-black">
            Major factors that increase the risk of cervical cancer.
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-4 mt-4">

          {/* Risk Factors List */}
          <div className="space-y-4">
            {[
              {
                step: 'Persistent High-Risk HPV Infection',
                icon: <Biohazard className="w-5 h-5 text-primary-pink" />,
                description:
                  'The strongest risk factor. Nearly all cervical cancers are linked to high-risk HPV types.',
              },
              {
                step: 'Smoking',
                icon: <Cigarette className="w-5 h-5 text-primary-pink" />,
                description:
                  'Smoking reduces the body’s ability to clear HPV infections, increasing cancer risk.',
              },
              {
                step: 'Weakened Immune System',
                icon: <ShieldOff className="w-5 h-5 text-primary-pink" />,
                description:
                  'Conditions like HIV or long-term steroid use weaken immunity and raise risk.',
              },
              {
                step: 'Sexual Activity at a Young Age',
                icon: <Sparkles className="w-5 h-5 text-primary-pink" />,
                description:
                  'Early sexual activity increases the chance of HPV exposure.',
              },
              {
                step: 'Multiple Sexual Partners',
                icon: <CloudFog className="w-5 h-5 text-primary-pink" />,
                description:
                  'More partners increase the likelihood of high-risk HPV infection.',
              },
              {
                step: 'Long-Term Oral Contraceptive Use',
                icon: <Sparkles className="w-5 h-5 text-primary-pink" />,
                description:
                  'Using the contraceptive pill for more than 5 years slightly increases risk.',
              },
              {
                step: 'Lack of Cervical Screening',
                icon: <Biohazard className="w-5 h-5 text-primary-pink" />,
                description:
                  'Skipping Pap smears or HPV tests means abnormalities can go undetected.',
              },
              {
                step: 'Other STIs (e.g., Chlamydia)',
                icon: <CloudFog className="w-5 h-5 text-primary-pink" />,
                description:
                  'Certain infections make HPV more persistent, raising risk.',
              },
              {
                step: 'Family History of Cervical Cancer',
                icon: <Sparkles className="w-5 h-5 text-primary-pink" />,
                description:
                  'Risk is slightly higher if a close relative has had cervical cancer.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-lg active:shadow-lg"
                className="bg-white border-light-pink-2"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    className="bg-primary-pink text-white"
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1 flex items-center gap-2"
                    className="text-primary-pink"
                  >
                    {item.icon}
                    {item.step}
                  </h4>
                  <p className="text-sm" className="text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* HPV Note */}
          <div
            className="p-4 rounded-xl border mt-4"
            className="bg-light-pink-1 border-light-pink-2"
          >
            <h4
              className="font-semibold mb-2 flex items-center gap-2"
              className="text-primary-pink"
            >
              <Sparkles className="w-5 h-5 text-primary-pink" />
              Most Important Risk Factor
            </h4>
            <p className="text-sm" className="text-black">
              HPV is the most important risk factor — nearly all cervical cancers are HPV-related.
            </p>
          </div>

          {/* Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
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

export default CervicalCancerGuidecard3;

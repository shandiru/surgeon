'use client';
import React from 'react';
import { Biohazard, CloudFog, Sparkles, ShieldOff, Heart } from 'lucide-react';

const EndometrialCard3 = ({ setShowCard, setActiveButton }) => {
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
              className="lucide lucide-file-text w-6 h-6 text-primary"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Key Risk Factors
          </div>
          <div className="text-muted-foreground text-sm">
            These factors increase the likelihood of developing endometrial cancer.
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Risk Factors Section */}
          <div className="space-y-4">
            {[
              {
                step: 'Postmenopausal Age',
                icon: <CloudFog className="w-5 h-5 text-[#BB125B]" />,
                description: 'Endometrial cancer is more common after menopause.',
              },
              {
                step: 'Excess Oestrogen Exposure',
                icon: <Sparkles className="w-5 h-5 text-[#BB125B]" />,
                description: 'High levels of oestrogen without progesterone increase risk.',
              },
              {
                step: 'Obesity',
                icon: <Heart className="w-5 h-5 text-[#BB125B]" />,
                description: 'One of the strongest risk factors for endometrial cancer.',
              },
              {
                step: 'Polycystic Ovary Syndrome (PCOS)',
                icon: <Biohazard className="w-5 h-5 text-[#BB125B]" />,
                description: 'PCOS can lead to hormonal imbalances that increase risk.',
              },
              {
                step: 'Early Menarche or Late Menopause',
                icon: <CloudFog className="w-5 h-5 text-[#BB125B]" />,
                description: 'Longer exposure to estrogen over a lifetime raises risk.',
              },
              {
                step: 'Never Having Been Pregnant',
                icon: <ShieldOff className="w-5 h-5 text-[#BB125B]" />,
                description: 'Pregnancy provides protective hormonal effects.',
              },
              {
                step: 'Hormone Replacement Therapy (Oestrogen-Only)',
                icon: <Sparkles className="w-5 h-5 text-[#BB125B]" />,
                description: 'Using oestrogen alone without progesterone increases risk.',
              },
              {
                step: 'Tamoxifen Use',
                icon: <Biohazard className="w-5 h-5 text-[#BB125B]" />,
                description: 'Tamoxifen, used for breast cancer, can slightly raise risk.',
              },
              {
                step: 'Family History (e.g., Lynch Syndrome)',
                icon: <ShieldOff className="w-5 h-5 text-[#BB125B]" />,
                description: 'Genetic predisposition increases lifetime risk of endometrial cancer.',
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-card rounded-lg border hover:z-50 transition-all duration-300 
                hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] 
                active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] 
                hover:scale-105 active:scale-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    {item.icon}
                    {item.step}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Protective Factors */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Protective Factors
            </h4>
            <p className="text-sm">
              Pregnancy, use of combined hormonal contraceptives, and maintaining a healthy weight can lower the risk of endometrial cancer.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
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

export default EndometrialCard3;

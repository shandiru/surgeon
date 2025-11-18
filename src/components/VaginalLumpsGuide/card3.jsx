'use client';
import React from 'react';
import { Biohazard, Droplet, Scissors, Sparkles, ShieldOff, Flame } from 'lucide-react';

const VaginalLumpsGuidecard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border p-8 shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: 'rgb(255,197,211)',
        }}
      >
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: '#FF4B8B' }}
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
            Key Causes & Risk Factors
          </div>

          <p className="text-sm" style={{ color: '#7a2f4f' }}>
            Most vaginal lumps are harmless, treatable, and not serious — but knowing the causes helps.
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-4 mt-4">
          {/* Causes Section */}
          <div className="space-y-4">
            {[
              {
                step: 'Blocked Glands (Bartholin or Skene glands)',
                icon: <Droplet className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'A blocked duct can fill with fluid and form a cyst, sometimes becoming painful.',
              },
              {
                step: 'HPV Infection',
                icon: <Biohazard className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Certain HPV strains can cause lumps or warts on the vaginal or vulvar area.',
              },
              {
                step: 'Bacterial or Yeast Infections',
                icon: <Flame className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'These infections can cause swelling, irritation, or small painful bumps.',
              },
              {
                step: 'Skin Irritation (Shaving or Waxing)',
                icon: <Scissors className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Ingrown hairs or irritation from hair removal can create tender lumps.',
              },
              {
                step: 'Sexually Transmitted Infections (STIs)',
                icon: <Biohazard className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Conditions like herpes, syphilis, or molluscum can cause lumps or sores.',
              },
              {
                step: 'Hormonal Changes (Pregnancy or Menopause)',
                icon: <Sparkles className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Hormonal shifts can change gland activity and increase lump formation.',
              },
              {
                step: 'Trauma or Childbirth',
                icon: <ShieldOff className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Pressure, tearing, or swelling after childbirth can cause temporary lumps.',
              },
              {
                step: 'Poor Hygiene or Tight Clothing',
                icon: <Flame className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'Sweat and friction can trap bacteria and cause irritation or infection.',
              },
              {
                step: 'Weakened Immune System',
                icon: <ShieldOff className="w-5 h-5 text-[#FF4B8B]" />,
                description:
                  'A weak immune system makes infections and cysts more likely to occur.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-lg active:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: 'rgb(255,197,211)',
                }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: '#FF4B8B',
                      color: '#FFFFFF',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-1 flex items-center gap-2"
                    style={{ color: '#FF4B8B' }}
                  >
                    {item.icon}
                    {item.step}
                  </h4>
                  <p className="text-sm" style={{ color: '#7a2f4f' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Info */}
          <div
            className="p-4 rounded-xl border mt-4"
            style={{
              backgroundColor: '#FFF5F8',
              borderColor: 'rgb(255,197,211)',
            }}
          >
            <h4
              className="font-semibold mb-2 flex items-center gap-2"
              style={{ color: '#FF4B8B' }}
            >
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Good to Know
            </h4>
            <p className="text-sm" style={{ color: '#7a2f4f' }}>
              Most causes of vaginal lumps are treatable and not serious.  
              See a doctor if a lump becomes painful, grows, or does not go away.
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

export default VaginalLumpsGuidecard3;

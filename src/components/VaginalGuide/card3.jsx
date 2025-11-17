'use client'; 
import React from 'react';
import { Bed, Wrench, Droplet, Search, Sparkles } from 'lucide-react';

const Vaginalcard3 = ({ setShowCard, setActiveButton }) => {
  const riskFactors = [
    "HPV infection, especially high-risk strains",
    "History of cervical cancer or cervical pre-cancer",
    "Older age (most cases occur after 60)",
    "Smoking",
    "Weakened immune system",
    "Previous pelvic radiation therapy",
    "VAIN (pre-cancerous vaginal changes)"
  ];

  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
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
            Vaginal Cancer Risk Factors
          </div>
          <div className="text-muted-foreground text-sm">Common factors that may increase the risk</div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Risk Factors List */}
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{factor}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF4B8B]" />
              Good to Know
            </h4>
            <p className="text-sm">
              While these factors can increase the likelihood of developing vaginal cancer, having one or more does <strong>not mean</strong> you will definitely get it. Regular check-ups and HPV vaccination are effective preventive measures.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(4);       // move to Card 4
                setActiveButton(3);   // index for Card 4
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 w-full"
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

'use client';
import React from 'react';

const Vaginalcard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                 strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6 text-primary">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Vaginal Cancer Treatment
          </div>
        </div>

        {/* Content */}
        <div className="px-6 space-y-4">

          {/* Surgery Section */}
          <div>
            <h4 className="font-semibold mb-3 text-primary">Surgery (Often the Primary Treatment)</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Vaginectomy:</strong> Removal of part or all of the vagina; may include nearby lymph nodes. Reconstruction with tissue grafts can restore vaginal function.</p>
              <p><strong>Hysterectomy:</strong> Removal of the uterus and sometimes ovaries, fallopian tubes, and lymph nodes; often combined with vaginectomy for advanced cases.</p>
              <p>After surgery, patients receive enhanced recovery support to aid healing.</p>
            </div>
          </div>

          {/* Combination Treatments Section */}
          <div>
            <h4 className="font-semibold mb-3 text-accent">Combination Treatments</h4>
            <div className="space-y-2 text-sm">
              <p>In some cases, surgery may be combined with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Radiation therapy:</strong> Targeted energy to destroy cancer cells</li>
                <li><strong>Chemotherapy:</strong> Drugs to kill or slow cancer growth</li>
              </ul>
            </div>
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(7);       // move to next card
                setActiveButton(6);   // index for this card
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vaginalcard6;

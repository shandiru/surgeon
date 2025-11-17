import React from 'react';

const OvarianCancerGuidecard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-heart w-6 h-6 text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Step 3 — Treatment Options
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-6">

          {/* Primary Treatment Section */}
          <div>
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
              1. Surgery (Primary Treatment)
            </h4>

            <div className="space-y-4">

              {/* Radical Wide Local Excision */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Radical Wide Local Excision</p>
                <p className="text-sm">
                  Removes the cancer plus a margin of healthy tissue (usually at least 1 cm).
                </p>
              </div>

              {/* Radical Partial Vulvectomy */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Radical Partial Vulvectomy</p>
                <p className="text-sm">
                  Removes a larger section of the vulva — one or both labia, and sometimes the clitoris.
                </p>
              </div>

              {/* Radical Vulvectomy */}
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-primary mb-1">Radical Vulvectomy</p>
                <p className="text-sm">
                  Removes the entire vulva, including inner and outer labia, and possibly the clitoris.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Treatments */}
          <div>
            <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
              2. Additional Treatments
            </h4>

            <div className="space-y-4">

              {/* Radiation Therapy */}
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Radiation Therapy</p>
                <p className="text-sm">
                  Often used with surgery to destroy any remaining cancer cells.
                </p>
              </div>

              {/* Chemotherapy */}
              <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 transition-all duration-300">
                <p className="font-semibold text-accent-foreground mb-1">Chemotherapy</p>
                <p className="text-sm">
                  May be combined with radiation or used for advanced or recurring cases.
                </p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(7);
                setActiveButton(6);
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

export default OvarianCancerGuidecard6;

import React from 'react';

const Colposcopycard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6 text-primary">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            After Your Colposcopy
          </div>
        </div>

        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* What's Normal Section */}
            <div>
              <h4 className="font-semibold mb-3 text-primary">What's Normal</h4>
              <div className="space-y-2">
                {['Mild spotting for a few days', 'Light cramping', 'Slight discharge'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-primary">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Instructions Section */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Care Instructions</h4>
              <div className="space-y-2">
                {[
                  'Take paracetamol or ibuprofen for discomfort',
                  'Avoid tampons for 5-7 days (if biopsy taken)',
                  'No swimming for 5-7 days (if biopsy taken)',
                  'Avoid vaginal sex for 5-7 days (if biopsy taken)',
                ].map((instruction, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">!</span>
                    </div>
                    <span>{instruction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When to Contact Your Doctor Section */}
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-4 h-4">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              When to Contact Your Doctor
            </h4>
            <p className="text-sm mb-2">Call your doctor straight away if you notice:</p>
            <ul className="text-sm space-y-1">
              {[
                'Fever (100.4°F / 38°C or higher)',
                'Heavy, yellow, or smelly vaginal discharge',
                'Severe abdominal pain not eased by painkillers',
                'Bleeding lasting more than 7 days',
              ].map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
            <p className="text-xs mt-2 text-muted-foreground">These may be signs of infection or complications (which are rare).</p>
          </div>

          {/* Emotional Support Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(7);       // move to Card 4
                setActiveButton(6);   // index for Card 4
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              Emotional Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colposcopycard6;

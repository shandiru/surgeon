import React from 'react';

const VaginalCard2 = ({ setShowCard, setActiveButton }) => {
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
              className="lucide lucide-circle-alert w-6 h-6 text-primary"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            Types of Vaginal Cancer
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Main Types Section */}
            <div>
              <h4 className="font-semibold mb-3 text-primary">Main Types</h4>

              <div className="space-y-3">
                {[
                  {
                    title: 'Squamous Cell Carcinoma (Most Common — 85–90%)',
                    desc:
                      'Starts in the thin, flat cells lining the vagina. Often develops from a pre-cancer called VAIN (Vaginal Intraepithelial Neoplasia).',
                  },
                  {
                    title: 'Adenocarcinoma',
                    desc:
                      'Begins in gland-like cells that produce mucus inside the vagina. Less common but more likely to spread.',
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-card rounded-lg border transition-all duration-300 hover:bg-[#FF4B8B]/20 hover:shadow-md hover:border-[#FF4B8B]"
                  >
                    <div className="font-semibold mb-1 text-primary">{item.title}</div>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rare Types Section */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Other Rare Types</h4>

              <div className="space-y-2">
                {[
                  { label: 'Melanoma', badge: 'Very rare' },
                  { label: 'Sarcoma', badge: 'Rare soft-tissue cancer' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded transition-all duration-300 hover:bg-[#FF4B8B]/20 hover:shadow-md"
                  >
                    <span className="text-sm">{item.label}</span>
                    <span
                      data-slot="badge"
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {item.badge}
                    </span>
                  </div>
                ))}

                {/* <p className="text-xs mt-3 text-gray-600">
                  These cancers account for only a small percentage of vaginal cancer cases.
                </p> */}
              </div>
            </div>

          </div>

          {/* When to Contact Your Doctor Section */}
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
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
                className="lucide lucide-circle-alert w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              When to Contact Your Doctor
            </h4>
            <p className="text-sm">
              If you notice unusual vaginal bleeding, persistent discharge, pelvic pain, or a lump inside the vagina,
              contact your doctor. Early diagnosis greatly improves treatment outcomes.
            </p>
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Learn About the Procedure
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaginalCard2;

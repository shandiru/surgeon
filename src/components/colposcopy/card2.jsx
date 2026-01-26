import React from 'react';

const ColposcopyCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
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
              className="lucide lucide-circle-alert w-6 h-6 text-primary"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            Why You Might Need a Colposcopy
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Common Reasons Section */}
            <div>
              <h4 className="font-semibold mb-3 text-primary">Common Reasons</h4>
              <div className="space-y-3">
                {[
                  'Abnormal cervical smear results',
                  'Unusual appearance during pelvic exam',
                  'Positive HPV test',
                  'Unexplained bleeding or symptoms',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-md hover:border-primary-pink"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What It Can Diagnose Section */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">What It Can Diagnose</h4>
              <div className="space-y-2">
                {[
                  { label: 'Cervical cancer', badge: 'Early detection' },
                  { label: 'Vaginal or vulval cancer', badge: 'Screening' },
                  { label: 'Genital warts', badge: 'Identification' },
                  { label: 'Precancerous changes', badge: 'Prevention' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-muted rounded transition-all duration-300 hover:bg-light-pink-1 hover:shadow-md"
                  >
                    <span className="text-sm">{item.label}</span>
                    <span
                      data-slot="badge"
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs"
                    >
                      {item.badge}
                    </span>
                  </div>
                ))}
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
              Being referred for a colposcopy doesn't mean you have cancer. Most abnormal smear results are caused by infections or minor cell changes that can be easily treated.
            </p>
          </div>

          {/* Learn About the Procedure Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Learn About the Procedure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColposcopyCard2;

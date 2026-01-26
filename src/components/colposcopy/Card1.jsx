import { Lightbulb } from "lucide-react";
import React from "react";

const ColposcopyCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-md animate-in slide-in-from-right-5 duration-300 px-4 sm:px-6 md:px-8">
        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
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
              className="lucide lucide-stethoscope w-6 h-6 text-primary"
            >
              <path d="M11 2v2"></path>
              <path d="M5 2v2"></path>
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
              <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
            What Is a Colposcopy?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Quick Facts */}
          <div className="bg-light-pink-1 p-4 rounded-lg border-primary-pink border hover:z-50 transition-all duration-300 hover:bg-light-pink-2 hover:shadow-lg hover:border-primary-pink active:bg-light-pink-2 active:shadow-lg active:border-primary-pink hover:scale-105 active:scale-100">
            <p className="text-lg leading-relaxed">
              A colposcopy is a <strong>simple procedure</strong> to look for abnormal cells on the
              cervix or vagina.
            </p>
          </div>

          {/* Quick Facts List */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-primary-pink">
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
                  className="lucide lucide-clock w-4 h-4 text-accent text-primary-pink"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Quick Facts
              </h4>
              <ul className="space-y-2">
                {[
                  "Takes only 5–10 minutes",
                  "Feels similar to a smear test",
                  "Uses a special magnifying instrument",
                  "Helps detect early cell changes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check-big w-4 h-4 text-primary mt-0.5 flex-shrink-0 text-primary-pink"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reminder Section */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2 text-primary-pink">
                <Lightbulb className="text-xl " />
                Remember
              </h4>
              <p className="text-sm">
                A colposcopy helps detect early cell changes <strong>before</strong> they develop
                into cancer. It's a preventive measure that can protect your health.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(2);
                setActiveButton(1);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColposcopyCard1;

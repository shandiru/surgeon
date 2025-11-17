import { Lightbulb } from 'lucide-react';
import React from 'react';

const VulvarGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-md animate-in slide-in-from-right-5 duration-300 px-4 sm:px-6 md:px-8">

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
              className="lucide lucide-info w-6 h-6 text-primary"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            What Is Vulvar Cancer?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Overview Box */}
          <div className="bg-primary/5 p-4 rounded-lg border hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
            <p className="text-lg leading-relaxed">
              Vulvar cancer is a type of cancer that develops on the external female genital area,
              known as the vulva. This includes the labia majora, labia minora, clitoris, and the skin
              around the vaginal opening. Although vulvar cancer is relatively rare, understanding it
              helps with early detection and prevention.
            </p>
          </div>

          {/* Quick Facts + Reminder */}
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* Quick Facts */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
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
                  className="lucide lucide-activity w-4 h-4 text-accent"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Quick Facts
              </h4>

              <ul className="space-y-2">
                {[
                  'Most common in women over 60',
                  'Often linked to HPV or chronic skin conditions',
                  'Early diagnosis greatly improves outcomes',
                  'Can appear as itching, lumps, or skin changes',
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
                      className="lucide lucide-circle-check-big w-4 h-4 text-primary mt-0.5 flex-shrink-0"
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
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="text-xl text-[#d63384]" />
                Remember
              </h4>
              <p className="text-sm">
                Vulvar cancer often begins with subtle skin changes. Paying attention to persistent
                itching, lumps, sores, or colour changes can help detect the condition early when it
                is most treatable.
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

export default VulvarGuideCard1;

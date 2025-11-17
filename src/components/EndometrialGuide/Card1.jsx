'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const EndometrialCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-md animate-in slide-in-from-right-5 duration-300 px-4 sm:px-6 md:px-8">

        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary" />
            What Is Endometrial Cancer?
          </div>
          <p className="text-muted-foreground text-sm">
            Understanding the most common type of uterine cancer
          </p>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Overview Box */}
          <div className="bg-primary/5 p-4 rounded-lg border hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
            <p className="text-lg leading-relaxed">
              Endometrial cancer is a type of cancer that begins in the lining of the uterus, called the endometrium.
              It is the most common gynaecological cancer in many countries and is often detected early because it typically causes abnormal uterine bleeding, especially after menopause.
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
                  'Most common in postmenopausal women',
                  'Often detected early due to abnormal bleeding',
                  'Early diagnosis greatly improves outcomes',
                  'Risk factors include obesity, hormone therapy, and age',
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
                Endometrial cancer often presents early with abnormal bleeding. Paying attention to any unusual uterine bleeding, spotting after menopause, or changes in menstrual patterns can help detect the cancer early, when treatment is most effective.
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

export default EndometrialCard1;

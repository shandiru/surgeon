'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const EndometrialCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border border-[#FF4B8B]/10 shadow-sm animate-in slide-in-from-right-5 duration-300 p-8 bg-white"
      >

        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B]">
            <Lightbulb className="w-6 h-6 text-[#FF4B8B]" />
            What Is Endometrial Cancer?
          </div>
          <p className="text-sm mt-1 text-[#BB125B]">
            Understanding the most common type of uterine cancer
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-6">

          {/* Overview Box */}
          <div className="p-4 rounded-xl border border-[#FF4B8B]/10 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100 bg-[#FF4B8B]/10">
            <p className="text-lg leading-relaxed text-[#BB125B]">
              Endometrial cancer is a type of cancer that begins in the lining of the uterus, called the endometrium.
              It is the most common gynaecological cancer in many countries and is often detected early because it typically causes abnormal uterine bleeding, especially after menopause.
            </p>
          </div>

          {/* Quick Facts + Reminder */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Quick Facts */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2" style={{ color: '#FF4B8B' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#FF4B8B]"
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
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#FF4B8B] mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span className="text-[#BB125B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reminder Section */}
            <div className="p-4 rounded-xl border border-[#FF4B8B]/10 bg-[#FF4B8B]/10">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-[#FF4B8B]">
                <Lightbulb className="text-xl text-[#FF4B8B]" />
                Remember
              </h4>
              <p className="text-sm text-[#BB125B]">
                Endometrial cancer often presents early with abnormal bleeding. Paying attention to any unusual uterine bleeding, spotting after menopause, or changes in menstrual patterns can help detect the cancer early, when treatment is most effective.
              </p>
            </div>

          </div>

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(2);
                setActiveButton(1);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
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

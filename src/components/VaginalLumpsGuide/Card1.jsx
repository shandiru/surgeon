'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const VaginalLumpsGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border shadow-sm animate-in slide-in-from-right-5 duration-300 p-8"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: 'rgb(255,197,211)',
        }}
      >

        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: '#FF4B8B' }}
          >
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
              className="w-6 h-6 text-primary-pink"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            Overview — Vaginal Lumps
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">

          {/* Overview Box */}
          <div
            className="p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
            style={{
              backgroundColor: '#FFF5F8',
              borderColor: 'rgb(255,197,211)',
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: '#7a2f4f' }}>
              Vaginal lumps refer to any swelling, bump, or raised area found on or inside the vagina. 
              Most lumps are benign (non-cancerous) and caused by infections, blocked glands, or normal 
              anatomical variations. However, persistent, painful, or growing lumps should always be 
              checked by a doctor to rule out infection or, in rare cases, cancer.
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
                  className="w-4 h-4 text-primary-pink"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Quick Facts
              </h4>

              <ul className="space-y-2">
                {[
                  'Most lumps are harmless and treatable',
                  'Bartholin cysts are a common cause',
                  'Infections can cause painful swelling',
                  'Any lump lasting over 2–3 weeks should be checked',
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
                      className="w-4 h-4 text-primary-pink mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span style={{ color: '#7a2f4f' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reminder Section */}
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: '#FFF5F8',
                borderColor: 'rgb(255,197,211)',
              }}
            >
              <h4
                className="font-semibold mb-2 flex items-center gap-2"
                style={{ color: '#FF4B8B' }}
              >
                <Lightbulb className="text-xl text-primary-pink" />
                Remember
              </h4>
              <p className="text-sm" style={{ color: '#7a2f4f' }}>
                Not every vaginal lump is serious, but ignoring symptoms can delay important 
                treatment. If a lump becomes painful, grows, or does not disappear on its own, 
                schedule a medical review.
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
              className="inline-flex items-center justify-center bg-primary-pink hover:bg-primary-pink/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaginalLumpsGuideCard1;

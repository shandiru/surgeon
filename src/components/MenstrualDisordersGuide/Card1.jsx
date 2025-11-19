'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const MenstrualDisordersGuideCard1 = ({ setShowCard, setActiveButton }) => {
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
              className="w-6 h-6 text-[#FF4B8B]"
            >
              <path d="M11 2v2"></path>
              <path d="M5 2v2"></path>
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
              <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
            What Are Menstrual Disorders?
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
              Menstrual disorders refer to any changes or problems with a person’s menstrual cycle,
              including irregular timing, unusually heavy or light bleeding, severe pain, or the
              absence of periods. These disorders are common and may be temporary or linked to
              underlying health conditions. Understanding them helps with early recognition and
              proper treatment.
            </p>
          </div>

          {/* Quick Facts + Reminder */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Quick Facts */}
            <div className="space-y-3">
              <h4
                className="font-semibold flex items-center gap-2"
                style={{ color: '#FF4B8B' }}
              >
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Quick Facts
              </h4>

              <ul className="space-y-2">
                {[
                  'Can include irregular, heavy, painful, or absent periods',
                  'Often caused by hormonal imbalance, stress, or medical conditions',
                  'Common during puberty and perimenopause',
                  'May signal underlying issues such as thyroid problems or PCOS',
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
                <Lightbulb className="text-xl text-[#FF4B8B]" />
                Remember
              </h4>
              <p className="text-sm" style={{ color: '#7a2f4f' }}>
                Menstrual disorders are common, but they shouldn’t be ignored. Seek medical advice if
                you experience very heavy bleeding, severe pain, missed periods, or sudden cycle
                changes. Early evaluation helps identify the cause and ensures proper treatment.
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

export default MenstrualDisordersGuideCard1;

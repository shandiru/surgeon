"use client";
import { Lightbulb } from "lucide-react";
import React from "react";

const VaginalCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-4">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border border-primary-pink/10 shadow-sm animate-in slide-in-from-right-5 duration-300 p-8 bg-white">
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
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
              className="w-6 h-6 text-primary-pink"
            >
              <path d="M11 2v2"></path>
              <path d="M5 2v2"></path>
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
              <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
            What Is Vaginal Cancer?
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">
          {/* Overview Box */}
          <div className="p-4 rounded-xl border border-primary-pink/10 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100 bg-[#FF4B8B]/10">
            <p className="text-lg leading-relaxed text-black">
              Vaginal cancer is a rare cancer that begins in the tissues of the vagina—the muscular
              canal that connects the cervix to the outside of the body. It often first appears as
              <strong> pre-cancerous changes (VAIN)</strong>, making early detection essential for
              better treatment outcomes.
            </p>
          </div>

          {/* Quick Facts + Reminder */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Facts */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-primary-pink">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Quick Facts
              </h4>

              <ul className="space-y-2">
                {[
                  "Most common in women over 60",
                  "Often linked to HPV infection (high-risk strains)",
                  "Usually starts as pre-cancerous changes (VAIN)",
                  "Early stages may show few or no symptoms",
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
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reminder Section */}
            <div className="p-4 rounded-xl border border-primary-pink/10 bg-[#FF4B8B]/10">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
                <Lightbulb className="text-xl text-primary-pink" />
                Remember
              </h4>
              <p className="text-sm text-black">
                Vaginal cancer is rare, but early detection is crucial. Watch for symptoms such as
                unusual bleeding, persistent pelvic pain, or a lump inside the vagina. Small changes
                can be important—early evaluation leads to better outcomes.
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

export default VaginalCard1;

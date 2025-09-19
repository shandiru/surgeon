import React from 'react';

const UltraSoundGuide = () => {
  return (
    <div className="UltraSoundGuide">
      <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
        {/* Title with Icon */}
        <div className="inline-flex items-center gap-2 text-[#d60d64] bg-[#FF4B8B]/10 px-4 py-2 rounded-full mb-4">
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
            className="lucide lucide-monitor w-5 h-5 text-primary"
          >
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>
          <span className="font-medium">Medical Education</span>
        </div>

        {/* Heading and Subheading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d60d64] mb-4">Understanding Gynaecological Ultrasound</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">What it is, why it's done, and what to expect</p>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground text-[#d60d64]">Your Progress</span>
            <span className="text-sm font-medium text-[#d60d64]">0/6 sections</span>
          </div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            data-slot="progress"
            className="bg-[#FF4B8B]/20 relative w-full overflow-hidden rounded-full h-2"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              data-slot="progress-indicator"
              className="bg-[#FF4B8B] h-full w-full flex-1 transition-all"
              style={{ transform: 'translateX(-100%)' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltraSoundGuide;

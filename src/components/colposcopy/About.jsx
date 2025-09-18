import React from 'react';

const ColposcopyGuide = () => {
  return (
    <div className="text-center mb-8">
      {/* Tag and Title */}
      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
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
          className="lucide lucide-heart w-5 h-5 text-primary"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
        <span className="text-primary font-medium">Medical Education</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl font-bold text-balance mb-4">Understanding Colposcopy</h1>
      <p className="text-xl text-muted-foreground text-balance">What it is, why it's done, and what to expect</p>

      {/* Progress Bar */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Your Progress</span>
          <span className="text-sm font-medium">0/7 sections</span>
        </div>

        {/* Progress Bar Container */}
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          data-slot="progress"
          className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
        >
          {/* Progress Indicator */}
          <div
            data-state="indeterminate"
            data-max="100"
            data-slot="progress-indicator"
            className="bg-primary h-full w-full flex-1 transition-all"
            style={{ transform: 'translateX(-100%)' }} // Progress starts at 0%
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ColposcopyGuide;

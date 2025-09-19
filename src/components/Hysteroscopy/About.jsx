import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const HysteroscopyGuide = () => {
  const [progress, setProgress] = useState(0);

  // Function to simulate progress for demonstration
  const updateProgress = () => {
    if (progress < 100) {
      setProgress(progress + 16.67); // Simulating 6 sections, each 16.67% completion
    }
  };

  return (
    <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="inline-flex items-center gap-2 text-[#d60d64] bg-[#FF4B8B]/10 px-4 py-2 rounded-full mb-4">
        <Heart className="w-5 h-5 text-primary" />
        <span className="text-primary font-medium">Medical Education</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#d60d64] mb-4">Understanding Hysteroscopy</h1>
      <p className="text-lg sm:text-xl text-muted-foreground text-[#d60d64] mb-6">What it is, why it's done, and what to expect</p>

      {/* Progress Section */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#d60d64]">Your Progress</span>
          <span className="text-sm font-medium text-[#d60d64]">{Math.round(progress)}/6 sections</span>
        </div>

        {/* Progress Bar */}
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          data-slot="progress"
          className="bg-[#FF4B8B]/10 relative w-full overflow-hidden rounded-full h-2"
        >
          <div
            data-state="indeterminate"
            data-max="100"
            data-slot="progress-indicator"
            className="bg-[#FF4B8B]/50 h-full transition-all"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HysteroscopyGuide;

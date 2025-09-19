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
    <div className="text-center mb-8">
      {/* Header Section */}
      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
        <Heart className="w-5 h-5 text-primary" />
        <span className="text-primary font-medium">Medical Education</span>
      </div>
      <h1 className="text-4xl font-bold text-balance mb-4">Understanding Hysteroscopy</h1>
      <p className="text-xl text-muted-foreground text-balance">What it is, why it's done, and what to expect</p>

      {/* Progress Section */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Your Progress</span>
          <span className="text-sm font-medium">{Math.round(progress)}/6 sections</span>
        </div>

        {/* Progress Bar */}
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          data-slot="progress"
          className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
        >
          <div
            data-state="indeterminate"
            data-max="100"
            data-slot="progress-indicator"
            className="bg-primary h-full w-full flex-1 transition-all"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          ></div>
        </div>

        {/* Simulate Progress Button */}
        <button
          onClick={updateProgress}
          className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default HysteroscopyGuide;

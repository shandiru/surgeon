import React, { useState } from "react";
import { Heart } from "lucide-react";

const HysteroscopyGuide = ({ activeButton }) => {
  const totalSteps = 6;
  const completed = activeButton + 1;
  const progressPercentage = Math.round((completed / totalSteps) * 100);

  return (
    <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="inline-flex items-center gap-2 text-[#d60d64] bg-[#FF4B8B]/10 px-4 py-2 rounded-full mb-4">
        <Heart className="w-5 h-5 text-primary" />
        <span className="text-primary font-medium">Medical Education</span>
      </div>
      <h1 className="text-hero text-[#FF4B8B] mb-4">Understanding Hysteroscopy</h1>
      <p className="text-body-large text-muted-foreground text-[#d60d64] mb-6">
        What it is, why it's done, and what to expect
      </p>

      {/* Progress Section */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-body-small text-[#d60d64]">Your Progress</span>
          <span className="text-body-small font-medium text-black">
            {completed}/{totalSteps} sections
          </span>
        </div>

        {/* Progress Bar Container */}
        <div
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progressPercentage}
          className="bg-[#FF4B8B]/10 relative w-full overflow-hidden rounded-full h-2"
        >
          {/* Progress Fill */}
          <div
            className="bg-[#FF4B8B]/80 h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HysteroscopyGuide;

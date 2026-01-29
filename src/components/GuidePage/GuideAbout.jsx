import React from "react";

const GuideAbout = ({ title, subtitle, tag, activeButton, totalSteps }) => {
  const completed = activeButton + 1;
  const progressPercentage = Math.round((completed / totalSteps) * 100);

  return (
    <div className="text-center mb-8 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Tag */}
      <div className="inline-flex bg-light-pink-2 text-primary-pink items-center gap-2 px-4 py-2 rounded-full mb-4">
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
        <span className="text-primary font-medium text-caption">{tag}</span>
      </div>

      {/* Title */}
      <h1 className="text-hero text-balance mb-4 text-primary-pink">{title}</h1>
      <p className="text-body-large text-muted-foreground text-balance text-black mb-6">
        {subtitle}
      </p>

      {/* Progress Bar */}
      <div className="my-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-body-small text-muted-foreground text-black">Your Progress</span>
          <span className="text-body-small font-medium text-black">
            {completed}/{totalSteps} sections
          </span>
        </div>
        <div
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progressPercentage}
          className="bg-light-pink-2 relative w-full overflow-hidden rounded-full h-2"
        >
          <div
            className="bg-primary-pink h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GuideAbout;

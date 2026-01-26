import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const GuideButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      {/* Wrapper div with responsive layout */}
      <div className="flex flex-wrap gap-2 p-1 justify-center rounded-lg mt-10 w-full max-w-4xl">
        
        {/* Colposcopy Guide Button */}
        <button
          data-slot="button"
          className="inline-flex text-primary-pink bg-light-pink-2 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
        >
          Colposcopy Guide
        </button>

        {/* Ultrasound Guide Link */}
        <Link
          to="/ultrasound"
          className="justify-center text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 flex items-center gap-2 w-full sm:w-auto"
          data-slot="button"
        >
          Ultrasound Guide
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
            className="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>

        {/* Hysteroscopy Guide Link */}
        <Link
          to="/hysteroscopy"
          className="justify-center text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 flex items-center gap-2 w-full sm:w-auto"
          data-slot="button"
        >
          Hysteroscopy Guide
        </Link>
      </div>
    </div>
  );
};

export default GuideButtons;

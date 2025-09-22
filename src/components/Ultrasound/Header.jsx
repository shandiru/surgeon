import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const UltraSoundGuideButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 p-1 bg-muted rounded-lg mt-10 w-full sm:w-auto">
        {/* Colposcopy Guide Button */}
        <Link
          to="/colposcopy"
          className="justify-center whitespace-nowrap text-[#d60d64] hover:bg-[#FF4B8B]/80 bg-[#FF4B8B]/10 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
          data-slot="button"
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
            className="lucide lucide-arrow-left w-4 h-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Colposcopy Guide
        </Link>

        {/* Ultrasound Guide Button */}
        <button
          data-slot="button"
          className="inline-flex items-center text-[#BB125B]  bg-[#FF4B8B]/50  justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&_svg]:px-2.5 pointer-events-none"
        >
          Ultrasound Guide
        </button>

        {/* Hysteroscopy Guide Button */}
        <Link
          to="/hysteroscopy"
          className="justify-center whitespace-nowrap text-[#d60d64] hover:bg-[#FF4B8B]/80 bg-[#FF4B8B]/10 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
          data-slot="button"
        >
          Hysteroscopy Guide
        </Link>
      </div>
    </div>
  );
};

export default UltraSoundGuideButtons;

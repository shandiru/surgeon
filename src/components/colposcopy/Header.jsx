import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const GuideButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-2 p-1 bg-muted rounded-lg">
        <button
          data-slot="button"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&_svg]:px-2.5 pointer-events-none"
        >
          Colposcopy Guide
        </button>
        <Link
          to="/ultrasound" // Adjust based on your routing setup
          className="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
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
        <Link
          to="/hysteroscopy" // Adjust based on your routing setup
          className="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
          data-slot="button"
        >
          Hysteroscopy Guide
        </Link>
      </div>
    </div>
  );
};

export default GuideButtons;

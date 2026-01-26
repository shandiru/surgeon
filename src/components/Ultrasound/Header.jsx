import React from "react";
import { Link } from "react-router-dom"; // If using react-router for navigation

const UltraSoundGuideButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-wrap gap-2 p-1 justify-center rounded-lg mt-10 w-full max-w-4xl">
        {/* Colposcopy Guide Button */}
        <Link
          to="/colposcopy"
          className="inline-flex text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
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
          className="inline-flex text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
        >
          Ultrasound Guide
        </button>

        {/* Hysteroscopy Guide Button */}
        <Link
          to="/hysteroscopy"
          className="inline-flex text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
          data-slot="button"
        >
          Hysteroscopy Guide
        </Link>
      </div>
    </div>
  );
};

export default UltraSoundGuideButtons;

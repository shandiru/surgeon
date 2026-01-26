import React from "react";
import { Link } from "react-router-dom"; // If using react-router for navigation

const HysteroscopyButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-wrap gap-2 p-1 justify-center rounded-lg mt-10 w-full max-w-4xl">
        {/* Colposcopy Guide Button */}
        <Link
          to="/colposcopy"
          className="inline-flex text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
          data-slot="button"
        >
          Colposcopy Guide
        </Link>

        {/* Ultrasound Guide Button */}
        <Link
          to="/ultrasound"
          data-slot="button"
          className="inline-flex text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 items-center justify-center whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md gap-1.5 px-3 w-full sm:w-auto"
        >
          Ultrasound Guide
        </Link>

        {/* Hysteroscopy Guide Button */}
        <button
          className="justify-center text-primary-pink hover:bg-light-pink-2 bg-light-pink-1 whitespace-nowrap text-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none h-8 rounded-md px-3 flex items-center gap-2 w-full sm:w-auto"
          data-slot="button"
        >
          Hysteroscopy Guide
        </button>
      </div>
    </div>
  );
};

export default HysteroscopyButtons;

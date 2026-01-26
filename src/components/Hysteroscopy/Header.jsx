import React from "react";
import { Link } from "react-router-dom"; // If using react-router for navigation

const HysteroscopyButtons = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 p-1 bg-muted rounded-lg mt-10 w-full sm:w-auto">
        {/* Colposcopy Guide Button */}
        <Link
          to="/colposcopy"
          className="justify-center whitespace-nowrap text-[#d60d64] hover:bg-[#FF4B8B]/80 bg-[#FF4B8B]/10 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
          data-slot="button"
        >
          Colposcopy Guide
        </Link>

        {/* Ultrasound Guide Button */}
        <Link
          to="/ultrasound"
          data-slot="button"
          className="inline-flex items-center text-black hover:bg-[#FF4B8B]/80 bg-[#FF4B8B]/10 justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&_svg]:px-2.5"
        >
          Ultrasound Guide
        </Link>

        {/* Hysteroscopy Guide Button */}
        <button
          className="justify-center whitespace-nowrap text-[#d60d64] bg-light-pink-2 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md px-3 has-[&_svg]:px-2.5 flex items-center gap-2"
          data-slot="button"
        >
          Hysteroscopy Guide
        </button>
      </div>
    </div>
  );
};

export default HysteroscopyButtons;

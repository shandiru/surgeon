import React from 'react';
import { Heart } from 'lucide-react'; // Importing the Heart icon from lucide-react

const PelvicHeader = () => {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-pink rounded-full">
            <Heart className="h-12 w-12 text-[#d60d64] " />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-hero text-primary-pink text-balance mb-4 text-foreground">
          Understanding Pelvic Pain
        </h1>

        {/* Description */}
        <p className="text-body-large text-[#d60d64] text-pretty max-w-2xl mx-auto">
          What it is, common causes, and when to get help
        </p>
      </div>
    </div>
  );
};

export default PelvicHeader;

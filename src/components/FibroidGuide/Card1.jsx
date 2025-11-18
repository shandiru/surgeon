'use client';
import { Lightbulb, Pin } from 'lucide-react';
import React from 'react';

const FibroidGuideCard1 = ({ setShowCard, setActiveButton }) => {
  const pink = "#FFC5D3"
  const deepPink = "#FF4B8B"
  
  return (
    <div className="space-y-6 pb-10">

      <div
        className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"

      >
        {/* Header */}
        <div className="px-8 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <Pin className="h-8 w-8" style={{ color: deepPink }} />
            <h2 className="font-bold text-3xl" style={{ color: deepPink }}>
              What Are Fibroids?
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Fibroids are benign (non-cancerous) growths that develop in the walls of the womb (uterus).
          </p>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-700">• Made of muscle and fibrous tissue</p>
              <p className="text-gray-700">• Can be single or multiple</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">• Can vary greatly in size</p>
              <p className="text-gray-700">• Common and treatable</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: pink }}
          >
            <p className="font-semibold text-base" style={{ color: deepPink }}>
              ✓ Fibroids are not cancer and rarely become cancerous.
            </p>
          </div>
         <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(2);
                setActiveButton(1);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FibroidGuideCard1;

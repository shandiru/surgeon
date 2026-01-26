"use client";
import { Lightbulb, Pin } from "lucide-react";
import React from "react";

const FibroidGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="px-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pin className="h-8 w-8 text-primary-pink" />
            <h2 className="font-bold text-3xl text-primary-pink">What Are Fibroids?</h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          <p className="text-lg leading-relaxed text-black">
            Fibroids are benign (non-cancerous) growths that develop in the walls of the womb
            (uterus).
          </p>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-black">• Made of muscle and fibrous tissue</p>
              <p className="text-black">• Can be single or multiple</p>
            </div>
            <div className="space-y-2">
              <p className="text-black">• Can vary greatly in size</p>
              <p className="text-black">• Common and treatable</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="rounded-lg p-5 bg-[#FF4B8B]/10">
            <p className="font-semibold text-base text-black">
              ✓ Fibroids are not cancer and rarely become cancerous.
            </p>
          </div>
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(2);
                setActiveButton(1);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
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

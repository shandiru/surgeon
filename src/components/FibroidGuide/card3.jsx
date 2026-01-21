'use client';
import { Microscope } from 'lucide-react';
import React from 'react';

const FibroidGuidecard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Microscope className="h-7 w-7 text-[#FF4B8B]" />
            <h2 className="font-bold text-3xl text-[#FF4B8B]">
              Types of Fibroids
            </h2>
          </div>
          <p className="text-gray-600 text-base">
            It's possible to have more than one type at the same time:
          </p>
        </div>

        {/* Grid of Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Submucosal */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-[#FF4B8B]/10">
            <h4 className="font-semibold mb-2 text-lg text-[#FF4B8B]">
              Submucosal fibroids
            </h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Grow under the lining of the womb (may grow on a stalk)
            </p>
          </div>

          {/* Intramural */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-[#FF4B8B]/10">
            <h4 className="font-semibold mb-2 text-lg text-[#FF4B8B]">
              Intramural fibroids
            </h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Grow within the wall of the womb (most common)
            </p>
          </div>

          {/* Subserosal */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-[#FF4B8B]/10">
            <h4 className="font-semibold mb-2 text-lg text-[#FF4B8B]">
              Subserosal fibroids
            </h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Grow on the outside wall of the womb (can press on nearby organs if large)
            </p>
          </div>

          {/* Pedunculated */}
          <div className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-[#FF4B8B]/10">
            <h4 className="font-semibold mb-2 text-lg text-[#FF4B8B]">
              Pedunculated fibroids
            </h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Grow on a stalk, either inside or outside the womb
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(4);
            setActiveButton(3);
          }}
          className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Continue to Next Section
        </button>
      </div>
    </div>
  );
};

export default FibroidGuidecard3;

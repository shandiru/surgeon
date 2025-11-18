'use client';
import React from 'react';

const PostcoitalBleedingGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
        <div className="max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl bg-white py-6 px-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-[#BB125B]">

          {/* Header */}
          <div className="border-b pb-6">
            <h2 className="font-semibold text-2xl text-[#FF4B8B]">Is It Painful?</h2>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Left Column */}
              <div>
                <span className="inline-flex items-center rounded-full bg-[#FEE6EA] text-[#FF4B8B] px-3 py-1 text-xs font-medium mb-2 shadow-sm">
                  Usually Painless
                </span>
                <p className="leading-relaxed">Postcoital bleeding is usually painless</p>
              </div>

              {/* Right Column */}
              <div>
                <span className="inline-flex items-center rounded-full bg-[#FF4B8B] text-white px-3 py-1 text-xs font-medium mb-2 shadow-sm">
                  Statistics
                </span>
                <p className="leading-relaxed">
                  Only about <strong>15%</strong> of women who experience it also report pain during sex
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <p className="text-sm text-[#6B7280]">
              About <strong>30%</strong> of women who bleed during sex also have other abnormal bleeding outside their period.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
      );
};

      export default PostcoitalBleedingGuideCard2;

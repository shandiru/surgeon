"use client";
import React from "react";

const PostmenopausalBleedingGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      {/* FULL OUTER WRAPPER */}
      <div className="max-w-4xl mx-auto px-6 py-10 rounded-2xl border border-primary-pink/20 shadow-md bg-white">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-pink">How Common Is It?</h2>
        </div>

        {/* MAIN CONTENT SECTION */}
        <div className="px-4">
          {/* STATS BOXES */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT BOX */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#FEE6EA] to-[#fff0f5] shadow-sm">
              <div className="text-4xl font-extrabold text-primary-pink mb-2">10%</div>
              <p className="text-sm text-[#6B7280]">of postmenopausal women experience bleeding</p>
            </div>

            {/* RIGHT BOX */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#FFE3EC] to-[#fff5f8] shadow-sm">
              <div className="text-4xl font-extrabold text-primary-pink mb-2">1 in 10</div>
              <p className="text-sm text-[#6B7280]">cases may be linked to cancer</p>
            </div>
          </div>

          {/* FOOTNOTE TEXT */}
          <p className="text-center mt-6 text-base text-[#6B7280] leading-relaxed">
            Most women are diagnosed with{" "}
            <span className="font-semibold text-black">non-cancerous conditions</span>, which is why{" "}
            <span className="font-semibold">prompt assessment</span> is essential.
          </p>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md 
                       text-sm font-medium transition-all h-10 px-4 
                       text-white w-[90%] md:w-[60%] lg:w-[40%] shadow"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard2;

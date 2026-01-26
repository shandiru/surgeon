"use client";
import React from "react";

const PostmenopausalBleedingGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-4xl mx-auto px-6 animate-in slide-in-from-right-5 duration-300">
        {/* FULL WRAPPER */}
        <div className="rounded-2xl p-8 border border-primary-pink/10 shadow-md bg-white hover:shadow-lg transition">
          {/* HEADER */}
          <div className="px-6 border-b border-[#FEE6EA] pb-5">
            <h2 className="font-bold flex items-center gap-2 text-xl sm:text-2xl text-primary-pink">
              Symptoms You Might Notice
            </h2>
          </div>

          {/* CONTENT */}
          <div className="px-6 mt-6">
            <p className="mb-4 text-sm text-[#6B7280]">
              Many women with postmenopausal bleeding have no other symptoms, but other symptoms may
              include:
            </p>

            <ul className="space-y-2 text-sm list-disc pl-5 text-[#374151]">
              <li>Vaginal dryness</li>
              <li>Decreased libido</li>
              <li>Insomnia</li>
              <li>Stress incontinence</li>
              <li>More frequent urinary tract infections</li>
              <li>Weight gain</li>
            </ul>

            <div
              role="alert"
              className="mt-6 rounded-lg bg-[#FFF0F5] px-4 py-3 text-xs text-black font-medium shadow-sm"
            >
              Hot flushes and other menopause symptoms often ease over time — but bleeding should
              never return.
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 pb-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard4;

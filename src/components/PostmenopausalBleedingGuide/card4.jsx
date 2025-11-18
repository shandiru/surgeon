"use client";
import React from "react";

const PostmenopausalBleedingGuideCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-4xl mx-auto px-6 animate-in slide-in-from-right-5 duration-300">

        {/* FULL WRAPPER */}
        <div
          className="rounded-2xl p-8 border shadow-md bg-white hover:shadow-lg transition"
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="px-6 border-b border-[#FEE6EA] pb-5">
            <h2 className="font-bold flex items-center gap-2 text-xl sm:text-2xl text-[#FF4B8B]">
              Symptoms You Might Notice
            </h2>
          </div>

          {/* CONTENT */}
          <div className="px-6 mt-6">
            <p className="mb-4 text-sm text-[#6B7280]">
              Many women with postmenopausal bleeding have no other symptoms, but other symptoms may include:
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
              className="mt-6 rounded-lg bg-[#FFF0F5] px-4 py-3 text-xs text-[#BB125B] font-medium shadow-sm"
            >
              Hot flushes and other menopause symptoms often ease over time — but bleeding should never return.
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
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] h-10 rounded-md 
                       text-sm font-medium transition-all px-4 shadow"
          >
            Continue to Next Section
          </button>
        </div>

      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard4;

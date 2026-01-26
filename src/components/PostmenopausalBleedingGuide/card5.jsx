"use client";
import React from "react";

const PostmenopausalBleedingGuideCard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-4xl mx-auto px-6 animate-in slide-in-from-right-5 duration-300">
        {/* FULL WRAPPER BOX */}
        <div
          className="rounded-2xl p-8 border shadow-md bg-white hover:shadow-lg transition"
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="px-6 border-b border-light-pink-1 pb-5 mb-6">
            <h2 className="font-bold flex items-center gap-2 text-xl sm:text-2xl text-primary-pink">
              Risk Factors
            </h2>
          </div>

          {/* CONTENT */}
          <div className="px-6">
            <p className="mb-4 text-sm text-black">
              Knowing your risk helps encourage early checks and peace of mind.
            </p>

            <ul className="space-y-2 text-sm list-disc pl-5 text-black">
              <li>Age over 55</li>
              <li>Family history of endometrial, ovarian or breast cancer</li>
              <li>Obesity</li>
              <li>Taking tamoxifen or hormone replacement therapy (HRT)</li>
              <li>Polycystic ovary syndrome (PCOS)</li>
              <li>Diabetes or high blood pressure</li>
            </ul>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
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

export default PostmenopausalBleedingGuideCard5;

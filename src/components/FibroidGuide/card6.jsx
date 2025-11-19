"use client";
import React from "react";

const FibroidGuidecard6 = ({ setShowCard, setActiveButton }) => {

  const pink = "#FFC5D3"
  const deepPink = "#FF4B8B"
  
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={deepPink}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <h2 className="font-bold text-2xl md:text-3xl" style={{ color: deepPink }}>
            Emotional Wellbeing
          </h2>
        </div>
        <p className="text-gray-700 text-base">
          Fibroids can affect more than just your body:
        </p>

        {/* Symptoms */}
        <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
          <p>• Tiredness or anaemia can lower energy</p>
          <p>• Pain and heavy bleeding can affect mood</p>
          <p>• Tummy swelling can impact confidence and body image</p>
        </div>

        {/* Highlight Box */}
        <div
          className="rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-200"
          style={{ backgroundColor: pink }}
        >
          <p className="font-medium text-center md:text-left" style={{ color: deepPink }}>
            It's okay to ask for emotional support or counselling — you're not alone.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="pt-8 flex justify-center">
        <button
          onClick={() => {
            setShowCard(7);
            setActiveButton(6);
          }}
          className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
        >
          Continue to Next Section
        </button>
      </div>
    </div>
  );
};

export default FibroidGuidecard6;

"use client";
import { Heart } from "lucide-react";
import React from "react";

const FibroidGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-3xl text-[#FF4B8B]" />
          <h2 className="font-bold text-2xl md:text-3xl text-[#FF4B8B]">
            Fertility & Pregnancy
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-[#FF4B8B]/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-200">
            <h4 className="font-semibold mb-3 text-lg text-[#FF4B8B]">
              Potential Challenges
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Can sometimes make it harder to get pregnant</li>
              <li>• May slightly increase risk of miscarriage</li>
              <li>• May increase risk of preterm birth</li>
            </ul>
          </div>

          {/* Positive Outlook */}
          <div className="bg-[#FF4B8B]/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-200">
            <h4 className="font-semibold mb-3 text-lg text-[#FF4B8B]">
              Positive Outlook
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Most women with fibroids can still have healthy pregnancies</li>
              <li>• Extra monitoring during pregnancy available</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= NEXT BUTTON ================= */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(6);
            setActiveButton(5);
          }}
          className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
        >
          Learn About Aftercare
        </button>
      </div>
    </div>
  );
};

export default FibroidGuidecard5;

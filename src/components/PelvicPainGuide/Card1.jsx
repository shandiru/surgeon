"use client";
import React from "react";
import { Info, CircleCheckBig } from "lucide-react";

const PelvicPainGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {/* MAIN CARD WRAPPER */}
      <div
        className="text-[#FF4B8B] bg-[#FF4B8B]/10 max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-6 rounded-xl py-6 shadow-sm 
        hover:z-50 transition-all duration-300 hover:bg-[#FF4B8B]/20 
        hover:shadow-lg hover:border-[#FF4B8B]/20 active:bg-[#FF4B8B]/20 
        active:shadow-lg active:border-[#FF4B8B]/20 hover:scale-105 active:scale-100 border border-[#FF4B8B]/10 p-6"
      >
        {/* HEADER */}
        <div className="grid auto-rows-min items-start gap-1.5 px-2">
          <div className="font-semibold flex items-center gap-3 text-2xl text-[#FF4B8B]">
            <Info className="h-6 w-6" />
            What Is Pelvic Pain?
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-2 space-y-4 text-black">
          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT TEXT SECTION */}
            <div className="space-y-4">
              <p className="leading-relaxed">
                Pelvic pain is felt in the lower abdomen between the belly button and groin. It can
                come from the reproductive organs, bladder, bowel, muscles, or connective tissue.
              </p>

              <p className="leading-relaxed">
                Pelvic pain is different from vaginal or vulval pain (which affects the external
                genitals).
              </p>
            </div>

            {/* KEY FACTS BOX */}
            <div className="bg-[#FF4B8B]/10 p-4 rounded-lg border border-[#FF4B8B]/10">
              <h4 className="font-semibold mb-2 text-[#FF4B8B]">Key Facts</h4>

              <ul className="space-y-2 text-sm text-black">
                {[
                  "Very common condition",
                  "Most causes are treatable",
                  "Can be acute or chronic",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CircleCheckBig className="h-4 w-4 text-[#FF4B8B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(2);
              setActiveButton(1);
            }}
            className="inline-flex items-center justify-center bg-[#FF4B8B] 
            hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all 
            h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainGuideCard1;

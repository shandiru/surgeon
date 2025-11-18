"use client";
import React from "react";
import { Brain } from "lucide-react";

const PelvicPainGuidecard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN CARD */}
        <div
          className="
            text-[#FF4B8B] bg-[#FF4B8B]/10 
            rounded-xl py-6 shadow-sm mb-10 flex flex-col gap-6
            transition-all duration-300
            hover:z-50 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd]
            active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]
            hover:scale-105 active:scale-100
          "
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="px-6 pb-4 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
            <div className="font-semibold flex items-center gap-3 text-2xl">
              <Brain className="h-6 w-6 text-[#FF4B8B]" />
              Emotional Wellbeing
            </div>
          </div>

          {/* BODY CONTENT */}
          <div className="px-6 space-y-4 text-[#7a2f4f]">

            <p className="leading-relaxed">
              Chronic pelvic pain can affect mood, energy, and relationships. It’s common to feel
              frustrated, anxious, or low.
            </p>

            <div className="bg-white/60 p-4 rounded-lg border shadow-sm" style={{ borderColor: "rgb(255,197,211)" }}>
              <p className="text-sm leading-relaxed">
                Talking to your doctor or asking for emotional support or counselling can help.
                <strong className="text-[#FF4B8B]">
                  {" "}
                  You don't have to “just live with it” — help is available.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="
              bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white 
              w-[90%] md:w-[60%] lg:w-[40%] 
              rounded-md h-10 text-sm font-medium 
              transition-all shadow-md hover:shadow-lg
            "
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default PelvicPainGuidecard6;

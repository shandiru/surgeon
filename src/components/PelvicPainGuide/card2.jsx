"use client";
import React from "react";
import { Target, Calendar, Activity, Zap, Clock } from "lucide-react";

const PelvicPainGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      {/* Main Card */}
      <div
        className="text-primary-pink bg-[#FF4B8B]/10 max-w-sm sm:max-w-2xl lg:max-w-5xl 
        mx-auto mb-10 flex flex-col gap-6 rounded-xl py-6 shadow-sm border
        hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg 
        hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] 
        hover:scale-105 active:scale-100 px-6"
        style={{ borderColor: "rgb(255,197,211)" }}
      >
        {/* Header */}
        <div className="grid auto-rows-min items-start gap-1.5 pb-4">
          <div
            className="font-semibold flex items-center gap-3 text-2xl"
            style={{ color: "#FF4B8B" }}
          >
            <Target className="h-6 w-6" />
            Types of Pelvic Pain
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* LEFT COLUMN */}
          <div className="space-y-3">
            {/* Cyclic Pain */}
            <div className="flex items-center gap-3 p-3 bg-[#FFE4EE] rounded-lg">
              <Calendar className="h-5 w-5 text-primary-pink" />
              <div>
                <h4 className="font-semibold text-primary-pink">Cyclic Pain</h4>
                <p className="text-sm text-[#7a2f4f]">Related to menstrual cycle</p>
              </div>
            </div>

            {/* Non-cyclic Pain */}
            <div className="flex items-center gap-3 p-3 bg-[#FFE4EE] rounded-lg">
              <Activity className="h-5 w-5 text-primary-pink" />
              <div>
                <h4 className="font-semibold text-primary-pink">Non-cyclic Pain</h4>
                <p className="text-sm text-[#7a2f4f]">Unrelated to periods</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3">
            {/* Sudden Acute Pain */}
            <div className="flex items-center gap-3 p-3 bg-[#FFE4EE] rounded-lg">
              <Zap className="h-5 w-5 text-primary-pink" />
              <div>
                <h4 className="font-semibold text-primary-pink">Sudden (Acute)</h4>
                <p className="text-sm text-[#7a2f4f]">Appears quickly, often severe</p>
              </div>
            </div>

            {/* Persistent Chronic Pain */}
            <div className="flex items-center gap-3 p-3 bg-[#FFE4EE] rounded-lg">
              <Clock className="h-5 w-5 text-primary-pink" />
              <div>
                <h4 className="font-semibold text-primary-pink">Persistent (Chronic)</h4>
                <p className="text-sm text-[#7a2f4f]">Lasts 3–6 months or more</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
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

export default PelvicPainGuideCard2;

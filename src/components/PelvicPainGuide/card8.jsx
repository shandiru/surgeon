"use client";
import React from "react";
import { Heart } from "lucide-react";

const PelvicPainGuidecard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10 px-3">
      <div className="max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* MAIN CARD */}
        <div
          className="
            text-primary-pink bg-light-pink
            max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl py-6 shadow-sm
            transition-all duration-300
            hover:z-50 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd]
            active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]
            hover:scale-105 active:scale-100
          "
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="px-6 pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Heart className="h-8 w-8 text-primary-pink" />
              </div>
              <h3 className="text-xl font-semibold text-primary-pink">Remember</h3>

              {/* POINTS */}
              <div className="space-y-2 text-black max-w-2xl mx-auto text-sm">
                <p>• Pelvic pain is common and usually treatable</p>
                <p>• Many causes are not serious, but some need prompt attention</p>
                <p>• Early assessment can bring relief and peace of mind</p>

                <p className="font-medium">
                  If pelvic pain is affecting your life, book an appointment — we're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DONE BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              setShowCard(9);
              setActiveButton(8);
            }}
            className="
              bg-primary-pink hover:bg-primary-pink/80 text-white
              w-[90%] md:w-[60%] lg:w-[40%]
              rounded-md h-10 text-sm font-medium transition-all shadow-md hover:shadow-lg
            "
          >
            Finish Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainGuidecard8;

"use client";
import React from "react";
import {
  Heart,
  Calendar,
  Activity,
  Target,
  Clock,
} from "lucide-react";

const PelvicPainGuidecard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className="max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN SELF-CARE CARD */}
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
          <div className="px-6 pt-6 text-center space-y-4">
            <div className="flex justify-center">
              <Heart className="h-8 w-8 text-[#FF4B8B]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#FF4B8B]">
              Self-Care Tips
            </h3>
          </div>

          {/* CONTENT GRID */}
          <div className="px-6 mt-6 grid md:grid-cols-2 gap-4 text-[#7a2f4f]">
            
            {/* LEFT COLUMN */}
            <div className="space-y-3">
              
              {/* Track your pain */}
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border" style={{ borderColor: "rgb(255,197,211)" }}>
                <Calendar className="h-5 w-5 text-[#FF4B8B] mt-1" />
                <div>
                  <h5 className="font-medium">Track your pain</h5>
                  <p className="text-sm">Note timing, triggers, and severity</p>
                </div>
              </div>

              {/* Heat therapy */}
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border" style={{ borderColor: "rgb(255,197,211)" }}>
                <Heart className="h-5 w-5 text-[#FF4B8B] mt-1" />
                <div>
                  <h5 className="font-medium">Use heat therapy</h5>
                  <p className="text-sm">Warm baths or hot water bottles for cramps</p>
                </div>
              </div>

              {/* Gentle exercise */}
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border" style={{ borderColor: "rgb(255,197,211)" }}>
                <Activity className="h-5 w-5 text-[#FF4B8B] mt-1" />
                <div>
                  <h5 className="font-medium">Gentle exercise</h5>
                  <p className="text-sm">Relaxation and stress management</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              
              {/* Balanced diet */}
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border" style={{ borderColor: "rgb(255,197,211)" }}>
                <Target className="h-5 w-5 text-[#FF4B8B] mt-1" />
                <div>
                  <h5 className="font-medium">Balanced diet</h5>
                  <p className="text-sm">Eat well and drink plenty of water</p>
                </div>
              </div>

              {/* Rest when needed */}
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border" style={{ borderColor: "rgb(255,197,211)" }}>
                <Clock className="h-5 w-5 text-[#FF4B8B] mt-1" />
                <div>
                  <h5 className="font-medium">Rest when needed</h5>
                  <p className="text-sm">Take breaks when pain flares up</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
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

export default PelvicPainGuidecard7;

"use client";
import React from "react";
import { FaRegClock, FaHeartbeat } from "react-icons/fa";
import { PiDropFill } from "react-icons/pi";
import { BsCheckCircle } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const MenstrualDisordersGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-5xl mx-auto p-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-2 text-primary-pink">
          <FiCalendar className="text-primary-pink text-2xl" />
          What's a Normal Menstrual Cycle?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-[#fdecef] to-[#fff5f9] 
                             shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                             transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaRegClock className="text-[#e91e63] text-xl" />
              <h3 className="text-lg font-semibold text-[#3c0c0c]">Cycle Length</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-[#e91e63]">21–35</p>
            <p className="text-sm text-[#3c0c0c]">days between periods</p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-[#fdecef] to-[#fff5f9] 
                             shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                             transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaHeartbeat className="text-[#e91e63] text-xl" />
              <h3 className="text-lg font-semibold text-[#3c0c0c]">Period Duration</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-[#e91e63]">2–7</p>
            <p className="text-sm text-[#3c0c0c]">days of bleeding</p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-[#fdecef] to-[#fff5f9] 
                             shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                             transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <PiDropFill className="text-[#e91e63] text-xl" />
              <h3 className="text-lg font-semibold text-[#3c0c0c]">Blood Loss</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-[#e91e63]">30–80ml</p>
            <p className="text-sm text-[#3c0c0c]">3–8 soaked pads/tampons per day</p>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className="rounded-xl p-5 flex items-start gap-3 text-sm 
                           bg-gradient-to-r from-[#fdecef] to-[#fff5f9] 
                           shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95
                           transition-all duration-300"
        >
          <BsCheckCircle className="mt-0.5 text-[#e91e63] text-lg" />
          <p className="text-[#900c3f]">
            What’s “normal” is what’s normal for you — sudden changes are worth checking with your
            healthcare provider.
          </p>
        </div>
        {/* Next Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Learn About the Procedure
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenstrualDisordersGuideCard2;

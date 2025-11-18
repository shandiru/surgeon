"use client";
import React from "react";

const PostcoitalBleedingGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl bg-white py-6 shadow-md hover:shadow-lg transition-shadow">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 border-b border-[#FEE6EA] pb-6">
          <div className="font-semibold flex items-center gap-2 text-2xl text-[#FF4B8B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF4B8B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            What to Track Before Your Appointment
          </div>
          <div className="text-sm text-[#6B7280]">
            Bring this info with you — it can help your doctor find the cause quickly
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2"></span>
                When the bleeding happens (timing and cycle day)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2"></span>
                How much blood (light spots or heavier flow)
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2"></span>
                If there's pain during or after sex
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2"></span>
                Any other symptoms (discharge, odour, pelvic pain, fever)
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ================= NEXT BUTTON ================= */}
      <div className=" flex justify-center">
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

export default PostcoitalBleedingGuidecard5;

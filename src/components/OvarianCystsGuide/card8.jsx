"use client";
import React from "react";

const OvarianCystsGuideCard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* ================= MAIN CARD ================= */}
        <div className="flex flex-col gap-6 rounded-xl bg-white text-[#BB125B] border border-primary-pink shadow-lg hover:shadow-xl transition-all duration-300 py-6 px-6 sm:px-8">
          {/* HEADER */}
          <div className="flex items-center gap-3 text-xl font-semibold text-primary-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#FF4B8B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
            Surgery to Remove Ovarian Cysts
          </div>

          {/* TOP HIGHLIGHT BOX */}
          <div className="mb-6 p-4 rounded-lg bg-[#FEE6EA] shadow-sm">
            <p className="font-medium">
              Surgery is only needed if the cyst is large, painful, persistent, or possibly cancerous.
            </p>
          </div>

          {/* ================= TWO SURGERY CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Laparoscopy */}
            <div
              className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
              style={{ border: "1px solid rgb(255,197,211)" }}
            >
              <h4 className="font-semibold mb-2 text-[#BB125B]">Laparoscopy</h4>
              <p className="text-sm mb-3 text-[#555]">Keyhole surgery using small cuts</p>
              <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-[#FF4B8B1A] text-primary-pink">
                Often used for smaller, benign cysts
              </span>
            </div>

            {/* Laparotomy */}
            <div className="bg-white rounded-lg p-5 border border-primary-pink shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold mb-2 text-[#BB125B]">Laparotomy</h4>
              <p className="text-sm mb-3 text-[#555]">
                Open surgery through a larger cut in the abdomen
              </p>
              <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-[#FEE6EA] text-[#BB125B]">
                Used for larger or possibly cancerous cysts
              </span>
            </div>

          </div>

          {/* ================= NEXT BUTTON ================= */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(9);
                setActiveButton(8);
              }}
              className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
            >
              Complete Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCystsGuideCard8;

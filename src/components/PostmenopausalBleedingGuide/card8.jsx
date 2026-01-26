"use client";
import React from "react";

const PostmenopausalBleedingGuideCard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-10 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* ====================================================
            TWO GRADIENT CARDS (YOUR PROVIDED CONTENT)
        ===================================================== */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ---------------- CARD 1 ---------------- */}
          <div
            className="bg-gradient-to-br from-[#FFF7FA] to-[#FEE6EA] 
                       text-[#1F2937] flex flex-col gap-6 rounded-2xl 
                       py-8 shadow-md hover:shadow-lg transition border"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            {/* Header */}
            <div className="px-8 pb-5 border-b border-[#FFD6E5]">
              <div className="flex items-center gap-3 text-2xl font-bold text-primary-pink">
                Emotional Wellbeing
              </div>
            </div>

            {/* Content */}
            <div className="px-8 space-y-3 text-base text-[#4B5563] leading-relaxed">
              <p>• Postmenopausal bleeding can cause worry or fear of cancer</p>
              <p>• Most causes are not serious</p>
              <p>• Getting checked quickly can bring peace of mind and prompt treatment</p>
              <p>• It's okay to bring a friend or ask for a chaperone at your appointment</p>
            </div>
          </div>

          {/* ---------------- CARD 2 ---------------- */}
          <div
            className="bg-gradient-to-br from-[#FFF7FA] to-[#FEE6EA] 
                       text-[#1F2937] flex flex-col gap-6 rounded-2xl 
                       py-8 shadow-md hover:shadow-lg transition border"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            {/* Header */}
            <div className="px-8 pb-5 border-b border-[#FFD6E5]">
              <div className="flex items-center gap-3 text-2xl font-bold text-primary-pink">
                Follow-Up & Support
              </div>
            </div>

            {/* Content */}
            <div className="px-8 space-y-3 text-base text-[#4B5563] leading-relaxed">
              <p>• Most women get a clear answer within a few weeks</p>
              <p>• If needed, your doctor will create a treatment plan and follow-up schedule</p>
              <p>• You are not alone — support is available every step of the way</p>
            </div>
          </div>
        </div>

        {/* ====================================================
            NEXT BUTTON
        ===================================================== */}
        <div className="pt-8 flex justify-center">
          <button
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white 
               w-[90%] md:w-[60%] lg:w-[40%] rounded-md 
               h-10 text-sm font-medium transition-all shadow"
          >
            Complete Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard8;

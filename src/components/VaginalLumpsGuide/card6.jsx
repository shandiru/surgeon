"use client";
import React from "react";
import {
  TrendingUp,
  ShieldAlert,
  Clock,
  Phone,
  CircleAlert,
} from "lucide-react";

const VaginalLumpsGuidecard6 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgb(255,197,211)" }}
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <CircleAlert className="w-7 h-7 text-[#FF4B8B]" />
            When to Seek Urgent Help
          </h2>
          <p className="text-lg" style={{ color: "#7a2f4f" }}>
            Get medical advice quickly if you notice any of these warning signs
          </p>
        </div>

        {/* URGENT HELP GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* 1. Rapidly growing lump */}
          <div
            className="bg-white flex flex-col gap-4 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            style={{ border: "1px solid rgb(255,197,211)" }}
          >
            <div className="flex items-center gap-3 px-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgb(255,197,211)" }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: "#FF4B8B" }} />
              </div>

              <div className="font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                Rapidly growing lump
              </div>
            </div>

            <div className="px-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                Any lump that increases in size quickly over days or weeks.
              </p>
            </div>
          </div>

          {/* 2. Severe pain, fever or spreading redness */}
          <div
            className="bg-white flex flex-col gap-4 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            style={{ border: "1px solid rgb(255,197,211)" }}
          >
            <div className="flex items-center gap-3 px-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgb(255,197,211)" }}
              >
                <ShieldAlert className="w-6 h-6" style={{ color: "#FF4B8B" }} />
              </div>

              <div className="font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                Severe pain, fever or spreading redness
              </div>
            </div>

            <div className="px-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                Signs of serious infection that need immediate treatment.
              </p>
            </div>
          </div>

          {/* 3. Bleeding that won't stop */}
          <div
            className="bg-white flex flex-col gap-4 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            style={{ border: "1px solid rgb(255,197,211)" }}
          >
            <div className="flex items-center gap-3 px-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgb(255,197,211)" }}
              >
                <ShieldAlert className="w-6 h-6" style={{ color: "#FF4B8B" }} />
              </div>

              <div className="font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                Bleeding that won't stop
              </div>
            </div>

            <div className="px-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                Persistent or heavy bleeding from the affected area.
              </p>
            </div>
          </div>

          {/* 4. Lumps appearing after menopause */}
          <div
            className="bg-white flex flex-col gap-4 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            style={{ border: "1px solid rgb(255,197,211)" }}
          >
            <div className="flex items-center gap-3 px-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgb(255,197,211)" }}
              >
                <Clock className="w-6 h-6" style={{ color: "#FF4B8B" }} />
              </div>

              <div className="font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                Lumps appearing after menopause
              </div>
            </div>

            <div className="px-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                New lumps in post-menopausal women require prompt evaluation.
              </p>
            </div>
          </div>

        </div>

        {/* EMERGENCY BOX */}
        <div
          className="rounded-lg p-6 shadow-sm"
          style={{ backgroundColor: "rgb(255,197,211)" }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">

            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" style={{ color: "#FF4B8B" }} />
              <div>
                <h3 className="font-semibold" style={{ color: "#FF4B8B" }}>
                  Need Immediate Help?
                </h3>
                <p className="text-sm text-gray-800">
                  Don’t wait if you're experiencing urgent symptoms.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition shadow-sm h-9 px-4 py-2"
                style={{ backgroundColor: "#FF4B8B", color: "white" }}
              >
                Call Emergency Services
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition shadow-sm h-9 px-4 border"
                style={{
                  borderColor: "#FF4B8B",
                  color: "#FF4B8B",
                  background: "white",
                }}
              >
                Find Urgent Care
              </button>
            </div>

          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Continue to Final Section
          </button>
        </div>

      </div>
    </div>
  );
};

export default VaginalLumpsGuidecard6;

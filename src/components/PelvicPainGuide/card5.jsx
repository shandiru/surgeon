"use client";
import { Stethoscope, CircleCheck } from "lucide-react";
import React from "react";

const PelvicPainGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-12">
      <div className="max-w-5xl mx-auto px-4 animate-in slide-in-from-right-5 duration-300">

        {/* MAIN CARD */}
        <div
          className="rounded-2xl shadow-md border overflow-hidden 
          bg-gradient-to-b from-[#FFF5F8] to-white
          transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="px-8 py-6 border-b" style={{ borderColor: "rgb(255,197,211)" }}>
            <div className="flex items-center gap-3 text-primary-pink">
              <Stethoscope className="w-7 h-7" />
              <h2 className="text-2xl font-bold tracking-tight">
                How Pelvic Pain Is Investigated
              </h2>
            </div>
            <p className="text-[#7a2f4f] mt-2 leading-relaxed">
              Your doctor will assess your symptoms carefully using a combination of
              history-taking, examinations, and tests.
            </p>
          </div>

          {/* CONTENT AREA */}
          <div className="px-8 py-6 space-y-6">

            {/* SECTION TITLE */}
            <h3 className="text-lg font-semibold text-[#7a2f4f]">
              Your doctor may:
            </h3>

            {/* TWO COLUMN GRID */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* LEFT COLUMN */}
              <div className="space-y-4">

                {/* ITEM 1 */}
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border bg-white 
                  shadow-sm hover:bg-[#FFF1F6] transition-all"
                  style={{ borderColor: "rgb(255,197,211)" }}
                >
                  <CircleCheck className="text-primary-pink w-5 h-5" />
                  <span className="text-sm text-[#7a2f4f]">
                    Take a full medical history
                  </span>
                </div>

                {/* ITEM 2 */}
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border bg-white 
                  shadow-sm hover:bg-[#FFF1F6] transition-all"
                  style={{ borderColor: "rgb(255,197,211)" }}
                >
                  <CircleCheck className="text-primary-pink w-5 h-5" />
                  <span className="text-sm text-[#7a2f4f]">
                    Perform a pelvic examination
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4">
                <h4 className="font-semibold text-[#7a2f4f]">
                  Possible Tests:
                </h4>

                <ul className="space-y-2 text-sm text-[#7a2f4f] leading-relaxed">
                  <li>• Blood or urine tests</li>
                  <li>• Swabs for infections (STIs)</li>
                  <li>• Ultrasound or MRI scan</li>
                  <li>• Laparoscopy (keyhole surgery)</li>
                </ul>
              </div>
            </div>

            {/* INFO BOX */}
            <div
              className="mt-2 p-4 rounded-xl bg-[#FFF1F6] border shadow-sm"
              style={{ borderColor: "rgb(255,197,211)" }}
            >
              <p className="text-sm text-[#7a2f4f] italic">
                Identifying the cause early helps your healthcare provider create
                the most effective treatment plan for you.
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="bg-primary-pink hover:bg-[#e93d78] text-white 
            w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium 
            transition-all h-11 shadow-md hover:shadow-lg"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainGuidecard5;

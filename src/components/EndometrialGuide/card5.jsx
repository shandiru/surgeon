"use client";
import { Target, Stethoscope, Microscope, Scan, Camera, Activity } from "lucide-react";
import React, { useState } from "react";
import { LuStethoscope } from "react-icons/lu";

const EndometrialGuideCard5 = ({ setShowCard, setActiveButton }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <div className="px-3">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-6" data-aos="fade-left">
          <LuStethoscope className="h-8 w-8" style={{ color: deepPink }} />
          <h2 className="text-3xl font-bold" style={{ color: deepPink }}>
            Diagnosis of Endometrial Cancer
          </h2>
        </div>

        {/* Card Box */}
        <div
          className="bg-white text-gray-900 flex flex-col gap-6 rounded-2xl shadow-sm mb-6 
                           transition-all duration-300 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
          data-aos="fade-up"
        >
          {/* Card Header */}
          <div className="px-6 grid gap-1.5">
            <div className="font-semibold text-xl" style={{ color: deepPink }}>
              Diagnostic Process
            </div>
            <div className="text-sm text-black">
              Because symptoms may be similar to other conditions, a thorough evaluation is
              essential.
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-3" style={{ color: deepPink }}>
                Diagnostic steps may include:
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3" data-aos="fade-left">
                  {[
                    "Medical & family history review",
                    "Physical exam – checking for lumps or masses in the abdomen",
                    "Pelvic exam & Pap smear",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold bg-white"
                        style={{ color: deepPink }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-3" data-aos="fade-left">
                  {[
                    "Transvaginal ultrasound – imaging of the uterus and reproductive organs",
                    "Endometrial biopsy – taking a tissue sample from the uterus for examination",
                    "Dilation & Curettage (D&C) – removing part of the uterine lining for analysis",
                  ].map((item, i) => (
                    <div key={i + 3} className="flex items-start gap-3">
                      <span
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold bg-white"
                        style={{ borderColor: pink, color: deepPink }}
                      >
                        {i + 4}
                      </span>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stage Info Box */}
          <div
            className="mt-4 mx-6 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            style={{ border: `1px solid ${pink}`, backgroundColor: "#fff" }}
            data-aos="fade-up"
          >
            <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
              If cancer is confirmed:
            </h4>
            <p className="text-sm text-black mb-2">
              Your doctor will assign a cancer stage, which describes:
            </p>
            <ul className="text-sm space-y-1 list-disc ml-6 text-gray-700">
              <li>How far the cancer has spread (metastasis)</li>
              <li>Tumor size and aggressiveness</li>
              <li>Grading system (letters and numbers) to classify severity</li>
            </ul>
          </div>

          {/* Key Point Box */}
          <div
            className="mt-4 mx-6 p-4 rounded-lg"
            style={{ backgroundColor: pink, border: `1px solid ${pink}` }}
            data-aos="fade-up"
          >
            <p className="text-sm font-medium" style={{ color: deepPink }}>
              <strong>Key Point:</strong> Early detection significantly improves treatment success.
            </p>
          </div>
          {/* Button */}
          <div className="p-6 mx-2">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Continue to Treatment Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndometrialGuideCard5;

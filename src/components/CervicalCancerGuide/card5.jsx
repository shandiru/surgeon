"use client";
import { Target, Stethoscope, Microscope, Scan, Camera, Activity } from "lucide-react";
import React, { useState } from "react";

const VulvarGuidecard5 = ({ setShowCard, setActiveButton }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Step 2 — Getting Diagnosed
          </div>
          <p className="text-muted-foreground text-sm">
            Diagnosis usually begins with an exam, followed by tests that help confirm what’s happening.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 space-y-4">

          {/* Intro Box */}
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
            <p className="leading-relaxed">
              Your doctor may use several methods to check the vulva and surrounding organs. 
              These steps help identify any abnormal areas and confirm the cause.
            </p>
          </div>

          {/* Two-column Layout */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Pelvic Exam */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Pelvic Exam
              </h4>
              <p className="text-sm">
                Your doctor checks the vulva, vagina, uterus, ovaries, bladder, and rectum for any
                lumps, skin changes, or abnormalities.
              </p>
            </div>

            {/* Biopsy */}
            <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Biopsy
              </h4>
              <p className="text-sm">
                A small piece of tissue is removed from the vulva and tested for cancerous or
                precancerous cells.
              </p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="space-y-3">
            <h4 className="font-semibold">Diagnostic Tests Explained</h4>

            {[
              { title: "Colposcopy", icon: <Camera className="w-5 h-5 text-accent" />, content: "A magnifying device is used to closely examine the vulva. It does not go inside your body." },
              { title: "Chest X-ray", icon: <Activity className="w-5 h-5 text-accent" />, content: "Checks if cancer has spread to the lungs (rare in early stages)." },
              { title: "CT or PET-CT Scan", icon: <Scan className="w-5 h-5 text-accent" />, content: "Detailed images help detect spread to lymph nodes or organs." },
              { title: "MRI", icon: <Scan className="w-5 h-5 text-accent" />, content: "Provides detailed images of soft tissue for accurate mapping of tumour extent." },
              { title: "Endoscopy (if needed)", icon: <Scan className="w-5 h-5 text-accent" />, content: "Used when symptoms suggest involvement of lower bowel or bladder." },
            ].map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle(index)}
                    aria-expanded={activeAccordion === index}
                    className="flex flex-1 items-start justify-between gap-4 py-4 text-sm font-medium hover:underline outline-none"
                  >
                    <span className="flex items-center gap-2">{item.icon} {item.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${activeAccordion === index ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>

                {activeAccordion === index && (
                  <div className="overflow-hidden text-sm">
                    <p className="p-4">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Point Box */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#FF4B8B]" />
              Key Point
            </h4>
            <p className="text-sm">
              Early diagnosis helps determine the most effective treatment and improves outcomes.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full"
            >
              Learn About Aftercare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VulvarGuidecard5;

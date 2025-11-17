'use client';
import { Target, Stethoscope, Microscope, Scan, Camera, Activity } from "lucide-react";
import React, { useState } from "react";

const EndometrialGuideCard5 = ({ setShowCard, setActiveButton }) => {
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
            Step 3 — Diagnosis of Endometrial Cancer
          </div>
          <p className="text-muted-foreground text-sm">
            Early diagnosis is crucial. A thorough evaluation helps confirm the presence and stage of endometrial cancer.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 space-y-4">

          {/* Intro Box */}
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
            <p className="leading-relaxed">
              Because symptoms may resemble other conditions, your doctor will perform several tests to determine if endometrial cancer is present.
            </p>
          </div>

          {/* Two-column Layout */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Medical & Physical Exam */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Medical & Physical Exam
              </h4>
              <p className="text-sm">
                Review of your medical and family history, followed by a physical exam to check for lumps or tenderness in the abdomen.
              </p>
            </div>

            {/* Endometrial Biopsy */}
            <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Endometrial Biopsy
              </h4>
              <p className="text-sm">
                A small tissue sample is taken from the uterus lining and examined for abnormal or cancerous cells.
              </p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="space-y-3">
            <h4 className="font-semibold">Diagnostic Tests Explained</h4>

            {[
              { title: "Transvaginal Ultrasound", icon: <Scan className="w-5 h-5 text-accent" />, content: "Uses sound waves to create images of the uterus and endometrium, helping detect thickened lining or abnormalities." },
              { title: "Dilation & Curettage (D&C)", icon: <Microscope className="w-5 h-5 text-accent" />, content: "Removes a portion of the uterine lining for detailed examination." },
              { title: "Pap Smear", icon: <Camera className="w-5 h-5 text-accent" />, content: "Helps screen for abnormal cells in the cervix, which can sometimes indicate endometrial changes." },
              { title: "CT or MRI Scan", icon: <Scan className="w-5 h-5 text-accent" />, content: "Advanced imaging to evaluate tumor size and detect possible spread to lymph nodes or nearby organs." },
              { title: "Genetic/Familial Testing", icon: <Activity className="w-5 h-5 text-accent" />, content: "Used if there's a family history of Lynch syndrome or other hereditary cancer syndromes." },
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
              Once diagnosed, your doctor will determine the cancer stage, tumor size, and grade. Early detection significantly improves treatment success.
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
              Continue to Treatment Options
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EndometrialGuideCard5;

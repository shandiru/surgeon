"use client";
import { useState } from "react";
import {
  Target,
  Stethoscope,
  Microscope,
  Scan,
  Camera,
  Activity
} from "lucide-react";
import React from "react";

const OvarianCancerGuidecard5 = ({ setShowCard, setActiveButton }) => {
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
            Diagnosis often involves scans, blood tests, and examining ovarian tissue.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 space-y-4">

          {/* Intro Box */}
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
            <p className="leading-relaxed">
              Ovarian cancer can be difficult to detect early. Doctors use a combination of imaging,
              blood tests, and sometimes surgery to confirm diagnosis and check if cancer has spread.
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
                Your doctor feels the uterus, ovaries, and abdomen to check for swelling,
                lumps, or tenderness.
              </p>
            </div>

            {/* Biopsy */}
            <div className="p-4 bg-accent/10 rounded-lg border hover:bg-[#fce3e8] transition-all duration-300 hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Biopsy or Laparoscopy
              </h4>
              <p className="text-sm">
                A sample of tissue may be taken, often through laparoscopy, to confirm whether
                cancer is present.
              </p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="space-y-3">
            <h4 className="font-semibold">Diagnostic Tests Explained</h4>

            {[
              {
                title: "Ultrasound Scan",
                icon: <Camera className="w-5 h-5 text-accent" />,
                content:
                  "Usually the first imaging test. A transvaginal or abdominal ultrasound checks the ovaries for cysts, tumours, or abnormal swelling."
              },
              {
                title: "CT Scan",
                icon: <Scan className="w-5 h-5 text-accent" />,
                content:
                  "Provides detailed images showing the size of ovarian masses and whether cancer has spread to other organs."
              },
              {
                title: "X-ray",
                icon: <Activity className="w-5 h-5 text-accent" />,
                content:
                  "Rarely used alone, but can check if cancer has spread to the chest area."
              },
              {
                title: "Blood Test (CA-125)",
                icon: <Activity className="w-5 h-5 text-accent" />,
                content:
                  "Measures CA-125, a protein that is often higher in ovarian cancer. Not a perfect test, but very useful alongside scans."
              },
              {
                title: "Laparoscopy",
                icon: <Camera className="w-5 h-5 text-accent" />,
                content:
                  "A tiny camera is inserted into the abdomen. Allows direct examination of the ovaries and biopsy of suspicious areas."
              }
            ].map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle(index)}
                    aria-expanded={activeAccordion === index}
                    className="flex flex-1 items-start justify-between gap-4 py-4 text-sm font-medium hover:underline outline-none"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon} {item.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
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
              These tests help confirm whether ovarian cancer is present and show how far it
              may have spread, guiding the best treatment plan.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full text-white"
            >
              Continue to Treatment Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard5;

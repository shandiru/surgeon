"use client";
import React, { useState } from "react";
import {
  Heart,
  Activity,
  CircleCheck,
  AlertTriangle,
  ChevronDown,
  Target,
  Stethoscope,
} from "lucide-react";

const PelvicPainAccordion = () => {
  const [openSection, setOpenSection] = useState("gynaecological"); // Default open

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="space-y-6 bg-gradient-to-b from-primary/5 to-background py-8 px-4">
      <div
        className="text-primary-pink bg-light-pink max-w-5xl mx-auto mb-10 
        rounded-xl p-6 transition-all duration-300 border
        hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] hover:scale-105"
        style={{ borderColor: "rgb(255,197,211)" }}
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="text-3xl font-semibold flex gap-3 items-center text-left">
            <Stethoscope className="h-8 w-8 mt-1 text-primary-pink" />
            Common Causes of Pelvic Pain
          </div>
        </div>

        {/* -------------------------------------- */}
        {/* 🩷 1. Gynaecological Causes */}
        {/* -------------------------------------- */}
        <div
          className="cursor-pointer p-4 bg-light-pink rounded-md flex justify-between items-center"
          onClick={() => handleToggle("gynaecological")}
        >
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary-pink" />
            <span>Gynaecological Causes</span>
          </div>

          <ChevronDown
            className={`h-5 w-5 text-primary-pink transform transition-all ml-auto ${
              openSection === "gynaecological" ? "rotate-180" : ""
            }`}
          />
        </div>

        {openSection === "gynaecological" && (
          <div className="space-y-4 mt-4 px-6 text-sm text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CircleCheck className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Menstrual cramps</strong> <br />
                  Common before or during periods
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Activity className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Ovulation pain (mittelschmerz)</strong> <br />
                  Sharp pain mid-cycle on one side
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheck className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Endometriosis</strong> <br />
                  Womb lining tissue grows outside the uterus
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheck className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Pelvic inflammatory disease (PID)</strong> <br />
                  Infection of womb and surrounding tissues
                </span>
              </li>

              <li className="flex items-start gap-2 text-red-500">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-1" />
                <span>
                  <strong>Ectopic pregnancy</strong> <br />
                  Pregnancy outside the womb (medical emergency)
                </span>
              </li>
            </ul>
          </div>
        )}

        <hr className="text-gray-300 mt-4" />

        {/* -------------------------------------- */}
        {/* 💧 2. Urinary Causes */}
        {/* -------------------------------------- */}
        <div
          className="cursor-pointer p-4 rounded-md flex justify-between items-center mt-4"
          onClick={() => handleToggle("urinary")}
        >
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-primary-pink" />
            <span>Urinary Causes</span>
          </div>

          <ChevronDown
            className={`h-5 w-5 text-primary-pink transform transition-all ml-auto ${
              openSection === "urinary" ? "rotate-180" : ""
            }`}
          />
        </div>

        {openSection === "urinary" && (
          <div className="space-y-4 mt-4 px-6 text-sm text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CircleCheck className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Cystitis / UTI</strong> <br />
                  Bladder infection or urinary tract infection
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Activity className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Interstitial cystitis</strong> <br />
                  Long-term bladder inflammation without clear cause
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Activity className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Urinary stones</strong> <br />
                  Crystals forming in kidneys or bladder
                </span>
              </li>
            </ul>
          </div>
        )}

        <hr className="text-gray-300 mt-4" />

        {/* -------------------------------------- */}
        {/* 🥗 3. Digestive Causes */}
        {/* -------------------------------------- */}
        <div
          className="cursor-pointer p-4 bg-light-pink rounded-md flex justify-between items-center mt-4"
          onClick={() => handleToggle("digestive")}
        >
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-primary-pink" />
            <span>Digestive Causes</span>
          </div>

          <ChevronDown
            className={`h-5 w-5 text-primary-pink transform transition-all ml-auto ${
              openSection === "digestive" ? "rotate-180" : ""
            }`}
          />
        </div>

        {openSection === "digestive" && (
          <div className="space-y-4 mt-4 px-6 text-sm text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CircleCheck className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Irritable bowel syndrome (IBS)</strong> <br />
                  Pain, bloating, constipation or diarrhoea
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Activity className="h-4 w-4 text-primary-pink mt-1" />
                <span>
                  <strong>Appendicitis</strong> <br />
                  Sudden pain in the lower right abdomen
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PelvicPainAccordion;

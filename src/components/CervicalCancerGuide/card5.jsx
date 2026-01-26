"use client";
import {
  Stethoscope,
  Microscope,
  Camera,
  Activity,
  ClipboardCheck,
  Scan,
} from "lucide-react";
import React from "react";

const CervicalCancerGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* MAIN WRAPPER */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300 bg-white border-light-pink-2"
      >
        {/* HEADER */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide text-primary-pink"
          >
            Step 2
          </span>

          <h2
            className="text-3xl font-bold mt-2 text-primary-pink"
          >
            How Is Cervical Cancer Diagnosed?
          </h2>

          <p className="text-lg mt-2 text-black">
            If a Pap test shows abnormal results, your doctor may recommend
            further tests to confirm abnormalities.
          </p>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-primary-pink">
          Common Diagnostic Methods:
        </h3>

        {/* ================ STEPS GRID ================= */}
        <div className="space-y-4 mt-6">

          {/* 1 Repeat Pap Smear */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 border-light-pink-2"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 bg-primary-pink text-white"
            >
              <ClipboardCheck className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2 text-primary-pink"
              >
                Repeat Pap Smear or Liquid-Based Cytology
              </h4>
              <p className="text-black">
                Done to confirm abnormal cells found in the initial Pap test.
              </p>
            </div>
          </div>

          {/* 2 Biopsy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 border-light-pink-2"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 bg-primary-pink text-white"
            >
              <Microscope className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2 text-primary-pink"
              >
                Biopsy
              </h4>
              <p className="text-black">
                A small tissue sample is examined under a microscope to check
                for cancer cells.
              </p>
            </div>
          </div>

          {/* 3 Colposcopy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 border-light-pink-2"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 bg-primary-pink text-white"
            >
              <Camera className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2 text-primary-pink"
              >
                Colposcopy
              </h4>
              <p className="text-black">
                A magnifying instrument is used to examine the cervix closely.
                A biopsy may also be taken.
              </p>
            </div>
          </div>

          {/* 4 Endo-cervical Curettage */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 border-light-pink-2"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 bg-primary-pink text-white"
            >
              <Activity className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2 text-primary-pink"
              >
                Endo-Cervical Curettage
              </h4>
              <p className="text-black">
                Tissue is taken from the cervical canal using a small
                spoon-shaped tool to check for abnormalities.
              </p>
            </div>
          </div>

          {/* 5 Cone Biopsy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg active:bg-light-pink-1 border-light-pink-2"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 bg-primary-pink text-white"
            >
              <Scan className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2 text-primary-pink"
              >
                Cone Biopsy
              </h4>
              <p className="text-black">
                A larger cone-shaped tissue sample is removed to confirm
                diagnosis or remove precancerous cells.
              </p>
            </div>
          </div>
        </div>

        {/* ================= IMAGING TESTS ================= */}
        <hr className="my-6 border-pink-200" />
        <h3 className="font-semibold text-lg mb-2 text-primary-pink">
          Additional Imaging Tests
        </h3>

        <p className="text-sm mb-4 text-black">
          If doctors suspect the cancer has spread, they may recommend:
        </p>

        <div className="flex flex-wrap gap-3">
          {["X-rays", "CT scans", "MRI"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-md text-sm font-medium bg-light-pink-2 text-black border border-light-pink-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ================= NEXT BUTTON ================= */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
          >
            Learn About Aftercare
          </button>
        </div>
      </div>
    </div>
  );
};

export default CervicalCancerGuidecard5;

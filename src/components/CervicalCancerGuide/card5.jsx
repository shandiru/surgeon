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
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {/* HEADER */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide"
            style={{ color: "#FF4B8B" }}
          >
            Step 2
          </span>

          <h2
            className="text-3xl font-bold mt-2"
            style={{ color: "#FF4B8B" }}
          >
            How Is Cervical Cancer Diagnosed?
          </h2>

          <p className="text-lg mt-2" style={{ color: "#7a2f4f" }}>
            If a Pap test shows abnormal results, your doctor may recommend
            further tests to confirm abnormalities.
          </p>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold" style={{ color: "#FF4B8B" }}>
          Common Diagnostic Methods:
        </h3>

        {/* ================ STEPS GRID ================= */}
        <div className="space-y-4 mt-6">

          {/* 1 Repeat Pap Smear */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{
                backgroundColor: "#FF4B8B",
                color: "#FFFFFF",
              }}
            >
              <ClipboardCheck className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#FF4B8B" }}
              >
                Repeat Pap Smear or Liquid-Based Cytology
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                Done to confirm abnormal cells found in the initial Pap test.
              </p>
            </div>
          </div>

          {/* 2 Biopsy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#FF4B8B", color: "#FFFFFF" }}
            >
              <Microscope className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#FF4B8B" }}
              >
                Biopsy
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                A small tissue sample is examined under a microscope to check
                for cancer cells.
              </p>
            </div>
          </div>

          {/* 3 Colposcopy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#FF4B8B", color: "#FFFFFF" }}
            >
              <Camera className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#FF4B8B" }}
              >
                Colposcopy
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                A magnifying instrument is used to examine the cervix closely.
                A biopsy may also be taken.
              </p>
            </div>
          </div>

          {/* 4 Endo-cervical Curettage */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#FF4B8B", color: "#FFFFFF" }}
            >
              <Activity className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#FF4B8B" }}
              >
                Endo-Cervical Curettage
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                Tissue is taken from the cervical canal using a small
                spoon-shaped tool to check for abnormalities.
              </p>
            </div>
          </div>

          {/* 5 Cone Biopsy */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#FF4B8B", color: "#FFFFFF" }}
            >
              <Scan className="w-6 h-6" />
            </div>

            <div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#FF4B8B" }}
              >
                Cone Biopsy
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                A larger cone-shaped tissue sample is removed to confirm
                diagnosis or remove precancerous cells.
              </p>
            </div>
          </div>
        </div>

        {/* ================= IMAGING TESTS ================= */}
        <hr className="my-6 border-pink-200" />
        <h3 className="font-semibold text-lg mb-2" style={{ color: "#FF4B8B" }}>
          Additional Imaging Tests
        </h3>

        <p className="text-sm mb-4" style={{ color: "#7a2f4f" }}>
          If doctors suspect the cancer has spread, they may recommend:
        </p>

        <div className="flex flex-wrap gap-3">
          {["X-rays", "CT scans", "MRI"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-md text-sm font-medium"
              style={{
                backgroundColor: "#FFC5D3",
                color: "#4b1e30",
                border: "1px solid #f5a9bd",
              }}
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

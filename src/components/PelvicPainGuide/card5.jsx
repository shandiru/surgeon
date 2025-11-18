"use client";
import {
  Target,
  Stethoscope,
  Microscope,
  Camera,
  Scan,
  Activity,
} from "lucide-react";
import React from "react";

const PelvicPainGuidecard5 = ({ setShowCard, setActiveButton }) => {
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
            Getting Diagnosed
          </h2>

          <p className="text-lg mt-2" style={{ color: "#7a2f4f" }}>
            Diagnosis usually begins with a physical and pelvic exam, followed by
            specialized tests.
          </p>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold" style={{ color: "#FF4B8B" }}>
          Examination Steps:
        </h3>

        {/* ================ STEPS GRID ================= */}
        <div className="space-y-4 mt-6">
          {/* Pelvic Exam */}
          <div
            className="flex items-start gap-6 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg active:bg-[#FFF5F8]"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "#FF4B8B", color: "#FFFFFF" }}
            >
              <Stethoscope className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                Pelvic Exam
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                Checking the vulva, vagina, uterus, ovaries, bladder, and rectum
                for abnormalities.
              </p>
            </div>
          </div>

          {/* Biopsy */}
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
              <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                Biopsy
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                Removing a small piece of tissue from the vulva to test for
                cancer cells.
              </p>
            </div>
          </div>

          {/* Colposcopy */}
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
              <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                Colposcopy
              </h4>
              <p style={{ color: "#7a2f4f" }}>
                Using a magnifying instrument to closely examine the vulva.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TAG LIST (Pink Pills) ================== */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Chest X-ray",
            "CT or PET-CT scan",
            "MRI",
            "Endoscopy (if needed)",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-md text-sm font-medium"
              style={{
                backgroundColor: "#FF4B8B",
                color: "#FFFFFF",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ================= NEXT BUTTON ================= */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium transition-all h-10 px-4"
          >
            Learn About Aftercare
          </button>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainGuidecard5;

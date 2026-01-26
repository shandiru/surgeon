"use client";
import React from "react";
import { Heart, Radiation, Pill } from "lucide-react";

const IrregularBleedingGuidecard6 = () => {
  return (
    <div className="space-y-6 pb-10">
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <span
            className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <Heart className="w-6 h-6 text-primary-pink" />
            Step 3
          </span>

          <h2 className="text-3xl font-bold mt-2" style={{ color: "#FF4B8B" }}>
            Treatment Options
          </h2>

          <p className="text-lg mt-4" style={{ color: "#7a2f4f" }}>
            Treatment depends on the stage, size, and spread of the cancer. Surgery is the most
            common approach.
          </p>
        </div>

        {/* SURGERY SECTION */}
        <div className="space-y-10 mt-8">
          <div>
            {/* Title Row */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: "#FF4B8B" }}
              >
                1
              </div>

              <h3 className="text-xl font-semibold" style={{ color: "#FF4B8B" }}>
                Surgery (Primary Treatment)
              </h3>
            </div>

            {/* Surgery Cards */}
            <div className="grid gap-4">
              <div
                className="p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                  Radical Wide Local Excision
                </h4>
                <p style={{ color: "#7a2f4f" }}>
                  Removes cancerous tissue plus a margin of healthy tissue.
                </p>
              </div>

              <div
                className="p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                  Radical Partial Vulvectomy
                </h4>
                <p style={{ color: "#7a2f4f" }}>
                  Removes a larger section of the vulva, sometimes including the clitoris.
                </p>
              </div>

              <div
                className="p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                  Radical Vulvectomy
                </h4>
                <p style={{ color: "#7a2f4f" }}>
                  Removes the entire vulva (inner & outer labia and possibly clitoris).
                </p>
              </div>
            </div>
          </div>

          {/* ADDITIONAL TREATMENTS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: "#FF4B8B" }}
              >
                2
              </div>

              <h3 className="text-xl font-semibold" style={{ color: "#FF4B8B" }}>
                Additional Treatments
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: "#FF4B8B" }}
                >
                  <Radiation className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                    Radiation Therapy
                  </h4>
                  <p style={{ color: "#7a2f4f" }}>
                    Often used with surgery to destroy remaining cancer cells.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 hover:bg-[#FFF5F8] hover:shadow-lg"
                style={{ borderColor: "rgb(255,197,211)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: "#FF4B8B" }}
                >
                  <Pill className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                    Chemotherapy
                  </h4>
                  <p style={{ color: "#7a2f4f" }}>
                    May be combined with radiation or used for advanced cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL BUTTON (NO FUNCTION) */}
        <div className="pt-8 flex justify-center">
          <button className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all">
            Complete Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default IrregularBleedingGuidecard6;

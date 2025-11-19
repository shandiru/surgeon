"use client";
import { Stethoscope, Pill, Home, Users } from "lucide-react";
import React from "react";

const VaginalLumpsGuidecard5 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10 px-3">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">

        {/* MAIN WRAPPER */}
        <div
          className="rounded-2xl p-8 border shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgb(255,197,211)",
          }}
        >
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#FF4B8B" }}>
              Treatment & Home Care
            </h2>
            <p className="text-lg" style={{ color: "#7a2f4f" }}>
              Most lumps are easy to diagnose and treat quickly with the right approach
            </p>
          </div>

          {/* GRID 4 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* ================= 1. DIAGNOSIS PROCESS ================= */}
            <div
              className="flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              style={{ border: "1px solid rgb(255,197,211)" }}
            >
              <div className="px-6 text-center">
                <div className="rounded-full mx-auto flex items-center justify-center">
                  <Stethoscope
                    className="w-6 h-6"
                    style={{ color: "#FF4B8B" }}
                  />
                </div>
                <div className="mt-3 font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                  Diagnosis Process
                </div>
                <span
                  className="inline-flex items-center justify-center rounded-md px-2 py-1 mt-2 text-xs font-medium mx-auto"
                  style={{
                    backgroundColor: "rgb(255,197,211)",
                    color: "#FF4B8B",
                  }}
                >
                  Professional Care
                </span>
              </div>

              <div className="px-6">
                <ul className="space-y-3">
                  {[
                    "Visual examination of the vulva and vagina",
                    "Swab test for infection or abnormal cells",
                    "Ultrasound scan (transvaginal or abdominal)",
                    "Biopsy if needed to rule out serious conditions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-xs" style={{ color: "#FF4B8B" }}>
                        •
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ================= 2. MEDICAL TREATMENT ================= */}
            <div
              className="flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
              style={{ border: "1px solid rgb(255,197,211)" }}
            >
              <div className="px-6 text-center">
                <div className="rounded-full mx-auto flex items-center justify-center">
                  <Pill className="w-6 h-6" style={{ color: "#FF4B8B" }} />
                </div>
                <div className="mt-3 font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                  Medical Treatment
                </div>
                <span
                  className="inline-flex items-center justify-center rounded-md px-2 py-1 mt-2 text-xs font-medium mx-auto"
                  style={{
                    backgroundColor: "rgb(255,197,211)",
                    color: "#FF4B8B",
                  }}
                >
                  As Needed
                </span>
              </div>

              <div className="px-6">
                <ul className="space-y-3">
                  {[
                    "Many lumps resolve naturally without treatment",
                    "Antibiotics for bacterial infections",
                    "Drainage of cysts when necessary",
                    "Removal of warts or polyps if causing symptoms",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-xs" style={{ color: "#FF4B8B" }}>
                        •
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ================= 3. SELF-CARE ================= */}
            <div
              className="flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
              style={{ border: "1px solid rgb(255,197,211)" }}
            >
              <div className="px-6 text-center">
                <div className="rounded-full mx-auto flex items-center justify-center">
                  <Home className="w-6 h-6" style={{ color: "#FF4B8B" }} />
                </div>
                <div className="mt-3 font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                  Self-Care Tips
                </div>
                <span
                  className="inline-flex items-center justify-center rounded-md px-2 py-1 mt-2 text-xs font-medium mx-auto"
                  style={{
                    backgroundColor: "rgb(255,197,211)",
                    color: "#FF4B8B",
                  }}
                >
                  Home Care
                </span>
              </div>

              <div className="px-6">
                <ul className="space-y-3">
                  {[
                    "Warm baths help cysts drain naturally",
                    "Wear loose clothing and cotton underwear",
                    "Avoid shaving or friction on the area",
                    "Avoid sexual contact if lump is painful or infected",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-xs" style={{ color: "#FF4B8B" }}>
                        •
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ================= 4. FOLLOW-UP CARE ================= */}
            <div
              className="flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
              style={{ border: "1px solid rgb(255,197,211)" }}
            >
              <div className="px-6 text-center">
                <div className="rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6" style={{ color: "#FF4B8B" }} />
                </div>
                <div className="mt-3 font-semibold text-lg" style={{ color: "#FF4B8B" }}>
                  Follow-Up Care
                </div>
                <span
                  className="inline-flex items-center justify-center rounded-md px-2 py-1 mt-2 text-xs font-medium mx-auto"
                  style={{
                    backgroundColor: "rgb(255,197,211)",
                    color: "#FF4B8B",
                  }}
                >
                  Ongoing Support
                </span>
              </div>

              <div className="px-6">
                <ul className="space-y-3">
                  {[
                    "Most conditions are easy to treat or monitor",
                    "Regular follow-up checks to ensure healing",
                    "You can request a chaperone during exams",
                    "Early STI treatment prevents complications",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-xs" style={{ color: "#FF4B8B" }}>
                        •
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* IMPORTANT NOTE BOX */}
          <div
            className="mt-12 p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            style={{ backgroundColor: "rgb(255,197,211)" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "#FF4B8B",
                  color: "#FFFFFF",
                }}
              >
                !
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                  Important Note
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  If an STI is diagnosed, early treatment protects you and your
                  partner. Most conditions are easily treated or monitored with
                  proper care.
                </p>
              </div>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md text-sm font-medium h-10 px-4 transition"
            >
              Continue to Final Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaginalLumpsGuidecard5;

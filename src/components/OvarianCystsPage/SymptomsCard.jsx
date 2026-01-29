import React from "react";

export default function SymptomsCard() {
  const commonSymptoms = [
    "Bloating, swelling or pressure in the lower abdomen",
    "Pelvic pain (dull or sharp, may come and go)",
    "Pain during periods or sex",
    "Pain with nausea/vomiting if the ovary twists",
    "Sudden severe pain if a cyst ruptures",
  ];

  const lessCommonSymptoms = [
    "Lower back or thigh ache",
    "Trouble fully emptying bladder or bowel",
    "Breast tenderness",
    "Unexplained weight gain",
    "Needing to urinate more often",
    "Unusual vaginal bleeding",
  ];

  return (
    <div
      data-slot="card"
      className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 px-6"
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 text-2xl font-semibold text-primary-pink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF4B8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
        Symptoms of Ovarian Cysts
      </div>

      {/* Card Content */}
      <div data-slot="card-content">
        {/* Intro Box */}
        <div className="mb-6 p-4 rounded-lg text-center font-medium bg-[#FEE6EA] text-[#BB125B]">
          Most cysts cause no symptoms, but larger or problematic cysts may cause:
        </div>

        {/* Symptom Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Common Symptoms */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-pink">Common Symptoms</h4>
            <div className="space-y-3">
              {commonSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#FF4B8B] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Less Common Symptoms */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-pink">Less Common Symptoms</h4>
            <div className="space-y-3">
              {lessCommonSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#FEB6C5] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

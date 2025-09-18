import React from 'react';

export default function SymptomsCard() {
  const commonSymptoms = [
    'Bloating, swelling or pressure in the lower abdomen',
    'Pelvic pain (dull or sharp, may come and go)',
    'Pain during periods or sex',
    'Pain with nausea/vomiting if the ovary twists',
    'Sudden severe pain if a cyst ruptures',
  ];

  const lessCommonSymptoms = [
    'Lower back or thigh ache',
    'Trouble fully emptying bladder or bowel',
    'Breast tenderness',
    'Unexplained weight gain',
    'Needing to urinate more often',
    'Unusual vaginal bleeding',
  ];

  return (
    <div
      data-slot="card"
      className="flex flex-col gap-6 rounded-xl border py-6 px-4 shadow-lg"
      style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }} // card bg and text
    >
      {/* Card Header */}
      <div
        data-slot="card-header"
        className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4"
      >
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
      </div>

      {/* Card Content */}
      <div data-slot="card-content" className="p-6">
        {/* Intro Box */}
        <div
          className="mb-6 p-4 rounded-lg text-center font-medium"
          style={{ backgroundColor: '#FEE6EA' }} // muted bg
        >
          Most cysts cause no symptoms, but larger or problematic cysts may cause:
        </div>

        {/* Symptom Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Common Symptoms */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Common Symptoms</h4>
            <div className="space-y-3">
              {commonSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#FF4B8B' }}
                  />
                  <span className="text-sm">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Less Common Symptoms */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Less Common Symptoms</h4>
            <div className="space-y-3">
              {lessCommonSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#FEB6C5' }} // muted-foreground
                  />
                  <span className="text-sm">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

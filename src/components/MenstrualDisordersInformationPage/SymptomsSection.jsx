import React from "react";

export default function SymptomsSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#fff5f7]">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 text-primary-pink"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <h2 className="text-3xl font-bold text-primary-pink">Symptoms to Watch For</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Common Symptoms Card */}
        <div className="bg-white text-[#333] flex flex-col gap-6 rounded-2xl py-8 px-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-semibold text-xl text-[#c2185b]">Common Symptoms</h3>
          <ul className="space-y-3 text-base">
            {[
              "Abnormal or heavy bleeding",
              "Painful cramps",
              "Periods fewer than 21 days apart or more than 3 months apart",
              "Bloating or fullness in the abdomen",
              "Headaches, low mood, or emotional distress",
            ].map((symptom, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 bg-primary-pink rounded-full mt-2 flex-shrink-0" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Urgent Symptoms Card */}
        <div className="bg-[#FEE6EA] text-[#333] flex flex-col gap-6 rounded-2xl py-8 px-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-semibold text-xl text-primary-pink">When to Seek Urgent Help</h3>
          <ul className="space-y-3 text-base">
            {[
              "Bleeding so heavy you soak through pads/tampons every hour",
              "Severe pain not eased by painkillers",
              "Fainting, dizziness, or signs of severe anaemia",
              "Any bleeding after menopause",
            ].map((urgent, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 flex-shrink-0 text-primary-pink"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <span>{urgent}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

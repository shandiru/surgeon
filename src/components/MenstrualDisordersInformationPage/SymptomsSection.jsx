import React from 'react';

export default function SymptomsSection() {
  return (
    <section className="mb-16 px-6 md:px-12">
      <div className="flex items-center gap-3 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-[#FF4B8B]"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <h2 className="text-2xl font-bold">Symptoms to Watch For</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Common Symptoms */}
        <div className="bg-white text-black flex flex-col gap-6 rounded-xl border border-[#FF4B8B]/30 py-6 px-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pb-6">
            <div className="font-semibold text-lg">Common Symptoms</div>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                "Abnormal or heavy bleeding",
                "Painful cramps",
                "Periods fewer than 21 days apart or more than 3 months apart",
                "Bloating or fullness in the abdomen",
                "Headaches, low mood, or emotional distress"
              ].map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#FF4B8B] rounded-full mt-2 flex-shrink-0" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Urgent Symptoms */}
        <div className="text-black flex flex-col gap-6 rounded-xl border border-[#FF4B8B]/20 py-6 px-6 shadow-sm bg-[#FEE6EA]">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pb-6">
            <div className="font-semibold text-lg text-[#FF4B8B]">When to Seek Urgent Help</div>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                "Bleeding so heavy you soak through pads/tampons every hour",
                "Severe pain not eased by painkillers",
                "Fainting, dizziness, or signs of severe anaemia",
                "Any bleeding after menopause"
              ].map((urgent, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#FF4B8B] mt-1 flex-shrink-0"
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
      </div>
    </section>
  );
}

import { Lightbulb } from 'lucide-react';
import React from 'react';

const OvarianCancerGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-6 rounded-2xl border shadow-sm 
        animate-in slide-in-from-right-5 duration-300 p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >

        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#FF4B8B]"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            What Is Ovarian Cancer?
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">

          {/* Overview Box */}
          <div
            className="p-4 rounded-xl border transition-all duration-300 
            hover:shadow-lg hover:scale-105 active:scale-100"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "#7a2f4f" }}>
              Ovarian cancer is a cancer that begins in the ovaries — the two
              small organs responsible for producing eggs and hormones such as
              oestrogen and progesterone.
              <br />
              <br />
              It is often called a <strong>“silent” cancer</strong> because early
              symptoms can be vague and easily mistaken for digestive or menstrual
              issues.
              <br />
              <br />
              <strong>Early detection greatly improves outcomes.</strong>
            </p>
          </div>

          {/* Quick Facts + Reminder */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Quick Facts */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2" style={{ color: "#FF4B8B" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#FF4B8B]"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Quick Facts
              </h4>

              <ul className="space-y-2">
                {[
                  "Most common in women over 50",
                  "Often detected late because symptoms are vague",
                  "Epithelial ovarian cancer accounts for 90% of cases",
                  "Symptoms can mimic digestive issues like bloating",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#FF4B8B] mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span style={{ color: "#7a2f4f" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reminder Box */}
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: "#FFF5F8",
                borderColor: "rgb(255,197,211)",
              }}
            >
              <h4
                className="font-semibold flex items-center gap-2 mb-2"
                style={{ color: "#FF4B8B" }}
              >
                <Lightbulb className="text-xl text-[#FF4B8B]" />
                Remember
              </h4>
              <p className="text-sm" style={{ color: "#7a2f4f" }}>
                Ovarian cancer symptoms can be subtle. Persistent bloating, pelvic
                pain, and feeling full quickly should never be ignored. Awareness
                supports earlier detection.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(2);
                setActiveButton(1);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] 
              hover:bg-[#FF4B8B]/80 text-white rounded-md text-sm font-medium 
              transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%]"
            >
              Continue to Next Section
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuideCard1;

import { useState } from "react";

const MenstrualDisordersGuideCard4 = ({ setShowCard, setActiveButton }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6 px-4  sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto ">
        <div className="flex items-center justify-center gap-3 mb-10">
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
          <div className="bg-white text-black flex flex-col gap-6 rounded-2xl py-8 px-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
          <div className="bg-[#FEE6EA] text-black flex flex-col gap-6 rounded-2xl py-8 px-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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

        {/* Navigate Button */}
        <div className="px-6 pb-6 mt-5 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="w-full sm:w-[70%] md:w-[50%] bg-primary-pink hover:bg-primary-pink/80 text-white font-medium rounded-md h-10 px-4 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenstrualDisordersGuideCard4;

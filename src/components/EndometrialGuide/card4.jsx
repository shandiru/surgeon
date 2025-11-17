'use client';
import { useState } from "react";
import { AlertTriangle, Droplet, Scan, Eye, Flame } from "lucide-react";

const EndometrialCard4 = ({ setShowCard, setActiveButton }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-primary" />
            Step 2 — Recognizing Symptoms
          </div>
          <p className="text-muted-foreground text-sm">
            Early warning signs of endometrial cancer can help with timely detection.
          </p>
        </div>

        {/* Content Box */}
        <div className="px-6 space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="leading-relaxed">
              Endometrial cancer often presents early with abnormal uterine bleeding. Being aware of these symptoms can help you seek medical attention promptly.
            </p>
          </div>

          {/* ACCORDION SECTION */}
          <div className="w-full space-y-3">

            {/* Symptom List Accordion */}
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  type="button"
                  aria-expanded={openAccordion === 1}
                  aria-controls="accordion-item-1"
                  onClick={() => toggleAccordion(1)}
                  className="flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium hover:underline outline-none"
                >
                  Common Symptoms to Look For
                  <svg
                    width="20"
                    height="20"
                    className={`transition-transform ${openAccordion === 1 ? "rotate-180" : ""}`}
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>

              {openAccordion === 1 && (
                <div id="accordion-item-1" className="overflow-hidden text-sm pb-4 space-y-3">
                  {[
                    "Unusual bleeding or spotting between periods or after menopause",
                    "Long, heavy, or frequent periods (especially in women over 40)",
                    "Thin white or clear vaginal discharge (postmenopausal women)",
                    "Lower abdominal or pelvic pain",
                    "A lump or mass in the lower abdomen",
                    "Difficulty or pain while urinating",
                    "Pain during sexual intercourse",
                    "Unexplained weight loss"
                  ].map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Droplet className="w-5 h-5 text-accent mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Why symptoms matter */}
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  type="button"
                  aria-expanded={openAccordion === 2}
                  aria-controls="accordion-item-2"
                  onClick={() => toggleAccordion(2)}
                  className="flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium hover:underline outline-none"
                >
                  Why these symptoms matter
                  <svg
                    width="20"
                    height="20"
                    className={`transition-transform ${openAccordion === 2 ? "rotate-180" : ""}`}
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>

              {openAccordion === 2 && (
                <div id="accordion-item-2" className="overflow-hidden text-sm pb-4">
                  <p>
                    These symptoms do NOT always indicate cancer, as infections or hormonal changes can cause similar signs.  
                    However, persistent abnormal bleeding or other listed symptoms should be evaluated promptly, as early detection greatly improves treatment outcomes.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-4">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="items-center w-[90%] mx-5 md:mx-10 lg:mx-12 bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 rounded-md text-sm font-medium transition-all h-9 px-4 py-2 text-primary-foreground"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndometrialCard4;

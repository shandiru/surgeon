import { Target } from "lucide-react";
import React, { useState } from "react";

const Colposcopycard5 = ({ setShowCard, setActiveButton }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Content for each treatment option
  const accordionContent = [
    "Removes a small cone-shaped piece of cervical tissue containing abnormal cells.",
    "Uses extreme cold to freeze and destroy abnormal cells on the cervix.",
    "Removes abnormal cells using a heated wire loop. Quick and effective outpatient procedure.",
  ];

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
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
              className="lucide lucide-circle-check-big w-6 h-6 text-primary"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            What the Results Mean
          </div>
        </div>
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-light-pink-1 rounded-lg border hover:z-50 transition-all duration-300 hover:bg-light-pink-2 hover:shadow-xl border-primary-pink active:bg-light-pink-1 active:shadow-lg active:border-primary-pink hover:scale-105 active:scale-100">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
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
                  className="lucide lucide-circle-check-big w-4 h-4"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                Normal Results
              </h4>
              <p className="text-sm mb-3">If no abnormal cells are found:</p>
              <ul className="text-sm space-y-1">
                <li>• Return to routine smear tests</li>
                <li>• No immediate treatment needed</li>
                <li>• Continue regular screening</li>
              </ul>
            </div>
            <div className="p-4 bg-light-pink-1 rounded-lg border hover:z-50 transition-all duration-300 hover:bg-light-pink-2 hover:shadow-xl border-primary-pink active:bg-light-pink-1 active:shadow-lg active:border-primary-pink hover:scale-105 active:scale-100">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
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
                  className="lucide lucide-circle-alert w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Abnormal Results
              </h4>
              <p className="text-sm mb-3">
                If abnormal cells are found, treatment options include:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Cone biopsy</li>
                <li>• Cryotherapy (freezing)</li>
                <li>• LEEP procedure</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-primary-pink">Treatment Options Explained</h4>
            <div>
              {["Cone Biopsy", "Cryotherapy", "LEEP (Loop Electrosurgical Excision Procedure)"].map(
                (item, index) => (
                  <div key={index} className="border-b last:border-b-0">
                    <h3 className="flex">
                      <button
                        type="button"
                        onClick={() => handleAccordionToggle(index)}
                        aria-expanded={activeAccordion === index ? "true" : "false"}
                        className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none no-underline focus-visible:ring-[3px]"
                      >
                        {item}
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
                          className="lucide lucide-chevron-down text-black pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                    {activeAccordion === index && (
                      <div className="overflow-hidden text-sm">
                        <p className="p-4">{accordionContent[index]}</p>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
            s
          </div>

          <div className="bg-light-pink-1 p-4 rounded-lg border border-primary-pink">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
              <Target className="w-5 h-5 text-primary-pink" />
              Key Point
            </h4>
            <p className="text-sm">
              Treating abnormal cells early can{" "}
              <strong>prevent cervical cancer from developing</strong>. These procedures are highly
              effective and have excellent success rates.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(6); // move to Card 4
                setActiveButton(5); // index for Card 4
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Learn About Aftercare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colposcopycard5;

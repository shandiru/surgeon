import React, { useState } from "react";
import { ChevronDown, CircleCheck, Shield, FileText } from "lucide-react";

const UltrasoundCard5 = ({ setShowCard, setActiveButton }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-primary-pink" />
            What Happens After the Scan
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Immediate Recovery Section */}
            <div className="p-4 bg-light-pink-1 rounded-lg border border-light-pink-2 hover:z-50 transition-all duration-300 hover:bg-light-pink-2 hover:border-light-pink-2 active:bg-light-pink-2 active:shadow-lg active:border-light-pink-2 hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-primary-pink mb-2 flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-primary-pink" />
                Immediate Recovery
              </h4>
              <ul className="text-sm space-y-2">
                <li>• You can go straight back to normal activities</li>
                <li>• No restrictions on eating or drinking</li>
                <li>• No recovery time needed</li>
                <li>• Resume all regular activities immediately</li>
              </ul>
            </div>

            {/* Your Results Section */}
            <div className="p-4 bg-light-pink-1 rounded-lg border border-light-pink-2 hover:z-50 transition-all duration-300 hover:bg-light-pink-2 hover:border-light-pink-2 active:bg-light-pink-2 active:shadow-lg active:border-light-pink-2 hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-primary-pink mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" />
                Your Results
              </h4>
              <ul className="text-sm space-y-2">
                <li>• A specialist will interpret your results</li>
                <li>• Results will be discussed with you</li>
                <li>• Follow-up tests arranged if needed</li>
                <li>• Treatment options explained if required</li>
              </ul>
            </div>
          </div>

          {/* Safety Assurance Section */}
          <div className="bg-white p-4 rounded-lg border border-light-pink-2">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
              <Shield className="w-4 h-4 text-primary-pink" />
              Safety Assurance
            </h4>
            <p className="text-sm leading-relaxed">
              There are <strong>no known risks or side effects</strong> from diagnostic ultrasound
              at the levels used. The procedure is completely safe and can be repeated as often as
              medically necessary.
            </p>
          </div>

          {/* Accordion for What if something is found */}
          <div className="w-full">
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  onClick={handleAccordionToggle}
                  aria-expanded={accordionOpen ? "true" : "false"}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px]"
                >
                  What if something is found?
                  <ChevronDown
                    className={`transition-transform duration-200 ${accordionOpen ? "rotate-180" : ""}`}
                    style={{ transform: accordionOpen ? "rotate(180deg)" : "rotate(0)" }}
                  />
                </button>
              </h3>
              <div
                id="accordion-content"
                className={`overflow-hidden text-sm ${accordionOpen ? "block" : "hidden"}`}
                aria-labelledby="accordion-trigger"
              >
                {/* Accordion content can go here */}
                <p className="p-4">
                  If anything unusual is found, your doctor will discuss treatment options or any
                  follow-up procedures with you. Additional tests may be required based on findings.
                </p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Emotional Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard5;

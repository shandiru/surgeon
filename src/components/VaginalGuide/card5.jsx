import { Target } from 'lucide-react';
import React, { useState } from 'react';

const Vaginalcard5 = ({ setShowCard, setActiveButton }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Updated content specifically for Vaginal Cancer diagnosis
  const accordionContent = [
    "Inspection of the vagina, cervix, uterus, and ovaries using a speculum and manual examination (Pelvic Exam).",
    "Primarily for cervical cancer, but may also reveal vaginal cancer cells (Pap Test).",
    "Magnified examination of the vaginal tissue using a colposcope (Colposcopy).",
    "Removal of a small tissue sample during colposcopy to test for cancer cells (Biopsy)."
  ];

  const accordionTitles = [
    "Pelvic Exam",
    "Pap Test",
    "Colposcopy",
    "Biopsy"
  ];

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-primary">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            Vaginal Cancer Diagnosis
          </div>
        </div>

        <div className="px-6 space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="leading-relaxed">
              Vaginal cancer may be detected during a routine pelvic exam before symptoms appear. Diagnostic steps help confirm diagnosis and guide treatment planning.
            </p>
          </div>

          <div className="space-y-3">
            {accordionTitles.map((title, index) => (
              <div key={index} className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle(index)}
                    aria-expanded={activeAccordion === index ? 'true' : 'false'}
                    className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px]"
                  >
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200">
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
            ))}
          </div>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#FF4B8B]" />
              Key Point
            </h4>
            <p className="text-sm">
              Early detection through these diagnostic tests improves treatment success and survival rates for vaginal cancer.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(6);       
                setActiveButton(5);   
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              Learn About Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaginalcard5;

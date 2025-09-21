import { useState } from "react";

const ColposcopyCard4 = ({ setShowCard, setActiveButton }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
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
              className="lucide lucide-shield w-6 h-6 text-primary"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            Will I Need a Biopsy?
          </div>
        </div>
        <div className="px-6 space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="leading-relaxed">
              If your doctor sees anything unusual, they may take a small tissue sample (biopsy)
              <strong> immediately during your colposcopy</strong>.
            </p>
          </div>
          <div className="w-full">
            {/* Accordion Item 1 */}
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  type="button"
                  aria-controls="accordion-item-1"
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  onClick={() => toggleAccordion(1)}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px]"
                >
                  What to expect during a biopsy
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
                    className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              {openAccordion === 1 && (
                <div
                  id="accordion-item-1"
                  className="overflow-hidden text-sm"
                >
                  <div className="pt-0 pb-4 space-y-3">
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-clock w-5 h-5 text-accent mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div>
                        <p className="font-medium">Quick procedure</p>
                        <p className="text-sm text-muted-foreground">
                          Takes just a few seconds
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-circle-alert w-5 h-5 text-accent mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                      <div>
                        <p className="font-medium">Mild discomfort</p>
                        <p className="text-sm text-muted-foreground">
                          May cause a brief pinch or cramp
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
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
                        className="lucide lucide-file-text w-5 h-5 text-accent mt-0.5"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      <div>
                        <p className="font-medium">Lab analysis</p>
                        <p className="text-sm text-muted-foreground">
                          Sample sent to confirm cell type
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  type="button"
                  aria-controls="accordion-item-2"
                  aria-expanded={openAccordion === 2 ? "true" : "false"}
                  onClick={() => toggleAccordion(2)}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px]"
                >
                  Why might I need a biopsy
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
                    className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              {openAccordion === 2 && (
                <div
                  id="accordion-item-2"
                  className="overflow-hidden text-sm"
                >
                  <div className="pt-0 pb-4">
                    <p className="text-sm leading-relaxed">
                      A biopsy helps confirm whether abnormal, precancerous, or cancerous cells are present. It's the most accurate way to determine exactly what type of cells your doctor is seeing and plan the best treatment if needed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Learn About Biopsies Button */}
        <div className="pt-4">
          <button
            onClick={() => {
              setShowCard(5);       // move to Card 4
              setActiveButton(4);   // index for Card 4
            }}
            className="items-center w-[90%] mx-5 md:mx-10 lg:mx-12  bg-[#FF4B8B] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3"
          >
            Understand Your Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColposcopyCard4;

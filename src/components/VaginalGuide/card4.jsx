import { useState } from "react";

const VaginalCard4 = ({ setShowCard, setActiveButton }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
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
            Vaginal Cancer Symptoms & Awareness
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Symptoms Box */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="leading-relaxed">
              Early vaginal cancer often has no symptoms. As it progresses, signs may include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Unusual vaginal bleeding (after intercourse or after menopause)</li>
              <li>Watery vaginal discharge</li>
              <li>A lump or mass in the vagina</li>
              <li>Painful urination</li>
              <li>Frequent urination</li>
              <li>Constipation</li>
              <li>Pelvic pain</li>
            </ul>
          </div>

          {/* Awareness Accordion */}
          <div className="w-full">
            <div className="border-b last:border-b-0">
              <h3 className="flex">
                <button
                  type="button"
                  aria-controls="accordion-item-1"
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  onClick={() => toggleAccordion(1)}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px]"
                >
                  Vaginal Cancer Awareness
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
                <div id="accordion-item-1" className="overflow-hidden text-sm">
                  <div className="pt-0 pb-4">
                    <p className="text-sm leading-relaxed">
                      Routine pelvic exams are important for early detection. Early detection greatly increases treatment success and survival rates.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigate Button */}
        <div className="pt-4">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="items-center w-[90%] mx-5 md:mx-10 hover:bg-[#FF4B8B]/80 lg:mx-12 bg-[#FF4B8B] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaginalCard4;

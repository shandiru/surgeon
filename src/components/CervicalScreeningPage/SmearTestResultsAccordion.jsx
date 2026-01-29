import { useState } from "react";

const accordionData = [
  {
    title: "Normal Result",
    description: "Next test in 3 or 5 years.",
  },
  {
    title: "Inadequate Sample",
    description: "Repeat test in 3 months.",
  },
  {
    title: "HPV Positive + Normal Cells",
    description: "Repeat test in 12 months.",
  },
  {
    title: "HPV Positive + Abnormal Cells",
    description:
      "Referred for Colposcopy. Colposcopy is a closer examination by a Gynaecologist using magnification.",
  },
];

export default function SmearTestResultsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white text-primary-pink flex flex-col gap-8 rounded-2xl border border-gray-200 p-10 shadow-lg max-w-8xl mx-auto transition hover:shadow-[0_8px_30px_rgba(255,197,211,0.35)]">
          {/* Header */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2"> After Your Test</h2>
            <p className="text-base text-[#7a2f4f]">Results usually within 1–2 weeks</p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-200">
            {accordionData.map((item, index) => (
              <div key={index} className="py-4">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 py-3 text-left font-medium text-primary-pink hover:text-[#7a2f4f] transition"
                  >
                    <span className="flex items-center gap-3 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#ff97b3]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      {item.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 text-[#ff97b3] transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                {openIndex === index && (
                  <div className="mt-3 p-5 bg-[#FFF5F8] border border-gray-200 rounded-lg text-base text-[#7a2f4f] leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

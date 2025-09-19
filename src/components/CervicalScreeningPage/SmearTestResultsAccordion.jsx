import { useState } from "react";

const accordionData = [
  {
    title: "Normal Result",
    iconColor: "text-green-600",
    description: "Next test in 3 or 5 years.",
  },
  {
    title: "Inadequate Sample",
    iconColor: "text-yellow-600",
    description: "Repeat test in 3 months.",
  },
  {
    title: "HPV Positive + Normal Cells",
    iconColor: "text-orange-600",
    description: "Repeat test in 12 months.",
  },
  {
    title: "HPV Positive + Abnormal Cells",
    iconColor: "text-red-600",
    description: "Referred for Colposcopy ,Colposcopy is a closer examination by a Gynaecologist using magnification.",
  },
];

export default function SmearTestResultsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6">
      <div className="bg-[#ff97b3] text-white flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm">
        {/* Header */}
        <div className="px-6">
          <h2 className="text-2xl font-semibold mb-1">📋 After Your Test</h2>
          <p className="text-sm text-white/80">Results usually within 1–2 weeks</p>
        </div>

        {/* Accordion */}
        <div className="px-6">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border-b last:border-b-0"
            >
              <h3 className="flex">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex flex-1 items-start justify-between gap-4 py-4 text-sm font-medium outline-none hover:underline transition-all text-left"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${item.iconColor}`}
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
                    className={`h-4 w-4 transition-transform duration-200 ${
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
                <div className="py-2 text-sm text-white/90">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { ChevronDown, Stethoscope } from "lucide-react";

const accordionItems = [
  {
    id: 1,
    title: "Medical History and Pelvic Exam",
    content:
      "Your doctor may ask about your medical history and perform a pelvic exam to assess abnormalities.",
  },
  {
    id: 2,
    title: "Cervical Smear Test",
    content:
      "If you’re due for a cervical smear test, your doctor may perform this to check for cervical abnormalities.",
  },
  {
    id: 3,
    title: "Transvaginal Ultrasound",
    content:
      "Uses a small probe to view the ovaries, uterus and cervix. This helps assess the thickness of the womb lining and identify any structural abnormalities.",
  },
  {
    id: 4,
    title: "Hysteroscopy",
    content:
      "A thin camera is inserted through the cervix to view the womb lining directly. This allows for direct visualisation and tissue sampling if needed.",
  },
];

export default function HowItsDiagnosed() {
  const [openIndex, setOpenIndex] = useState(0); // default first open

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-2xl shadow-lg py-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="px-8 pb-6 border-b border-[#FEE6EA]">
          <div className="font-bold flex items-center gap-3 text-2xl text-primary-pink">
            <Stethoscope className="h-7 w-7" />
            How It’s Diagnosed
          </div>
          <p className="mt-2 text-sm text-[#6B7280]">
            These tests are usually quick and done as outpatient procedures.
          </p>
        </div>

        {/* Accordion */}
        <div className="px-6">
          {accordionItems.map((item, index) => (
            <div key={item.id} className="border-b border-[#FEE6EA] last:border-b-0">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className={`flex w-full items-center justify-between py-4 text-left text-base font-medium transition-colors ${
                  openIndex === index ? "text-primary-pink" : "text-[#374151]"
                }`}
              >
                {item.title}
                <ChevronDown
                  className={`h-5 w-5 text-[#6B7280] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary-pink" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-sm text-[#4B5563]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

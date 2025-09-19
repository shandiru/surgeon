import React, { useState } from 'react';
import { ChevronDown, Stethoscope } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'Medical History and Pelvic Exam',
    content:
      'Your doctor may ask about your medical history and perform a pelvic exam to assess abnormalities.',
  },
  {
    id: 2,
    title: 'Cervical Smear Test',
    content:
      'If you’re due for a cervical smear test, your doctor may perform this to check for cervical abnormalities.',
  },
  {
    id: 3,
    title: 'Transvaginal Ultrasound',
    content:
      'Uses a small probe to view the ovaries, uterus and cervix. This helps assess the thickness of the womb lining and identify any structural abnormalities.',
  },
  {
    id: 4,
    title: 'Hysteroscopy',
    content:
      'A thin camera is inserted through the cervix to view the womb lining directly. This allows for direct visualization and tissue sampling if needed.',
  },
];

export default function HowItsDiagnosed() {
  const [openIndex, setOpenIndex] = useState(3); // default open index

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl shadow-md py-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b border-[#FEE6EA] pb-6">
          <div className="font-semibold flex items-center gap-2 text-xl sm:text-2xl text-[#FF4B8B]">
            <Stethoscope className="h-6 w-6" />
            How It’s Diagnosed
          </div>
          <p className="text-sm text-[#6B7280]">
            These tests are usually quick and done as an outpatient procedure.
          </p>
        </div>

        {/* Accordion */}
        <div className="px-6">
          {accordionItems.map((item, index) => (
            <div key={item.id} className="border-b border-[#FEE6EA] last:border-b-0">
              <h3>
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className={`flex w-full items-start justify-between py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[#FF4B8B] ${
                    openIndex === index ? 'text-[#FF4B8B]' : 'text-[#374151]'
                  }`}
                >
                  {item.title}
                  <ChevronDown
                    className={`h-4 w-4 text-[#6B7280] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>
              {openIndex === index && (
                <div className="text-sm text-[#4B5563] pb-4 transition-all duration-200">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

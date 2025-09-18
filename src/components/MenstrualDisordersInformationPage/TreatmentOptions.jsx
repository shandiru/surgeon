'use client';
import React, { useState } from 'react';

const treatmentOptions = [
  {
    title: 'Lifestyle Changes',
    content: (
      <>
        <p className="mb-2">Simple changes that can help manage symptoms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reduce salt, caffeine, sugar and alcohol before your period</li>
          <li>Stay active with regular exercise</li>
          <li>Manage stress through relaxation techniques</li>
          <li>Get enough rest and maintain good sleep hygiene</li>
        </ul>
      </>
    )
  },
  {
    title: 'Medical Treatment',
    content: (
      <>
        <p className="mb-2">Medical options your healthcare provider might recommend:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pain relievers for cramps and discomfort</li>
          <li>Hormonal contraceptives to regulate or reduce bleeding</li>
          <li>Hormone therapy to balance hormone levels</li>
          <li>Iron supplements if you have anaemia from heavy bleeding</li>
        </ul>
      </>
    )
  },
  {
    title: 'Surgical Treatment',
    content: (
      <>
        <p className="mb-2">For severe cases that don't respond to other treatments:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hysteroscopy or laparoscopy to treat specific areas of concern</li>
          <li>Endometrial ablation to destroy the womb lining and stop periods</li>
          <li>Hysterectomy (removal of the womb) - only if other treatments haven't worked and you don't plan more pregnancies</li>
        </ul>
      </>
    )
  }
];

export default function TreatmentOptions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-6 text-[#FF4B8B]">Treatment Options</h2>
      <div className="w-full border rounded-md overflow-hidden divide-y divide-[#FF4B8B]/30">
        {treatmentOptions.map((option, index) => (
          <div key={index} className="bg-[#FEE6EA] text-[#BB125B]">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between text-left font-medium py-4 px-4 text-lg transition-all hover:underline focus:outline-none"
            >
              <span>{option.title}</span>
              <svg
                className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#BB125B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm">{option.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

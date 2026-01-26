"use client";
import React, { useState } from "react";

const MenstrualDisordersGuidecard6 = ({ setShowCard, setActiveButton }) => {
  const treatmentOptions = [
    {
      title: "Lifestyle Changes",
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
      ),
    },
    {
      title: "Medical Treatment",
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
      ),
    },
    {
      title: "Surgical Treatment",
      content: (
        <>
          <p className="mb-2">For severe cases that don't respond to other treatments:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hysteroscopy or laparoscopy to treat specific areas of concern</li>
            <li>Endometrial ablation to destroy the womb lining and stop periods</li>
            <li>
              Hysterectomy (removal of the womb) – only if other treatments haven't worked and you
              don’t plan more pregnancies
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-5xl mx-6">
        <h2 className="text-2xl font-bold mb-6 text-[#FF4B8B] text-center">Treatment Options</h2>

        <div className="space-y-4">
          {treatmentOptions.map((option, index) => (
            <div
              key={index}
              className="bg-[#FEE6EA] rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left font-medium py-4 px-6 text-lg text-black focus:outline-none"
              >
                <span>{option.title}</span>
                <svg
                  className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
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

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-[#5C2A3B] animate-fadeIn">
                  {option.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-6">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 gap-2 rounded-md text-sm sm:text-base font-medium transition h-10 w-full px-4"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenstrualDisordersGuidecard6;

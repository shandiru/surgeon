"use client";

import React from "react";
import { Stethoscope, Pill, House, Users } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Diagnosis Process",
    description: [
      "Visual examination of the vulva and vagina",
      "Swab test for infection or abnormal cells",
      "Imaging scans (transvaginal or abdominal ultrasound)",
      "Biopsy (small tissue sample) if needed to rule out cancer",
    ],
    icon: <Stethoscope className="w-6 h-6" style={{ color: "#FF4B8B" }} />,
    tag: "Professional Care",
  },
  {
    id: 2,
    title: "Medical Treatment",
    description: [
      "Many lumps need no treatment and resolve naturally",
      "Antibiotics for bacterial infections",
      "Drainage of cysts when necessary",
      "Removal of warts or polyps if problematic",
    ],
    icon: <Pill className="w-6 h-6" style={{ color: "#FF4B8B" }} />,
    tag: "As Needed",
  },
  {
    id: 3,
    title: "Self-Care Tips",
    description: [
      "Take warm baths to help cysts drain naturally",
      "Wear loose clothing and breathable cotton underwear",
      "Avoid shaving or friction on the affected area",
      "Avoid sexual contact if lump is painful or infected",
    ],
    icon: <House className="w-6 h-6" style={{ color: "#FF4B8B" }} />,
    tag: "Home Care",
  },
  {
    id: 4,
    title: "Follow-Up Care",
    description: [
      "Most conditions are easily treated or monitored",
      "Regular follow-up checks to ensure resolution",
      "You can request a chaperone during appointments",
      "Early STI treatment prevents complications",
    ],
    icon: <Users className="w-6 h-6" style={{ color: "#FF4B8B" }} />,
    tag: "Ongoing Support",
  },
];

const TreatmentAndHomeCare = () => {
  return (
    <section id="treatment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#FF4B8B]">Treatment &amp; Home Care</h2>
            <p className="text-lg text-black">
              Most lumps are easy to diagnose and treat quickly with the right approach
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm h-full 
                           transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start px-6 text-center">
                  <div className="rounded-full flex items-center justify-center mx-auto">
                    {card.icon}
                  </div>
                  <div className="mt-3 font-semibold text-lg text-[#FF4B8B]">{card.title}</div>
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-1 mt-2 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-[#FF4B8B]/10 text-black">
                    {card.tag}
                  </span>
                </div>
                <div className="px-6">
                  <ul className="space-y-3">
                    {card.description.map((text, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="mt-1.5 text-xs text-[#FF4B8B]">•</span>
                        <span className="text-sm text-black leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-12 p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.01] bg-[#FF4B8B]/10">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#FF4B8B] text-white">
                !
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Important Note</h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  If an STI is diagnosed, early treatment helps prevent complications and protects
                  partners. Most conditions are easily treated or monitored with proper medical
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentAndHomeCare;

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";

const treatments = [
  {
    title: "Surgery + Chemotherapy",
    description: "Often used together as first-line treatment",
  },
  {
    title: "Targeted Therapies",
    description: "PARP inhibitors, Angiogenesis inhibitors, MEK inhibitors",
  },
  {
    title: "Intraperitoneal Chemotherapy",
    description: "Delivering chemotherapy directly into the abdominal cavity",
  },
  {
    title: "Radiation Therapy",
    description: "Especially for isolated recurrences in the pelvic area",
  },
  {
    title: "Clinical Trials",
    description: "Access to new and emerging treatments",
  },
  {
    title: "Complementary Therapies",
    description: "Supportive care to improve wellbeing",
  },
];

export default function OvarianCancerTreatment() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="treatment" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaHeart className="h-8 w-8" style={{ color: deepPink }} />
            <h3 className="text-3xl font-bold" style={{ color: deepPink }}>
              Treatment of Ovarian Cancer
            </h3>
          </div>
          <p className="text-[#7a2f4f] text-lg">
            Treatment depends on the type of ovarian cancer, your overall health, and fertility
            considerations.
          </p>
          <p className="text-[#FF4B8B] font-semibold text-lg mt-4">
            The main goal is to remove the cancer whenever possible.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 
                         hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer"
              data-aos="fade-up"
            >
              <h4 className="font-semibold text-lg mb-2" style={{ color: deepPink }}>
                {item.title}
              </h4>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { LuUsers, LuStethoscope, LuCircleCheckBig } from "react-icons/lu";

export default function BenefitsSection() {
  const patientBenefits = [
    "Smaller incisions, resulting in reduced scarring",
    "Less postoperative pain",
    "Lower risk of infection",
    "Shorter hospital stays",
    "Faster return to normal activities",
    "Reduced blood loss and need for transfusion",
  ];

  const surgeonBenefits = [
    "Enhanced visualization with 3D magnified views",
    "Superior dexterity and precision",
    "Ergonomic comfort during long procedures",
    "Ability to perform complex procedures with greater control",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits for Patients */}
            <div
              className="rounded-lg p-6 bg-white border border-gray-200 shadow-sm
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(176,59,102,0.25)]"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-pink flex items-center gap-2">
                <LuUsers className="w-6 h-6 text-primary-pink" />
                Benefits for Patients
              </h3>
              <div className="space-y-4">
                {patientBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages for Surgeons */}
            <div
              className="rounded-lg p-6 bg-white border border-gray-200 shadow-sm
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(176,59,102,0.25)]"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-pink flex items-center gap-2">
                <LuStethoscope className="w-6 h-6 text-primary-pink" />
                Advantages for Surgeons
              </h3>
              <div className="space-y-4">
                {surgeonBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

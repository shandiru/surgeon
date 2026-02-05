"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuTriangleAlert } from "react-icons/lu";

export default function CervicalCancerSymptoms() {
  const symptoms = [
    "Pelvic pain",
    "Pain or bleeding during or after sex",
    "Unusual vaginal discharge",
    "Bleeding between periods",
    "Bleeding after menopause",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="mt-10 py-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-light-pink-1 text-primary-pink flex flex-col md:flex-row gap-6 rounded-xl border border-light-pink-2 border-l-4 border-l-primary-pink shadow-sm p-6">
          {/* Content Section */}
          <div className="flex flex-col gap-6 md:w-1/2" data-aos="fade-left">
            {/* Header with icon and title */}
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary-pink">
                <LuTriangleAlert className="text-primary-pink w-6 h-6" />
                Symptoms of Cervical Cancer
              </div>
              <p className="text-black">
                Cervical cancer often develops without early warning signs.
                That's why regular screenings are essential.
              </p>
            </div>

            {/* Symptom List */}
            <div className="grid md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white w-full border border-light-pink-2 rounded-lg transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg hover:border-light-pink-2 active:bg-light-pink-1 active:shadow-lg active:border-light-pink-2"
                  data-aos="fade-left"
                >
                  <div className="w-2 h-2 bg-primary-pink rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-primary-pink">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="md:w-1/2 flex justify-center mt-6 md:mt-0"
            data-aos="fade-right"
          >
            <img
              src="/cervical.png"
              alt="Cervical Cancer Symptoms"
              className="w-full h-auto max-w-md rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

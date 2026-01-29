"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStethoscope } from "react-icons/fa";

const tests = [
  {
    id: 1,
    title: "CT scan",
    description: "Produces detailed images of the ovaries and shows abnormalities",
  },
  {
    id: 2,
    title: "X-ray",
    description: "Checks if cancer has spread to other areas of the body",
  },
  {
    id: 3,
    title: "Biopsy",
    description: "Tissue or cells are examined for cancer",
  },
  {
    id: 4,
    title: "Laparoscopy",
    description: "A small camera is inserted into the abdomen to directly examine the ovaries",
  },
];

export default function OvarianCancerDiagnosis() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="diagnosis" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStethoscope className="h-8 w-8" style={{ color: deepPink }} />
            <h3 className="text-3xl font-bold text-primary-pink">Diagnosis of Ovarian Cancer</h3>
          </div>
          <p className="text-black text-lg">
            Several tests and scans can help identify ovarian cancer, including:
          </p>
        </div>

        {/* Diagnostic Tests */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white text-black flex flex-col gap-4 rounded-xl p-6 shadow-md 
                         transition duration-300 ease-in-out 
                         hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 font-semibold text-primary-pink">
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-bold"
                  style={{ borderColor: pink, color: deepPink }}
                >
                  {test.id}
                </span>
                {test.title}
              </div>
              <p className="text-black/90">{test.description}</p>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div
          className="rounded-xl px-6 py-6 shadow-md"
          style={{ backgroundColor: pink }}
          data-aos="fade-up"
        >
          <div className="flex items-start gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center font-bold"
              style={{ backgroundColor: "#fff", color: deepPink }}
            >
              →
            </div>
            <p className="text-white font-medium" style={{ color: deepPink }}>
              If ovarian cancer is suspected, these tests also help determine how far the cancer has
              spread.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

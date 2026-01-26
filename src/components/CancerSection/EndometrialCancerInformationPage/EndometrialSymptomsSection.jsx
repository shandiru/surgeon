"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExclamation } from "react-icons/fa";
import { LuTriangleAlert } from "react-icons/lu";

export default function EndometrialSymptomsSection() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B"; // stronger deep pink for headings and important text

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8" data-aos="fade-left">
          <LuTriangleAlert className="h-8 w-8" style={{ color: deepPink }} />
          <h2 className="text-3xl font-bold" style={{ color: deepPink }}>
            Symptoms of Endometrial Cancer
          </h2>
        </div>

        {/* Card */}
        <div
          className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 shadow-sm mb-6 
                     transition-all duration-300 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
          data-aos="fade-up"
        >
          {/* Card Header */}
          <div className="px-6">
            <div className="font-semibold text-xl mb-1" style={{ color: deepPink }}>
              Early Warning Signs
            </div>
            <div className="text-sm text-black">
              Endometrial cancer often shows early warning signs. The most common is abnormal
              vaginal bleeding.
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3" data-aos="fade-left">
                {[
                  "Unusual bleeding or spotting between periods or after menopause",
                  "Long, heavy, or frequent bleeding (especially in women over 40)",
                  "Thin white or clear vaginal discharge (postmenopausal women)",
                  "Lower abdominal or pelvic pain",
                ].map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-white mt-1"
                      style={{ backgroundColor: pink }}
                    >
                      <FaExclamation />
                    </span>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3" data-aos="fade-left">
                {[
                  "A lump or mass in the lower abdomen",
                  "Difficulty or pain while urinating",
                  "Pain during sexual intercourse",
                  "Unexplained weight loss",
                ].map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-white mt-1"
                      style={{ backgroundColor: pink }}
                    >
                      <FaExclamation />
                    </span>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div
            className="mt-6 p-4 rounded-lg mx-6 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            style={{ backgroundColor: pink, border: `1px solid ${pink}` }}
            data-aos="fade-up"
          >
            <p className="text-sm font-medium" style={{ color: deepPink }}>
              <strong>Important:</strong> If you experience any of these symptoms, it's important to
              seek medical evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

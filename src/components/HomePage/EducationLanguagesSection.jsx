"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EducationLanguagesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const education = [
    {
      title: "MD, Biological Sciences",
      place: "Lancaster University",
      years: "2010 - 2012",
    },
    {
      title: "MRCOG",
      place: "Royal College of Obstetricians and Gynaecologists",
      years: "2005",
    },
    {
      title: "MD",
      place: "The Maharaja Sayjirao University of Baroda, India",
      years: "1999 - 2002",
    },
    {
      title: "MBBS",
      place: "The Maharaja Sayjirao University of Baroda, India",
      years: "1993 - 1999",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#fff7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Education & Qualifications */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-section text-primary-pink mb-10 text-center lg:text-left">
              Education & Qualifications
            </h2>

            <div className="space-y-6 flex-1">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-sm text-center lg:text-left border border-primary-pink/10 
                             transition-all duration-300 hover:scale-[1.02] 
                             hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.2)] active:scale-[0.98]"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <h3 className="text-card-title font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-primary-pink font-medium text-body">
                    {item.place}
                  </p>
                  <p className="text-gray-500 text-body-small">{item.years}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div
            className="bg-white rounded-xl shadow-sm p-8 flex flex-col h-full border border-primary-pink/10
                       transition-all duration-300 hover:shadow-[0_0_30px_3px_rgba(255,75,139,0.25)]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* Doctor Image */}
            <div className="flex justify-center mb-6">
              <img
                src="/new-doctor.png" // <-- உங்கள் doctor image path
                alt="Doctor"
                className="w-32 h-32 object-cover rounded-full border-4 border-primary-pink/30 shadow-md"
                data-aos="zoom-in"
              />
            </div>

            <div className="text-center pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary-pink mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <div className="font-semibold text-subsection text-gray-900">
                Languages Spoken
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center gap-4">
                {["English", "Hindi", "Gujarati"].map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center rounded-md font-medium text-body-large px-6 py-2 
                               bg-[#FFF1F5] text-black border border-primary-pink 
                               transition-all duration-300 hover:bg-primary-pink hover:text-white 
                               hover:shadow-[0_0_15px_1px_rgba(255,75,139,0.3)] hover:scale-105 
                               active:scale-95"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 200}
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <p
                className="text-black/90 mt-6 text-center text-body-small"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Fluent communication in multiple languages to better serve
                diverse patient populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

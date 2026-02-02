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
      title: "Subspecialist Accreditation in Gynaecological Oncology",
      place: "RCOG, UK",
      years: "May 2015",
    },
    {
      title: "Doctor of Medicine (MD) in Biological Sciences",
      place: "Lancaster University, UK",
      years: "Dec 2013",
    },
    {
      title: "PG Diploma in Medical Law",
      place: "Northumbria University, UK",
      years: "Oct 2009",
    },
    {
      title: "DFSRH (DFFP)",
      place: "RCOG, London",
      years: "June 2009",
    },
    {
      title: "MRCOG",
      place: "London",
      years: "Dec 2005",
    },
    {
      title: "MD (Obstetrics & Gynaecology)",
      place: "Maharaja Sayjirao University, SSG Hospital, Baroda, Gujarat, India",
      years: "Feb 2002",
    },
    {
      title: "PG Diploma in Medicolegal System",
      place: "India",
      years: "Dec 1999",
    },
    {
      title: "MBBS",
      place: "Baroda Medical College, Maharaja Sayjirao University, Baroda, Gujarat, India",
      years: "Dec 1999",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#fff7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-section text-primary-pink mb-4">
            Qualifications
          </h2>
          <p className="text-body-large text-black/90">
            Academic credentials and professional certifications
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow-sm border border-primary-pink/10
                         transition-all duration-300 hover:scale-[1.02]
                         hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.2)] active:scale-[0.98]"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-pink/10 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-primary-pink font-medium text-body-small">
                    {item.place}
                  </p>
                  <p className="text-gray-500 text-caption">{item.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Spoken */}
        <div
          className="mt-12 bg-white rounded-xl shadow-sm p-8 border border-primary-pink/10
                     transition-all duration-300 hover:shadow-[0_0_30px_3px_rgba(255,75,139,0.2)]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src="/new-doctor.png"
              alt="Doctor"
              className="w-20 h-20 object-cover rounded-full border-4 border-primary-pink/30 shadow-md"
              data-aos="zoom-in"
            />
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span className="font-semibold text-body-large text-gray-900">
                  Languages Spoken
                </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["English", "Hindi", "Gujarati"].map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center rounded-md font-medium text-body px-5 py-2
                               bg-[#FFF1F5] text-black border border-primary-pink
                               transition-all duration-300 hover:bg-primary-pink hover:text-white
                               hover:shadow-[0_0_15px_1px_rgba(255,75,139,0.3)] hover:scale-105
                               active:scale-95"
                    data-aos="zoom-in"
                    data-aos-delay={300 + idx * 100}
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-black/90 text-body-small text-center md:text-left">
                Fluent communication in multiple languages to better serve diverse patient populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

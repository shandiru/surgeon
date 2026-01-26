"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfessionalExperience() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary-pink mb-4" data-aos="fade-up">
            Professional Experience
          </h2>
          <p className="text-body-large text-black" data-aos="fade-up" data-aos-delay="100">
            Current positions and affiliations
          </p>
        </div>

        {/* Hospital Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              hospital: "Nottingham University Hospital",
              role: "Consultant Gynaecological Oncologist",
              place: "Nottingham University Hospitals NHS Trust",
              desc: "Leading specialist cancer care services",
            },
            {
              hospital: "The Park Hospital (Circle Health Group)",
              role: "Consultant Gynaecologist",
              place: "Private Practice",
              desc: "Comprehensive women's health services",
            },
            {
              hospital: "The Park Hospital (Circle Health Group)",
              role: "Consultant Gynaecologist",
              place: "Private Practice",
              desc: "Advanced surgical procedures",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col gap-4 rounded-xl border border-primary-pink/10 shadow-sm p-6 transition-all duration-300 
                         hover:shadow-xl hover:scale-[1.02] active:scale-[0.99]"
              data-aos="fade-up"
              data-aos-delay={`${idx * 150}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-pink rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-body-small text-gray-900">{item.hospital}</p>
                  <p className="text-primary-pink font-medium text-body-small">{item.role}</p>
                </div>
              </div>
              <div>
                <p className="text-black text-body-small">{item.place}</p>
                <p className="text-gray-500 text-body-small mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Membership & Leadership Section */}
        <div
          className="bg-white flex flex-col gap-8 rounded-xl border border-primary-pink/10 shadow-sm p-8 transition-all duration-300 
                     hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <h2 className="font-semibold text-subsection text-primary-pink">
              Professional Memberships & Leadership
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Memberships */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Professional Memberships
              </h3>
              <div className="space-y-3">
                {[
                  "Royal College of Obstetricians and Gynaecologists",
                  "British Gynaecological Cancer Society",
                  "British Society of Colposcopy and Cervical Cytology",
                  "International Gynaecological Cancer Society",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-body-small"
                    data-aos="fade-up"
                    data-aos-delay={`${200 + idx * 100}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-pink mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Leadership Positions
              </h3>
              <div className="space-y-4">
                <div
                  className="bg-light-pink-1 p-4 rounded-lg transition-all duration-300 
                 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="font-semibold text-body text-gray-900">Honorary Secretary</h4>
                  <p className="text-black text-body-small">
                    British Gynaecological Cancer Society
                  </p>
                  <p className="text-gray-500 text-caption">July 2022 - July 2025</p>
                </div>

                <div
                  className="bg-light-pink-1 p-4 rounded-lg transition-all duration-300 
                 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    IT and Social Media Subgroup Chair
                  </h4>
                  <p className="text-black text-body-small">
                    British Gynaecological Cancer Society
                  </p>
                  <p className="text-gray-500 text-caption">July 2020 - July 2023</p>
                </div>

                <div
                  className="bg-light-pink-1 p-4 rounded-lg transition-all duration-300 
                 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h4 className="font-semibold text-body text-gray-900">Gyn Oncology Lead</h4>
                  <p className="text-black text-body-small">Nottingham NHS</p>
                  {/* <p className="text-gray-500 text-xs">[Add start date] - Present</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

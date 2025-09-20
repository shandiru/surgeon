'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProfessionalExperience() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="experience-heading text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Professional Experience
          </h2>
          <p
            className="experience-subheading text-xl text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Current positions and affiliations
          </p>
        </div>

        {/* Hospital Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              hospital: 'Nottingham University Hospital',
              role: 'Consultant Gynaecological Oncologist',
              place: 'Nottingham University Hospitals NHS Trust',
              desc: 'Leading specialist cancer care services',
            },
            {
              hospital: 'Park Hospital',
              role: 'Consultant Gynaecologist',
              place: 'Private Practice',
              desc: "Comprehensive women's health services",
            },
            {
              hospital: 'Spire Nottingham Hospital',
              role: 'Consultant Gynaecologist',
              place: 'Private Practice',
              desc: 'Advanced surgical procedures',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="hospital-card bg-white flex flex-col gap-6 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)] hover:scale-[1.02] active:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)] active:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={`${idx * 150}`}
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6 pb-4">
                <div className="w-12 h-12 bg-[#ffc5d3] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="font-semibold text-lg text-gray-900">
                  {item.hospital}
                </div>
              </div>
              <div className="px-6">
                <p className="text-[#ff97b3] font-semibold mb-2">{item.role}</p>
                <p className="text-gray-600 text-sm">{item.place}</p>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Membership & Leadership Section */}
        <div
          className="bg-white flex flex-col gap-6 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)] active:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center pb-6">
            <h2 className="membership-title font-semibold text-2xl text-gray-900">
              Professional Memberships &amp; Leadership
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 px-6">
            {/* Memberships */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#ff97b3]">
                Professional Memberships
              </h3>
              <div className="space-y-3">
                {[
                  'Royal College of Obstetricians and Gynaecologists',
                  'British Gynaecological Cancer Society',
                  'British Society of Colposcopy and Cervical Cytology',
                  'International Gynaecological Cancer Society',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="membership-item flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay={`${200 + idx * 100}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#ff97b3] mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
              <h3 className="text-lg font-semibold mb-4 text-[#ff97b3]">
                Leadership Positions
              </h3>
              <div className="space-y-4">
                <div
                  className="leadership-card bg-[#ffc5d3]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)] active:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="font-semibold text-gray-900">
                    Honorary Secretary
                  </h4>
                  <p className="text-gray-600 text-sm">
                    British Gynaecological Cancer Society
                  </p>
                </div>
                <div
                  className="leadership-card bg-[#ffc5d3]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)] active:shadow-[0_0_25px_2px_rgba(255,197,211,0.8)]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="font-semibold text-gray-900">
                    IT and Social Media Subgroup Chair
                  </h4>
                  <p className="text-gray-600 text-sm">
                    British Gynaecological Cancer Society
                  </p>
                  <p className="text-gray-500 text-xs">
                    July 2020 - July 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

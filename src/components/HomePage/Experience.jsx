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
          <h2
            className="text-section text-primary-pink mb-4"
            data-aos="fade-up"
          >
            Professional Experience
          </h2>
          <p
            className="text-body-large text-black/90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Current positions and affiliations
          </p>
        </div>

        {/* Hospital Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
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
              desc: "Comprehensive women's health services and Advanced surgical procedures",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col gap-4 rounded-xl border border-primary-pink/10 shadow-sm p-6 transition-all duration-300
                         hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.15)] hover:scale-[1.02] active:scale-[0.99] w-full md:w-[calc(50%-1rem)] lg:w-[380px]"
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
                  <p className="font-semibold text-body-small text-gray-900">
                    {item.hospital}
                  </p>
                  <p className="text-primary-pink font-medium text-body-small">
                    {item.role}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-black/90 text-body-small">{item.place}</p>
                <p className="text-gray-500 text-body-small mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Membership & Leadership Section */}
        <div
          className="bg-white flex flex-col gap-8 rounded-xl border border-primary-pink/10 shadow-sm p-8 transition-all duration-300
                     hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.2)]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <h2 className="font-semibold text-subsection text-primary-pink">
              Professional Memberships & Leadership
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Memberships & Society Roles */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Professional Memberships & Society Roles
              </h3>
              <div className="space-y-4">
                {[
                  {
                    org: "British Gynaecological Cancer Society (BGCS)",
                    role: "Patient & Public Engagement Chair",
                    previous: "Previously held roles: Honorary Secretary, IT & Social Media Lead, Midlands Representative, Trainees Representative",
                  },
                  {
                    org: "British Society for Colposcopy and Cervical Pathology (BSCCP)",
                    role: "BSCCP OSCE Examiner | Faculty Member (BSCCP Colposcopy Course, Birmingham)",
                  },
                  {
                    org: "European Society of Gynaecological Oncology (ESGO)",
                    role: "Member | Guidelines Reviewer | Past UK Representative",
                  },
                  {
                    org: "Royal College of Obstetricians and Gynaecologists (RCOG)",
                    role: "Tier 2 Medical Educator | Advisory Appointment Committees (AAC) Panel Member",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-body-small"
                    data-aos="fade-up"
                    data-aos-delay={`${200 + idx * 100}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-pink mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <div>
                      <span className="text-black font-medium">{item.org}</span>
                      <p className="text-gray-600 text-caption">{item.role}</p>
                      {item.previous && (
                        <p className="text-gray-500 text-caption italic">{item.previous}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Academic Supervision */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Research & Academic Supervision
              </h3>
              <div className="space-y-4">
                <div
                  className="bg-[#FFF1F5] p-4 rounded-lg transition-all duration-300
                   hover:shadow-[0_0_20px_2px_rgba(255,75,139,0.2)]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    Co-supervisor for PhD Research Students
                  </h4>
                  <p className="text-black/90 text-body-small">University of Nottingham</p>
                  <ul className="text-gray-600 text-caption mt-2 space-y-1">
                    <li>• Dr Roberta Schiemer (25% supervision)</li>
                    <li>• Dr Addo-Yobo (25% supervision)</li>
                    <li>• Jessica Grant (10% supervision)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership & Clinical Service Roles */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Leadership & Clinical Service Roles
              </h3>
              <div className="space-y-4">
                <div
                  className="bg-[#FFF1F5] p-4 rounded-lg transition-all duration-300
                   hover:shadow-[0_0_20px_2px_rgba(255,75,139,0.2)]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    Service Lead — Gynaecological Oncology
                  </h4>
                  <p className="text-black/90 text-body-small">
                    Nottingham University Hospitals NHS Trust
                  </p>
                </div>
                <div
                  className="bg-[#FFF1F5] p-4 rounded-lg transition-all duration-300
                   hover:shadow-[0_0_20px_2px_rgba(255,75,139,0.2)]"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    Medical Appointment Committee — Gynaecology Representative
                  </h4>
                  <p className="text-black/90 text-body-small">
                    Spire Nottingham Hospital
                  </p>
                </div>
              </div>
            </div>

            {/* Training, Teaching & Robotic Surgery */}
            <div>
              <h3 className="text-body-large font-semibold mb-4 text-gray-900">
                Training, Teaching & Robotic Surgery
              </h3>
              <div className="space-y-4">
                <div
                  className="bg-[#FFF1F5] p-4 rounded-lg transition-all duration-300
                   hover:shadow-[0_0_20px_2px_rgba(255,75,139,0.2)]"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    Subspecialty Training Programme Supervisor
                  </h4>
                  <ul className="text-gray-600 text-caption mt-2 space-y-1">
                    <li>• Dr Emmanouil Katsanevakis (from May 2024)</li>
                    <li>• Dr Roberta Schiemer (from June 2025 – Academic)</li>
                  </ul>
                </div>
                <div
                  className="bg-[#FFF1F5] p-4 rounded-lg transition-all duration-300
                   hover:shadow-[0_0_20px_2px_rgba(255,75,139,0.2)]"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <h4 className="font-semibold text-body text-gray-900">
                    Intuitive Da Vinci Robotic Surgeon & Proctor
                  </h4>
                  <p className="text-black/90 text-body-small">
                    Robotic surgery trainer & case observation supervisor (2023 onwards)
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

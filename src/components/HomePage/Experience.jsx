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
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-subsection text-primary-pink">
            Professional Memberships & Leadership
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {/* Professional Memberships Card */}
          <div
            className="bg-[#FFF1F5] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.15)]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-pink rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-body-large font-semibold text-gray-900">Society Memberships</h3>
            </div>
            <div className="space-y-3">
              {[
                { abbr: "BGCS", name: "British Gynaecological Cancer Society", role: "Patient & Public Engagement Chair" },
                { abbr: "BSCCP", name: "British Society for Colposcopy and Cervical Pathology", role: "OSCE Examiner & Faculty Member" },
                { abbr: "ESGO", name: "European Society of Gynaecological Oncology", role: "Guidelines Reviewer & Past UK Rep" },
                { abbr: "RCOG", name: "Royal College of Obstetricians and Gynaecologists", role: "Tier 2 Medical Educator & AAC Panel" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/60 rounded-lg p-3">
                  <span className="text-primary-pink font-bold text-caption min-w-[50px]">{item.abbr}</span>
                  <div className="flex-1">
                    <p className="text-body-small font-medium text-gray-900">{item.name}</p>
                    <p className="text-caption text-gray-600">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Roles Card */}
          <div
            className="bg-[#FFF1F5] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.15)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-pink rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-body-large font-semibold text-gray-900">Leadership Roles</h3>
            </div>
            <div className="space-y-3">
              {[
                { title: "Service Lead — Gynaecological Oncology", place: "Nottingham University Hospitals NHS Trust" },
                { title: "Medical Appointment Committee", place: "Gynaecology Representative, Spire Nottingham Hospital" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/60 rounded-lg p-3">
                  <p className="text-body-small font-medium text-gray-900">{item.title}</p>
                  <p className="text-caption text-gray-600">{item.place}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Supervision Card */}
          <div
            className="bg-[#FFF1F5] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.15)]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-pink rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-body-large font-semibold text-gray-900">Training & Supervision</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-body-small font-medium text-gray-900">Subspecialty Training Programme Supervisor</p>
                <p className="text-caption text-gray-600">Dr Emmanouil Katsanevakis (May 2024) • Dr Roberta Schiemer (June 2025)</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-body-small font-medium text-gray-900">Da Vinci Robotic Surgeon & Proctor</p>
                <p className="text-caption text-gray-600">Robotic surgery trainer & case observation supervisor (2023+)</p>
              </div>
            </div>
          </div>

          {/* Research Card */}
          <div
            className="bg-[#FFF1F5] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.15)]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-pink rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                  <path d="M9 12h6" />
                  <path d="M9 16h6" />
                </svg>
              </div>
              <h3 className="text-body-large font-semibold text-gray-900">Research Supervision</h3>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="text-body-small font-medium text-gray-900 mb-2">PhD Co-supervisor — University of Nottingham</p>
              <div className="space-y-1">
                {[
                  { name: "Dr Roberta Schiemer", percent: "25%" },
                  { name: "Dr Addo-Yobo", percent: "25%" },
                  { name: "Jessica Grant", percent: "10%" },
                ].map((student, idx) => (
                  <div key={idx} className="flex justify-between text-caption">
                    <span className="text-gray-700">{student.name}</span>
                    <span className="text-primary-pink font-medium">{student.percent}</span>
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

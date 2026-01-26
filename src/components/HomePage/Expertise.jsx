"use client";

import React from "react";
import { FaStethoscope, FaUserFriends, FaAward, FaMicroscope, FaCheckCircle } from "react-icons/fa";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Laparoscopic Hysterectomy",
      description: "Minimally invasive surgical removal of the uterus",
      icon: <FaStethoscope size={28} className="text-primary-pink" />,
    },
    {
      title: "Fibroids",
      description: "Treatment of uterine fibroids and related symptoms",
      icon: <FaUserFriends size={28} className="text-primary-pink" />,
    },
    {
      title: "Ovarian Cyst",
      description: "Diagnosis and treatment of ovarian cysts",
      icon: <FaAward size={28} className="text-primary-pink" />,
    },
    {
      title: "Ovarian Cancer",
      description: "Specialized oncological care and treatment",
      icon: <FaStethoscope size={28} className="text-primary-pink" />,
    },
    {
      title: "Colposcopy",
      description: "Cervical screening and diagnostic procedures",
      icon: <FaMicroscope size={28} className="text-primary-pink" />,
    },
    {
      title: "Endometrial Cancer",
      description: "Comprehensive treatment of uterine cancer",
      icon: <FaAward size={28} className="text-primary-pink" />,
    },
  ];

  const surgicalExpertise = [
    {
      title: "Laparoscopic Hysterectomy",
      description: "Advanced minimally invasive techniques for faster recovery",
    },
    {
      title: "Fibroid Treatment",
      description: "Comprehensive management including surgical and non-surgical options",
    },
    {
      title: "Ovarian Procedures",
      description: "Expert treatment of ovarian cysts and related conditions",
    },
  ];

  const cancerCare = [
    {
      title: "Ovarian Cancer",
      description: "Specialized oncological treatment and multidisciplinary care",
    },
    {
      title: "Endometrial Cancer",
      description: "Comprehensive diagnosis and treatment of uterine cancers",
    },
    {
      title: "Colposcopy",
      description: "Advanced cervical screening and early detection procedures",
    },
    {
      title: "Vulvar Cancer",
      description: "Expert diagnosis and treatment of vulvar malignancies",
    },
    {
      title: "Cervical Cancer",
      description: "Comprehensive cervical cancer care including prevention and treatment",
    },
  ];

  return (
    <section id="specialties" className="bg-light-pink-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary-pink mb-4" data-aos="fade-up">
            Areas of Expertise
          </h2>
          <p className="text-body-large text-black" data-aos="fade-up" data-aos-delay="100">
            Specialized procedures and treatments in women's health
          </p>
        </div>

        {/* Primary Specialties */}
        <div
          className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-primary-pink/10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center justify-center mx-auto rounded-md font-medium bg-primary-pink text-white px-4 py-2 text-button shadow-sm">
              Primary Specialty: Obstetrics & Gynaecology
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="text-center group transition-all duration-300 hover:scale-[1.05] hover:shadow-xl rounded-xl p-4 bg-light-pink-1"
                data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm bg-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1 text-body-small text-gray-900">{item.title}</h3>
                <p className="text-black text-caption">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Expertise */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Surgical */}
          <div
            className="bg-white rounded-xl border border-primary-pink/10 shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="text-card-title font-semibold text-primary-pink">
              Surgical Expertise
            </div>
            <ul className="space-y-4">
              {surgicalExpertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-pink mt-1" />
                  <div>
                    <div className="font-semibold text-body text-gray-900">{item.title}</div>
                    <p className="text-body-small text-black">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancer Care */}
          <div
            className="bg-white rounded-xl border border-primary-pink/10 shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl"
            data-aos="fade-down"
          >
            <div className="text-card-title font-semibold text-primary-pink">Cancer Care</div>
            <ul className="space-y-4">
              {cancerCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-pink mt-1" />
                  <div>
                    <div className="font-semibold text-body text-gray-900">{item.title}</div>
                    <p className="text-body-small text-black">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

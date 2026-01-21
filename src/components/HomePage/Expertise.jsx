'use client';

import React from 'react';
import {
  FaStethoscope,
  FaUserFriends,
  FaAward,
  FaMicroscope,
  FaCheckCircle,
} from 'react-icons/fa';

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: 'Laparoscopic Hysterectomy',
      description: 'Minimally invasive surgical removal of the uterus',
      icon: <FaStethoscope size={28} className="text-[#FF4B8B]" />,
    },
    {
      title: 'Fibroids',
      description: 'Treatment of uterine fibroids and related symptoms',
      icon: <FaUserFriends size={28} className="text-[#FF4B8B]" />,
    },
    {
      title: 'Ovarian Cyst',
      description: 'Diagnosis and treatment of ovarian cysts',
      icon: <FaAward size={28} className="text-[#FF4B8B]" />,
    },
    {
      title: 'Ovarian Cancer',
      description: 'Specialized oncological care and treatment',
      icon: <FaStethoscope size={28} className="text-[#FF4B8B]" />,
    },
    {
      title: 'Colposcopy',
      description: 'Cervical screening and diagnostic procedures',
      icon: <FaMicroscope size={28} className="text-[#FF4B8B]" />,
    },
    {
      title: 'Endometrial Cancer',
      description: 'Comprehensive treatment of uterine cancer',
      icon: <FaAward size={28} className="text-[#FF4B8B]" />,
    },
  ];

  const surgicalExpertise = [
    {
      title: 'Laparoscopic Hysterectomy',
      description:
        'Advanced minimally invasive techniques for faster recovery',
    },
    {
      title: 'Fibroid Treatment',
      description:
        'Comprehensive management including surgical and non-surgical options',
    },
    {
      title: 'Ovarian Procedures',
      description:
        'Expert treatment of ovarian cysts and related conditions',
    },
  ];

  const cancerCare = [
  {
    title: 'Ovarian Cancer',
    description:
      'Specialized oncological treatment and multidisciplinary care',
  },
  {
    title: 'Endometrial Cancer',
    description:
      'Comprehensive diagnosis and treatment of uterine cancers',
  },
  {
    title: 'Colposcopy',
    description:
      'Advanced cervical screening and early detection procedures',
  },
  {
    title: 'Vulvar Cancer',
    description:
      'Expert diagnosis and treatment of vulvar malignancies',
  },
  {
    title: 'Cervical Cancer',
    description:
      'Comprehensive cervical cancer care including prevention and treatment',
  },
];

  return (
    <section id="specialties" className="bg-[#FFF1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-section text-[#FF4B8B] mb-4"
            data-aos="fade-up"
          >
            Areas of Expertise
          </h2>
          <p
            className="text-body-large text-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Specialized procedures and treatments in women's health
          </p>
        </div>

        {/* Primary Specialties */}
        <div
          className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-[#FF4B8B]/10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center justify-center mx-auto rounded-md font-medium bg-[#FF4B8B] text-white px-4 py-2 text-button shadow-sm">
              Primary Specialty: Obstetrics & Gynaecology
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="text-center group transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_25px_2px_rgba(255,75,139,0.25)] rounded-xl p-4 bg-[#FFF1F5]"
                data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm bg-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1 text-body-small text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-caption">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Expertise */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Surgical */}
          <div
            className="bg-white rounded-xl border border-[#FF4B8B]/10 shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,75,139,0.25)]"
            data-aos="fade-up"
          >
            <div className="text-card-title font-semibold text-[#FF4B8B]">
              Surgical Expertise
            </div>
            <ul className="space-y-4">
              {surgicalExpertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FF4B8B] mt-1" />
                  <div>
                    <div className="font-semibold text-body text-gray-900">
                      {item.title}
                    </div>
                    <p className="text-body-small text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancer Care */}
          <div
            className="bg-white rounded-xl border border-[#FF4B8B]/10 shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,75,139,0.25)]"
            data-aos="fade-down"
          >
            <div className="text-card-title font-semibold text-[#FF4B8B]">
              Cancer Care
            </div>
            <ul className="space-y-4">
              {cancerCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FF4B8B] mt-1" />
                  <div>
                    <div className="font-semibold text-body text-gray-900">
                      {item.title}
                    </div>
                    <p className="text-body-small text-gray-600">{item.description}</p>
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

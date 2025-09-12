'use client';

import React, { useLayoutEffect, useRef } from 'react';
import {
  FaStethoscope,
  FaUserFriends,
  FaAward,
  FaMicroscope,
  FaCheckCircle,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SpecialtiesSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden state
      gsap.set([
        '.specialties-heading',
        '.specialties-subtext',
        '.specialty-card',
        '.surgical-box',
        '.cancer-box'
      ], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.to('.specialties-heading', { y: 0, opacity: 1 })
        .to('.specialties-subtext', { y: 0, opacity: 1 }, '-=0.5')
        .to('.specialty-card', { y: 0, opacity: 1, stagger: 0.1 }, '-=0.3')
        .to('.surgical-box', { x: 0, y: 0, opacity: 1 }, '-=0.2')
        .to('.cancer-box', { x: 0, y: 0, opacity: 1 }, '-=0.5');
    }, root);

    return () => ctx.revert();
  }, []);

  const specialties = [
    {
      title: 'Laparoscopic Hysterectomy',
      description: 'Minimally invasive surgical removal of the uterus',
      icon: <FaStethoscope size={28} className="text-[#FFC5D3]" />,
    },
    {
      title: 'Fibroids',
      description: 'Treatment of uterine fibroids and related symptoms',
      icon: <FaUserFriends size={28} className="text-[#FFC5D3]" />,
    },
    {
      title: 'Ovarian Cyst',
      description: 'Diagnosis and treatment of ovarian cysts',
      icon: <FaAward size={28} className="text-[#FFC5D3]" />,
    },
    {
      title: 'Ovarian Cancer',
      description: 'Specialized oncological care and treatment',
      icon: <FaStethoscope size={28} className="text-[#FFC5D3]" />,
    },
    {
      title: 'Colposcopy',
      description: 'Cervical screening and diagnostic procedures',
      icon: <FaMicroscope size={28} className="text-[#FFC5D3]" />,
    },
    {
      title: 'Endometrial Cancer',
      description: 'Comprehensive treatment of uterine cancer',
      icon: <FaAward size={28} className="text-[#FFC5D3]" />,
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
  ];

  return (
    <section id="specialties" className="py-20 bg-gray-50" ref={root}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="specialties-heading text-4xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="specialties-subtext text-xl text-gray-600">
            Specialized procedures and treatments in women's health
          </p>
        </div>

        {/* Primary Specialties */}
        <div className="bg-[#FFF0F4] rounded-2xl p-8 mb-12 shadow-sm">
          <div className="text-center mb-8">
            <span className="inline-flex items-center justify-center mx-auto rounded-md font-medium bg-[#FFC5D3] text-white px-4 py-2 text-sm sm:text-base">
              Primary Specialty: Obstetrics & Gynaecology
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="specialty-card text-center group transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_2px_rgba(255,197,211,0.7)] rounded-xl p-3 bg-white"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1 text-sm text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Expertise */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Surgical */}
          <div className="surgical-box bg-white rounded-xl shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.6)]">
            <div className="text-xl font-semibold text-[#FF97B3]">
              Surgical Expertise
            </div>
            <ul className="space-y-4">
              {surgicalExpertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FFC5D3] mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancer Care */}
          <div className="cancer-box bg-white rounded-xl shadow-sm p-6 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,197,211,0.6)]">
            <div className="text-xl font-semibold text-[#FF97B3]">
              Cancer Care
            </div>
            <ul className="space-y-4">
              {cancerCare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#FFC5D3] mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
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

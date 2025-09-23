'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSectionView() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const cards = [
    {
      title: 'Clinical Excellence',
      desc: 'Providing world-class care with the latest evidence-based treatments and techniques.',
      icon: (
        <>
          <path d="M11 2v2" />
          <path d="M5 2v2" />
          <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
          <path d="M8 15a6 6 0 0 0 12 0v-3" />
          <circle cx="20" cy="10" r="2" />
        </>
      ),
    },
    {
      title: 'Compassionate Care',
      desc: 'Supporting patients and families through every step of their healthcare journey.',
      icon: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
    },
    {
      title: 'Research & Innovation',
      desc: 'Contributing to medical advancement through research and professional leadership.',
      icon: (
        <>
          <path d="M15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-[#FF4B8B] mb-4"
            data-aos="fade-up"
          >
            About Mr Ketankumar Gajjar
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A leading consultant in gynaecological oncology, dedicated to providing
            exceptional care and advancing women's health through clinical excellence
            and research.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#FF4B8B]/20 shadow-sm text-center p-6 transition-all duration-300 
                         md:hover:scale-105 md:hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.3)]
                         active:scale-95 active:shadow-[0_0_15px_2px_rgba(255,75,139,0.25)]"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="bg-[#FF4B8B]/10 group-hover:bg-[#FF4B8B]/20 transition-colors duration-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF4B8B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight } from "lucide-react";

const HeroSectionView = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#FDE7EB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="hero-left" data-aos="fade-up">
            <div className="mb-4 hero-badge" data-aos="fade-down">
              {/* <span className="inline-block border border-[#FF4B8B] text-[#FF4B8B] text-xs font-semibold px-3 py-1 rounded-full">
                Consultant Gynaecological Oncologist
              </span> */}
               <span className="inline-block border border-[#FF4B8B] text-[#FF4B8B] text-xs font-semibold px-3 py-1 rounded-full">
                 Gynocolisgist 
              </span>


             
            </div>

            <h1 className="hero-title text-5xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up">
              Expert Care in <span className="text-[#FF4B8B]">Women's Health</span>
            </h1>

            <p className="hero-desc text-lg text-gray-700 mb-8 leading-relaxed" data-aos="fade-up">
              With 26 years of dedicated experience in gynaecological oncology,
              providing compassionate, evidence-based care for women across Nottingham and beyond.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-8" data-aos="fade-up">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md bg-[#FF4B8B] text-white shadow-sm hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Schedule Consultation
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md border border-[#FF4B8B] text-[#FF4B8B] hover:bg-[#FFD6E1] hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.4)] hover:-translate-y-0.5 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="hero-icons flex items-center gap-6 text-sm text-gray-600" data-aos="fade-up">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FF4B8B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FF4B8B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>NHS & Private Practice</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative hero-right" data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.4)] hover:-translate-y-1">
              <img
                src="/new.jpeg"
                alt="Mr Ketankumar Gajjar"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="hero-bubble absolute -bottom-4 -right-4 bg-[#FF4B8B] text-white px-4 py-3 rounded-xl shadow-md" data-aos="fade-up">
                <div className="text-center">
                  <div className="text-xl font-bold leading-none">26</div>
                  <div className="text-xs mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionView;

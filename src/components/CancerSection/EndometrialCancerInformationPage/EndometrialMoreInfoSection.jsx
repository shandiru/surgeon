'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { LuPhone } from 'react-icons/lu';

export default function MoreInfoSection() {
  const pink = '#FFC5D3';

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <section className="bg-[#FFE6EA]" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center py-12 px-4 rounded-lg border" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-gray-900 mb-4" data-aos="fade-left">
          Need More Information?
        </h3>
        <p className="text-gray-600 mb-6" data-aos="fade-left">
          If you have concerns about any symptoms or need personalized medical advice,
          please consult with a healthcare professional.
        </p>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 text-white shadow-xs h-10 rounded-md px-6"
          style={{ backgroundColor: pink }}
          data-aos="fade-up"
        >
          <LuPhone className="h-5 w-5 mr-2" />
          Contact Your Healthcare Provider
        </button>
      </div>
    </section>
  );
}

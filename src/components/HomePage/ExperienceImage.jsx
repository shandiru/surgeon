'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ExperienceImage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="w-full flex justify-center py-10 bg-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="relative max-w-5xl w-full rounded-lg shadow-md overflow-hidden group">
        {/* Doctor Image */}
        <img
          src="/experice.png" // 
          alt="Doctor Professional"
          className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />

        {/* Pink Hover Overlay */}
        <div
          className="absolute inset-0 bg-[#FF4B8B]/40 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500 rounded-lg"
        ></div>
      </div>
    </div>
  );
}

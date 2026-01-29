"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExperienceImage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="w-full flex justify-center py-6 sm:py-10 bg-white px-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl rounded-lg shadow-md overflow-hidden group">
        {/* Doctor Image */}
        <img
          src="/experice.png"
          alt="Doctor Professional"
          className="w-full h-64 sm:h-80 md:h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />

        {/* Pink Overlay */}
        <div
          className="absolute inset-0 bg-primary-pink/40 
                     opacity-0 group-hover:opacity-100 sm:opacity-0
                     transition-opacity duration-500 rounded-lg"
        ></div>
      </div>
    </div>
  );
}

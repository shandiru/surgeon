"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OvarianCancerHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-[#FFE6EA]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-primary-pink">
            Ovarian Cancer Information
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            Understanding the symptoms, diagnosis, and treatment options for ovarian cancer.
            <br className="hidden md:block" />
            <span className="block mt-2">
              Early detection and proper medical care are crucial for the best outcomes.
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src="/Ovarian.png"
            alt="Ovarian Cancer Awareness"
            className="rounded-xl shadow-xl border-4 border-[#FFC5D3] max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

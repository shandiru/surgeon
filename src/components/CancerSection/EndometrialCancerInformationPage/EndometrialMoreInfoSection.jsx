"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { LuPhone } from "react-icons/lu";

export default function MoreInfoSection() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <section className="bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center py-12 px-4 rounded-lg shadow-sm">
        {/* Heading */}
        <h3 className="text-2xl font-bold mb-4" style={{ color: deepPink }} data-aos="fade-left">
          Need More Information?
        </h3>

        {/* Paragraph */}
        <p className="text-black mb-6 max-w-2xl mx-auto" data-aos="fade-left">
          If you have concerns about any symptoms or need personalized medical advice, please
          consult with a healthcare professional.
        </p>

        {/* Button */}
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all h-10 rounded-md px-6 shadow-md hover:scale-105 active:scale-95"
          style={{
            backgroundColor: pink,
            color: "#fff",
          }}
          data-aos="fade-up"
        >
          <LuPhone className="h-5 w-5" />
          Contact Your Healthcare Provider
        </button>
      </div>
    </section>
  );
}

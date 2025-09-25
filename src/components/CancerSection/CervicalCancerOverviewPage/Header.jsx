'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { LuStethoscope } from "react-icons/lu";

export default function CervicalCancerHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <header 
      className="border-b" 
      style={{ backgroundColor: "#FFC5D3", borderColor: "#f5a9bd" }} 
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4" data-aos="fade-left">
          {/* Icon with background */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: "#fbe1ea" }}>
            <LuStethoscope className="h-8 w-8" style={{ color: "#FF4B8B" }} />
          </div>

          {/* Heading and subtitle */}
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#FF4B8B" }}>
              Cervical Cancer Overview
            </h1>
            <p className="mt-1 text-sm" style={{ color: "#7a2f4f" }}>
              Clinical Information for Surgeons
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

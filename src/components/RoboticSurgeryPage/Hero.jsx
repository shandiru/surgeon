// src/components/RoboticSurgeryHero.jsx
import React from "react";

export default function RoboticSurgeryHero() {
  return (
    <section
      style={{ backgroundColor: "#FDEBED" }} // soft pale pink background
      className="py-20 px-8 md:px-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-hero text-primary-pink leading-tight">
              Robotic Surgery in Gynecology
            </h1>
            <p className="text-body-large md:text-subsection text-[#B51252]/80">
              Advanced da Vinci Surgical System
            </p>
            <p className="text-body-large leading-relaxed text-[#B51252]/70 max-w-xl mx-auto md:mx-0">
              Experience the future of minimally invasive gynecologic surgery with enhanced
              precision, control, and superior patient outcomes through cutting-edge robotic
              technology.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-2 bg-[#F93981] hover:bg-[#e42e72] text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 text-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with Hover/Active */}
          <div className="flex justify-center">
            <img
              src="/robotic-surgery-animation.png" // <-- place your image in public/
              alt="Robotic surgery illustration"
              className="w-full max-w-lg rounded-2xl border-4 border-white shadow-xl 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(185,18,82,0.3)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_10px_40px_rgba(185,18,82,0.3)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

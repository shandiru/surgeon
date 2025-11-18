'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const RoboticGuide1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container */}
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FF4B8B] leading-tight">
              Robotic Surgery in Gynecology
            </h1>
            <p className="text-xl md:text-2xl text-[#B51252]/80">
              Advanced da Vinci Surgical System
            </p>
            <p className="text-lg leading-relaxed text-[#B51252]/70 max-w-xl mx-auto md:mx-0">
              Experience the future of minimally invasive gynecologic surgery
              with enhanced precision, control, and superior patient outcomes
              through cutting-edge robotic technology.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                className="inline-flex items-center gap-2 bg-[#F93981] hover:bg-[#e42e72] text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300"
              >
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

      {/* Continue Button */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(2);
            setActiveButton(1);
          }}
          className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Continue to Next Section
        </button>
      </div>

    </div>
  );
};

export default RoboticGuide1;

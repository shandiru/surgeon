'use client';
import React from 'react';

const RoboticGuide1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">

      {/* Card Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-hero text-[#FF4B8B] leading-tight">
              Robotic Surgery in Gynecology
            </h1>

            <p className="text-body-large md:text-subsection text-[#B51252]/80">
              Advanced da Vinci Surgical System
            </p>

            <p className="text-body md:text-body-large leading-relaxed text-[#B51252]/70 max-w-xl mx-auto md:mx-0">
              Experience the future of minimally invasive gynecologic surgery
              with enhanced precision, control, and superior patient outcomes
              through cutting-edge robotic technology.
            </p>
          </div>

          {/* Right Image — 100% Responsive Fix */}
          <div className="flex justify-center">
            <img
              src="/robotic-surgery-animation.png"
              alt="Robotic surgery illustration"
              className="
                w-full
                max-w-[180px]     /* very small phones */
                sm:max-w-[240px]  /* small phones */
                md:max-w-[320px]  /* tablets */
                lg:max-w-[420px]  /* small laptops */
                xl:max-w-[500px]  /* desktops */

                rounded-2xl 
                border-4 border-white 
                shadow-xl 
                object-contain 
                transition duration-300

                md:hover:scale-105 
                md:hover:-translate-y-2 
                md:hover:shadow-[0_10px_40px_rgba(185,18,82,0.3)]

                md:active:scale-105 
                md:active:-translate-y-2 
                md:active:shadow-[0_10px_40px_rgba(185,18,82,0.3)]
              "
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
          className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-button transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Continue to Next Section
        </button>
      </div>

    </div>
  );
};

export default RoboticGuide1;

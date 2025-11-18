'use client';
import React, { useEffect } from 'react';
import { LuEye, LuHand, LuScissors, LuZap } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const RoboticGuide2 = ({ setShowCard, setActiveButton }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true,     // Only animate once
    });
  }, []);

  return (
    <>
      <div className="space-y-6 pb-6">
        {/* Card Container */}
        <div className="max-w-5xl mx-auto container">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FF4B8B]" data-aos="fade-down">
            Overview of Robotic Surgery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <p className="text-lg text-gray-700 mb-6">
                Robotic surgery represents a revolutionary form of minimally
                invasive surgery that uses advanced technology to enhance
                surgical precision, control, and vision. Unlike traditional
                open surgery, robotic systems enable procedures through small
                incisions with robotic arms controlled by the surgeon from a
                specialized console.
              </p>
              <p className="text-lg text-gray-700">
                The da Vinci Surgical System, developed by Intuitive Surgical,
                has transformed gynecologic surgery by significantly improving
                patient outcomes and surgical experiences.
              </p>
            </div>

            {/* Features Box */}
            <div
              className="bg-[#FFE6EE] p-8 rounded-lg border border-[#FFC5D3] 
              transition transform duration-300 
              hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(176,59,102,0.3)]
              active:scale-105 active:shadow-[0_0_30px_6px_rgba(176,59,102,0.3)]"
              data-aos="fade-left"
            >
              <div className="grid grid-cols-2 gap-4">
                
                {/* Feature Card */}
                <div
                  className="text-center transition-shadow duration-300 
                  hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)] 
                  active:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)]
                  rounded-lg p-6 bg-white cursor-pointer"
                  data-aos="zoom-in"
                >
                  <LuScissors className="w-14 h-14 text-[#FF4B8B] mx-auto mb-3" />
                  <p className="font-semibold text-[#FF4B8B]">
                    Minimally Invasive
                  </p>
                </div>

                <div
                  className="text-center transition-shadow duration-300 
                  hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)] 
                  active:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)]
                  rounded-lg p-6 bg-white cursor-pointer"
                  data-aos="zoom-in"
                >
                  <LuEye className="w-14 h-14 text-[#FF4B8B] mx-auto mb-3" />
                  <p className="font-semibold text-[#FF4B8B]">
                    Enhanced Vision
                  </p>
                </div>

                <div
                  className="text-center transition-shadow duration-300 
                  hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)] 
                  active:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)]
                  rounded-lg p-6 bg-white cursor-pointer"
                  data-aos="zoom-in"
                >
                  <LuHand className="w-14 h-14 text-[#FF4B8B] mx-auto mb-3" />
                  <p className="font-semibold text-[#FF4B8B]">
                    Precise Control
                  </p>
                </div>

                <div
                  className="text-center transition-shadow duration-300 
                  hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)] 
                  active:shadow-[0_0_15px_2px_rgba(255,197,211,0.6)]
                  rounded-lg p-6 bg-white cursor-pointer"
                  data-aos="zoom-in"
                >
                  <LuZap className="w-14 h-14 text-[#FF4B8B] mx-auto mb-3" />
                  <p className="font-semibold text-[#FF4B8B]">
                    Advanced Technology
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Button */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
            data-aos="fade-up" // Example fade-up animation for the button
          >
            Learn About the Procedure
          </button>
        </div>
      </div>
    </>
  );
};

export default RoboticGuide2;

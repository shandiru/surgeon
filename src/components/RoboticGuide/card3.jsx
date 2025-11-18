'use client';
import React, { useEffect } from 'react';
import { LuActivity, LuEye, LuHand, LuMonitor } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoboticGuide3 = ({ setShowCard, setActiveButton }) => {
  const primaryPink = "#FF4B8B";
  const lightPink = "rgb(255,197,211)";
  const softPinkBG = "#FFF5F8";

  const riskFactors = [
    "HPV infection, especially high-risk strains",
    "History of cervical cancer or cervical pre-cancer",
    "Older age (most cases occur after 60)",
    "Smoking",
    "Weakened immune system",
    "Previous pelvic radiation therapy",
    "VAIN (pre-cancerous vaginal changes)",
  ];

  useEffect(() => {
  AOS.init();
}, []);

  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FF4B8B]" data-aos="fade-down">
            The da Vinci Surgical System
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">

            {/* Card 1 */}
            <div
              className="bg-white text-[#FF4B8B] flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
               transition duration-300 transform
               hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
               active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuMonitor className="w-14 h-14 text-[#FF4B8B] mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Surgeon Console</h3>
              <p className="text-gray-700">
                Where the surgeon sits and controls the instruments with precision
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white text-[#FF4B8B] flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
               transition duration-300 transform
               hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
               active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuActivity className="w-14 h-14 text-[#FF4B8B] mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Patient-side Cart</h3>
              <p className="text-gray-700">
                Holds the robotic arms and surgical instruments
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white text-[#FF4B8B] flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
               transition duration-300 transform
               hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
               active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuEye className="w-14 h-14 text-[#FF4B8B] mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Vision System</h3>
              <p className="text-gray-700">
                Provides high-definition, 3D view of the operative field
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white text-[#FF4B8B] flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
               transition duration-300 transform
               hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
               active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuHand className="w-14 h-14 text-[#FF4B8B] mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Wristed Instruments</h3>
              <p className="text-gray-700">
                Greater range of motion than human hands for ultra-precise movements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(4);
            setActiveButton(3);
          }}
          className="inline-flex items-center justify-center gap-2 bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Learn About Screening
        </button>
      </div>
    </div>
  );
};

export default RoboticGuide3;

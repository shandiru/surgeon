"use client";
import React, { useEffect } from "react";
import { LuActivity, LuEye, LuHand, LuMonitor } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const RoboticGuide3 = ({ setShowCard, setActiveButton }) => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="space-y-10 pb-14">
      {/* CONTAINER */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-primary-pink"
            data-aos="fade-down"
          >
            The da Vinci Surgical System
          </h2>

          {/* RESPONSIVE GRID */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-4 
              gap-6 sm:gap-8 md:gap-10
            "
            data-aos="fade-up"
          >
            {/* CARD COMPONENT */}
            {[
              {
                icon: <LuMonitor />,
                title: "Surgeon Console",
                desc: "Where the surgeon sits and controls the instruments with precision",
              },
              {
                icon: <LuActivity />,
                title: "Patient-side Cart",
                desc: "Holds the robotic arms and surgical instruments",
              },
              {
                icon: <LuEye />,
                title: "Vision System",
                desc: "Provides high-definition, 3D view of the operative field",
              },
              {
                icon: <LuHand />,
                title: "Wristed Instruments",
                desc: "Greater range of motion than human hands for ultra-precise movements",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white text-primary-pink
                  flex flex-col items-center text-center 
                  gap-4 rounded-xl py-8 px-6 shadow-sm 
                  transition duration-300 transform
                  hover:scale-105 hover:-translate-y-2
                  hover:shadow-[0_8px_30px_rgba(176,59,102,0.35)]
                  active:scale-105 active:-translate-y-2
                  active:shadow-[0_8px_30px_rgba(176,59,102,0.35)]
                "
                data-aos="zoom-in"
              >
                <div className="text-primary-pink">
                  {React.cloneElement(item.icon, {
                    className:
                      "mx-auto text-primary-pink " + "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
                  })}
                </div>

                <h3 className="font-semibold text-lg sm:text-xl">{item.title}</h3>

                <p className="text-black text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="pt-4 flex justify-center">
        <button
          onClick={() => {
            setShowCard(4);
            setActiveButton(3);
          }}
          className="
            bg-[#FF4B8B] text-white font-medium 
            rounded-md 
            h-11 text-sm sm:text-base
            w-[90%] sm:w-[70%] md:w-[55%] lg:w-[40%] 
            transition-all 
            hover:bg-[#FF4B8B]/80 
            active:scale-95
          "
          data-aos="fade-up"
        >
          Learn About Screening
        </button>
      </div>
    </div>
  );
};

export default RoboticGuide3;

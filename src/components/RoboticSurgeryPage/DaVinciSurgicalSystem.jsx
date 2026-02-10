"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuMonitor, LuActivity, LuEye, LuHand } from "react-icons/lu";

export default function DaVinciSurgicalSystem() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12 text-primary-pink"
            data-aos="fade-down"
          >
            The da Vinci Surgical System
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            {/* Card 1 */}
            <div
              className="bg-white text-primary-pink flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuMonitor className="w-14 h-14 text-primary-pink mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Surgeon Console</h3>
              <p className="text-black">
                Where the surgeon sits and controls the instruments with
                precision
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white text-primary-pink flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuActivity className="w-14 h-14 text-primary-pink mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Patient-side Cart</h3>
              <p className="text-black">
                Holds the robotic arms and surgical instruments
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white text-primary-pink flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuEye className="w-14 h-14 text-primary-pink mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Vision System</h3>
              <p className="text-black">
                Provides high-definition, 3D view of the operative field
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white text-primary-pink flex flex-col gap-4 rounded-xl py-8 px-6 text-center shadow-sm 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
              data-aos="zoom-in"
            >
              <LuHand className="w-14 h-14 text-primary-pink mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Wristed Instruments</h3>
              <p className="text-black">
                Greater range of motion than human hands for ultra-precise
                movements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

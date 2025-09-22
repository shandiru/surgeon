// src/components/RoboticSurgeryHero.jsx
import React from "react";

export default function RoboticSurgeryHero() {
  const pink = "#FFC5D3"; // background pink

  return (
    <section
      style={{ backgroundColor: pink }}
      className="py-20 px-8 md:px-20" // ✅ Added horizontal padding
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center"> 
          {/* ✅ Reduced gap from 16 -> 10 */}
          
          {/* Left Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
              Robotic Surgery in Gynecology
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Advanced da Vinci Surgical System
            </p>
            <p className="text-lg leading-relaxed text-white/80 max-w-xl">
              Experience the future of minimally invasive gynecologic surgery
              with enhanced precision, control, and superior patient outcomes
              through cutting-edge robotic technology.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/robotic-surgery-animation.png" // <-- place your image in public/
              alt="Robotic surgery illustration"
              className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

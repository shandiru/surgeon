"use client";
import React from "react";
import {
  FiArrowUpRight,
  FiUser,
  FiHeart,
  FiActivity,
  FiEye,
  FiScissors,
} from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-178 text-center bg-gradient-to-b from-[#FFF1F5] via-[#FFD9E7] to-[#FF4B8B] px-6">
      {/* Top Button */}
      <div className="pt-36 flex justify-center">
        <button className="text-sm border border-[#FF4B8B]/40 text-[#FF4B8B] px-4 py-1 rounded-full hover:bg-[#FF4B8B]/10 transition">
          Get in touch
        </button>
      </div>

      {/* Headings */}
      <div className="mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Health Support from
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-1">
          Expert Doctors
        </h2>

        {/* Pink Button */}
        <div className="flex items-center justify-center py-10 group transition-all duration-300">
          {/* Text Button */}
          <button className="relative flex items-center bg-[#FF4B8B] hover:bg-[#E03E7C] text-white font-medium rounded-lg shadow-[0_0_20px_rgba(255,75,139,0.3)]">
            <span className="px-5 py-3 text-sm sm:text-base whitespace-nowrap">
              Book an Appointment
            </span>
          </button>

          {/* Icon Box */}
          <span className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg bg-[#E03E7C] ml-0.5">
            {/* Old arrow — moves up and fades out */}
            <ArrowUpRight className="absolute w-5 h-5 transform transition-all duration-300 group-hover:-translate-y-8 group-hover:translate-x-6 opacity-100" />

            {/* New arrow — comes from bottom-left corner */}
            <ArrowUpRight className="absolute w-5 h-5 transform translate-y-8 -translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative mx-auto mt-16 sm:mt-20 md:mt-24 w-[340px] sm:w-[420px] md:w-[520px] aspect-square flex items-center justify-center">
        {/* --- Half Circle Arcs (Top Only) --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3/4">
          <div className="absolute inset-0 border-t border-dashed border-white rounded-t-full"></div>
          <div className="absolute inset-[15%] border-t border-dashed border-white rounded-t-full"></div>
          <div className="absolute inset-[30%] border-t border-dashed border-white rounded-t-full"></div>
        </div>

        {/* --- Center Image --- */}
        <div className="w-[39%] h-20 rounded-full overflow-hidden z-10 border-4 border-white shadow-lg">
          <img
            src="https://framerusercontent.com/images/GJuFJCEqO2tySecQl8nfQQlVDk.png?scale-down-to=1024&width=2332&height=2332"
            alt="Doctors performing surgery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- Orbit Icons (Positioned on top half) --- */}
        <div className="absolute top-[7%] left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiActivity className="text-[#FF4B8B] text-lg" />
        </div>

        <div className="absolute top-[35%] left-[12%] bg-white p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiUser className="text-[#FF4B8B] text-lg" />
        </div>

        <div className="absolute top-[35%] right-[12%] bg-white p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiEye className="text-[#FF4B8B] text-lg" />
        </div>

        <div className="absolute top-[18%] left-[20%] bg-white p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiHeart className="text-[#FF4B8B] text-lg" />
        </div>

        <div className="absolute top-[18%] right-[20%] bg-white p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiScissors className="text-[#FF4B8B] text-lg" />
        </div>
      </div>
    </section>
  );
}

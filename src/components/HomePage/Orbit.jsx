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
    <section className="relative h-132 md:h-155 lg:h-175 text-center bg-gradient-to-b from-[#FFF1F5] via-[#FFD9E7] to-[#FF4B8B] px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Top Button */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36 flex justify-center">
        <button className="text-caption border border-primary-pink/40 text-primary-pink px-3 sm:px-4 py-1 rounded-full hover:bg-primary-pink/10 transition">
          Get in touch
        </button>
      </div>

      {/* Headings */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <h1 className="text-hero font-semibold text-gray-900">
          Get in touch with
        </h1>
        <h2 className="text-hero font-semibold text-gray-900 mt-1">Ketan</h2>

        {/* Pink Button */}
        <div className="flex items-center justify-center py-4 sm:py-6 md:py-7 lg:py-9 xl:py-10 group transition-all duration-300">
          {/* Text Button */}
          <a
            href="https://www.circlehealthgroup.co.uk/consultants/ketankumar-gajjar"
            target="_blank"
          >
            <button className="relative flex items-center bg-primary-pink hover:bg-[#E03E7C] text-white font-medium rounded-lg shadow-[0_0_20px_rgba(255,75,139,0.3)]">
              <span className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-button whitespace-nowrap">
                Book an Appointment
              </span>
            </button>
          </a>

          {/* Icon Box */}
          <span className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden rounded-lg bg-[#E03E7C] ml-0.5">
            <ArrowUpRight className="absolute w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 group-hover:-translate-y-8 group-hover:translate-x-6 opacity-100" />
            <ArrowUpRight className="absolute w-4 h-4 sm:w-5 sm:h-5 transform translate-y-8 -translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative mx-auto mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:-mt-4 w-[320px] xs:w-[380px] sm:w-[460px] md:w-[540px] lg:w-[620px] xl:w-[700px] aspect-square flex items-center justify-center">
        {/* --- Half Circle Arcs (Top Only) --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3/4">
          <div className="absolute inset-0 border-t border-dashed border-white rounded-t-full"></div>
          <div className="absolute inset-[13%] border-t border-dashed border-white rounded-t-full"></div>
        </div>

        {/* --- Center Image (Responsive & Closer to Orbit) --- */}
        <div
          className="
            w-[48%] sm:w-[50%] md:w-[42%] lg:w-[50%]
            aspect-square 
            -mt-5 sm:-mt-12 md:-mt-16 lg:-mt-25
            rounded-full overflow-hidden z-10 
         
          "
        >
          <img
            src="/orbit.png"
            alt="Doctors performing surgery"
            className="w-full lg:h-39 sm:h-30 object-cover"
          />
        </div>

        {/* --- Orbit Icons (Responsive) --- */}
        <div className="absolute top-[7%] left-1/2 -translate-x-1/2 bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiActivity className="text-primary-pink text-base sm:text-lg" />
        </div>

        <div className="absolute top-[35%] left-[8%] sm:left-[10%] md:left-[12%] bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiUser className="text-primary-pink text-base sm:text-lg" />
        </div>

        <div className="absolute top-[35%] right-[8%] sm:right-[10%] md:right-[12%] bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiEye className="text-primary-pink text-base sm:text-lg" />
        </div>

        <div className="absolute top-[18%] left-[16%] sm:left-[18%] md:left-[20%] bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiHeart className="text-primary-pink text-base sm:text-lg" />
        </div>

        <div className="absolute top-[18%] right-[16%] sm:right-[18%] md:right-[20%] bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-md border border-[#FFD6E2]">
          <FiScissors className="text-primary-pink text-base sm:text-lg" />
        </div>
      </div>
    </section>
  );
}

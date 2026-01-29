import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Container with rounded corners - prominent on left, slight on right */}
        <div className="rounded-[3rem] overflow-hidden bg-[#FDE7EB]">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
            {/* Horizontal Layout: Text Left, Images Right - Mobile: Images First */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image Grid - Appears First on Mobile */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="relative">
                    <img
                      src="/robotic-surgery-1.jpg"
                      alt="Robotic surgery team in operating room"
                      className="w-full h-32 md:h-48 lg:h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/robotic-surgery-2.jpg"
                      alt="Robotic surgical procedure"
                      className="w-full h-32 md:h-48 lg:h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/robotic-surgery-3.jpg"
                      alt="Medical team collaboration during surgery"
                      className="w-full h-32 md:h-48 lg:h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src="/robotic-surgery-4.jpg"
                      alt="Advanced robotic surgical technology"
                      className="w-full h-32 md:h-48 lg:h-56 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content - Appears Second on Mobile */}
              <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                <h1 className="text-hero md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Robotic Surgery:{" "}
                  <span className="text-primary-pink">Expertise, Experience & Innovation</span>
                </h1>
                <p className="text-body-large md:text-lg text-gray-700 leading-relaxed">
                  Explore the pros and cons of robotic surgery, discover Ketan's extensive
                  experience as a robotic surgeon, and learn about his current work as Medical
                  Director in the hospital and his teaching of robotic surgery techniques across
                  Europe.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                  <button className="cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FF4B8B] text-white font-semibold text-button hover:bg-[#E03E7C] transition-all duration-300 shadow-md hover:shadow-lg">
                    Let's Start
                  </button>
                  <button className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[#FF4B8B] text-primary-pink font-semibold text-button hover:bg-[#FF4B8B]/10 transition-all duration-300">
                    About Us
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

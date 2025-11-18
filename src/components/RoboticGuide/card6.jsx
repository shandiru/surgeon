'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles



const Vaginalcard6 = ({ setShowCard, setActiveButton }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <div >
      <div className="max-w-5xl mx-auto ">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image with Hover/Active */}
            <div className="flex justify-center" data-aos="zoom-in">
              <img
                src="/gynecology-future.png" // <-- put your image in /public
                alt="Future of gynecologic robotic surgery"
                className="w-full max-w-lg rounded-2xl border-4 border-white shadow-xl 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(176,59,102,0.3)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_10px_40px_rgba(176,59,102,0.3)]"
                loading="lazy"
              />
            </div>

            {/* Right Text */}
            <div className="text-center md:text-left text-[#FF4B8B] space-y-6" data-aos="fade-right">
              <h2 className="text-3xl font-bold">
                The Future of Gynecologic Surgery
              </h2>
              <p className="text-lg text-[#7a2f4f]">
                The da Vinci Surgical System represents a significant advancement in gynecologic surgery,
                offering a safer and more effective alternative to traditional methods in many cases.
              </p>
              <p className="text-lg text-[#7a2f4f]">
                As the technology continues to evolve and become more accessible, robotic surgery is expected
                to play an increasingly central role in women's health care.
              </p>

              {/* Highlight Box */}
              <div className="bg-[#FFF5F8] p-6 rounded-lg shadow-md transition duration-300 
              hover:shadow-[0_8px_30px_rgba(176,59,102,0.25)]
              active:shadow-[0_8px_30px_rgba(176,59,102,0.25)]" data-aos="fade-left">
                <p className="text-xl font-semibold mb-2 text-[#FF4B8B]">
                  Expert Care, Advanced Technology
                </p>
                <p className="text-[#7a2f4f]">
                  Gynecologists who specialize in robotic surgery are uniquely positioned to offer their
                  patients cutting-edge care with excellent outcomes, especially for complex and delicate procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 flex justify-center">
            <button
              className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              <Star className="w-4 h-4" />
              Complete Guide
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vaginalcard6;

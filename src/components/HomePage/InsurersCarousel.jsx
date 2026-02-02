"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Easy to edit: Just add/remove insurers here
const insurers = [
  { name: "Benenden Health", logo: "/insurers/benenden.jpg" },
  { name: "The PHC", logo: "/insurers/phc.png" },
  { name: "Aetna", logo: "/insurers/aetna.png" },
  { name: "Vitality", logo: "/insurers/vitality.png" },
  { name: "Aviva Health", logo: "/insurers/aviva.png" },
  { name: "AXA Health", logo: "/insurers/axa.jpg" },
  { name: "Allianz Worldwide Care", logo: "/insurers/allianz.png" },
  { name: "WPA", logo: "/insurers/wpa.jpg" },
  { name: "Saga Health Insurance", logo: "/insurers/saga.jpg" },
  { name: "Cigna", logo: "/insurers/cigna.png" },
  { name: "Healix Health Services", logo: "/insurers/healix.png" },
  { name: "Simply Health", logo: "/insurers/simplyhealth.png" },
  { name: "The Exeter", logo: "/insurers/exeter.png" },
  { name: "Freedom Health Insurance", logo: "/insurers/freedom.png" },
  { name: "Bupa Fee Assured", logo: "/insurers/bupa-fee-assured.png" },
  { name: "General and Medical", logo: "/insurers/general-medical.jpg" },
];

function InsurerCard({ insurer }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 mx-4 group relative">
      <div
        className="w-32 h-20 bg-white rounded-lg border border-primary-pink/10 flex items-center justify-center p-3
                   transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,75,139,0.2)] hover:border-primary-pink/30 hover:scale-105
                   overflow-hidden"
      >
        {/* Logo - visible by default, hidden on hover */}
        {!imageError ? (
          <img
            src={insurer.logo}
            alt={insurer.name}
            className="max-w-full max-h-full object-contain transition-all duration-300
                       group-hover:opacity-0 group-hover:scale-90"
            onError={() => setImageError(true)}
          />
        ) : null}

        {/* Name - hidden by default, visible on hover (or if image fails) */}
        <span
          className={`absolute inset-0 flex items-center justify-center text-caption text-gray-700 text-center font-medium px-2
                      transition-all duration-300
                      ${imageError ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          {insurer.name}
        </span>
      </div>
    </div>
  );
}

export default function InsurersCarousel() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-16 bg-[#FFF1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-section text-primary-pink mb-4">
            Accepted Insurance Providers
          </h2>
          <p className="text-body-large text-black/90">
            Mr. Ketan works with all major health insurance companies
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden py-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FFF1F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FFF1F5] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex animate-scroll">
            {/* First set */}
            {insurers.map((insurer, idx) => (
              <InsurerCard key={`first-${idx}`} insurer={insurer} />
            ))}
            {/* Duplicate set for seamless loop */}
            {insurers.map((insurer, idx) => (
              <InsurerCard key={`second-${idx}`} insurer={insurer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

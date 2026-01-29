"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GetInTouchSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const cards = [
    {
      title: "Nottingham University Hospital",
      subtitle: "NHS Trust Appointments",
      btn: "NHS Referral Required",
      icon: (
        <>
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
      variant: "outline",
    },
    {
      title: "Park Hospital",
      subtitle: "Private Consultations",
      btn: "Book Private Appointment",
      link: "https://www.circlehealthgroup.co.uk/online-booking?consultant=C6083162", // 🔗 Replace with real booking link
      icon: (
        <>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </>
      ),
      variant: "filled",
    },
    {
      title: "Spire Nottingham Hospital",
      subtitle: "Private Practice",
      btn: "Schedule Consultation",
      icon: (
        <>
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </>
      ),
      variant: "filled",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary-pink mb-4" data-aos="fade-up">
            Get in Touch
          </h2>
          <p className="text-body-large text-black" data-aos="fade-up" data-aos-delay="200">
            Schedule your consultation today
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col gap-6 rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-[0_0_25px_2px_rgba(255,75,139,0.2)] hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF1F5]">
                <svg
                  className="h-8 w-8 text-primary-pink"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-card-title mb-2 text-gray-900">{card.title}</h3>
              <p className="text-black/90 text-body-small mb-4">{card.subtitle}</p>

              {/* Button / Link */}
              {card.link ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-button transition-all w-full px-4 py-2 bg-primary-pink hover:bg-[#ff5d96] text-white"
                >
                  {card.btn}
                </a>
              ) : card.variant === "outline" ? (
                <button className="inline-flex items-center justify-center rounded-md border text-button transition-all w-full px-4 py-2 bg-transparent text-primary-pink border-primary-pink hover:bg-[#FFE3EC]">
                  {card.btn}
                </button>
              ) : (
                <button className="inline-flex items-center justify-center rounded-md text-button transition-all w-full px-4 py-2 bg-primary-pink hover:bg-[#ff5d96] text-white">
                  {card.btn}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
